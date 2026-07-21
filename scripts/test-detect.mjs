/**
 * Auto-detection regression test — makes sure the card recognises the real
 * entity names of current Zendure devices (Hyper 2000, SolarFlow 2400, …),
 * across both the legacy (camelCase → lower) and the current snake_case naming.
 *
 *   node scripts/test-detect.mjs
 */
import { pathToFileURL, fileURLToPath } from "node:url";
import { join as pjoin, dirname as pdirname } from "node:path";

const root = pjoin(pdirname(fileURLToPath(import.meta.url)), "..");

/* ---- browser-like globals ---- */
Object.defineProperty(globalThis, "window", { get: () => globalThis, configurable: true });
globalThis.self = globalThis;
globalThis.HTMLElement = class HTMLElement {};
const registry = new Map();
globalThis.customElements = {
  get: (name) => registry.get(name),
  define: (name, cls) => registry.set(name, cls),
};

await import(pathToFileURL(pjoin(root, "dist", "zendure-dashboard-card.js")).href);
const Card = registry.get("zendure-dashboard-card");

const mk = (state, attributes = {}) => ({ state: String(state), attributes });
const hassOf = (states) => ({ states });

let failed = 0;
function check(label, cond) {
  console.log(`${cond ? "PASS" : "FAIL"} — ${label}`);
  if (!cond) failed++;
}

/* Scenario A — SolarFlow 2400 AC, current snake_case naming */
const W = { unit_of_measurement: "W", device_class: "power" };
const solarflow = hassOf({
  "sensor.solarflow_2400_ac_output_pack_power": mk(500, W),
  "sensor.solarflow_2400_ac_input_pack_power": mk(0, W),
  "sensor.solarflow_2400_ac_electric_level": mk(62, { unit_of_measurement: "%", device_class: "battery" }),
  "sensor.solarflow_2400_ac_temperature": mk(24, { device_class: "temperature", unit_of_measurement: "°C" }),
  "select.solarflow_2400_ac_ac_mode": mk("output", { options: ["input", "output"] }),
  "number.solarflow_2400_ac_input_limit": mk(800, { min: 0, max: 1200 }),
  "number.solarflow_2400_ac_output_limit": mk(600, { min: 0, max: 800 }),
});
const a = Card.getStubConfig(solarflow);
check("SF2400 charge = output_pack_power", a.charge_entity === "sensor.solarflow_2400_ac_output_pack_power");
check("SF2400 discharge = input_pack_power", a.discharge_entity === "sensor.solarflow_2400_ac_input_pack_power");
check("SF2400 SoC detected", a.soc_entity === "sensor.solarflow_2400_ac_electric_level");
check("SF2400 temperature detected", a.temp_entity === "sensor.solarflow_2400_ac_temperature");
check("SF2400 AC mode selector detected", a.ac_mode_entity === "select.solarflow_2400_ac_ac_mode");
check("SF2400 charge limit detected", a.charge_limit_entity === "number.solarflow_2400_ac_input_limit");
check("SF2400 discharge limit detected", a.discharge_limit_entity === "number.solarflow_2400_ac_output_limit");

/* Scenario B — Hyper 2000, legacy naming (entity_ids are always lowercase) */
const hyper = hassOf({
  "sensor.hyper2000_electriclevel": mk(80, { unit_of_measurement: "%", device_class: "battery" }),
  "sensor.hyper2000_solarinputpower": mk(300, W),
  "sensor.hyper2000_outputpackpower": mk(120, W),
  "sensor.hyper2000_packinputpower": mk(0, W),
  "sensor.hyper2000_outputhomepower": mk(200, W),
  "sensor.hyper2000_gridinputpower": mk(0, W),
});
const b = Card.getStubConfig(hyper);
check("Hyper2000 SoC detected", b.soc_entity === "sensor.hyper2000_electriclevel");
check("Hyper2000 solar detected", b.solar_entity === "sensor.hyper2000_solarinputpower");
check("Hyper2000 charge detected", b.charge_entity === "sensor.hyper2000_outputpackpower");
check("Hyper2000 discharge detected", b.discharge_entity === "sensor.hyper2000_packinputpower");
check("Hyper2000 home detected", b.home_entity === "sensor.hyper2000_outputhomepower");
check("Hyper2000 grid detected", b.grid_entity === "sensor.hyper2000_gridinputpower");

/* Scenario C — Zendure Manager aggregate (global_soc + energy_storage) */
const manager = hassOf({
  "sensor.zendure_manager_global_soc": mk(45, { unit_of_measurement: "%", device_class: "battery" }),
  "sensor.zendure_manager_available_kwh": mk(2.1, { unit_of_measurement: "kWh", device_class: "energy_storage" }),
  "sensor.zendure_manager_total_kwh": mk(5.76, { unit_of_measurement: "kWh", device_class: "energy_storage" }),
  "sensor.zendure_manager_power": mk(-120, { unit_of_measurement: "W", device_class: "power" }),
  "number.zendure_manager_manual_power": mk(0, { unit_of_measurement: "W", device_class: "power", min: -12000, max: 12000 }),
  "select.zendure_manager_operation": mk("smart", { options: ["off", "manual", "smart", "smart_discharging", "smart_charging", "store_solar"] }),
});
const c = Card.getStubConfig(manager);
check("Manager SoC = global_soc", c.soc_entity === "sensor.zendure_manager_global_soc");
check("Manager capacity detected", c.capacity_entity === "sensor.zendure_manager_total_kwh");
check("Manager available detected", c.energy_entity === "sensor.zendure_manager_available_kwh");
check("Manager mode detected", c.mode_entity === "select.zendure_manager_operation");
check("Manager net power → charge_entity", c.charge_entity === "sensor.zendure_manager_power");
check("Manager manual power detected", c.manual_power_entity === "number.zendure_manager_manual_power");

/* Scenario D — full SolarFlow 2400 AC (official integration 1.4.3), plus an
   unrelated MQTT "Kit Zendure" that must NOT pollute the result */
const P = { unit_of_measurement: "W", device_class: "power" };
const E = { unit_of_measurement: "kWh", device_class: "energy" };
const sf = hassOf({
  "sensor.solarflow_2400_ac_electric_level": mk(10, { unit_of_measurement: "%", device_class: "battery" }),
  "sensor.solarflow_2400_ac_solar_input_power": mk(0, P),
  "sensor.solarflow_2400_ac_solar_power1": mk(0, P),
  "sensor.solarflow_2400_ac_output_pack_power": mk(107, P),
  "sensor.solarflow_2400_ac_pack_input_power": mk(0, P),
  "sensor.solarflow_2400_ac_output_home_power": mk(0, P),
  "sensor.solarflow_2400_ac_grid_input_power": mk(107, P),
  "sensor.solarflow_2400_ac_bat_in_out": mk(-107, P),
  "sensor.solarflow_2400_ac_hyper_tmp": mk(24, { unit_of_measurement: "°C", device_class: "temperature" }),
  "sensor.solarflow_2400_ac_total_kwh": mk(5.76, { unit_of_measurement: "kWh", device_class: "energy_storage" }),
  "sensor.solarflow_2400_ac_available_kwh": mk(0, { unit_of_measurement: "kWh", device_class: "energy_storage" }),
  "sensor.solarflow_2400_ac_zendure_decharge_journaliere": mk(0, E),
  "sensor.solarflow_2400_ac_zendure_decharge_mois": mk(88.8, E),
  "sensor.solarflow_2400_ac_zendure_decharge_annee": mk(670.4, E),
  "sensor.solarflow_2400_ac_aggr_discharge": mk(673.7, E),
  "number.solarflow_2400_ac_input_limit": mk(108, { min: 0, max: 2400, device_class: "power", unit_of_measurement: "W" }),
  "number.solarflow_2400_ac_output_limit": mk(0, { min: 0, max: 2400, device_class: "power", unit_of_measurement: "W" }),
  "number.solarflow_2400_ac_min_soc": mk(10, { min: 0, max: 100, device_class: "soc", unit_of_measurement: "%" }),
  "number.solarflow_2400_ac_soc_set": mk(100, { min: 0, max: 100, device_class: "soc", unit_of_measurement: "%" }),
  "select.solarflow_2400_ac_ac_mode": mk("input", { options: ["input", "output"] }),
  "select.solarflow_2400_ac_grid_off_mode": mk("off", { options: ["normal", "eco", "off"] }),
  "select.solarflow_2400_ac_fan_speed": mk("auto", { options: ["auto", "normal", "fast"] }),
  // Manager operation lives on a different device
  "select.zendure_manager_operation": mk("smart", { options: ["off", "manual", "smart"] }),
  // Unrelated MQTT device — must be ignored (no SoC / no matching role)
  "sensor.kit_zendure_power": mk(163.1, P),
  "sensor.kit_zendure_puissance": mk(163.1, P),
  "sensor.kit_zendure": mk(1701, E),
});
const d = Card.getStubConfig(sf);
check("SF full: charge = output_pack_power", d.charge_entity === "sensor.solarflow_2400_ac_output_pack_power");
check("SF full: discharge = pack_input_power", d.discharge_entity === "sensor.solarflow_2400_ac_pack_input_power");
check("SF full: SoC = electric_level", d.soc_entity === "sensor.solarflow_2400_ac_electric_level");
check("SF full: solar = solar_input_power", d.solar_entity === "sensor.solarflow_2400_ac_solar_input_power");
check("SF full: home + grid detected", d.home_entity && d.grid_entity);
check("SF full: capacity + available detected", d.capacity_entity && d.energy_entity);
check("SF full: AC mode selector detected", d.ac_mode_entity === "select.solarflow_2400_ac_ac_mode");
check("SF full: charge/discharge limits detected", d.charge_limit_entity && d.discharge_limit_entity);
check("SF full: reserve/ceiling SoC detected", d.min_soc_entity === "number.solarflow_2400_ac_min_soc" && d.max_soc_entity === "number.solarflow_2400_ac_soc_set");
check("SF full: discharge day/month/year detected", d.discharge_today_entity === "sensor.solarflow_2400_ac_zendure_decharge_journaliere" && d.discharge_month_entity && d.discharge_year_entity === "sensor.solarflow_2400_ac_zendure_decharge_annee");
check("SF full: lifetime total = aggr_discharge (not year)", d.discharge_total_entity === "sensor.solarflow_2400_ac_aggr_discharge" && d.discharge_year_entity !== "sensor.solarflow_2400_ac_aggr_discharge");
check("SF full: grid_off_mode NOT taken as operation mode", d.mode_entity !== "select.solarflow_2400_ac_grid_off_mode");
check("SF full: no kit_zendure entity leaked", JSON.stringify(d).indexOf("kit_zendure") === -1);

process.exit(failed ? 1 : 0);

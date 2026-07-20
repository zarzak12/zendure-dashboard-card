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
  "select.zendure_manager_operation": mk("smart", { options: ["off", "manual", "smart"] }),
});
const c = Card.getStubConfig(manager);
check("Manager SoC = global_soc", c.soc_entity === "sensor.zendure_manager_global_soc");
check("Manager capacity detected", c.capacity_entity === "sensor.zendure_manager_total_kwh");
check("Manager available detected", c.energy_entity === "sensor.zendure_manager_available_kwh");
check("Manager mode detected", c.mode_entity === "select.zendure_manager_operation");

process.exit(failed ? 1 : 0);

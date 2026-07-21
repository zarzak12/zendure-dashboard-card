/*!
 * Zendure Dashboard Card v1.5.3
 * https://github.com/zarzak12/zendure-dashboard-card — MIT License
 */
﻿/*!
 * Zendure Dashboard Card
 * A modern, configurable Lovelace card for the Zendure Home Assistant integration.
 * https://github.com/zarzak12/zendure-dashboard-card
 *
 * License: MIT
 */
(() => {
  "use strict";

  const CARD_VERSION = "1.5.3";
  const CARD_TAG = "zendure-dashboard-card";
  const EDITOR_TAG = "zendure-dashboard-card-editor";

  if (customElements.get(CARD_TAG)) return;

  /* ------------------------------------------------------------------ *
   *  Localization (FR / EN)                                            *
   * ------------------------------------------------------------------ */
  const LANGS = {
    en: {
      solar: "Solar",
      battery: "Battery",
      home: "Home",
      grid: "Grid",
      charging: "Charging",
      discharging: "Discharging",
      idle: "Standby",
      unavailable: "Unavailable",
      low_battery: "Low battery",
      stored: "stored",
      full_in: "Full in",
      autonomy: "Runtime",
      full: "Battery full",
      empty: "Battery empty",
      det_available: "Available",
      det_capacity: "Capacity",
      det_health: "Health",
      det_cycles: "Cycles",
      det_efficiency: "Efficiency",
      sav_title: "Savings",
      sav_today: "Today",
      sav_month: "This month",
      sav_year: "This year",
      sav_total: "Total",
      sav_co2: "CO₂ avoided",
      bal_title: "Energy balance",
      bal_selfcons: "Self-consumption",
      bal_selfsuff: "Self-sufficiency",
      flow_title: "Manual charge / discharge",
      flow_charge: "Force charge",
      flow_discharge: "Force discharge",
      flow_auto: "Auto (Smart)",
      flow_hint_charge: "Charging — set the max charge power",
      flow_hint_discharge: "Discharging — set the max output power",
      sec_strip: "Power readouts",
      sec_history: "24 h graph",
      sec_details: "Battery details",
      sec_balance: "Energy balance",
      sec_savings: "Savings & CO₂",
      sec_packs: "Battery packs",
      sec_flow: "Manual charge / discharge",
      sec_stats: "Statistics",
      sec_controls: "Controls",
      temperature: "Temperature",
      controls: "Controls",
      stats: "Statistics",
      mode: "Mode",
      charge_limit: "Max. charge power",
      discharge_limit: "Max. output power",
      manual_power: "Manual power",
      force_charge: "Charge",
      force_discharge: "Discharge",
      pause: "Pause",
      soc_min: "Reserve",
      soc_max: "Ceiling",
      packs: "Battery packs",
      pack: "Pack",
      history_24h: "Last 24 h",
      alert_low: "Low battery",
      alert_offline: "Device offline",
      alert_hot: "High temperature",
      alert_cold: "Charging below 0 °C",
      alert_fault: "Fault reported",
      not_configured: "Open the card editor to select your Zendure device.",
      // Known select option values (display only — raw value is sent to the service)
      opt_input: "Charge",
      opt_output: "Discharge",
      opt_smart: "Smart",
      opt_manual: "Manual",
      opt_off: "Off",
      // Editor
      ed_autofill: "Auto-fill from a detected device",
      ed_autofill_none: "No Zendure device detected — pick entities manually below",
      ed_pick: "— Select a device —",
      ed_name: "Card title",
      ed_sec_entities: "Entities",
      ed_sec_display: "Display",
      ed_sec_stats: "Statistics",
      ed_sec_controls: "Controls",
      ed_soc: "Battery level (SoC)",
      ed_solar: "Solar input power",
      ed_home: "Output to home",
      ed_grid: "Grid input power",
      ed_charge: "Battery charge power",
      ed_discharge: "Battery discharge power",
      ed_energy: "Stored energy (kWh)",
      ed_capacity: "Battery capacity (kWh)",
      ed_capacity_helper: "Fallback for the “full in / runtime” estimate when no capacity sensor exists.",
      ed_sec_battery: "Battery & health",
      ed_capacity_entity: "Total capacity sensor (kWh)",
      ed_nominal: "Nominal capacity (kWh)",
      ed_nominal_helper: "New/rated capacity — enables the health % (current capacity ÷ nominal).",
      ed_charge_total: "Lifetime charged (kWh)",
      ed_discharge_total: "Lifetime discharged (kWh)",
      ed_discharge_total_helper: "Lifetime discharged energy (e.g. …aggr_discharge) — enables the cycle count (÷ capacity), the efficiency and the Total savings tile.",
      ed_show_details: "Battery details (available, health, cycles…)",
      ed_sec_advanced: "Manual control & alerts",
      ed_manual_power: "Manual power (number)",
      ed_charge_max: "Max charge power sensor",
      ed_discharge_max: "Max output power sensor",
      ed_manual_mode_value: "Value of the manual mode",
      ed_manual_mode_helper: "The manual power slider shows only when the mode entity equals this value.",
      ed_invert_manual: "Invert manual power sign",
      ed_min_soc_entity: "Reserve SoC (number)",
      ed_max_soc_entity: "Max SoC (number)",
      ed_pack_entities: "Per-pack SoC sensors",
      ed_pack_helper: "One battery-level sensor per stacked pack — shown as mini gauges.",
      ed_show_alerts: "Alerts banner",
      ed_alert_temp_max: "High-temperature alert (°C)",
      ed_connectivity_entity: "Connectivity entity (online/offline)",
      ed_fault_entity: "Fault entity (on = problem)",
      ed_show_history: "24 h battery-level graph",
      ed_sec_savings: "Savings & tariff",
      ed_show_savings: "Savings & CO₂ block",
      ed_price: "Electricity price (€/kWh)",
      ed_price_entity: "Dynamic price sensor (€/kWh)",
      ed_price_helper: "Overrides the fixed price above when set.",
      ed_discharge_today: "Discharged today (kWh)",
      ed_discharge_month: "Discharged this month (kWh)",
      ed_discharge_year: "Discharged this year (kWh)",
      ed_savings_helper: "Savings = discharged energy × price. Use the counters that reset daily / monthly / yearly here (e.g. …decharge_journaliere / _mois / _annee). For the lifetime total, set “Lifetime discharged” in the Battery & health section (shown as the Total tile) — not here.",
      ed_co2_factor: "CO₂ factor (kg/kWh)",
      ed_sec_balance: "Energy balance",
      ed_show_balance: "Self-consumption / self-sufficiency block",
      ed_pv_today: "Solar produced today (kWh)",
      ed_home_today: "Home consumed today (kWh)",
      ed_grid_import_today: "Grid imported today (kWh)",
      ed_grid_export_today: "Grid exported today (kWh)",
      ed_sec_flow: "Manual charge / discharge",
      ed_show_manual_flow: "Guided charge/discharge panel",
      ed_ac_mode_entity: "AC mode selector (charge / discharge)",
      ed_manager_auto: "Return-to-auto value",
      ed_section_order: "Section order",
      ed_section_order_info: "Reorder the sections shown below the battery with ▲ / ▼.",
      ed_flow_helper: "One-tap flow: sets the mode entity (manager) to Off, the AC selector to charge/discharge, and reveals the matching power-limit slider. “Auto” returns the manager to the value above.",
      ed_temp: "Temperature",
      ed_show_flow: "Power readouts (solar / home / grid)",
      ed_show_stats: "Statistics row",
      ed_show_controls: "Control section",
      ed_compact: "Compact mode",
      ed_low_soc: "Low battery threshold",
      ed_stats_entities: "Extra sensors to display as chips",
      ed_mode: "Operation mode (select entity)",
      ed_selects: "Extra mode selectors (select entities)",
      ed_charge_limit: "Charge limit (number entity)",
      ed_discharge_limit: "Discharge limit (number entity)",
      ed_switches: "Switches to display as toggles",
      ed_soc_helper: "Usually the sensor ending in “electricLevel”.",
      ed_charge_helper: "Power flowing INTO the battery (outputPackPower).",
      ed_discharge_helper: "Power flowing OUT of the battery (packInputPower).",
    },
    fr: {
      solar: "Solaire",
      battery: "Batterie",
      home: "Maison",
      grid: "Réseau",
      charging: "En charge",
      discharging: "Décharge",
      idle: "Veille",
      unavailable: "Indisponible",
      low_battery: "Batterie faible",
      stored: "stockés",
      full_in: "Pleine dans",
      autonomy: "Autonomie",
      full: "Batterie pleine",
      empty: "Batterie vide",
      det_available: "Disponible",
      det_capacity: "Capacité",
      det_health: "Santé",
      det_cycles: "Cycles",
      det_efficiency: "Rendement",
      sav_title: "Économies",
      sav_today: "Aujourd'hui",
      sav_month: "Ce mois",
      sav_year: "Cette année",
      sav_total: "Total",
      sav_co2: "CO₂ évité",
      bal_title: "Bilan énergie",
      bal_selfcons: "Autoconsommation",
      bal_selfsuff: "Autonomie",
      flow_title: "Charge / décharge manuelle",
      flow_charge: "Forcer la charge",
      flow_discharge: "Forcer la décharge",
      flow_auto: "Auto (Smart)",
      flow_hint_charge: "En charge — règle la puissance de charge max",
      flow_hint_discharge: "En décharge — règle la puissance de sortie max",
      sec_strip: "Puissances",
      sec_history: "Graphe 24 h",
      sec_details: "Détails batterie",
      sec_balance: "Bilan énergie",
      sec_savings: "Économies & CO₂",
      sec_packs: "Modules batterie",
      sec_flow: "Charge / décharge manuelle",
      sec_stats: "Statistiques",
      sec_controls: "Contrôles",
      temperature: "Température",
      controls: "Contrôles",
      stats: "Statistiques",
      mode: "Mode",
      charge_limit: "Puissance de charge max.",
      discharge_limit: "Puissance de sortie max.",
      manual_power: "Puissance manuelle",
      force_charge: "Charge",
      force_discharge: "Décharge",
      pause: "Pause",
      soc_min: "Réserve",
      soc_max: "Plafond",
      packs: "Modules batterie",
      pack: "Pack",
      history_24h: "Dernières 24 h",
      alert_low: "Batterie faible",
      alert_offline: "Appareil hors-ligne",
      alert_hot: "Température élevée",
      alert_cold: "Charge sous 0 °C",
      alert_fault: "Défaut signalé",
      not_configured: "Ouvrez l'éditeur de la carte pour sélectionner votre appareil Zendure.",
      // Valeurs d'options connues (affichage uniquement — la valeur brute est envoyée au service)
      opt_input: "Charge",
      opt_output: "Décharge",
      opt_smart: "Intelligent",
      opt_manual: "Manuel",
      opt_off: "Arrêt",
      // Editor
      ed_autofill: "Remplir automatiquement depuis un appareil détecté",
      ed_autofill_none: "Aucun appareil Zendure détecté — choisissez les entités manuellement ci-dessous",
      ed_pick: "— Choisir un appareil —",
      ed_name: "Titre de la carte",
      ed_sec_entities: "Entités",
      ed_sec_display: "Affichage",
      ed_sec_stats: "Statistiques",
      ed_sec_controls: "Contrôles",
      ed_soc: "Niveau de batterie (SoC)",
      ed_solar: "Production solaire",
      ed_home: "Sortie vers la maison",
      ed_grid: "Entrée réseau",
      ed_charge: "Puissance de charge batterie",
      ed_discharge: "Puissance de décharge batterie",
      ed_energy: "Énergie stockée (kWh)",
      ed_capacity: "Capacité batterie (kWh)",
      ed_capacity_helper: "Repli pour l'estimation « pleine dans / autonomie » sans capteur de capacité.",
      ed_sec_battery: "Batterie & santé",
      ed_capacity_entity: "Capteur de capacité totale (kWh)",
      ed_nominal: "Capacité nominale (kWh)",
      ed_nominal_helper: "Capacité neuve — active le % de santé (capacité actuelle ÷ nominale).",
      ed_charge_total: "Charge cumulée (kWh)",
      ed_discharge_total: "Décharge cumulée (kWh)",
      ed_discharge_total_helper: "Énergie déchargée cumulée à vie (ex. …aggr_discharge) — active le nombre de cycles (÷ capacité), le rendement et la tuile Économies « Total ».",
      ed_show_details: "Détails batterie (disponible, santé, cycles…)",
      ed_sec_advanced: "Pilotage manuel & alertes",
      ed_manual_power: "Puissance manuelle (number)",
      ed_charge_max: "Capteur puissance de charge max",
      ed_discharge_max: "Capteur puissance de sortie max",
      ed_manual_mode_value: "Valeur du mode manuel",
      ed_manual_mode_helper: "Le curseur de puissance manuelle n'apparaît que quand le mode vaut cette valeur.",
      ed_invert_manual: "Inverser le signe de la puissance",
      ed_min_soc_entity: "SoC de réserve (number)",
      ed_max_soc_entity: "SoC maximum (number)",
      ed_pack_entities: "Capteurs SoC par pack",
      ed_pack_helper: "Un capteur de niveau par pack empilé — affiché en mini-jauges.",
      ed_show_alerts: "Bandeau d'alertes",
      ed_alert_temp_max: "Alerte température haute (°C)",
      ed_connectivity_entity: "Entité de connectivité (en ligne/hors-ligne)",
      ed_fault_entity: "Entité de défaut (on = problème)",
      ed_show_history: "Graphe de niveau 24 h",
      ed_sec_savings: "Économies & tarif",
      ed_show_savings: "Bloc Économies & CO₂",
      ed_price: "Prix de l'électricité (€/kWh)",
      ed_price_entity: "Capteur de prix dynamique (€/kWh)",
      ed_price_helper: "Remplace le prix fixe ci-dessus s'il est renseigné.",
      ed_discharge_today: "Déchargé aujourd'hui (kWh)",
      ed_discharge_month: "Déchargé ce mois (kWh)",
      ed_discharge_year: "Déchargé cette année (kWh)",
      ed_savings_helper: "Économies = énergie déchargée × prix. Utilisez ici les compteurs qui se remettent à zéro jour / mois / année (ex. …decharge_journaliere / _mois / _annee). Pour le cumul à vie, renseignez « Décharge cumulée » dans la section Batterie & santé (affiché en tuile Total) — pas ici.",
      ed_co2_factor: "Facteur CO₂ (kg/kWh)",
      ed_sec_balance: "Bilan énergie",
      ed_show_balance: "Bloc autoconsommation / autonomie",
      ed_pv_today: "Solaire produit aujourd'hui (kWh)",
      ed_home_today: "Maison consommé aujourd'hui (kWh)",
      ed_grid_import_today: "Réseau importé aujourd'hui (kWh)",
      ed_grid_export_today: "Réseau exporté aujourd'hui (kWh)",
      ed_sec_flow: "Charge / décharge manuelle",
      ed_show_manual_flow: "Panneau de charge/décharge guidé",
      ed_ac_mode_entity: "Sélecteur mode AC (charge / décharge)",
      ed_manager_auto: "Valeur du retour en auto",
      ed_section_order: "Ordre des sections",
      ed_section_order_info: "Réorganisez les sections affichées sous la batterie avec ▲ / ▼.",
      ed_flow_helper: "Séquence en un clic : met l'entité Mode (manager) sur Arrêt, le sélecteur AC sur charge/décharge, et affiche le curseur de puissance limite correspondant. « Auto » remet le manager sur la valeur ci-dessus.",
      ed_temp: "Température",
      ed_show_flow: "Puissances (solaire / maison / réseau)",
      ed_show_stats: "Ligne de statistiques",
      ed_show_controls: "Section de contrôle",
      ed_compact: "Mode compact",
      ed_low_soc: "Seuil de batterie faible",
      ed_stats_entities: "Capteurs supplémentaires à afficher",
      ed_mode: "Mode de fonctionnement (entité select)",
      ed_selects: "Sélecteurs de mode supplémentaires",
      ed_charge_limit: "Limite de charge (entité number)",
      ed_discharge_limit: "Limite de décharge (entité number)",
      ed_switches: "Interrupteurs à afficher",
      ed_soc_helper: "Généralement le capteur se terminant par « electricLevel ».",
      ed_charge_helper: "Puissance qui ENTRE dans la batterie (outputPackPower).",
      ed_discharge_helper: "Puissance qui SORT de la batterie (packInputPower).",
    },
  };

  const langOf = (hass) =>
    ((hass && (hass.locale?.language || hass.language)) || "en").slice(0, 2).toLowerCase();

  const t = (hass, key) => (LANGS[langOf(hass)] || LANGS.en)[key] || LANGS.en[key] || key;

  /* ------------------------------------------------------------------ *
   *  Inline MDI icons (24x24 path data)                                *
   * ------------------------------------------------------------------ */
  const ICONS = {
    sun: "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z",
    home: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",
    tower:
      "M8.28,5.45L6.5,4.55L7.76,2H16.23L17.5,4.55L15.72,5.44L15,4H9L8.28,5.45M18.62,8H14.09L13.3,5H10.7L9.91,8H5.38L4.1,10.55L5.89,11.44L6.62,10H17.38L18.1,11.45L19.89,10.56L18.62,8M17.77,22H15.7L15.46,21.1L12,15.9L8.53,21.1L8.3,22H6.23L9.12,11H11.19L10.83,12.35L12,14.1L13.16,12.35L12.81,11H14.88L17.77,22M11.4,15L10.5,13.65L9.32,18.13L11.4,15M14.68,18.12L13.5,13.64L12.6,15L14.68,18.12Z",
    battery:
      "M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z",
    bolt: "M11,15H6L13,1V9H18L11,23V15Z",
    thermo:
      "M15,13V5A3,3 0 0,0 9,5V13A5,5 0 1,0 15,13M12,4A1,1 0 0,1 13,5V8H11V5A1,1 0 0,1 12,4Z",
    down: "M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z",
    up: "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",
    alert: "M13,14H11V9H13M13,18H11V16H13M1,21H23L12,2L1,21Z",
    clock:
      "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z",
    flash: "M7,2V13H10V22L17,10H13L17,2H7Z",
  };

  const svgIcon = (name, cls = "") =>
    `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[name]}"/></svg>`;

  /* ------------------------------------------------------------------ *
   *  Zendure device auto-detection                                     *
   * ------------------------------------------------------------------ */
  // Normalize an id by dropping separators/case so snake_case (output_pack_power)
  // and camelCase (outputPackPower) both compare equal.
  const norm = (s) => String(s).replace(/[_\s-]+/g, "").toLowerCase();

  // role → normalized suffix variants (covers both the legacy and the current
  // official Zendure-HA naming for Hyper 2000 / SolarFlow / Hub / Ace…).
  const ROLE_SUFFIXES = {
    soc_entity: ["electriclevel", "globalsoc", "batterylevel", "stateofcharge"],
    solar_entity: ["solarinputpower", "solarpower", "pvinputpower", "pvpower"],
    charge_entity: ["outputpackpower", "packoutputpower"],
    discharge_entity: ["packinputpower", "inputpackpower"],
    home_entity: ["outputhomepower", "homeoutputpower"],
    grid_entity: ["gridinputpower", "gridpower"],
  };

  function prettify(id) {
    return String(id)
      .replace(/[_-]+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .trim();
  }

  /** Original device prefix from a sample object_id and its normalized prefix. */
  function reconstructPrefix(sampleObj, prefixN) {
    let count = 0;
    let i = 0;
    for (; i < sampleObj.length && count < prefixN.length; i++) {
      if (!/[_\s-]/.test(sampleObj[i])) count++;
    }
    return sampleObj.slice(0, i).replace(/[_-]+$/, "");
  }

  function fmtDuration(hrs) {
    if (!Number.isFinite(hrs) || hrs <= 0) return null;
    if (hrs >= 48) return "> 48 h";
    const totalMin = Math.round(hrs * 60);
    const hh = Math.floor(totalMin / 60);
    const mm = totalMin % 60;
    if (hh <= 0) return `${mm} min`;
    return mm ? `${hh} h ${String(mm).padStart(2, "0")}` : `${hh} h`;
  }

  function detectDevices(hass) {
    const devices = {};
    if (!hass || !hass.states) return devices;

    // Pass 1 — match core power / SoC sensors, group by normalized device prefix.
    for (const eid of Object.keys(hass.states)) {
      const dot = eid.indexOf(".");
      if (eid.slice(0, dot) !== "sensor") continue;
      const obj = eid.slice(dot + 1);
      const objN = norm(obj);
      for (const [role, sufs] of Object.entries(ROLE_SUFFIXES)) {
        const suf = sufs.find((s) => objN.endsWith(s));
        if (!suf) continue;
        const prefixN = objN.slice(0, objN.length - suf.length);
        if (!prefixN) break;
        if (!devices[prefixN]) devices[prefixN] = { __prefix: prefixN, __sample: obj };
        if (!devices[prefixN][role]) devices[prefixN][role] = eid;
        break; // one role per sensor
      }
    }

    for (const p of Object.keys(devices)) {
      const d = devices[p];
      const matched = Object.keys(d).filter((k) => k.endsWith("_entity"));
      const credible =
        d.soc_entity || matched.length >= 2 || (d.charge_entity && d.discharge_entity);
      if (!credible) {
        delete devices[p];
        continue;
      }

      // Pass 2 — secondary roles among the same device (normalized prefix match).
      for (const eid of Object.keys(hass.states)) {
        const dot = eid.indexOf(".");
        const domain = eid.slice(0, dot);
        const obj = eid.slice(dot + 1);
        if (!norm(obj).startsWith(p)) continue;
        const st = hass.states[eid];
        const a = (st && st.attributes) || {};
        const unit = a.unit_of_measurement || "";
        if (domain === "sensor") {
          if (!d.temp_entity && a.device_class === "temperature") d.temp_entity = eid;
          if (!d.soc_entity && a.device_class === "battery" && /%/.test(unit)) d.soc_entity = eid;
          if (a.device_class === "energy_storage" || /kwh/i.test(unit)) {
            if (!d.capacity_entity && /(total|capacity|capacite|capacité)/i.test(obj))
              d.capacity_entity = eid;
            if (!d.energy_entity && /(avail|remain|dispo)/i.test(obj)) d.energy_entity = eid;
          }
          // Cumulative discharge counters → savings tiles (day / month / year).
          if (a.device_class === "energy" && /(decharge|discharge)/i.test(obj)) {
            if (!d.discharge_today_entity && /journ|daily|today/i.test(obj)) d.discharge_today_entity = eid;
            else if (!d.discharge_month_entity && /mois|month/i.test(obj)) d.discharge_month_entity = eid;
            else if (!d.discharge_year_entity && /annee|année|year/i.test(obj)) d.discharge_year_entity = eid;
            else if (!d.discharge_total_entity && /total|aggr|cumul/i.test(obj)) d.discharge_total_entity = eid;
          }
          if (
            a.device_class === "energy" &&
            /charge/i.test(obj) &&
            !/(decharge|discharge)/i.test(obj) &&
            !d.charge_total_entity &&
            /total|aggr|annee|année|year|cumul/i.test(obj)
          )
            d.charge_total_entity = eid;
          // Single signed net battery power (e.g. Manager "Power") when there is no
          // split charge/discharge — used as charge_entity (net = charge, sign via invert).
          if (
            !d.charge_entity &&
            !d.discharge_entity &&
            a.device_class === "power" &&
            !/manual|manuel|solar|pv|home|maison|grid|r[eé]seau|pack|input|output|sortie|entr[eé]e/i.test(obj)
          ) {
            d.charge_entity = eid;
          }
        } else if (domain === "select") {
          const opts = (a.options || []).map((o) => String(o).toLowerCase());
          const hasIn = opts.includes("input") || opts.includes("charge");
          const hasOut = opts.includes("output") || opts.includes("discharge");
          // Only a real operation-mode select (off/manual/smart…) — not grid_off_mode,
          // fan mode, connection mode, tariff selects, etc.
          const isOperation =
            opts.includes("smart") ||
            opts.includes("manual") ||
            /(^|_)operation(_|$)|operating/i.test(obj);
          if (hasIn && hasOut) {
            if (!d.ac_mode_entity) d.ac_mode_entity = eid;
          } else if (isOperation) {
            if (!d.mode_entity) d.mode_entity = eid;
            else {
              if (!d.select_entities) d.select_entities = [];
              if (!d.select_entities.includes(eid)) d.select_entities.push(eid);
            }
          }
        } else if (domain === "number") {
          const isSoc = a.device_class === "soc" || /soc/i.test(obj);
          if (!d.charge_limit_entity && /(input|charge).*limit|limit.*(input|charge)/i.test(obj))
            d.charge_limit_entity = eid;
          if (
            !d.discharge_limit_entity &&
            /(output|discharge).*limit|limit.*(output|discharge)/i.test(obj)
          )
            d.discharge_limit_entity = eid;
          if (!d.min_soc_entity && isSoc && /min|reserve|reserv/i.test(obj)) d.min_soc_entity = eid;
          if (!d.max_soc_entity && isSoc && /max|set|plafond|ceiling/i.test(obj)) d.max_soc_entity = eid;
          if (!d.manual_power_entity && a.device_class === "power" && /manual|manuel/i.test(obj))
            d.manual_power_entity = eid;
        }
      }

      // Friendly device name (device registry when available, else the prefix).
      let name = prettify(reconstructPrefix(d.__sample || p, p));
      try {
        const anyEid = d.soc_entity || d.charge_entity || d.solar_entity || d.discharge_entity;
        const reg = hass.entities && hass.entities[anyEid];
        const dev = reg && hass.devices && hass.devices[reg.device_id];
        if (dev && dev.name) name = dev.name;
      } catch (_e) {
        /* registry not available — keep the prettified prefix */
      }
      d.name = name;
    }
    return devices;
  }

  /* ------------------------------------------------------------------ *
   *  Helpers                                                           *
   * ------------------------------------------------------------------ */
  const num = (hass, eid) => {
    if (!eid || !hass.states[eid]) return null;
    const v = parseFloat(hass.states[eid].state);
    return Number.isFinite(v) ? v : null;
  };

  function fmtPower(hass, watts) {
    if (watts === null || watts === undefined) return "—";
    const lang = langOf(hass) === "fr" ? "fr-FR" : "en-US";
    const abs = Math.abs(watts);
    if (abs >= 1000) {
      return `${new Intl.NumberFormat(lang, { maximumFractionDigits: 2 }).format(watts / 1000)} kW`;
    }
    return `${new Intl.NumberFormat(lang, { maximumFractionDigits: 0 }).format(watts)} W`;
  }

  function fmtMoney(hass, value) {
    if (value === null || value === undefined || !Number.isFinite(value)) return "—";
    const lang = langOf(hass) === "fr" ? "fr-FR" : "en-US";
    const digits = Math.abs(value) >= 100 ? 0 : Math.abs(value) >= 10 ? 1 : 2;
    return `${new Intl.NumberFormat(lang, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value)} €`;
  }

  function fmtCo2(hass, kg) {
    if (kg === null || kg === undefined || !Number.isFinite(kg)) return "—";
    const lang = langOf(hass) === "fr" ? "fr-FR" : "en-US";
    if (kg >= 1000) {
      return `${new Intl.NumberFormat(lang, { maximumFractionDigits: 2 }).format(kg / 1000)} t`;
    }
    return `${new Intl.NumberFormat(lang, { maximumFractionDigits: 0 }).format(kg)} kg`;
  }

  function fmtState(hass, eid) {
    const st = hass.states[eid];
    if (!st) return "—";
    if (st.state === "unavailable" || st.state === "unknown") return "—";
    try {
      if (hass.formatEntityState) return hass.formatEntityState(st);
    } catch (_e) {
      /* fall through */
    }
    const unit = st.attributes.unit_of_measurement;
    return unit ? `${st.state} ${unit}` : st.state;
  }

  const fire = (el, type, detail) =>
    el.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));

  const moreInfo = (el, entityId) => entityId && fire(el, "hass-more-info", { entityId });

  /* Reorderable sections rendered below the battery hero (default order). */
  const SECTIONS = [
    "strip",
    "history",
    "details",
    "balance",
    "savings",
    "packs",
    "flow",
    "stats",
    "controls",
  ];

  const DEFAULTS = {
    name: "",
    soc_entity: "",
    solar_entity: "",
    home_entity: "",
    grid_entity: "",
    charge_entity: "",
    discharge_entity: "",
    energy_entity: "",
    capacity_entity: "",
    charge_total_entity: "",
    discharge_total_entity: "",
    temp_entity: "",
    mode_entity: "",
    select_entities: [],
    charge_limit_entity: "",
    discharge_limit_entity: "",
    manual_power_entity: "",
    charge_max_entity: "",
    discharge_max_entity: "",
    manual_mode_value: "manual",
    invert_manual: false,
    ac_mode_entity: "",
    manager_auto_value: "smart",
    show_manual_flow: false,
    section_order: [...SECTIONS],
    min_soc_entity: "",
    max_soc_entity: "",
    pack_entities: [],
    connectivity_entity: "",
    fault_entity: "",
    stats_entities: [],
    switch_entities: [],
    discharge_today_entity: "",
    discharge_month_entity: "",
    discharge_year_entity: "",
    price_entity: "",
    electricity_price: 0.25,
    co2_factor: 0.4,
    pv_today_entity: "",
    home_today_entity: "",
    grid_import_today_entity: "",
    grid_export_today_entity: "",
    show_flow: true,
    show_stats: true,
    show_details: true,
    show_controls: true,
    show_alerts: true,
    show_history: true,
    show_savings: true,
    show_balance: true,
    compact: false,
    invert_battery: false,
    low_soc: 15,
    flow_threshold: 10,
    capacity: 0,
    nominal_capacity: 0,
    reserve_soc: 0,
    alert_temp_max: 50,
    history_hours: 24,
  };

  /* ------------------------------------------------------------------ *
   *  Card element                                                      *
   * ------------------------------------------------------------------ */
  class ZendureDashboardCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._built = false;
      this._els = {};
      this._lastStates = {};
      this._sliderDrag = {};
      this._uid = Math.random().toString(36).slice(2, 8);
    }

    static getConfigElement() {
      return document.createElement(EDITOR_TAG);
    }

    static getStubConfig(hass) {
      const devices = detectDevices(hass);
      const first = Object.values(devices)[0];
      if (!first) return { ...DEFAULTS };
      const cfg = { ...DEFAULTS };
      for (const k of Object.keys(first)) {
        if (k.startsWith("__")) continue;
        cfg[k] = first[k];
      }
      return cfg;
    }

    setConfig(config) {
      if (!config || typeof config !== "object") {
        throw new Error("Invalid configuration");
      }
      this._config = { ...DEFAULTS, ...config };
      this._built = false;
      if (this._hass) this._build();
    }

    set hass(hass) {
      const old = this._hass;
      this._hass = hass;
      if (!this._config) return;
      if (!this._built) {
        this._build();
        return;
      }
      // Skip work when none of our entities changed
      if (old && !this._entitiesChanged(old, hass)) return;
      this._update();
    }

    get hass() {
      return this._hass;
    }

    _allEntities() {
      const c = this._config;
      return [
        c.soc_entity, c.solar_entity, c.home_entity, c.grid_entity,
        c.charge_entity, c.discharge_entity, c.energy_entity, c.temp_entity,
        c.capacity_entity, c.charge_total_entity, c.discharge_total_entity,
        c.mode_entity, c.charge_limit_entity, c.discharge_limit_entity,
        c.manual_power_entity, c.charge_max_entity, c.discharge_max_entity,
        c.min_soc_entity, c.max_soc_entity, c.connectivity_entity, c.fault_entity,
        c.discharge_today_entity, c.discharge_month_entity, c.discharge_year_entity,
        c.price_entity, c.pv_today_entity, c.home_today_entity,
        c.grid_import_today_entity, c.grid_export_today_entity, c.ac_mode_entity,
        ...(c.select_entities || []),
        ...(c.pack_entities || []),
        ...(c.stats_entities || []),
        ...(c.switch_entities || []),
      ].filter(Boolean);
    }

    _entitiesChanged(oldHass, newHass) {
      return this._allEntities().some(
        (eid) => oldHass.states[eid] !== newHass.states[eid]
      );
    }

    /* ------------------------------ build ------------------------------ */
    _build() {
      const c = this._config;
      const h = this._hass;
      this.toggleAttribute("dark", !!(h && h.themes && h.themes.darkMode));

      const configured = this._allEntities().length > 0;
      const sections =
        configured && !c.compact
          ? this._orderedKeys().map((k) => this._sectionHtml(k)).join("")
          : "";

      this.shadowRoot.innerHTML = `
        <style>${this._styles()}</style>
        <ha-card>
          <div class="card ${c.compact ? "compact" : ""}">
            ${this._headerHtml()}
            ${configured && c.show_alerts ? `<div class="alerts" id="alerts"></div>` : ""}
            ${
              !configured
                ? `<div class="empty">${svgIcon("battery")}<p>${t(h, "not_configured")}</p></div>`
                : c.compact
                  ? this._compactHtml()
                  : this._heroHtml()
            }
            ${sections}
          </div>
        </ha-card>
      `;

      this._cacheRefs();
      this._bindEvents();
      this._built = true;
      this._lastStates = {};
      this._update();
      this._startHistory();
      this._startWaves();
    }

    /** Configured section order, normalized: known keys only, any missing appended. */
    _orderedKeys() {
      const saved = Array.isArray(this._config.section_order) ? this._config.section_order : [];
      const seen = new Set();
      const out = [];
      for (const k of saved) {
        if (SECTIONS.includes(k) && !seen.has(k)) {
          seen.add(k);
          out.push(k);
        }
      }
      for (const k of SECTIONS) if (!seen.has(k)) out.push(k);
      return out;
    }

    /** HTML for a section key (respects show_* gates; returns "" when hidden). */
    _sectionHtml(key) {
      const c = this._config;
      switch (key) {
        case "strip":
          return c.show_flow && (c.solar_entity || c.home_entity || c.grid_entity)
            ? this._stripHtml()
            : "";
        case "history":
          return c.show_history && c.soc_entity ? this._historyHtml() : "";
        case "details":
          return c.show_details ? this._detailsHtml() : "";
        case "balance":
          return c.show_balance ? this._balanceHtml() : "";
        case "savings":
          return c.show_savings ? this._savingsHtml() : "";
        case "packs":
          return (c.pack_entities || []).length ? this._packsHtml() : "";
        case "flow":
          return c.show_manual_flow ? this._flowHtml() : "";
        case "stats":
          return c.show_stats ? this._statsHtml() : "";
        case "controls":
          return c.show_controls ? this._controlsHtml() : "";
        default:
          return "";
      }
    }

    _headerHtml() {
      return `
        <header>
          <div class="title" id="title"></div>
          <div class="pill" id="status" role="status">
            <span class="dot"></span><span class="pill-txt"></span>
          </div>
        </header>`;
    }

    /**
     * The "battery vessel": a rounded glass cell whose liquid fills to the SoC.
     * The surface is three layered waves, each sampled into points that
     * oscillate over time (phase-offset along the width) with a slow amplitude
     * "breathing" — an organic, non-triangular water surface. Driven by a small
     * requestAnimationFrame loop (no external dependency).
     */
    _vesselHtml() {
      return `
        <div class="vessel" aria-hidden="true">
          <div class="v-cap"></div>
          <div class="v-cell">
            <svg class="v-svg" id="v-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path class="v-wv v-wv-c" id="v-wv-2"/>
              <path class="v-wv v-wv-b" id="v-wv-1"/>
              <path class="v-wv v-wv-a" id="v-wv-0"/>
            </svg>
            <div class="v-marks" id="v-marks"></div>
            <div class="v-shine"></div>
          </div>
        </div>`;
    }

    _heroHtml() {
      const h = this._hass;
      return `
        <section class="hero" id="hero" role="button" tabindex="0"
                 aria-label="${t(h, "battery")}">
          ${this._vesselHtml()}
          <div class="hero-info">
            <div class="soc" id="soc">—</div>
            <div class="batt-power" id="batt-power"></div>
            <div class="kwh" id="kwh"></div>
            <div class="eta" id="eta"></div>
          </div>
        </section>`;
    }

    _stripHtml() {
      const c = this._config;
      const h = this._hass;
      const item = (key, icon, label, eid) => `
        <button class="rd r-${key}" id="rd-${key}" data-more="${eid}">
          <span class="rd-top">${svgIcon(icon)}<span class="rd-l">${label}</span></span>
          <span class="rd-v"><span class="rd-arrow" id="rda-${key}"></span><span id="rdv-${key}">—</span></span>
        </button>`;
      const items = [];
      if (c.solar_entity) items.push(item("solar", "sun", t(h, "solar"), c.solar_entity));
      if (c.home_entity) items.push(item("home", "home", t(h, "home"), c.home_entity));
      if (c.grid_entity) items.push(item("grid", "tower", t(h, "grid"), c.grid_entity));
      return `<section class="strip">${items.join("")}</section>`;
    }

    /** Which detail tiles are shown (decided from config; values filled in _update). */
    _detailKeys() {
      const c = this._config;
      const keys = [];
      if (c.energy_entity) keys.push("available");
      if (c.capacity_entity || c.capacity > 0 || c.energy_entity) keys.push("capacity");
      if (c.nominal_capacity > 0) keys.push("health");
      if (c.discharge_total_entity) keys.push("cycles");
      if (c.charge_total_entity && c.discharge_total_entity) keys.push("efficiency");
      return keys;
    }

    _detailsHtml() {
      const h = this._hass;
      const keys = this._detailKeys();
      if (!keys.length) return "";
      const more = {
        available: this._config.energy_entity,
        capacity: this._config.capacity_entity,
        cycles: this._config.discharge_total_entity,
      };
      const tiles = keys.map((k) => {
        const eid = more[k];
        const attrs = eid ? ` data-more="${eid}" role="button" tabindex="0"` : "";
        return `
          <div class="tile t-${k}"${attrs}>
            <span class="tile-l">${t(h, `det_${k}`)}</span>
            <span class="tile-v" id="tv-${k}">—</span>
          </div>`;
      });
      return `<section class="details">${tiles.join("")}</section>`;
    }

    _historyHtml() {
      const h = this._hass;
      return `
        <section class="history">
          <div class="hist-head">
            <span>${t(h, "history_24h")}</span>
            <span class="hist-now" id="hist-now"></span>
          </div>
          <svg class="hist-svg" viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true">
            <path class="hist-area" id="hist-area"/>
            <path class="hist-line" id="hist-line"/>
          </svg>
        </section>`;
    }

    _packsHtml() {
      const c = this._config;
      const h = this._hass;
      const packs = (c.pack_entities || [])
        .map((eid, i) => {
          return `
          <div class="pack" data-more="${eid}" role="button" tabindex="0">
            <div class="pack-head">
              <span class="pack-n">${t(h, "pack")} ${i + 1}</span>
              <span class="pack-v" id="pkv-${i}">—</span>
            </div>
            <div class="pack-bar"><div class="pack-fill" id="pkf-${i}"></div></div>
          </div>`;
        })
        .join("");
      return `
        <section class="packs">
          <div class="sec-title">${t(h, "packs")}</div>
          <div class="pack-grid">${packs}</div>
        </section>`;
    }

    /** Which savings tiles are shown (a discharge counter must exist). */
    _savingsKeys() {
      const c = this._config;
      const keys = [];
      if (c.discharge_today_entity) keys.push("today");
      if (c.discharge_month_entity) keys.push("month");
      if (c.discharge_year_entity) keys.push("year");
      if (c.discharge_total_entity) keys.push("total");
      if (c.discharge_total_entity || c.discharge_year_entity) keys.push("co2");
      return keys;
    }

    _savingsHtml() {
      const h = this._hass;
      const keys = this._savingsKeys();
      if (!keys.length) return "";
      const tiles = keys
        .map(
          (k) => `
          <div class="tile t-sav">
            <span class="tile-l">${t(h, `sav_${k}`)}</span>
            <span class="tile-v" id="sv-${k}">—</span>
          </div>`
        )
        .join("");
      return `
        <section class="savings">
          <div class="sec-title">${t(h, "sav_title")}</div>
          <div class="details">${tiles}</div>
        </section>`;
    }

    /** Balance shown when we can compute at least one of the two rates. */
    _balanceAvail() {
      const c = this._config;
      return {
        cons: !!(c.pv_today_entity && c.grid_export_today_entity),
        suff: !!(c.home_today_entity && c.grid_import_today_entity),
      };
    }

    _balanceHtml() {
      const h = this._hass;
      const a = this._balanceAvail();
      if (!a.cons && !a.suff) return "";
      const gauge = (key, label) => `
        <div class="gauge" id="g-${key}">
          <div class="gauge-ring" id="gr-${key}">
            <div class="gauge-in"><span class="gauge-v" id="gv-${key}">—</span></div>
          </div>
          <span class="gauge-l">${label}</span>
        </div>`;
      const parts = [];
      if (a.cons) parts.push(gauge("cons", t(h, "bal_selfcons")));
      if (a.suff) parts.push(gauge("suff", t(h, "bal_selfsuff")));
      return `
        <section class="balance">
          <div class="sec-title">${t(h, "bal_title")}</div>
          <div class="gauge-row">${parts.join("")}</div>
        </section>`;
    }

    _flowHtml() {
      const c = this._config;
      const h = this._hass;
      if (!c.mode_entity || !c.ac_mode_entity) return "";
      return `
        <section class="mflow">
          <div class="sec-title">${t(h, "flow_title")}</div>
          <div class="mflow-btns">
            <button class="mfb mfb-cha" data-flow="charge">${svgIcon("down")}${t(h, "flow_charge")}</button>
            <button class="mfb mfb-dis" data-flow="discharge">${svgIcon("up")}${t(h, "flow_discharge")}</button>
            <button class="mfb mfb-auto" data-flow="auto">${svgIcon("flash")}${t(h, "flow_auto")}</button>
          </div>
          <div class="mflow-slider" id="mflow-slider" style="display:none">
            <span class="ctl-l"><span id="mflow-hint"></span><b class="ctl-v" id="mflow-val">—</b></span>
            <input type="range" id="sl-flow" data-kind="flow" min="0" max="100" step="1">
          </div>
        </section>`;
    }

    /** First option of a select matching `re`, else `fallback`. */
    _pickOption(eid, re, fallback) {
      const st = this._hass.states[eid];
      const opts = (st && st.attributes.options) || [];
      return opts.find((o) => re.test(o)) || fallback;
    }

    _compactHtml() {
      const c = this._config;
      const h = this._hass;
      const mini = [];
      const m = (key, icon, eid) =>
        `<button class="mini m-${key}" data-more="${eid}">${svgIcon(icon)}<span id="rdv-${key}">—</span></button>`;
      if (c.solar_entity) mini.push(m("solar", "sun", c.solar_entity));
      if (c.home_entity) mini.push(m("home", "home", c.home_entity));
      if (c.grid_entity) mini.push(m("grid", "tower", c.grid_entity));
      return `
        <section class="cbody">
          <div class="crow" id="hero" data-more="${c.soc_entity}" role="button" tabindex="0">
            <span class="soc" id="soc">—</span>
            <div class="bar"><div class="bar-fill" id="bar-fill"></div></div>
          </div>
          <div class="minis">${mini.join("")}</div>
        </section>`;
    }

    _statsHtml() {
      const c = this._config;
      const h = this._hass;
      const chips = [];
      if (c.temp_entity)
        chips.push(
          `<button class="chip" data-entity="${c.temp_entity}">${svgIcon("thermo")}<span class="chip-l">${t(h, "temperature")}</span><span class="chip-v" data-val="${c.temp_entity}">—</span></button>`
        );
      for (const eid of c.stats_entities || []) {
        chips.push(
          `<button class="chip" data-entity="${eid}">${svgIcon("bolt")}<span class="chip-l" data-name="${eid}"></span><span class="chip-v" data-val="${eid}">—</span></button>`
        );
      }
      if (!chips.length) return "";
      return `<section class="stats">${chips.join("")}</section>`;
    }

    _manualHtml() {
      const h = this._hass;
      return `
        <div class="ctl mctl" id="manual-ctl">
          <span class="ctl-l">${t(h, "manual_power")}<b class="ctl-v" id="sv-manual">—</b></span>
          <input type="range" id="sl-manual" data-kind="manual"
            min="-100" max="100" step="10" value="0">
          <div class="mbtns">
            <button class="mbtn m-dis" data-manual="discharge">${svgIcon("up")}${t(h, "force_discharge")}</button>
            <button class="mbtn m-pause" data-manual="pause">${t(h, "pause")}</button>
            <button class="mbtn m-cha" data-manual="charge">${svgIcon("down")}${t(h, "force_charge")}</button>
          </div>
        </div>`;
    }

    _controlsHtml() {
      const c = this._config;
      const h = this._hass;
      const parts = [];

      // Manual power (visibility toggled by mode in _update)
      if (c.manual_power_entity && h.states[c.manual_power_entity]) {
        parts.push(this._manualHtml());
      }

      // Mode selectors: primary mode_entity + any extra select entities
      const selects = [];
      const pushSelect = (eid) => {
        if (eid && h.states[eid] && !selects.includes(eid)) selects.push(eid);
      };
      pushSelect(c.mode_entity);
      (c.select_entities || []).forEach(pushSelect);
      for (const eid of selects) {
        const label = eid === c.mode_entity ? t(h, "mode") : this._cleanLabel(eid);
        parts.push(`
          <div class="ctl">
            <span class="ctl-l">${label}</span>
            <div class="seg" data-entity="${eid}"></div>
          </div>`);
      }
      const slider = (key, eid, label) => {
        const st = h.states[eid];
        if (!st) return "";
        const min = Number(st.attributes.min ?? 0);
        const max = Number(st.attributes.max ?? 100);
        const step = Number(st.attributes.step ?? 1);
        return `
          <div class="ctl">
            <span class="ctl-l">${label}<b class="ctl-v" id="sv-${key}">—</b></span>
            <input type="range" id="sl-${key}" data-entity="${eid}"
              min="${min}" max="${max}" step="${step}">
          </div>`;
      };
      if (c.charge_limit_entity)
        parts.push(slider("charge", c.charge_limit_entity, t(h, "charge_limit")));
      if (c.discharge_limit_entity)
        parts.push(slider("discharge", c.discharge_limit_entity, t(h, "discharge_limit")));
      if (c.min_soc_entity)
        parts.push(slider("minsoc", c.min_soc_entity, t(h, "soc_min")));
      if (c.max_soc_entity)
        parts.push(slider("maxsoc", c.max_soc_entity, t(h, "soc_max")));

      if ((c.switch_entities || []).length) {
        const sw = c.switch_entities
          .map(
            (eid) =>
              `<button class="tog" data-entity="${eid}"><span class="tog-track"><span class="tog-knob"></span></span><span class="tog-l" data-name="${eid}"></span></button>`
          )
          .join("");
        parts.push(`<div class="ctl togs">${sw}</div>`);
      }

      if (!parts.length) return "";
      return `<section class="controls">${parts.join("")}</section>`;
    }

    /* ------------------------------ refs & events ------------------------------ */
    _cacheRefs() {
      const $ = (sel) => this.shadowRoot.querySelector(sel);
      this._els = {
        title: $("#title"),
        status: $("#status"),
        statusTxt: $("#status .pill-txt"),
        soc: $("#soc"),
        battPower: $("#batt-power"),
        kwh: $("#kwh"),
        eta: $("#eta"),
        barFill: $("#bar-fill"),
        hero: $("#hero"),
        svg: $("#v-svg"),
        wv: [$("#v-wv-0"), $("#v-wv-1"), $("#v-wv-2")],
        marks: $("#v-marks"),
        alerts: $("#alerts"),
        histArea: $("#hist-area"),
        histLine: $("#hist-line"),
        histNow: $("#hist-now"),
        manualCtl: $("#manual-ctl"),
      };
    }

    disconnectedCallback() {
      this._stopHistory();
      this._stopWaves();
      this._built = false;
    }

    connectedCallback() {
      // Resume the wave loop if the card was reattached (e.g. tab switch).
      if (this._built && !this._raf) this._startWaves();
    }

    _bindEvents() {
      const root = this.shadowRoot;

      // Anything with data-more opens the entity's more-info dialog.
      root.querySelectorAll("[data-more]").forEach((el) => {
        const eid = el.getAttribute("data-more");
        if (!eid) return;
        el.addEventListener("click", () => moreInfo(this, eid));
        el.addEventListener("keydown", (ev) => {
          if (ev.key === "Enter" || ev.key === " ") {
            ev.preventDefault();
            moreInfo(this, eid);
          }
        });
      });

      root.querySelectorAll(".chip").forEach((chip) => {
        chip.addEventListener("click", () => moreInfo(this, chip.dataset.entity));
      });

      // Plain number sliders (limits, reserve/ceiling). Manual power & flow are apart.
      root.querySelectorAll("input[type=range]:not([data-kind])").forEach((sl) => {
        const eid = sl.dataset.entity;
        const label = sl.closest(".ctl").querySelector(".ctl-v");
        sl.addEventListener("input", () => {
          this._sliderDrag[eid] = true;
          if (label) label.textContent = this._fmtNumber(eid, sl.value);
        });
        sl.addEventListener("change", () => {
          delete this._sliderDrag[eid];
          this._hass.callService("number", "set_value", {
            entity_id: eid,
            value: Number(sl.value),
          });
        });
      });

      // Manual power: slider value is in "net" space (+ charge / − discharge).
      const man = root.getElementById("sl-manual");
      if (man) {
        const eid = this._config.manual_power_entity;
        man.addEventListener("input", () => {
          this._sliderDrag[eid] = true;
          this._setManualLabel(Number(man.value));
        });
        man.addEventListener("change", () => {
          delete this._sliderDrag[eid];
          this._setManualPower(Number(man.value));
        });
        root.querySelectorAll(".mbtn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const kind = btn.dataset.manual;
            const b = this._manualBounds();
            const net = kind === "charge" ? b.max : kind === "discharge" ? b.min : 0;
            this._setManualPower(net);
          });
        });
      }

      // Guided charge/discharge flow: action buttons + contextual limit slider.
      root.querySelectorAll(".mfb").forEach((btn) => {
        btn.addEventListener("click", () => this._doFlow(btn.dataset.flow));
      });
      const fsl = root.getElementById("sl-flow");
      if (fsl) {
        const label = root.getElementById("mflow-val");
        fsl.addEventListener("input", () => {
          const eid = this._flowLimitEid;
          if (!eid) return;
          this._sliderDrag[eid] = true;
          if (label) label.textContent = this._fmtNumber(eid, fsl.value);
        });
        fsl.addEventListener("change", () => {
          const eid = this._flowLimitEid;
          if (!eid) return;
          delete this._sliderDrag[eid];
          this._hass.callService("number", "set_value", {
            entity_id: eid,
            value: Number(fsl.value),
          });
        });
      }

      root.querySelectorAll(".tog").forEach((btn) => {
        btn.addEventListener("click", () => {
          this._hass.callService("homeassistant", "toggle", {
            entity_id: btn.dataset.entity,
          });
        });
      });
    }

    /** Manual power slider bounds in net space: [−dischargeMax, +chargeMax]. */
    _manualBounds() {
      const c = this._config;
      const h = this._hass;
      const st = h.states[c.manual_power_entity];
      const emax = st ? Number(st.attributes.max ?? 1200) : 1200;
      const emin = st ? Number(st.attributes.min ?? -1200) : -1200;
      const chargeMax = num(h, c.charge_max_entity);
      const dischargeMax = num(h, c.discharge_max_entity);
      const max = chargeMax !== null && chargeMax > 0 ? chargeMax : Math.abs(emax);
      const min = dischargeMax !== null && dischargeMax > 0 ? -dischargeMax : -Math.abs(emin);
      return { min: Math.round(min), max: Math.round(max) };
    }

    _setManualLabel(net) {
      const el = this.shadowRoot.getElementById("sv-manual");
      if (!el) return;
      const lang = langOf(this._hass) === "fr" ? "fr-FR" : "en-US";
      const w = new Intl.NumberFormat(lang, { maximumFractionDigits: 0 }).format(Math.abs(net));
      const dir = net > 0 ? t(this._hass, "force_charge") : net < 0 ? t(this._hass, "force_discharge") : t(this._hass, "pause");
      el.textContent = net === 0 ? `${dir} · 0 W` : `${dir} · ${w} W`;
      el.className = `ctl-v ${net > 0 ? "mv-cha" : net < 0 ? "mv-dis" : ""}`;
    }

    _setManualPower(net) {
      const c = this._config;
      const raw = c.invert_manual ? -net : net;
      this._hass.callService("number", "set_value", {
        entity_id: c.manual_power_entity,
        value: raw,
      });
    }

    /* ------------------------------ history ------------------------------ */
    _startHistory() {
      this._stopHistory();
      const c = this._config;
      if (c.compact || !c.show_history || !c.soc_entity || !this._els.histLine) return;
      this._fetchHistory();
      this._histTimer = setInterval(() => this._fetchHistory(), 5 * 60 * 1000);
    }

    _stopHistory() {
      if (this._histTimer) {
        clearInterval(this._histTimer);
        this._histTimer = null;
      }
    }

    async _fetchHistory() {
      const c = this._config;
      const h = this._hass;
      if (!h || !c.soc_entity || !this._els.histLine) return;
      try {
        const end = new Date();
        const start = new Date(end.getTime() - (c.history_hours || 24) * 3600 * 1000);
        const res = await h.callWS({
          type: "history/history_during_period",
          start_time: start.toISOString(),
          end_time: end.toISOString(),
          entity_ids: [c.soc_entity],
          minimal_response: true,
          no_attributes: true,
        });
        const arr = res && res[c.soc_entity];
        if (!arr || !arr.length) return;
        const pts = arr
          .map((p) => {
            const ts =
              p.lu != null
                ? p.lu * 1000
                : p.last_changed
                  ? Date.parse(p.last_changed)
                  : p.last_updated
                    ? Date.parse(p.last_updated)
                    : 0;
            const v = parseFloat(p.s != null ? p.s : p.state);
            return { t: ts, v };
          })
          .filter((p) => Number.isFinite(p.v) && p.t);
        if (!pts.length) return;
        this._histData = { start: start.getTime(), end: end.getTime(), pts };
        this._drawHistory();
      } catch (_e) {
        const sec = this.shadowRoot.querySelector(".history");
        if (sec) sec.style.display = "none";
      }
    }

    _drawHistory() {
      const d = this._histData;
      const e = this._els;
      if (!d || !d.pts.length || !e.histLine) return;
      const W = 100, H = 32, pad = 1.5;
      const span = Math.max(1, d.end - d.start);
      const x = (ts) => ((ts - d.start) / span) * W;
      const y = (v) => H - pad - (Math.max(0, Math.min(100, v)) / 100) * (H - 2 * pad);
      // Step line: SoC holds its value between samples
      let line = "";
      d.pts.forEach((p, i) => {
        const px = x(p.t).toFixed(2);
        const py = y(p.v).toFixed(2);
        line += i === 0 ? `M ${px} ${py}` : ` H ${px} V ${py}`;
      });
      const last = d.pts[d.pts.length - 1];
      const firstX = x(d.pts[0].t).toFixed(2);
      const endX = x(d.end).toFixed(2);
      line += ` H ${endX}`;
      e.histLine.setAttribute("d", line);
      if (e.histArea) e.histArea.setAttribute("d", `${line} L ${endX} ${H} L ${firstX} ${H} Z`);
      if (e.histNow) e.histNow.textContent = `${Math.round(last.v)} %`;
    }

    _fmtNumber(eid, value) {
      const st = this._hass.states[eid];
      const unit = (st && st.attributes.unit_of_measurement) || "";
      return `${value}${unit ? ` ${unit}` : ""}`;
    }

    /* ------------------------------ update ------------------------------ */
    _update() {
      const h = this._hass;
      const c = this._config;
      if (!h || !this._built) return;

      this.toggleAttribute("dark", !!(h.themes && h.themes.darkMode));

      // Title
      if (this._els.title) {
        this._els.title.textContent =
          c.name ||
          (c.soc_entity && h.states[c.soc_entity]
            ? (h.states[c.soc_entity].attributes.friendly_name || "Zendure")
                .replace(/electric\s*level/i, "")
                .trim()
            : "Zendure");
      }

      const soc = num(h, c.soc_entity);
      const solar = num(h, c.solar_entity);
      const home = num(h, c.home_entity);
      const grid = num(h, c.grid_entity);
      const charge = num(h, c.charge_entity);
      const discharge = num(h, c.discharge_entity);

      // Net battery power: + charging / − discharging
      let net = null;
      if (charge !== null && discharge !== null) net = charge - discharge;
      else if (charge !== null) net = c.invert_battery ? -charge : charge;
      else if (discharge !== null) net = c.invert_battery ? discharge : -discharge;

      const thr = c.flow_threshold;
      const socAvailable =
        c.soc_entity &&
        h.states[c.soc_entity] &&
        !["unavailable", "unknown"].includes(h.states[c.soc_entity].state);

      // Status pill
      let statusKey = "idle";
      if (c.soc_entity && !socAvailable) statusKey = "unavailable";
      else if (net !== null && net > thr) statusKey = "charging";
      else if (net !== null && net < -thr) statusKey = "discharging";
      if (this._els.status) {
        this._els.status.className = `pill s-${statusKey}`;
        this._els.statusTxt.textContent = t(h, statusKey);
      }

      const low = soc !== null && soc <= c.low_soc;
      const warn = soc !== null && soc <= c.low_soc * 2 && !low;
      const level = low ? "crit" : warn ? "warn" : "ok";

      // Big SoC number
      if (this._els.soc) {
        this._els.soc.innerHTML =
          soc === null
            ? "—"
            : `${low ? svgIcon("alert", "warn-ic") : ""}${Math.round(soc)}<i>%</i>`;
        this._els.soc.className = `soc l-${level}`;
      }

      // Live battery power next to the vessel (+ charging / − discharging)
      if (this._els.battPower) {
        if (net !== null && Math.abs(net) > thr) {
          const up = net > 0;
          this._els.battPower.innerHTML = `${svgIcon(up ? "down" : "up")}<span>${fmtPower(h, Math.abs(net))}</span>`;
          this._els.battPower.className = `batt-power show ${up ? "bp-in" : "bp-out"}`;
        } else {
          this._els.battPower.innerHTML = "";
          this._els.battPower.className = "batt-power";
        }
      }

      // Stored energy (measured, or estimated from capacity)
      const cap = this._capacityKwh();
      if (this._els.kwh) {
        let e = num(h, c.energy_entity);
        if (e === null && cap !== null && soc !== null) e = (cap * soc) / 100;
        this._els.kwh.textContent = e !== null ? `${e.toFixed(2)} kWh` : "";
      }

      // ETA — full in / runtime
      if (this._els.eta) {
        const eta = this._computeEta(soc, net, cap, statusKey);
        if (eta) {
          this._els.eta.innerHTML = `${svgIcon(eta.icon)}<span>${eta.text}</span>`;
          this._els.eta.classList.add("show");
        } else {
          this._els.eta.innerHTML = "";
          this._els.eta.classList.remove("show");
        }
      }

      // Vessel (liquid) or compact bar
      if (this._els.svg) this._updateVessel(soc, net, level);
      if (this._els.barFill && soc !== null) {
        const pct = Math.max(0, Math.min(100, soc));
        this._els.barFill.style.width = `${pct}%`;
        this._els.barFill.style.background = `var(--zdc-l-${level})`;
      }

      // Power readouts strip
      this._updateStrip("solar", solar, "in");
      this._updateStrip("home", home, "out");
      this._updateStrip(
        "grid",
        grid === null ? null : Math.abs(grid),
        grid === null ? null : grid > thr ? "in" : grid < -thr ? "out" : null
      );

      // SoC reserve/ceiling markers on the vessel
      this._updateMarks();

      // Battery details tiles + stacked packs
      this._updateDetails();
      this._updatePacks();
      this._updateSavings();
      this._updateBalance();

      // Alerts banner
      this._updateAlerts(soc, net, statusKey);

      // Stats
      this.shadowRoot.querySelectorAll("[data-val]").forEach((el) => {
        el.textContent = fmtState(h, el.dataset.val);
      });
      this.shadowRoot.querySelectorAll("[data-name]").forEach((el) => {
        el.textContent = this._cleanLabel(el.dataset.name);
      });

      // Mode segmented controls + manual power + guided flow
      this._updateSelects();
      this._updateManual();
      this._updateManualFlow();

      // Sliders
      for (const [key, eid] of [
        ["charge", c.charge_limit_entity],
        ["discharge", c.discharge_limit_entity],
        ["minsoc", c.min_soc_entity],
        ["maxsoc", c.max_soc_entity],
      ]) {
        if (!eid) continue;
        const sl = this.shadowRoot.getElementById(`sl-${key}`);
        const lv = this.shadowRoot.getElementById(`sv-${key}`);
        const v = num(h, eid);
        if (sl && v !== null && !this._sliderDrag[eid]) {
          sl.value = v;
          if (lv) lv.textContent = this._fmtNumber(eid, v);
        }
      }

      // Switch toggles
      this.shadowRoot.querySelectorAll(".tog").forEach((btn) => {
        const st = h.states[btn.dataset.entity];
        btn.classList.toggle("on", !!st && st.state === "on");
      });
    }

    _updateMarks() {
      const c = this._config;
      const h = this._hass;
      const g = this._els.marks;
      if (!g) return;
      const marks = [];
      const add = (val, cls) => {
        if (val === null) return;
        const pct = Math.max(0, Math.min(100, val));
        marks.push(`<div class="v-mark ${cls}" style="bottom:${pct}%"></div>`);
      };
      add(num(h, c.min_soc_entity), "mk-min");
      add(num(h, c.max_soc_entity), "mk-max");
      const html = marks.join("");
      if (g.innerHTML !== html) g.innerHTML = html;
    }

    _updatePacks() {
      const c = this._config;
      const h = this._hass;
      (c.pack_entities || []).forEach((eid, i) => {
        const v = num(h, eid);
        const vv = this.shadowRoot.getElementById(`pkv-${i}`);
        const ff = this.shadowRoot.getElementById(`pkf-${i}`);
        if (vv) vv.innerHTML = v === null ? "—" : `${Math.round(v)}<i>%</i>`;
        if (ff && v !== null) {
          const pct = Math.max(0, Math.min(100, v));
          const lvl = pct <= c.low_soc ? "crit" : pct <= c.low_soc * 2 ? "warn" : "ok";
          ff.style.width = `${pct}%`;
          ff.style.background = `var(--zdc-l-${lvl})`;
        }
      });
    }

    /** Current €/kWh price: dynamic sensor if set, else the fixed price. */
    _price() {
      const c = this._config;
      const p = num(this._hass, c.price_entity);
      return p !== null && p >= 0 ? p : c.electricity_price;
    }

    _updateSavings() {
      const c = this._config;
      const h = this._hass;
      if (!this.shadowRoot.querySelector(".savings")) return;
      const price = this._price();
      const money = (eid) => {
        const kwh = num(h, eid);
        return kwh === null ? "—" : fmtMoney(h, kwh * price);
      };
      const setTxt = (id, txt) => {
        const el = this.shadowRoot.getElementById(id);
        if (el) el.textContent = txt;
      };
      setTxt("sv-today", money(c.discharge_today_entity));
      setTxt("sv-month", money(c.discharge_month_entity));
      setTxt("sv-year", money(c.discharge_year_entity));
      setTxt("sv-total", money(c.discharge_total_entity));
      // CO₂ avoided: prefer the lifetime total, else this year.
      const totalKwh = num(h, c.discharge_total_entity || c.discharge_year_entity);
      setTxt("sv-co2", totalKwh === null ? "—" : fmtCo2(h, totalKwh * c.co2_factor));
    }

    _updateBalance() {
      const c = this._config;
      const h = this._hass;
      const setGauge = (key, pct) => {
        const ring = this.shadowRoot.getElementById(`gr-${key}`);
        const v = this.shadowRoot.getElementById(`gv-${key}`);
        if (!ring) return;
        if (pct === null) {
          ring.style.background = "var(--zdc-track)";
          if (v) v.textContent = "—";
          return;
        }
        const p = Math.max(0, Math.min(100, pct));
        const col = p >= 70 ? "var(--zdc-l-ok)" : p >= 40 ? "var(--zdc-l-warn)" : "var(--zdc-l-crit)";
        ring.style.background = `conic-gradient(${col} ${p}%, var(--zdc-track) 0)`;
        if (v) v.innerHTML = `${Math.round(p)}<i>%</i>`;
      };
      // Self-consumption = (produced − exported) / produced
      const pv = num(h, c.pv_today_entity);
      const exp = num(h, c.grid_export_today_entity);
      let cons = null;
      if (pv !== null && exp !== null && pv > 0) cons = ((pv - exp) / pv) * 100;
      // Self-sufficiency = (consumed − imported) / consumed
      const home = num(h, c.home_today_entity);
      const imp = num(h, c.grid_import_today_entity);
      let suff = null;
      if (home !== null && imp !== null && home > 0) suff = ((home - imp) / home) * 100;
      setGauge("cons", cons);
      setGauge("suff", suff);
    }

    /** Resolve the manager/AC option values used by the guided flow. */
    _flowVals() {
      const c = this._config;
      return {
        off: this._pickOption(c.mode_entity, /^off$|arr[eê]t|stop|éteint|eteint/i, "off"),
        auto: c.manager_auto_value || "smart",
        charge: this._pickOption(c.ac_mode_entity, /input|charge|charg/i, "input"),
        discharge: this._pickOption(c.ac_mode_entity, /output|discharge|d[eé]charg/i, "output"),
      };
    }

    _doFlow(kind) {
      const c = this._config;
      const h = this._hass;
      const v = this._flowVals();
      if (kind === "auto") {
        h.callService("select", "select_option", { entity_id: c.mode_entity, option: v.auto });
        return;
      }
      // Manual recipe: stop the manager, then pick the AC direction.
      h.callService("select", "select_option", { entity_id: c.mode_entity, option: v.off });
      h.callService("select", "select_option", {
        entity_id: c.ac_mode_entity,
        option: kind === "charge" ? v.charge : v.discharge,
      });
    }

    _updateManualFlow() {
      const c = this._config;
      const h = this._hass;
      const sec = this.shadowRoot.querySelector(".mflow");
      if (!sec) return;
      const mgr = h.states[c.mode_entity];
      const ac = h.states[c.ac_mode_entity];
      if (!mgr || !ac) return;
      const v = this._flowVals();
      const isOff = String(mgr.state) === String(v.off);
      const charging = isOff && String(ac.state) === String(v.charge);
      const discharging = isOff && String(ac.state) === String(v.discharge);
      sec.querySelector(".mfb-cha").classList.toggle("on", charging);
      sec.querySelector(".mfb-dis").classList.toggle("on", discharging);
      sec.querySelector(".mfb-auto").classList.toggle("on", !isOff);

      const wrap = this.shadowRoot.getElementById("mflow-slider");
      const sl = this.shadowRoot.getElementById("sl-flow");
      const hint = this.shadowRoot.getElementById("mflow-hint");
      const val = this.shadowRoot.getElementById("mflow-val");
      let eid = null;
      let label = "";
      if (charging && c.charge_limit_entity) {
        eid = c.charge_limit_entity;
        label = t(h, "flow_hint_charge");
      } else if (discharging && c.discharge_limit_entity) {
        eid = c.discharge_limit_entity;
        label = t(h, "flow_hint_discharge");
      }
      this._flowLimitEid = eid;
      if (eid && h.states[eid]) {
        wrap.style.display = "";
        const st = h.states[eid];
        sl.min = Number(st.attributes.min ?? 0);
        sl.max = Number(st.attributes.max ?? 100);
        sl.step = Number(st.attributes.step ?? 1);
        if (hint) hint.textContent = `${label} `;
        const n = num(h, eid);
        if (n !== null && !this._sliderDrag[eid]) {
          sl.value = n;
          if (val) val.textContent = this._fmtNumber(eid, n);
        }
      } else {
        wrap.style.display = "none";
      }
    }

    _updateManual() {
      const c = this._config;
      const h = this._hass;
      const ctl = this._els.manualCtl;
      if (!ctl) return;
      // Visible only in the configured manual mode (when a mode entity exists)
      let show = true;
      if (c.mode_entity && h.states[c.mode_entity]) {
        show = String(h.states[c.mode_entity].state) === String(c.manual_mode_value);
      }
      ctl.style.display = show ? "" : "none";
      if (!show) return;
      const sl = this.shadowRoot.getElementById("sl-manual");
      if (!sl) return;
      const b = this._manualBounds();
      sl.min = b.min;
      sl.max = b.max;
      sl.step = Math.max(1, Math.round((b.max - b.min) / 100));
      const eid = c.manual_power_entity;
      const raw = num(h, eid);
      const net = raw === null ? 0 : c.invert_manual ? -raw : raw;
      if (!this._sliderDrag[eid]) {
        sl.value = Math.max(b.min, Math.min(b.max, net));
        this._setManualLabel(net);
      }
    }

    _updateAlerts(soc, net, statusKey) {
      const c = this._config;
      const h = this._hass;
      const box = this._els.alerts;
      if (!box) return;
      const alerts = [];
      const socUnavail =
        c.soc_entity &&
        h.states[c.soc_entity] &&
        ["unavailable", "unknown"].includes(h.states[c.soc_entity].state);
      const conn = c.connectivity_entity && h.states[c.connectivity_entity];
      if (
        socUnavail ||
        (conn && ["off", "unavailable", "unknown", "false"].includes(String(conn.state).toLowerCase()))
      ) {
        alerts.push({ icon: "alert", key: "alert_offline", sev: "crit" });
      }
      const fault = c.fault_entity && h.states[c.fault_entity];
      if (fault && ["on", "true", "problem"].includes(String(fault.state).toLowerCase())) {
        alerts.push({ icon: "alert", key: "alert_fault", sev: "crit" });
      }
      const temp = num(h, c.temp_entity);
      if (temp !== null && temp >= c.alert_temp_max)
        alerts.push({ icon: "thermo", key: "alert_hot", sev: "warn" });
      if (temp !== null && temp <= 0 && statusKey === "charging")
        alerts.push({ icon: "thermo", key: "alert_cold", sev: "warn" });
      if (soc !== null && soc <= c.low_soc)
        alerts.push({ icon: "alert", key: "alert_low", sev: "warn" });

      const order = { crit: 0, warn: 1 };
      alerts.sort((a, b) => order[a.sev] - order[b.sev]);
      const shown = alerts.slice(0, 2);
      const html = shown
        .map((a) => `<div class="alert a-${a.sev}">${svgIcon(a.icon)}<span>${t(h, a.key)}</span></div>`)
        .join("");
      if (box.innerHTML !== html) box.innerHTML = html;
      box.style.display = shown.length ? "" : "none";
    }

    /** Total capacity in kWh: capacity sensor, else derived from kWh+SoC, else config. */
    _capacityKwh() {
      const c = this._config;
      const h = this._hass;
      const cap = num(h, c.capacity_entity);
      if (cap !== null && cap > 0) return cap;
      const e = num(h, c.energy_entity);
      const soc = num(h, c.soc_entity);
      if (e !== null && e > 0 && soc !== null && soc >= 5) return (e * 100) / soc;
      if (c.capacity > 0) return c.capacity;
      return null;
    }

    /** { text, icon } for "full in …" / "runtime …", or null when not applicable. */
    _computeEta(soc, net, cap, statusKey) {
      const c = this._config;
      const h = this._hass;
      if (soc === null || net === null) return null;
      const thr = c.flow_threshold;
      if (statusKey === "charging") {
        if (soc >= 99.5) return { text: t(h, "full"), icon: "flash" };
        if (cap === null) return null;
        const dur = fmtDuration((cap * (100 - soc)) / 100 / (net / 1000));
        return dur ? { text: `${t(h, "full_in")} ${dur}`, icon: "flash" } : null;
      }
      if (statusKey === "discharging") {
        const floor = Math.max(0, Math.min(soc, c.reserve_soc || 0));
        if (soc <= floor + 0.5) return { text: t(h, "empty"), icon: "clock" };
        if (cap === null) return null;
        const dur = fmtDuration((cap * (soc - floor)) / 100 / (Math.abs(net) / 1000));
        return dur ? { text: `${t(h, "autonomy")} ${dur}`, icon: "clock" } : null;
      }
      return null;
    }

    _updateVessel(soc, net, level) {
      const e = this._els;
      // Target water level (viewBox units, 0 = top / 100 = bottom).
      const pct = soc === null ? 0 : Math.max(0, Math.min(100, soc));
      this._levelTarget = 100 - pct;
      if (this._levelDisp == null) this._levelDisp = this._levelTarget;
      if (e.svg) e.svg.style.setProperty("--water", `var(--zdc-l-${level})`);
      // Wave liveliness scales with throughput (calm at idle, brisk under power).
      const flow = Math.abs(net || 0);
      this._waveSpeed = Math.max(0.6, Math.min(2.2, 0.6 + flow / 900));
    }

    /* ---------- wave animation (3 layers of oscillating sampled points) ---------- */
    _startWaves() {
      this._stopWaves();
      if (!this._els.wv || !this._els.wv[0]) return;
      // Low spatial frequencies → long, gentle swells (freq = waves across width).
      this._waves = [
        { freq: 0.5, dur: 4.5, dy: 0, amp: 3.4, ampTo: 4.4, ampDur: 3.0 }, // front (opaque)
        { freq: 1.0, dur: 3.6, dy: -1.5, amp: 2.4, ampTo: 3.4, ampDur: 3.6 }, // mid
        { freq: 0.8, dur: 5.2, dy: -2.5, amp: 2.0, ampTo: 3.0, ampDur: 4.0 }, // back
      ];
      this._waveSpeed = this._waveSpeed || 0.8;
      const reduced =
        typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        this._drawWaves(0);
        return;
      }
      this._t0 = performance.now();
      let last = 0;
      const loop = (now) => {
        this._raf = requestAnimationFrame(loop);
        if (now - last < 33) return; // ~30 fps
        last = now;
        this._drawWaves((now - this._t0) / 1000);
      };
      this._raf = requestAnimationFrame(loop);
    }

    _stopWaves() {
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
    }

    _drawWaves(time) {
      const e = this._els;
      if (!e.wv || !e.wv[0] || !this._waves) return;
      // Ease the displayed level toward the target for a smooth rise/fall.
      if (this._levelDisp == null) this._levelDisp = this._levelTarget || 0;
      this._levelDisp += ((this._levelTarget || 0) - this._levelDisp) * 0.08;
      const yl = this._levelDisp;
      const t = time * (this._waveSpeed || 1);
      const SEG = 40;
      const TAU = Math.PI * 2;

      this._waves.forEach((w, wi) => {
        const path = e.wv[wi];
        if (!path) return;
        const period = 2 * w.dur;
        const breath = 0.5 * (1 - Math.cos((TAU * time) / (2 * w.ampDur)));
        const amp = w.amp + (w.ampTo - w.amp) * breath;
        let d = "";
        for (let i = 0; i <= SEG; i++) {
          const norm = i / SEG;
          const x = (norm * 100).toFixed(2);
          const y = (
            yl + w.dy + amp * Math.sin((TAU * t) / period + norm * w.freq * TAU)
          ).toFixed(2);
          d += (i === 0 ? "M" : "L") + ` ${x} ${y}`;
        }
        d += " L 100 100 L 0 100 Z";
        path.setAttribute("d", d);
      });
    }

    _updateStrip(key, value, dir) {
      const v = this.shadowRoot.getElementById(`rdv-${key}`);
      if (v) v.textContent = fmtPower(this._hass, value);
      const a = this.shadowRoot.getElementById(`rda-${key}`);
      if (a) {
        a.className = `rd-arrow ${dir ? `a-${dir}` : ""}`;
        a.innerHTML = dir ? svgIcon(dir === "in" ? "down" : "up") : "";
      }
    }

    _updateDetails() {
      const c = this._config;
      const h = this._hass;
      const set = (key, html, cls) => {
        const el = this.shadowRoot.getElementById(`tv-${key}`);
        if (!el) return;
        el.innerHTML = html;
        el.closest(".tile").className = `tile t-${key}${cls ? ` ${cls}` : ""}`;
      };
      const kwh = (v) => (v === null ? "—" : `${v.toFixed(2)}<i>kWh</i>`);

      const cap = this._capacityKwh();
      const avail = num(h, c.energy_entity);
      const chargeTot = num(h, c.charge_total_entity);
      const dischTot = num(h, c.discharge_total_entity);

      set("available", kwh(avail));
      set("capacity", kwh(cap));

      if (c.nominal_capacity > 0) {
        const soh = cap !== null ? Math.round((cap / c.nominal_capacity) * 100) : null;
        const cls = soh === null ? "" : soh >= 80 ? "good" : soh >= 60 ? "warn" : "crit";
        set("health", soh === null ? "—" : `${Math.min(100, soh)}<i>%</i>`, cls);
      }
      if (c.discharge_total_entity) {
        const cycles = dischTot !== null && cap ? Math.round(dischTot / cap) : null;
        set("cycles", cycles === null ? "—" : `${cycles}`);
      }
      if (c.charge_total_entity && c.discharge_total_entity) {
        const eff =
          chargeTot !== null && chargeTot > 0 && dischTot !== null
            ? Math.round((dischTot / chargeTot) * 100)
            : null;
        set("efficiency", eff === null ? "—" : `${eff}<i>%</i>`);
      }
    }

    /**
     * Short, human label for a chip/switch: the entity's friendly name minus the
     * device name, the card title, and the Zendure integration's "… zendure - " prefix.
     */
    _cleanLabel(eid) {
      const h = this._hass;
      const st = h.states[eid];
      const original = (st && st.attributes.friendly_name) || eid;
      let label = original;
      // Strip the owning device's name ("SolarFlow 2400 AC …")
      try {
        const reg = h.entities && h.entities[eid];
        const dev = reg && h.devices && h.devices[reg.device_id];
        if (dev && dev.name && label.toLowerCase().startsWith(dev.name.toLowerCase())) {
          label = label.slice(dev.name.length);
        }
      } catch (_e) {
        /* registry unavailable */
      }
      // Strip the card title if it leads the label
      const cn = this._config.name;
      if (cn && label.toLowerCase().startsWith(cn.toLowerCase())) label = label.slice(cn.length);
      // Zendure integration heuristic: "… zendure - charge journalière" → "charge journalière"
      label = label.replace(/^.*?\bzendure\b\s*[-–—:]\s*/i, "");
      label = label.replace(/^[\s\-–—:·]+/, "").trim();
      if (!label) label = original;
      return label.charAt(0).toUpperCase() + label.slice(1);
    }

    /** Localized display label for a select option (raw value is sent to the service). */
    _optionLabel(option) {
      const key = `opt_${String(option).toLowerCase().replace(/[\s-]+/g, "_")}`;
      const dict = LANGS[langOf(this._hass)] || LANGS.en;
      return dict[key] || LANGS.en[key] || prettify(option);
    }

    _updateSelects() {
      const h = this._hass;
      this.shadowRoot.querySelectorAll(".seg[data-entity]").forEach((seg) => {
        const eid = seg.dataset.entity;
        const st = h.states[eid];
        if (!st) return;
        const options = st.attributes.options || [];
        const sig = `${options.join("|")}§${langOf(h)}`;
        if (seg.dataset.sig !== sig) {
          seg.dataset.sig = sig;
          seg.innerHTML = options
            .map(
              (o) =>
                `<button class="seg-b" data-opt="${o}">${this._optionLabel(o)}</button>`
            )
            .join("");
          seg.querySelectorAll(".seg-b").forEach((b) => {
            b.addEventListener("click", () => {
              this._hass.callService("select", "select_option", {
                entity_id: eid,
                option: b.dataset.opt,
              });
            });
          });
        }
        seg.querySelectorAll(".seg-b").forEach((b) => {
          b.classList.toggle("on", b.dataset.opt === st.state);
        });
      });
    }

    /* ------------------------------ sizing ------------------------------ */
    getCardSize() {
      if (!this._config) return 4;
      const c = this._config;
      if (c.compact) return 2;
      let size = 5;
      if (c.show_details && this._detailKeys().length) size += 1;
      if (c.show_balance && (c.pv_today_entity || c.home_today_entity)) size += 2;
      if (c.show_savings && this._savingsKeys().length) size += 1;
      if (c.show_manual_flow && c.mode_entity && c.ac_mode_entity) size += 1;
      if (c.show_stats) size += 1;
      if (c.show_controls) size += 2;
      return size;
    }

    getGridOptions() {
      return {
        columns: 12,
        min_columns: 6,
        rows: "auto",
      };
    }

    /* ------------------------------ styles ------------------------------ */
    _styles() {
      return `
        :host {
          /* Validated palette — light mode (overridable via HA themes) */
          --zdc-solar: var(--zendure-solar-color, #eda100);
          --zdc-batt:  var(--zendure-battery-color, #008300);
          --zdc-grid:  var(--zendure-grid-color, #2a78d6);
          --zdc-home:  var(--zendure-home-color, #e87ba4);
          --zdc-good:  #0ca30c;
          --zdc-warn:  #fab219;
          --zdc-crit:  #d03b3b;
          /* Battery level colours (liquid + bar) */
          --zdc-l-ok:   var(--zendure-battery-color, #12a150);
          --zdc-l-warn: #eda100;
          --zdc-l-crit: #e5484d;
          --zdc-track: color-mix(in srgb, currentColor 10%, transparent);
          --zdc-card-bg: var(--ha-card-background, var(--card-background-color, #fff));
        }
        :host([dark]) {
          --zdc-solar: var(--zendure-solar-color, #c98500);
          --zdc-grid:  var(--zendure-grid-color, #3987e5);
          --zdc-home:  var(--zendure-home-color, #d55181);
          --zdc-l-ok:   var(--zendure-battery-color, #2bbd6d);
          --zdc-l-warn: #f5b13a;
          --zdc-l-crit: #f0595e;
        }
        ha-card { overflow: hidden; }
        .card {
          padding: 16px;
          color: var(--primary-text-color);
          display: flex; flex-direction: column; gap: 14px;
        }
        .card.compact { gap: 10px; padding: 12px 16px; }

        .ic { width: 20px; height: 20px; fill: currentColor; flex: none; }

        header { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .title {
          font-size: 1.05rem; font-weight: 600; letter-spacing: .2px;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .pill {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: .78rem; font-weight: 500;
          padding: 4px 10px; border-radius: 999px;
          background: color-mix(in srgb, currentColor 7%, transparent);
          color: var(--secondary-text-color);
        }
        .pill .dot { width: 8px; height: 8px; border-radius: 50%; background: currentColor; opacity: .5; }
        .pill.s-charging { color: var(--zdc-batt); background: color-mix(in srgb, var(--zdc-batt) 12%, transparent); }
        .pill.s-charging .dot { background: var(--zdc-batt); opacity: 1; }
        .pill.s-discharging { color: var(--zdc-home); background: color-mix(in srgb, var(--zdc-home) 14%, transparent); }
        .pill.s-discharging .dot { background: var(--zdc-home); opacity: 1; }
        .pill.s-unavailable { color: var(--zdc-crit); background: color-mix(in srgb, var(--zdc-crit) 12%, transparent); }
        .pill.s-unavailable .dot { background: var(--zdc-crit); opacity: 1; }
        .pill-txt { line-height: 1; }

        .empty {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 24px 12px; color: var(--secondary-text-color); text-align: center;
        }
        .empty .ic { width: 36px; height: 36px; opacity: .4; }
        .empty p { margin: 0; font-size: .9rem; max-width: 32ch; }

        /* ---------------- hero : battery vessel ---------------- */
        .hero {
          display: flex; align-items: center; gap: 20px;
          padding: 6px 4px 2px; cursor: pointer;
          border: 0; background: none; text-align: left; width: 100%;
        }
        .hero:focus-visible, .rd:focus-visible, .crow:focus-visible, .mini:focus-visible {
          outline: 2px solid var(--zdc-grid); outline-offset: 3px; border-radius: 14px;
        }
        /* Battery vessel — HTML/CSS liquid with ellipse waves */
        .vessel { position: relative; width: 104px; height: 168px; flex: none; }
        .v-cap {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 34px; height: 9px; border-radius: 4px 4px 0 0;
          background: color-mix(in srgb, currentColor 20%, transparent);
        }
        .v-cell {
          position: absolute; top: 9px; left: 0; right: 0; bottom: 0;
          border: 3px solid color-mix(in srgb, currentColor 22%, transparent);
          border-radius: 20px; overflow: hidden;
          background: color-mix(in srgb, currentColor 6%, transparent);
        }
        .v-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .v-wv { transition: fill .5s; }
        .v-wv-a { fill: var(--water, var(--zdc-l-ok)); fill-opacity: .95; }
        .v-wv-b { fill: color-mix(in srgb, #fff 32%, var(--water, var(--zdc-l-ok))); fill-opacity: .55; }
        .v-wv-c { fill: color-mix(in srgb, #fff 58%, var(--water, var(--zdc-l-ok))); fill-opacity: .45; }
        .v-shine {
          position: absolute; top: 12px; left: 13px; width: 11px; height: 58%;
          border-radius: 8px; background: #fff; opacity: .10; pointer-events: none;
        }
        .v-marks { position: absolute; inset: 0; pointer-events: none; }
        .v-mark { position: absolute; left: 0; right: 0; height: 0; border-top: 2px dashed; opacity: .85; }
        .v-mark.mk-min { border-color: var(--zdc-l-crit); }
        .v-mark.mk-max { border-color: var(--zdc-l-ok); }

        .hero-info { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
        .soc {
          font-size: 2.9rem; font-weight: 700; line-height: .95;
          display: inline-flex; align-items: flex-start;
          font-variant-numeric: tabular-nums; color: var(--primary-text-color);
        }
        .soc i {
          font-style: normal; font-size: 1.1rem; font-weight: 600;
          color: var(--secondary-text-color); margin-left: 2px; margin-top: .28em;
        }
        .soc.l-warn { color: var(--zdc-l-warn); }
        .soc.l-crit { color: var(--zdc-l-crit); }
        .soc .warn-ic { width: 22px; height: 22px; color: var(--zdc-l-crit); align-self: center; margin-right: 5px; }
        .batt-power {
          display: none; align-items: center; gap: 4px;
          font-size: 1.05rem; font-weight: 700; font-variant-numeric: tabular-nums;
          margin-top: 2px;
        }
        .batt-power.show { display: inline-flex; }
        .batt-power .ic { width: 16px; height: 16px; }
        .batt-power.bp-in { color: var(--zdc-l-ok); }
        .batt-power.bp-out { color: var(--zdc-home); }
        .kwh { font-size: .92rem; font-weight: 600; color: var(--secondary-text-color); font-variant-numeric: tabular-nums; }
        .eta {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: .82rem; font-weight: 500; color: var(--secondary-text-color);
          min-height: 0; height: 0; opacity: 0; overflow: hidden;
          transition: opacity .3s, height .3s, margin .3s;
        }
        .eta.show { height: 1.4em; opacity: 1; margin-top: 2px; }
        .eta .ic { width: 15px; height: 15px; color: var(--zdc-batt); }

        /* ---------------- power readouts strip ---------------- */
        .strip {
          display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 8px;
        }
        .rd {
          display: flex; flex-direction: column; gap: 4px; cursor: pointer;
          border: 0; font: inherit; text-align: left;
          padding: 9px 11px; border-radius: 12px;
          background: color-mix(in srgb, currentColor 5%, transparent);
          color: var(--primary-text-color);
        }
        .rd-top { display: inline-flex; align-items: center; gap: 6px; }
        .rd-top .ic { width: 15px; height: 15px; }
        .r-solar .ic { color: var(--zdc-solar); }
        .r-home .ic { color: var(--zdc-home); }
        .r-grid .ic { color: var(--zdc-grid); }
        .rd-l { font-size: .72rem; color: var(--secondary-text-color); }
        .rd-v {
          display: inline-flex; align-items: center; gap: 3px;
          font-size: .95rem; font-weight: 700; font-variant-numeric: tabular-nums;
        }
        .rd-arrow { display: inline-flex; }
        .rd-arrow .ic { width: 13px; height: 13px; }
        .rd-arrow.a-in .ic { color: var(--zdc-l-ok); }
        .rd-arrow.a-out .ic { color: var(--zdc-home); }

        /* ---------------- battery details tiles ---------------- */
        .details {
          display: grid; gap: 8px;
          grid-template-columns: repeat(auto-fit, minmax(84px, 1fr));
          border-top: 1px solid var(--divider-color, color-mix(in srgb, currentColor 12%, transparent));
          padding-top: 12px;
        }
        .tile {
          display: flex; flex-direction: column; gap: 3px;
          padding: 9px 11px; border-radius: 12px;
          background: color-mix(in srgb, currentColor 5%, transparent);
        }
        .tile[data-more] { cursor: pointer; }
        .tile[data-more]:focus-visible { outline: 2px solid var(--zdc-grid); outline-offset: 2px; }
        .tile-l {
          font-size: .68rem; font-weight: 600; letter-spacing: .04em; text-transform: uppercase;
          color: var(--secondary-text-color);
        }
        .tile-v {
          font-size: 1.15rem; font-weight: 700; line-height: 1;
          font-variant-numeric: tabular-nums; color: var(--primary-text-color);
          display: inline-flex; align-items: baseline; gap: 2px;
        }
        .tile-v i { font-style: normal; font-size: .68rem; font-weight: 600; color: var(--secondary-text-color); }
        .t-health.good .tile-v { color: var(--zdc-l-ok); }
        .t-health.warn .tile-v { color: var(--zdc-l-warn); }
        .t-health.crit .tile-v { color: var(--zdc-l-crit); }
        .t-sav .tile-v { color: var(--zdc-l-ok); }

        /* ---------------- savings & balance sections ---------------- */
        .savings, .balance {
          border-top: 1px solid var(--divider-color, color-mix(in srgb, currentColor 12%, transparent));
          padding-top: 12px;
        }
        .gauge-row { display: flex; gap: 18px; justify-content: space-around; flex-wrap: wrap; }
        .gauge { display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .gauge-ring {
          width: 84px; height: 84px; border-radius: 50%;
          background: var(--zdc-track);
          display: flex; align-items: center; justify-content: center;
          transition: background .6s;
        }
        .gauge-in {
          width: 66px; height: 66px; border-radius: 50%;
          background: var(--zdc-card-bg);
          display: flex; align-items: center; justify-content: center;
        }
        .gauge-v { font-size: 1.2rem; font-weight: 700; font-variant-numeric: tabular-nums; }
        .gauge-v i { font-style: normal; font-size: .7rem; font-weight: 600; color: var(--secondary-text-color); }
        .gauge-l { font-size: .78rem; color: var(--secondary-text-color); text-align: center; }

        /* ---------------- guided manual charge/discharge ---------------- */
        .mflow {
          border-top: 1px solid var(--divider-color, color-mix(in srgb, currentColor 12%, transparent));
          padding-top: 12px;
        }
        .mflow-btns { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
        .mfb {
          display: inline-flex; align-items: center; justify-content: center; gap: 5px;
          padding: 10px 8px; border-radius: 10px; cursor: pointer; font: inherit;
          font-size: .8rem; font-weight: 600;
          border: 1px solid var(--divider-color, color-mix(in srgb, currentColor 15%, transparent));
          background: none; color: var(--primary-text-color);
          transition: background .2s, border-color .2s, color .2s;
        }
        .mfb .ic { width: 15px; height: 15px; }
        .mfb:hover { background: color-mix(in srgb, currentColor 7%, transparent); }
        .mfb-cha.on { background: var(--zdc-l-ok); border-color: var(--zdc-l-ok); color: #fff; }
        .mfb-dis.on { background: var(--zdc-home); border-color: var(--zdc-home); color: #fff; }
        .mfb-auto.on { background: var(--primary-color, var(--zdc-grid)); border-color: var(--primary-color, var(--zdc-grid)); color: var(--text-primary-color, #fff); }
        .mflow-slider { display: flex; flex-direction: column; gap: 6px; margin-top: 10px; }

        /* ---------------- alerts banner ---------------- */
        .alerts { display: flex; flex-direction: column; gap: 6px; }
        .alert {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 12px; border-radius: 10px;
          font-size: .82rem; font-weight: 600;
        }
        .alert .ic { width: 17px; height: 17px; flex: none; }
        .alert.a-crit { background: color-mix(in srgb, var(--zdc-l-crit) 16%, transparent); color: var(--zdc-l-crit); }
        .alert.a-warn { background: color-mix(in srgb, var(--zdc-l-warn) 18%, transparent); color: var(--zdc-l-warn); }

        /* ---------------- 24 h history ---------------- */
        .history { display: flex; flex-direction: column; gap: 4px; }
        .hist-head {
          display: flex; justify-content: space-between; align-items: baseline;
          font-size: .72rem; color: var(--secondary-text-color);
        }
        .hist-now { font-weight: 700; color: var(--primary-text-color); font-variant-numeric: tabular-nums; }
        .hist-svg { width: 100%; height: 46px; display: block; }
        .hist-line { fill: none; stroke: var(--zdc-batt); stroke-width: 1.6; vector-effect: non-scaling-stroke; stroke-linejoin: round; }
        .hist-area { fill: color-mix(in srgb, var(--zdc-batt) 16%, transparent); stroke: none; }

        /* ---------------- battery packs ---------------- */
        .sec-title {
          font-size: .72rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
          color: var(--secondary-text-color); margin-bottom: 8px;
        }
        .packs {
          border-top: 1px solid var(--divider-color, color-mix(in srgb, currentColor 12%, transparent));
          padding-top: 12px;
        }
        .pack-grid { display: grid; gap: 8px; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); }
        .pack {
          display: flex; flex-direction: column; gap: 5px; cursor: pointer;
          padding: 9px 11px; border-radius: 12px;
          background: color-mix(in srgb, currentColor 5%, transparent);
        }
        .pack:focus-visible { outline: 2px solid var(--zdc-grid); outline-offset: 2px; }
        .pack-head { display: flex; justify-content: space-between; align-items: baseline; }
        .pack-n { font-size: .74rem; color: var(--secondary-text-color); }
        .pack-v { font-size: .95rem; font-weight: 700; font-variant-numeric: tabular-nums; }
        .pack-v i { font-style: normal; font-size: .62rem; font-weight: 600; color: var(--secondary-text-color); }
        .pack-bar { height: 6px; border-radius: 999px; background: var(--zdc-track); overflow: hidden; }
        .pack-fill { height: 100%; border-radius: 999px; background: var(--zdc-l-ok); width: 0; transition: width .6s, background .6s; }

        /* ---------------- manual power control ---------------- */
        .mctl .ctl-v.mv-cha { color: var(--zdc-l-ok); }
        .mctl .ctl-v.mv-dis { color: var(--zdc-home); }
        #sl-manual {
          background: linear-gradient(to right,
            color-mix(in srgb, var(--zdc-home) 45%, transparent) 0 50%,
            color-mix(in srgb, var(--zdc-l-ok) 45%, transparent) 50% 100%);
          height: 6px; border-radius: 999px; -webkit-appearance: none; appearance: none;
        }
        .mbtns { display: grid; grid-template-columns: 1fr auto 1fr; gap: 6px; margin-top: 8px; }
        .mbtn {
          display: inline-flex; align-items: center; justify-content: center; gap: 4px;
          padding: 7px 10px; border-radius: 8px; cursor: pointer; font: inherit;
          font-size: .78rem; font-weight: 600;
          border: 1px solid var(--divider-color, color-mix(in srgb, currentColor 15%, transparent));
          background: none; color: var(--primary-text-color);
        }
        .mbtn .ic { width: 14px; height: 14px; }
        .mbtn.m-cha { color: var(--zdc-l-ok); border-color: color-mix(in srgb, var(--zdc-l-ok) 40%, transparent); }
        .mbtn.m-dis { color: var(--zdc-home); border-color: color-mix(in srgb, var(--zdc-home) 45%, transparent); }
        .mbtn:hover { background: color-mix(in srgb, currentColor 8%, transparent); }

        /* ---------------- compact ---------------- */
        .cbody { display: flex; flex-direction: column; gap: 10px; }
        .crow { display: flex; align-items: center; gap: 12px; cursor: pointer; border: 0; background: none; padding: 0; width: 100%; }
        .crow .soc { font-size: 1.5rem; }
        .crow .soc i { font-size: .8rem; margin-top: .15em; }
        .bar {
          flex: 1; height: 10px; border-radius: 999px;
          background: var(--zdc-track); overflow: hidden;
        }
        .bar-fill { height: 100%; border-radius: 999px; background: var(--zdc-l-ok); width: 0; transition: width .6s, background .6s; }
        .minis { display: flex; gap: 8px; flex-wrap: wrap; }
        .mini {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 10px; border-radius: 999px; cursor: pointer; border: 0; font: inherit;
          background: color-mix(in srgb, currentColor 6%, transparent);
          font-size: .78rem; font-weight: 600; color: var(--primary-text-color);
        }
        .mini .ic { width: 15px; height: 15px; }
        .m-solar .ic { color: var(--zdc-solar); }
        .m-home .ic { color: var(--zdc-home); }
        .m-grid .ic { color: var(--zdc-grid); }

        /* ---------------- stats ---------------- */
        .stats { display: flex; gap: 8px; flex-wrap: wrap; }
        .chip {
          display: inline-flex; align-items: center; gap: 6px;
          border: 0; cursor: pointer; font: inherit;
          padding: 6px 10px; border-radius: 10px;
          background: color-mix(in srgb, currentColor 6%, transparent);
          color: var(--primary-text-color);
        }
        .chip .ic { width: 15px; height: 15px; color: var(--secondary-text-color); }
        .chip-l { font-size: .75rem; color: var(--secondary-text-color); }
        .chip-v { font-size: .78rem; font-weight: 600; }

        /* ---------------- controls ---------------- */
        .controls {
          display: flex; flex-direction: column; gap: 12px;
          border-top: 1px solid var(--divider-color, color-mix(in srgb, currentColor 12%, transparent));
          padding-top: 12px;
        }
        .ctl { display: flex; flex-direction: column; gap: 6px; }
        .ctl-l {
          font-size: .78rem; color: var(--secondary-text-color);
          display: flex; justify-content: space-between; align-items: baseline;
        }
        .ctl-v { color: var(--primary-text-color); font-weight: 600; font-size: .82rem; }
        .seg { display: flex; gap: 4px; flex-wrap: wrap; }
        .seg-b {
          flex: 1; min-width: 64px; padding: 7px 10px; cursor: pointer;
          font: inherit; font-size: .78rem; font-weight: 500;
          border: 1px solid var(--divider-color, color-mix(in srgb, currentColor 15%, transparent));
          border-radius: 8px; background: none; color: var(--primary-text-color);
          transition: background .2s, border-color .2s;
        }
        .seg-b.on {
          background: var(--primary-color, var(--zdc-grid));
          border-color: var(--primary-color, var(--zdc-grid));
          color: var(--text-primary-color, #fff); font-weight: 600;
        }
        input[type=range] {
          width: 100%; accent-color: var(--primary-color, var(--zdc-grid));
          margin: 0; cursor: pointer;
        }
        .togs { flex-direction: row; flex-wrap: wrap; gap: 8px; }
        .tog {
          display: inline-flex; align-items: center; gap: 8px;
          border: 0; cursor: pointer; font: inherit;
          padding: 6px 10px; border-radius: 10px;
          background: color-mix(in srgb, currentColor 6%, transparent);
          color: var(--primary-text-color); font-size: .78rem;
        }
        .tog-track {
          width: 30px; height: 16px; border-radius: 999px; position: relative;
          background: color-mix(in srgb, currentColor 25%, transparent);
          transition: background .2s; flex: none;
        }
        .tog-knob {
          position: absolute; top: 2px; left: 2px; width: 12px; height: 12px;
          border-radius: 50%; background: var(--zdc-card-bg); transition: left .2s;
        }
        .tog.on .tog-track { background: var(--zdc-batt); }
        .tog.on .tog-knob { left: 16px; }

        @media (max-width: 340px) {
          .hero { gap: 14px; }
          .vessel { width: 84px; height: 136px; }
          .soc { font-size: 2.3rem; }
          .rd-l { display: none; }
        }
      `;
    }
  }

  /* ------------------------------------------------------------------ *
   *  Visual editor                                                     *
   * ------------------------------------------------------------------ */
  class ZendureDashboardCardEditor extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._devSig = "";
    }

    setConfig(config) {
      this._config = { ...DEFAULTS, ...config };
      this._render();
    }

    set hass(hass) {
      this._hass = hass;
      this._render();
    }

    get hass() {
      return this._hass;
    }

    _schema() {
      const entity = (domain) => ({ entity: { domain } });
      return [
        { name: "name", selector: { text: {} } },
        {
          name: "",
          type: "expandable",
          title: t(this._hass, "ed_sec_entities"),
          expanded: true,
          schema: [
            { name: "soc_entity", selector: entity("sensor") },
            {
              name: "",
              type: "grid",
              schema: [
                { name: "solar_entity", selector: entity("sensor") },
                { name: "home_entity", selector: entity("sensor") },
                { name: "charge_entity", selector: entity("sensor") },
                { name: "discharge_entity", selector: entity("sensor") },
                { name: "grid_entity", selector: entity("sensor") },
                { name: "energy_entity", selector: entity("sensor") },
              ],
            },
          ],
        },
        {
          name: "",
          type: "expandable",
          title: t(this._hass, "ed_sec_display"),
          schema: [
            {
              name: "",
              type: "grid",
              schema: [
                { name: "show_flow", selector: { boolean: {} } },
                { name: "show_history", selector: { boolean: {} } },
                { name: "show_details", selector: { boolean: {} } },
                { name: "show_balance", selector: { boolean: {} } },
                { name: "show_savings", selector: { boolean: {} } },
                { name: "show_alerts", selector: { boolean: {} } },
                { name: "show_manual_flow", selector: { boolean: {} } },
                { name: "show_stats", selector: { boolean: {} } },
                { name: "show_controls", selector: { boolean: {} } },
                { name: "compact", selector: { boolean: {} } },
              ],
            },
            {
              name: "low_soc",
              selector: { number: { min: 5, max: 50, step: 5, mode: "slider", unit_of_measurement: "%" } },
            },
          ],
        },
        {
          name: "",
          type: "expandable",
          title: t(this._hass, "ed_sec_battery"),
          schema: [
            { name: "capacity_entity", selector: entity("sensor") },
            {
              name: "nominal_capacity",
              selector: { number: { min: 0, max: 100, step: 0.1, mode: "box", unit_of_measurement: "kWh" } },
            },
            {
              name: "",
              type: "grid",
              schema: [
                { name: "charge_total_entity", selector: entity("sensor") },
                { name: "discharge_total_entity", selector: entity("sensor") },
                { name: "min_soc_entity", selector: entity("number") },
                { name: "max_soc_entity", selector: entity("number") },
              ],
            },
            { name: "pack_entities", selector: { entity: { multiple: true, domain: "sensor" } } },
            {
              name: "capacity",
              selector: { number: { min: 0, max: 100, step: 0.1, mode: "box", unit_of_measurement: "kWh" } },
            },
          ],
        },
        {
          name: "",
          type: "expandable",
          title: t(this._hass, "ed_sec_advanced"),
          schema: [
            { name: "manual_power_entity", selector: entity("number") },
            {
              name: "",
              type: "grid",
              schema: [
                { name: "charge_max_entity", selector: entity("sensor") },
                { name: "discharge_max_entity", selector: entity("sensor") },
              ],
            },
            {
              name: "",
              type: "grid",
              schema: [
                { name: "manual_mode_value", selector: { text: {} } },
                { name: "invert_manual", selector: { boolean: {} } },
              ],
            },
            {
              name: "",
              type: "grid",
              schema: [
                { name: "connectivity_entity", selector: { entity: {} } },
                { name: "fault_entity", selector: { entity: {} } },
              ],
            },
            {
              name: "alert_temp_max",
              selector: { number: { min: 20, max: 80, step: 1, mode: "slider", unit_of_measurement: "°C" } },
            },
          ],
        },
        {
          name: "",
          type: "expandable",
          title: t(this._hass, "ed_sec_savings"),
          schema: [
            {
              name: "",
              type: "grid",
              schema: [
                { name: "electricity_price", selector: { number: { min: 0, max: 5, step: 0.001, mode: "box", unit_of_measurement: "€/kWh" } } },
                { name: "price_entity", selector: entity("sensor") },
              ],
            },
            {
              name: "",
              type: "grid",
              schema: [
                { name: "discharge_today_entity", selector: entity("sensor") },
                { name: "discharge_month_entity", selector: entity("sensor") },
                { name: "discharge_year_entity", selector: entity("sensor") },
                { name: "co2_factor", selector: { number: { min: 0, max: 1, step: 0.01, mode: "box", unit_of_measurement: "kg/kWh" } } },
              ],
            },
          ],
        },
        {
          name: "",
          type: "expandable",
          title: t(this._hass, "ed_sec_balance"),
          schema: [
            {
              name: "",
              type: "grid",
              schema: [
                { name: "pv_today_entity", selector: entity("sensor") },
                { name: "grid_export_today_entity", selector: entity("sensor") },
                { name: "home_today_entity", selector: entity("sensor") },
                { name: "grid_import_today_entity", selector: entity("sensor") },
              ],
            },
          ],
        },
        {
          name: "",
          type: "expandable",
          title: t(this._hass, "ed_sec_stats"),
          schema: [
            { name: "temp_entity", selector: entity("sensor") },
            { name: "stats_entities", selector: { entity: { multiple: true } } },
          ],
        },
        {
          name: "",
          type: "expandable",
          title: t(this._hass, "ed_sec_flow"),
          schema: [
            { name: "ac_mode_entity", selector: entity("select") },
            { name: "manager_auto_value", selector: { text: {} } },
          ],
        },
        {
          name: "",
          type: "expandable",
          title: t(this._hass, "ed_sec_controls"),
          schema: [
            { name: "mode_entity", selector: entity("select") },
            {
              name: "select_entities",
              selector: { entity: { multiple: true, domain: "select" } },
            },
            {
              name: "",
              type: "grid",
              schema: [
                { name: "charge_limit_entity", selector: entity("number") },
                { name: "discharge_limit_entity", selector: entity("number") },
              ],
            },
            {
              name: "switch_entities",
              selector: { entity: { multiple: true, domain: ["switch", "input_boolean"] } },
            },
          ],
        },
      ];
    }

    _labels() {
      const h = this._hass;
      return {
        name: t(h, "ed_name"),
        soc_entity: t(h, "ed_soc"),
        solar_entity: t(h, "ed_solar"),
        home_entity: t(h, "ed_home"),
        grid_entity: t(h, "ed_grid"),
        charge_entity: t(h, "ed_charge"),
        discharge_entity: t(h, "ed_discharge"),
        energy_entity: t(h, "ed_energy"),
        capacity_entity: t(h, "ed_capacity_entity"),
        nominal_capacity: t(h, "ed_nominal"),
        charge_total_entity: t(h, "ed_charge_total"),
        discharge_total_entity: t(h, "ed_discharge_total"),
        min_soc_entity: t(h, "ed_min_soc_entity"),
        max_soc_entity: t(h, "ed_max_soc_entity"),
        pack_entities: t(h, "ed_pack_entities"),
        temp_entity: t(h, "ed_temp"),
        show_flow: t(h, "ed_show_flow"),
        show_history: t(h, "ed_show_history"),
        show_details: t(h, "ed_show_details"),
        show_balance: t(h, "ed_show_balance"),
        show_savings: t(h, "ed_show_savings"),
        electricity_price: t(h, "ed_price"),
        price_entity: t(h, "ed_price_entity"),
        discharge_today_entity: t(h, "ed_discharge_today"),
        discharge_month_entity: t(h, "ed_discharge_month"),
        discharge_year_entity: t(h, "ed_discharge_year"),
        co2_factor: t(h, "ed_co2_factor"),
        pv_today_entity: t(h, "ed_pv_today"),
        home_today_entity: t(h, "ed_home_today"),
        grid_import_today_entity: t(h, "ed_grid_import_today"),
        grid_export_today_entity: t(h, "ed_grid_export_today"),
        ac_mode_entity: t(h, "ed_ac_mode_entity"),
        manager_auto_value: t(h, "ed_manager_auto"),
        show_manual_flow: t(h, "ed_show_manual_flow"),
        show_alerts: t(h, "ed_show_alerts"),
        show_stats: t(h, "ed_show_stats"),
        show_controls: t(h, "ed_show_controls"),
        compact: t(h, "ed_compact"),
        low_soc: t(h, "ed_low_soc"),
        capacity: t(h, "ed_capacity"),
        stats_entities: t(h, "ed_stats_entities"),
        mode_entity: t(h, "ed_mode"),
        select_entities: t(h, "ed_selects"),
        charge_limit_entity: t(h, "ed_charge_limit"),
        discharge_limit_entity: t(h, "ed_discharge_limit"),
        switch_entities: t(h, "ed_switches"),
        manual_power_entity: t(h, "ed_manual_power"),
        charge_max_entity: t(h, "ed_charge_max"),
        discharge_max_entity: t(h, "ed_discharge_max"),
        manual_mode_value: t(h, "ed_manual_mode_value"),
        invert_manual: t(h, "ed_invert_manual"),
        connectivity_entity: t(h, "ed_connectivity_entity"),
        fault_entity: t(h, "ed_fault_entity"),
        alert_temp_max: t(h, "ed_alert_temp_max"),
      };
    }

    _helpers() {
      const h = this._hass;
      return {
        soc_entity: t(h, "ed_soc_helper"),
        charge_entity: t(h, "ed_charge_helper"),
        discharge_entity: t(h, "ed_discharge_helper"),
        capacity: t(h, "ed_capacity_helper"),
        nominal_capacity: t(h, "ed_nominal_helper"),
        discharge_total_entity: t(h, "ed_discharge_total_helper"),
        pack_entities: t(h, "ed_pack_helper"),
        manual_mode_value: t(h, "ed_manual_mode_helper"),
        price_entity: t(h, "ed_price_helper"),
        discharge_today_entity: t(h, "ed_savings_helper"),
        ac_mode_entity: t(h, "ed_flow_helper"),
      };
    }

    _render() {
      if (!this._hass || !this._config) return;

      if (!this.shadowRoot.querySelector(".ed")) {
        this.shadowRoot.innerHTML = `
          <style>
            .ed { display: flex; flex-direction: column; gap: 16px; }
            .devrow { display: flex; flex-direction: column; gap: 6px; }
            .devrow label { font-size: .85rem; color: var(--secondary-text-color); }
            .devrow select {
              font: inherit; padding: 10px 12px; border-radius: 8px;
              border: 1px solid var(--divider-color, #ccc);
              background: var(--card-background-color, #fff);
              color: var(--primary-text-color); cursor: pointer;
            }
            .devrow .none { font-size: .8rem; color: var(--secondary-text-color); font-style: italic; }
            .secorder-wrap { display: flex; flex-direction: column; gap: 6px; }
            .secorder-title { font-size: .95rem; font-weight: 600; color: var(--primary-text-color); }
            .secorder-hint { font-size: .8rem; color: var(--secondary-text-color); }
            .sec-row {
              display: flex; align-items: center; justify-content: space-between; gap: 8px;
              padding: 8px 12px; border-radius: 8px;
              border: 1px solid var(--divider-color, #ccc);
              background: var(--card-background-color, #fff);
            }
            .sec-row.off { opacity: .5; }
            .sec-name { font-size: .88rem; }
            .sec-arrows { display: inline-flex; gap: 4px; }
            .sec-arrows button {
              width: 30px; height: 30px; border-radius: 6px; cursor: pointer;
              border: 1px solid var(--divider-color, #ccc);
              background: none; color: var(--primary-text-color); font-size: .9rem;
            }
            .sec-arrows button:disabled { opacity: .3; cursor: default; }
          </style>
          <div class="ed">
            <div class="devrow">
              <label id="dev-label"></label>
              <select id="dev"></select>
              <span class="none" id="dev-none" style="display:none"></span>
            </div>
            <ha-form id="form"></ha-form>
            <div class="secorder-wrap">
              <span class="secorder-title" id="secorder-title"></span>
              <span class="secorder-hint" id="secorder-hint"></span>
              <div id="secorder"></div>
            </div>
          </div>
        `;
        this.shadowRoot.getElementById("secorder").addEventListener("click", (ev) => {
          const btn = ev.target.closest("button[data-dir]");
          if (!btn) return;
          const row = btn.closest(".sec-row");
          this._moveSection(row.dataset.key, btn.dataset.dir);
        });
        this.shadowRoot.getElementById("dev").addEventListener("change", (ev) => {
          const prefix = ev.target.value;
          if (!prefix || !this._devices || !this._devices[prefix]) return;
          const d = this._devices[prefix];
          const merged = { ...this._config };
          for (const k of Object.keys(d)) {
            if (k.startsWith("__")) continue;
            merged[k] = d[k];
          }
          ev.target.value = "";
          this._config = merged;
          fire(this, "config-changed", { config: this._cleaned(merged) });
          this._render();
        });
      }

      // Device auto-fill dropdown
      this._devices = detectDevices(this._hass);
      const keys = Object.keys(this._devices).sort();
      const sig = keys.join("|");
      const sel = this.shadowRoot.getElementById("dev");
      const none = this.shadowRoot.getElementById("dev-none");
      this.shadowRoot.getElementById("dev-label").textContent = t(this._hass, "ed_autofill");
      if (sig !== this._devSig) {
        this._devSig = sig;
        sel.innerHTML =
          `<option value="">${t(this._hass, "ed_pick")}</option>` +
          keys
            .map((k) => `<option value="${k}">${this._devices[k].name}</option>`)
            .join("");
      }
      sel.style.display = keys.length ? "" : "none";
      none.style.display = keys.length ? "none" : "";
      none.textContent = t(this._hass, "ed_autofill_none");

      // ha-form (schema/labels cached per language — hass updates are frequent)
      const form = this.shadowRoot.getElementById("form");
      const lang = langOf(this._hass);
      if (this._schemaLang !== lang) {
        this._schemaLang = lang;
        this._schemaCache = this._schema();
        const labels = this._labels();
        const helpers = this._helpers();
        form.computeLabel = (s) => labels[s.name] || s.name;
        form.computeHelper = (s) => helpers[s.name] || undefined;
      }
      form.hass = this._hass;
      form.data = this._config;
      form.schema = this._schemaCache;
      if (!form._zdcBound) {
        form._zdcBound = true;
        form.addEventListener("value-changed", (ev) => {
          ev.stopPropagation();
          this._config = { ...DEFAULTS, ...ev.detail.value };
          fire(this, "config-changed", { config: this._cleaned(this._config) });
        });
      }

      this._renderSectionOrder();
    }

    _normalizedOrder() {
      const saved = Array.isArray(this._config.section_order) ? this._config.section_order : [];
      const seen = new Set();
      const out = [];
      for (const k of saved) {
        if (SECTIONS.includes(k) && !seen.has(k)) {
          seen.add(k);
          out.push(k);
        }
      }
      for (const k of SECTIONS) if (!seen.has(k)) out.push(k);
      return out;
    }

    _renderSectionOrder() {
      const h = this._hass;
      this.shadowRoot.getElementById("secorder-title").textContent = t(h, "ed_section_order");
      this.shadowRoot.getElementById("secorder-hint").textContent = t(h, "ed_section_order_info");
      const order = this._normalizedOrder();
      const last = order.length - 1;
      this.shadowRoot.getElementById("secorder").innerHTML = order
        .map(
          (key, i) => `
          <div class="sec-row" data-key="${key}">
            <span class="sec-name">${t(h, `sec_${key}`)}</span>
            <span class="sec-arrows">
              <button data-dir="up" ${i === 0 ? "disabled" : ""} aria-label="up">▲</button>
              <button data-dir="down" ${i === last ? "disabled" : ""} aria-label="down">▼</button>
            </span>
          </div>`
        )
        .join("");
    }

    _moveSection(key, dir) {
      const order = this._normalizedOrder();
      const i = order.indexOf(key);
      const j = dir === "up" ? i - 1 : i + 1;
      if (i < 0 || j < 0 || j >= order.length) return;
      [order[i], order[j]] = [order[j], order[i]];
      this._config = { ...this._config, section_order: order };
      fire(this, "config-changed", { config: this._cleaned(this._config) });
      this._renderSectionOrder();
    }

    /** Strip empty values so the stored YAML stays clean. */
    _cleaned(config) {
      const out = {};
      for (const [k, v] of Object.entries(config)) {
        if (v === "" || v === undefined || v === null) continue;
        if (Array.isArray(v) && v.length === 0) continue;
        // Values equal to their default are re-applied by setConfig — keep YAML minimal
        if (k in DEFAULTS && DEFAULTS[k] === v) continue;
        out[k] = v;
      }
      return out;
    }
  }

  /* ------------------------------------------------------------------ *
   *  Registration                                                      *
   * ------------------------------------------------------------------ */
  customElements.define(CARD_TAG, ZendureDashboardCard);
  customElements.define(EDITOR_TAG, ZendureDashboardCardEditor);

  window.customCards = window.customCards || [];
  window.customCards.push({
    type: CARD_TAG,
    name: "Zendure Dashboard Card",
    description:
      "Modern battery dashboard for Zendure devices — energy flow, statistics and controls. / Tableau de bord moderne pour batteries Zendure.",
    preview: true,
    documentationURL: "https://github.com/zarzak12/zendure-dashboard-card",
  });

  console.info(
    `%c ZENDURE-DASHBOARD-CARD %c v${CARD_VERSION} `,
    "background:#008300;color:#fff;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px",
    "background:#2a78d6;color:#fff;font-weight:700;border-radius:0 4px 4px 0;padding:2px 6px"
  );
})();

/*!
 * Zendure Dashboard Card
 * A modern, configurable Lovelace card for the Zendure Home Assistant integration.
 * https://github.com/zarzak12/zendure-dashboard-card
 *
 * License: MIT
 */
(() => {
  "use strict";

  const CARD_VERSION = "1.0.0";
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
      temperature: "Temperature",
      controls: "Controls",
      stats: "Statistics",
      mode: "Mode",
      charge_limit: "Max. charge power",
      discharge_limit: "Max. output power",
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
      ed_temp: "Temperature",
      ed_show_flow: "Energy flow diagram",
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
      temperature: "Température",
      controls: "Contrôles",
      stats: "Statistiques",
      mode: "Mode",
      charge_limit: "Puissance de charge max.",
      discharge_limit: "Puissance de sortie max.",
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
      ed_temp: "Température",
      ed_show_flow: "Diagramme de flux d'énergie",
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
  };

  const svgIcon = (name, cls = "") =>
    `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[name]}"/></svg>`;

  /* ------------------------------------------------------------------ *
   *  Zendure device auto-detection                                     *
   * ------------------------------------------------------------------ */
  const SUFFIX_MAP = {
    soc_entity: "electriclevel",
    solar_entity: "solarinputpower",
    charge_entity: "outputpackpower",
    discharge_entity: "packinputpower",
    home_entity: "outputhomepower",
    grid_entity: "gridinputpower",
  };

  function prettify(id) {
    return id
      .replace(/[_-]+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .trim();
  }

  function detectDevices(hass) {
    const devices = {};
    if (!hass || !hass.states) return devices;

    for (const eid of Object.keys(hass.states)) {
      const dot = eid.indexOf(".");
      const domain = eid.slice(0, dot);
      const obj = eid.slice(dot + 1).toLowerCase();
      if (domain !== "sensor") continue;
      for (const key of Object.keys(SUFFIX_MAP)) {
        const suf = SUFFIX_MAP[key];
        if (obj.endsWith(suf)) {
          const prefix = obj.slice(0, obj.length - suf.length).replace(/[_-]+$/, "");
          if (!devices[prefix]) devices[prefix] = { __prefix: prefix };
          if (!devices[prefix][key]) devices[prefix][key] = eid;
        }
      }
    }

    // Keep only credible devices (at least a SoC or two matched power sensors)
    for (const p of Object.keys(devices)) {
      const d = devices[p];
      const matches = Object.keys(d).filter((k) => k.endsWith("_entity")).length;
      if (!d.soc_entity && matches < 2) {
        delete devices[p];
        continue;
      }

      // Secondary lookups within the same prefix
      for (const eid of Object.keys(hass.states)) {
        const dot = eid.indexOf(".");
        const domain = eid.slice(0, dot);
        const obj = eid.slice(dot + 1).toLowerCase();
        if (!obj.startsWith(p)) continue;
        const st = hass.states[eid];
        const attrs = (st && st.attributes) || {};
        if (domain === "sensor") {
          if (!d.temp_entity && attrs.device_class === "temperature") d.temp_entity = eid;
          if (
            !d.energy_entity &&
            /kwh/i.test(attrs.unit_of_measurement || "") &&
            /avail|remain|kwh|energy/.test(obj)
          )
            d.energy_entity = eid;
        } else if (domain === "select") {
          if (/mode/.test(obj)) {
            if (!d.mode_entity) d.mode_entity = eid;
            else {
              if (!d.select_entities) d.select_entities = [];
              if (!d.select_entities.includes(eid)) d.select_entities.push(eid);
            }
          }
        } else if (domain === "number") {
          if (!d.charge_limit_entity && /(input|charge)[_-]?limit/.test(obj))
            d.charge_limit_entity = eid;
          if (!d.discharge_limit_entity && /(output|discharge)[_-]?limit/.test(obj))
            d.discharge_limit_entity = eid;
        }
      }

      // Friendly device name (device registry when available)
      let name = prettify(p);
      try {
        const anyEid = d.soc_entity || d.solar_entity || d.home_entity;
        const reg = hass.entities && hass.entities[anyEid];
        const dev = reg && hass.devices && hass.devices[reg.device_id];
        if (dev && dev.name) name = dev.name;
      } catch (_e) {
        /* registry not available — keep prettified prefix */
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

  const DEFAULTS = {
    name: "",
    soc_entity: "",
    solar_entity: "",
    home_entity: "",
    grid_entity: "",
    charge_entity: "",
    discharge_entity: "",
    energy_entity: "",
    temp_entity: "",
    mode_entity: "",
    select_entities: [],
    charge_limit_entity: "",
    discharge_limit_entity: "",
    stats_entities: [],
    switch_entities: [],
    show_flow: true,
    show_stats: true,
    show_controls: true,
    compact: false,
    invert_battery: false,
    low_soc: 15,
    flow_threshold: 10,
  };

  /* Flow geometry — viewBox 0 0 400 240 */
  const FLOW_PATHS = {
    solar: "M 90 66 Q 115 75 150 95",
    grid: "M 90 174 Q 115 165 150 145",
    home: "M 258 120 L 302 120",
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
      this._flow = {};
      this._lastStates = {};
      this._sliderDrag = {};
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
        if (k === "__prefix") continue;
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
        c.mode_entity, c.charge_limit_entity, c.discharge_limit_entity,
        ...(c.select_entities || []),
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

      const hasFlow =
        c.show_flow && !c.compact &&
        (c.solar_entity || c.home_entity || c.grid_entity);

      const configured = this._allEntities().length > 0;

      this.shadowRoot.innerHTML = `
        <style>${this._styles()}</style>
        <ha-card>
          <div class="card ${c.compact ? "compact" : ""}">
            ${this._headerHtml()}
            ${
              !configured
                ? `<div class="empty">${svgIcon("battery")}<p>${t(h, "not_configured")}</p></div>`
                : c.compact
                  ? this._compactHtml()
                  : this._heroHtml(hasFlow)
            }
            ${configured && !c.compact && c.show_stats ? this._statsHtml() : ""}
            ${configured && !c.compact && c.show_controls ? this._controlsHtml() : ""}
          </div>
        </ha-card>
      `;

      this._cacheRefs();
      this._bindEvents();
      this._built = true;
      this._lastStates = {};
      this._update();
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

    _nodeHtml(key, icon, label) {
      return `
        <div class="node n-${key}" id="node-${key}" role="button" tabindex="0">
          <div class="circle">${svgIcon(icon)}<span class="val" id="val-${key}">—</span></div>
          <span class="lbl">${label}</span>
        </div>`;
    }

    _heroHtml(hasFlow) {
      const c = this._config;
      const h = this._hass;
      let svg = "";
      let nodes = "";
      if (hasFlow) {
        const flows = [];
        if (c.solar_entity)
          flows.push(this._flowSvg("solar", FLOW_PATHS.solar));
        if (c.grid_entity) flows.push(this._flowSvg("grid", FLOW_PATHS.grid));
        if (c.home_entity) flows.push(this._flowSvg("home", FLOW_PATHS.home));
        const defs = `<defs>
          <filter id="zdc-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>`;
        svg = `<svg class="wires" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet">${defs}${flows.join("")}</svg>`;
        if (c.solar_entity) nodes += this._nodeHtml("solar", "sun", t(h, "solar"));
        if (c.grid_entity) nodes += this._nodeHtml("grid", "tower", t(h, "grid"));
        if (c.home_entity) nodes += this._nodeHtml("home", "home", t(h, "home"));
      }
      return `
        <section class="flow ${hasFlow ? "" : "solo"}">
          ${svg}
          ${nodes}
          <div class="hero" id="hero" role="button" tabindex="0">
            <div class="ring" id="ring">
              <div class="ring-in">
                <span class="soc" id="soc">—</span>
                <span class="kwh" id="kwh"></span>
                <span class="batt-power" id="batt-power"></span>
              </div>
            </div>
            <span class="lbl">${t(h, "battery")}</span>
          </div>
        </section>`;
    }

    _flowSvg(key, path) {
      return `
        <path class="wire w-${key}" d="${path}"/>
        <path class="comet c-${key}" d="${path}" filter="url(#zdc-glow)"/>`;
    }

    _compactHtml() {
      const c = this._config;
      const h = this._hass;
      const mini = [];
      if (c.solar_entity)
        mini.push(`<div class="mini m-solar" id="node-solar" role="button" tabindex="0">${svgIcon("sun")}<span id="val-solar">—</span></div>`);
      if (c.home_entity)
        mini.push(`<div class="mini m-home" id="node-home" role="button" tabindex="0">${svgIcon("home")}<span id="val-home">—</span></div>`);
      if (c.grid_entity)
        mini.push(`<div class="mini m-grid" id="node-grid" role="button" tabindex="0">${svgIcon("tower")}<span id="val-grid">—</span></div>`);
      return `
        <section class="cbody">
          <div class="crow" id="hero" role="button" tabindex="0">
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

    _controlsHtml() {
      const c = this._config;
      const h = this._hass;
      const parts = [];

      // Mode selectors: primary mode_entity + any extra select entities
      const selects = [];
      const pushSelect = (eid) => {
        if (eid && h.states[eid] && !selects.includes(eid)) selects.push(eid);
      };
      pushSelect(c.mode_entity);
      (c.select_entities || []).forEach(pushSelect);
      for (const eid of selects) {
        const st = h.states[eid];
        let label =
          eid === c.mode_entity
            ? t(h, "mode")
            : st.attributes.friendly_name || eid;
        if (c.name && label.startsWith(c.name)) label = label.slice(c.name.length).trim();
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
        kwh: $("#kwh"),
        ring: $("#ring"),
        battPower: $("#batt-power"),
        barFill: $("#bar-fill"),
        hero: $("#hero"),
      };
      this._killTweens();
      this._flow = {};
      for (const key of ["solar", "grid", "home"]) {
        this._flow[key] = {
          val: $(`#val-${key}`),
          node: $(`#node-${key}`),
          wire: $(`.w-${key}`),
          comet: $(`.c-${key}`),
          tl: null,
          dir: 0,
          lastDur: 0,
        };
      }
      // GSAP + DrawSVGPlugin are bundled above this code in the dist file
      this._gsapOK = false;
      if (!this._reducedMotion() && window.gsap && window.DrawSVGPlugin) {
        window.gsap.registerPlugin(window.DrawSVGPlugin);
        this._gsapOK = true;
      }
    }

    _reducedMotion() {
      return (
        typeof matchMedia === "function" &&
        matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }

    _killTweens() {
      if (!this._flow) return;
      for (const key of Object.keys(this._flow)) {
        const f = this._flow[key];
        if (f && f.tl) {
          f.tl.kill();
          f.tl = null;
        }
      }
    }

    disconnectedCallback() {
      this._killTweens();
      this._built = false;
    }

    _bindEvents() {
      const c = this._config;
      const root = this.shadowRoot;

      const clickable = [
        [this._els.hero, c.soc_entity],
        [this._flow.solar.node, c.solar_entity],
        [this._flow.home.node, c.home_entity],
        [this._flow.grid.node, c.grid_entity],
      ];
      for (const [el, eid] of clickable) {
        if (!el || !eid) continue;
        el.addEventListener("click", () => moreInfo(this, eid));
        el.addEventListener("keydown", (ev) => {
          if (ev.key === "Enter" || ev.key === " ") moreInfo(this, eid);
        });
      }

      root.querySelectorAll(".chip").forEach((chip) => {
        chip.addEventListener("click", () => moreInfo(this, chip.dataset.entity));
      });

      root.querySelectorAll("input[type=range]").forEach((sl) => {
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

      root.querySelectorAll(".tog").forEach((btn) => {
        btn.addEventListener("click", () => {
          this._hass.callService("homeassistant", "toggle", {
            entity_id: btn.dataset.entity,
          });
        });
      });
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

      // Battery hero
      if (this._els.soc) {
        const low = soc !== null && soc <= c.low_soc;
        this._els.soc.innerHTML =
          soc === null
            ? "—"
            : `${low ? svgIcon("alert", "warn-ic") : ""}${Math.round(soc)}<i>%</i>`;
        this._els.soc.classList.toggle("low", low);
      }
      if (this._els.ring && soc !== null) {
        const pct = Math.max(0, Math.min(100, soc));
        let ringColor = "var(--zdc-batt)";
        if (soc <= c.low_soc) ringColor = "var(--zdc-crit)";
        else if (soc <= c.low_soc * 2) ringColor = "var(--zdc-warn)";
        this._els.ring.style.background = `conic-gradient(${ringColor} ${pct}%, var(--zdc-track) 0)`;
      }
      if (this._els.barFill && soc !== null) {
        const pct = Math.max(0, Math.min(100, soc));
        this._els.barFill.style.width = `${pct}%`;
        this._els.barFill.style.background =
          soc <= c.low_soc
            ? "var(--zdc-crit)"
            : soc <= c.low_soc * 2
              ? "var(--zdc-warn)"
              : "var(--zdc-batt)";
      }
      if (this._els.kwh) {
        const e = num(h, c.energy_entity);
        this._els.kwh.textContent = e !== null ? `${e.toFixed(2)} kWh` : "";
      }
      if (this._els.battPower) {
        if (net !== null && Math.abs(net) > thr) {
          const up = net > 0;
          this._els.battPower.innerHTML = `${svgIcon(up ? "down" : "up")}${fmtPower(h, Math.abs(net))}`;
          this._els.battPower.className = `batt-power ${up ? "bp-in" : "bp-out"}`;
        } else {
          this._els.battPower.textContent = "";
          this._els.battPower.className = "batt-power";
        }
      }

      // Nodes + flow animation
      this._updateFlow("solar", solar, solar !== null && solar > thr, 1);
      this._updateFlow("home", home, home !== null && home > thr, 1);
      // grid: positive → grid feeds battery ; negative → export to grid
      this._updateFlow(
        "grid",
        grid,
        grid !== null && Math.abs(grid) > thr,
        grid !== null && grid < 0 ? -1 : 1
      );

      // Stats
      this.shadowRoot.querySelectorAll("[data-val]").forEach((el) => {
        el.textContent = fmtState(h, el.dataset.val);
      });
      this.shadowRoot.querySelectorAll("[data-name]").forEach((el) => {
        const st = h.states[el.dataset.name];
        let label = st ? st.attributes.friendly_name || el.dataset.name : el.dataset.name;
        if (c.name && label.startsWith(c.name)) label = label.slice(c.name.length).trim();
        el.textContent = label;
      });

      // Mode segmented controls
      this._updateSelects();

      // Sliders
      for (const [key, eid] of [
        ["charge", c.charge_limit_entity],
        ["discharge", c.discharge_limit_entity],
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

    /**
     * A "comet": a short glowing stroke segment that grows out of the source,
     * races along the wire and gets absorbed at the destination.
     * Built once per direction; speed is driven by timeScale (no restarts).
     */
    _makeCometTl(comet, direction) {
      const G = window.gsap;
      const tl = G.timeline({ repeat: -1, paused: true });
      if (direction === 1) {
        tl.fromTo(
          comet,
          { drawSVG: "0% 0%" },
          { drawSVG: "0% 32%", duration: 0.32, ease: "power1.in" }
        )
          .to(comet, { drawSVG: "68% 100%", duration: 0.56, ease: "none" })
          .to(comet, { drawSVG: "100% 100%", duration: 0.32, ease: "power1.out" });
      } else {
        tl.fromTo(
          comet,
          { drawSVG: "100% 100%" },
          { drawSVG: "68% 100%", duration: 0.32, ease: "power1.in" }
        )
          .to(comet, { drawSVG: "0% 32%", duration: 0.56, ease: "none" })
          .to(comet, { drawSVG: "0% 0%", duration: 0.32, ease: "power1.out" });
      }
      return tl;
    }

    _updateFlow(key, value, active, direction) {
      const f = this._flow[key];
      if (!f) return;
      if (f.val) f.val.textContent = fmtPower(this._hass, value === null ? null : Math.abs(value));
      if (f.wire) f.wire.classList.toggle("active", !!active);
      if (!f.comet) return;

      if (!this._gsapOK) {
        // Reduced motion or GSAP unavailable: static dashed wire only
        f.comet.style.opacity = "0";
        return;
      }

      if (!active) {
        if (f.tl) f.tl.pause();
        f.comet.style.opacity = "0";
        return;
      }

      if (!f.tl || f.dir !== direction) {
        if (f.tl) f.tl.kill();
        f.tl = this._makeCometTl(f.comet, direction);
        f.dir = direction;
      }

      const w = Math.abs(value);
      // Full traverse time: 0.8s (high power) … 8s (trickle), bucketed to 0.1s
      const dur = Math.round(Math.max(0.8, Math.min(8, 2500 / Math.max(w, 1))) * 10) / 10;
      if (dur !== f.lastDur) {
        f.lastDur = dur;
        f.tl.timeScale(1.2 / dur); // timeline is 1.2s at timeScale 1
      }
      f.comet.style.opacity = "1";
      if (f.tl.paused()) f.tl.play();
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
      if (this._config.compact) return 2;
      let size = 5;
      if (this._config.show_stats) size += 1;
      if (this._config.show_controls) size += 2;
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
          --zdc-track: color-mix(in srgb, currentColor 10%, transparent);
          --zdc-card-bg: var(--ha-card-background, var(--card-background-color, #fff));
        }
        :host([dark]) {
          --zdc-solar: var(--zendure-solar-color, #c98500);
          --zdc-grid:  var(--zendure-grid-color, #3987e5);
          --zdc-home:  var(--zendure-home-color, #d55181);
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

        /* ---------------- flow ---------------- */
        .flow { position: relative; aspect-ratio: 400 / 240; }
        .flow.solo { aspect-ratio: auto; display: flex; justify-content: center; padding: 8px 0; }
        .wires { position: absolute; inset: 0; width: 100%; height: 100%; }
        .wire {
          fill: none; stroke-width: 2; stroke-linecap: round; opacity: .22;
          transition: opacity .3s;
        }
        .wire.active { opacity: .45; }
        .w-solar { stroke: var(--zdc-solar); }
        .w-grid  { stroke: var(--zdc-grid); }
        .w-home  { stroke: var(--zdc-home); }
        .comet {
          fill: none; stroke-width: 3.5; stroke-linecap: round;
          opacity: 0; transition: opacity .25s;
        }
        .c-solar { stroke: var(--zdc-solar); }
        .c-grid  { stroke: var(--zdc-grid); }
        .c-home  { stroke: var(--zdc-home); }

        .node {
          position: absolute; display: flex; flex-direction: column;
          align-items: center; gap: 4px; transform: translate(-50%, -50%);
          cursor: pointer; border: 0; background: none; padding: 0;
        }
        .node:focus-visible, .hero:focus-visible { outline: 2px solid var(--zdc-grid); outline-offset: 2px; border-radius: 12px; }
        .node .circle {
          width: 64px; height: 64px; border-radius: 50%;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1px;
          border: 2px solid; background: var(--zdc-card-bg);
        }
        .node .val { font-size: .72rem; font-weight: 600; color: var(--primary-text-color); }
        .node .lbl, .hero .lbl { font-size: .75rem; color: var(--secondary-text-color); }
        .n-solar { left: 15.5%; top: 21.7%; }
        .n-solar .circle { border-color: var(--zdc-solar); }
        .n-solar .ic { color: var(--zdc-solar); }
        .n-grid { left: 15.5%; top: 78.3%; flex-direction: column-reverse; }
        .n-grid .circle { border-color: var(--zdc-grid); }
        .n-grid .ic { color: var(--zdc-grid); }
        .n-home { left: 84.5%; top: 50%; }
        .n-home .circle { border-color: var(--zdc-home); }
        .n-home .ic { color: var(--zdc-home); }

        .hero {
          position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
          display: flex; flex-direction: column; align-items: center; gap: 6px; cursor: pointer;
        }
        .flow.solo .hero { position: static; transform: none; }
        .ring {
          width: 118px; height: 118px; border-radius: 50%;
          background: conic-gradient(var(--zdc-batt) 0%, var(--zdc-track) 0);
          display: flex; align-items: center; justify-content: center;
          transition: background .6s;
        }
        .ring-in {
          width: 100px; height: 100px; border-radius: 50%;
          background: var(--zdc-card-bg);
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1px;
        }
        .soc { font-size: 1.7rem; font-weight: 700; line-height: 1; display: inline-flex; align-items: baseline; }
        .soc i { font-style: normal; font-size: .8rem; font-weight: 600; color: var(--secondary-text-color); margin-left: 1px; }
        .soc.low { color: var(--zdc-crit); }
        .soc .warn-ic { width: 14px; height: 14px; color: var(--zdc-crit); align-self: center; margin-right: 3px; }
        .kwh { font-size: .72rem; color: var(--secondary-text-color); }
        .batt-power {
          display: inline-flex; align-items: center; gap: 2px;
          font-size: .72rem; font-weight: 600; min-height: 14px;
        }
        .batt-power .ic { width: 12px; height: 12px; }
        .bp-in { color: var(--zdc-batt); }
        .bp-out { color: var(--zdc-home); }

        /* ---------------- compact ---------------- */
        .cbody { display: flex; flex-direction: column; gap: 10px; }
        .crow { display: flex; align-items: center; gap: 12px; cursor: pointer; }
        .crow .soc { font-size: 1.4rem; }
        .bar {
          flex: 1; height: 10px; border-radius: 999px;
          background: var(--zdc-track); overflow: hidden;
        }
        .bar-fill { height: 100%; border-radius: 999px; background: var(--zdc-batt); width: 0; transition: width .6s, background .6s; }
        .minis { display: flex; gap: 8px; flex-wrap: wrap; }
        .mini {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 10px; border-radius: 999px; cursor: pointer;
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

        @media (max-width: 380px) {
          .node .circle { width: 54px; height: 54px; }
          .ring { width: 100px; height: 100px; }
          .ring-in { width: 84px; height: 84px; }
          .soc { font-size: 1.4rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .comet { display: none !important; }
          .wire.active { opacity: .8; stroke-dasharray: 4 6; }
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
          title: t(this._hass, "ed_sec_stats"),
          schema: [
            { name: "temp_entity", selector: entity("sensor") },
            { name: "stats_entities", selector: { entity: { multiple: true } } },
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
        temp_entity: t(h, "ed_temp"),
        show_flow: t(h, "ed_show_flow"),
        show_stats: t(h, "ed_show_stats"),
        show_controls: t(h, "ed_show_controls"),
        compact: t(h, "ed_compact"),
        low_soc: t(h, "ed_low_soc"),
        stats_entities: t(h, "ed_stats_entities"),
        mode_entity: t(h, "ed_mode"),
        select_entities: t(h, "ed_selects"),
        charge_limit_entity: t(h, "ed_charge_limit"),
        discharge_limit_entity: t(h, "ed_discharge_limit"),
        switch_entities: t(h, "ed_switches"),
      };
    }

    _helpers() {
      const h = this._hass;
      return {
        soc_entity: t(h, "ed_soc_helper"),
        charge_entity: t(h, "ed_charge_helper"),
        discharge_entity: t(h, "ed_discharge_helper"),
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
          </style>
          <div class="ed">
            <div class="devrow">
              <label id="dev-label"></label>
              <select id="dev"></select>
              <span class="none" id="dev-none" style="display:none"></span>
            </div>
            <ha-form id="form"></ha-form>
          </div>
        `;
        this.shadowRoot.getElementById("dev").addEventListener("change", (ev) => {
          const prefix = ev.target.value;
          if (!prefix || !this._devices || !this._devices[prefix]) return;
          const d = this._devices[prefix];
          const merged = { ...this._config };
          for (const k of Object.keys(d)) {
            if (k === "__prefix") continue;
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

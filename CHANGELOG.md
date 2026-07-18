# Changelog

## 1.5.0 — 2026-07-18

Priority-2 feature pack — the money argument:

- **Savings & CO₂ block** — value of the energy the battery discharged
  (today / this month / this year) × your tariff, plus CO₂ avoided.
  Options: `discharge_today_entity`, `discharge_month_entity`,
  `discharge_year_entity`, `electricity_price`, `price_entity` (dynamic),
  `co2_factor`, `show_savings`
- **Energy balance block** — self-consumption and self-sufficiency gauges
  from today's solar / home / import / export. Options: `pv_today_entity`,
  `home_today_entity`, `grid_import_today_entity`, `grid_export_today_entity`,
  `show_balance`
- **Guided manual charge / discharge panel** — one-tap Force charge / Force
  discharge / Auto buttons that set the manager to Off, flip the AC mode and
  reveal the matching power-limit slider. Options: `show_manual_flow`,
  `ac_mode_entity`, `manager_auto_value`
- **Reorderable sections** — drag-free ▲/▼ controls in the editor set
  `section_order`; the card renders the sections below the battery in that order

## 1.4.0 — 2026-07-17

- **Reworked liquid vessel** — the surface is now three layered waves whose
  sampled points oscillate over time with a slow amplitude "breathing", for an
  organic, non-triangular water look; the fill level eases smoothly to the SoC
- **Removed GSAP** — the wave animation is a tiny `requestAnimationFrame` loop,
  so the card is now **dependency-free**; bundle shrinks from ~162 KB to ~89 KB
  and the ES-module/UMD edge case is gone for good

## 1.3.1 — 2026-07-17

- Live **battery power** (charge/discharge W with arrow) shown next to the vessel
- **Ocean-like waves**: each crest sums three sine components of different
  wavelengths for an irregular, natural surface (three parallax layers)

## 1.3.0 — 2026-07-17

Priority-1 feature pack — turns the card into a real battery remote:

- **Manual power control** — a bipolar slider bounded by the real limits
  (`charge_max_entity` / `discharge_max_entity`) plus Charge / Pause / Discharge
  buttons; shown only in manual mode (`manual_power_entity`, `manual_mode_value`,
  `invert_manual`)
- **Reserve & ceiling SoC** — `min_soc_entity` / `max_soc_entity` sliders with
  dashed markers drawn on the vessel
- **Per-pack breakdown** — `pack_entities`: a mini-gauge per stacked pack
- **Smart alerts banner** — low battery, device offline (`connectivity_entity`),
  high temperature (`alert_temp_max`), charging below 0 °C, fault (`fault_entity`)
- **24 h battery-level graph** — SoC sparkline via Home Assistant's history API
- Toggles: `show_alerts`, `show_history`

## 1.2.1 — 2026-07-17

- Cleaner chip/switch labels: strip the device name, card title and the Zendure
  integration's "… zendure - " prefix (e.g. "SolarFlow 2400 AC zendure - charge
  journalière" → "Charge journalière")

## 1.2.0 — 2026-07-17

- **Battery details grid** — new tiles for available energy, total capacity,
  **state of health** (current capacity ÷ nominal), **cycle count**
  (lifetime discharged ÷ capacity) and round-trip **efficiency**
- New options: `capacity_entity` (total-capacity sensor, also feeds the ETA),
  `nominal_capacity`, `charge_total_entity`, `discharge_total_entity`,
  `show_details`
- Capacity for the projection now prefers the capacity sensor, then kWh+SoC, then the manual value

## 1.1.0 — 2026-07-17

- **New hero: animated liquid "battery vessel"** replacing the flow diagram — a glass
  cell fills to the exact SoC, waves speed up with power throughput, bubbles rise while
  charging, colour shifts green → amber → red (GSAP-driven)
- **Smart projection**: "Full in …" / "Runtime …" computed from net power and capacity;
  capacity auto-derived from the kWh sensor or set via the new `capacity` option (+ `reserve_soc`)
- **Power readouts strip** (solar / home / grid with direction arrows) replaces the
  redundant flow wires; `show_flow` now toggles this strip
- Dropped DrawSVGPlugin (no longer needed); bundle is GSAP core only

## 1.0.0 — 2026-07-16

Initial release / Première version.

- Battery hero view (SoC ring, stored kWh, live charge/discharge power)
- Animated solar / battery / home / grid energy flow (GSAP)
- Multiple mode selectors (`mode_entity` + `select_entities`) with translated option labels (input → Charge/Charge, output → Discharge/Décharge…)
- Statistics chips (temperature + custom sensors)
- Built-in controls: operation mode, charge & discharge limits, switches
- Full visual editor with automatic Zendure device detection
- English + French localization
- Light/dark themes, colorblind-safe palette, reduced-motion support
- Compact mode for multi-device dashboards

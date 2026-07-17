# Changelog

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

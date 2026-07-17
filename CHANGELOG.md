# Changelog

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

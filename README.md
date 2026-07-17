# Zendure Dashboard Card

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, fully configurable Lovelace card to **monitor and control your Zendure batteries** (SolarFlow, Hyper 2000, Hub, AIO, Ace, SuperBase…) from Home Assistant.

🇫🇷 **[Documentation en français plus bas](#-documentation-en-français)**

![Card preview](docs/preview.png)

## Features

- 🌊 **Living battery vessel** — a glass cell fills with animated liquid to the exact state of charge; waves speed up with power throughput, bubbles rise while charging, colour shifts green → amber → red as it drains
- ⏱️ **Smart projection** — "Full in 2 h 15" / "Runtime 5 h 30", computed from net power and capacity (something no native HA card shows)
- 🩺 **Battery details** — available energy, total capacity, **state of health**, **cycle count** and round-trip **efficiency**, computed from your sensors
- 🎚️ **Manual power remote** — a ±max slider (bounded by your real charge/discharge limits) + Charge / Pause / Discharge buttons, shown in manual mode
- 🧱 **Per-pack breakdown** — a mini-gauge for every stacked battery pack
- 🔔 **Smart alerts** — low battery, offline, high temperature, charging below 0 °C, fault
- 📉 **24 h graph** — battery-level history sparkline
- 🎯 **Reserve & ceiling** — Min/Max SoC sliders with markers on the vessel
- 📈 **Clean power readouts** — solar / home / grid values with direction arrows (no redundant flow diagram — HA's energy card already does that)
- 📊 **Statistics chips** — temperature + any extra sensors you pick
- 🎛️ **Built-in controls** — operation mode, charge/discharge limits, switches (no extra cards needed)
- 🧙 **Full visual editor** — no YAML required, with **automatic Zendure device detection**
- 🌍 **English + French**, follows the Home Assistant language automatically
- 🌗 **Light & dark themes**, colorblind-safe validated palette, `prefers-reduced-motion` support
- 📱 Responsive — works in Masonry and Sections dashboards, compact mode for dense layouts
- 🪶 Single self-contained file — **zero dependencies** (waves & liquid are pure CSS/SVG), works offline

Works with the [Zendure Home Assistant integration](https://github.com/Zendure/Zendure-HA) and any other integration — every entity can be selected manually.

## Installation

### Via HACS (recommended)

1. Open **HACS** in Home Assistant
2. Menu (⋮) → **Custom repositories**
3. Add this repository URL, category **Dashboard** (or *Lovelace/Plugin* on older HACS)
4. Search for **Zendure Dashboard Card** and download it
5. Reload your browser (Ctrl+F5)

### Manual

1. Download `zendure-dashboard-card.js` from the [latest release](../../releases)
2. Copy it to `config/www/`
3. **Settings → Dashboards → ⋮ → Resources → Add resource**:
   - URL: `/local/zendure-dashboard-card.js`
   - Type: **JavaScript module**

## Usage

1. Edit your dashboard → **Add card** → search **Zendure**
2. In the editor, use **“Auto-fill from a detected device”** — the card finds your Zendure devices and fills every entity automatically
3. Toggle the sections you want (flow, statistics, controls) — done ✨

### YAML example

```yaml
type: custom:zendure-dashboard-card
name: Hyper 2000 — Garage
soc_entity: sensor.hyper2000_electriclevel
solar_entity: sensor.hyper2000_solarinputpower
home_entity: sensor.hyper2000_outputhomepower
grid_entity: sensor.hyper2000_gridinputpower
charge_entity: sensor.hyper2000_outputpackpower
discharge_entity: sensor.hyper2000_packinputpower
energy_entity: sensor.hyper2000_availablekwh
temp_entity: sensor.hyper2000_temperature
mode_entity: select.hyper2000_acmode
select_entities:
  - select.solarflow_2400_ac_ac_mode   # charge/discharge mode as buttons
charge_limit_entity: number.hyper2000_inputlimit
discharge_limit_entity: number.hyper2000_outputlimit
stats_entities:
  - sensor.hyper2000_minsoc
  - sensor.hyper2000_socset
switch_entities:
  - switch.hyper2000_buzzer
```

### All options

| Option | Type | Default | Description |
|---|---|---|---|
| `name` | string | device name | Card title |
| `soc_entity` | entity | — | Battery level in % (`electricLevel`) |
| `solar_entity` | entity | — | Solar input power (`solarInputPower`) |
| `home_entity` | entity | — | Output to home (`outputHomePower`) |
| `grid_entity` | entity | — | Grid input power (`gridInputPower`), negative = export |
| `charge_entity` | entity | — | Power flowing **into** the battery (`outputPackPower`) |
| `discharge_entity` | entity | — | Power flowing **out of** the battery (`packInputPower`) |
| `energy_entity` | entity | — | Available energy in kWh, shown under the SoC and as the "Available" tile |
| `capacity_entity` | entity | — | Total-capacity sensor (kWh) — drives the projection and the "Capacity"/"Health" tiles |
| `nominal_capacity` | number | — | Rated capacity (kWh) — enables the state-of-health tile (current ÷ nominal) |
| `charge_total_entity` | entity | — | Lifetime charged energy (kWh) — enables the efficiency tile |
| `discharge_total_entity` | entity | — | Lifetime discharged energy (kWh) — enables the cycle-count and efficiency tiles |
| `capacity` | number | — | Manual capacity (kWh) fallback when no capacity sensor exists |
| `reserve_soc` | number | `0` | Floor (%) used as "empty" for the runtime estimate |
| `show_details` | bool | `true` | Show the battery details grid (available / capacity / health / cycles / efficiency) |
| `manual_power_entity` | entity | — | `number` entity for manual power (± W) — shows the manual remote |
| `charge_max_entity` | entity | — | Sensor giving the max charge power (upper bound of the manual slider) |
| `discharge_max_entity` | entity | — | Sensor giving the max output power (lower bound of the manual slider) |
| `manual_mode_value` | string | `manual` | The manual remote shows only when the mode entity equals this value |
| `invert_manual` | bool | `false` | Flip the manual power sign if your device treats positive as discharge |
| `min_soc_entity` | entity | — | `number` reserve SoC — slider + red marker on the vessel |
| `max_soc_entity` | entity | — | `number` max SoC — slider + green marker on the vessel |
| `pack_entities` | list | `[]` | One battery-level sensor per stacked pack — shown as mini-gauges |
| `connectivity_entity` | entity | — | Online/offline entity for the offline alert |
| `fault_entity` | entity | — | Fault entity (on = problem) for the fault alert |
| `alert_temp_max` | number | `50` | High-temperature alert threshold (°C) |
| `show_alerts` | bool | `true` | Show the alerts banner |
| `show_history` | bool | `true` | Show the 24 h battery-level graph |
| `temp_entity` | entity | — | Temperature chip in the statistics row |
| `mode_entity` | entity | — | `select` entity rendered as segmented buttons |
| `select_entities` | list | `[]` | Extra `select` entities rendered as segmented buttons (e.g. AC charge/discharge mode). Known option values (`input`, `output`, `smart`, `manual`, `off`) are translated automatically |
| `charge_limit_entity` | entity | — | `number` entity rendered as a slider |
| `discharge_limit_entity` | entity | — | `number` entity rendered as a slider |
| `stats_entities` | list | `[]` | Extra sensors shown as chips |
| `switch_entities` | list | `[]` | `switch` / `input_boolean` entities shown as toggles |
| `show_flow` | bool | `true` | Show the power readouts strip (solar / home / grid) |
| `show_stats` | bool | `true` | Show the statistics row |
| `show_controls` | bool | `true` | Show the control section |
| `compact` | bool | `false` | Dense single-block layout (SoC bar + power chips) |
| `invert_battery` | bool | `false` | Invert sign when a single signed battery power sensor is used |
| `low_soc` | number | `15` | Low battery threshold in % (red below, amber below 2×) |
| `flow_threshold` | number | `10` | Minimum power in W to animate a flow |

### Multiple devices

Add one card per device — the auto-fill dropdown lists every detected Zendure device. The compact mode is handy for a stack of several batteries.

### Theming

Override the palette from any Home Assistant theme:

```yaml
zendure-solar-color: "#eda100"
zendure-battery-color: "#008300"
zendure-grid-color: "#2a78d6"
zendure-home-color: "#e87ba4"
```

## Development

The card source lives in [`src/zendure-dashboard-card.js`](src/zendure-dashboard-card.js). The build step just adds a licence banner (the card has **no dependencies** — the wave animation is a tiny `requestAnimationFrame` loop, everything else is CSS/SVG):

```bash
node scripts/build.mjs          # → dist/zendure-dashboard-card.js
node scripts/test-module-load.mjs   # sanity-check: loads as an ES module
```

Never edit `dist/` directly — CI rejects a `dist` that doesn't match `src`.

## Troubleshooting

- **“Custom element doesn't exist”** → the resource is missing (manual install) or the browser cache is stale: hard-reload (Ctrl+F5).
- **No device detected** → the auto-fill scans for the official integration's sensor names (`…electricLevel`, `…solarInputPower`, …). With another integration, pick your entities manually — everything else works the same.
- **Controls missing** → the control section only renders the entities you selected (mode / limits / switches).

---

# 🇫🇷 Documentation en français

Une carte Lovelace moderne et entièrement paramétrable pour **surveiller et piloter vos batteries Zendure** (SolarFlow, Hyper 2000, Hub, AIO, Ace, SuperBase…) depuis Home Assistant.

## Fonctionnalités

- 🌊 **Batterie-réservoir vivante** — une cuve en verre se remplit d'un liquide animé au niveau exact du SoC ; les vagues accélèrent avec la puissance, des bulles montent pendant la charge, la couleur passe vert → ambre → rouge en se vidant
- ⏱️ **Projection intelligente** — « Pleine dans 2 h 15 » / « Autonomie 5 h 30 », calculée depuis la puissance nette et la capacité (ce qu'aucune carte HA native n'affiche)
- 🩺 **Détails batterie** — énergie disponible, capacité totale, **état de santé**, **nombre de cycles** et **rendement**, calculés depuis vos capteurs
- 🎚️ **Télécommande manuelle** — un curseur ±max (borné par vos limites réelles de charge/décharge) + boutons Charge / Pause / Décharge, en mode manuel
- 🧱 **Détail par pack** — une mini-jauge pour chaque batterie empilée
- 🔔 **Alertes intelligentes** — batterie faible, hors-ligne, température élevée, charge sous 0 °C, défaut
- 📉 **Graphe 24 h** — courbe du niveau de batterie
- 🎯 **Réserve & plafond** — curseurs SoC min/max avec repères sur la cuve
- 📈 **Puissances épurées** — solaire / maison / réseau avec flèches de sens (pas de diagramme de flux redondant — la carte énergie de HA le fait déjà)
- 📊 **Puces de statistiques** — température + tous les capteurs de votre choix
- 🎛️ **Contrôles intégrés** — mode de fonctionnement, limites de charge/décharge, interrupteurs
- 🧙 **Éditeur visuel complet** — aucun YAML nécessaire, avec **détection automatique des appareils Zendure**
- 🌍 **Français + anglais**, suit automatiquement la langue de Home Assistant
- 🌗 **Thèmes clair et sombre**, palette validée accessible aux daltoniens
- 📱 Responsive, mode compact pour les tableaux de bord denses
- 🪶 Un seul fichier autonome — **aucune dépendance** (vagues & liquide en CSS/SVG pur), fonctionne hors-ligne

## Installation

### Via HACS (recommandé)

1. Ouvrez **HACS** dans Home Assistant
2. Menu (⋮) → **Dépôts personnalisés**
3. Ajoutez l'URL de ce dépôt, catégorie **Dashboard** (ou *Lovelace/Plugin* sur les anciennes versions)
4. Recherchez **Zendure Dashboard Card** et téléchargez-la
5. Rechargez votre navigateur (Ctrl+F5)

### Manuelle

1. Téléchargez `zendure-dashboard-card.js` depuis la [dernière release](../../releases)
2. Copiez-le dans `config/www/`
3. **Paramètres → Tableaux de bord → ⋮ → Ressources → Ajouter une ressource** :
   - URL : `/local/zendure-dashboard-card.js`
   - Type : **Module JavaScript**

## Utilisation

1. Modifiez votre tableau de bord → **Ajouter une carte** → recherchez **Zendure**
2. Dans l'éditeur, utilisez **« Remplir automatiquement depuis un appareil détecté »** — la carte trouve vos appareils Zendure et remplit toutes les entités
3. Activez/désactivez les sections voulues (flux, statistiques, contrôles) — terminé ✨

Toutes les options sont détaillées dans le [tableau ci-dessus](#all-options) : `soc_entity` (niveau %), `solar_entity` (production solaire), `home_entity` (sortie maison), `grid_entity` (réseau), `charge_entity`/`discharge_entity` (charge/décharge batterie), `mode_entity` (mode), `select_entities` (sélecteurs supplémentaires, ex. `select.solarflow_2400_ac_ac_mode` pour forcer la charge/décharge — les options `input`/`output` sont affichées « Charge »/« Décharge »), `charge_limit_entity`/`discharge_limit_entity` (limites), `stats_entities` (capteurs en plus), `switch_entities` (interrupteurs), `compact`, `low_soc` (seuil batterie faible)…

### Plusieurs appareils

Ajoutez une carte par appareil — le menu de remplissage automatique liste tous les appareils Zendure détectés. Le **mode compact** est idéal pour empiler plusieurs batteries.

### Dépannage

- **« Custom element doesn't exist »** → ressource manquante (installation manuelle) ou cache navigateur : rechargez avec Ctrl+F5.
- **Aucun appareil détecté** → la détection cherche les capteurs de l'intégration officielle (`…electricLevel`, `…solarInputPower`, …). Avec une autre intégration, sélectionnez vos entités manuellement.
- **Contrôles absents** → la section contrôles n'affiche que les entités que vous avez sélectionnées.

## License / Licence

[MIT](LICENSE)

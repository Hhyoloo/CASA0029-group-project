🔗 Live Website: https://hhyoloo.github.io/CASA0029-group-project/

📍 Module: CASA0029 Data Visualisation
👥 Group 5

# Urban Flyways in London

*A Spatiotemporal Analysis of Migratory Bird Distribution, Urban Habitat Conditions and Ecological Attention Zones*

---

## Project Overview

This project explores how migratory bird observations vary across London over time, and how these patterns relate to urban environmental conditions and potential ecological pressure.

Using bird observation data from **NBN Atlas**, combined with environmental layers derived from **OpenStreetMap**, and aggregated at the **MSOA level**, we developed an interactive web-based application that integrates spatial exploration, comparative analysis and planning-oriented interpretation.

Three migratory species — **Swift, Swallow and House Martin** — were selected from the ten most frequently recorded species due to their distinct seasonal behaviour and different relationships with urban environments.

Rather than simply mapping observations, the project aims to interpret **where ecological attention may be needed** in London.

---

## Research Questions

* Why were Swift, Swallow and House Martin selected as focal species?
* How do bird hotspots vary across seasons in London?
* What urban environmental conditions distinguish hotspot and non-hotspot areas?
* Which areas may require ecological attention under stronger habitat pressure?

---

## Website Structure

The website is organised into five sections:

* **Overview**
* **Flight Patterns**
* **Urban Habitat**
* **Attention Zones**
* **Future**

The analytical flow follows:

**species selection → seasonal patterns → hotspot identification → environmental comparison → habitat pressure → ecological attention**

---

## Main Interactive Components

### Interactive Visualisation 1 — Spatial Hotspots

This section explores where bird observations concentrate over time.

Main interactions:

* species switching
* seasonal switching
* MSOA-level hotspot comparison
* hover-based feedback

---

### Interactive Visualisation 2 — Urban Habitat Explorer

This section examines environmental characteristics of hotspot areas.

Main interactions:

* environmental condition comparison
* hotspot profile interpretation
* habitat type classification

It focuses on three key dimensions:

* green coverage
* water proximity
* built intensity

---

### Interactive Visualisation 3 — Habitat Comparison Tool

This module allows direct comparison between different habitat types.

Main interactions:

* dual profile selection
* dynamic chart comparison
* difference interpretation (A − B)

It helps explain how environmental conditions differ across hotspot types.

---

### Interactive Visualisation 4 — Attention Zones

This section introduces **Bird Habitat Pressure (BHP)** as a simplified indicator.

Outputs include:

* pressure classification
* ecological attention zones
* planning-oriented interpretation

---

## Statistical Visualisations

### Top 10 Migratory Species

Used to justify species selection.

### Monthly Seasonal Pattern

Used to show temporal variation in bird observations.

---

## Data Sources

| Data                 | Variables                  | Source        |
| -------------------- | -------------------------- | ------------- |
| Bird observations    | species, date, coordinates | NBN Atlas     |
| Green infrastructure | parks, woodland            | OpenStreetMap |
| Blue infrastructure  | rivers, lakes              | OpenStreetMap |
| Built environment    | roads, buildings           | OpenStreetMap |
| Boundary             | MSOA polygons              | ONS Geography |

---

## Repository Structure

```text
├── index.html
├── style.css
├── scripts/
│   ├── bhp.js
│   ├── chart.js
│   ├── map.js
│   ├── msoa3d.js
│   ├── site.js
│   ├── ui.js
├── data/
│   ├── bird_hotspot.geojson
│   ├── birds_msoa_hotspots.geojson
│   ├── urban_condition_summary.json
│   ├── woodland_final.geojson
│   ├── water_final.geojson
│   ├── building_centroid_10.geojson
├── images/
│   ├── swift.jpg
│   ├── swallow.jpg
│   ├── house-martin.jpg
│   ├── bird-cursor.svg
│   ├── bird-cursor-open.svg
├── README.md
```

---

## How to Run Locally

1. Clone the repository
2. Open in **VS Code**
3. Run using **Live Server**
4. Open `index.html`

⚠️ Note: GeoJSON files require a local server (will not load via direct file opening)

---

## Planning Relevance

This project links ecological observation data with spatial planning interpretation.

Potential relevance includes:

* identifying ecological hotspots
* recognising pressure-sensitive urban areas
* supporting biodiversity-aware planning
* improving understanding of urban ecological patterns

---

## Limitations

* Observation data may contain reporting bias
* Environmental indicators simplify complex ecological processes
* Species behaviour cannot be fully explained by urban form alone

---

## Team Contributions

| Task Name                       | Major Contributors     | Additional Contributors | Use of AI Tools             |
| ------------------------------- | ---------------------- | ----------------------- | --------------------------- |
| Concept Development             | All members            |                         | No AI use                   |
| BHP indicator + Visualisation 3 | Xuchen Xi              |                         | Minor language refinement   |
| Visualisation 1 + charts        | Xiaoyi Wang            |                         | AI for wording only         |
| Visualisation 2 + web framework | Yutong Xu              |                         | AI for debugging and layout |
| Integration                     | Xiaoyi Wang, Xuchen Xi | Yutong Xu               | AI for wording refinement   |

---

## Use of AI Tools

AI tools were used for:

* front-end debugging
* layout refinement
* wording improvement

All analytical design, methodology, and interpretation were independently developed and validated by the team.

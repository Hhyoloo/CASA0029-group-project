🔗 Live Website: https://hhyoloo.github.io/casa0025-group-project/

📍 Module: CASA0029 Data Visualisation

👥 Group 5

# Urban Flyways in London

*A Spatiotemporal Analysis of Migratory Bird Distribution, Urban Habitat Conditions and Ecological Attention Zones*

## Project Overview

This project investigates how migratory bird observations vary across London through different seasons, and how urban environmental conditions relate to hotspot formation and potential ecological pressure.

Using bird observation records from NBN Atlas, environmental layers derived from OpenStreetMap, and MSOA-level spatial aggregation, we developed an interactive website that combines spatial storytelling, statistical comparison and planning-oriented interpretation.

Three focal migratory bird species — **Swift, Swallow and House Martin** — were selected from the ten most frequently recorded migratory species because they show distinct seasonal rhythms and different ways of using urban environments.

The website aims to move from simple observation mapping towards a clearer spatial explanation of where ecological attention may be needed in London.

---

## Research Questions

* Why were Swift, Swallow and House Martin selected as focal species?
* How do bird hotspots vary across seasons in London?
* What urban environmental conditions distinguish hotspot and non-hotspot areas?
* Which urban areas may deserve ecological attention under stronger habitat pressure?

---

## Website Structure

The website is organised into five main sections:

* **Overview**
* **Flight Patterns**
* **Urban Habitat**
* **Attention Zones**
* **Future**

The analytical narrative follows a progressive structure:

**species selection → seasonal dynamics → hotspot identification → environmental comparison → habitat pressure interpretation → planning-sensitive areas**

Three interactive modules are embedded across the website, supported by two statistical visualisations.

---

## Main Interactive Components

### Interactive Visualisation 1 — Spatial Hotspots

This section explores where bird observations concentrate across seasons.

Main interactions include:

* species switching
* seasonal switching
* MSOA hotspot comparison
* hotspot ranking feedback

This module focuses on identifying where and when bird activity becomes spatially concentrated.

---

### Interactive Visualisation 2 — Urban Habitat Explorer

This section examines environmental conditions associated with hotspot areas.

Main interactions include:

* environmental layer switching
* hotspot click comparison
* local habitat profile feedback

The module allows comparison of green space, water proximity and built density across selected areas.

---

### Interactive Visualisation 3 — Attention Zone Classification

This section interprets areas where bird hotspots overlap with stronger urban pressure.

It introduces Bird Habitat Pressure (BHP) as a simplified planning-oriented indicator.

Main outputs include:

* pressure classification
* ecological attention zones
* suggested spatial interpretation

---

## Statistical Visualisations

### Top 10 Migratory Species Chart

Used to explain why three focal species were selected.

### Monthly Seasonal Pattern Chart

Used to show seasonal differences across selected species.

---

## Data Sources

| Data                 | Variables                                        | Source               |
| -------------------- | ------------------------------------------------ | -------------------- |
| Bird observations    | scientific_name, event_date, latitude, longitude | NBN Atlas            |
| Green infrastructure | parks, woodland                                  | OpenStreetMap        |
| Blue infrastructure  | rivers, lakes                                    | OpenStreetMap        |
| Built environment    | roads, buildings                                 | OpenStreetMap        |
| Boundary             | MSOA polygons                                    | ONS Census Geography |

---

## Repository Structure

```text id="bqun2v"
├── index.html
├── style.css
├── app.js
├── data/
│   ├── birds.xlsx
│   ├── msoa.geojson
│   ├── hotspot_data.geojson
│   ├── bhp_data.geojson
├── images/
│   ├── swift.jpg
│   ├── swallow.jpg
│   ├── housemartin.jpg
│   ├── london_background.jpg
├── charts/
│   ├── top10_species.png
│   ├── monthly_pattern.png
├── README.md
```

---

## How to Run Locally

1. Clone the repository
2. Open the project folder in **VS Code**
3. Run using **Live Server**
4. Open `index.html` in browser

### Important

GeoJSON files may not load correctly if opened directly in browser. A local server environment is required.

---

## Planning Relevance

This project explores how bird observation patterns can support urban ecological interpretation.

Potential planning relevance includes:

* identifying ecologically sensitive hotspot areas
* recognising pressure-sensitive urban zones
* supporting biodiversity-oriented green connectivity
* informing development-sensitive ecological thinking

---

## Limitations

* Observation data may contain reporting bias.
* Environmental indicators simplify ecological relationships.
* Species-specific habitat behaviour cannot be fully explained by urban form alone.

---

## Team Contributions

| Task Name                                                                       | Major Contributors     | Additional Contributors | Use of AI Tools in this Task                                                                                                                                                  |
| ------------------------------------------------------------------------------- | ---------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Concept Development and overall project planning                                | All team members       |                         | No AI use                                                                                                                                                                     |
| Indicator design (BHP), methodology development and Interactive Visualisation 3 | Xuchen Xi              |                         | ChatGPT was used only for limited language refinement during drafting; methodological design and coding decisions were independently developed and checked against literature |
| Interactive Visualisation 1, statistical charts and website text writing        | Xiaoyi Wang            |                         | AI tools were used only to improve wording clarity in explanatory text; chart design and visual outputs were manually produced and adjusted                                   |
| Interactive Visualisation 2 and website framework                               | Yutong Xu              |                         | ChatGPT was used to assist front-end debugging, layout refinement and interface adjustment; final structure and interaction logic were manually revised                       |
| Website content integration                                                     | Xiaoyi Wang, Xuchen Xi | Yutong Xu               | ChatGPT was used selectively for wording refinement only                                                                                                                      |

---

## Use of AI Tools

AI tools were used only for limited technical debugging, wording refinement and front-end adjustment.

All spatial analysis, methodological interpretation, indicator logic and final outputs were manually checked, revised and integrated by the group.

# Urban Flyways in London

*A Spatiotemporal Analysis of Migratory Bird Distribution, Urban Habitat Conditions and Ecological Attention Zones*

## Project Overview

This project explores how migratory bird observations vary across London across seasons, and how urban environmental conditions influence hotspot formation and ecological pressure.

Using bird observation records from NBN Atlas, environmental data derived from OpenStreetMap, and MSOA-level spatial aggregation, we developed an interactive storytelling website that combines spatial visualisation, environmental comparison and planning-oriented interpretation.

The project focuses on three representative migratory bird species — **Swift, Swallow and House Martin** — selected from the ten most frequently recorded migratory species in London because they show different seasonal rhythms and distinct ways of using urban environments.

The website is designed not only to visualise bird distribution, but also to support spatial thinking about where urban ecological attention may be needed.

---

## Research Questions

* Why were Swift, Swallow and House Martin selected as focal migratory species?
* How do migratory bird hotspots shift across seasons in London?
* What urban environmental conditions distinguish hotspot and non-hotspot areas?
* How can Bird Habitat Pressure be interpreted spatially to identify planning-sensitive areas?

---

## Website Structure

The website is organised into five main sections:

* **Overview**
* **Flight Patterns**
* **Urban Habitat**
* **Attention Zones**
* **Future**

Three main interactive modules are embedded across the website, supported by two statistical visualisations.

### Interactive Modules

1. **Spatial Hotspots**
   Seasonal MSOA hotspot map showing species and seasonal differences.

2. **Urban Habitat Explorer**
   Environmental layer comparison for hotspot areas.

3. **Attention Zone Classification**
   Planning-oriented ecological attention map using Bird Habitat Pressure logic.

### Statistical Visualisations

* Top 10 migratory species ranking chart
* Monthly seasonal observation trends of selected species

---

## Methodological Logic

The analytical workflow follows a progressive narrative:

**Species selection → Seasonal dynamics → Spatial hotspots → Environmental comparison → Habitat pressure interpretation → Planning attention zones**

### Species Selection

The ten most frequently recorded migratory bird species were first identified using NBN Atlas records.

Three focal species were then selected:

* **Swift**
* **Swallow**
* **House Martin**

These species were chosen because they represent different temporal patterns and urban ecological behaviours.

### Spatial Analysis

Bird observations were aggregated at **MSOA level** to visualise spatial concentration patterns.

Seasonal switching was used to compare:

* Spring arrival
* Summer activity peak
* Autumn decline

### Environmental Comparison

Hotspot and non-hotspot areas were compared using:

* Green infrastructure
* Blue infrastructure
* Built density
* Road pressure

### Bird Habitat Pressure (BHP)

Bird Habitat Pressure is used as a planning-oriented proxy to summarise where bird hotspots overlap with stronger urban environmental pressure.

It combines:

* built pressure
* road pressure
* limited green cover
* limited blue infrastructure

BHP is not a direct ecological health score, but a simplified spatial indicator for identifying areas where ecological attention may be more necessary.

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

```text
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

Please adjust filenames if necessary according to the final repository structure.

---

## How to Run Locally

1. Clone this repository:

```bash
git clone [repository-link]
```

2. Open the folder in **VS Code**

3. Run with **Live Server**

4. Open `index.html` in browser

### Important Note

GeoJSON layers may not load correctly if the file is opened directly in browser.

A local server environment is required.

---

## Key Features

* Species toggle across three focal birds
* Seasonal hotspot switching
* Hover-based MSOA information
* Environmental layer comparison
* Dynamic habitat profile feedback
* Bird Habitat Pressure interpretation
* Planning-sensitive ecological classification

---

## Planning Relevance

The project aims to demonstrate how spatial bird observations can support urban ecological thinking.

Potential planning relevance includes:

* identifying ecological corridors
* recognising pressure-sensitive hotspot areas
* supporting biodiversity-sensitive urban development
* improving green-blue connectivity

---

## Limitations

* Observation records may reflect reporting bias.
* Environmental indicators simplify complex ecological relationships.
* Species-specific habitat behaviour cannot be fully explained by urban form alone.

---

## Team Contributions

* **Xuchen Xi** — website framework, interactive visualisation, technical integration
* **Xiaoyi Wang** — statistical charts, explanatory text, content organisation
* **Yutong Xu** — indicator logic, methodology support, BHP section

All team members contributed to conceptual development and final review.

---

## Use of AI Tools

ChatGPT was used selectively for front-end debugging, layout refinement and language polishing.

All analytical decisions, spatial processing and methodological interpretation were manually checked and revised by the group.

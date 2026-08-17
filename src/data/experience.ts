// Career timeline entries — most recent first.
// Bullets are kept as short, scannable fragments (not full sentences) so the
// timeline stays light even on the entries with the most technical detail.

export type ExperienceEntry = {
  yearLabel: string;
  dateRange: string;
  title: string;
  company: string;
  bullets: string[];
  stack?: string[];
  link?: { label: string; href: string };
};

export const experienceEntries: ExperienceEntry[] = [
  {
    yearLabel: "NOW",
    dateRange: "Feb 2026 – Present",
    title: "Cauca River Biological Corridor: Geospatial Data Engineering",
    company: "UAO × ASOCAÑA",
    bullets: [
      "Geospatial database (ArcGIS Pro, EPSG:9377/3115) reconciling 4 institutional sources: 15 tributaries, 35+ monitoring stations, 1990–2026.",
      "Automated Python pipelines (pyproj, arcpy, pandas/NumPy) for coordinate transforms and series cleanup.",
      "Public interactive map viewer (MapLibre GL JS) with toggleable layers, per-station panels, and CSV export.",
      "Two pollutant-load estimation methods (mass balance, export-coefficient) with cross-method uncertainty analysis.",
    ],
    stack: ["Python", "ArcGIS Pro", "pandas", "pyproj", "MapLibre GL JS"],
    link: {
      label: "View live map ↗",
      href: "https://saulo1112.github.io/RioCauca_Baseline/",
    },
  },
  {
    yearLabel: "2025",
    dateRange: "Sep 2025 – Jan 2026",
    title: "Institutional Website",
    company: "FUDAMBIENT",
    bullets: [
      "Designed and built the organization's institutional website end to end.",
      "Independent freelance handoff and launch after the institutional contract closed.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    yearLabel: "2025",
    dateRange: "Apr – Jul 2025",
    title: "Delfín Research Program: OptiCoder Prototype",
    company: "ITESA, Hidalgo, México (Remote)",
    bullets: [
      "International research fellowship (Programa Delfín), building the OptiCoder prototype from scratch.",
      "Ran in parallel with the ASOASIDE environmental contract (Apr–Jul 2025).",
    ],
    stack: ["React Native", "Expo", "Gemini", "Whisper"],
  },
  {
    yearLabel: "2025",
    dateRange: "Mar – Sep 2025",
    title: "Environmental Data Systematization",
    company: "ASOASIDE (CVC contract)",
    bullets: [
      "Systematized territorial socio-environmental data (watersheds, water bodies) to update municipal environmental education plans.",
      "Designed prioritization methods and indicators for diffuse-pollution diagnostics.",
    ],
    stack: ["SQL", "Python"],
  },
  {
    yearLabel: "2024",
    dateRange: "Jan – Nov 2024",
    title: "Ecological Modeling & Data Mining Research",
    company: "UAO, Semillero A+",
    bullets: [
      "Undergraduate thesis: data mining and ecological modeling of Cali River water quality (BMWP/Col index, PCA).",
      "ETL, geospatial analysis and ML forecasting of PM₁₀/PM₂.₅ exposure on Cali's MIO transit system.",
      "Presented at RedCOLSI, scored 94/100.",
    ],
    stack: ["Python", "Pandas", "Matplotlib", "Folium", "XLSTAT"],
  },
];

export const educationFootnote = [
  "Environmental Engineering, UAO: GPA 4.7/5.0 · 4× Academic Excellence Award (2021-1, 2022-1, 2024-1, 2024-3)",
  "AI Specialization, UAO: GPA 4.9/5.0 (diploma pending, 2026)",
];

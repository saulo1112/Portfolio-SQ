// Career timeline entries — most recent first.
// Bullets are kept as short, scannable fragments (not full sentences) so the
// timeline stays light even on the entries with the most technical detail.
// Content is kept as a superset of the resume: same facts, same framing,
// with more room for detail where the format allows it.

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
    title: "GIS Analyst & Environmental Engineer, Biological Corridor Project",
    company: "UAO × ASOCAÑA",
    bullets: [
      "Geospatial database (ArcGIS Pro) reconciling 4 institutional sources (CVC, CARDER, CRC, IDEAM): 15 tributaries, 35+ monitoring stations, 1990–2026.",
      "Automated Python pipelines (pandas, pyproj) for coordinate system normalization and station name matching across datasets.",
      "Cauca River Baseline, a public GIS web viewer (MapLibre GL JS) with water quality profiles, streamflow curves, and CSV export per station.",
      "Single formula-linked Excel model (10+ interlinked sheets) estimating diffuse pollutant load with mass balance and export-coefficient methods.",
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
    title: "Environmental Professional, CVC Agreements N°031 and N°094",
    company: "FUDAMBIENT, contractor for CVC",
    bullets: [
      "Automated internal project workflows with Google Apps Script, including a system for organizing technical fact sheets on trees.",
      "Designed and built FUDAMBIENT's institutional website end to end (HTML, CSS, JavaScript); continued as an independent freelance handoff after the institutional contract closed in December.",
      "Built small interactive web tools for environmental education, including an interactive map and drag-and-drop browser activities.",
      "Authored the environmental education plan (PRAE) for a public school in Caicedonia and supported rural wastewater treatment systems (SITAR).",
    ],
    stack: ["Google Apps Script", "HTML", "CSS", "JavaScript"],
  },
  {
    yearLabel: "2025",
    dateRange: "Jun – Jul 2025",
    title: "Remote Research Collaborator, Programa Delfín 2025",
    company: "ITESA, Hidalgo, México (Remote)",
    bullets: [
      "Designed and built OptiCoder, a React Native/Expo accessibility app integrating multimodal AI (Gemini, Whisper) to help visually impaired developers interpret code screenshots, UI mockups, and diagrams.",
      "Layered architecture separating presentation, business logic, shared services, and remote AI infrastructure, with a two-stage prompting strategy.",
      "Empirical evaluation with 7 developers across 106 classification instances, reaching 74.1% precision and 58.1% recall in code-error detection.",
      "Co-authored the resulting paper, currently under review at an indexed journal in AI and accessibility.",
    ],
    stack: ["React Native", "Expo", "Gemini", "Whisper"],
  },
  {
    yearLabel: "2025",
    dateRange: "Mar – Sep 2025",
    title: "Environmental Professional, CVC Agreement N°004",
    company: "ASOASIDE, contractor for CVC",
    bullets: [
      "Socio-environmental diagnostics for communities across the Valle del Cauca, using participatory methods (social cartography, problem trees) to prioritize needs by municipality.",
      "Technical documentation and tracking matrices for municipal environmental education plans (PMEA), aligned with CVC guidelines.",
      "Simple interactive web activities (HTML, CSS, JavaScript) supporting environmental education materials for municipal processes.",
    ],
  },
  {
    yearLabel: "2024",
    dateRange: "Jan – Nov 2024",
    title: "Undergraduate Researcher, Semillero A+",
    company: "UAO",
    bullets: [
      "Undergraduate thesis: data mining and ecological modeling of Cali River water quality (BMWP/Col index, PCA).",
      "Exploratory and statistical analysis of raw PM₁₀/PM₂.₅ exposure data on Cali's MIO transit system, with geospatial mapping.",
      "Presented at RedCOLSI, scored 94/100.",
    ],
    stack: ["Python", "Pandas", "Matplotlib", "Folium", "XLSTAT"],
  },
];

export const educationFootnote = [
  "Environmental Engineering, UAO: GPA 4.7/5.0 · 4× Academic Excellence Award (2021-1, 2022-1, 2024-1, 2024-3)",
  "AI Specialization, UAO: GPA 4.9/5.0 (diploma pending, 2026)",
];
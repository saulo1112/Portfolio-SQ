// Career timeline entries — most recent first.
// Bullets are kept as short, scannable fragments (not full sentences) so the
// timeline stays light even on the entries with the most technical detail.
// Facts and framing follow the resume (src/assets/Resume - Saulo Quiñones Góngora.pdf).

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
    company: "UAO with ASOCAÑA",
    bullets: [
      "Central ArcGIS Pro geodatabase integrating 4 authorities (CVC, CARDER, CRC, IDEAM) for the Cauca River and its 15 priority tributaries.",
      "Python scripts (pandas, pyproj) for cleaning, schema harmonization and station matching, with a log of every exclusion.",
      "Cauca River Baseline, a public viewer (MapLibre GL JS) with water quality profiles, flow duration curves and CSV download per station.",
      "Excel model of diffuse nitrogen and phosphorus load across 46 sub-reaches: 7 of them (15%) concentrate 60% of the nitrogen load.",
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
      "Technical and pedagogical support for rural wastewater treatment systems (SITAR) as nature-based solutions, working directly with communities.",
      "Automated internal project workflows with Google Apps Script.",
      "Interactive web tools for environmental education, including an interactive map and the institutional website (HTML, CSS, JavaScript), the last month as freelance work.",
    ],
    stack: ["Google Apps Script", "HTML", "CSS", "JavaScript"],
  },
  {
    yearLabel: "2025",
    dateRange: "Jun 2025 – Jul 2025",
    title: "Remote Research Collaborator, Programa Delfín 2025",
    company: "ITESA, Hidalgo, Mexico (Remote)",
    bullets: [
      "Designed and built OptiCoder, a React Native and Expo accessibility app using multimodal AI (Gemini, Whisper) to help visually impaired developers interpret code screenshots, UI mockups and diagrams.",
      "Layered architecture with a two-stage prompting strategy.",
      "Evaluation with 7 developers across 106 classification instances: 74.1% precision and 58.1% recall in code-error detection, with prompts revised from the findings.",
      "Co-authored the resulting paper, under review at an indexed journal in AI and accessibility.",
    ],
    stack: ["React Native", "Expo", "Gemini", "Whisper"],
  },
  {
    yearLabel: "2025",
    dateRange: "Mar 2025 – Sep 2025",
    title: "Environmental Professional, CVC Agreement N°004",
    company: "ASOASIDE, contractor for CVC",
    bullets: [
      "Socio-environmental diagnostics of river basins across the Valle del Cauca, using participatory methods (social cartography, problem trees) to prioritize needs by municipality.",
      "Authored a school environmental education plan (PRAE) and produced documentation and tracking matrices for municipal plans (PMEA), following CVC guidelines.",
      "Automated project workflows with Google Apps Script.",
    ],
  },
  {
    yearLabel: "2024",
    dateRange: "Jan 2024 – Nov 2024",
    title: "Undergraduate Researcher, Semillero A+",
    company: "UAO",
    bullets: [
      "Undergraduate thesis: statistical and data mining models of Cali River water quality (BMWP/Col, habitat suitability, PCA).",
      "Exploratory and statistical analysis, with mapping, of raw PM₁₀/PM₂.₅ data from Cali's MIO transit system.",
      "Presented at RedCOLSI, scoring 94/100.",
    ],
    stack: ["Python", "pandas", "Matplotlib", "Folium", "XLSTAT"],
  },
];

export const educationFootnote = [
  "Environmental Engineering, UAO: GPA 4.7/5.0 · 4× Academic Excellence Award (2021-1, 2022-1, 2024-1, 2024-2)",
  "AI Specialization, UAO: GPA 4.9/5.0",
];
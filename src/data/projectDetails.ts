// Long-form project overviews shown in the lightbox.
// Keyed by slug; a project card opens its lightbox when its slug is listed here.
// To add a project: append an entry and set `slug` on its card in Projects.astro.

// Screenshots. Imported so Astro reads their real width/height at build time and
// optimises them; the gallery derives its layout from those intrinsic dimensions,
// so no aspect ratio is ever declared by hand.
import opticoder1 from "../assets/Images/Projects/OptiCoder/OptiCoder (1).png";
import opticoder2 from "../assets/Images/Projects/OptiCoder/OptiCoder (2).png";
import opticoder3 from "../assets/Images/Projects/OptiCoder/OptiCoder (3).png";

import caliRiver1 from "../assets/Images/Projects/Cali river/(1).png";
import caliRiver2 from "../assets/Images/Projects/Cali river/(2).png";

import eudrParcel from "../assets/Images/Projects/EUDR/Parcel selection (1).png";
import eudrInstructions from "../assets/Images/Projects/EUDR/Instructions (2).png";
import eudrOverview from "../assets/Images/Projects/EUDR/General overview (3).png";

import fudambient1 from "../assets/Images/Projects/Fudambient/Fudambient (1).png";
import fudambient2 from "../assets/Images/Projects/Fudambient/Fudambient (2).png";
import fudambient3 from "../assets/Images/Projects/Fudambient/Fudambient (3).png";
import fudambient4 from "../assets/Images/Projects/Fudambient/Fudambient (4).png";

import recovery1 from "../assets/Images/Projects/App Physical Recovery/(1).png";
import recovery2 from "../assets/Images/Projects/App Physical Recovery/(2).png";

import siteSelection1 from "../assets/Images/Projects/Site Selection Engine/(1).png";
import siteSelection2 from "../assets/Images/Projects/Site Selection Engine/(2).png";

import cauca1 from "../assets/Images/Projects/Cauca River Baseline/Global Overview.png";
import cauca2 from "../assets/Images/Projects/Cauca River Baseline/Data extraction by station.png";
import cauca3 from "../assets/Images/Projects/Cauca River Baseline/Flow profile.png";
import cauca4 from "../assets/Images/Projects/Cauca River Baseline/Sugarcane hectares by rivers.png";

import ortho1 from "../assets/Images/Projects/Ortho Vision AI/(1).jpeg";
import ortho2 from "../assets/Images/Projects/Ortho Vision AI/(2).jpeg";
import ortho3 from "../assets/Images/Projects/Ortho Vision AI/(3).jpeg";
import ortho4 from "../assets/Images/Projects/Ortho Vision AI/(4).jpeg";
import ortho5 from "../assets/Images/Projects/Ortho Vision AI/(5).jpeg";

import transitDose from "../assets/Images/Projects/Cali Transit Exposure/inhalation-dose-timeline.png";
import transitPm10Route from "../assets/Images/Projects/Cali Transit Exposure/pm10-concentration-route.png";
import transitHeatmap from "../assets/Images/Projects/Cali Transit Exposure/pm10-heatmap.png";
import transitDistributions from "../assets/Images/Projects/Cali Transit Exposure/concentration-distributions.png";

import airambInterface from "../assets/Images/Projects/AirAMB/Interface (1).png";
import airambReport from "../assets/Images/Projects/AirAMB/Report (2).png";

// Dedicated card thumbnails, framed to the card's 16:11 box so nothing crops.
import caliRiverCard from "../assets/Images/Thumbnails/Cali River Biomonitoring.png";
import siteSelectionCard from "../assets/Images/Thumbnails/Site Selection Engine.png";
import caucaBaselineCard from "../assets/Images/Thumbnails/Cauca River Baseline.png";
import orthoVisionCard from "../assets/Images/Thumbnails/Ortho Vision AI.png";
import caliTransitCard from "../assets/Images/Thumbnails/Cali Transit Exposure.png";
import airambCard from "../assets/Images/Thumbnails/AirAMB.png";

export type Figure = {
  src: ImageMetadata;
  caption: string;
};

export type ProjectDetail = {
  title: string;
  /** One line, sets the frame before any detail. */
  tagline: string;
  tags: string[];
  accent: string;
  github: string;
  stack: string;
  /** Short key/value facts rendered as a strip under the header. */
  facts: { label: string; value: string }[];
  /** Headline numbers. Kept to 3-4 so they stay scannable. */
  metrics: { value: string; label: string }[];
  /** Narrative body. 2-3 sections, mostly one paragraph each. */
  sections: { heading: string; body: string[] }[];
  /** 2-5 screenshots. The gallery groups them by their own aspect ratio:
      wide ones take a full row, phone-shaped ones sit 3 per row, and anything
      in between is centred at a capped width. Order is the reading order. */
  figures: Figure[];
  /** Thumbnail for the project card. Defaults to figures[0]; set it only when
      that image survives the card's crop badly (portrait screenshots). */
  card?: ImageMetadata;
};

export const projectDetails: Record<string, ProjectDetail> = {
  opticoder: {
    title: "OptiCoder",
    tagline:
      "A phone camera that reads code screenshots, UI mockups and architecture diagrams aloud , for developers who can't see them.",
    tags: ["Mobile", "Multimodal AI", "Accessibility"],
    accent: "#0057A4",
    github: "https://github.com/saulo1112/PDproject",
    stack:
      "React Native · Expo · TypeScript · Google Gemini · OpenAI Whisper",
    facts: [
      { label: "Role", value: "Design & implementation" },
      { label: "Domain", value: "Assistive technology" },
      { label: "Platform", value: "Android (mid-range)" },
      { label: "Languages", value: "Spanish · English" },
    ],
    metrics: [
      { value: "74.1%", label: "Precision identifying code errors" },
      { value: "106", label: "Classification instances evaluated" },
      { value: "4.5+/5", label: "Usability & contextual relevance" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Code screenshots, UI mockups, and architecture diagrams have no alt text. For developers with visual impairments, these technical artifacts simply don't exist for screen readers. Existing assistive tools handle everyday scenes well, but almost none targets the specific work a professional developer needs to do, and the multimodal models that could help live on expensive desktops, in English only, behind heavy compute.",
        ],
      },
      {
        heading: "The approach",
        body: [
          "Point the phone at a screen. A vision-language model interprets the image semantically, reasoning about the code itself rather than trusting the IDE's squiggles (which were a real source of false detections). The answer comes back spoken and capped at three sentences to stay listenable. Follow-up questions are two sentences each. One loop, no visual navigation required.",
          "A lightweight client-cloud split keeps the app on mid-range phones where real users are. Expo and React Native handle capture and playback locally; Gemini does visual interpretation in the cloud, Whisper transcribes voice, and native text-to-speech delivers the response. Accessibility shaped every interface choice from the first commit: large touch targets, high contrast, haptic feedback, full screen-reader compatibility.",
        ],
      },
      {
        heading: "The result",
        body: [
          "Seven developers tested it on 106 code screenshots in Python, JavaScript, PHP, Dart, Java, and VB6. The system identified errors with 74.1% precision. Satisfaction was above 4.5/5 on relevance, usability, and interaction quality. Two core prompt rules (ignore IDE annotations, stay brief) emerged from the evaluation itself, not from initial design.",
        ],
      },
    ],
    figures: [
      { src: opticoder1, caption: "Welcome screen prompting the first capture" },
      { src: opticoder2, caption: "Camera pointed at a real editor: capture confirmed, ready to send" },
      { src: opticoder3, caption: "Spoken answer describing the script, with a voice follow-up" },
    ],
  },

  "cali-river": {
    title: "Cali River Biomonitoring",
    tagline:
      "Eighteen records, nine stations. Which ecological predictions can a dataset that small honestly support, and which ones only look like they work?",
    tags: ["Machine learning", "Ecological modelling", "Research"],
    accent: "#4ac4c9",
    github: "https://github.com/saulo1112/cali-river-biomonitoring",
    stack:
      "Python · scikit-learn · Fuzzy inference · ε-SVR · Nested LOOCV",
    facts: [
      { label: "Basin", value: "Cali River, Valle del Cauca" },
      { label: "Data", value: "18 records · 9 stations" },
      { label: "Techniques", value: "5 compared" },
      { label: "Validation", value: "Nested leave-one-out" },
    ],
    metrics: [
      { value: "83% precision", label: "Habitat suitability (Perlidae)" },
      { value: "18/18 folds", label: "Predictors agreed on, unanimously" },
      { value: "3/3 techniques", label: "Independent methods, same answer" },
      { value: "Deployed", label: "Working prediction interface, not just a notebook" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Biotic sampling is slow and expensive, while automated water chemistry is routine. The question is obvious: can river health be predicted from chemistry already being collected? Machine learning says yes, on thousands of sites. Regional authorities hold fewer than thirty stations across one or two campaigns. The useful question isn't which algorithm wins on abundant data. It's which performs honestly on scarce data, and how much of the reported performance is real.",
        ],
      },
      {
        heading: "Why validation was the actual subject",
        body: [
          "At small sample sizes, data leakage is the silent killer of a reported score. Any path that lets held-out information reach the model beforehand inflates performance invisibly; surveys across seventeen scientific fields have found it reversing published conclusions. So every decision, predictor selection, hyperparameter tuning, even membership-function estimation, was re-run inside each training fold. The gap between nested and standard metrics became its own result: a direct measurement of how much performance was borrowed from data the model shouldn't have seen.",
        ],
      },
      {
        heading: "What came out of it",
        body: [
          "No technique won across the board, and that's the point of testing five. ε-SVR led on water quality, fuzzy inference on habitat suitability, logistic regression on the rarer of the two bioindicator families. The strongest signal in the project wasn't any single score: three unrelated model families, a rule-based system, a parametric model, and a tree, independently converged on the same three predictors for the same taxon, chosen in every one of 18 test rounds. That kind of agreement doesn't happen by chance at this sample size. The water-quality model can't name an exact index value, but it ranks stations correctly, which is what a monitoring program actually needs to decide where to sample next. Habitat suitability for a moderately common taxon turned out to be tractable; five-class water-quality prediction did not. That boundary was found by measurement, not assumed, which is what makes it portable to other data-scarce basins.",
        ],
      },
      {
        heading: "From notebook to tool",
        body: [
          "The three winning models were packaged into a lightweight prediction interface: pick a target, move a slider within the range the data actually supports, get a class and a confidence score instead of a bare number. It's a small piece of software, but it's the difference between a result that lives in a paper and one a water authority could actually open.",
        ],
      },
    ],
    figures: [
      { src: caliRiver1, caption: "Choosing a prediction target: two bioindicator families or the BMWP/Col index" },
      { src: caliRiver2, caption: "ε-SVR result reported as a range and an approximate class, not a point value" },
    ],
    card: caliRiverCard,
  },

  eudr: {
    title: "EUDR Forest Risk Assessment",
    tagline:
      "Screening 4,170 real agricultural parcels for EU deforestation compliance, using nothing but open satellite data.",
    tags: ["GIS", "Machine learning", "FastAPI"],
    accent: "#1D9E75",
    github: "https://github.com/saulo1112/EUDR_Risk_Assessment",
    stack:
      "Python · PostGIS · Earth Engine · scikit-learn · FastAPI · Docker",
    facts: [
      { label: "Study area", value: "Alto Sinú, Colombia" },
      { label: "Parcels", value: "4,170 · 0.5–85 ha" },
      { label: "Cutoff date", value: "31 Dec 2020" },
      { label: "Delivery", value: "REST API + map dashboard" },
    ],
    metrics: [
      { value: "0.846", label: "PR-AUC under stratified 5-fold CV" },
      { value: "1.7%", label: "Parcels with post-2020 forest loss" },
      { value: "0.43 → 0.84", label: "Macro-F1 across model iterations" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "The EU Deforestation Regulation requires producers to prove commodities don't trace to land cleared after 31 Dec 2020. An operator sourcing from thousands of smallholder plots needs to screen each one before the compliance deadline. Commercial platforms charge for this screening. This pipeline reproduces the geospatial core end-to-end using only open, official datasets , no proprietary imagery, no confidential data, nothing that can't be audited.",
        ],
      },
      {
        heading: "The model and the leakage that killed v1",
        body: [
          "Choosing the study area programmatically removed hand-picked bias: threshold a cocoa-probability raster, cluster connected pixels at 1 km, buffer 20 km around the largest cluster. The procedure returned Alto Sinú (an active deforestation frontier). Vectorizing at 10 m and filtering to 0.5–85 ha yielded 4,170 parcels averaging 2.90 ha, matching smallholder size reported for the region. Deforestation per parcel is the intersection of post-2021 forest loss with 2020 forest pixels: seventy parcels show measurable loss, six of them over half their area.",
          "The first classifier achieved near-perfect precision, which was the signal of failure: it was encoding the label's own quantity. v2 used neighbourhood deforestation in a 200 m ring (honest, but weak: macro-F1 0.43). v3 added distance to nearest loss and multi-radius neighbourhood context, reframed as binary classification, and reached PR-AUC 0.846 with macro-F1 0.837. Masking the distance feature in a sensitivity check held at 0.812, so performance doesn't rest on one predictor.",
        ],
      },
      {
        heading: "What it delivers",
        body: [
          "The real output is the ~4,100 clean parcels ranked by context risk. Parcel 3123 has zero own deforestation, sits 40 m from recent loss, and shows 2% loss inside its 200 m ring: it ranks highest on the early-warning list precisely because nothing has happened there yet. PostGIS stores geometry and scores, FastAPI serves parcels and rankings, and Leaflet renders them. The whole stack (database, API, dashboard) boots from one Compose file. The score is presented as a prioritisation aid: compliance is binary and zero-tolerance; ranking decides where to look first, never whether a parcel is clean.",
        ],
      },
    ],
    figures: [
      { src: eudrParcel, caption: "Parcel 2482 inspected: 4.83 ha, 15.92% deforested, risk score 0.940" },
      { src: eudrInstructions, caption: "Entry screen framing the risk score as a triage aid, not a compliance verdict" },
      { src: eudrOverview, caption: "All 4,170 parcels across 12,100 ha, coloured by compliance status" },
    ],
  },

  fudambient: {
    title: "Fudambient",
    tagline:
      "An environmental NGO with two decades of fieldwork and no way to show it. Five pages, two languages, zero build step.",
    tags: ["Web", "Client work", "i18n"],
    accent: "#aaf683",
    github: "https://github.com/saulo1112/Fudambient-Page",
    stack: "HTML · CSS · JavaScript · Native ES modules · JSON i18n",
    facts: [
      { label: "Client", value: "Fudambient , environmental NGO" },
      { label: "Scope", value: "Architecture → design → launch" },
      { label: "Pages", value: "5 + contact" },
      { label: "Languages", value: "Spanish · English" },
    ],
    metrics: [
      { value: "10", label: "Projects catalogued across 5 practice areas" },
      { value: "2", label: "Languages, switched without a page reload" },
      { value: "0", label: "Frameworks, bundlers or build steps" },
    ],
    sections: [
      {
        heading: "The brief",
        body: [
          "Fudambient works on urban greening, basic sanitation, environmental restoration, and mining-damage recovery across the Valle del Cauca. Twenty years of public-sector contracts existed as spreadsheets and Word docs, invisible to prospective partners. The job was end-to-end: deciding what to show and in what order, designing it, building it, and leaving something the foundation could operate without ongoing developer support.",
        ],
      },
      {
        heading: "From archive to site",
        body: [
          "Ten projects sorted into five practice areas (urbanism, sanitation, restoration, landscape management, consultancy) became the site's skeleton. The homepage leads with what the foundation does, not what it is. A mission section, an achievements timeline showing how projects unfold from community dialogue through follow-up, and a services page complete the site. One header, one navigation model, one typographic scale throughout.",
          "The client needed to own the site entirely, so it's native ES modules and plain CSS with no bundler or package.json to maintain. Project data lives in readable JavaScript arrays, not a CMS, making it a five-minute job to add next year's contract. Interaction (scroll-reactive header swapping to a floating glass pill, autoplaying project slider, lightbox for photos, timeline animations) is hand-written where it earns its place and degrades to plain HTML if scripts fail.",
        ],
      },
      {
        heading: "Bilingual at the core",
        body: [
          "Half the foundation's potential partners read English. Rather than duplicate five pages, every translatable node carries a key, two JSON files hold the strings, and switching languages re-renders the DOM in place and remembers the choice. Dynamic components (slider, timeline, project cards) subscribe to a language-change event so they pick up the right locale on render. Adding a third language means adding one file.",
        ],
      },
    ],
    figures: [
      { src: fudambient1, caption: "Homepage over drone footage, with the bilingual switch in the nav" },
      { src: fudambient2, caption: "About page: split layout pairing the statement with field imagery" },
      { src: fudambient3, caption: "Services laid out as an alternating timeline down the page" },
      { src: fudambient4, caption: "Projects filtered by practice area, each card carrying its location" },
    ],
  },

  "physical-recovery": {
    title: "App Physical Recovery",
    tagline:
      "Two deep learning models chained per frame, turning a phone camera into a rehabilitation coach that counts your reps and grades them.",
    tags: ["Computer vision", "Deep learning", "MLOps"],
    accent: "#ffb3c1",
    github: "https://github.com/miguelfrancor01/App_PhysicalRecovery",
    stack: "PyTorch · HuggingFace · gRPC · Streamlit · MLflow · Docker",
    facts: [
      { label: "Domain", value: "Upper-limb rehabilitation" },
      { label: "Models", value: "RT-DETR · ViTPose-plus" },
      { label: "Transport", value: "Bidirectional gRPC streaming" },
      { label: "Team", value: "4 · Universidad Autónoma de Occidente" },
    ],
    metrics: [
      { value: "17", label: "Body keypoints tracked per detected person" },
      { value: "90°", label: "Shoulder abduction scored as a full repetition" },
      { value: "6", label: "Modules under unit test, enforced pre-commit" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Physiotherapy works on correct, repeated exercise at home with nobody watching. The patient doesn't know if the range is enough; the therapist sees results three weeks later through self-report. The gap is real-time measurement. A phone camera already sees what's needed to judge a shoulder abduction , the question is whether the pipeline turns frames into a number the patient understands mid-session, not a batch report afterward.",
        ],
      },
      {
        heading: "The pipeline and architecture",
        body: [
          "Each frame passes through five modules: validate, detect people, estimate pose, compute angle, evaluate repetition. RT-DETR finds persons and filters everything else; ViTPose-plus returns 17 COCO keypoints. The grade comes from three points: the left shoulder angle (hip-to-shoulder and wrist-to-shoulder vectors). A hysteresis pair of thresholds opens a rep at 40 degrees and closes it below 30, preventing tremor from registering twenty reps at the top of one. Each rep scores its peak angle against 90 degrees, and the session grade is their mean.",
          "The Streamlit client never loads a model. It encodes frames and streams to a gRPC server, receiving keypoints and angle back. Protocol Buffers keep the per-frame payload small enough for live video. Both run as containers from a single image, with the entrypoint choosing the process. The frontend resolves the server through an environment variable, so the same build runs against localhost, a Compose network, or a remote host without recoding.",
        ],
      },
      {
        heading: "Built like software, tested and deployed",
        body: [
          "MLflow tracks experiments, so detector and pose-estimator choices trace to recorded runs, not memory. Pre-commit hooks run Ruff and pytest with model loading mocked so tests finish in seconds. CI runs on a self-hosted runner (the image is roughly 10 GB once PyTorch and dependencies land). Tests gate the build, the build pushes a tagged image, and the image runs on a cloud VM serving both services on separate ports. A session ends with a PDF report: angle trace, repetitions detected, per-rep score, final grade.",
        ],
      },
    ],
    figures: [
      { src: recovery1, caption: "Live session: ViTPose skeleton with repetition count and current angle" },
      { src: recovery2, caption: "Clinical report generated at the end of the session" },
    ],
  },

  "site-selection": {
    title: "Site Selection Engine",
    tagline:
      "Where should a discount chain open next in Bogotá? A hexagon-level ranking built from open data , and validated so that neighbours can't grade each other.",
    tags: ["GIS", "Spatial ML", "FastAPI"],
    accent: "#db4637",
    github: "https://github.com/saulo1112/Site_selection_engine",
    stack: "Python · PostGIS · H3 · scikit-learn · FastAPI · Streamlit · Docker",
    facts: [
      { label: "City", value: "Bogotá, chosen with data" },
      { label: "Unit", value: "H3 hexagonal grid" },
      { label: "Reference brand", value: "129 D1 stores" },
      { label: "Validation", value: "Spatial 5-fold CV" },
    ],
    metrics: [
      { value: "0.84", label: "NDCG@200 under spatial cross-validation" },
      { value: "0.79", label: "Out-of-fold ROC-AUC, look-alike classifier" },
      { value: "3", label: "Model generations, each measured against the last" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Expansion decisions get made on instinct and a walk around the block. The defensible inputs (where competition is, what complements it, who lives there, road reachability) are all public but almost never assembled. The output is not revenue prediction (nobody can validate that without the chain's books). It's a ranked shortlist: given a sector and a city, which locations resemble places this format already succeeds in, ordered so a site team knows where to visit next.",
        ],
      },
      {
        heading: "Three models, each answering the last",
        body: [
          "Four candidate cities were tested first; Bogotá was the only one with enough reference-brand presence (129 stores) to leave viable positives after spatial separation. The unit of analysis is H3 hexagons, not administrative districts (which vary wildly in size). OpenStreetMap supplies competition and points of interest, census data supplies population and dwellings, apportioned by block.",
          "v1 was a weighted multi-criteria score with no learning: NDCG@200 0.80. v2 learns a look-alike classifier predicting reference-store presence, ranked by probability: ROC-AUC 0.78, NDCG@200 0.83. But on a random split, which is wrong for spatial data where neighbours share almost everything. v3 re-runs v2 under spatial cross-validation (folds are hexagon blocks with one-ring buffer removed). Expected: performance drops. Actual: ROC-AUC 0.79, NDCG@200 0.84, statistically unchanged. The signal generalises across space, not memorising neighbourhoods. That finding contradicts the prior, which makes it worth keeping. The real leakage was a feature counting the reference brand as its own competitor, found and removed.",
        ],
      },
      {
        heading: "Serving decoupled from the database",
        body: [
          "FastAPI reads versioned artefacts and a Streamlit map renders ranked hexagons, falling back to local files if the API is unreachable.",
        ],
      },
    ],
    figures: [
      { src: siteSelection1, caption: "Top hexagon scored 0.997 of 3,589 candidates, with the reasons beside it" },
      { src: siteSelection2, caption: "Zoomed to the shortlist: ranks 2–6 and per-hexagon scores" },
    ],
    card: siteSelectionCard,
  },

  "riocauca-baseline": {
    title: "Cauca River Baseline",
    tagline:
      "Internal water-quality viewer for the Cauca River corridor project: station data, flow and quality time series, and sugarcane exposure computed per river segment, closed to exactly 100%.",
    tags: ["GIS", "Geospatial analysis", "JavaScript"],
    accent: "#debfc5",
    github: "https://github.com/saulo1112/RioCauca_Baseline",
    stack: "MapLibre GL JS · Turf.js · Python · GitHub Pages",
    facts: [
      { label: "Corridor", value: "Pan de Azúcar → La Virginia" },
      { label: "Riparian buffer", value: "700 m" },
      { label: "Stations", value: "74 · 48 inside the cane zone" },
      { label: "Hosting", value: "Static, auto-deployed" },
    ],
    metrics: [
      { value: "25,092 ha", label: "Sugarcane resolved across 46 segments" },
      { value: "15", label: "Prioritised tributaries analysed" },
      { value: "100.0%", label: "Geometric closure, segments against river total" },
    ],
    sections: [
      {
        heading: "What's in the viewer",
        body: [
          "Four reaches of the Cauca, 74 tributary stations, five toggleable layers. Clicking a station opens its quality profile and flow-duration curve, with the underlying series downloadable as CSV. The sidebar collapses to keep the map the focus; a blinking highlight ties each cane polygon back to the segment it belongs to.",
        ],
      },
      {
        heading: "The problem the corridor team actually had",
        body: [
          "Diagnosing a biological corridor means constantly crossing three things that don't live in the same place: water quality at a station, flow at that same point, and how much of the basin upstream is under cane. Doing that by hand, spreadsheet by spreadsheet, doesn't scale past a handful of rivers. The viewer exists to make that crossing a click instead of a rebuild.",
          "One piece of that crossing turned out to be its own hard problem: land-use figures existed per river (one number for the whole Bolo, one for the whole Fraile), but stations sit at points along those rivers, so a per-river total can't be matched against a measurement taken at any one station. The fix needed land use per segment, the stretch between two consecutive stations.",
        ],
      },
      {
        heading: "Cutting and validating",
        body: [
          "Each cut becomes two half-plane polygons, and segments come out of boolean operations on those, not from reassembling the buffer outline by hand which loses meanders. Segments are ordered by projecting both cuts and stations onto the river axis so draw order cannot change the result. Cuts placed at a station generate the exact perpendicular to the channel axis, making them reproducible.",
          "Areas are computed geodesically on the WGS84 ellipsoid, not planimetrically over degrees (the standard way to be quietly wrong by a few percent at this latitude). The table carries both raw geodesic area and area normalised by the ratio to the published river total, so segments sum to what's published. The measured gap was 0.26%. Every panel reports geometric closure: segments divided by river total must read 100.0000%. Verified on the Bolo (3,794.85 ha) and Fraile (4,990.00 ha), matching official figures exactly.",
        ],
      },
      {
        heading: "What it revealed",
        body: [
          "Forty-six segments across fifteen tributaries, 25,092 hectares of sugarcane, plus full land-use breakdown over the same partition, now queryable station by station alongside its quality and flow history. The 700 m buffer only covers the flat valley floor, so on two rivers it reaches barely 30% of the channel axis and only 48 of 74 stations are usable. Two rivers hold a single station inside the cane zone, so they admit no intermediate cut. That's a gap in coverage worth naming honestly. The whole viewer is static: MapLibre and Turf from a CDN, native ES modules, no bundler, auto-deployed on push.",
        ],
      },
    ],
    figures: [
      { src: cauca1, caption: "Full viewer: 43 river segments, 17 tributaries and every station layer" },
      { src: cauca2, caption: "Per-station data extraction with CSV export" },
      { src: cauca3, caption: "Flow profile along the corridor" },
      { src: cauca4, caption: "Sugarcane hectares attributed to each tributary" },
    ],
    card: caucaBaselineCard,
  },

  "ortho-vision": {
    title: "Ortho Vision AI",
    tagline:
      "Surgeons spend up to 30 minutes identifying an implant before surgery. Can instance segmentation read the radiograph instead, from a dataset that had to be built by hand?",
    tags: ["Computer vision", "Medical imaging", "Deep learning"],
    accent: "#f1f5f7",
    github: "https://github.com/saulo1112/Ortho-Vision-AI",
    stack: "YOLOv8-seg · ONNX Runtime · FastAPI · OpenCV · Expo · Docker",
    facts: [
      { label: "Domain", value: "Orthopedic radiograph analysis" },
      { label: "Classes", value: "3 implant types, hand-labeled" },
      { label: "Dataset", value: "240 base images → 408 augmented" },
      { label: "Clients", value: "REST API + Expo mobile app" },
    ],
    metrics: [
      { value: "88%", label: "Surgeons who failed to ID an implant before surgery" },
      { value: "0.91–0.96", label: "IoU across all three implant classes" },
      { value: "408", label: "Curated radiographs from 3 public sources" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Surgeons who don't already know which implant a patient is carrying lose real time finding out. A 2012 survey of hip and knee surgeons found an average of 20 minutes and at least three identification methods before getting it right, with support staff needing 30. Close to 9 in 10 surgeons reported failing to identify an implant before surgery at least once, a miss that means extra devices brought into the operating room, longer procedures, more blood loss, and slower recovery. Projected forward, that identification gap could cost the United States $3.3 million by 2030, with more than 50,000 implants left unidentified each year. That's the problem instance segmentation targets here: telling intramedullary nails, screwed plates, and joint prostheses apart in a radiograph automatically, before someone has to guess.",
        ],
      },
      {
        heading: "Building a dataset that didn't exist",
        body: [
          "No public dataset for segmenting orthopedic implants existed, so building one came first. Over 4,000 candidate images were pulled from three sources: UCI's Shoulder Implant X-ray Manufacturer dataset, Kaggle's Bone Fracture Detection set filtered down to non-redundant, diagnostic-quality images, and targeted MedlinePlus searches to cover intramedullary nails specifically, since the first two barely showed them. Four team members hand-labeled 60 images each on Roboflow under one agreed standard, yielding 240 curated images, split 70/15/15 and expanded to 408 through controlled rotation so the model would see the same implant tilted the way a real radiograph tilts it.",
          "The limiting factor was never volume, it was variety. The pooled images skewed unevenly across anatomical regions (thorax, femur, humerus, pelvis) and rarely captured one implant from more than a single angle, so the model had less to generalize from per bone or projection than the raw count suggests. That gap is documented rather than smoothed over, since no permission-free source for orthopedic segmentation exists to fill it.",
        ],
      },
      {
        heading: "What held up, and what didn't",
        body: [
          "On the held-out test set, the trained model reached IoU between 0.91 and 0.96 and Dice near 0.97 across all three classes, with the intramedullary nail (long, sharply contrasted against bone) segmenting cleanest and the joint prosthesis hardest to pin down at a stricter confidence threshold. A second hypothesis, that classical preprocessing (a Gaussian filter followed by CLAHE) would sharpen segmentation, was tested rather than assumed, and it didn't hold: preprocessed and raw images scored within a fraction of a point of each other, evidence that the model's own convolutional layers already learn contrast-invariant features. From there the trained model left the notebook: exported to ONNX with certified equivalence against the original weights, served without PyTorch, and reachable from a mobile app that overlays predicted masks with per-instance confidence directly on the X-ray. It's an educational artefact, not a medical device, and isn't intended for clinical use.",
        ],
      },
    ],
    figures: [
      { src: ortho1, caption: "Entry screen: capture or upload a radiograph, model status visible" },
      { src: ortho2, caption: "Joint prosthesis segmented on a hip X-ray: 2 detections in 870 ms" },
      { src: ortho3, caption: "Intramedullary nails traced on both tibiae" },
      { src: ortho4, caption: "Screwed plate segmented at 87% confidence" },
      { src: ortho5, caption: "History of past analyses with per-class confidence" },
    ],
    card: orthoVisionCard,
  },

  airamb: {
    title: "AirAMB",
    tagline:
      "Can next hour's PM2.5 be forecast from what a city already measures? Three regressors compared under one honest split, the winner shipped as a desktop app.",
    tags: ["Machine learning", "Time series", "Desktop app"],
    accent: "#2459e1",
    github: "https://github.com/saulo1112/AirAMB",
    stack: "Python · pandas · scikit-learn · pywebview · PyInstaller",
    facts: [
      { label: "Domain", value: "Air quality forecasting" },
      { label: "Station", value: "Santa Cruz, Girón Norte" },
      { label: "Horizon", value: "PM2.5, one hour ahead" },
      { label: "Delivery", value: "Windows desktop app" },
    ],
    metrics: [
      { value: "0.960", label: "R² on the held-out test set, Random Forest" },
      { value: "3.716", label: "RMSE (µg/m³) forecasting PM2.5 one hour ahead" },
      { value: "17", label: "Input features feeding the deployed model" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Fine particulate matter, PM2.5, is one of the most direct threats air pollution poses to health, and its hourly swings are driven by weather and traffic patterns that are hard to anticipate without a model. Colombia's open monitoring network publishes hourly pollution and weather readings from dozens of stations, but coverage is inconsistent, and most of that data sits unused beyond historical reporting. The question was whether a city's own hourly records are enough to forecast PM2.5 one hour ahead, and whether that forecast could be handed to someone through more than a spreadsheet.",
        ],
      },
      {
        heading: "Choosing data over convenience",
        body: [
          "Of the stations reporting both pollution and weather variables, Santa Cruz, Girón Norte in Bucaramanga had the most complete coverage, so it became the sole subject of the model. From 16,824 raw hourly records, feature engineering built three lags each of PM2.5 and PM10, cyclic encodings of hour and day of week, and a chronological train and test split that keeps the future out of training. That left 12,826 records and 23 features. Three regressors, Random Forest, AdaBoost, and Ridge, were then compared on identical folds instead of picking one on reputation.",
        ],
      },
      {
        heading: "The result",
        body: [
          "Random Forest won on every accuracy metric, R² of 0.960 against 0.936 for both AdaBoost and Ridge on the test set, at a training cost over four times AdaBoost's and more than three thousand times Ridge's. That tradeoff was accepted because prediction, not training, runs in production, and Random Forest's own inference stayed under a fifth of a second. The chosen model now ships inside AirAMB, a Windows desktop app built with pywebview that takes the seventeen input variables by hand and returns a PM2.5 forecast one hour ahead, with an option to export the session as a PDF report.",
        ],
      },
    ],
    figures: [
      { src: airambInterface, caption: "Input panel and one-hour PM2.5 forecast, with model version and PDF export" },
      { src: airambReport, caption: "Exported report, cross-checked against Colombia's official PM10/PM2.5 alert thresholds" },
    ],
    card: airambCard,
  },

  "cali-transit-exposure": {
    title: "Cali Transit Exposure",
    tagline:
      "What does a bus rider in Cali actually breathe? A low-cost sensor rode MIO, the city's bus rapid transit system, for an hour to find out, and the answer beat a published benchmark in the wrong direction.",
    tags: ["Air quality", "Mobile sensing", "Research"],
    accent: "#2c6db0",
    github: "https://github.com/saulo1112/Cali-Transit-Exposure",
    stack: "Python · pandas · Folium · GeoPandas · contextily",
    facts: [
      { label: "Corridor", value: "Autopista Simón Bolívar, Cali" },
      { label: "Transect", value: "18.2 km, route P21B" },
      { label: "Instrument", value: "AirBeam, HabitatMap" },
      { label: "Sampling", value: "1 Hz · 3,630 records" },
    ],
    metrics: [
      { value: "52.1 µg/m³", label: "Mean PM10 along the transect" },
      { value: "55%", label: "Of the route in the High PM10 band" },
      { value: "94/100", label: "RedCOLSI national round score" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "About 99% of the world breathes air that exceeds WHO limits, and in Colombia air pollution was associated with 10,527 deaths in 2015 alone. Transport has historically driven a large share of that burden, roughly 85% of the country's atmospheric emissions in 2002, part of why Cali built MIO, its bus rapid transit system, in 2009. But exposure inside a bus is not the same as exposure on the street: passengers and drivers see the highest concentrations of any transport mode, with a documented 58.75% difference in fine particulate matter between buses and private cars, driven mostly by crowding and limited ventilation. What riders on that system actually breathe had never been measured.",
        ],
      },
      {
        heading: "Measuring a moving microenvironment",
        body: [
          "A low-cost AirBeam sensor rode an 18.2 km stretch of route P21B, from Universidades station to the Menga terminal, logging PM1, PM2.5, and PM10 once per second alongside GPS position, for 3,630 georeferenced readings over one hour. Inhalation dose, the amount a passenger actually breathes in, follows directly from concentration, a light-activity breathing rate of 0.00576 m³/min, and exposure time. Every reading carries both a pollutant level and a place, so the concentration along the route and the dose accumulated by a rider are the same dataset, not two studies stitched together.",
        ],
      },
      {
        heading: "What the transect showed",
        body: [
          "Mean PM10 sat at 52.1 µg/m³, with 55% of the trip in the High band under Resolución 2254 de 2017, Colombia's national air-quality standard. Framed as inhalation dose, PM10 exposure ran above a published PM2.5 benchmark from a comparable Medellín transit study for most of the route, while PM2.5 exposure stayed below it. Held constant over 24 hours, the peak in-cabin readings would breach the national limit outright. The result presented at RedCOLSI's national round, 94/100, made a specific case: cabin ventilation is the lever most directly available to cut what a passenger actually inhales, not just what a fixed monitor two blocks away happens to report.",
        ],
      },
    ],
    figures: [
      { src: transitDose, caption: "PM10 and PM2.5 inhalation dose over the 62-minute transect" },
      { src: transitPm10Route, caption: "PM10 concentration along the Universidades to Menga route" },
      { src: transitHeatmap, caption: "PM10 density across the transect" },
      { src: transitDistributions, caption: "Concentration distributions against Resolución 2254 de 2017 thresholds" },
    ],
    card: caliTransitCard,
  },
};

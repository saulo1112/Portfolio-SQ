// Long-form project overviews shown in the lightbox.
// Keyed by slug; a project card opens its lightbox when its slug is listed here.
// To add a project: append an entry and set `slug` on its card in Projects.astro.

export type Figure = {
  /** Shown under the placeholder , describes the image to drop in. */
  caption: string;
  /** Aspect ratio of the slot, e.g. "16 / 10" or "3 / 4". */
  ratio?: string;
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
  /** Headline numbers. Kept to 3–4 so they stay scannable. */
  metrics: { value: string; label: string }[];
  /** Narrative body. 2-3 sections, mostly one paragraph each. */
  sections: { heading: string; body: string[] }[];
  /** Exactly 3. figures[0] renders full-width as the hero , give it a landscape ratio
      (16/10, 16/9, 3/2); a portrait hero leaves the row visually empty. figures[1] and
      figures[2] sit side by side beneath it. */
  figures: [Figure, Figure, Figure];
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
      { caption: "Capture screen with accessible controls", ratio: "9 / 16" },
      { caption: "Conversational response interface", ratio: "16 / 10" },
      { caption: "Architecture: client, cloud, and local playback", ratio: "16 / 10" },
    ],
  },

  "cali-river": {
    title: "Cali River Biomonitoring",
    tagline:
      "Eighteen records, nine stations. Which ecological predictions can a dataset that small honestly support , and which ones only look like they work?",
    tags: ["Machine learning", "Ecological modelling", "Research"],
    accent: "#aaf683",
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
      { value: "κ 0.516", label: "Best habitat suitability (Perlidae)" },
      { value: "κ 0.258", label: "Best water quality (BMWP/Col)" },
      { value: "−0.21", label: "κ inflation removed by nesting" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Biotic sampling is slow and expensive, while automated water chemistry is routine. The question is obvious: can we predict river health from chemistry we're already collecting? Machine learning says yes, on thousands of sites. But regional authorities hold fewer than thirty stations across one or two campaigns. The useful question is not which algorithm wins on abundant data, but which performs honestly on scarce data, and how much reported performance is real.",
        ],
      },
      {
        heading: "Why validation was the actual subject",
        body: [
          "At small sample sizes, data leakage becomes consequential. Any path that lets held-out information reach the model beforehand inflates the score invisibly. Surveys across seventeen fields found it reversing published conclusions. So every decision (predictor selection, hyperparameter tuning, even membership-function estimation) was re-run inside each training fold under a nested leave-one-out protocol. The gap between nested and standard metrics becomes its own measurement: how much performance was borrowed from data the model shouldn't have seen.",
        ],
      },
      {
        heading: "What came out of it",
        body: [
          "No technique won across the board. ε-SVR excelled at water quality, fuzzy inference at habitat suitability, logistic regression at another family. Nesting the selection step cut metrics by up to 0.21 in five configurations and left the sixth unchanged, which shows exactly where validation design matters. The water quality model can't name exact values but ranks stations well, and ranking is what a monitoring program needs to decide where to sample next. Habitat suitability for common taxa is tractable; five-class predictions are not. That boundary came from measurement, not assumption, which makes it portable to other data-scarce basins.",
        ],
      },
    ],
    figures: [
      { caption: "Study area with monitoring stations", ratio: "16 / 10" },
      { caption: "Nested leave-one-out cross-validation protocol", ratio: "16 / 10" },
      { caption: "Model performance: ε-SVR, fuzzy inference, logistic regression", ratio: "16 / 10" },
    ],
  },

  eudr: {
    title: "EUDR Forest Risk Assessment",
    tagline:
      "Screening 4,170 real agricultural parcels for EU deforestation compliance , using nothing but open satellite data.",
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
      { caption: "Study area selection from cocoa-probability clusters", ratio: "16 / 10" },
      { caption: "Early-warning dashboard , LOW-risk parcels ranked by context", ratio: "16 / 10" },
      { caption: "Model v3 performance: PR-AUC 0.846, macro-F1 0.837", ratio: "16 / 10" },
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
      { caption: "Homepage with brand, video, and primary CTA", ratio: "16 / 10" },
      { caption: "Projects page , five practice areas, filterable cards", ratio: "16 / 10" },
      { caption: "Achievements timeline with reveal-on-scroll animation", ratio: "16 / 10" },
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
      { caption: "Live session , skeleton overlay with angle and rep count", ratio: "16 / 10" },
      { caption: "Architecture: Streamlit client, gRPC server, inference pipeline", ratio: "16 / 10" },
      { caption: "Session report: angle trace and repetition boundaries", ratio: "16 / 10" },
    ],
  },

  "site-selection": {
    title: "Site Selection Engine",
    tagline:
      "Where should a discount chain open next in Bogotá? A hexagon-level ranking built from open data , and validated so that neighbours can't grade each other.",
    tags: ["GIS", "Spatial ML", "FastAPI"],
    accent: "#1D9E75",
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
      { caption: "H3 hexagon grid over Bogotá with store locations", ratio: "16 / 10" },
      { caption: "Spatial cross-validation folds with buffer rings", ratio: "16 / 10" },
      { caption: "Ranking metrics: v1 (NDCG 0.80), v2 (0.83), v3 (0.84)", ratio: "16 / 10" },
    ],
  },

  "riocauca-baseline": {
    title: "RioCauca Baseline",
    tagline:
      "Sugarcane hectares split by river segment, computed in the browser , and made to close at exactly 100%.",
    tags: ["GIS", "Geospatial analysis", "JavaScript"],
    accent: "#4EA8DE",
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
      { value: "100.0000%", label: "Geometric closure, segments against river total" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "A biological-corridor diagnosis needs to know how much diffuse load reaching the Cauca River comes from where. Land-use figures existed per river (one number for the whole Bolo, one for the whole Fraile). Monitoring stations sit at points along those rivers, so a per-river total cannot be matched against a measurement taken at any one station. The analysis needed land use per segment, the stretch between two consecutive stations.",
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
          "Forty-six segments across fifteen tributaries, 25,092 hectares of sugarcane, plus full land-use breakdown over the same partition. The 700 m buffer only covers the flat valley floor, so on two rivers it reaches barely 30% of the channel axis and only 48 of 74 stations are usable. Two rivers hold a single station inside the cane zone, so they admit no intermediate cut. That's a gap in coverage worth naming honestly. The whole viewer is static: MapLibre and Turf from a CDN, native ES modules, no bundler, auto-deployed on push.",
        ],
      },
    ],
    figures: [
      { caption: "Interactive viewer with tributaries and monitoring stations", ratio: "16 / 10" },
      { caption: "Segment cutting tool with closure check", ratio: "16 / 10" },
      { caption: "Sugarcane hectares across fifteen tributaries", ratio: "16 / 10" },
    ],
  },

  "ortho-vision": {
    title: "Ortho Vision AI",
    tagline:
      "A radiograph segmentation model exported to ONNX, proven equivalent to its source, served without PyTorch, and deployed to mobile.",
    tags: ["Computer vision", "MLOps", "Mobile"],
    accent: "#ffb3c1",
    github: "https://github.com/saulo1112/Ortho-Vision-AI",
    stack: "YOLOv8-seg · ONNX Runtime · FastAPI · OpenCV · Expo · Docker",
    facts: [
      { label: "Task", value: "Instance segmentation" },
      { label: "Classes", value: "3 orthopedic implant types" },
      { label: "Test set", value: "36 held-out radiographs" },
      { label: "Clients", value: "REST API + Expo mobile app" },
    ],
    metrics: [
      { value: "≥0.996", label: "Mask agreement, ONNX against PyTorch" },
      { value: "~300 MB", label: "Serving image, fits a 512 MB instance" },
      { value: "~450 ms", label: "Mean CPU inference per radiograph" },
    ],
    sections: [
      {
        heading: "The distance from research to deployed",
        body: [
          "A segmentation model identifying intramedullary nails, screwed plates, and joint prostheses in radiographs is useful. A checkpoint file is not. The distance between a trained model and something a person can point at an X-ray is the entire project. This work takes a research model through that distance: export, validation, serving, client. It's a portfolio and teaching artefact, not a medical device, intended for educational use only.",
        ],
      },
      {
        heading: "Certified equivalence and lightweight serving",
        body: [
          "Converting a checkpoint to ONNX appears to work, but silent drift happens in post-processing, resize handling, activations. So the conversion is certified rather than assumed. A script runs both pipelines over the held-out test set and reports mask-to-mask agreement and per-class metric delta. Agreement holds at 0.996 or better across all three classes. IoU and Dice differ by no more than 0.001.",
          "YOLOv8-seg's post-processing (non-maximum suppression, mask assembly, polygonisation) is reimplemented in numpy and OpenCV, leaving ONNX Runtime as the only inference dependency. The result is a roughly 300 MB image that runs on a free-tier 512 MB instance at about 450 ms per image on CPU. Polygons come back in normalised coordinates so the client scales them to any display. The Expo app probes candidate backends in order (configured URL, USB tunnel, dev host) and uses the first that answers.",
        ],
      },
      {
        heading: "Mobile delivery",
        body: [
          "The app takes a photo or picks a radiograph, posts it, and draws returned polygons as SVG overlays with per-instance confidence. Vector masks stay sharp at any screen density and zoom level. The medical disclaimer is part of the interface, not a README note.",
        ],
      },
    ],
    figures: [
      { caption: "Mobile app with segmentation overlay and confidence", ratio: "9 / 16" },
      { caption: "ONNX parity report showing per-class agreement", ratio: "16 / 10" },
      { caption: "Architecture: Expo, gRPC server, inference pipeline", ratio: "16 / 10" },
    ],
  },
};

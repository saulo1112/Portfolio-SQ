// Long-form project overviews shown in the lightbox.
// Keyed by slug; a project card opens its lightbox when its slug is listed here.
// To add a project: append an entry and set `slug` on its card in Projects.astro.

export type Figure = {
  /** Shown under the placeholder — describes the image to drop in. */
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
  /** Narrative body. Each section is a heading + one or two paragraphs. */
  sections: { heading: string; body: string[] }[];
  figures: Figure[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  opticoder: {
    title: "OptiCoder",
    tagline:
      "A phone camera that reads code screenshots, UI mockups and architecture diagrams aloud — for developers who can't see them.",
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
          "Software work runs on visual artifacts that carry no alt text: code screenshots pasted into a ticket, a UI mockup in a design review, an architecture diagram in a spec. For a developer with a visual impairment, these are dead ends — a screen reader has nothing to announce.",
          "Assistive tooling has largely solved everyday scenes: navigation, object recognition, reading a label. Almost none of it targets the technical artifacts a professional developer actually needs, and the multimodal models that could interpret them live on desktops, in English, behind heavy compute.",
        ],
      },
      {
        heading: "The approach",
        body: [
          "Point the phone at a screen. A vision-language model interprets the image semantically — reasoning about the code itself rather than trusting the IDE's red squiggles, which turned out to be a real source of false detections. The answer comes back spoken, capped at three sentences so it stays listenable.",
          "From there it's conversational: ask a follow-up by voice, get a two-sentence answer. Capture, interpret, speak, ask again — one loop, no visual navigation required at any step.",
        ],
      },
      {
        heading: "Architecture",
        body: [
          "A lightweight client–cloud split, chosen so it runs on the mid-range hardware the target users actually own rather than a flagship device. The Expo/React Native client handles capture, encoding and playback; the heavy models stay in the cloud behind APIs.",
          "Google Gemini performs the visual interpretation, OpenAI Whisper transcribes voice input, and Expo's text-to-speech module delivers the response. Accessibility drove the interface from the first commit — large touch targets, high contrast, haptic confirmation, and full native screen-reader compatibility, not retrofitted afterward.",
        ],
      },
      {
        heading: "What the evaluation showed",
        body: [
          "Seven developers ran 106 classification instances against source-code screenshots spanning Python, JavaScript, PHP, Dart/Flutter, Java and Visual Basic 6.0, each labelled error-present or error-free. The system identified errors with 74.1% precision.",
          "Satisfaction scored above 4.5/5 on contextual relevance, usability and interaction quality. Two of the system's prompt rules — ignore IDE annotations, and stay brief — were not designed up front; they were written in response to what the evaluation surfaced.",
        ],
      },
    ],
    figures: [
      { caption: "Capture screen — camera view with accessible controls", ratio: "9 / 16" },
      { caption: "Conversational response with spoken output", ratio: "9 / 16" },
      { caption: "Modular domain structure of the prototype", ratio: "16 / 10" },
      { caption: "Conversational interaction loop", ratio: "16 / 10" },
    ],
  },

  "cali-river": {
    title: "Cali River Biomonitoring",
    tagline:
      "Eighteen records, nine stations. Which ecological predictions can a dataset that small honestly support — and which ones only look like they work?",
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
          "Aquatic macroinvertebrates are the standard instrument for judging river health in Latin America, summarised through the BMWP/Col index. But biological sampling is slow and expensive next to automated physicochemical measurement, which raises an obvious question: can you predict biotic condition from the water chemistry a monitoring programme already collects?",
          "Machine learning answers that question well — on thousands of sites. Regional environmental authorities typically hold fewer than thirty stations across one or two campaigns. The useful question isn't which algorithm wins on abundant data; it's which performs acceptably on scarce data, and how much of the reported performance is real.",
        ],
      },
      {
        heading: "Why validation was the actual subject",
        body: [
          "At small sample sizes, data leakage stops being a technical footnote. Any pathway that lets information from the held-out observation reach the model beforehand inflates the reported score — and unlike most limitations, it's invisible from the metrics themselves. Surveys across seventeen scientific fields have found it reversing published conclusions.",
          "So every data-dependent decision — predictor selection, membership-function estimation, hyperparameter tuning — was re-run inside each training fold, under a single nested leave-one-out protocol. The gap between the nested and the standard estimate becomes a measurement in its own right: how much apparent performance was borrowed from data the model shouldn't have seen.",
        ],
      },
      {
        heading: "The comparison",
        body: [
          "Five techniques spanning rule-based, parametric and kernel families were run head to head under that one protocol: Mamdani fuzzy inference, logistic regression, classification trees, negative binomial regression and ε-support vector regression.",
          "Two prediction targets — the occurrence of two pollution-sensitive families (Perlidae and Helicopsychidae), and hydrobiological water quality through the BMWP/Col index.",
        ],
      },
      {
        heading: "What came out of it",
        body: [
          "No technique won across the board. ε-SVR was strongest on BMWP/Col, fuzzy inference on Perlidae, logistic regression on Helicopsychidae. Total hardness and flow held up as the most stable predictors across folds. Nesting the selection step cut κ by as much as 0.21 in five of six matched configurations — and left it untouched in the sixth, where selection was already stable, which locates exactly where validation design matters.",
          "The BMWP/Col model fails at naming the exact value but succeeds at ranking stations worst to best — and ranking is the property a monitoring programme actually needs to decide where to sample next. The framework's output is a boundary: habitat suitability for a moderately represented taxon is tractable, five-class index prediction is not. That line was reached by measurement rather than assumption, which is what makes it portable to other data-scarce basins.",
        ],
      },
    ],
    figures: [
      { caption: "Study area — monitoring stations across the basin", ratio: "16 / 10" },
      { caption: "Nested leave-one-out cross-validation protocol", ratio: "16 / 10" },
      { caption: "Model comparison across targets", ratio: "16 / 10" },
      { caption: "Predictor stability across folds", ratio: "16 / 10" },
    ],
  },

  eudr: {
    title: "EUDR Forest Risk Assessment",
    tagline:
      "Screening 4,170 real agricultural parcels for EU deforestation compliance — using nothing but open satellite data.",
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
          "The EU Deforestation Regulation bars cocoa, coffee, palm oil, soy, rubber, cattle and wood products from the EU market if they trace back to land cleared after 31 December 2020. An operator sourcing from thousands of smallholder plots has to demonstrate that, plot by plot, before the compliance deadline.",
          "Commercial platforms sell that screening. This pipeline reproduces the geospatial core of one end to end on open, official datasets alone — no proprietary imagery, no confidential supplier data, nothing that can't be audited by whoever receives the result.",
        ],
      },
      {
        heading: "Choosing the study area with data, not a pointer",
        body: [
          "Picking a region by hand is the kind of decision that quietly determines a result, so it was made programmatically instead: threshold a cocoa-probability raster over Colombia's real administrative boundary, cluster the connected components at 1 km, take the largest cluster and buffer 20 km around its centroid.",
          "The procedure returned Alto Sinú, on the Córdoba–Antioquia border — a documented agricultural frontier under active deforestation pressure. Vectorizing that surface at 10 m and filtering to 0.5–85 ha produced 4,170 parcels averaging 2.90 ha, which lands almost exactly on the ~3 ha reported for Colombian cocoa smallholders. The same four steps run unchanged over Côte d'Ivoire, Ghana, Indonesia, Ecuador or Peru.",
        ],
      },
      {
        heading: "The model, and the leakage that killed the first version",
        body: [
          "Deforestation per parcel comes from intersecting annual forest-loss detections after 2021 with pixels classified as forest in 2020 — loss occurring strictly after the regulation's cutoff. Seventy parcels carry measurable post-2020 loss, six of them over half their area.",
          "The first classifier scored near-perfect precision and recall, which was the tell: its features encoded the same quantity the label was derived from. v2 replaced them with the neighbourhood's deforestation in a 200 m ring excluding the parcel itself — honest, and underpowered at macro-F1 0.43. v3 added distance to the nearest recent loss and multi-radius neighbourhood context, reframed the target as binary, and reached PR-AUC 0.846 with macro-F1 0.837. A sensitivity check that masks the distance feature holds at 0.812, so the score isn't resting on one predictor.",
        ],
      },
      {
        heading: "What it actually delivers",
        body: [
          "The useful output isn't the 70 parcels already visible in the imagery — it's the ~4,100 currently clean ones ranked by the risk of becoming the next case. Parcel 3123 has zero deforestation of its own, sits 40 m from recent forest loss and shows 2.0% loss inside its 200 m ring; it tops the early-warning list precisely because nothing has happened there yet.",
          "PostGIS holds the geometry and scores, FastAPI exposes parcels, aggregate statistics and the early-warning ranking, and a Leaflet dashboard renders it. The whole stack — database seeded with all 4,170 scored parcels, API, frontend — comes up from a single Docker Compose file. The score is framed throughout as a prioritisation aid: compliance under the regulation is zero-tolerance and binary, and a probabilistic ranking decides where to look first, never whether a parcel is clean.",
        ],
      },
    ],
    figures: [
      { caption: "Data-driven AOI selection — cocoa probability clusters over Colombia", ratio: "16 / 10" },
      { caption: "Parcel map with post-2020 forest loss highlighted", ratio: "16 / 10" },
      { caption: "Model iteration v1 → v3: features, framing and honest metrics", ratio: "16 / 10" },
      { caption: "Early-warning dashboard — LOW-risk parcels ranked by context", ratio: "16 / 10" },
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
      { label: "Client", value: "Fudambient — environmental NGO" },
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
          "Fudambient works on urban greening, basic sanitation, landscape management and the restoration of land damaged by illegal mining — public-sector contracts across the Valle del Cauca, going back years. Their record existed as spreadsheets and Word documents; prospective partners had nothing to look at.",
          "The job was the whole path from that raw material to a live site: deciding what a visitor needs to see and in what order, designing it, building it, and shipping something the foundation could keep using without a developer on retainer.",
        ],
      },
      {
        heading: "Information architecture",
        body: [
          "The contract archive drove the structure. Ten projects, each with a category, a location, a year and a plain-language description of what was done, sorted into five practice areas — urbanism, basic sanitation, environmental restoration, landscape management tools, and design and consultancy. That taxonomy became the site's spine.",
          "Around it: a homepage that leads with what the foundation does rather than what it is, a mission and territory section, an achievements page carrying the timeline of how a project actually runs from community dialogue through to follow-up, and a services page. Every page shares one header, one navigation model and one type scale.",
        ],
      },
      {
        heading: "Building it without a framework",
        body: [
          "The client needed to be able to hand the site to anyone. So: native ES modules, plain stylesheets, no bundler, no package manifest to keep alive. Open a file, edit it, push it. The project data lives in readable JavaScript arrays rather than a CMS, which keeps adding next year's contract to a five-minute job.",
          "Interaction is written by hand where it earns its place — a scroll-reactive header that swaps to a floating glass pill, an autoplaying project slider, a lightbox for project photography, and reveal-on-scroll animations on the achievements timeline. Everything degrades to readable HTML if a script fails.",
        ],
      },
      {
        heading: "Bilingual by construction",
        body: [
          "Half the foundation's potential partners read English. Rather than duplicating five pages, translation is a lookup: every translatable node carries a key, two JSON locale files hold the strings, and switching languages re-renders the DOM in place and remembers the choice.",
          "Dynamic content — the slider, the timeline, the project cards — subscribes to a language-change event, so components that render after boot pick up the right locale instead of silently staying in Spanish. Adding a third language means adding one file.",
        ],
      },
    ],
    figures: [
      { caption: "Homepage hero — brand mark, video background, primary CTA", ratio: "16 / 10" },
      { caption: "Projects page — filterable cards across five practice areas", ratio: "16 / 10" },
      { caption: "Achievements timeline with reveal-on-scroll animation", ratio: "16 / 10" },
      { caption: "Language toggle — the same section rendered in ES and EN", ratio: "16 / 10" },
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
          "Physiotherapy works when the exercises are done correctly and done often, and most of them happen at home with nobody watching. The patient doesn't know whether the range of motion was enough; the therapist sees the result three weeks later, and only through self-report.",
          "The gap is measurement. A phone camera already sees everything needed to judge a shoulder abduction — the question is whether the pipeline behind it can turn frames into a number the patient understands mid-session, not a batch report afterwards.",
        ],
      },
      {
        heading: "The pipeline",
        body: [
          "Each frame passes through five stages, each isolated in its own module: validate and normalise, detect people, estimate pose, compute the biomechanical angle, evaluate the repetition. RT-DETR finds the person and filters everything that isn't one; ViTPose-plus returns 17 COCO keypoints with confidence scores.",
          "The grade comes from three of those points. The angle at the left shoulder — between the hip→shoulder and wrist→shoulder vectors — is the signal. A hysteresis pair of thresholds opens a repetition at 40° and closes it below 30°, which stops a trembling arm from registering twenty reps at the top of one. Each repetition scores its peak angle against 90°, and the session grade is their mean.",
        ],
      },
      {
        heading: "Why the interface runs no inference",
        body: [
          "The Streamlit client never loads a model. It encodes frames and speaks to a gRPC server over a bidirectional stream, receiving keypoints and the computed angle back. Protocol Buffers keep the per-frame payload small enough for the round trip to stay inside a live video loop, which JSON over HTTP does not.",
          "The split is what makes the system deployable. The two run as separate containers from a single image, with the entrypoint deciding which process starts; the frontend resolves the server through an environment variable, so the same build runs against localhost, a Compose network or a remote host without a code change.",
        ],
      },
      {
        heading: "Treated as software, not a notebook",
        body: [
          "MLflow tracks the experiments, so the choice of detector and pose estimator is traceable to recorded runs rather than remembered. Pre-commit hooks run Ruff and the full pytest suite before any commit lands, with model loading mocked so the tests execute in seconds instead of downloading gigabytes of weights.",
          "CI runs on a self-hosted runner — the image is roughly 10 GB once PyTorch, Transformers and OpenCV are in, which shared runners won't build. Tests gate the build; the build pushes a tagged image; the image runs on a cloud VM serving the interface and the inference server on their own ports. A session ends with a generated PDF report: angle trace, repetitions detected, score per repetition, final grade.",
        ],
      },
    ],
    figures: [
      { caption: "Live session — skeleton overlay with running angle and rep count", ratio: "16 / 10" },
      { caption: "Modular architecture: Streamlit client, gRPC server, inference pipeline", ratio: "16 / 10" },
      { caption: "Angle trace over a session, with repetition boundaries marked", ratio: "16 / 10" },
      { caption: "Generated PDF session report", ratio: "3 / 4" },
    ],
  },

  "site-selection": {
    title: "Site Selection Engine",
    tagline:
      "Where should a discount chain open next in Bogotá? A hexagon-level ranking built from open data — and validated so that neighbours can't grade each other.",
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
          "Retail expansion decisions get made on instinct and a walk around the block. The inputs that would make them defensible — where the competition already is, what complements it, who lives there, how reachable the corner is — are all publicly available and almost never assembled.",
          "The target output isn't a prediction of revenue, which nobody can validate without the chain's books. It's a ranked shortlist: given a business sector and a city, which locations most resemble the places this format already succeeds in, ordered so a site team knows where to spend its next site visit.",
        ],
      },
      {
        heading: "Choosing the city, and the unit of analysis",
        body: [
          "Four candidate cities were checked against the data before one was picked. Bogotá was the only one of the four with enough presence from the reference brand — 129 stores — to leave viable positive examples after spatial separation, and the only one with documented socioeconomic stratification coverage.",
          "The grid is H3 hexagons rather than administrative districts. Districts vary wildly in size and shape, so a per-district score compares things that aren't comparable; uniform hexagons make density a real quantity and make every candidate the same size. OpenStreetMap supplies competitors, complementary points of interest and the road network; census data supplies population and dwellings, apportioned to hexagons by block.",
        ],
      },
      {
        heading: "Three models, each answering the previous one's objection",
        body: [
          "v1 is a weighted multi-criteria score with no learning in it at all — interpretable, arguable, and the baseline everything else has to beat. It reaches NDCG@200 of 0.80.",
          "v2 learns instead: a look-alike classifier predicting whether a hexagon hosts a reference store, ranked by that probability. ROC-AUC 0.78, NDCG@200 0.83 — but on a random train/test split, which is the wrong split for spatial data. A hexagon and its neighbour share almost everything, so a random split lets the model grade a cell it has effectively already seen.",
        ],
      },
      {
        heading: "The result that didn't confirm the hypothesis",
        body: [
          "v3 re-runs the same model under spatial cross-validation: folds are blocks of coarse hexagons with a one-ring buffer removed between train and test, so no test cell touches a training cell. The expectation was that performance would drop and the earlier numbers would turn out to be borrowed.",
          "It didn't. ROC-AUC 0.79, NDCG@200 0.84 — statistically unchanged, meaning the signal generalises across space rather than memorising neighbourhoods. That is a finding worth keeping precisely because it contradicts the prior; the leakage that was real was a different one, a feature counting the reference brand as its own competitor, found and removed. Serving is decoupled from the database: FastAPI reads versioned artefacts and a Streamlit map renders the ranked hexagons, falling back to local files if the API is unreachable.",
        ],
      },
    ],
    figures: [
      { caption: "H3 hexagon grid over Bogotá with reference store locations", ratio: "16 / 10" },
      { caption: "Spatial cross-validation folds — blocks with buffer rings excluded", ratio: "16 / 10" },
      { caption: "Ranking metrics across v1, v2 and v3", ratio: "16 / 10" },
      { caption: "Streamlit dashboard — top-ranked hexagons and their feature profile", ratio: "16 / 10" },
    ],
  },

  "riocauca-baseline": {
    title: "RioCauca Baseline",
    tagline:
      "Sugarcane hectares split by river segment, computed in the browser — and made to close at exactly 100%.",
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
          "A biological-corridor diagnosis needs to know how much of the diffuse load reaching the Cauca River comes from where. Land-use figures existed, but per river: one number for the whole of the Bolo, one for the whole of the Fraile. Monitoring stations sit at points along those rivers, so a per-river total can't be matched against a measurement taken at any one of them.",
          "What the analysis needed was land use per segment — the stretch between two consecutive stations — so a water-quality reading has a catchment attached to it rather than a river name.",
        ],
      },
      {
        heading: "Cutting a river into segments",
        body: [
          "Each cut becomes two half-plane polygons, and segments come out of boolean operations on those — not from reassembling the buffer's outline by hand, which loses the meanders that stick out. The half-plane's reach is derived from the buffer's bounding box; a fixed small value silently drops area in exactly the places that matter.",
          "Segments are ordered and named by projecting both cuts and stations onto the river axis, so the order they were drawn in cannot change the result, and flow direction is inferred from which end of the axis lies closer to the Cauca. Cuts placed at a station generate the exact perpendicular to the channel axis, which makes them reproducible rather than hand-traced.",
        ],
      },
      {
        heading: "Making the numbers close",
        body: [
          "Areas are computed geodesically on the WGS84 ellipsoid — never planimetrically over degrees, which is the standard way to be quietly wrong by a few percent at this latitude. Because the official figures were computed in a local projected system, the table carries both the raw geodesic area and one normalised by the ratio to the published river total, so segments sum to the number already in circulation. The measured gap was −0.26%.",
          "Every panel reports geometric closure: segments divided by river total, which must read 100.0000%. It's a self-check that catches a badly oriented cut immediately instead of at review. Verified on the Bolo and the Fraile — 3,794.85 ha and 4,990.00 ha, matching the official figures to the hundredth, closure exact on both.",
        ],
      },
      {
        heading: "What the segmentation revealed",
        body: [
          "Forty-six segments across fifteen tributaries, 25,092 hectares of sugarcane, plus a full land-use breakdown — cane, pasture, forest, urban — over the same partition, shared between both analyses by construction rather than by coincidence.",
          "Two results are about monitoring rather than geometry. The 700 m buffer only covers the flat valley floor: on two rivers it reaches barely 30% of the channel axis, which is why a mountain station can't serve as a cut point and why only 48 of 74 stations are usable. And two rivers hold a single station inside the cane zone, so they admit no intermediate cut at all — 2,722 hectares that cannot be disaggregated with the current network. That's a gap in coverage, and naming it is more useful than interpolating over it. The whole viewer is static: MapLibre and Turf from a CDN, native ES modules, no bundler, auto-deployed on push.",
        ],
      },
    ],
    figures: [
      { caption: "Interactive viewer — tributaries, 700 m buffer and monitoring stations", ratio: "16 / 10" },
      { caption: "Segment cutting tool with live area table and closure check", ratio: "16 / 10" },
      { caption: "Sugarcane hectares by segment across the fifteen tributaries", ratio: "16 / 10" },
      { caption: "Longitudinal water-quality profile along the corridor", ratio: "16 / 10" },
    ],
  },

  "ortho-vision": {
    title: "Ortho Vision AI",
    tagline:
      "A radiograph segmentation model taken out of the notebook — exported, proven equivalent, served torch-free, and put on a phone.",
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
        heading: "The problem",
        body: [
          "A segmentation model that identifies intramedullary nails, screwed plates and joint prostheses in radiographs is a genuinely useful thing — and a checkpoint file is not a usable one. The distance between a trained model and something a person can point at an X-ray is the entire project.",
          "This takes a research segmentation model through that distance: export, validation, serving, client. It is a portfolio and teaching artefact, not a medical device, and nothing about it is intended for clinical use.",
        ],
      },
      {
        heading: "Not trusting the export",
        body: [
          "Converting a checkpoint to ONNX is a one-line call, and the reason it deserves more than that is that it usually appears to work. Silent drift in post-processing, a resize with different corner handling, an activation folded differently — all of it produces plausible masks that aren't the same masks.",
          "So the conversion is certified rather than assumed. A script runs both pipelines over the entire held-out test set and reports mask-to-mask agreement and the per-class metric delta. Agreement holds at 0.996 or better across all three classes and IoU and Dice differ by no more than 0.001. The report is generated by the script, not written by hand, so it can be regenerated whenever the model changes.",
        ],
      },
      {
        heading: "Serving without PyTorch",
        body: [
          "Shipping the training framework to production would have meant a multi-gigabyte image and an instance to match. Instead, YOLOv8-seg's post-processing — non-maximum suppression, prototype mask assembly, polygonisation — is reimplemented in numpy and OpenCV, leaving ONNX Runtime as the only inference dependency.",
          "The result is a roughly 300 MB image that runs on a free-tier 512 MB instance at about 450 ms per image on CPU. Polygons come back in normalised coordinates, so the client scales them to any display without renegotiating the contract. EXIF orientation is corrected on the way in, image size is bounded, no-detection is a valid response rather than an error, and every prediction carries the model version that produced it.",
        ],
      },
      {
        heading: "The client",
        body: [
          "An Expo app takes the photo or picks the radiograph, posts it, and draws the returned polygons as SVG overlays on top of the image with per-instance confidence — vector masks, so they stay sharp at any screen density and any zoom level.",
          "The app resolves its backend by probing candidates in order and using the first that answers a health check: a configured deployment URL, then a USB tunnel, then the development host on the local network. That removes the single most common friction in testing a mobile client against a local server. The medical disclaimer is part of the interface, not a line in the README.",
        ],
      },
    ],
    figures: [
      { caption: "Mobile app — segmentation masks overlaid with per-instance confidence", ratio: "9 / 16" },
      { caption: "ONNX parity report — per-class IoU, Dice and mask agreement", ratio: "16 / 10" },
      { caption: "Architecture: Expo client, FastAPI inference server, persistence", ratio: "16 / 10" },
      { caption: "The three implant classes segmented side by side", ratio: "16 / 10" },
    ],
  },
};

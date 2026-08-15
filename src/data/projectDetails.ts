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
};

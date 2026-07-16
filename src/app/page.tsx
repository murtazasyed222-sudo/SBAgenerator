"use client";

import { useState } from "react";
import {
  questionBankFolders,
  type Question,
  type QuestionBankFolder,
  type QuestionSet,
} from "./questionBank";

const medicalTerms = [

  // General medicine
  "anatomy",
  "physiology",
  "pathology",
  "pharmacology",
  "histology",
  "biochemistry",
  "genetics",
  "embryology",
  "microbiology",
  "immunology",
  "neuroscience",
  "cardiology",
  "respiratory",
  "gastrointestinal",
  "renal",
  "endocrine",
  "haematology",
  "oncology",

  // Cells & tissues
  "cell",
  "membrane",
  "nucleus",
  "cytoplasm",
  "mitochondria",
  "ribosome",
  "lysosome",
  "epithelium",
  "epithelial",
  "connective tissue",
  "smooth muscle",
  "skeletal muscle",
  "cardiac muscle",
  "fibroblast",
  "macrophage",
  "neuron",
  "glial",
  "astrocyte",
  "oligodendrocyte",
  "microglia",

  // Anatomy
  "artery",
  "vein",
  "capillary",
  "nerve",
  "ligament",
  "tendon",
  "fascia",
  "cartilage",
  "bone",
  "joint",
  "muscle",
  "thorax",
  "abdomen",
  "pelvis",
  "mediastinum",
  "peritoneum",
  "mesentery",
  "inguinal",
  "femoral",
  "brachial",
  "radial",
  "ulnar",
  "axillary",
  "carotid",
  "jugular",
  "superior",
  "inferior",
  "anterior",
  "posterior",
  "medial",
  "lateral",
  "proximal",
  "distal",
  "superficial",
  "deep",
  "dorsal",
  "ventral",
  "cranial",
  "caudal",
  "sagittal",
  "coronal",
  "transverse",
  "foramen",
  "canal",
  "fossa",
  "process",
  "tubercle",
  "condyle",
  "epicondyle",
  "trochanter",
  "ramus",
  "septum",
  "plexus",
  "ganglion",

  // Organs
  "heart",
  "lung",
  "liver",
  "kidney",
  "brain",
  "spinal cord",
  "pancreas",
  "spleen",
  "stomach",
  "duodenum",
  "jejunum",
  "ileum",
  "colon",
  "bladder",
  "ureter",
  "urethra",
  "ovary",
  "uterus",
  "testis",
  "prostate",

  // Cardiovascular
  "atrium",
  "ventricle",
  "aorta",
  "vena cava",
  "pulmonary artery",
  "pulmonary vein",
  "coronary artery",
  "coronary sinus",
  "myocardium",
  "endocardium",
  "pericardium",
  "systole",
  "diastole",
  "ejection fraction",
  "venous return",
  "vascular resistance",
  "baroreceptor",
  "chemoreceptor",
  "SA node",
  "AV node",
  "bundle of His",
  "purkinje fibres",
  "ECG",
  "P wave",
  "QRS complex",
  "T wave",

  // Respiratory
  "alveolus",
  "alveoli",
  "bronchus",
  "bronchiole",
  "trachea",
  "pleura",
  "diaphragm",
  "tidal volume",
  "vital capacity",
  "residual volume",
  "dead space",
  "surfactant",
  "partial pressure",
  "oxygen saturation",
  "haemoglobin",
  "carbon dioxide",
  "hypoxia",
  "hypercapnia",
  "respiratory acidosis",
  "respiratory alkalosis",

  // Renal
  "nephron",
  "glomerulus",
  "bowmans capsule",
  "proximal convoluted tubule",
  "loop of henle",
  "distal convoluted tubule",
  "collecting duct",
  "podocyte",
  "juxtaglomerular apparatus",
  "afferent arteriole",
  "efferent arteriole",
  "GFR",
  "creatinine",
  "urea",
  "aldosterone",
  "ADH",
  "renin",
  "angiotensin",
  "RAAS",
  "micturition",

  // Gastrointestinal
  "oesophagus",
  "gastric",
  "pylorus",
  "ileocaecal",
  "caecum",
  "rectum",
  "anal canal",
  "bile",
  "gallbladder",
  "hepatocyte",
  "portal vein",
  "hepatic artery",
  "hepatic portal system",
  "villus",
  "microvillus",
  "crypt",
  "peristalsis",
  "segmentation",
  "absorption",
  "secretion",
  "CCK",
  "secretin",
  "gastrin",

  // Nervous system
  "axon",
  "dendrite",
  "synapse",
  "neurotransmitter",
  "myelin",
  "schwann cell",
  "dorsal root",
  "ventral root",
  "spinal nerve",
  "cranial nerve",
  "sympathetic",
  "parasympathetic",
  "autonomic",
  "somatic",
  "motor neuron",
  "sensory neuron",
  "cerebrum",
  "cerebellum",
  "brainstem",
  "midbrain",
  "pons",
  "medulla",
  "thalamus",
  "hypothalamus",
  "basal ganglia",
  "limbic system",

  // Physiology
  "action potential",
  "resting membrane potential",
  "depolarisation",
  "repolarisation",
  "hyperpolarisation",
  "osmosis",
  "diffusion",
  "filtration",
  "perfusion",
  "ventilation",
  "compliance",
  "cardiac output",
  "stroke volume",
  "heart rate",
  "blood pressure",
  "afterload",
  "preload",
  "homeostasis",
  "acid-base",
  "pH",
  "bicarbonate",
  "electrolyte",
  "sodium",
  "potassium",
  "calcium",

  // Biochemistry
  "enzyme",
  "substrate",
  "glycolysis",
  "gluconeogenesis",
  "citric acid cycle",
  "krebs cycle",
  "oxidative phosphorylation",
  "ATP",
  "DNA",
  "RNA",
  "transcription",
  "translation",
  "mutation",
  "protein synthesis",

  // Immunology
  "antigen",
  "antibody",
  "cytokine",
  "lymphocyte",
  "neutrophil",
  "eosinophil",
  "basophil",
  "mast cell",
  "complement",
  "MHC",
  "T cell",
  "B cell",
  "innate immunity",
  "adaptive immunity",
  "inflammation",

  // Endocrine
  "pituitary",
  "thyroid",
  "parathyroid",
  "adrenal gland",
  "cortisol",
  "insulin",
  "glucagon",
  "thyroxine",
  "TSH",
  "ACTH",
  "LH",
  "FSH",
  "growth hormone",
  "prolactin",
  "negative feedback",
  "positive feedback",

  // Pathology / clinical
  "necrosis",
  "apoptosis",
  "infarction",
  "ischaemia",
  "hypertrophy",
  "hyperplasia",
  "dysplasia",
  "metaplasia",
  "neoplasia",
  "carcinoma",
  "sarcoma",
  "metastasis",
  "thrombosis",
  "embolism",
  "oedema",
  "shock",
  "acute",
  "chronic",
  "benign",
  "malignant",
  "lesion",
  "ulcer",
  "fibrosis",
  "atrophy",
  "infarct",
  "haemorrhage",
  "infection",
  "autoimmune",
  "congenital",
  "idiopathic",
  "iatrogenic",
  "aetiology",
  "pathogenesis",
  "morbidity",
  "mortality",

  // Pharmacology
  "agonist",
  "antagonist",
  "receptor",
  "ligand",
  "dose-response",
  "half-life",
  "bioavailability",
  "clearance",
  "first-pass metabolism",
  "pharmacokinetics",
  "pharmacodynamics",
  "acetylcholine",
  "noradrenaline",
  "adrenaline",
  "dopamine",
  "serotonin",
  "competitive antagonist",
  "non-competitive antagonist",
  "partial agonist",
  "inverse agonist",
  "efficacy",
  "potency",
  "therapeutic index",
  "volume of distribution",
  "loading dose",
  "maintenance dose",
  "renal excretion",
  "hepatic metabolism",
  "CYP450",
  "side effect",
  "adverse effect",
  "contraindication",

  // Microbiology / infection
  "bacteria",
  "virus",
  "fungus",
  "parasite",
  "pathogen",
  "virulence",
  "toxin",
  "capsid",
  "lipid envelope",
  "gram-positive",
  "gram-negative",
  "aerobic",
  "anaerobic",
  "antibiotic",
  "antiviral",
  "antifungal",
  "vaccination",
  "vaccine",
  "immunity",
  "sepsis",
  "endotoxin",
  "exotoxin",
  "biofilm",
  "replication",
  "transmission",
  "incubation period",
  "zoonosis",
  "PCR",
  "ELISA",
  "culture",
  "stain",
  "gram stain",

  // Clinical terms / epidemiology
  "diagnosis",
  "prognosis",
  "symptom",
  "sign",
  "syndrome",
  "differential diagnosis",
  "treatment",
  "management",
  "screening",
  "epidemiology",
  "incidence",
  "prevalence",
  "sensitivity",
  "specificity",
  "likelihood ratio",
  "risk factor",
  "case-control",
  "cohort study",
  "randomised controlled trial",
  "relative risk",
  "odds ratio",
  "confidence interval",
  "p value",

  // Common diseases
  "diabetes",
  "hypertension",
  "asthma",
  "COPD",
  "stroke",
  "myocardial infarction",
  "heart failure",
  "pneumonia",
  "cancer",
  "anaemia",
  "arthritis"
];

function isMedicalText(text: string) {
  const lower = text.toLowerCase();

  const foundTerms = medicalTerms.filter((term) =>
    lower.includes(term.toLowerCase())
  );

  return new Set(foundTerms).size >= 5;
}

export default function Home() {
  const [lectureNotes, setLectureNotes] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [isQuestionBankOpen, setIsQuestionBankOpen] = useState(true);
  const [questionBankSearch, setQuestionBankSearch] = useState("");
  const [expandedQuestionBankFolders, setExpandedQuestionBankFolders] =
    useState<Record<string, boolean>>({
      "physiology-and-anatomy-of-systems": true,
      "fundamentals-of-anatomy-and-histology": true,
      "fundamentals-of-physiology-and-pharmacology-questions": true,
      "anatomy-of-cardiovascular-and-respiratory-systems-questions": true,
    });
  const [activeQuestionSetId, setActiveQuestionSetId] = useState<string | null>(
    null
  );
  const [activeQuestionSetTitle, setActiveQuestionSetTitle] = useState<
    string | null
  >(null);

  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>(
    {}
  );

  const [showResults, setShowResults] = useState(false);

  async function generateQuestions() {

    if (!isMedicalText(lectureNotes)) {
      setError("Please paste valid medical lecture notes before generating questions.");
      return;
    }

    setLoading(true);
    setError("");
    setQuestions([]);
    setSelectedAnswers({});
    setShowResults(false);
    setActiveQuestionSetId(null);
    setActiveQuestionSetTitle(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lectureNotes, numberOfQuestions }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate questions.");
      }

      setQuestions(data.questions);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function selectAnswer(questionIndex: number, letter: string) {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: letter,
    });
  }

  function toggleQuestionBankFolder(folderId: string) {
    setExpandedQuestionBankFolders({
      ...expandedQuestionBankFolders,
      [folderId]: !expandedQuestionBankFolders[folderId],
    });
  }

  function loadQuestionSet(questionSet: QuestionSet) {
    setQuestions(questionSet.questions);
    setSelectedAnswers({});
    setShowResults(false);
    setError("");
    setActiveQuestionSetId(questionSet.id);
    setActiveQuestionSetTitle(questionSet.title);
  }

  function returnToGenerator() {
    setQuestions([]);
    setSelectedAnswers({});
    setShowResults(false);
    setError("");
    setActiveQuestionSetId(null);
    setActiveQuestionSetTitle(null);
  }

  function getWrongQuestions() {
    return questions.filter((q, questionIndex) => {
      const userAnswer = selectedAnswers[questionIndex];

      return userAnswer && userAnswer !== q.correctAnswer;
    });
  }

  function exportWrongQuestionsToAnkiCSV() {
    const wrongQuestions = getWrongQuestions();

    if (wrongQuestions.length === 0) return;

    const escapeAnkiField = (text: string) => {
      if (text === null || text === undefined) return "";
      return `"${String(text).replace(/"/g, '""')}"`;
    };

    const rows = [
      "#separator:Semicolon",
      "#html:true",
      ...wrongQuestions.map((q) => {
        const correctLetter = q.correctAnswer as keyof typeof q.options;
        const correctAnswerText = q.options[correctLetter];

        const front = q.question;

        const back = correctAnswerText;

        return [
          escapeAnkiField(front),
          escapeAnkiField(back),
          escapeAnkiField("wrong-question"),
        ].join(";");
      }),
    ];

    const ankiContent = rows.join("\n");

    const blob = new Blob([ankiContent], {
      type: "text/plain;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "wrong_questions_anki.txt";
    link.click();

    URL.revokeObjectURL(url);
  }

  const wrongQuestions = getWrongQuestions();
  const normalizedQuestionBankSearch = questionBankSearch.trim().toLowerCase();

  function filterQuestionBankFolder(
    folder: QuestionBankFolder
  ): QuestionBankFolder | null {
    if (!normalizedQuestionBankSearch) return folder;

    const folderMatchesSearch = folder.title
      .toLowerCase()
      .includes(normalizedQuestionBankSearch);
    const visibleQuestionSets = folder.questionSets.filter((questionSet) =>
      questionSet.title.toLowerCase().includes(normalizedQuestionBankSearch)
    );
    const visibleSubfolders = folder.subfolders
      .map(filterQuestionBankFolder)
      .filter((subfolder): subfolder is QuestionBankFolder =>
        Boolean(subfolder)
      );

    if (folderMatchesSearch) return folder;

    if (visibleQuestionSets.length > 0 || visibleSubfolders.length > 0) {
      return {
        ...folder,
        questionSets: visibleQuestionSets,
        subfolders: visibleSubfolders,
      };
    }

    return null;
  }

  const visibleQuestionBankFolders = questionBankFolders
    .map(filterQuestionBankFolder)
    .filter((folder): folder is QuestionBankFolder => Boolean(folder));

  function renderQuestionBankFolder(folder: QuestionBankFolder, depth = 0) {
    const isExpanded =
      Boolean(normalizedQuestionBankSearch) ||
      expandedQuestionBankFolders[folder.id];
    const hasContent =
      folder.questionSets.length > 0 || folder.subfolders.length > 0;

    return (
      <div key={folder.id} style={{ marginLeft: depth * 10 }}>
        <button
          onClick={() => toggleQuestionBankFolder(folder.id)}
          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left font-semibold text-slate-100 hover:bg-slate-800"
        >
          <span>{folder.title}</span>
          <span className="text-teal-200" aria-hidden="true">
            {isExpanded ? "v" : ">"}
          </span>
        </button>

        {isExpanded && (
          <div className="mt-2 space-y-1 pl-3">
            {!hasContent ? (
              <p className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300">
                No lecture sets yet.
              </p>
            ) : (
              <>
                {folder.subfolders.map((subfolder) =>
                  renderQuestionBankFolder(subfolder, depth + 1)
                )}

                {folder.questionSets.map((questionSet) => (
                  <button
                    key={questionSet.id}
                    onClick={() => loadQuestionSet(questionSet)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium ${
                      activeQuestionSetId === questionSet.id
                        ? "bg-teal-300 text-slate-950"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span className="block">{questionSet.title}</span>
                    <span className="text-xs opacity-75">
                      {questionSet.questions.length} questions
                    </span>
                  </button>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#edf3f8]">
      <header className="border-b border-[#14375f] bg-[#0b1f3a] text-white shadow-sm">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full shrink-0 border-b border-[#14375f] bg-[#07172b] sm:w-72 sm:border-b-0 sm:border-r lg:w-1/6">
            <button
              onClick={() => setIsQuestionBankOpen(!isQuestionBankOpen)}
              aria-expanded={isQuestionBankOpen}
              className="flex min-h-24 w-full items-center justify-between px-4 py-4 text-left font-semibold text-white hover:bg-[#102b4c]"
            >
              <span>Browse Question Bank</span>
              <span className="text-teal-200" aria-hidden="true">
                {isQuestionBankOpen ? "v" : ">"}
              </span>
            </button>
          </div>

          <div className="flex flex-1 items-center px-4 py-4 sm:min-h-24 sm:px-8">
            <div>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Medicine Question Generator
              </h1>
              <p className="mt-1 text-sm text-slate-300">
                Generate SBA questions or browse saved lecture sets.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-89px)] flex-col sm:flex-row">
        {isQuestionBankOpen && (
          <aside className="w-full shrink-0 border-r border-[#14375f] bg-[#0b1f3a] p-4 shadow-sm sm:w-72 lg:w-1/6">
            <nav className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wide text-teal-200">
                Question Bank
              </h2>

              <input
                type="search"
                value={questionBankSearch}
                onChange={(event) => setQuestionBankSearch(event.target.value)}
                placeholder="Search lectures..."
                className="w-full rounded-lg border border-[#25527d] bg-[#102b4c] px-3 py-2 text-sm text-white outline-none placeholder:text-slate-400 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/30"
              />

              {visibleQuestionBankFolders.length === 0 && (
                <p className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300">
                  No matching lecture sets.
                </p>
              )}

              {visibleQuestionBankFolders.map((folder) =>
                renderQuestionBankFolder(folder)
              )}
            </nav>
          </aside>
        )}

        <section className="flex-1 p-4 sm:p-8">
      <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
        {activeQuestionSetId ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                Question Bank
              </p>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                {activeQuestionSetTitle}
              </h2>
              <p className="mt-2 text-slate-600">
                Answer the saved questions, then check your results at the end.
              </p>
            </div>

            <button
              onClick={returnToGenerator}
              className="rounded-lg bg-slate-100 px-5 py-3 font-semibold text-slate-900 hover:bg-slate-200"
            >
              Back to Generator
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-slate-950">
              Generate SBA Questions
            </h2>

            <p className="mt-3 text-slate-600">
              Paste lecture notes below and generate exam-style SBA questions.
            </p>

            <textarea
              value={lectureNotes}
              onChange={(e) => setLectureNotes(e.target.value)}
              className="mt-6 h-64 w-full rounded-lg border border-slate-300 bg-slate-50 p-4 text-slate-950 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              placeholder="Paste lecture notes here..."
            />

            <div className="mt-4 w-full max-w-xl">
              <label className="mb-2 block font-semibold text-slate-900">
                Number of questions: {numberOfQuestions}
              </label>

              <input
                type="range"
                min="1"
                max="25"
                step="1"
                value={numberOfQuestions}
                onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
                className="numberSlider w-full"
              />
            </div>

            <div className="flex justify-center">
              <button
                onClick={generateQuestions}
                disabled={loading || lectureNotes.trim().length === 0}
                className="mt-4 rounded-lg bg-[#0b1f3a] px-5 py-3 font-semibold text-white hover:bg-[#12365f] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Generating..." : "Generate Questions"}
              </button>
            </div>

            {error && (
              <p className="mt-4 rounded-lg bg-rose-50 p-3 text-rose-700">
                {error}
              </p>
            )}
          </>
        )}

        <div className="mt-8 space-y-6">
          {questions.map((q, questionIndex) => (
            <div
              key={questionIndex}
              className="rounded-lg border border-slate-200 bg-[#fbfdff] p-5"
            >
              <h2 className="font-semibold text-slate-950">
                {questionIndex + 1}. {q.question}
              </h2>

              <div className="mt-4 space-y-2">
                {Object.entries(q.options).map(([letter, option]) => {
                  const isSelected = selectedAnswers[questionIndex] === letter;

                  const isCorrect = q.correctAnswer === letter;

                  const isWrongSelected =
                    showResults && isSelected && !isCorrect;

                  const isCorrectSelected =
                    showResults && isSelected && isCorrect;

                  const shouldShowCorrectAnswer = showResults && isCorrect;

                  return (
                    <button
                      key={letter}
                      onClick={() => selectAnswer(questionIndex, letter)}
                      disabled={showResults}
                      className={`block w-full rounded-lg border p-3 text-left transition ${isCorrectSelected
                          ? "border-emerald-500 bg-emerald-50 text-emerald-950"
                          : isWrongSelected
                            ? "border-rose-500 bg-rose-50 text-rose-950"
                            : shouldShowCorrectAnswer
                              ? "border-emerald-500 bg-emerald-50 text-emerald-950"
                              : isSelected
                                ? "border-teal-500 bg-teal-50 text-slate-950"
                                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                    >
                      <span className="font-semibold">{letter}.</span>{" "}
                      {option}
                    </button>
                  );
                })}
              </div>

              {showResults && (
  <div className="mt-4 rounded-lg bg-slate-50 p-3 text-slate-800">
    <p>
      <span className="font-semibold">Correct answer:</span>{" "}
      {q.correctAnswer}
    </p>

    <p className="mt-2">
      <span className="font-semibold">Your answer:</span>{" "}
      {selectedAnswers[questionIndex] || "No answer selected"}
    </p>

    <p className="mt-2">
      <span className="font-semibold">Explanation:</span>{" "}
      {q.explanation}
    </p>

  </div>
)}
            </div>
          ))}
        </div>

        {questions.length > 0 && !showResults && (
          <button
            onClick={() => setShowResults(true)}
            className="mt-8 rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white hover:bg-teal-700"
          >
            Check Answers
          </button>
        )}

        {questions.length > 0 && showResults && (
          <div className="mt-8 flex flex-wrap gap-4">
            <button
  onClick={() => {
    setSelectedAnswers({});
    setShowResults(false);
  }}
              className="rounded-lg bg-slate-100 px-5 py-3 font-semibold text-slate-900 hover:bg-slate-200"
            >
              Try Again
            </button>

            <button
              onClick={exportWrongQuestionsToAnkiCSV}
              disabled={wrongQuestions.length === 0}
              className="rounded-lg bg-[#0b1f3a] px-5 py-3 font-semibold text-white hover:bg-[#12365f] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Export {wrongQuestions.length} Wrong Questions to Anki
            </button>
          </div>
        )}
      </div>
        </section>
      </div>
    </main>
  );
}

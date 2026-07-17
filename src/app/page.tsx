"use client";

import { useEffect, useMemo, useState } from "react";
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

type AppView = "question-bank" | "progress";

type QuestionProgress = {
  answered: number;
  correct: number;
  total: number;
  completedAt: string;
};

type SavedQuestionSetAnswers = {
  selectedAnswers: Record<number, string>;
  savedAt: string;
};

const progressStorageKey = "questionBankProgressV1";
const savedAnswersStorageKey = "questionBankSavedAnswersV1";

function readStorageRecord<T>(storageKey: string): Record<string, T> {
  if (typeof window === "undefined") return {};

  try {
    const storedValue = window.localStorage.getItem(storageKey);

    return storedValue ? JSON.parse(storedValue) : {};
  } catch {
    return {};
  }
}

function getQuestionCount(folder: QuestionBankFolder): number {
  const ownQuestions = folder.questionSets.reduce(
    (total, questionSet) => total + questionSet.questions.length,
    0
  );
  const subfolderQuestions = folder.subfolders.reduce(
    (total, subfolder) => total + getQuestionCount(subfolder),
    0
  );

  return ownQuestions + subfolderQuestions;
}

function getLectureCount(folder: QuestionBankFolder): number {
  const ownLectures = folder.questionSets.length;
  const subfolderLectures = folder.subfolders.reduce(
    (total, subfolder) => total + getLectureCount(subfolder),
    0
  );

  return ownLectures + subfolderLectures;
}

export default function Home() {
  const [lectureNotes, setLectureNotes] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [isQuestionBankOpen, setIsQuestionBankOpen] = useState(true);
  const [currentView, setCurrentView] = useState<AppView>("question-bank");
  const [questionBankSearch, setQuestionBankSearch] = useState("");
  const [expandedQuestionBankFolders, setExpandedQuestionBankFolders] =
    useState<Record<string, boolean>>({});
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
  const [progressByQuestionSet, setProgressByQuestionSet] = useState<
    Record<string, QuestionProgress>
  >(() => readStorageRecord<QuestionProgress>(progressStorageKey));
  const [savedAnswersByQuestionSet, setSavedAnswersByQuestionSet] = useState<
    Record<string, SavedQuestionSetAnswers>
  >(() => readStorageRecord<SavedQuestionSetAnswers>(savedAnswersStorageKey));

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(
      progressStorageKey,
      JSON.stringify(progressByQuestionSet)
    );
  }, [progressByQuestionSet]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(
      savedAnswersStorageKey,
      JSON.stringify(savedAnswersByQuestionSet)
    );
  }, [savedAnswersByQuestionSet]);

  const bankStats = useMemo(() => {
    const pasFolder = questionBankFolders.find(
      (folder) => folder.id === "physiology-and-anatomy-of-systems"
    );
    const submodules = pasFolder?.subfolders ?? [];

    return {
      submodules,
      totalLectures: submodules.reduce(
        (total, submodule) => total + getLectureCount(submodule),
        0
      ),
      totalQuestions: submodules.reduce(
        (total, submodule) => total + getQuestionCount(submodule),
        0
      ),
    };
  }, []);

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
    setCurrentView("question-bank");

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
    setSelectedAnswers(
      savedAnswersByQuestionSet[questionSet.id]?.selectedAnswers ?? {}
    );
    setShowResults(false);
    setError("");
    setActiveQuestionSetId(questionSet.id);
    setActiveQuestionSetTitle(questionSet.title);
    setCurrentView("question-bank");
  }

  function returnToGenerator() {
    setQuestions([]);
    setSelectedAnswers({});
    setShowResults(false);
    setError("");
    setActiveQuestionSetId(null);
    setActiveQuestionSetTitle(null);
    setCurrentView("question-bank");
  }

  function openSubmodule(submoduleId: string) {
    setIsQuestionBankOpen(true);
    setCurrentView("question-bank");
    setExpandedQuestionBankFolders({
      ...expandedQuestionBankFolders,
      "physiology-and-anatomy-of-systems": true,
      [submoduleId]: true,
    });
  }

  function getWrongQuestions() {
    return questions.filter((q, questionIndex) => {
      const userAnswer = selectedAnswers[questionIndex];

      return userAnswer && userAnswer !== q.correctAnswer;
    });
  }

  function checkAnswers() {
    setShowResults(true);

    if (!activeQuestionSetId) return;

    const answered = questions.filter(
      (_question, questionIndex) => selectedAnswers[questionIndex]
    ).length;
    const correct = questions.filter(
      (question, questionIndex) =>
        selectedAnswers[questionIndex] === question.correctAnswer
    ).length;

    setProgressByQuestionSet((currentProgress) => {
      const existingProgress = currentProgress[activeQuestionSetId];

      return {
        ...currentProgress,
        [activeQuestionSetId]: {
          answered: Math.max(existingProgress?.answered ?? 0, answered),
          correct: Math.max(existingProgress?.correct ?? 0, correct),
          total: questions.length,
          completedAt: new Date().toISOString(),
        },
      };
    });

    saveCurrentLectureAnswers();
  }

  function saveCurrentLectureAnswers() {
    if (!activeQuestionSetId) return;

    setSavedAnswersByQuestionSet((currentAnswers) => ({
      ...currentAnswers,
      [activeQuestionSetId]: {
        selectedAnswers,
        savedAt: new Date().toISOString(),
      },
    }));
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

        return [
          escapeAnkiField(q.question),
          escapeAnkiField(correctAnswerText),
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
  const overallAnswered = bankStats.submodules.reduce(
    (total, submodule) =>
      total +
      submodule.questionSets.reduce((setTotal, questionSet) => {
        const progress = progressByQuestionSet[questionSet.id];

        return setTotal + Math.min(progress?.answered ?? 0, questionSet.questions.length);
      }, 0),
    0
  );
  const overallCorrect = bankStats.submodules.reduce(
    (total, submodule) =>
      total +
      submodule.questionSets.reduce(
        (setTotal, questionSet) =>
          setTotal + (progressByQuestionSet[questionSet.id]?.correct ?? 0),
        0
      ),
    0
  );
  const overallProgressPercent =
    bankStats.totalQuestions > 0
      ? Math.round((overallAnswered / bankStats.totalQuestions) * 100)
      : 0;

  function getQuestionSetProgress(questionSet: QuestionSet) {
    const savedProgress = progressByQuestionSet[questionSet.id];
    const answered = Math.min(
      savedProgress?.answered ?? 0,
      questionSet.questions.length
    );
    const correct = Math.min(savedProgress?.correct ?? 0, questionSet.questions.length);
    const percent =
      questionSet.questions.length > 0
        ? Math.round((answered / questionSet.questions.length) * 100)
        : 0;

    return { answered, correct, percent };
  }

  function getSubmoduleProgress(submodule: QuestionBankFolder) {
    const totalQuestions = getQuestionCount(submodule);
    const answered = submodule.questionSets.reduce((total, questionSet) => {
      const progress = getQuestionSetProgress(questionSet);

      return total + progress.answered;
    }, 0);
    const correct = submodule.questionSets.reduce((total, questionSet) => {
      const progress = getQuestionSetProgress(questionSet);

      return total + progress.correct;
    }, 0);
    const percent =
      totalQuestions > 0 ? Math.round((answered / totalQuestions) * 100) : 0;

    return { answered, correct, percent, totalQuestions };
  }

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

  function renderProgressMeter(percent: number) {
    return (
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all duration-500"
          style={{ width: `${Math.min(percent, 100)}%` }}
        />
      </div>
    );
  }

  function renderQuestionBankFolder(folder: QuestionBankFolder, depth = 0) {
    const isExpanded =
      Boolean(normalizedQuestionBankSearch) ||
      Boolean(expandedQuestionBankFolders[folder.id]);
    const hasContent =
      folder.questionSets.length > 0 || folder.subfolders.length > 0;

    return (
      <div key={folder.id} style={{ marginLeft: depth * 10 }}>
        <button
          onClick={() => toggleQuestionBankFolder(folder.id)}
          className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left font-semibold text-slate-100 transition hover:bg-[#102b4c]"
        >
          <span>{folder.title}</span>
          <span
            className={`ml-3 text-teal-200 transition-transform duration-300 ${
              isExpanded ? "rotate-90" : ""
            }`}
            aria-hidden="true"
          >
            &gt;
          </span>
        </button>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-2 space-y-1 pl-3">
              {!hasContent ? (
                <p className="rounded-md bg-[#102b4c] px-3 py-2 text-sm text-slate-300">
                  No lecture sets yet.
                </p>
              ) : (
                <>
                  {folder.subfolders.map((subfolder) =>
                    renderQuestionBankFolder(subfolder, depth + 1)
                  )}

                  {folder.questionSets.map((questionSet) => {
                    const progress = getQuestionSetProgress(questionSet);

                    return (
                      <button
                        key={questionSet.id}
                        onClick={() => loadQuestionSet(questionSet)}
                        className={`block w-full rounded-md px-3 py-2 text-left text-sm font-medium transition ${
                          activeQuestionSetId === questionSet.id
                            ? "bg-teal-300 text-slate-950"
                            : "text-slate-300 hover:bg-[#102b4c] hover:text-white"
                        }`}
                      >
                        <span className="block">{questionSet.title}</span>
                        <span className="mt-1 block text-xs opacity-75">
                          {questionSet.questions.length} questions
                          {progress.percent > 0 ? ` | ${progress.percent}% done` : ""}
                        </span>
                      </button>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderQuestionList() {
    return (
      <>
        <div className="mt-8 space-y-5">
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
                  const selectedAnswer = selectedAnswers[questionIndex];
                  const hasSelectedAnswer = Boolean(selectedAnswer);
                  const isSelected = selectedAnswer === letter;
                  const isCorrect = q.correctAnswer === letter;
                  const isWrongSelected =
                    showResults && isSelected && !isCorrect;
                  const isCorrectSelected =
                    showResults && isSelected && isCorrect;
                  const shouldShowCorrectAnswer =
                    showResults && hasSelectedAnswer && isCorrect;

                  return (
                    <button
                      key={letter}
                      onClick={() => selectAnswer(questionIndex, letter)}
                      disabled={showResults}
                      className={`block w-full rounded-lg border p-3 text-left transition ${
                        isCorrectSelected
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
                      <span className="font-semibold">{letter}.</span> {option}
                    </button>
                  );
                })}
              </div>

              {showResults && selectedAnswers[questionIndex] && (
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

        {questions.length > 0 && !showResults && !activeQuestionSetId && (
          <button
            onClick={checkAnswers}
            className="mt-8 rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
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
              className="rounded-lg bg-slate-100 px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Try Again
            </button>

            <button
              onClick={exportWrongQuestionsToAnkiCSV}
              disabled={wrongQuestions.length === 0}
              className="rounded-lg bg-[#0b1f3a] px-5 py-3 font-semibold text-white transition hover:bg-[#12365f] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Export {wrongQuestions.length} Wrong Questions to Anki
            </button>
          </div>
        )}
      </>
    );
  }

  function renderGeneratorPanel() {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Supplementary
        </p>
        <h2 className="mt-1 text-xl font-bold text-slate-950">
          Generate SBA Questions
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Paste lecture notes when you want extra practice beyond the bank.
        </p>

        <textarea
          value={lectureNotes}
          onChange={(e) => setLectureNotes(e.target.value)}
          className="mt-4 h-48 w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm text-slate-950 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
          placeholder="Paste lecture notes here..."
        />

        <div className="mt-4">
          <label className="mb-2 block text-sm font-semibold text-slate-900">
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

        <button
          onClick={generateQuestions}
          disabled={loading || lectureNotes.trim().length === 0}
          className="mt-4 w-full rounded-lg bg-[#0b1f3a] px-5 py-3 font-semibold text-white transition hover:bg-[#12365f] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Questions"}
        </button>

        {error && (
          <p className="mt-4 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">
            {error}
          </p>
        )}
      </div>
    );
  }

  function renderFloatingStudyActions() {
    const answeredCount = Object.keys(selectedAnswers).length;
    const savedAt = activeQuestionSetId
      ? savedAnswersByQuestionSet[activeQuestionSetId]?.savedAt
      : null;

    return (
      <div className="fixed bottom-5 right-5 z-30 max-w-[calc(100vw-2.5rem)] rounded-lg border border-slate-200 bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.22)]">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="px-1 text-xs font-semibold text-slate-600 sm:w-32">
            {answeredCount}/{questions.length} answered
          </div>

          <button
            onClick={checkAnswers}
            disabled={showResults}
            className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {showResults ? "Marked" : "Mark Answers"}
          </button>

          <button
            onClick={saveCurrentLectureAnswers}
            disabled={showResults}
            className="rounded-lg bg-[#0b1f3a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#12365f] disabled:cursor-not-allowed disabled:opacity-60"
          >
            Save Progress
          </button>
        </div>

        {savedAt && (
          <p className="mt-2 px-1 text-xs text-slate-500">
            Saved {new Date(savedAt).toLocaleString()}
          </p>
        )}
      </div>
    );
  }

  function renderQuestionBankHome() {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-6">
          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Question Bank
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Physiology and Anatomy of Systems
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Choose a PAS submodule from the bank, answer its lecture questions,
              and build progress as you check your answers.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-[#edf3f8] p-4">
                <p className="text-2xl font-bold text-[#0b1f3a]">
                  {bankStats.submodules.length}
                </p>
                <p className="text-sm text-slate-600">Submodules</p>
              </div>
              <div className="rounded-lg bg-[#edf3f8] p-4">
                <p className="text-2xl font-bold text-[#0b1f3a]">
                  {bankStats.totalLectures}
                </p>
                <p className="text-sm text-slate-600">Lectures</p>
              </div>
              <div className="rounded-lg bg-[#edf3f8] p-4">
                <p className="text-2xl font-bold text-[#0b1f3a]">
                  {bankStats.totalQuestions}
                </p>
                <p className="text-sm text-slate-600">Questions</p>
              </div>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {bankStats.submodules.map((submodule) => {
              const progress = getSubmoduleProgress(submodule);

              return (
                <button
                  key={submodule.id}
                  onClick={() => openSubmodule(submodule.id)}
                  className="rounded-lg border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-slate-950">
                        {submodule.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {getLectureCount(submodule)} lectures |{" "}
                        {progress.totalQuestions} questions
                      </p>
                    </div>
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                      {progress.percent}%
                    </span>
                  </div>

                  <div className="mt-4">{renderProgressMeter(progress.percent)}</div>
                </button>
              );
            })}
          </section>

          {questions.length > 0 && !activeQuestionSetId && (
            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                Generated Practice
              </p>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                New SBA Questions
              </h2>
              {renderQuestionList()}
            </section>
          )}
        </div>

        <aside className="space-y-6">{renderGeneratorPanel()}</aside>
      </div>
    );
  }

  function renderActiveQuestionSet() {
    const answeredCount = Object.keys(selectedAnswers).length;

    return (
      <section className="mx-auto max-w-5xl rounded-lg border border-slate-200 bg-white p-6 pb-28 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Question Bank
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-950">
              {activeQuestionSetTitle}
            </h2>
            <p className="mt-2 text-slate-600">
              {answeredCount} of {questions.length} answered
            </p>
          </div>

          <button
            onClick={returnToGenerator}
            className="rounded-lg bg-slate-100 px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Back to Generator
          </button>
        </div>

        {renderQuestionList()}
        {renderFloatingStudyActions()}
      </section>
    );
  }

  function renderProgressTracker() {
    return (
      <section className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Progress Tracker
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            PAS Question Bank Progress
          </h2>
          <p className="mt-3 text-slate-600">
            Progress is saved on this device when you check answers for a saved
            lecture.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-[#edf3f8] p-4">
              <p className="text-2xl font-bold text-[#0b1f3a]">
                {overallProgressPercent}%
              </p>
              <p className="text-sm text-slate-600">Question progress</p>
            </div>
            <div className="rounded-lg bg-[#edf3f8] p-4">
              <p className="text-2xl font-bold text-[#0b1f3a]">
                {overallAnswered}/{bankStats.totalQuestions}
              </p>
              <p className="text-sm text-slate-600">Answered</p>
            </div>
            <div className="rounded-lg bg-[#edf3f8] p-4">
              <p className="text-2xl font-bold text-[#0b1f3a]">
                {overallCorrect}
              </p>
              <p className="text-sm text-slate-600">Best correct answers</p>
            </div>
          </div>

          <div className="mt-5">{renderProgressMeter(overallProgressPercent)}</div>
        </div>

        <div className="space-y-4">
          {bankStats.submodules.map((submodule) => {
            const submoduleProgress = getSubmoduleProgress(submodule);

            return (
              <article
                key={submodule.id}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      {submodule.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {submoduleProgress.answered}/
                      {submoduleProgress.totalQuestions} answered |{" "}
                      {submoduleProgress.correct} best correct
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                    {submoduleProgress.percent}%
                  </span>
                </div>

                <div className="mt-4">
                  {renderProgressMeter(submoduleProgress.percent)}
                </div>

                <div className="mt-5 space-y-3">
                  {submodule.questionSets.map((questionSet) => {
                    const lectureProgress = getQuestionSetProgress(questionSet);

                    return (
                      <button
                        key={questionSet.id}
                        onClick={() => loadQuestionSet(questionSet)}
                        className="w-full rounded-lg border border-slate-200 bg-[#fbfdff] p-4 text-left transition hover:border-teal-300 hover:bg-white"
                      >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="font-semibold text-slate-950">
                              {questionSet.title}
                            </p>
                            <p className="text-sm text-slate-600">
                              {lectureProgress.answered}/
                              {questionSet.questions.length} answered |{" "}
                              {lectureProgress.correct} best correct
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-emerald-700">
                            {lectureProgress.percent}%
                          </span>
                        </div>
                        <div className="mt-3">
                          {renderProgressMeter(lectureProgress.percent)}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-[#edf3f8]">
      <header className="border-b border-[#14375f] bg-[#0b1f3a] text-white shadow-sm">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full shrink-0 border-b border-[#14375f] bg-[#07172b] sm:w-72 sm:border-b-0 sm:border-r lg:w-1/6">
            <button
              onClick={() => {
                setIsQuestionBankOpen(!isQuestionBankOpen);
                setCurrentView("question-bank");
              }}
              aria-expanded={isQuestionBankOpen}
              className="flex min-h-24 w-full items-center justify-between px-4 py-4 text-left font-semibold text-white transition hover:bg-[#102b4c]"
            >
              <span>Browse Question Bank</span>
              <span className="text-teal-200" aria-hidden="true">
                {isQuestionBankOpen ? "v" : ">"}
              </span>
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-4 px-4 py-4 sm:min-h-24 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Medicine Question Generator
              </h1>
              <p className="mt-1 text-sm text-slate-300">
                A PAS-first question bank with optional SBA generation.
              </p>
            </div>

            <button
              onClick={() => setCurrentView("progress")}
              className={`rounded-lg px-5 py-3 text-left font-semibold transition ${
                currentView === "progress"
                  ? "bg-teal-300 text-slate-950"
                  : "bg-[#102b4c] text-white hover:bg-[#173b66]"
              }`}
            >
              Progress Tracker
            </button>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-97px)] flex-col sm:flex-row">
        {isQuestionBankOpen && (
          <aside className="questionBankScroll w-full shrink-0 overflow-y-auto border-r border-[#14375f] bg-[#0b1f3a] p-4 shadow-sm sm:max-h-[calc(100vh-97px)] sm:w-72 lg:w-1/6">
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
                <p className="rounded-md bg-[#102b4c] px-3 py-2 text-sm text-slate-300">
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
          {currentView === "progress"
            ? renderProgressTracker()
            : activeQuestionSetId
              ? renderActiveQuestionSet()
              : renderQuestionBankHome()}
        </section>
      </div>
    </main>
  );
}

"use client";

import {
  type CSSProperties,
  type FormEvent,
  type PointerEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { User } from "@supabase/supabase-js";
import {
  questionBankFolders,
  type Question,
  type QuestionBankFolder,
  type QuestionSet,
} from "./questionBank";
import { createClient, hasSupabaseConfig } from "@/lib/supabase/client";

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

type AppView = "question-bank" | "progress" | "practice-paper" | "generator";
type ThemeMode = "dark" | "light";
type PracticePaperModuleId =
  | "foundations-of-biomedical-science"
  | "physiology-and-anatomy-of-systems";
type PerformanceBand = "urgent" | "revisit" | "steady" | "strong";
type PerformanceTopic = {
  questionSet: QuestionSet;
  submoduleId: string;
  submoduleTitle: string;
  answered: number;
  correct: number;
  total: number;
  accuracy: number | null;
  band: PerformanceBand | null;
};
type InProgressLecture = {
  questionSet: QuestionSet;
  moduleTitle: string;
  submoduleTitle: string;
  answered: number;
  total: number;
  percent: number;
  updatedAt: string;
};
type SavedWrongQuestion = {
  question: Question;
  questionSet: QuestionSet;
  submoduleTitle: string;
};

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

type CachedStudyData = {
  progressByQuestionSet: Record<string, QuestionProgress>;
  savedAnswersByQuestionSet: Record<string, SavedQuestionSetAnswers>;
};

type AuthMode = "sign-in" | "sign-up";

type CloudProgressRow = {
  question_set_id: string;
  answered: number | null;
  correct: number | null;
  total: number | null;
  completed_at: string | null;
  updated_at: string | null;
};

type CloudAnswersRow = {
  question_set_id: string;
  selected_answers: Record<string, string> | null;
  saved_at: string | null;
  updated_at: string | null;
};

const cardAccentColors = [
  "#7c3aed",
  "#6d28d9",
  "#8b5cf6",
  "#4c1d95",
  "#a78bfa",
];
const studyCachePrefix = "sbagen-study-cache";

function getAccentStyle(index: number): CSSProperties {
  return {
    "--card-accent": cardAccentColors[index % cardAccentColors.length],
  } as CSSProperties;
}

function normalizeSelectedAnswers(
  selectedAnswers: Record<string, string> | null
) {
  return Object.fromEntries(
    Object.entries(selectedAnswers ?? {}).map(([questionIndex, letter]) => [
      Number(questionIndex),
      letter,
    ])
  ) as Record<number, string>;
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

function getQuestionSets(folder: QuestionBankFolder): QuestionSet[] {
  return [
    ...folder.questionSets,
    ...folder.subfolders.flatMap((subfolder) => getQuestionSets(subfolder)),
  ];
}

function formatSubmoduleTitle(title: string) {
  return title.replace(/\s+Question Bank$/i, "");
}

function renderChevronIcon(isOpen: boolean) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-300 ${
        isOpen ? "rotate-90" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function renderLockIcon(className = "h-4 w-4") {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V8a4 4 0 0 1 8 0v2" />
    </svg>
  );
}

function getStudyCacheKey(userId: string) {
  return `${studyCachePrefix}:${userId}`;
}

function mergeProgressRecords(
  currentProgress: Record<string, QuestionProgress>,
  nextProgress: Record<string, QuestionProgress>
) {
  const mergedProgress = { ...currentProgress };

  Object.entries(nextProgress).forEach(([questionSetId, progress]) => {
    const existingProgress = mergedProgress[questionSetId];

    mergedProgress[questionSetId] = {
      answered: Math.max(existingProgress?.answered ?? 0, progress.answered),
      correct: Math.max(existingProgress?.correct ?? 0, progress.correct),
      total: Math.max(existingProgress?.total ?? 0, progress.total),
      completedAt:
        existingProgress &&
        Date.parse(existingProgress.completedAt) > Date.parse(progress.completedAt)
          ? existingProgress.completedAt
          : progress.completedAt,
    };
  });

  return mergedProgress;
}

function mergeSavedAnswerRecords(
  currentAnswers: Record<string, SavedQuestionSetAnswers>,
  nextAnswers: Record<string, SavedQuestionSetAnswers>
) {
  const mergedAnswers = { ...currentAnswers };

  Object.entries(nextAnswers).forEach(([questionSetId, answers]) => {
    const existingAnswers = mergedAnswers[questionSetId];

    if (
      !existingAnswers ||
      Date.parse(answers.savedAt) >= Date.parse(existingAnswers.savedAt)
    ) {
      mergedAnswers[questionSetId] = answers;
    }
  });

  return mergedAnswers;
}

function readCachedStudyData(userId: string): CachedStudyData | null {
  try {
    const cachedData = window.localStorage.getItem(getStudyCacheKey(userId));
    if (!cachedData) return null;

    return JSON.parse(cachedData) as CachedStudyData;
  } catch {
    return null;
  }
}

function writeCachedStudyData(userId: string, studyData: CachedStudyData) {
  try {
    window.localStorage.setItem(
      getStudyCacheKey(userId),
      JSON.stringify(studyData)
    );
  } catch {
    // Local cache is just a speed boost; cloud sync remains authoritative.
  }
}

function clearCachedStudyData(userId: string) {
  try {
    window.localStorage.removeItem(getStudyCacheKey(userId));
  } catch {
    // Nothing to do if storage is unavailable.
  }
}

export default function Home() {
  const [lectureNotes, setLectureNotes] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [hasGeneratedQuestions, setHasGeneratedQuestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [questionCountInput, setQuestionCountInput] = useState("5");
  const [questionSliderValue, setQuestionSliderValue] = useState(5);
  const [practicePaperModuleId, setPracticePaperModuleId] =
    useState<PracticePaperModuleId>("foundations-of-biomedical-science");
  const [practicePaperQuestionInput, setPracticePaperQuestionInput] =
    useState("100");
  const [practicePaperTimeInput, setPracticePaperTimeInput] = useState("120");
  const [practicePaperError, setPracticePaperError] = useState("");
  const [activePracticeTimeLimitMinutes, setActivePracticeTimeLimitMinutes] =
    useState<number | null>(null);
  const [activePracticeStartedAt, setActivePracticeStartedAt] = useState<
    string | null
  >(null);
  const [practiceTimerNow, setPracticeTimerNow] = useState(Date.now());
  const [activePracticeQuestionIndex, setActivePracticeQuestionIndex] =
    useState(0);
  const [struckAnswersByQuestion, setStruckAnswersByQuestion] = useState<
    Record<number, Record<string, boolean>>
  >({});
  const [currentView, setCurrentView] = useState<AppView>("question-bank");
  const [selectedBankSubmoduleId, setSelectedBankSubmoduleId] = useState<
    string | null
  >(null);
  const [questionBankSearch, setQuestionBankSearch] = useState("");
  const [expandedBankModules, setExpandedBankModules] = useState<
    Record<string, boolean>
  >({});
  const [isResumePanelOpen, setIsResumePanelOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);
  const [activeQuestionSetId, setActiveQuestionSetId] = useState<string | null>(
    null
  );
  const [activeQuestionSetTitle, setActiveQuestionSetTitle] = useState<
    string | null
  >(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>(
    {}
  );
  const [markedAnswers, setMarkedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [progressByQuestionSet, setProgressByQuestionSet] = useState<
    Record<string, QuestionProgress>
  >({});
  const [savedAnswersByQuestionSet, setSavedAnswersByQuestionSet] = useState<
    Record<string, SavedQuestionSetAnswers>
  >({});
  const isSupabaseConfigured = hasSupabaseConfig();
  const supabase = useMemo(
    () => (isSupabaseConfigured ? createClient() : null),
    [isSupabaseConfigured]
  );
  const [user, setUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(!isSupabaseConfigured);
  const [authMode, setAuthMode] = useState<AuthMode>("sign-in");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState("");
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isSavePromptOpen, setIsSavePromptOpen] = useState(false);
  const [cloudSyncStatus, setCloudSyncStatus] = useState("");
  const [isCloudProgressLoading, setIsCloudProgressLoading] = useState(false);
  const [isStudyCacheReady, setIsStudyCacheReady] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "dark";

    try {
      const savedTheme = window.localStorage.getItem("sba-theme-mode");

      return savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : "dark";
    } catch {
      return "dark";
    }
  });
  const submoduleScrollPositions = useRef<Record<string, number>>({});
  const pendingSubmoduleScrollRestore = useRef<string | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = themeMode;

    try {
      window.localStorage.setItem("sba-theme-mode", themeMode);
    } catch {
      // Nothing to do if storage is unavailable.
    }
  }, [themeMode]);

  useEffect(() => {
    if (!isNavMenuOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isNavMenuOpen]);

  useEffect(() => {
    if (
      !activePracticeTimeLimitMinutes ||
      !activePracticeStartedAt ||
      showResults
    ) {
      return;
    }

    const deadline =
      Date.parse(activePracticeStartedAt) +
      activePracticeTimeLimitMinutes * 60 * 1000;
    const intervalId = window.setInterval(() => {
      const now = Date.now();

      setPracticeTimerNow(now);

      if (now < deadline) return;

      setShowResults(true);
      setMarkedAnswers(selectedAnswers);
      setActivePracticeTimeLimitMinutes(null);
      setActivePracticeStartedAt(null);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [
    activePracticeStartedAt,
    activePracticeTimeLimitMinutes,
    selectedAnswers,
    showResults,
  ]);

  useEffect(() => {
    if (!supabase) {
      return;
    }

    let isMounted = true;

    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (!isMounted) return;

        setUser(data.session?.user ?? null);
        setIsAuthReady(true);
      })
      .catch(() => {
        if (!isMounted) return;

        setAuthMessage("Could not check your saved login.");
        setIsAuthReady(true);
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  useEffect(() => {
    if (!supabase || !user) {
      return;
    }

    let isMounted = true;
    const supabaseClient = supabase;
    const userId = user.id;

    async function loadCloudStudyData() {
      setIsCloudProgressLoading(true);
      setCloudSyncStatus("Loading cloud progress...");

      const cachedStudyData = readCachedStudyData(userId);

      if (cachedStudyData) {
        setProgressByQuestionSet((currentProgress) =>
          mergeProgressRecords(
            currentProgress,
            cachedStudyData.progressByQuestionSet ?? {}
          )
        );
        setSavedAnswersByQuestionSet((currentAnswers) =>
          mergeSavedAnswerRecords(
            currentAnswers,
            cachedStudyData.savedAnswersByQuestionSet ?? {}
          )
        );
      }
      setIsStudyCacheReady(true);

      const [progressResult, answersResult] = await Promise.all([
        supabaseClient
          .from("user_question_progress")
          .select("question_set_id, answered, correct, total, completed_at, updated_at")
          .eq("user_id", userId),
        supabaseClient
          .from("user_question_answers")
          .select("question_set_id, selected_answers, saved_at, updated_at")
          .eq("user_id", userId),
      ]);

      if (!isMounted) return;

      if (progressResult.error || answersResult.error) {
        setCloudSyncStatus("Cloud progress could not be loaded.");
        setIsCloudProgressLoading(false);
        return;
      }

      const progressRows = (progressResult.data ?? []) as CloudProgressRow[];
      const answersRows = (answersResult.data ?? []) as CloudAnswersRow[];
      const cloudProgressByQuestionSet = Object.fromEntries(
        progressRows.map((row) => {
          const cloudCompletedAt =
            row.completed_at ?? row.updated_at ?? new Date().toISOString();

          return [
            row.question_set_id,
            {
              answered: row.answered ?? 0,
              correct: row.correct ?? 0,
              total: row.total ?? 0,
              completedAt: cloudCompletedAt,
            },
          ];
        })
      ) as Record<string, QuestionProgress>;
      const cloudAnswersByQuestionSet = Object.fromEntries(
        answersRows.map((row) => {
          const cloudSavedAt =
            row.saved_at ?? row.updated_at ?? new Date().toISOString();

          return [
            row.question_set_id,
            {
              selectedAnswers: normalizeSelectedAnswers(row.selected_answers),
              savedAt: cloudSavedAt,
            },
          ];
        })
      ) as Record<string, SavedQuestionSetAnswers>;

      setProgressByQuestionSet((currentProgress) =>
        mergeProgressRecords(currentProgress, cloudProgressByQuestionSet)
      );
      setSavedAnswersByQuestionSet((currentAnswers) =>
        mergeSavedAnswerRecords(currentAnswers, cloudAnswersByQuestionSet)
      );

      setCloudSyncStatus("Cloud progress loaded.");
      setIsCloudProgressLoading(false);
    }

    loadCloudStudyData();

    return () => {
      isMounted = false;
    };
  }, [supabase, user]);

  useEffect(() => {
    if (!user || !isStudyCacheReady) {
      return;
    }

    writeCachedStudyData(user.id, {
      progressByQuestionSet,
      savedAnswersByQuestionSet,
    });
  }, [
    user,
    isStudyCacheReady,
    progressByQuestionSet,
    savedAnswersByQuestionSet,
  ]);

  useEffect(() => {
    if (
      !selectedBankSubmoduleId ||
      activeQuestionSetId ||
      pendingSubmoduleScrollRestore.current !== selectedBankSubmoduleId
    ) {
      return;
    }

    const savedScrollPosition =
      submoduleScrollPositions.current[selectedBankSubmoduleId];
    pendingSubmoduleScrollRestore.current = null;

    if (typeof savedScrollPosition !== "number") {
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedScrollPosition, left: 0, behavior: "auto" });
      });
    });
  }, [activeQuestionSetId, selectedBankSubmoduleId]);

  const bankStats = useMemo(() => {
    const submodules = questionBankFolders.flatMap((moduleFolder) =>
      moduleFolder.subfolders.map((submodule) => ({
        ...submodule,
        parentModuleId: moduleFolder.id,
        parentModuleTitle: moduleFolder.title,
      }))
    );

    return {
      modules: questionBankFolders,
      submodules,
      totalSubmodules: submodules.length,
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
  const allQuestionSets = bankStats.submodules.flatMap((submodule) =>
    submodule.questionSets.map((questionSet) => ({
      questionSet,
      submodule,
    }))
  );
  const selectedBankSubmodule =
    bankStats.submodules.find(
      (submodule) => submodule.id === selectedBankSubmoduleId
    ) ?? null;

  async function handleAuthSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!supabase) {
      setAuthMessage("Add your Supabase environment variables to enable login.");
      return;
    }

    setAuthLoading(true);
    setAuthMessage("");

    const credentials = {
      email: authEmail.trim(),
      password: authPassword,
    };
    const result =
      authMode === "sign-up"
        ? await supabase.auth.signUp({
            ...credentials,
            options: {
              emailRedirectTo: `${window.location.origin}/auth/confirm`,
            },
          })
        : await supabase.auth.signInWithPassword(credentials);

    if (result.error) {
      setAuthMessage(result.error.message);
    } else if (authMode === "sign-up" && !result.data.session) {
      setAuthMessage("Account created. Check your email to confirm your login.");
    } else {
      setAuthMessage("Signed in. Your study progress will sync to the cloud.");
      setIsAuthMenuOpen(false);
    }

    setAuthLoading(false);
  }

  async function handleSignOut() {
    if (!supabase) return;

    if (user) {
      clearCachedStudyData(user.id);
    }

    setAuthLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setProgressByQuestionSet({});
    setSavedAnswersByQuestionSet({});
    setIsStudyCacheReady(false);
    setCloudSyncStatus("");
    setAuthMessage("Signed out. Sign in to save and track progress.");
    setIsAuthMenuOpen(false);
    setAuthLoading(false);
  }

  async function saveProgressToCloud(
    questionSetId: string,
    progress: QuestionProgress
  ) {
    if (!supabase || !user) return;

    setCloudSyncStatus("Syncing marked answers...");

    const { error: progressError } = await supabase
      .from("user_question_progress")
      .upsert(
        {
          user_id: user.id,
          question_set_id: questionSetId,
          answered: progress.answered,
          correct: progress.correct,
          total: progress.total,
          completed_at: progress.completedAt,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id,question_set_id" }
      );

    setCloudSyncStatus(
      progressError
        ? "Cloud sync failed. Try saving again."
        : "Marked answers synced."
    );
  }

  async function saveAnswersToCloud(
    questionSetId: string,
    answers: SavedQuestionSetAnswers
  ) {
    if (!supabase || !user) return;

    setCloudSyncStatus("Saving answer choices...");

    const { error: answersError } = await supabase
      .from("user_question_answers")
      .upsert(
        {
          user_id: user.id,
          question_set_id: questionSetId,
          selected_answers: answers.selectedAnswers,
          saved_at: answers.savedAt,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id,question_set_id" }
      );

    setCloudSyncStatus(
      answersError
        ? "Cloud save failed. Try saving again."
        : "Answer choices synced."
    );
  }

  function promptSignInForGenerator() {
    setAuthMessage("Sign in to use Question Generator.");
    setIsAuthMenuOpen(true);
  }

  async function generateQuestions() {
    if (!user) {
      promptSignInForGenerator();
      return;
    }

    if (!isMedicalText(lectureNotes)) {
      setError("Please paste valid medical lecture notes before generating questions.");
      return;
    }

    setLoading(true);
    setError("");
    setQuestions([]);
    setHasGeneratedQuestions(false);
    setSelectedAnswers({});
    setMarkedAnswers({});
    setShowResults(false);
    setActiveQuestionSetId(null);
    setActiveQuestionSetTitle(null);
    setActivePracticeQuestionIndex(0);
    setStruckAnswersByQuestion({});
    setCurrentView("generator");

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
      setHasGeneratedQuestions(true);
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

  function toggleStruckAnswer(questionIndex: number, letter: string) {
    setStruckAnswersByQuestion((currentAnswers) => ({
      ...currentAnswers,
      [questionIndex]: {
        ...(currentAnswers[questionIndex] ?? {}),
        [letter]: !currentAnswers[questionIndex]?.[letter],
      },
    }));
  }

  function toggleBankModule(moduleId: string) {
    setExpandedBankModules({
      ...expandedBankModules,
      [moduleId]: !expandedBankModules[moduleId],
    });
  }

  function autosaveActiveLectureAnswers() {
    if (
      !user ||
      !activeQuestionSetId ||
      Object.keys(selectedAnswers).length === 0
    ) {
      return;
    }

    const nextSavedAnswers = {
      selectedAnswers,
      savedAt: new Date().toISOString(),
    };

    setSavedAnswersByQuestionSet((currentAnswers) => ({
      ...currentAnswers,
      [activeQuestionSetId]: nextSavedAnswers,
    }));
    void saveAnswersToCloud(activeQuestionSetId, nextSavedAnswers);
  }

  function loadQuestionSet(questionSet: QuestionSet) {
    autosaveActiveLectureAnswers();

    if (selectedBankSubmoduleId && !activeQuestionSetId) {
      submoduleScrollPositions.current[selectedBankSubmoduleId] = window.scrollY;
    }

    setQuestions(questionSet.questions);
    setHasGeneratedQuestions(false);
    setSelectedAnswers(
      savedAnswersByQuestionSet[questionSet.id]?.selectedAnswers ?? {}
    );
    setMarkedAnswers({});
    setShowResults(false);
    setError("");
    setActiveQuestionSetId(questionSet.id);
    setActiveQuestionSetTitle(questionSet.title);
    setActivePracticeTimeLimitMinutes(null);
    setActivePracticeStartedAt(null);
    setActivePracticeQuestionIndex(0);
    setStruckAnswersByQuestion({});
    setQuestionBankSearch("");
    setCurrentView("question-bank");
  }

  function startRetestFramework(questionSet: QuestionSet) {
    loadQuestionSet(questionSet);
  }

  function startPracticeSession(
    title: string,
    practiceQuestions: Question[],
    timeLimitMinutes: number | null = null
  ) {
    autosaveActiveLectureAnswers();
    setQuestions(practiceQuestions);
    setHasGeneratedQuestions(false);
    setSelectedAnswers({});
    setMarkedAnswers({});
    setShowResults(false);
    setError("");
    setActiveQuestionSetId(null);
    setActiveQuestionSetTitle(title);
    setSelectedBankSubmoduleId(null);
    setQuestionBankSearch("");
    setActivePracticeTimeLimitMinutes(timeLimitMinutes);
    setActivePracticeStartedAt(timeLimitMinutes ? new Date().toISOString() : null);
    setPracticeTimerNow(Date.now());
    setActivePracticeQuestionIndex(0);
    setStruckAnswersByQuestion({});
    setCurrentView("question-bank");
  }

  function reviewSavedWrongQuestions() {
    if (savedWrongQuestions.length === 0) return;

    startPracticeSession(
      "Wrong question review",
      savedWrongQuestions.map(({ question }) => ({ ...question }))
    );
  }

  function updatePracticePaperQuestionCount(value: string) {
    setPracticePaperQuestionInput(value);

    const parsedValue = Number(value);

    if (!Number.isFinite(parsedValue)) return;
  }

  function updatePracticePaperTime(value: string) {
    setPracticePaperTimeInput(value);

    const parsedValue = Number(value);

    if (!Number.isFinite(parsedValue)) return;
  }

  function normalizePracticePaperSettings() {
    const normalizedQuestionCount = Math.min(
      200,
      Math.max(1, Math.round(Number(practicePaperQuestionInput) || 100))
    );
    const normalizedTime = Math.min(
      300,
      Math.max(1, Math.round(Number(practicePaperTimeInput) || 120))
    );

    setPracticePaperQuestionInput(String(normalizedQuestionCount));
    setPracticePaperTimeInput(String(normalizedTime));

    return {
      questionCount: normalizedQuestionCount,
      timeMinutes: normalizedTime,
    };
  }

  function buildBalancedPracticePaper(
    moduleId: PracticePaperModuleId,
    questionCount: number
  ) {
    const moduleFolder = bankStats.modules.find(
      (candidate) => candidate.id === moduleId
    );

    if (!moduleFolder) return [];

    const topicBuckets = moduleFolder.subfolders
      .map((submodule) =>
        getQuestionSets(submodule).flatMap((questionSet) =>
          questionSet.questions.map((question) => ({ ...question }))
        )
      )
      .filter((bucket) => bucket.length > 0)
      .map((bucket) => [...bucket].sort(() => Math.random() - 0.5));

    if (topicBuckets.length === 0) return [];

    const targetCount = Math.min(
      questionCount,
      topicBuckets.reduce((total, bucket) => total + bucket.length, 0)
    );
    const basePerTopic = Math.floor(targetCount / topicBuckets.length);
    let remainder = targetCount % topicBuckets.length;
    const selectedQuestions: Question[] = [];

    topicBuckets.forEach((bucket) => {
      const takeCount = Math.min(
        bucket.length,
        basePerTopic + (remainder > 0 ? 1 : 0)
      );

      if (remainder > 0) remainder -= 1;

      selectedQuestions.push(...bucket.splice(0, takeCount));
    });

    let bucketIndex = 0;

    while (selectedQuestions.length < targetCount) {
      const bucket = topicBuckets[bucketIndex % topicBuckets.length];
      const nextQuestion = bucket.shift();

      if (nextQuestion) {
        selectedQuestions.push(nextQuestion);
      }

      bucketIndex += 1;

      if (bucketIndex > topicBuckets.length * targetCount) break;
    }

    return selectedQuestions.sort(() => Math.random() - 0.5);
  }

  function startPracticePaper() {
    const { questionCount, timeMinutes } = normalizePracticePaperSettings();
    const paperQuestions = buildBalancedPracticePaper(
      practicePaperModuleId,
      questionCount
    );

    if (paperQuestions.length === 0) {
      setPracticePaperError("No questions are available for that module yet.");
      return;
    }

    setPracticePaperError("");
    startPracticeSession(
      `${paperQuestions.length}-question practice paper`,
      paperQuestions,
      timeMinutes
    );
  }

  function returnToQuestionBankHome() {
    autosaveActiveLectureAnswers();
    setQuestions([]);
    setHasGeneratedQuestions(false);
    setSelectedAnswers({});
    setMarkedAnswers({});
    setShowResults(false);
    setError("");
    setActiveQuestionSetId(null);
    setActiveQuestionSetTitle(null);
    setSelectedBankSubmoduleId(null);
    setActivePracticeTimeLimitMinutes(null);
    setActivePracticeStartedAt(null);
    setActivePracticeQuestionIndex(0);
    setStruckAnswersByQuestion({});
    setQuestionBankSearch("");
    setCurrentView("question-bank");
  }

  function returnToActiveSubmodule() {
    autosaveActiveLectureAnswers();

    const parentSubmodule = bankStats.submodules.find((submodule) =>
      submodule.questionSets.some(
        (questionSet) => questionSet.id === activeQuestionSetId
      )
    );

    if (!parentSubmodule) {
      returnToQuestionBankHome();
      return;
    }

    setQuestions([]);
    setHasGeneratedQuestions(false);
    setSelectedAnswers({});
    setMarkedAnswers({});
    setShowResults(false);
    setError("");
    setActiveQuestionSetId(null);
    setActiveQuestionSetTitle(null);
    setActivePracticeTimeLimitMinutes(null);
    setActivePracticeStartedAt(null);
    setActivePracticeQuestionIndex(0);
    setStruckAnswersByQuestion({});
    setSelectedBankSubmoduleId(parentSubmodule.id);
    pendingSubmoduleScrollRestore.current = parentSubmodule.id;
    setQuestionBankSearch("");
    setCurrentView("question-bank");
  }

  function openSubmodule(submoduleId: string) {
    const submodule = bankStats.submodules.find(
      (candidate) => candidate.id === submoduleId
    );

    setCurrentView("question-bank");
    setSelectedBankSubmoduleId(submoduleId);
    setActiveQuestionSetId(null);
    setActiveQuestionSetTitle(null);
    setExpandedBankModules(
      submodule
        ? { ...expandedBankModules, [submodule.parentModuleId]: true }
        : expandedBankModules
    );
  }

  function openGeneratorView() {
    setCurrentView("generator");
    setError("");

    if (activeQuestionSetId) {
      autosaveActiveLectureAnswers();
      setQuestions([]);
      setSelectedAnswers({});
      setMarkedAnswers({});
      setShowResults(false);
      setActiveQuestionSetId(null);
      setActiveQuestionSetTitle(null);
      setActivePracticeQuestionIndex(0);
      setStruckAnswersByQuestion({});
    }
  }

  function getWrongQuestions() {
    return questions.filter((q, questionIndex) => {
      const userAnswer = selectedAnswers[questionIndex];

      return userAnswer && userAnswer !== q.correctAnswer;
    });
  }

  function checkAnswers() {
    setShowResults(true);
    setMarkedAnswers(selectedAnswers);

    if (!activeQuestionSetId) {
      setActivePracticeTimeLimitMinutes(null);
      setActivePracticeStartedAt(null);
      return;
    }

    if (!user) {
      setAuthMessage("Sign in to save and track progress.");
      return;
    }

    const answered = questions.filter(
      (_question, questionIndex) => selectedAnswers[questionIndex]
    ).length;
    const correct = questions.filter(
      (question, questionIndex) =>
        selectedAnswers[questionIndex] === question.correctAnswer
    ).length;
    const existingProgress = progressByQuestionSet[activeQuestionSetId];
    const nextProgress = {
      answered: Math.max(existingProgress?.answered ?? 0, answered),
      correct: Math.max(existingProgress?.correct ?? 0, correct),
      total: questions.length,
      completedAt: new Date().toISOString(),
    };

    setProgressByQuestionSet((currentProgress) => {
      return {
        ...currentProgress,
        [activeQuestionSetId]: nextProgress,
      };
    });

    void saveProgressToCloud(activeQuestionSetId, nextProgress);
    saveCurrentLectureAnswers();
  }

  function saveCurrentLectureAnswers() {
    if (!activeQuestionSetId) return;

    if (!user) {
      setAuthMessage("");
      setIsSavePromptOpen(true);
      return;
    }

    const nextSavedAnswers = {
      selectedAnswers,
      savedAt: new Date().toISOString(),
    };

    setSavedAnswersByQuestionSet((currentAnswers) => ({
      ...currentAnswers,
      [activeQuestionSetId]: nextSavedAnswers,
    }));
    void saveAnswersToCloud(activeQuestionSetId, nextSavedAnswers);
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
  const verticalNavIndex =
    currentView === "question-bank"
      ? 0
      : currentView === "practice-paper"
        ? 1
        : currentView === "progress"
          ? 2
          : 3;
  const questionSliderPercent = ((questionSliderValue - 1) / 24) * 100;

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
    const questionSets = getQuestionSets(submodule);
    const answered = questionSets.reduce((total, questionSet) => {
      const progress = getQuestionSetProgress(questionSet);

      return total + progress.answered;
    }, 0);
    const correct = questionSets.reduce((total, questionSet) => {
      const progress = getQuestionSetProgress(questionSet);

      return total + progress.correct;
    }, 0);
    const percent =
      totalQuestions > 0 ? Math.round((answered / totalQuestions) * 100) : 0;

    return { answered, correct, percent, totalQuestions };
  }

  function getQuestionSetStudyProgress(questionSet: QuestionSet) {
    const markedProgress = getQuestionSetProgress(questionSet);
    const savedAnswers =
      savedAnswersByQuestionSet[questionSet.id]?.selectedAnswers ?? {};
    const savedAnswerCount = Object.keys(savedAnswers).length;
    const answered = Math.min(
      Math.max(markedProgress.answered, savedAnswerCount),
      questionSet.questions.length
    );
    const percent =
      questionSet.questions.length > 0
        ? Math.round((answered / questionSet.questions.length) * 100)
        : 0;

    return {
      answered,
      percent,
      updatedAt:
        savedAnswersByQuestionSet[questionSet.id]?.savedAt ??
        progressByQuestionSet[questionSet.id]?.completedAt ??
        "",
    };
  }

  function getPerformanceBand(accuracy: number): PerformanceBand {
    if (accuracy < 50) return "urgent";
    if (accuracy < 75) return "revisit";
    if (accuracy < 90) return "steady";
    return "strong";
  }

  function getPerformanceLabel(band: PerformanceBand) {
    if (band === "urgent") return "High priority";
    if (band === "revisit") return "Revisit soon";
    if (band === "steady") return "Building well";
    return "Strong";
  }

  function getPerformanceStyle(accuracy: number): CSSProperties {
    const hue = Math.round(Math.min(128, Math.max(0, accuracy * 1.28)));

    return {
      "--performance-accent": `hsl(${hue} 72% 39%)`,
      "--performance-bg": `hsl(${hue} 86% 96%)`,
      "--performance-soft": `hsl(${hue} 72% 90%)`,
    } as CSSProperties;
  }

  const performanceTopics: PerformanceTopic[] = bankStats.submodules
    .flatMap((submodule) =>
      submodule.questionSets.map((questionSet) => {
        const progress = getQuestionSetProgress(questionSet);
        const accuracy =
          progress.answered > 0
            ? Math.round((progress.correct / progress.answered) * 100)
            : null;
        const band = accuracy === null ? null : getPerformanceBand(accuracy);

        return {
          questionSet,
          submoduleId: submodule.id,
          submoduleTitle: submodule.title,
          answered: progress.answered,
          correct: progress.correct,
          total: questionSet.questions.length,
          accuracy,
          band,
        };
      })
    )
    .filter((topic) => topic.accuracy !== null)
    .sort((firstTopic, secondTopic) => {
      if (firstTopic.accuracy !== secondTopic.accuracy) {
        return (firstTopic.accuracy ?? 0) - (secondTopic.accuracy ?? 0);
      }

      return secondTopic.answered - firstTopic.answered;
    });

  const highestPriorityTopic = performanceTopics.find(
    (topic) => topic.band === "urgent" || topic.band === "revisit"
  );
  const performanceBandCounts = performanceTopics.reduce(
    (counts, topic) => {
      if (topic.band) {
        counts[topic.band] += 1;
      }

      return counts;
    },
    { urgent: 0, revisit: 0, steady: 0, strong: 0 } as Record<
      PerformanceBand,
      number
    >
  );
  const performanceAnsweredTotal = performanceTopics.reduce(
    (total, topic) => total + topic.answered,
    0
  );
  const performanceCorrectTotal = performanceTopics.reduce(
    (total, topic) => total + topic.correct,
    0
  );
  const performanceAverageAccuracy =
    performanceAnsweredTotal > 0
      ? Math.round((performanceCorrectTotal / performanceAnsweredTotal) * 100)
      : 0;
  const completedLectureCount = bankStats.submodules.reduce(
    (total, submodule) =>
      total +
      submodule.questionSets.filter((questionSet) => {
        const progress = getQuestionSetProgress(questionSet);

        return (
          questionSet.questions.length > 0 &&
          progress.answered >= questionSet.questions.length
        );
      }).length,
    0
  );
  const submodulePerformance = bankStats.submodules
    .map((submodule) => {
      const attemptedSets = submodule.questionSets
        .map((questionSet) => ({
          questionSet,
          progress: getQuestionSetProgress(questionSet),
        }))
        .filter(({ progress }) => progress.answered > 0);
      const answered = attemptedSets.reduce(
        (total, item) => total + item.progress.answered,
        0
      );
      const correct = attemptedSets.reduce(
        (total, item) => total + item.progress.correct,
        0
      );

      return {
        id: submodule.id,
        title: submodule.title,
        activeLectures: attemptedSets.length,
        answered,
        correct,
        accuracy: answered > 0 ? Math.round((correct / answered) * 100) : 0,
      };
    })
    .filter((submodule) => submodule.answered > 0)
    .sort((firstSubmodule, secondSubmodule) => {
      if (firstSubmodule.accuracy !== secondSubmodule.accuracy) {
        return firstSubmodule.accuracy - secondSubmodule.accuracy;
      }

      return secondSubmodule.answered - firstSubmodule.answered;
    });
  const inProgressLectures: InProgressLecture[] = bankStats.submodules
    .flatMap((submodule) =>
      submodule.questionSets.map((questionSet) => {
        const studyProgress = getQuestionSetStudyProgress(questionSet);

        return {
          questionSet,
          moduleTitle: submodule.parentModuleTitle,
          submoduleTitle: submodule.title,
          answered: studyProgress.answered,
          total: questionSet.questions.length,
          percent: studyProgress.percent,
          updatedAt: studyProgress.updatedAt,
        };
      })
    )
    .filter(
      (lecture) => lecture.answered > 0 && lecture.answered < lecture.total
    )
    .sort((firstLecture, secondLecture) => {
      const firstTime = Date.parse(firstLecture.updatedAt) || 0;
      const secondTime = Date.parse(secondLecture.updatedAt) || 0;

      return secondTime - firstTime;
    });
  const moduleProgressSummaries = bankStats.modules.map((moduleFolder) => ({
    moduleFolder,
    progress: getSubmoduleProgress(moduleFolder),
  }));
  const savedWrongQuestions: SavedWrongQuestion[] = allQuestionSets.flatMap(
    ({ questionSet, submodule }) => {
      const savedAnswers =
        savedAnswersByQuestionSet[questionSet.id]?.selectedAnswers ?? {};

      return Object.entries(savedAnswers)
        .map(([questionIndex, selectedAnswer]) => {
          const question = questionSet.questions[Number(questionIndex)];

          if (!question || selectedAnswer === question.correctAnswer) {
            return null;
          }

          return {
            question,
            questionSet,
            submoduleTitle: submodule.title,
          };
        })
        .filter((item): item is SavedWrongQuestion => Boolean(item));
    }
  );
  const lectureSearchResults = normalizedQuestionBankSearch
    ? bankStats.submodules.flatMap((submodule) =>
        submodule.questionSets
          .filter((questionSet) =>
            questionSet.title.toLowerCase().includes(normalizedQuestionBankSearch)
          )
          .map((questionSet) => ({
            questionSet,
            moduleTitle: submodule.parentModuleTitle,
            submoduleTitle: submodule.title,
          }))
      )
    : [];
  const submoduleSearchResults = normalizedQuestionBankSearch
    ? bankStats.submodules
        .filter((submodule) =>
          formatSubmoduleTitle(submodule.title)
            .toLowerCase()
            .includes(normalizedQuestionBankSearch)
        )
        .map((submodule) => ({
          submodule,
          progress: getSubmoduleProgress(submodule),
        }))
    : [];

  function renderProgressMeter(percent: number) {
    return (
      <div className="progressTrack h-2.5 overflow-hidden rounded-full shadow-inner">
        <div
          className="progressFill h-full rounded-full transition-all duration-500"
          style={{ width: `${Math.min(percent, 100)}%` }}
        />
      </div>
    );
  }

  function renderProgressSignInDisclaimer() {
    return (
      <p className="progressDisclaimer mt-2 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold">
        <svg
          className="h-4 w-4 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
          <path d="M10.3 4.2 2.6 17.5A2 2 0 0 0 4.3 20h15.4a2 2 0 0 0 1.7-2.5L13.7 4.2a2 2 0 0 0-3.4 0Z" />
        </svg>
        Sign in to save and track progress.
      </p>
    );
  }

  function renderAccountPanel() {
    const isGeneratorAuthPrompt =
      authMessage === "Sign in to use Question Generator.";
    const footerAuthMessage = isGeneratorAuthPrompt ? "" : authMessage;

    if (!isSupabaseConfigured) {
      return (
        <div className="relative flex flex-col items-end">
          <button
            type="button"
            onClick={() => setIsAuthMenuOpen(!isAuthMenuOpen)}
            className="headerAccountButton"
            aria-expanded={isAuthMenuOpen}
          >
            Local saves
          </button>

          {isAuthMenuOpen && (
            <div className="headerAccountPopover">
              <button
                type="button"
                onClick={() => setIsAuthMenuOpen(false)}
                className="headerAccountClose"
                aria-label="Close sign in menu"
              >
                X
              </button>
              <p className="text-sm font-bold text-slate-950">
                Cloud login not connected
              </p>
              <p className="mt-1 text-sm leading-snug text-slate-600">
                Sign in to save and track progress once accounts are connected.
              </p>
            </div>
          )}
        </div>
      );
    }

    if (!isAuthReady) {
      return (
        <div className="relative flex flex-col items-end">
          <button
            type="button"
            className="headerAccountButton max-w-full"
            disabled
          >
            Checking...
          </button>
        </div>
      );
    }

    if (user) {
      return (
        <div className="relative flex flex-col items-end">
          <button
            type="button"
            onClick={() => setIsAuthMenuOpen(!isAuthMenuOpen)}
            className="headerAccountButton max-w-full"
            aria-expanded={isAuthMenuOpen}
          >
            Signed in
          </button>

          {isAuthMenuOpen && (
            <div className="headerAccountPopover">
              <button
                type="button"
                onClick={() => setIsAuthMenuOpen(false)}
                className="headerAccountClose"
                aria-label="Close account menu"
              >
                X
              </button>
              <p className="truncate text-sm font-bold text-slate-950">
                {user.email}
              </p>
              <p className="mt-1 text-sm leading-snug text-slate-600">
                {isCloudProgressLoading
                  ? "Loading cloud progress..."
                  : cloudSyncStatus || "Progress sync is ready across devices."}
              </p>

              <button
                onClick={handleSignOut}
                disabled={authLoading}
                className="secondaryButton mt-4 w-full px-4 py-2.5 text-sm font-bold text-slate-900 transition disabled:cursor-not-allowed disabled:opacity-60"
              >
                {authLoading ? "Signing out..." : "Sign out"}
              </button>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="relative flex items-center gap-2">
        <button
          type="button"
          onClick={() => {
            setAuthMode("sign-in");
            setIsAuthMenuOpen(authMode === "sign-in" ? !isAuthMenuOpen : true);
          }}
          className="headerAccountButton"
          aria-expanded={isAuthMenuOpen}
        >
          Sign in
        </button>

        <button
          type="button"
          onClick={() => {
            setAuthMode("sign-up");
            setIsAuthMenuOpen(authMode === "sign-up" ? !isAuthMenuOpen : true);
          }}
          className="headerAccountButton headerAccountButtonSecondary"
          aria-expanded={isAuthMenuOpen}
        >
          Sign up
        </button>

        {isAuthMenuOpen && (
          <div className="headerAccountPopover">
            <button
              type="button"
              onClick={() => setIsAuthMenuOpen(false)}
              className="headerAccountClose"
              aria-label="Close sign in menu"
            >
              X
            </button>
            <p className="text-sm font-bold text-slate-950">
              Sign in to track progress and use generator
            </p>
            <p className="mt-1 text-sm leading-snug text-slate-600">
              You can still answer questions without an account, but progress
              will not be saved.
            </p>

            <form onSubmit={handleAuthSubmit} className="mt-4 space-y-3">
              <input
                type="email"
                value={authEmail}
                onChange={(event) => setAuthEmail(event.target.value)}
                className="headerAccountInput w-full px-4 py-2.5 text-sm outline-none placeholder:text-slate-400"
                placeholder="Email"
                required
              />

              <input
                type="password"
                value={authPassword}
                onChange={(event) => setAuthPassword(event.target.value)}
                className="headerAccountInput w-full px-4 py-2.5 text-sm outline-none placeholder:text-slate-400"
                placeholder="Password"
                minLength={6}
                required
              />

              <button
                type="submit"
                disabled={authLoading || !isAuthReady}
                className="primaryButton w-full px-4 py-2.5 text-sm font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-60"
              >
                {authLoading
                  ? "Working..."
                  : authMode === "sign-in"
                    ? "Sign in"
                    : "Create account"}
              </button>
            </form>

            <div className="mt-3 flex items-center justify-center">
              <div className="flex rounded-full border border-slate-200 bg-slate-50 p-0.5">
                <button
                  onClick={() => setAuthMode("sign-in")}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    authMode === "sign-in"
                      ? "bg-slate-950 text-white"
                      : "text-slate-600 hover:bg-white"
                  }`}
                  type="button"
                >
                  Sign in
                </button>
                <button
                  onClick={() => setAuthMode("sign-up")}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    authMode === "sign-up"
                      ? "bg-slate-950 text-white"
                      : "text-slate-600 hover:bg-white"
                  }`}
                  type="button"
                >
                  Create
                </button>
              </div>
            </div>

            {(footerAuthMessage || cloudSyncStatus) && (
              <p className="mt-3 text-xs font-semibold text-slate-600">
                {footerAuthMessage || cloudSyncStatus}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  function renderSavePrompt() {
    if (!isSavePromptOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 py-6 backdrop-blur-sm">
        <div className="glassModal relative w-full max-w-sm rounded-[1.75rem] p-6">
          <button
            type="button"
            onClick={() => setIsSavePromptOpen(false)}
            className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white shadow-lg transition hover:scale-105"
            aria-label="Close save sign in prompt"
          >
            X
          </button>

          <p className="text-lg font-black text-slate-950">
            Sign in to save progress
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Create an account or sign in so your saved answers and progress can
            sync across devices.
          </p>

          <button
            type="button"
            onClick={() => {
              setIsSavePromptOpen(false);
              setAuthMode("sign-in");
              setIsAuthMenuOpen(true);
            }}
            className="primaryButton mt-5 w-full px-5 py-3 text-sm font-bold text-white transition"
          >
            Sign in
          </button>
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
              className="interactiveCard p-4 sm:p-5"
              style={getAccentStyle(questionIndex)}
            >
              <h2 className="font-semibold text-slate-950">
                {questionIndex + 1}. {q.question}
              </h2>

              <div className="mt-4 space-y-2">
                {Object.entries(q.options).map(([letter, option]) => {
                  const selectedAnswer = selectedAnswers[questionIndex];
                  const markedAnswer = markedAnswers[questionIndex];
                  const hasMarkedAnswer = Boolean(markedAnswer);
                  const isSelected = selectedAnswer === letter;
                  const isMarkedSelection = markedAnswer === letter;
                  const isCorrect = q.correctAnswer === letter;
                  const isWrongSelected =
                    showResults && isMarkedSelection && !isCorrect;
                  const isCorrectSelected =
                    showResults && isMarkedSelection && isCorrect;
                  const shouldShowCorrectAnswer =
                    showResults && hasMarkedAnswer && isCorrect;

                  return (
                    <button
                      key={letter}
                      onClick={() => selectAnswer(questionIndex, letter)}
                      className={`answerChoice block w-full border p-3 text-left text-sm leading-relaxed transition sm:text-base ${
                        isSelected && !showResults ? "isAnswerSelected" : ""
                      } ${
                        isCorrectSelected
                          ? "border-emerald-500 bg-emerald-50 text-emerald-950"
                          : isWrongSelected
                            ? "border-rose-500 bg-rose-50 text-rose-950"
                            : shouldShowCorrectAnswer
                              ? "border-emerald-500 bg-emerald-50 text-emerald-950"
                              : isSelected
                                ? "border-purple-600 bg-purple-50 text-slate-950"
                                : "border-purple-200 bg-purple-50/35 text-slate-800 hover:bg-purple-50"
                      }`}
                    >
                      <span className="font-semibold">{letter}.</span> {option}
                    </button>
                  );
                })}
              </div>

              {showResults && markedAnswers[questionIndex] && (
                <div className="mt-4 rounded-lg bg-slate-50 p-3 text-slate-800">
                  <p>
                    <span className="font-semibold">Correct answer:</span>{" "}
                    {q.correctAnswer}
                  </p>

                  <p className="mt-2">
                    <span className="font-semibold">Your answer:</span>{" "}
                    {markedAnswers[questionIndex] || "No answer selected"}
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
            className="primaryButton mt-8 px-5 py-3 font-semibold text-white transition"
          >
            Check Answers
          </button>
        )}

        {questions.length > 0 && showResults && (
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => {
                setSelectedAnswers({});
                setMarkedAnswers({});
                setShowResults(false);
              }}
              className="secondaryButton px-5 py-3 font-semibold text-slate-900 transition"
            >
              Try Again
            </button>

            <button
              onClick={exportWrongQuestionsToAnkiCSV}
              disabled={wrongQuestions.length === 0}
              className="primaryButton px-5 py-3 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              Export {wrongQuestions.length} Wrong Questions to Anki
            </button>
          </div>
        )}
      </>
    );
  }

  function renderGeneratorView() {
    const isGeneratorLocked = !user;

    return (
      <section className="mx-auto max-w-5xl space-y-6">
        <div className="surfaceCard p-5 sm:p-8">
          <h2 className="text-2xl font-bold leading-tight text-slate-950 sm:text-4xl">
            Generate SBA Questions
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Use this when you want extra practice beyond the question bank.
          </p>

          <div className="relative mt-6">
            {isGeneratorLocked && (
              <div className="generatorLockPrompt absolute inset-x-4 top-4 z-10 flex items-start gap-2 rounded-2xl px-4 py-3 text-sm font-semibold">
                {renderLockIcon("mt-0.5 h-4 w-4 shrink-0")}
                <span>
                  Sign in to use generate questions using lecture notes or
                  transcripts.
                </span>
              </div>
            )}

            <textarea
              value={isGeneratorLocked ? "" : lectureNotes}
              onChange={(e) => setLectureNotes(e.target.value)}
              disabled={isGeneratorLocked}
              className={`h-56 w-full rounded-2xl border border-slate-200 bg-white/80 p-4 text-slate-950 shadow-inner outline-none transition placeholder:text-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 disabled:cursor-not-allowed sm:h-72 ${
                isGeneratorLocked
                  ? "pt-24 opacity-75 placeholder:text-transparent"
                  : ""
              }`}
              placeholder="Paste lecture notes or transcript here..."
            />
          </div>

          <div className="sliderBubblePanel mt-4 w-full max-w-xl px-4 py-3">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm font-semibold text-slate-700">
                Number of questions
              </label>
              <input
                type="number"
                min="1"
                max="25"
                step="1"
                value={questionCountInput}
                onChange={(event) => {
                  const rawValue = event.target.value;

                  setQuestionCountInput(rawValue);

                  if (rawValue === "") return;

                  const nextValue = Math.min(
                    25,
                    Math.max(1, Math.round(Number(rawValue)))
                  );

                  if (!Number.isFinite(nextValue)) return;

                  setQuestionCountInput(String(nextValue));
                  setQuestionSliderValue(nextValue);
                  setNumberOfQuestions(nextValue);
                }}
                onBlur={() => {
                  if (questionCountInput === "") {
                    setQuestionCountInput(String(numberOfQuestions));
                  }
                }}
                className="questionCountInput inline-flex min-h-7 w-12 items-center justify-center rounded-lg px-2 py-1 text-center text-sm font-semibold shadow-sm outline-none"
                aria-label="Number of questions"
              />
            </div>

            <input
              type="range"
              min="1"
              max="25"
              step="1"
              value={questionSliderValue}
              onChange={(e) => {
                const nextValue = Math.round(Number(e.target.value));

                setQuestionSliderValue(nextValue);
                setNumberOfQuestions(nextValue);
                setQuestionCountInput(String(nextValue));
              }}
              className="numberSlider w-full"
              style={{ "--slider-fill": `${questionSliderPercent}%` } as CSSProperties}
            />

            <div className="mt-1.5 flex justify-between px-1 text-[0.7rem] font-medium text-slate-500">
              <span>1</span>
              <span>25</span>
            </div>
          </div>

          <button
            onClick={generateQuestions}
            disabled={!user || loading || lectureNotes.trim().length === 0}
            className="primaryButton mt-5 inline-flex w-full items-center justify-center gap-2 px-6 py-3 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {isGeneratorLocked && renderLockIcon()}
            {loading ? "Generating..." : "Generate Questions"}
          </button>

          {error && (
            <p className="mt-4 rounded-2xl bg-rose-50 p-3 text-rose-700">
              {error}
            </p>
          )}
        </div>

        {hasGeneratedQuestions && questions.length > 0 && !activeQuestionSetId && (
          <section className="surfaceCard p-5 sm:p-6">
            <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
              New SBA Questions
            </h2>
            {renderQuestionList()}
          </section>
        )}
      </section>
    );
  }

  function renderFloatingStudyActions() {
    const answeredCount = Object.keys(selectedAnswers).length;
    const hasMarkedAnswers = Object.keys(markedAnswers).length > 0;
    const hasUnmarkedSelections = Object.entries(selectedAnswers).some(
      ([questionIndex, answer]) => markedAnswers[Number(questionIndex)] !== answer
    );
    const savedAt = activeQuestionSetId
      ? savedAnswersByQuestionSet[activeQuestionSetId]?.savedAt
      : null;

    return (
      <div className="studyDock w-fit max-w-[calc(100vw-1.5rem)] px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="min-w-0 px-1 text-xs font-bold text-slate-600 sm:min-w-24">
            {answeredCount}/{questions.length}
            <span className="hidden sm:inline"> answered</span>
          </div>

          <button
            onClick={checkAnswers}
            disabled={!hasUnmarkedSelections}
            className="primaryButton px-3 py-2 text-xs font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-60 sm:px-4 sm:text-sm"
          >
            {!hasUnmarkedSelections && hasMarkedAnswers ? "Marked" : "Mark"}
          </button>

          <button
            onClick={saveCurrentLectureAnswers}
            disabled={showResults && !hasUnmarkedSelections}
            className="secondaryButton px-3 py-2 text-xs font-bold text-slate-900 transition disabled:cursor-not-allowed disabled:opacity-60 sm:px-4 sm:text-sm"
          >
            Save
          </button>
        </div>

        {savedAt && (
          <p className="mt-1 hidden truncate px-1 text-center text-[0.68rem] font-semibold text-slate-500 sm:block sm:text-left">
            Saved {new Date(savedAt).toLocaleString()}
          </p>
        )}
      </div>
    );
  }

  function renderLectureCard(questionSet: QuestionSet) {
    const progress = getQuestionSetProgress(questionSet);
    const savedAt = savedAnswersByQuestionSet[questionSet.id]?.savedAt;
    const lectureIndex = selectedBankSubmodule?.questionSets.findIndex(
      (set) => set.id === questionSet.id
    ) ?? 0;

    return (
      <button
        key={questionSet.id}
        onClick={() => loadQuestionSet(questionSet)}
        className="interactiveCard p-4 text-left transition hover:-translate-y-0.5 sm:p-5"
        style={getAccentStyle(lectureIndex)}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-950">{questionSet.title}</h3>
            <p className="mt-1 text-sm text-slate-600">
              {questionSet.questions.length} questions | {progress.answered} answered
            </p>
            {savedAt && (
              <p className="mt-1 text-xs text-slate-500">
                Saved {new Date(savedAt).toLocaleString()}
              </p>
            )}
          </div>
          <span className="rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
            {progress.percent}%
          </span>
        </div>

        <div className="mt-4">{renderProgressMeter(progress.percent)}</div>
      </button>
    );
  }

  function renderActiveLectureSearch() {
    return (
      <div className="rounded-3xl border border-white/[0.16] bg-white/[0.06] p-3 shadow-[0_0_34px_rgba(124,58,237,0.16)]">
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m16.5 16.5 4 4" />
          </svg>
          <input
            type="search"
            value={questionBankSearch}
            onChange={(event) => setQuestionBankSearch(event.target.value)}
            placeholder="Search for another lecture..."
            className="questionBankSearchInput w-full rounded-2xl py-2.5 pl-10 pr-4 text-sm outline-none transition"
          />
        </div>

        {normalizedQuestionBankSearch && (
          <div className="mt-3 max-h-72 space-y-2 overflow-y-auto pr-1">
            {lectureSearchResults.length === 0 &&
            submoduleSearchResults.length === 0 ? (
              <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                No matching lectures or submodules found.
              </p>
            ) : (
              <>
                {submoduleSearchResults.map(({ submodule }) => (
                  <button
                    key={submodule.id}
                    type="button"
                    onClick={() => {
                      autosaveActiveLectureAnswers();
                      setQuestions([]);
                      setSelectedAnswers({});
                      setMarkedAnswers({});
                      setShowResults(false);
                      setActiveQuestionSetId(null);
                      setActiveQuestionSetTitle(null);
                      setQuestionBankSearch("");
                      openSubmodule(submodule.id);
                    }}
                    className="w-full rounded-2xl border border-purple-300/30 bg-purple-300/12 px-4 py-3 text-left text-white transition hover:border-purple-300/70 hover:bg-purple-300/18"
                  >
                    <span className="block text-sm font-semibold">
                      {formatSubmoduleTitle(submodule.title)}
                    </span>
                    <span className="mt-1 block text-xs text-slate-300">
                      {submodule.parentModuleTitle} |{" "}
                      {getLectureCount(submodule)} lectures
                    </span>
                  </button>
                ))}

                {lectureSearchResults.map(
                  ({ questionSet, moduleTitle, submoduleTitle }) => (
                  <button
                    key={questionSet.id}
                    type="button"
                    onClick={() => loadQuestionSet(questionSet)}
                    className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                      activeQuestionSetId === questionSet.id
                        ? "border-purple-300 bg-purple-300/18 text-white"
                        : "border-white/10 bg-white/5 text-white hover:border-purple-300/70 hover:bg-purple-300/12"
                    }`}
                  >
                    <span className="block text-sm font-semibold">
                      {questionSet.title}
                    </span>
                    <span className="mt-1 block text-xs text-slate-300">
                      {moduleTitle} | {formatSubmoduleTitle(submoduleTitle)} |{" "}
                      {questionSet.questions.length} questions
                    </span>
                  </button>
                  )
                )}
              </>
            )}
          </div>
        )}
      </div>
    );
  }

  function renderResumeLectures() {
    if (!user) return null;

    const resumeLectureCount = inProgressLectures.length;
    const lastWorkedLecture = inProgressLectures[0];
    const renderResumeLectureCard = (lecture: (typeof inProgressLectures)[number]) => (
      <button
        key={lecture.questionSet.id}
        type="button"
        onClick={() => loadQuestionSet(lecture.questionSet)}
        className="resumeLectureCard w-full rounded-[1.15rem] p-3 text-left transition"
      >
        <div className="resumeLectureHeader flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h4 className="resumeLectureTitle text-sm font-semibold text-purple-50 sm:text-base">
              {lecture.questionSet.title}
            </h4>
            <p className="resumeLectureMeta mt-1 text-xs text-purple-200/70">
              {lecture.moduleTitle} | {formatSubmoduleTitle(lecture.submoduleTitle)}
            </p>
          </div>

          <span className="resumePercentPill shrink-0 rounded-full px-3 py-1 text-xs font-semibold">
            {lecture.percent}%
          </span>
        </div>

        <div className="mt-3">{renderProgressMeter(lecture.percent)}</div>

        <div className="mt-2 text-xs text-purple-200/70">
          {lecture.answered}/{lecture.total} answered
        </div>
      </button>
    );

    return (
      <section className="resumePanel dashboardSquareTile p-3 sm:p-4">
        <button
          type="button"
          onClick={() => setIsResumePanelOpen(!isResumePanelOpen)}
          className="group flex w-full items-center justify-between gap-3 text-left"
          aria-expanded={isResumePanelOpen}
        >
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-purple-100 sm:text-lg">
              Questions in progress
            </h3>
            <p className="mt-1 text-xs text-purple-200/70 sm:text-sm">
              {resumeLectureCount}{" "}
              {resumeLectureCount === 1
                ? "lecture in progress"
                : "lectures in progress"}
            </p>
          </div>
          <span
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/8 text-base font-semibold leading-none text-purple-100 transition group-hover:border-purple-200/40 group-hover:bg-purple-300/12"
            aria-hidden="true"
          >
            {renderChevronIcon(isResumePanelOpen)}
          </span>
        </button>

        {lastWorkedLecture ? (
          <div className="mt-3">{renderResumeLectureCard(lastWorkedLecture)}</div>
        ) : (
          <p className="mt-4 rounded-[1.15rem] border border-white/10 bg-white/6 p-4 text-sm text-purple-200/75">
            Start answering a lecture set and it will appear here.
          </p>
        )}

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            isResumePanelOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            {inProgressLectures.length > 1 ? (
              <div className="mt-3 grid gap-2">
                {inProgressLectures.slice(1).map(renderResumeLectureCard)}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  function scrollToQuestionBankModule(moduleId: string) {
    setSelectedBankSubmoduleId(null);
    setQuestionBankSearch("");
    setExpandedBankModules((currentModules) => ({
      ...currentModules,
      [moduleId]: true,
    }));

    window.requestAnimationFrame(() => {
      document
        .getElementById(`question-bank-module-${moduleId}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function renderModuleProgressRings() {
    return (
      <section className="moduleProgressPanel rounded-[1.35rem] p-3 sm:p-4">
        <div className="mb-3 flex items-center gap-3">
          <h3 className="text-sm font-semibold text-purple-100 sm:text-base">
            Module progress
          </h3>
        </div>
        <div className="moduleProgressGrid grid grid-cols-2 gap-2 sm:gap-3">
          {moduleProgressSummaries.map(({ moduleFolder, progress }) => (
            <button
              key={moduleFolder.id}
              type="button"
              onClick={() => scrollToQuestionBankModule(moduleFolder.id)}
              className="moduleProgressCard rounded-[1.25rem] p-3 text-left transition hover:-translate-y-0.5 sm:p-4"
            >
              <div className="flex items-center gap-2.5 sm:gap-4">
                <div
                  className="moduleProgressRing grid h-12 w-12 shrink-0 place-items-center rounded-full sm:h-14 sm:w-14"
                  style={
                    {
                      "--ring-progress": `${progress.percent * 3.6}deg`,
                    } as CSSProperties
                  }
                  aria-label={`${moduleFolder.title} ${progress.percent}% complete`}
                >
                  <span className="text-xs font-semibold sm:text-sm">
                    {progress.percent}%
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="truncate text-sm font-semibold text-purple-50">
                    {moduleFolder.id === "foundations-of-biomedical-science"
                      ? "FBS"
                      : "PAS"}
                  </h4>
                  <p className="mt-1 text-xs text-purple-200/70">
                    {progress.answered}/{progress.totalQuestions} questions
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    );
  }

  function renderPriorityLectureTile() {
    return (
      <article
        className="priorityLectureCard dashboardSquareTile rounded-[1.35rem] p-3 sm:p-4"
        style={
          highestPriorityTopic
            ? getPerformanceStyle(highestPriorityTopic.accuracy ?? 0)
            : undefined
        }
      >
        {highestPriorityTopic ? (
          <div className="flex h-full flex-col gap-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ backgroundColor: "var(--performance-accent)" }}
                >
                  {getPerformanceLabel(highestPriorityTopic.band ?? "urgent")}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold"
                  style={{ color: "var(--performance-accent)" }}
                >
                  <span>{highestPriorityTopic.accuracy}%</span>
                  <span className="opacity-60" aria-hidden="true">
                    ·
                  </span>
                  <span>
                    {highestPriorityTopic.correct}/{highestPriorityTopic.answered}
                  </span>
                </span>
              </div>
              <p className="mt-2 text-xs font-medium text-purple-200/75">
                Revisit this next
              </p>
              <h3 className="mt-1 line-clamp-3 text-base font-semibold leading-snug text-purple-50">
                {highestPriorityTopic.questionSet.title}
              </h3>
              <p className="mt-1 text-xs text-purple-200/70">
                {formatSubmoduleTitle(highestPriorityTopic.submoduleTitle)}
              </p>
            </div>

            <div className="mt-auto">
              <button
                type="button"
                onClick={() => loadQuestionSet(highestPriorityTopic.questionSet)}
                className="performanceShortcut inline-flex min-h-9 w-full items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition"
              >
                Retest
              </button>
            </div>
          </div>
        ) : (
          <div className="flex h-full flex-col">
            <span className="inline-flex w-fit rounded-full border border-purple-200/20 bg-white/8 px-3 py-1 text-xs font-semibold text-purple-100">
              Revisit priority
            </span>
            <h3 className="mt-3 text-lg font-semibold leading-snug text-purple-50">
              No lectures to revisit.
            </h3>
            <p className="mt-1 text-sm text-purple-200/70">Keep it up!</p>
          </div>
        )}
      </article>
    );
  }

  function renderDashboardQuickActions() {
    return (
      <div className="quickActionGrid grid grid-cols-2 gap-1.5">
        <button
          type="button"
          onClick={reviewSavedWrongQuestions}
          disabled={savedWrongQuestions.length === 0}
          className="dashboardActionButton dashboardFeaturedAction min-h-9 rounded-xl px-2 py-1.5 text-center text-[0.62rem] font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 sm:px-2.5 sm:text-[0.7rem]"
        >
          Review wrong questions
          <span className="wrongQuestionCount ml-1 inline-flex min-w-4 items-center justify-center rounded-full px-1 py-0.5 text-[0.62rem] font-semibold sm:text-[0.68rem]">
            {savedWrongQuestions.length}
          </span>
        </button>
        <button
          type="button"
          onClick={() => setCurrentView("progress")}
          className="dashboardActionButton dashboardFeaturedAction min-h-9 rounded-xl px-2 py-1.5 text-center text-[0.62rem] font-semibold transition sm:px-2.5 sm:text-[0.7rem]"
        >
          View your performance
          <svg
            className="ml-1 inline-block h-3 w-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </button>
      </div>
    );
  }

  function renderUnlockedInsightsCard() {
    if (!user || performanceTopics.length > 0) return null;

    return (
      <div className="insightUnlockCard mt-4 rounded-3xl p-4">
        <h3 className="text-sm font-semibold text-purple-50">
          Unlock performance insights
        </h3>
        <p className="mt-2 text-sm text-purple-200/75">
          {user
            ? "Answer and mark one lecture set to unlock priorities, accuracy, and suggested next steps."
            : "Sign in, then mark lecture sets to track progress and unlock personalised insights."}
        </p>
      </div>
    );
  }

  function renderQuestionBankHome() {
    return (
      <div className="mx-auto max-w-6xl">
        <div className="space-y-6">
          <section
            className="questionBankHero p-4 sm:p-5"
            onPointerMove={updateDashboardDots}
            onPointerLeave={clearDashboardDots}
          >
            <div>
              <div className="min-w-0">
                <div className="grid gap-4 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
                  <button
                    type="button"
                    onClick={() => setIsDashboardOpen(!isDashboardOpen)}
                    className="dashboardHeroToggleArea -m-2 inline-flex min-h-12 items-center gap-2 rounded-2xl p-2 text-left"
                    aria-label={
                      isDashboardOpen ? "Collapse dashboard" : "Expand dashboard"
                    }
                    aria-expanded={isDashboardOpen}
                  >
                    <h2 className="text-3xl font-semibold leading-none text-purple-100 sm:text-4xl">
                      Welcome
                    </h2>
                    <span className="dashboardHeroToggle inline-flex h-8 w-8 shrink-0 items-center justify-center text-purple-100 transition">
                      {renderChevronIcon(isDashboardOpen)}
                    </span>
                  </button>

                  <div className="relative w-full">
                    <svg
                      className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="m16.5 16.5 4 4" />
                    </svg>
                    <input
                      type="search"
                      value={questionBankSearch}
                      onChange={(event) => setQuestionBankSearch(event.target.value)}
                      placeholder="Search for a lecture..."
                      className="questionBankSearchInput w-full rounded-2xl py-3 pl-10 pr-4 text-sm outline-none transition"
                    />
                  </div>
                </div>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isDashboardOpen
                      ? "mt-3 grid-rows-[1fr] opacity-100"
                      : "mt-0 grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                <div className="dashboardCompactStack space-y-3">
                  {user && (
                    <div className="quietStat questionBankStatsPill dashboardMiniStats grid min-h-14 w-full grid-cols-3 overflow-hidden rounded-[1.25rem]">
                      <div className="quietStatSegment flex min-w-0 items-center justify-center gap-1.5 px-2 py-2 sm:px-3">
                        <span className="text-base font-semibold text-purple-50 sm:text-xl">
                          {completedLectureCount}/{bankStats.totalLectures}
                        </span>
                        <span className="text-[0.68rem] font-medium text-purple-200 sm:text-xs">
                          Lectures completed
                        </span>
                      </div>
                      <div className="quietStatSegment flex min-w-0 items-center justify-center gap-1.5 px-2 py-2 sm:px-3">
                        <span className="text-base font-semibold text-purple-50 sm:text-xl">
                          {performanceAnsweredTotal}/{bankStats.totalQuestions}
                        </span>
                        <span className="text-[0.68rem] font-medium text-purple-200 sm:text-xs">
                          Questions answered
                        </span>
                      </div>
                      <div className="quietStatSegment flex min-w-0 items-center justify-center gap-1.5 px-2 py-2 sm:px-3">
                        <span className="text-base font-semibold text-purple-50 sm:text-xl">
                          {performanceAverageAccuracy}%
                        </span>
                        <span className="text-[0.68rem] font-medium text-purple-200 sm:text-xs">
                          Average accuracy
                        </span>
                      </div>
                    </div>
                  )}

                  {renderModuleProgressRings()}

                  {renderDashboardQuickActions()}

                  <div className="dashboardTileGrid grid gap-3 md:grid-cols-2">
                    {renderPriorityLectureTile()}

                    {!normalizedQuestionBankSearch &&
                      !selectedBankSubmodule &&
                      renderResumeLectures()}
                  </div>

                  {renderUnlockedInsightsCard()}
                </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {normalizedQuestionBankSearch ? (
            <section className="surfaceCard p-5 sm:p-6">
              <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
                Search Results
              </h2>

              {lectureSearchResults.length === 0 &&
              submoduleSearchResults.length === 0 ? (
                <p className="mt-3 text-slate-600">
                  No matching lectures or submodules found.
                </p>
              ) : (
                <div className="mt-6 space-y-6">
                  {submoduleSearchResults.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-slate-600">
                        Submodules
                      </p>
                      <div className="mt-3 grid gap-4 lg:grid-cols-2">
                        {submoduleSearchResults.map(
                          ({ submodule, progress }, index) => (
                            <button
                              key={submodule.id}
                              onClick={() => {
                                setQuestionBankSearch("");
                                openSubmodule(submodule.id);
                              }}
                              className="interactiveCard p-4 text-left transition hover:-translate-y-0.5 sm:p-5"
                              style={getAccentStyle(index)}
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <h3 className="font-bold text-slate-950">
                                    {formatSubmoduleTitle(submodule.title)}
                                  </h3>
                                  <p className="mt-1 text-sm text-slate-600">
                                    {submodule.parentModuleTitle} |{" "}
                                    {getLectureCount(submodule)} lectures |{" "}
                                    {progress.totalQuestions} questions
                                  </p>
                                </div>
                                <span className="rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                                  {progress.percent}%
                                </span>
                              </div>

                              <div className="mt-4">
                                {renderProgressMeter(progress.percent)}
                              </div>
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {lectureSearchResults.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-slate-600">
                        Lectures
                      </p>
                      <div className="mt-3 grid gap-4 lg:grid-cols-2">
                  {lectureSearchResults.map(({ questionSet, moduleTitle, submoduleTitle }, index) => {
                    const progress = getQuestionSetProgress(questionSet);

                    return (
                      <button
                        key={questionSet.id}
                        onClick={() => loadQuestionSet(questionSet)}
                        className="interactiveCard p-4 text-left transition hover:-translate-y-0.5 sm:p-5"
                        style={getAccentStyle(index)}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-bold text-slate-950">
                              {questionSet.title}
                            </h3>
                            <p className="mt-1 text-sm text-slate-600">
                              {moduleTitle} |{" "}
                              {formatSubmoduleTitle(submoduleTitle)}
                            </p>
                            <p className="mt-1 text-sm text-slate-600">
                              {questionSet.questions.length} questions |{" "}
                              {progress.answered} answered
                            </p>
                          </div>
                          <span className="rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                            {progress.percent}%
                          </span>
                        </div>

                        <div className="mt-4">
                          {renderProgressMeter(progress.percent)}
                        </div>
                      </button>
                    );
                  })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </section>
          ) : selectedBankSubmodule ? (
            <section className="surfaceCard p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
                    {formatSubmoduleTitle(selectedBankSubmodule.title)}
                  </h2>
                  <p className="mt-2 text-slate-600">
                    Choose a lecture to start answering its saved questions.
                  </p>
                </div>

                <button
                  onClick={() => setSelectedBankSubmoduleId(null)}
                  className="performanceShortcut flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold transition sm:w-auto"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
                  Back to question bank
                </button>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {selectedBankSubmodule.questionSets.map(renderLectureCard)}
              </div>
            </section>
          ) : (
            <section className="space-y-4">
              {bankStats.modules.map((moduleFolder, moduleIndex) => {
                const moduleProgress = getSubmoduleProgress(moduleFolder);
                const isExpanded = Boolean(expandedBankModules[moduleFolder.id]);

                return (
                  <article
                    key={moduleFolder.id}
                    id={`question-bank-module-${moduleFolder.id}`}
                    className="surfaceCard p-5"
                    style={getAccentStyle(moduleIndex)}
                  >
                    <button
                      type="button"
                      onClick={() => toggleBankModule(moduleFolder.id)}
                      className="group w-full text-left"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="text-lg font-bold text-slate-950 sm:text-xl">
                            {moduleFolder.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600">
                            {moduleFolder.subfolders.length} submodules |{" "}
                            {getLectureCount(moduleFolder)} lectures |{" "}
                            {moduleProgress.totalQuestions} questions
                          </p>
                          <span className="mt-3 inline-flex min-h-9 items-center justify-center rounded-full bg-white/75 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm">
                            {moduleProgress.percent}%
                          </span>
                        </div>

                        <span
                          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/85 text-xl font-semibold leading-none text-slate-700 shadow-sm transition group-hover:bg-purple-50"
                          aria-hidden="true"
                        >
                          {renderChevronIcon(isExpanded)}
                        </span>
                      </div>
                    </button>

                    <div className="mt-4">
                      {renderProgressMeter(moduleProgress.percent)}
                    </div>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="mt-5 grid gap-4 lg:grid-cols-2">
                          {moduleFolder.subfolders.map((submodule, submoduleIndex) => {
                            const progress = getSubmoduleProgress(submodule);

                            return (
                              <button
                                key={submodule.id}
                                onClick={() => openSubmodule(submodule.id)}
                                className="interactiveCard p-4 text-left transition hover:-translate-y-0.5 sm:p-5"
                                style={getAccentStyle(submoduleIndex)}
                              >
                                <div className="flex items-start justify-between gap-4">
                                  <div>
                                    <h4 className="font-bold text-slate-950">
                              {formatSubmoduleTitle(submodule.title)}
                                    </h4>
                                    <p className="mt-1 text-sm text-slate-600">
                                      {getLectureCount(submodule)} lectures |{" "}
                                      {progress.totalQuestions} questions
                                    </p>
                                  </div>
                                  <span className="rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                                    {progress.percent}%
                                  </span>
                                </div>

                                <div className="mt-4">
                                  {renderProgressMeter(progress.percent)}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </section>
          )}

        </div>
      </div>
    );
  }

  function renderPracticeQuestionPanel() {
    const question = questions[activePracticeQuestionIndex];

    if (!question) return null;

    const answeredCount = Object.keys(selectedAnswers).length;
    const selectedAnswer = selectedAnswers[activePracticeQuestionIndex];
    const markedAnswer = markedAnswers[activePracticeQuestionIndex];
    const hasMarkedAnswer = Boolean(markedAnswer);

    return (
      <div className="practiceExamLayout mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_13rem]">
        <article className="interactiveCard min-w-0 p-4 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="practiceQuestionCount rounded-full px-3 py-1 text-xs font-semibold">
              Question {activePracticeQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-xs font-medium text-slate-500">
              {answeredCount} answered
            </span>
          </div>

          <h3 className="mt-5 text-base font-semibold leading-relaxed text-slate-950 sm:text-lg">
            {question.question}
          </h3>

          <div className="mt-5 space-y-2">
            {Object.entries(question.options).map(([letter, option]) => {
              const isSelected = selectedAnswer === letter;
              const isMarkedSelection = markedAnswer === letter;
              const isCorrect = question.correctAnswer === letter;
              const isWrongSelected =
                showResults && isMarkedSelection && !isCorrect;
              const isCorrectSelected =
                showResults && isMarkedSelection && isCorrect;
              const shouldShowCorrectAnswer =
                showResults && hasMarkedAnswer && isCorrect;
              const isStruck = Boolean(
                struckAnswersByQuestion[activePracticeQuestionIndex]?.[letter]
              );

              return (
                <div
                  key={letter}
                  className={`practiceAnswerRow flex items-stretch gap-2 rounded-2xl ${
                    isStruck ? "isStruck" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => selectAnswer(activePracticeQuestionIndex, letter)}
                    className={`answerChoice min-w-0 flex-1 border p-3 text-left text-sm leading-relaxed transition sm:text-base ${
                      isSelected && !showResults ? "isAnswerSelected" : ""
                    } ${
                      isCorrectSelected
                        ? "border-emerald-500 bg-emerald-50 text-emerald-950"
                        : isWrongSelected
                          ? "border-rose-500 bg-rose-50 text-rose-950"
                          : shouldShowCorrectAnswer
                            ? "border-emerald-500 bg-emerald-50 text-emerald-950"
                            : isSelected
                              ? "border-purple-600 bg-purple-50 text-slate-950"
                              : "border-purple-200 bg-purple-50/35 text-slate-800 hover:bg-purple-50"
                    }`}
                  >
                    <span className="font-semibold">{letter}.</span> {option}
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      toggleStruckAnswer(activePracticeQuestionIndex, letter)
                    }
                    aria-pressed={isStruck}
                    className={`performanceShortcut practicePaperActionButton strikeAnswerButton shrink-0 rounded-2xl px-3 text-sm font-medium transition ${
                      isStruck ? "isStruck" : ""
                    }`}
                  >
                    {isStruck ? "Include" : "Exclude"}
                  </button>
                </div>
              );
            })}
          </div>

          {showResults && markedAnswer && (
            <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-800">
              <p>
                <span className="font-semibold">Correct answer:</span>{" "}
                {question.correctAnswer}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Your answer:</span>{" "}
                {markedAnswer}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Explanation:</span>{" "}
                {question.explanation}
              </p>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() =>
                setActivePracticeQuestionIndex((currentIndex) =>
                  Math.max(0, currentIndex - 1)
                )
              }
              disabled={activePracticeQuestionIndex === 0}
              className="performanceShortcut practicePaperActionButton inline-flex min-h-10 items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-45"
            >
              Previous question
            </button>

            <button
              type="button"
              onClick={() =>
                setActivePracticeQuestionIndex((currentIndex) =>
                  Math.min(questions.length - 1, currentIndex + 1)
                )
              }
              disabled={activePracticeQuestionIndex === questions.length - 1}
              className="performanceShortcut practicePaperActionButton inline-flex min-h-10 items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-45"
            >
              Next question
            </button>
          </div>

          {!showResults ? (
            <button
              type="button"
              onClick={checkAnswers}
              disabled={answeredCount === 0}
              className="performanceShortcut practicePaperActionButton mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-45"
            >
              Mark paper
            </button>
          ) : (
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedAnswers({});
                  setMarkedAnswers({});
                  setStruckAnswersByQuestion({});
                  setShowResults(false);
                }}
                className="secondaryButton inline-flex min-h-10 items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition"
              >
                Try again
              </button>
              <button
                type="button"
                onClick={exportWrongQuestionsToAnkiCSV}
                disabled={wrongQuestions.length === 0}
                className="primaryButton inline-flex min-h-10 items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-45"
              >
                Export wrong questions
              </button>
            </div>
          )}
        </article>

        <aside className="practiceQuestionNavigator rounded-[1.35rem] p-3 sm:p-4">
          <p className="text-sm font-semibold text-purple-100">Questions</p>
          <div className="practiceQuestionNumberGrid mt-3 grid gap-1">
            {questions.map((_question, questionIndex) => {
              const isCurrentQuestion =
                questionIndex === activePracticeQuestionIndex;
              const isAnswered = Boolean(selectedAnswers[questionIndex]);

              return (
                <button
                  key={questionIndex}
                  type="button"
                  onClick={() => setActivePracticeQuestionIndex(questionIndex)}
                  aria-label={`Go to question ${questionIndex + 1}`}
                  aria-current={isCurrentQuestion ? "step" : undefined}
                  className={`practiceQuestionNumber h-7 w-9 rounded-lg text-[0.7rem] font-semibold transition ${
                    isCurrentQuestion
                      ? "isCurrent"
                      : isAnswered
                        ? "isAnswered"
                        : ""
                  }`}
                >
                  {questionIndex + 1}
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    );
  }

  function renderPracticeSession() {
    const remainingSeconds =
      activePracticeTimeLimitMinutes && activePracticeStartedAt
        ? Math.max(
            0,
            Math.ceil(
              (Date.parse(activePracticeStartedAt) +
                activePracticeTimeLimitMinutes * 60 * 1000 -
                practiceTimerNow) /
                1000
            )
          )
        : null;
    const timerMinutes =
      remainingSeconds === null ? 0 : Math.floor(remainingSeconds / 60);
    const timerSeconds = remainingSeconds === null ? 0 : remainingSeconds % 60;

    return (
      <section className="surfaceCard mx-auto max-w-5xl p-5 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            {remainingSeconds !== null && (
              <span className="practiceTimerPill inline-flex rounded-full px-4 py-2 text-sm font-semibold">
                {remainingSeconds === 0
                  ? "Time up"
                  : `${timerMinutes}:${String(timerSeconds).padStart(2, "0")} remaining`}
              </span>
            )}
            {showResults && remainingSeconds === null && (
              <span className="practiceTimerPill inline-flex rounded-full px-4 py-2 text-sm font-semibold">
                Paper marked
              </span>
            )}
            <h2 className="mt-3 text-xl font-bold leading-tight text-slate-950 sm:text-2xl">
              {activeQuestionSetTitle ?? "Practice session"}
            </h2>
          </div>

          <button
            type="button"
            onClick={returnToQuestionBankHome}
            className="performanceShortcut inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition sm:w-auto"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to dashboard
          </button>
        </div>

        {renderPracticeQuestionPanel()}
      </section>
    );
  }

  function renderActiveQuestionSet() {
    const answeredCount = Object.keys(selectedAnswers).length;

    return (
      <div className="mx-auto max-w-5xl space-y-4">
        {renderActiveLectureSearch()}

        <section className="surfaceCard p-5 pb-28 sm:p-8 sm:pb-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-xl font-bold leading-tight text-slate-950 sm:text-2xl">
                {activeQuestionSetTitle}
              </h2>
              <p className="mt-2 text-slate-600">
                {answeredCount} of {questions.length} answered
              </p>
              {!user && renderProgressSignInDisclaimer()}
            </div>

            <div className="flex w-full flex-col gap-2 sm:w-auto">
              <button
                onClick={returnToQuestionBankHome}
                className="performanceShortcut lectureNavButton flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold transition sm:w-auto"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Back to question bank
              </button>

              <button
                onClick={returnToActiveSubmodule}
                className="performanceShortcut lectureNavButton flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold transition sm:w-auto"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Back to submodule
              </button>
            </div>
          </div>

          {renderQuestionList()}
        </section>
      </div>
    );
  }

  function renderPerformanceTopicCard(topic: PerformanceTopic) {
    const accuracy = topic.accuracy ?? 0;
    const band = topic.band ?? "urgent";
    const canRetest = band === "urgent" || band === "revisit";

    return (
      <article
        key={topic.questionSet.id}
        className="performanceCard rounded-2xl border p-4"
        style={{
          ...getPerformanceStyle(accuracy),
          background:
            "linear-gradient(90deg, var(--performance-bg), rgba(255,255,255,0.96))",
          borderColor: "var(--performance-soft)",
        }}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="performancePill inline-flex min-h-9 items-center justify-center rounded-full px-4 py-2 text-sm text-white shadow-sm"
            style={{
              backgroundColor: "var(--performance-accent)",
            }}
          >
            {getPerformanceLabel(band)}
          </span>
          <span
            className="performancePill inline-flex min-h-9 items-center justify-center rounded-full bg-white/85 px-4 py-2 text-sm shadow-sm"
            style={{ color: "var(--performance-accent)" }}
          >
            {accuracy}%
          </span>
          <span className="performancePill inline-flex min-h-9 items-center justify-center rounded-full bg-white/85 px-4 py-2 text-sm text-slate-800 shadow-sm">
            {topic.correct}/{topic.answered}
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-medium text-slate-500">
              {formatSubmoduleTitle(topic.submoduleTitle)}
            </p>
            <h4 className="mt-2 leading-snug">{topic.questionSet.title}</h4>
          </div>

          <div className="shrink-0 sm:border-l sm:border-slate-200/70 sm:pl-4">
            {canRetest ? (
              <button
                type="button"
                onClick={() => startRetestFramework(topic.questionSet)}
                className="performanceShortcut inline-flex min-h-9 w-full items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition sm:w-auto"
              >
                Retest?
              </button>
            ) : (
              <button
                type="button"
                onClick={() => loadQuestionSet(topic.questionSet)}
                className="secondaryButton inline-flex min-h-9 w-full items-center justify-center px-4 py-2 text-sm font-semibold text-slate-900 transition sm:w-auto"
              >
                Review
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/75">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${accuracy}%`,
              backgroundColor: "var(--performance-accent)",
            }}
          />
        </div>
      </article>
    );
  }

  function renderPerformanceAnalytics() {
    return (
      <section className="surfaceCard overflow-hidden">
        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6">
          <div>
            <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
              Performance analytics
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Priorities are based only on lectures you have answered and marked.
            </p>
            <span className="activeTopicsPill mt-3 inline-flex w-fit items-center rounded-full px-4 py-2 text-xs font-semibold">
              {performanceTopics.length} active topics
            </span>
          </div>

          <button
            type="button"
            onClick={() => setCurrentView("question-bank")}
            className="performanceShortcut inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition sm:w-auto"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to Question Bank
          </button>
        </div>

        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
          {!user ? (
            <div className="rounded-2xl border border-dashed border-purple-200 bg-white/80 p-5 text-sm text-slate-600">
              Sign in before marking lecture sets to save progress and unlock
              performance analytics.
            </div>
          ) : performanceTopics.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-5 text-sm text-slate-600">
              Mark at least one lecture set to unlock weakest-topic analytics.
            </div>
          ) : (
            <div className="space-y-3">
              {performanceTopics.map(renderPerformanceTopicCard)}
            </div>
          )}
        </div>
      </section>
    );
  }

  function renderProgressTracker() {
    const shouldShowGraphPanel = Boolean(user && performanceTopics.length > 0);

    return (
      <section
        className={`mx-auto grid max-w-6xl gap-4 ${
          shouldShowGraphPanel
            ? "xl:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] xl:items-start"
            : ""
        }`}
      >
        {renderPerformanceAnalytics()}
        {shouldShowGraphPanel && renderPerformanceGraphs()}
      </section>
    );
  }

  function renderPracticePaperView() {
    const isPracticePaperLocked = !user;

    return (
      <section className="mx-auto max-w-5xl space-y-6">
        <div className="surfaceCard p-5 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Practice Paper Mode
              </h2>
              <p className="mt-3 max-w-3xl text-slate-600">
                Build an exam-style paper from random question bank questions,
                balanced as evenly as possible across topics.
              </p>
            </div>
          </div>

          <div className="relative mt-6">
            {isPracticePaperLocked && (
              <div className="generatorLockPrompt absolute inset-x-4 top-4 z-10 flex items-start gap-2 rounded-2xl px-4 py-3 text-sm font-semibold">
                {renderLockIcon("mt-0.5 h-4 w-4 shrink-0")}
                <span>Sign in to use Practice Paper Mode.</span>
              </div>
            )}

            <div
              className={`practicePaperGrid grid gap-4 lg:grid-cols-2 ${
                isPracticePaperLocked ? "pointer-events-none select-none opacity-50" : ""
              }`}
            >
              <div className="practicePaperPanel rounded-3xl p-4">
              <p className="text-sm font-semibold text-slate-950">
                Choose module
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {bankStats.modules.map((moduleFolder) => {
                  const isSelected = practicePaperModuleId === moduleFolder.id;

                  return (
                    <button
                      key={moduleFolder.id}
                      type="button"
                      onClick={() =>
                        setPracticePaperModuleId(
                          moduleFolder.id as PracticePaperModuleId
                        )
                      }
                      disabled={isPracticePaperLocked}
                      className={`practiceModuleButton rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                        isSelected ? "isSelected" : ""
                      }`}
                    >
                      <span>
                        {moduleFolder.id === "foundations-of-biomedical-science"
                          ? "FBS"
                          : "PAS"}
                      </span>
                      <span className="mt-1 block text-xs font-medium">
                        {getLectureCount(moduleFolder)} lectures |{" "}
                        {getQuestionCount(moduleFolder)} questions
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

              <div className="practicePaperPanel rounded-3xl p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold text-slate-600">
                    Number of questions
                  </span>
                  <input
                    type="number"
                    min={1}
                    max={200}
                    value={practicePaperQuestionInput}
                    onChange={(event) =>
                      updatePracticePaperQuestionCount(event.target.value)
                    }
                    onBlur={normalizePracticePaperSettings}
                    disabled={isPracticePaperLocked}
                    className="questionCountInput mt-2 w-full rounded-2xl px-4 py-3 text-sm font-semibold outline-none"
                  />
                  <span className="mt-1 block text-xs text-slate-500">
                    Max 200
                  </span>
                </label>

                <label className="block">
                  <span className="text-xs font-semibold text-slate-600">
                    Time limit (minutes)
                  </span>
                  <input
                    type="number"
                    min={1}
                    max={300}
                    value={practicePaperTimeInput}
                    onChange={(event) =>
                      updatePracticePaperTime(event.target.value)
                    }
                    onBlur={normalizePracticePaperSettings}
                    disabled={isPracticePaperLocked}
                    className="questionCountInput mt-2 w-full rounded-2xl px-4 py-3 text-sm font-semibold outline-none"
                  />
                  <span className="mt-1 block text-xs text-slate-500">
                    Max 300 minutes
                  </span>
                </label>
              </div>
              </div>
            </div>

            {practicePaperError && (
              <p className="mt-4 rounded-2xl bg-rose-50 p-3 text-sm font-semibold text-rose-700">
                {practicePaperError}
              </p>
            )}

            <button
              type="button"
              onClick={startPracticePaper}
              disabled={isPracticePaperLocked}
              className="primaryButton mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              {isPracticePaperLocked && renderLockIcon()}
              Start Practice Paper
            </button>
          </div>
        </div>
      </section>
    );
  }

  function renderPerformanceGraphs() {
    const bandOrder: Array<{
      band: PerformanceBand;
      label: string;
      color: string;
    }> = [
      { band: "urgent", label: "High priority", color: "#ef4444" },
      { band: "revisit", label: "Revisit", color: "#f59e0b" },
      { band: "steady", label: "Building", color: "#84cc16" },
      { band: "strong", label: "Strong", color: "#22c55e" },
    ];
    let pieStartAngle = -90;
    const getPiePoint = (angle: number, radius: number) => {
      const radians = (angle * Math.PI) / 180;

      return {
        x: 50 + Math.cos(radians) * radius,
        y: 50 + Math.sin(radians) * radius,
      };
    };
    const pieSlices = bandOrder
      .map(({ band, label, color }) => {
        const count = performanceBandCounts[band];
        const sweep =
          performanceTopics.length > 0
            ? (count / performanceTopics.length) * 360
            : 0;
        const startAngle = pieStartAngle;
        const endAngle = pieStartAngle + sweep;
        pieStartAngle = endAngle;

        return {
          band,
          count,
          color,
          label: label === "High priority" ? "High" : label,
          percentage:
            performanceTopics.length > 0
              ? Math.round((count / performanceTopics.length) * 100)
              : 0,
          path:
            sweep >= 359.9
              ? ""
              : (() => {
                  const start = getPiePoint(startAngle, 40);
                  const end = getPiePoint(endAngle, 40);
                  const largeArcFlag = sweep > 180 ? 1 : 0;

                  return `M 50 50 L ${start.x} ${start.y} A 40 40 0 ${largeArcFlag} 1 ${end.x} ${end.y} Z`;
                })(),
          isFullCircle: sweep >= 359.9,
        };
      })
      .filter((slice) => slice.count > 0);

    return (
      <aside className="performanceGraphPanel rounded-3xl p-4 sm:p-5">
        <div className="grid grid-cols-3 gap-2">
          <div className="analyticsMetric rounded-2xl px-3 py-3 text-center">
            <p className="text-xl font-semibold">{performanceAverageAccuracy}%</p>
            <p className="mt-1 text-[0.68rem] font-medium">Accuracy</p>
          </div>
          <div className="analyticsMetric rounded-2xl px-3 py-3 text-center">
            <p className="text-xl font-semibold">{performanceAnsweredTotal}</p>
            <p className="mt-1 text-[0.68rem] font-medium">
              Questions answered
            </p>
          </div>
          <div className="analyticsMetric rounded-2xl px-3 py-3 text-center">
            <p className="text-xl font-semibold">{completedLectureCount}</p>
            <p className="mt-1 text-[0.68rem] font-medium">
              Lectures completed
            </p>
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between gap-3">
            <p className="text-sm font-semibold">Topic performance</p>
            <p className="text-xs">{performanceTopics.length} active</p>
          </div>
          <div className="analyticsPieWrap grid gap-3 rounded-2xl p-3 sm:grid-cols-[minmax(0,1fr)_minmax(8.5rem,0.9fr)] sm:items-center">
            <svg
              viewBox="0 0 100 100"
              className="mx-auto h-44 w-full max-w-52"
              role="img"
              aria-label="Pie chart showing topic performance"
            >
              <circle cx="50" cy="50" r="40" className="analyticsPieBase" />
              {pieSlices.map((slice) =>
                slice.isFullCircle ? (
                  <circle
                    key={slice.band}
                    cx="50"
                    cy="50"
                    r="40"
                    fill={slice.color}
                  />
                ) : (
                  <path key={slice.band} d={slice.path} fill={slice.color} />
                )
              )}
            </svg>
            <div className="grid gap-2">
              {bandOrder.map(({ band, label, color }) => {
                const count = performanceBandCounts[band];
                const percentage =
                  performanceTopics.length > 0
                    ? Math.round((count / performanceTopics.length) * 100)
                    : 0;

                return (
                <div
                  key={band}
                  className={`analyticsPieLegend flex items-center justify-between gap-2 rounded-2xl px-3 py-2 text-xs ${
                    count === 0 ? "opacity-55" : ""
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: color }}
                      aria-hidden="true"
                    />
                    <span className="truncate">{label}</span>
                  </span>
                  <span className="shrink-0">
                    {count} · {percentage}%
                  </span>
                </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-sm font-semibold">Topic accuracy</p>
            <p className="text-xs">Weakest first</p>
          </div>

          <div className="space-y-3">
            {submodulePerformance.slice(0, 6).map((submodule) => {
              const barStyle = getPerformanceStyle(submodule.accuracy);

              return (
                <div key={submodule.id}>
                  <div className="mb-1 flex items-center justify-between gap-3 text-xs">
                    <span className="truncate font-semibold">
                      {formatSubmoduleTitle(submodule.title)}
                    </span>
                    <span>
                      {submodule.accuracy}% · {submodule.activeLectures}
                    </span>
                  </div>
                  <div className="analyticsMiniTrack h-2.5 overflow-hidden rounded-full">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        ...barStyle,
                        width: `${submodule.accuracy}%`,
                        backgroundColor: "var(--performance-accent)",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    );
  }

  function openNavigationView(nextView: AppView) {
    setIsNavMenuOpen(false);

    if (nextView === "generator") {
      openGeneratorView();
      return;
    }

    setCurrentView(nextView);
  }

  function updateDashboardDots(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--dashboard-pointer-x",
      `${event.clientX - bounds.left}px`
    );
    event.currentTarget.style.setProperty(
      "--dashboard-pointer-y",
      `${event.clientY - bounds.top}px`
    );
  }

  function clearDashboardDots(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--dashboard-pointer-x", "-12rem");
    event.currentTarget.style.setProperty("--dashboard-pointer-y", "-12rem");
  }

  function toggleThemeMode() {
    setThemeMode((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  }

  function renderHeaderNavigation() {
    const navItems: Array<{ label: string; view: AppView }> = [
      { label: "Question Bank", view: "question-bank" },
      { label: "Practice Paper Mode", view: "practice-paper" },
      { label: "Performance Analytics", view: "progress" },
      { label: "Generator", view: "generator" },
    ];

    return (
      <div className="headerNavLayer fixed inset-0 z-[70]">
        <button
          type="button"
          className="headerNavBackdrop"
          onClick={() => setIsNavMenuOpen(false)}
          aria-label="Close navigation menu"
        />

        <nav
          className="headerNavPanel relative mr-auto flex h-dvh w-full flex-col overflow-y-auto border-r p-4 sm:w-[min(24rem,100vw)] sm:p-5"
          aria-label="Primary navigation"
        >
          <div className="headerNavDrawerHeader mb-5 flex items-center justify-between gap-4">
            <span className="text-sm font-semibold uppercase tracking-[0.14em]">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setIsNavMenuOpen(false)}
              className="headerNavCloseButton inline-flex h-10 w-10 items-center justify-center rounded-2xl"
              aria-label="Close navigation menu"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="m6 6 12 12" />
                <path d="m18 6-12 12" />
              </svg>
            </button>
          </div>

          <div
            className="verticalTabSwitcher relative grid gap-1"
            style={{ "--active-tab-index": verticalNavIndex } as CSSProperties}
          >
            <span className="verticalTabIndicator" aria-hidden="true" />

            {navItems.map((item) => {
              const isActive = currentView === item.view;

              return (
                <button
                  key={item.view}
                  type="button"
                  onClick={() => openNavigationView(item.view)}
                  className={`navPill relative z-10 min-h-12 px-4 py-3 text-center text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-slate-950"
                      : "text-white hover:text-purple-100"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={toggleThemeMode}
            className="themeToggleButton mt-1 flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-3 text-sm transition"
            aria-pressed={themeMode === "light"}
          >
            <span className="font-semibold">Theme</span>
            <span className="flex items-center gap-2">
              <span className="text-xs font-semibold">
                {themeMode === "dark" ? "Dark" : "Light"}
              </span>
              <span
                className={`themeSwitch relative inline-flex h-7 w-12 items-center rounded-full p-1 ${
                  themeMode === "light" ? "isLight" : ""
                }`}
                aria-hidden="true"
              >
                <span className="themeSwitchThumb h-5 w-5 rounded-full" />
              </span>
            </span>
          </button>
        </nav>
      </div>
    );
  }

  return (
    <main className="appCanvas min-h-screen">
      <header className="appHeader border-b border-white/10 text-white">
        <div className="flex flex-col sm:flex-row">
          <div className="relative flex flex-1 items-center gap-3 px-4 py-2.5 sm:min-h-16 sm:px-8 sm:py-2.5">
            <button
              type="button"
              onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
              className="navMenuButton flex h-11 w-11 shrink-0 items-center justify-center"
              aria-label="Open navigation menu"
              aria-expanded={isNavMenuOpen}
            >
              <span className="sr-only">Open navigation menu</span>
              <span className="hamburgerIcon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>

            <div className="min-w-0">
              <h1 className="brandTitle text-3xl leading-none sm:text-[1.7rem]">
                SBAgen
              </h1>
            </div>

            <div className="ml-auto shrink-0">
              {renderAccountPanel()}
            </div>

            {isNavMenuOpen && renderHeaderNavigation()}
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-97px)] flex-col sm:flex-row">
        <section className="flex-1 p-3 sm:p-8">
          {currentView === "progress"
            ? renderProgressTracker()
            : currentView === "practice-paper"
              ? renderPracticePaperView()
            : currentView === "generator"
              ? renderGeneratorView()
              : activeQuestionSetId
                ? renderActiveQuestionSet()
                : questions.length > 0 && activeQuestionSetTitle
                  ? renderPracticeSession()
                  : renderQuestionBankHome()}
        </section>
      </div>
      {currentView === "question-bank" &&
        activeQuestionSetId &&
        renderFloatingStudyActions()}
      {renderSavePrompt()}
    </main>
  );
}

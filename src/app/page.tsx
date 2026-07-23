"use client";

import {
  type CSSProperties,
  type FormEvent,
  useEffect,
  useMemo,
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

type AppView = "question-bank" | "generator" | "progress";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [questionCountInput, setQuestionCountInput] = useState("5");
  const [questionSliderValue, setQuestionSliderValue] = useState(5);
  const [currentView, setCurrentView] = useState<AppView>("question-bank");
  const [selectedBankSubmoduleId, setSelectedBankSubmoduleId] = useState<
    string | null
  >(null);
  const [questionBankSearch, setQuestionBankSearch] = useState("");
  const [expandedBankModules, setExpandedBankModules] = useState<
    Record<string, boolean>
  >({});
  const [isResumePanelOpen, setIsResumePanelOpen] = useState(true);
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
    setSelectedAnswers({});
    setMarkedAnswers({});
    setShowResults(false);
    setActiveQuestionSetId(null);
    setActiveQuestionSetTitle(null);
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
    setQuestions(questionSet.questions);
    setSelectedAnswers(
      savedAnswersByQuestionSet[questionSet.id]?.selectedAnswers ?? {}
    );
    setMarkedAnswers({});
    setShowResults(false);
    setError("");
    setActiveQuestionSetId(questionSet.id);
    setActiveQuestionSetTitle(questionSet.title);
    setQuestionBankSearch("");
    setCurrentView("question-bank");
  }

  function startRetestFramework(questionSet: QuestionSet) {
    loadQuestionSet(questionSet);
  }

  function returnToQuestionBankHome() {
    autosaveActiveLectureAnswers();
    setQuestions([]);
    setSelectedAnswers({});
    setMarkedAnswers({});
    setShowResults(false);
    setError("");
    setActiveQuestionSetId(null);
    setActiveQuestionSetTitle(null);
    setSelectedBankSubmoduleId(null);
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
    setSelectedAnswers({});
    setMarkedAnswers({});
    setShowResults(false);
    setError("");
    setActiveQuestionSetId(null);
    setActiveQuestionSetTitle(null);
    setSelectedBankSubmoduleId(parentSubmodule.id);
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
    if (!user) {
      promptSignInForGenerator();
      return;
    }

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

    if (!activeQuestionSetId) return;

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
    currentView === "question-bank" ? 0 : currentView === "progress" ? 1 : 2;
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
    return (
      <section className="mx-auto max-w-5xl space-y-6">
        <div className="surfaceCard p-5 sm:p-8">
          <h2 className="text-2xl font-bold leading-tight text-slate-950 sm:text-4xl">
            Generate SBA Questions
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Use this when you want extra practice beyond the question bank.
          </p>

          {!user && (
            <p className="mt-4 rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-950">
              Sign in to use the question generator.
            </p>
          )}

          <textarea
            value={lectureNotes}
            onChange={(e) => setLectureNotes(e.target.value)}
            className="mt-6 h-56 w-full rounded-2xl border border-slate-200 bg-white/80 p-4 text-slate-950 shadow-inner outline-none transition placeholder:text-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 sm:h-72"
            placeholder="Paste lecture notes or transcript here..."
          />

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
            className="primaryButton mt-5 w-full px-6 py-3 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {loading ? "Generating..." : "Generate Questions"}
          </button>

          {error && (
            <p className="mt-4 rounded-2xl bg-rose-50 p-3 text-rose-700">
              {error}
            </p>
          )}
        </div>

        {questions.length > 0 && !activeQuestionSetId && (
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
      <div className="mt-6 rounded-3xl border border-white/[0.16] bg-white/[0.06] p-3 shadow-[0_0_34px_rgba(124,58,237,0.16)]">
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
            {lectureSearchResults.length === 0 ? (
              <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                No matching lectures found.
              </p>
            ) : (
              lectureSearchResults.map(
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
                      {moduleTitle} | {submoduleTitle} |{" "}
                      {questionSet.questions.length} questions
                    </span>
                  </button>
                )
              )
            )}
          </div>
        )}
      </div>
    );
  }

  function renderResumeLectures() {
    if (!user) return null;

    const lecturesToResume = inProgressLectures.slice(0, 4);

    if (lecturesToResume.length === 0) return null;

    return (
      <section className="resumePanel mt-5 p-4 sm:p-5">
        <button
          type="button"
          onClick={() => setIsResumePanelOpen(!isResumePanelOpen)}
          className="group flex w-full items-center justify-between gap-4 text-left"
          aria-expanded={isResumePanelOpen}
        >
          <div className="min-w-0">
            <h3 className="text-xl font-semibold text-purple-100">
              Questions in progress
            </h3>
            <p className="mt-1 text-sm text-purple-200/75">
              Pick up where you left off |{" "}
              {lecturesToResume.length}{" "}
              {lecturesToResume.length === 1 ? "lecture" : "lectures"}
            </p>
          </div>
          <span
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/8 text-lg font-semibold leading-none text-purple-100 transition group-hover:border-purple-200/40 group-hover:bg-purple-300/12"
            aria-hidden="true"
          >
            {isResumePanelOpen ? "-" : "+"}
          </span>
        </button>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            isResumePanelOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-4 grid gap-3 lg:grid-cols-2">
              {lecturesToResume.map((lecture) => (
                <button
                  key={lecture.questionSet.id}
                  type="button"
                  onClick={() => loadQuestionSet(lecture.questionSet)}
                  className="resumeLectureCard rounded-3xl p-4 text-left transition"
                >
                  <div className="resumeLectureHeader flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h4 className="resumeLectureTitle text-sm font-semibold text-purple-50 sm:text-base">
                        {lecture.questionSet.title}
                      </h4>
                      <p className="resumeLectureMeta mt-1 text-xs text-purple-200/70">
                        {lecture.moduleTitle} | {lecture.submoduleTitle}
                      </p>
                    </div>

                    <span className="resumePercentPill shrink-0 rounded-full px-3 py-1 text-xs font-semibold">
                      {lecture.percent}%
                    </span>
                  </div>

                  <div className="mt-4">
                    {renderProgressMeter(lecture.percent)}
                  </div>

                  <div className="mt-3 text-xs text-purple-200/70">
                    {lecture.answered}/{lecture.total} answered
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  function renderQuestionBankHome() {
    return (
      <div className="mx-auto max-w-6xl">
        <div className="space-y-6">
          <section className="questionBankHero p-5 sm:p-7">
            <div>
              <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(27rem,0.9fr)] lg:items-center">
                <div>
                  <h2 className="text-4xl font-semibold leading-none text-purple-100 sm:text-5xl">
                    Question Bank
                  </h2>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-purple-200/80">
                    Choose a module and answer its lecture questions.
                  </p>
                </div>

                <div className="quietStat questionBankStatsPill grid min-h-16 w-full grid-cols-3 overflow-hidden rounded-full lg:min-h-20">
                  <div className="quietStatSegment flex min-w-0 items-center justify-center gap-2 px-3 py-2 sm:px-4 lg:py-4">
                    <span className="text-lg font-semibold text-purple-50 sm:text-2xl">
                      {bankStats.totalSubmodules}
                    </span>
                    <span className="text-xs font-medium text-purple-200 sm:text-sm">
                      Submodules
                    </span>
                  </div>
                  <div className="quietStatSegment flex min-w-0 items-center justify-center gap-2 px-3 py-2 sm:px-4 lg:py-4">
                    <span className="text-lg font-semibold text-purple-50 sm:text-2xl">
                      {bankStats.totalLectures}
                    </span>
                    <span className="text-xs font-medium text-purple-200 sm:text-sm">
                      Lectures
                    </span>
                  </div>
                  <div className="quietStatSegment flex min-w-0 items-center justify-center gap-2 px-3 py-2 sm:px-4 lg:py-4">
                    <span className="text-lg font-semibold text-purple-50 sm:text-2xl">
                      {bankStats.totalQuestions}
                    </span>
                    <span className="text-xs font-medium text-purple-200 sm:text-sm">
                      Questions
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
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

              <button
                type="button"
                onClick={() => setCurrentView("progress")}
                className="performanceShortcut inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition lg:w-auto"
              >
                <span>View Your Performance</span>
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
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </button>
            </div>

            {!normalizedQuestionBankSearch &&
              !selectedBankSubmodule &&
              renderResumeLectures()}

          </section>

          {normalizedQuestionBankSearch ? (
            <section className="surfaceCard p-5 sm:p-6">
              <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
                Lecture Search Results
              </h2>

              {lectureSearchResults.length === 0 ? (
                <p className="mt-3 text-slate-600">
                  No matching lectures found.
                </p>
              ) : (
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
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
                              {moduleTitle} | {submoduleTitle}
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
              )}
            </section>
          ) : selectedBankSubmodule ? (
            <section className="surfaceCard p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
                    {selectedBankSubmodule.title}
                  </h2>
                  <p className="mt-2 text-slate-600">
                    Choose a lecture to start answering its saved questions.
                  </p>
                </div>

                <button
                  onClick={() => setSelectedBankSubmoduleId(null)}
                  className="secondaryButton flex w-full items-center justify-center gap-2 px-5 py-3 font-semibold text-slate-900 transition sm:w-auto"
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
                          {isExpanded ? "-" : "+"}
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
                                      {submodule.title}
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

  function renderActiveQuestionSet() {
    const answeredCount = Object.keys(selectedAnswers).length;

    return (
      <section className="surfaceCard mx-auto max-w-5xl p-5 pb-28 sm:p-8 sm:pb-24">
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

        {renderActiveLectureSearch()}
        {renderQuestionList()}
      </section>
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
              {topic.submoduleTitle}
            </p>
            <h4 className="mt-2 leading-snug">{topic.questionSet.title}</h4>
          </div>

          <div className="shrink-0 sm:border-l sm:border-slate-200/70 sm:pl-4">
            {canRetest ? (
              <button
                type="button"
                onClick={() => startRetestFramework(topic.questionSet)}
                className="primaryButton inline-flex min-h-9 w-full items-center justify-center px-4 py-2 text-sm font-semibold text-white transition sm:w-auto"
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
                      {submodule.title.replace(" Question Bank", "")}
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

  function renderHeaderNavigation() {
    const navItems: Array<{ label: string; view: AppView }> = [
      { label: "Question Bank", view: "question-bank" },
      { label: "Performance Analytics", view: "progress" },
      { label: "Generator", view: "generator" },
    ];

    return (
      <div className="headerNavLayer absolute left-0 top-full z-[70]">
        <div
          className="verticalTabSwitcher relative grid w-64 gap-1 overflow-hidden rounded-b-3xl border-x border-b p-1"
          style={{ "--active-tab-index": verticalNavIndex } as CSSProperties}
        >
          <span className="verticalTabIndicator" aria-hidden="true" />

          {navItems.map((item) => {
            const isActive = currentView === item.view;
            const isLockedGenerator = item.view === "generator" && !user;

            return (
              <button
                key={item.view}
                type="button"
                onClick={() => openNavigationView(item.view)}
                className={`navPill relative z-10 min-h-12 px-4 py-3 text-center text-sm transition-colors duration-300 ${
                  isActive
                    ? "text-slate-950"
                    : isLockedGenerator
                      ? "text-white/50"
                      : "text-white hover:text-purple-100"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
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
            : currentView === "generator"
              ? renderGeneratorView()
              : activeQuestionSetId
                ? renderActiveQuestionSet()
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

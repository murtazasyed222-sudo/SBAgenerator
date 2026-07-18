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
  "#0f766e",
  "#2563eb",
  "#b7791f",
  "#475569",
];

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

export default function Home() {
  const [lectureNotes, setLectureNotes] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [isQuestionBankOpen, setIsQuestionBankOpen] = useState(true);
  const [isMobileQuestionBankOpen, setIsMobileQuestionBankOpen] =
    useState(false);
  const [currentView, setCurrentView] = useState<AppView>("question-bank");
  const [selectedBankSubmoduleId, setSelectedBankSubmoduleId] = useState<
    string | null
  >(null);
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
  const [isSavePromptOpen, setIsSavePromptOpen] = useState(false);
  const [cloudSyncStatus, setCloudSyncStatus] = useState("");
  const [isCloudProgressLoading, setIsCloudProgressLoading] = useState(false);

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

      setProgressByQuestionSet((currentProgress) => {
        const mergedProgress = { ...currentProgress };

        progressRows.forEach((row) => {
          const questionSetId = row.question_set_id;
          const localProgress = mergedProgress[questionSetId];
          const cloudCompletedAt =
            row.completed_at ?? row.updated_at ?? new Date().toISOString();

          mergedProgress[questionSetId] = {
            answered: Math.max(
              localProgress?.answered ?? 0,
              row.answered ?? 0
            ),
            correct: Math.max(localProgress?.correct ?? 0, row.correct ?? 0),
            total: Math.max(localProgress?.total ?? 0, row.total ?? 0),
            completedAt:
              localProgress &&
              Date.parse(localProgress.completedAt) > Date.parse(cloudCompletedAt)
                ? localProgress.completedAt
                : cloudCompletedAt,
          };
        });

        return mergedProgress;
      });

      setSavedAnswersByQuestionSet((currentAnswers) => {
        const mergedAnswers = { ...currentAnswers };

        answersRows.forEach((row) => {
          const questionSetId = row.question_set_id;
          const localAnswers = mergedAnswers[questionSetId];
          const cloudSavedAt =
            row.saved_at ?? row.updated_at ?? new Date().toISOString();

          if (
            !localAnswers ||
            Date.parse(cloudSavedAt) >= Date.parse(localAnswers.savedAt)
          ) {
            mergedAnswers[questionSetId] = {
              selectedAnswers: normalizeSelectedAnswers(row.selected_answers),
              savedAt: cloudSavedAt,
            };
          }
        });

        return mergedAnswers;
      });

      setCloudSyncStatus("Cloud progress loaded.");
      setIsCloudProgressLoading(false);
    }

    loadCloudStudyData();

    return () => {
      isMounted = false;
    };
  }, [supabase, user]);

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

    setAuthLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setProgressByQuestionSet({});
    setSavedAnswersByQuestionSet({});
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

  function toggleQuestionBankFolder(folderId: string) {
    setExpandedQuestionBankFolders({
      ...expandedQuestionBankFolders,
      [folderId]: !expandedQuestionBankFolders[folderId],
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
    setIsQuestionBankOpen(true);
    setIsMobileQuestionBankOpen(false);
    setQuestions(questionSet.questions);
    setSelectedAnswers(
      savedAnswersByQuestionSet[questionSet.id]?.selectedAnswers ?? {}
    );
    setMarkedAnswers({});
    setShowResults(false);
    setError("");
    setActiveQuestionSetId(questionSet.id);
    setActiveQuestionSetTitle(questionSet.title);
    setCurrentView("question-bank");
  }

  function returnToGenerator() {
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
    setIsMobileQuestionBankOpen(false);
    setCurrentView("question-bank");
  }

  function openSubmodule(submoduleId: string) {
    setCurrentView("question-bank");
    setSelectedBankSubmoduleId(submoduleId);
    setActiveQuestionSetId(null);
    setActiveQuestionSetTitle(null);
    setExpandedQuestionBankFolders({
      ...expandedQuestionBankFolders,
      "physiology-and-anatomy-of-systems": true,
      [submoduleId]: true,
    });
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
      setIsMobileQuestionBankOpen(false);
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
  const activeTabIndex =
    currentView === "question-bank" ? 0 : currentView === "progress" ? 1 : 2;

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
  const lectureSearchResults = normalizedQuestionBankSearch
    ? bankStats.submodules.flatMap((submodule) =>
        submodule.questionSets
          .filter((questionSet) =>
            questionSet.title.toLowerCase().includes(normalizedQuestionBankSearch)
          )
          .map((questionSet) => ({ questionSet, submoduleTitle: submodule.title }))
      )
    : [];

  function renderProgressMeter(percent: number) {
    return (
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200/80 shadow-inner">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all duration-500"
          style={{ width: `${Math.min(percent, 100)}%` }}
        />
      </div>
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
      <div className="relative flex flex-col items-end">
        <button
          type="button"
          onClick={() => setIsAuthMenuOpen(!isAuthMenuOpen)}
          className="headerAccountButton"
          aria-expanded={isAuthMenuOpen}
        >
          Sign in
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
              Sign in to save and track progress
            </p>
            {isGeneratorAuthPrompt && (
              <p className="mt-1 text-sm font-bold text-teal-700">
                Sign in to use Question Generator.
              </p>
            )}
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
        <div className="relative w-full max-w-sm rounded-[1.75rem] border border-white/70 bg-white p-6 shadow-2xl">
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
          className="flex w-full items-center justify-between rounded-xl border border-amber-300/10 bg-white/5 px-3 py-2.5 text-left font-semibold text-slate-100 transition hover:bg-amber-300/14"
        >
          <span>{folder.title}</span>
          <span
            className={`ml-3 text-amber-300 transition-transform duration-300 ${
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
                <p className="rounded-xl bg-white/10 px-3 py-2 text-sm text-slate-300">
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
                        className={`block w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                          activeQuestionSetId === questionSet.id
                            ? "bg-amber-300 text-slate-950 shadow-sm"
                            : "text-white/85 hover:bg-amber-300/14 hover:text-white"
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

  function renderQuestionBankBrowser(isMobile = false) {
    return (
      <nav className="space-y-3">
        {isMobile && (
          <button
            onClick={() => setIsMobileQuestionBankOpen(false)}
            className="mb-2 flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 font-bold text-slate-950 shadow-sm transition hover:bg-amber-100"
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
            Back to questions
          </button>
        )}

        <input
          type="search"
          value={questionBankSearch}
          onChange={(event) => setQuestionBankSearch(event.target.value)}
          placeholder="Search lectures..."
          className="w-full rounded-2xl border border-white/10 bg-white/10 px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/30"
        />

        {visibleQuestionBankFolders.length === 0 && (
          <p className="rounded-xl bg-white/10 px-3 py-2 text-sm text-slate-300">
            No matching lecture sets.
          </p>
        )}

        {visibleQuestionBankFolders.map((folder) =>
          renderQuestionBankFolder(folder)
        )}
      </nav>
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
                                ? "border-teal-600 bg-teal-50 text-slate-950"
                                : "border-teal-200 bg-teal-50/35 text-slate-800 hover:bg-teal-50"
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
            Use this when you want extra practice beyond the permanent question
            bank.
          </p>

          {!user && (
            <p className="mt-4 rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-950">
              Sign in to use the question generator.
            </p>
          )}

          <textarea
            value={lectureNotes}
            onChange={(e) => setLectureNotes(e.target.value)}
            className="mt-6 h-56 w-full rounded-2xl border border-slate-200 bg-white/80 p-4 text-slate-950 shadow-inner outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 sm:h-72"
            placeholder="Paste lecture notes or transcript here..."
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
      <div className="studyDock fixed bottom-3 right-3 z-30 w-fit max-w-[calc(100vw-1.5rem)] px-3 py-2 sm:bottom-5 sm:right-5">
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

  function renderQuestionBankHome() {
    return (
      <div className="mx-auto max-w-6xl">
        <div className="space-y-6">
          <section className="surfaceCard p-5 sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold leading-tight text-slate-950 sm:text-4xl">
                  Physiology and Anatomy of Systems
                </h2>
                <p className="mt-3 max-w-3xl text-slate-600">
                  Choose a PAS submodule from the bank, answer its lecture questions,
                  and build progress as you check your answers.
                </p>
              </div>

              <div className="relative w-full lg:w-96">
                <svg
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-teal-700"
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
                  className="w-full rounded-2xl border border-teal-200 bg-white/90 py-3 pl-11 pr-4 text-slate-950 shadow-inner outline-none placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
              <div className="statTile p-3 sm:p-4">
                <p className="text-xl font-bold text-[#0b1f3a] sm:text-2xl">
                  {bankStats.submodules.length}
                </p>
                <p className="text-sm text-slate-600">Submodules</p>
              </div>
              <div className="statTile p-3 sm:p-4">
                <p className="text-xl font-bold text-[#0b1f3a] sm:text-2xl">
                  {bankStats.totalLectures}
                </p>
                <p className="text-sm text-slate-600">Lectures</p>
              </div>
              <div className="statTile p-3 sm:p-4">
                <p className="text-xl font-bold text-[#0b1f3a] sm:text-2xl">
                  {bankStats.totalQuestions}
                </p>
                <p className="text-sm text-slate-600">Questions</p>
              </div>
            </div>

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
                  {lectureSearchResults.map(({ questionSet, submoduleTitle }, index) => {
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
                              {submoduleTitle}
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
                  Back to PAS submodules
                </button>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {selectedBankSubmodule.questionSets.map(renderLectureCard)}
              </div>
            </section>
          ) : (
            <section className="grid gap-4 lg:grid-cols-2">
              {bankStats.submodules.map((submodule, index) => {
                const progress = getSubmoduleProgress(submodule);

                return (
                  <button
                    key={submodule.id}
                    onClick={() => openSubmodule(submodule.id)}
                    className="interactiveCard p-4 text-left transition hover:-translate-y-0.5 sm:p-5"
                    style={getAccentStyle(index)}
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
            {!user && (
              <p className="mt-2 rounded-full bg-amber-100 px-3 py-1.5 text-sm font-bold text-amber-950">
                Sign in to save and track progress.
              </p>
            )}
          </div>

          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <button
              onClick={() => setIsMobileQuestionBankOpen(true)}
              className="primaryButton flex w-full items-center justify-center gap-2 px-5 py-3 font-semibold text-white transition sm:hidden"
            >
              Browse Question Bank
            </button>

            <button
              onClick={returnToGenerator}
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
              Back to PAS submodules
            </button>
          </div>
        </div>

        {renderQuestionList()}
        {renderFloatingStudyActions()}
      </section>
    );
  }

  function renderProgressTracker() {
    return (
      <section className="mx-auto max-w-6xl space-y-6">
        <div className="surfaceCard p-5 sm:p-8">
          <h2 className="text-2xl font-bold leading-tight text-slate-950 sm:text-4xl">
            PAS Question Bank Progress
          </h2>
          {!user && (
            <p className="mt-3 text-slate-600">
              Sign in to save and track progress.
            </p>
          )}

          <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4">
            <div className="statTile p-3 sm:p-4">
              <p className="text-xl font-bold text-[#0b1f3a] sm:text-2xl">
                {overallProgressPercent}%
              </p>
              <p className="text-sm text-slate-600">Question progress</p>
            </div>
            <div className="statTile p-3 sm:p-4">
              <p className="text-xl font-bold text-[#0b1f3a] sm:text-2xl">
                {overallAnswered}/{bankStats.totalQuestions}
              </p>
              <p className="text-sm text-slate-600">Answered</p>
            </div>
            <div className="statTile p-3 sm:p-4">
              <p className="text-xl font-bold text-[#0b1f3a] sm:text-2xl">
                {overallCorrect}
              </p>
              <p className="text-sm text-slate-600">Best correct answers</p>
            </div>
          </div>

          <div className="mt-5">{renderProgressMeter(overallProgressPercent)}</div>
        </div>

        <div className="space-y-4">
          {bankStats.submodules.map((submodule, index) => {
            const submoduleProgress = getSubmoduleProgress(submodule);

            return (
              <article
                key={submodule.id}
                className="surfaceCard p-5"
                style={getAccentStyle(index)}
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
                  <span className="rounded-full bg-white/75 px-3 py-1 text-sm font-semibold text-slate-800 shadow-sm">
                    {submoduleProgress.percent}%
                  </span>
                </div>

                <div className="mt-4">
                  {renderProgressMeter(submoduleProgress.percent)}
                </div>

                <div className="mt-5 space-y-3">
                  {submodule.questionSets.map((questionSet, lectureIndex) => {
                    const lectureProgress = getQuestionSetProgress(questionSet);

                    return (
                      <button
                        key={questionSet.id}
                        onClick={() => loadQuestionSet(questionSet)}
                        className="interactiveCard w-full p-4 text-left transition hover:-translate-y-0.5"
                        style={getAccentStyle(lectureIndex)}
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
                          <span className="rounded-full bg-white/75 px-3 py-1 text-sm font-semibold text-slate-800 shadow-sm">
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
    <main className="appCanvas min-h-screen">
      <header className="appHeader border-b border-white/10 text-white">
        <div className="flex flex-col sm:flex-row">
          {currentView === "question-bank" && activeQuestionSetId && (
            <div className="headerRail hidden w-full shrink-0 border-b border-white/10 sm:block sm:w-72 sm:border-b-0 sm:border-r lg:w-1/6">
              <button
                onClick={() => {
                  setIsQuestionBankOpen(!isQuestionBankOpen);
                  setCurrentView("question-bank");
                }}
                aria-expanded={isQuestionBankOpen}
                className="flex min-h-24 w-full items-center justify-between bg-amber-300/10 px-5 py-4 text-left font-semibold text-white transition hover:bg-amber-300/16"
              >
                <span>Browse Question Bank</span>
                <span className="text-amber-200" aria-hidden="true">
                  {isQuestionBankOpen ? "v" : ">"}
                </span>
              </button>
            </div>
          )}

          <div className="relative grid flex-1 gap-3 px-4 py-4 sm:min-h-24 sm:px-8 sm:py-4 xl:grid-cols-[minmax(12rem,1fr)_minmax(24rem,31rem)_minmax(18rem,1fr)] xl:items-center">
            <div className="min-w-0 pr-28 xl:pr-0">
              <h1 className="text-3xl font-bold leading-none text-white sm:text-3xl">
                SBAgen
              </h1>
              <p className="mt-2 max-w-sm text-sm leading-snug text-slate-300 sm:mt-1">
                Question bank and single-best answer question generator
              </p>
            </div>

            <div
              className="tabSwitcher relative grid w-full grid-cols-3 gap-1 overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-1 sm:mx-auto sm:w-[31rem] sm:rounded-full xl:col-start-2 xl:row-start-1"
              style={{ "--active-tab-index": activeTabIndex } as CSSProperties}
            >
              <span className="tabIndicator" aria-hidden="true" />

              <button
                onClick={() => setCurrentView("question-bank")}
                className={`navPill relative z-10 px-2 py-2.5 text-center text-sm font-semibold transition-colors duration-300 sm:px-4 ${
                  currentView === "question-bank"
                    ? "text-slate-950"
                    : "text-white hover:text-amber-200"
                }`}
              >
                <span className="sm:hidden">Bank</span>
                <span className="hidden sm:inline">Question Bank</span>
              </button>

              <button
                onClick={() => setCurrentView("progress")}
                className={`navPill relative z-10 px-2 py-2.5 text-center text-sm font-semibold transition-colors duration-300 sm:px-4 ${
                  currentView === "progress"
                    ? "text-slate-950"
                    : "text-white hover:text-amber-200"
                }`}
              >
                <span className="sm:hidden">Progress</span>
                <span className="hidden sm:inline">Progress Tracker</span>
              </button>

              <button
                onClick={openGeneratorView}
                className={`navPill relative z-10 px-2 py-2.5 text-center text-sm font-semibold transition-colors duration-300 sm:px-4 ${
                  currentView === "generator"
                    ? "text-slate-950"
                    : user
                      ? "text-white hover:text-amber-200"
                      : "text-white/50"
                }`}
              >
                Generator
              </button>
            </div>

            <div className="absolute right-4 top-4 z-20 xl:static xl:col-start-3 xl:row-start-1 xl:justify-self-end">
              {renderAccountPanel()}
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-97px)] flex-col sm:flex-row">
        {currentView === "question-bank" && activeQuestionSetId && isQuestionBankOpen && (
          <aside className="questionBankPanel questionBankScroll hidden w-full shrink-0 overflow-y-auto border-b border-white/10 p-4 sm:sticky sm:top-0 sm:block sm:h-screen sm:w-72 sm:border-b-0 sm:border-r lg:w-1/6">
            {renderQuestionBankBrowser()}
          </aside>
        )}

        {currentView === "question-bank" &&
          activeQuestionSetId &&
          isMobileQuestionBankOpen && (
          <aside className="questionBankPanel questionBankScroll fixed inset-0 z-[90] h-dvh w-screen overflow-y-auto p-4 sm:hidden">
            {renderQuestionBankBrowser(true)}
          </aside>
        )}

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
      {renderSavePrompt()}
    </main>
  );
}

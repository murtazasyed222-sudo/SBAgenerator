export type Question = {
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correctAnswer: string;
  explanation: string;
};

export type QuestionSet = {
  id: string;
  title: string;
  questions: Question[];
};

export type QuestionBankFolder = {
  id: string;
  title: string;
  questionSets: QuestionSet[];
};

export const questionBankFolders: QuestionBankFolder[] = [
  {
    id: "foundations-of-biomedical-science",
    title: "Foundations of Biomedical Science",
    questionSets: [],
  },
  {
    id: "anatomy-and-physiology",
    title: "Anatomy and Physiology",
    questionSets: [],
  },
];

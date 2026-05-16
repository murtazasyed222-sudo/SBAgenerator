"use client";

import { useState } from "react";

type Question = {
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

export default function Home() {
  const [lectureNotes, setLectureNotes] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);

  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>(
    {}
  );

  const [showResults, setShowResults] = useState(false);

  async function generateQuestions() {
    setLoading(true);
    setError("");
    setQuestions([]);
    setSelectedAnswers({});
    setShowResults(false);

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

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-gray-900">
          Medicine Question Generator
        </h1>

        <p className="mt-3 text-gray-600">
          Paste lecture notes below and generate exam-style SBA questions.
        </p>

        <textarea
          value={lectureNotes}
          onChange={(e) => setLectureNotes(e.target.value)}
          className="mt-6 h-64 w-full rounded-xl border border-gray-300 p-4 text-gray-900"
          placeholder="Paste lecture notes here..."
        />
        
        <div className="mt-4 w-full max-w-xl">
          <label className="mb-2 block font-semibold text-black">
            Number of questions: {numberOfQuestions}
          </label>

          <input
            type="range"
            min="1"
            max="10"
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
            className="mt-4 rounded-xl bg-black px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Questions"}
          </button>
        </div>

        {error && (
          <p className="mt-4 rounded-lg bg-red-50 p-3 text-red-700">
            {error}
          </p>
        )}

        <div className="mt-8 space-y-6">
          {questions.map((q, questionIndex) => (
            <div
              key={questionIndex}
              className="rounded-xl border border-gray-200 p-5"
            >
              <h2 className="font-semibold text-gray-900">
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
                      className={`block w-full rounded-lg border p-3 text-left transition ${
                        isCorrectSelected
                          ? "border-green-500 bg-green-100 text-green-900"
                          : isWrongSelected
                          ? "border-red-500 bg-red-100 text-red-900"
                          : shouldShowCorrectAnswer
                          ? "border-green-500 bg-green-50 text-green-900"
                          : isSelected
                          ? "border-blue-500 bg-blue-100 text-blue-900"
                          : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="font-semibold">{letter}.</span>{" "}
                      {option}
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <div className="mt-4 rounded-lg bg-gray-50 p-3 text-gray-800">
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
            className="mt-8 rounded-xl bg-green-500 px-5 py-3 font-semibold text-white"
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
              className="rounded-xl bg-gray-200 px-5 py-3 font-semibold text-gray-900"
            >
              Try Again
            </button>

            <button
              onClick={exportWrongQuestionsToAnkiCSV}
              disabled={wrongQuestions.length === 0}
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              Export {wrongQuestions.length} Wrong Questions to Anki
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
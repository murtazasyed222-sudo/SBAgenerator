import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

function getErrorStatus(error: unknown) {
  if (typeof error !== "object" || error === null || !("status" in error)) {
    return undefined;
  }

  return error.status;
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;

  return "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const lectureNotes = body.lectureNotes;
    const numberOfQuestions = body.numberOfQuestions || 5;

    if (!lectureNotes || typeof lectureNotes !== "string") {
      return NextResponse.json(
        { error: "Lecture notes are required." },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key is missing." },
        { status: 500 }
      );
    }

    const prompt = `
You are an expert medical school question writer.

Create difficult, exam-style single best answer questions from lecture notes or a transcript.

Rules:
- Create exactly ${numberOfQuestions} questions.
- Each question must have options A, B, C, D, and E.
- Make the distractors plausible.
- Make the questions difficult.
- Include the correct answer.
- Include a clear explanation.
- All answer options must be similar in length, detail, grammar, and style.
- Do not make the correct answer longer than the distractors.
- Do not make the distractors vague while the correct answer is precise.
- If the correct option is a list, make every option a similarly structured list.
- Distractors must be from the same conceptual category as the correct answer.
- The vast majority of questions should require reasoning, not just recall.
- If the notes include equations, create questions that require the user to use the equations to solve problems.
- Include common misconceptions as distractors where appropriate.
- Each stem must contain enough context to make the question answerable without seeing the lecture notes.
- Avoid words like "alone" and "directly" unless absolutely necessary, as they can be a giveaway.
- Return only valid JSON. No markdown.

Return exactly this JSON structure:

{
  "questions": [
    {
      "question": "Question text",
      "options": {
        "A": "Option A",
        "B": "Option B",
        "C": "Option C",
        "D": "Option D",
        "E": "Option E"
      },
      "correctAnswer": "A",
      "explanation": "Explanation"
    }
  ]
}

Lecture notes:
${lectureNotes}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text ?? "";

    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsed;

    try {
      parsed = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error("Gemini returned invalid JSON:", parseError, cleanedText);

      return NextResponse.json(
        {
          error:
            "Gemini replied, but not in the question format the app expected. Try fewer questions or a shorter transcript.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(parsed);
  } catch (error: unknown) {
    console.error("Gemini generation failed:", error);

    const errorStatus = getErrorStatus(error);
    const errorMessage = getErrorMessage(error).toLowerCase();

    if (errorStatus === 429) {
      return NextResponse.json(
        {
          error:
            "Gemini quota exceeded. Try again later, reduce the number of questions, use shorter notes, or switch to another model/API provider.",
        },
        { status: 429 }
      );
    }

    if (errorMessage.includes("reported as leaked")) {
      return NextResponse.json(
        {
          error:
            "Gemini rejected this API key because it was reported as leaked. Create a new Gemini API key, update your environment variables, then restart the server.",
        },
        { status: 403 }
      );
    }

    if (errorStatus === 403) {
      return NextResponse.json(
        {
          error:
            "Gemini rejected the API key permissions. Check the key is enabled for the Gemini API.",
        },
        { status: 403 }
      );
    }

    if (errorStatus === 400 || errorMessage.includes("api key")) {
      return NextResponse.json(
        {
          error:
            "Gemini rejected the request. Check that your Gemini API key is valid, then restart the local server.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error:
          "Failed to generate questions using Gemini. Try fewer questions or a shorter transcript.",
      },
      { status: 500 }
    );
  }
}

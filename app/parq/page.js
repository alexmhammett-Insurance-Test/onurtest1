"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: "heart",
    text: "Has a doctor ever said you have a heart condition and you should only do physical activity recommended by a doctor?",
  },
  {
    id: "chest-activity",
    text: "Do you feel pain in your chest when you do physical activity?",
  },
  {
    id: "chest-rest",
    text: "In the past month, have you had chest pain when you were not doing physical activity?",
  },
  {
    id: "dizziness",
    text: "Do you lose your balance because of dizziness or do you ever lose consciousness?",
  },
  {
    id: "joints",
    text: "Do you have a bone or joint problem that could be made worse by a change in your physical activity?",
  },
  {
    id: "medication",
    text: "Is your doctor currently prescribing drugs (for example, water pills) for your blood pressure or heart condition?",
  },
  {
    id: "other",
    text: "Do you know of any other reason why you should not do physical activity?",
  },
];

export default function ParqPage() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const current = questions[step];
  const total = questions.length;
  const progress = Math.round(((step + 1) / total) * 100);

  function handleAnswer(value) {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
    if (step < total - 1) {
      setStep((s) => s + 1);
    } else {
      setSubmitted(true);
    }
  }

  function goBack() {
    if (step > 0) {
      setStep((s) => s - 1);
      setSubmitted(false);
    }
  }

  const yesCount = Object.values(answers).filter((a) => a === "yes").length;

  if (submitted) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 px-6 py-12 text-white">
        <div className="w-full max-w-sm rounded-3xl bg-white/5 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur">
          <h2 className="mb-4 text-2xl font-semibold">
            {yesCount > 0 ? "Let’s review your answers" : "You’re all set"}
          </h2>
          <p className="mb-6 text-zinc-300">
            {yesCount > 0
              ? `You answered “Yes” to ${yesCount} question${yesCount === 1 ? "" : "s"}. Your trainer will review this with you before your first session.`
              : "You answered “No” to all questions. You’re ready to start training safely."}
          </p>

          <div className="mb-8 space-y-3">
            {questions.map((q, i) => (
              <div
                key={q.id}
                className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm"
              >
                <span className="flex-1 pr-4 text-zinc-300">{i + 1}. {q.text}</span>
                <span
                  className={`shrink-0 rounded-lg px-2 py-1 text-xs font-semibold ${
                    answers[q.id] === "yes"
                      ? "bg-rose-500/20 text-rose-300"
                      : "bg-emerald-500/20 text-emerald-300"
                  }`}
                >
                  {answers[q.id] === "yes" ? "Yes" : "No"}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(0);
                setAnswers({});
              }}
              className="w-full rounded-2xl bg-white/10 px-6 py-4 text-base font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/15"
            >
              Start over
            </button>
            <Link
              href="/"
              className="text-center text-sm text-zinc-400 hover:text-white"
            >
              Back to welcome
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 px-6 py-12 text-white">
      <div className="w-full max-w-sm rounded-3xl bg-white/5 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur">
        <div className="mb-6 flex items-center justify-between text-sm text-zinc-400">
          <span>Question {step + 1} of {total}</span>
          <span>{progress}%</span>
        </div>
        <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <h2 className="mb-8 text-xl font-medium leading-snug">
          {current.text}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleAnswer("yes")}
            className="rounded-2xl bg-rose-500 px-4 py-4 text-base font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:scale-[1.02] hover:bg-rose-400 active:scale-[0.98]"
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer("no")}
            className="rounded-2xl bg-emerald-500 px-4 py-4 text-base font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02] hover:bg-emerald-400 active:scale-[0.98]"
          >
            No
          </button>
        </div>

        {step > 0 && (
          <button
            onClick={goBack}
            className="mt-6 w-full text-center text-sm text-zinc-400 hover:text-white"
          >
            Back
          </button>
        )}
      </div>
    </main>
  );
}

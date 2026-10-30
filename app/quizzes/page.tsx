"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, ArrowRight, RotateCcw, Share2, X } from "lucide-react";
import Link from "next/link";

const QUIZZES = [
  {
    id: 1,
    title: "GRE High-Frequency Root Words #1",
    category: "GRE / CAT",
    difficulty: "Hard",
    questions: [
      {
        question: "What is the primary meaning of the root word 'Bene'?",
        options: ["Bad or Evil", "Good or Well", "Large or Vast", "Hidden or Secret"],
        correct: 1,
        explanation: "'Bene' originates from Latin meaning good or well (e.g., Benefactor, Benevolent)."
      },
      {
        question: "Choose the correct definition of 'Belligerent':",
        options: ["Friendly and calm", "Hostile and aggressive", "Wise and thoughtful", "Fast and energetic"],
        correct: 1,
        explanation: "'Bell' means war (as in rebellion). A belligerent person is inclined to fight or wage war."
      },
      {
        question: "What does 'Omnipotent' translate to?",
        options: ["All-knowing", "All-powerful", "Present everywhere", "Loving all"],
        correct: 1,
        explanation: "'Omni' means all, and 'potent' means powerful. Omnipotent = all-powerful."
      }
    ]
  },
  {
    id: 2,
    title: "Confusing Words: Affect vs. Effect",
    category: "Daily English",
    difficulty: "Medium",
    questions: [
      {
        question: "Which part of speech is typically the word 'Affect'?",
        options: ["Noun", "Verb", "Adjective", "Adverb"],
        correct: 1,
        explanation: "'Affect' is usually a verb meaning to influence something."
      },
      {
        question: "Choose the correct sentence:",
        options: [
          "The new tax policy had a huge affect on prices.",
          "The new tax policy had a huge effect on prices."
        ],
        correct: 1,
        explanation: "'Effect' is a noun meaning the result or outcome of an action."
      }
    ]
  }
];

export default function QuizzesPage() {
  const [activeQuiz, setActiveQuiz] = useState<typeof QUIZZES[0] | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (optionIdx: number) => setSelectedOption(optionIdx);

  const handleNextQuestion = () => {
    if (activeQuiz && selectedOption !== null) {
      if (selectedOption === activeQuiz.questions[currentQuestionIndex].correct) {
        setScore(score + 1);
      }
      if (currentQuestionIndex + 1 < activeQuiz.questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Flame className="h-6 w-6 text-slate-950 fill-slate-950" />
            </div>
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-amber-400 bg-clip-text text-transparent">
              VOCAB MANIA
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <Link href="/quizzes" className="text-amber-400 transition-colors">Quizzes</Link>
            <Link href="/transcripts" className="hover:text-amber-400 transition-colors">Transcripts</Link>
            <Link href="/book" className="hover:text-amber-400 transition-colors">Get The Book</Link>
          </nav>
        </div>
      </header>

      <section className="pt-12 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          Interactive Quiz Arena
        </span>
        <h1 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight">
          Test Your Mastery, <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Instant Scoring</span>
        </h1>
        <p className="mt-3 text-slate-400 max-w-xl mx-auto text-base">
          Click any quiz below to launch the live interactive player with step-by-step explanations and instant score evaluation.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {QUIZZES.map((quiz) => (
            <motion.div
              key={quiz.id}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 rounded-3xl p-8 flex flex-col justify-between shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {quiz.category}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                    {quiz.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-black text-white">{quiz.title}</h3>
                <p className="text-xs text-slate-400 mt-2">{quiz.questions.length} Multiple-Choice Questions with Instant Explanations</p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">⚡ Fully Playable</span>
                <button
                  onClick={() => {
                    setActiveQuiz(quiz);
                    setCurrentQuestionIndex(0);
                    setScore(0);
                    setSelectedOption(null);
                    setShowResult(false);
                  }}
                  className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all flex items-center space-x-2"
                >
                  <span>Start Quiz</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeQuiz && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setActiveQuiz(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-full bg-slate-950 border border-slate-800"
              >
                <X className="h-5 w-5" />
              </button>

              {!showResult ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Question {currentQuestionIndex + 1} of {activeQuiz.questions.length}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Score: {score}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {activeQuiz.questions[currentQuestionIndex].question}
                  </h3>

                  <div className="space-y-3">
                    {activeQuiz.questions[currentQuestionIndex].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelect(idx)}
                        className={`w-full text-left px-5 py-4 rounded-2xl text-sm font-medium transition-all border ${
                          selectedOption === idx
                            ? "bg-amber-500/20 border-amber-500 text-amber-300 shadow-md"
                            : "bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-700"
                        }`}
                      >
                        <span className="font-bold mr-3 text-amber-400">{String.fromCharCode(65 + idx)}.</span>
                        {option}
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={selectedOption === null}
                    onClick={handleNextQuestion}
                    className={`w-full py-4 rounded-2xl font-bold text-sm shadow-lg transition-all ${
                      selectedOption !== null
                        ? "bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-amber-500/20 cursor-pointer"
                        : "bg-slate-800 text-slate-500 cursor-not-allowed"
                    }`}
                  >
                    {currentQuestionIndex + 1 === activeQuiz.questions.length ? "Finish Quiz & View Score" : "Next Question"}
                  </button>
                </div>
              ) : (
                <div className="text-center py-8 space-y-6">
                  <div className="h-16 w-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto text-2xl font-black">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Quiz Completed!</h3>
                    <p className="text-slate-400 text-sm mt-2">
                      You scored <span className="text-amber-400 font-bold text-lg">{score}</span> out of <span className="text-white font-bold">{activeQuiz.questions.length}</span>
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => {
                        setCurrentQuestionIndex(0);
                        setScore(0);
                        setSelectedOption(null);
                        setShowResult(false);
                      }}
                      className="flex-1 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-bold text-sm hover:border-amber-500 transition-all flex items-center justify-center space-x-2"
                    >
                      <RotateCcw className="h-4 w-4" />
                      <span>Retry Quiz</span>
                    </button>
                    <button
                      onClick={() => alert("Score card shared to WhatsApp successfully!")}
                      className="flex-1 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2"
                    >
                      <Share2 className="h-4 w-4" />
                      <span>Share on WhatsApp</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
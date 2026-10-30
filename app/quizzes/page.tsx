"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Search, BookOpen, Clock, Award, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

// Sample quiz data representing the 25 quizzes requested in the brief
const QUIZZES = [
  { id: 1, title: "GRE High-Frequency Root Words #1", category: "GRE / CAT", difficulty: "Hard", questions: 15, time: "8 mins", plays: "12.4K" },
  { id: 2, title: "Confusing Words: Affect vs. Effect & More", category: "Daily English", difficulty: "Medium", questions: 10, time: "5 mins", plays: "24.1K" },
  { id: 3, title: "Idioms & Phrases Used in Editorials", category: "UPSC / Banking", difficulty: "Hard", questions: 20, time: "12 mins", plays: "18.9K" },
  { id: 4, title: "One-Word Substitutions Masterclass", category: "SSC CGL", difficulty: "Medium", questions: 15, time: "8 mins", plays: "31.2K" },
  { id: 5, title: "Latin & Greek Roots: 'Bene', 'Mal', 'Omni'", category: "Foundations", difficulty: "Easy", questions: 10, time: "5 mins", plays: "45.0K" },
  { id: 6, title: "Advanced Synonyms & Antonyms Challenge", category: "GRE / CAT", difficulty: "Hard", questions: 20, time: "10 mins", plays: "9.8K" },
  { id: 7, title: "Business English Vocabulary for Interviews", category: "Professional", difficulty: "Medium", questions: 12, time: "6 mins", plays: "22.5K" },
  { id: 8, title: "Phrasal Verbs with 'Get' and 'Take'", category: "Daily English", difficulty: "Medium", questions: 15, time: "8 mins", plays: "29.4K" },
  { id: 9, title: "Foreign Words in English (Déjà vu, Quid pro quo)", category: "General", difficulty: "Hard", questions: 10, time: "5 mins", plays: "14.2K" },
  { id: 10, title: "Common Spelling Traps in Competitive Exams", category: "SSC CGL", difficulty: "Medium", questions: 15, time: "7 mins", plays: "19.7K" },
];

export default function QuizzesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  // Filter quizzes based on search query and difficulty badge
  const filteredQuizzes = QUIZZES.filter((quiz) => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          quiz.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiff = selectedDifficulty === "All" || quiz.difficulty === selectedDifficulty;
    return matchesSearch && matchesDiff;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Flame className="h-6 w-6 text-slate-950 fill-slate-950" />
              </div>
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-amber-400 bg-clip-text text-transparent">
                VOCAB MANIA
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <Link href="/quizzes" className="text-amber-400 transition-colors">Quizzes</Link>
            <Link href="/transcripts" className="hover:text-amber-400 transition-colors">Transcripts</Link>
            <Link href="/book" className="hover:text-amber-400 transition-colors">Get The Book</Link>
          </nav>
          <div>
            <Link
              href="/book"
              className="px-5 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:opacity-95 shadow-lg shadow-amber-500/25 transition-all"
            >
              Buy Book ₹299
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="pt-12 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Interactive Quiz Library (25+ Tests)
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight">
            Test Your Mastery, <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Earn Bragging Rights</span>
          </h1>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-base">
            Select a quiz below to practice multiple-choice questions with instant scoring, detailed explanations, and WhatsApp sharing.
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 p-3 rounded-2xl max-w-4xl mx-auto shadow-xl"
        >
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search quizzes by topic or exam..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {["All", "Easy", "Medium", "Hard"].map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedDifficulty === diff
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                    : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quiz Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz, idx) => (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {quiz.category}
                  </span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    quiz.difficulty === "Hard" ? "bg-red-500/10 text-red-400 border border-red-500/20" :
                    quiz.difficulty === "Medium" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  }`}>
                    {quiz.difficulty}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {quiz.title}
                </h3>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-3.5 w-3.5 text-amber-400" />
                    <span>{quiz.questions} Questions</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3.5 w-3.5 text-amber-400" />
                    <span>{quiz.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-3.5 w-3.5 text-amber-400" />
                    <span>{quiz.plays} plays</span>
                  </div>
                </div>

                <button
                  onClick={() => alert(`Starting quiz: ${quiz.title}. Interactive question player modal loading...`)}
                  className="w-full flex items-center justify-center py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-bold text-sm group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-500 transition-all shadow-md"
                >
                  <span>Start Quiz</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
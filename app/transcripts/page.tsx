"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Search, FileText, Download, Mail, X, CheckCircle2, Play, ExternalLink } from "lucide-react";
import Link from "next/link";

// Sample transcript data matching the channel's YouTube videos
const TRANSCRIPTS = [
  { id: 1, title: "100 Advanced GRE Root Words in 20 Minutes", youtubeId: "dQw4w9WgXcQ", date: "Oct 24, 2026", reads: "8.2K" },
  { id: 2, title: "Stop Using 'Very': 50 Powerful Alternatives", youtubeId: "dQw4w9WgXcQ", date: "Oct 18, 2026", reads: "15.4K" },
  { id: 3, title: "Business English Masterclass for Job Interviews", youtubeId: "dQw4w9WgXcQ", date: "Oct 12, 2026", reads: "11.1K" },
  { id: 4, title: "Confusing Phrasal Verbs Explained with Mnemonics", youtubeId: "dQw4w9WgXcQ", date: "Oct 05, 2026", reads: "19.6K" },
  { id: 5, title: "UPSC Editorial Vocabulary Breakdown #42", youtubeId: "dQw4w9WgXcQ", date: "Sep 28, 2026", reads: "14.3K" },
  { id: 6, title: "Top 50 Idioms Asked in SSC CGL & Banking", youtubeId: "dQw4w9WgXcQ", date: "Sep 20, 2026", reads: "21.0K" },
];

export default function TranscriptsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTranscript, setSelectedTranscript] = useState<typeof TRANSCRIPTS[0] | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredTranscripts = TRANSCRIPTS.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsSubmitted(true);
    setTimeout(() => {
      // Reset after success simulation
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/60">
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
            <Link href="/quizzes" className="hover:text-amber-400 transition-colors">Quizzes</Link>
            <Link href="/transcripts" className="text-amber-400 transition-colors">Transcripts</Link>
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
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Free Video Transcripts & Study Notes
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight">
            Read, Review, & <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Get PDFs Instantly</span>
          </h1>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-base">
            Access clean text notes from every YouTube masterclass. Read online or drop your email to receive the formatted PDF straight to your inbox.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8 relative max-w-xl mx-auto"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search transcripts by video title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 shadow-xl transition-colors"
          />
        </motion.div>
      </section>

      {/* Transcripts List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="space-y-4">
          {filteredTranscripts.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/50 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 shadow-md"
            >
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-3 text-xs text-slate-400 mb-1">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.reads} views</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setSelectedTranscript(item)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-semibold text-xs hover:border-amber-500 hover:text-amber-400 transition-all"
                >
                  View Transcript
                </button>
                <button
                  onClick={() => setSelectedTranscript(item)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20"
                >
                  <Download className="mr-1.5 h-3.5 w-3.5" />
                  Get PDF
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Transcript Viewer & Email Gate Modal */}
      <AnimatePresence>
        {selectedTranscript && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => {
                  setSelectedTranscript(null);
                  setIsSubmitted(false);
                  setEmailInput("");
                }}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-full bg-slate-950 border border-slate-800"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Transcript & Notes</span>
                  <h2 className="text-2xl font-black text-white mt-1">{selectedTranscript.title}</h2>
                </div>

                {/* Simulated In-Page Reader View */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-6 text-sm text-slate-300 space-y-4 max-h-48 overflow-y-auto">
                  <p className="font-semibold text-amber-400">[00:00] Introduction to High-Frequency Lexicon</p>
                  <p>Welcome back learners! Today we are dissecting root words that appear in over 40% of competitive exam passages. Let's start with the root 'Bene' which translates to good or well...</p>
                  <p className="font-semibold text-amber-400">[02:15] Root Word Breakdown: Benefactor, Benevolent, Benign</p>
                  <p>Notice how adding prefixes and suffixes transforms the core meaning. A 'benefactor' is someone who confers a benefit or makes a financial contribution...</p>
                </div>

                {/* Email Delivery Box */}
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6">
                  {!isSubmitted ? (
                    <form onSubmit={handleDownloadSubmit} className="space-y-4">
                      <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
                        <Download className="h-4 w-4" />
                        <span>Get the formatted PDF sent straight to your inbox</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-1">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                          <input
                            type="email"
                            required
                            placeholder="Enter your email address..."
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                          />
                        </div>
                        <button
                          type="submit"
                          className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all whitespace-nowrap"
                        >
                          Send PDF Now
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-4 space-y-2">
                      <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Transcript Sent Successfully!</h4>
                      <p className="text-xs text-slate-400">
                        Check your inbox at <span className="text-amber-400 font-medium">{emailInput}</span> for your PDF download link.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
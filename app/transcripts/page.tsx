"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Search, FileText, Download, Mail, X, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const TRANSCRIPTS = [
  { id: 1, title: "100 Advanced GRE Root Words in 20 Minutes", date: "Oct 24, 2026", reads: "8.2K" },
  { id: 2, title: "Stop Using 'Very': 50 Powerful Alternatives", date: "Oct 18, 2026", reads: "15.4K" },
  { id: 3, title: "Business English Masterclass for Job Interviews", date: "Oct 12, 2026", reads: "11.1K" },
];

export default function TranscriptsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTranscript, setSelectedTranscript] = useState<typeof TRANSCRIPTS[0] | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredTranscripts = TRANSCRIPTS.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <Link href="/quizzes" className="hover:text-amber-400 transition-colors">Quizzes</Link>
            <Link href="/transcripts" className="text-amber-400 transition-colors">Transcripts</Link>
            <Link href="/book" className="hover:text-amber-400 transition-colors">Get The Book</Link>
          </nav>
        </div>
      </header>

      <section className="pt-12 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          Free Video Transcripts & Notes
        </span>
        <h1 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight">
          Read, Review, & <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Get PDFs Instantly</span>
        </h1>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="space-y-4">
          {filteredTranscripts.map((item) => (
            <div key={item.id} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400">{item.date} • {item.reads} views</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTranscript(item)}
                className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all"
              >
                Get PDF
              </button>
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedTranscript && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 relative">
              <button onClick={() => setSelectedTranscript(null)} className="absolute top-6 right-6 text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
              <h3 className="text-xl font-bold text-white mb-4">{selectedTranscript.title}</h3>
              {!isSubmitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200"
                  />
                  <button type="submit" className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm">Send PDF to Inbox</button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white">Sent Successfully!</h4>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
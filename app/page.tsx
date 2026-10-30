"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Flame, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Flame className="h-6 w-6 text-slate-950 fill-slate-950" />
            </div>
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-amber-400 bg-clip-text text-transparent">
              VOCAB MANIA
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <Link href="/" className="text-amber-400 transition-colors">Home</Link>
            <Link href="/quizzes" className="hover:text-amber-400 transition-colors">Quizzes</Link>
            <Link href="/transcripts" className="hover:text-amber-400 transition-colors">Transcripts</Link>
            <Link href="/book" className="hover:text-amber-400 transition-colors">Get The Book</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/book"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:opacity-95 shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
            >
              Buy Book ₹299
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Falling Book Animation */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Background ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>India's #1 Vocabulary Masterclass</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]"
              >
                Master Advanced English, <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                  Without Boring Memorization.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 font-normal"
              >
                Level up your vocabulary through high-octane YouTube shorts, deep-dive quizzes, and our bestselling masterbook built specifically for competitive exams and fluent daily conversations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
              >
                <Link
                  href="/quizzes"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  Explore 25+ Free Quizzes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/transcripts"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 transition-all"
                >
                  Download Free Transcripts
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <div className="pt-6 flex items-center justify-center lg:justify-start space-x-6 text-xs text-slate-400">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  <span>100K+ Learners</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="h-4 w-4 text-amber-400" />
                  <span>Instant Razorpay Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Content: Animated Falling & Floating Book Element */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: -100, rotate: -10 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                  duration: 0.8
                }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="relative w-72 sm:w-80 h-[420px] rounded-2xl bg-gradient-to-br from-amber-500 via-orange-600 to-slate-900 p-1 shadow-2xl shadow-orange-500/20 cursor-pointer group"
              >
                <div className="h-full w-full bg-slate-950 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-bold tracking-wider uppercase">
                      Bestseller E-Book
                    </div>
                    <h3 className="text-2xl font-black text-white leading-tight">
                      Vocab Mania: The Ultimate Lexicon Guide
                    </h3>
                    <p className="text-sm text-slate-400">
                      500+ Root words, mnemonics, and high-frequency vocabulary tested in CAT, GRE, SSC, and UPSC.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-800/80">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-slate-500 line-through">₹599</span>
                        <div className="text-2xl font-extrabold text-amber-400">₹299 <span className="text-xs font-normal text-slate-400">Only</span></div>
                      </div>
                      <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full">
                        Instant PDF
                      </span>
                    </div>

                    <Link
                      href="/book"
                      className="w-full flex items-center justify-center py-3 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                    >
                      Get Instant Access
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
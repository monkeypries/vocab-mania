"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Flame, Sparkles, ArrowRight, CheckCircle2, Youtube } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX - width / 2);
    y.set(mouseY - height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-amber-500 selection:text-slate-950 overflow-hidden relative">
      
      {/* Background Floating Vocabulary Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <motion.div animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute top-20 left-10 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
          ✨ Etymology (noun)
        </motion.div>
        <motion.div animate={{ y: [0, 25, 0], x: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 8 }} className="absolute top-40 right-16 px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono">
          🔥 Ephemeral
        </motion.div>
        <motion.div animate={{ y: [0, -15, 0], x: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 7 }} className="absolute bottom-32 left-1/4 px-4 py-2 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-mono">
          💡 Mnemonics
        </motion.div>
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-amber-500/30 animate-pulse">
              <Flame className="h-6 w-6 text-slate-950 fill-slate-950" />
            </div>
            <div>
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-white via-slate-200 to-amber-400 bg-clip-text text-transparent">
                VOCAB MANIA
              </span>
              <span className="block text-[10px] text-amber-400 font-bold uppercase tracking-widest">by Creator Studio</span>
            </div>
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
              className="px-6 py-2.5 rounded-full font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:opacity-95 shadow-lg shadow-amber-500/25 transition-all transform hover:scale-105"
            >
              Get Book ₹299
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with True 3D Tilt Book Animation */}
      <section className="relative pt-16 pb-28 lg:pt-24 lg:pb-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase shadow-inner"
            >
              <Sparkles className="h-4 w-4 animate-spin" />
              <span>As Seen on YouTube Shorts & Instagram Reels</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-7xl font-black tracking-tight leading-[1.08]"
            >
              Stop Memorizing. <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-sm">
                Start Owning Words.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Join 100,000+ vocabulary learners across India. Master elite roots, crush CAT/GRE/UPSC exams, and speak with absolute magnetic confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/quizzes"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl font-black bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-2xl shadow-amber-500/30 transition-all transform hover:-translate-y-1"
              >
                Play Quizzes Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 hover:border-slate-700 transition-all"
              >
                <svg className="mr-2 h-5 w-5 fill-red-500" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch Channel
              </Link>
            </motion.div>

            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl font-black text-white">100K+</div>
                <div className="text-xs text-slate-400">Subscribers</div>
              </div>
              <div>
                <div className="text-2xl font-black text-amber-400">25+</div>
                <div className="text-xs text-slate-400">Master Quizzes</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">4.9/5</div>
                <div className="text-xs text-slate-400">Book Rating</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouse}
              onMouseLeave={handleMouseLeave}
              className="relative w-80 sm:w-96 h-[480px] rounded-3xl bg-gradient-to-br from-amber-500 via-orange-600 to-amber-900 p-1.5 shadow-2xl shadow-orange-500/20 cursor-pointer group"
            >
              <div className="h-full w-full bg-[#0d1117] rounded-[22px] p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
                
                <div className="space-y-4 relative z-10">
                  <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-black uppercase tracking-widest border border-amber-500/30">
                    Bestseller Masterbook
                  </span>
                  <h3 className="text-3xl font-black text-white leading-tight">
                    Vocab Mania: The Ultimate Lexicon
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    500+ High-frequency root words, memory hooks, and exam-tested practice drills.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-800/80 relative z-10">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-500 line-through">₹599</span>
                      <div className="text-3xl font-black text-amber-400">₹299 <span className="text-xs font-normal text-slate-400">Digital PDF</span></div>
                    </div>
                    <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      Instant Delivery
                    </span>
                  </div>

                  <Link
                    href="/book"
                    className="w-full flex items-center justify-center py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-sm hover:opacity-95 shadow-lg shadow-amber-500/30 transition-all"
                  >
                    Get Instant Access
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
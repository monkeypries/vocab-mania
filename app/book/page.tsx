"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, ShieldCheck, CheckCircle2, Star, Download, Lock, ArrowRight, X, Sparkles, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function BookPage() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState<"details" | "processing" | "success">("details");
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");

  const handleRazorpayPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep("processing");
    setTimeout(() => {
      setPaymentStep("success");
    }, 2500);
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
            <Link href="/transcripts" className="hover:text-amber-400 transition-colors">Transcripts</Link>
            <Link href="/book" className="text-amber-400 transition-colors">Get The Book</Link>
          </nav>
          <div>
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="px-5 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:opacity-95 shadow-lg shadow-amber-500/25 transition-all"
            >
              Buy Book ₹299
            </button>
          </div>
        </div>
      </header>

      {/* Hero Product Section */}
      <section className="pt-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Product Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-72 sm:w-88 h-[450px] rounded-3xl bg-gradient-to-br from-amber-500 via-orange-600 to-slate-900 p-1.5 shadow-2xl shadow-amber-500/20"
            >
              <div className="h-full w-full bg-slate-950 rounded-[22px] p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="space-y-4 relative z-10">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Instant PDF Edition
                  </span>
                  <h1 className="text-3xl font-black text-white leading-tight">
                    Vocab Mania Masterbook
                  </h1>
                  <p className="text-sm text-slate-400">
                    The ultimate compendium of root words, mnemonics, and high-frequency vocabulary.
                  </p>
                </div>
                <div className="space-y-4 pt-6 border-t border-slate-800/80 relative z-10">
                  <div className="flex items-baseline space-x-3">
                    <span className="text-3xl font-extrabold text-amber-400">₹299</span>
                    <span className="text-sm text-slate-500 line-through">₹599</span>
                    <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">50% OFF</span>
                  </div>
                  <button
                    onClick={() => setIsCheckoutOpen(true)}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-sm hover:opacity-95 shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
                  >
                    Buy Now via Razorpay
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Description & Benefits */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Over 10,000+ Copies Sold Across India</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Unlock Fluent English & Crush Competitive Exams
            </h2>

            <p className="text-slate-400 text-base leading-relaxed">
              Whether you are preparing for CAT, GRE, UPSC, SSC CGL, or simply want to elevate your professional communication, this masterbook eliminates rote memorization by teaching you the etymology and memory triggers behind elite English words.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                "500+ High-Frequency Root Words",
                "Proven Visual Mnemonics",
                "Practice Exercises with Solutions",
                "Instant PDF Download on Razorpay"
              ].map((perk, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0" />
                  <span className="text-sm font-medium text-slate-200">{perk}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center space-x-6 text-xs text-slate-400">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                <span>Secure Razorpay Checkout</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Download className="h-4 w-4 text-amber-400" />
                <span>Instant E-Mail Delivery</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Simulated Razorpay Hosted Checkout Modal */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => {
                  setIsCheckoutOpen(false);
                  setPaymentStep("details");
                }}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-full bg-slate-950 border border-slate-800"
              >
                <X className="h-5 w-5" />
              </button>

              {paymentStep === "details" && (
                <form onSubmit={handleRazorpayPayment} className="space-y-5">
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                      <Lock className="h-3.5 w-3.5" />
                      <span>Secured by Razorpay</span>
                    </div>
                    <h3 className="text-xl font-black text-white mt-1">Vocab Mania E-Book</h3>
                    <p className="text-sm text-slate-400">Total payable: <span className="text-amber-400 font-bold">₹299</span> (GST included)</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Ankur Tripathi"
                        value={buyerName}
                        onChange={(e) => setBuyerName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">Email Address (for PDF delivery)</label>
                      <input
                        type="email"
                        required
                        placeholder="ankur@example.com"
                        value={buyerEmail}
                        onChange={(e) => setBuyerEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">Phone Number (for UPI / WhatsApp receipt)</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98602 44667"
                        value={buyerPhone}
                        onChange={(e) => setBuyerPhone(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all"
                  >
                    Pay ₹299 with Razorpay
                  </button>

                  <div className="text-center">
                    <span className="text-[11px] text-slate-500">Supports GPay, PhonePe, Paytm, UPI, Cards & Netbanking</span>
                  </div>
                </form>
              )}

              {paymentStep === "processing" && (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto" />
                  <h4 className="text-lg font-bold text-white">Processing Razorpay Secure Payment...</h4>
                  <p className="text-xs text-slate-400">Connecting to banking gateway...</p>
                </div>
              )}

              {paymentStep === "success" && (
                <div className="text-center py-8 space-y-4">
                  <div className="h-14 w-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Payment Successful! 🎉</h4>
                  <p className="text-xs text-slate-400">
                    Your digital e-book PDF has been emailed to <span className="text-amber-400 font-medium">{buyerEmail}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsCheckoutOpen(false);
                      setPaymentStep("details");
                    }}
                    className="w-full py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-bold text-xs hover:border-amber-500 transition-all mt-4"
                  >
                    Close & Return to Site
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
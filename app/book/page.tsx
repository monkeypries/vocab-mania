"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, CheckCircle2, ShieldCheck, Download, Lock, X, Sparkles } from "lucide-react";
import Link from "next/link";

export default function BookPage() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState<"details" | "processing" | "success">("details");
  const [buyerEmail, setBuyerEmail] = useState("");

  const handleRazorpayPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep("processing");
    setTimeout(() => setPaymentStep("success"), 2500);
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
          <button
            onClick={() => setIsCheckoutOpen(true)}
            className="px-5 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg"
          >
            Buy Book ₹299
          </button>
        </div>
      </header>

      <section className="pt-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-80 h-[450px] rounded-3xl bg-gradient-to-br from-amber-500 via-orange-600 to-slate-900 p-1.5 shadow-2xl">
              <div className="h-full w-full bg-[#07090e] rounded-[22px] p-8 flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase">Instant PDF</span>
                  <h1 className="text-3xl font-black text-white mt-4">Vocab Mania Masterbook</h1>
                </div>
                <button onClick={() => setIsCheckoutOpen(true)} className="w-full py-4 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm">
                  Buy Now via Razorpay
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase">
              <Sparkles className="inline h-3.5 w-3.5 mr-1" /> Over 10,000+ Copies Sold Across India
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Unlock Fluent English & Crush Competitive Exams</h2>
            <p className="text-slate-400">Master 500+ high-frequency root words and memory hooks with instant digital download.</p>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 relative">
              <button onClick={() => setIsCheckoutOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>

              {paymentStep === "details" && (
                <form onSubmit={handleRazorpayPayment} className="space-y-5">
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase">
                      <Lock className="h-3.5 w-3.5" /> <span>Secured by Razorpay</span>
                    </div>
                    <h3 className="text-xl font-black text-white mt-1">Vocab Mania E-Book</h3>
                    <p className="text-sm text-slate-400">Total payable: <span className="text-amber-400 font-bold">₹299</span></p>
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Enter email for delivery..."
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200"
                  />
                  <button type="submit" className="w-full py-3.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm">
                    Pay ₹299 with Razorpay
                  </button>
                </form>
              )}

              {paymentStep === "processing" && (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto" />
                  <h4 className="text-lg font-bold text-white">Processing Razorpay Payment...</h4>
                </div>
              )}

              {paymentStep === "success" && (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Payment Successful! 🎉</h4>
                  <p className="text-xs text-slate-400">PDF sent to <span className="text-amber-400">{buyerEmail}</span></p>
                  <button onClick={() => setIsCheckoutOpen(false)} className="w-full py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-bold text-xs mt-4">
                    Close
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
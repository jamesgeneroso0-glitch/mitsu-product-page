'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Sparkles, MessageCircle, User, Video } from 'lucide-react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Zero-Lag Radial Gradient Orbs (No CSS Blur) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.25)_0%,transparent_70%)] pointer-events-none transform-gpu" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)] pointer-events-none transform-gpu" />

      {/* Hero Header */}
      <div className="text-center max-w-xl mb-10 z-10">
        {/* Mitsu Smart Card Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-4 shadow-inner"
        >
          <Sparkles size={16} className="animate-pulse" /> Mitsu Smart Card
        </motion.div>

        {/* Staggered Heading Text Animation */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex flex-col items-center gap-1">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="py-1 leading-tight transform-gpu"
          >
            Tap to Connect.
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.35 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300 py-1 leading-tight transform-gpu"
          >
            Everything shared
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 py-1 leading-tight transform-gpu"
          >
            in a single tap.
          </motion.span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="text-slate-400 text-sm md:text-base mt-2 transform-gpu"
        >
          Try the interactive demo below to preview the smart card in action.
        </motion.p>
      </div>

      {/* Interactive Demo Area */}
      <div className="relative z-10 flex flex-col items-center gap-8 min-h-[460px]">
        
        {/* Virtual NFC Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          onClick={() => setIsOpen(true)}
          className="w-72 h-44 bg-slate-900 border border-indigo-500/30 rounded-2xl shadow-xl p-6 cursor-pointer flex flex-col justify-between relative overflow-hidden group select-none hover:scale-[1.02] active:scale-[0.98] transition-transform duration-150 transform-gpu"
        >
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg tracking-wider text-slate-100">Mitsu Kazuwara</span>
            <Share2 className="text-indigo-400 group-hover:rotate-12 transition-transform" size={20} />
          </div>

          <div className="text-center py-2">
            <span className="text-[11px] text-indigo-300/80 uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              {isOpen ? "[ Card Active ]" : "[ Tap to View Profile ]"}
            </span>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-[9px] text-slate-500 uppercase tracking-wider">Owner</p>
              <p className="text-xs font-semibold text-slate-300">Mitsu Kazuwara</p>
            </div>
            <div className="w-8 h-6 bg-amber-400/20 border border-amber-400/40 rounded-md flex items-center justify-center">
              <div className="w-4 h-3 border border-amber-400/60 rounded-sm" />
            </div>
          </div>
        </motion.div>

        {/* Pop-in Profile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="w-80 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center relative transform-gpu"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-0.5 mb-3 shadow-lg shadow-indigo-500/20">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-bold text-xl text-indigo-300">
                  MK
                </div>
              </div>

              <h2 className="font-bold text-lg text-slate-100">Mitsu Kazuwara</h2>
              <p className="text-xs text-slate-400 mb-6">Student Entrepreneur & Creator</p>

              <div className="w-full flex flex-col gap-3">
                <a 
                  href="https://www.instagram.com/mitsu.kzwr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-slate-800/60 hover:bg-indigo-600/20 border border-slate-700/50 hover:border-indigo-500/50 rounded-xl text-xs font-medium flex items-center justify-between transition-colors active:scale-98 group"
                >
                  <span className="flex items-center gap-2">
                    <User size={16} className="text-pink-400 group-hover:scale-110 transition-transform" /> Instagram Profile
                  </span>
                  <span className="text-[10px] text-slate-500 group-hover:text-slate-400">@mitsu.kzwr</span>
                </a>

                <a 
                  href="https://www.facebook.com/profile.php?id=61593941820561" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-slate-800/60 hover:bg-indigo-600/20 border border-slate-700/50 hover:border-indigo-500/50 rounded-xl text-xs font-medium flex items-center justify-between transition-colors active:scale-98 group"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle size={16} className="text-blue-400 group-hover:scale-110 transition-transform" /> Facebook Page
                  </span>
                  <span className="text-[10px] text-slate-500 group-hover:text-slate-400">/Mitsu_Kazuwara</span>
                </a>

                <a 
                  href="https://www.tiktok.com/@mitsukzwr12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-slate-800/60 hover:bg-indigo-600/20 border border-slate-700/50 hover:border-indigo-500/50 rounded-xl text-xs font-medium flex items-center justify-between transition-colors active:scale-98 group"
                >
                  <span className="flex items-center gap-2">
                    <Video size={16} className="text-cyan-400 group-hover:scale-110 transition-transform" /> TikTok Profile
                  </span>
                  <span className="text-[10px] text-slate-500 group-hover:text-slate-400">@mitsukzwr12</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      {/* --- FAQ & PRICING SECTION --- */}
<section className="py-16 px-6 max-w-3xl mx-auto border-t border-slate-900">
  <div className="text-center mb-10">
    <motion.h2 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="text-3xl font-bold tracking-tight mb-2"
    >
      Frequently Asked Questions & Pricing
    </motion.h2>
    <p className="text-slate-400 text-xs md:text-sm">
      Lahat ng kailangan mong malaman tungkol sa Black & White Edition Smart NFC Card.
    </p>
  </div>

  {/* Single Product Price Highlight Card */}
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    className="bg-slate-900/80 border border-indigo-500/30 rounded-2xl p-6 mb-8 text-center relative overflow-hidden shadow-xl"
  >
    <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-indigo-500/30">
      Black & White Edition
    </span>
    <div className="mt-4 mb-2">
      <span className="text-4xl font-extrabold text-white">₱499</span>
      <span className="text-xs text-slate-400"> / one-time payment</span>
    </div>
    <p className="text-xs text-slate-400 max-w-xs mx-auto">
      Kabilang na ang custom vertical print, built-in NTAG213 chip, at lifetime profile access. Walang monthly fees.
    </p>
  </motion.div>

  {/* Accordion Questions */}
  <div className="flex flex-col gap-3">
    {[
      {
        q: "Magkano ang Black & White Edition NFC Card?",
        a: "₱499 lang ang one-time payment para sa physical card. Kasama na rito ang pag-program ng NTAG213 microchip at lifetime access sa pag-edit ng iyong profile links."
      },
      {
        q: "Gumagana ba ito sa lahat ng uri ng smartphone?",
        a: "Oo! Native NFC support ang karamihan sa mga modernong iOS (iPhone XR pataas) at Android phones. Para naman sa mga lumang telepono, pwedeng-pwede nilang i-scan ang custom QR code sa likod ng card."
      },
      {
        q: "Kailangan ba ng special app para mabasa ang card?",
        a: "Hindi na! Pagka-tap ng card sa phone, awtomatikong magbubukas ang browser para ipakita ang iyong digital profile at links."
      },
      {
        q: "May monthly o yearly subscription fee ba?",
        a: "Wala! One-time payment lang ang ₱499. Wala ka nang kailangang bayaran na buwanan o taunang bayarin."
      },
      {
        q: "Paano ko mailalagay o mababago ang links ko?",
        a: "Bibigyan ka namin ng access kung saan maaari mong palitan o i-update ang iyong portfolio, social media links, o mobile number anumang oras."
      },
      {
        q: "Matibay ba ang card at hindi agad nasisira?",
        a: "Oo, gawa ito sa premium matte PVC na waterproof at scratch-resistant. Ligtas ito kahit mabasa o maipit sa pitaka."
      }
    ].map((faq, index) => {
      const [faqOpen, setFaqOpen] = useState(false);

      return (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setFaqOpen(!faqOpen)}
            className="w-full p-4 text-left flex justify-between items-center gap-4 focus:outline-none"
          >
            <span className="font-semibold text-xs md:text-sm text-slate-200">{faq.q}</span>
            <span className={`text-indigo-400 font-bold text-base transition-transform duration-200 ${faqOpen ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>

          <AnimatePresence>
            {faqOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/50 pt-3"
              >
                {faq.a}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    })}
  </div>
</section>
    </main>
  );
}
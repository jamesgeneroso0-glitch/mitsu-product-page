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
          transition={{ duration: 0.4, delay: 0.6 }}
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
              transition={{ duration: 0.15 }}
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
    </main>
  );
}
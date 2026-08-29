'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Sparkles, MessageCircle, User, Video } from 'lucide-react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* Dynamic Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Interactive Floating Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25],
          x: [-20, 20, -20],
          y: [-20, 20, -20]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
          x: [20, -20, 20],
          y: [20, -20, 20]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" 
      />

      {/* Hero Header */}
      <div className="text-center max-w-xl mb-10 z-10">
        {/* Mitsu Smart Card Badge - Fade In */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-4 shadow-inner"
        >
          <Sparkles size={16} className="animate-pulse" /> Mitsu Smart Card
        </motion.div>

        {/* Staggered Heading Text Animation */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex flex-col items-center gap-1">
  {/* 1st: Tap to Connect */}
  <motion.span
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    className="py-1 leading-tight"
  >
    Tap to Connect.
  </motion.span>

  {/* 2nd: Everything shared in a */}
  <motion.span
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
    className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300 py-1 leading-tight"
  >
    Everything shared in a
  </motion.span>

  {/* 3rd: single tap */}
  <motion.span
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 py-1 leading-tight"
  >
    single tap.
  </motion.span>
</h1>

        {/* Subtext - Lumalabas pagkatapos ng Card (Delay: ~1.8 seconds) */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-slate-400 text-sm md:text-base mt-2"
        >
          Try the interactive demo below to preview the smart card in action.
        </motion.p>
      </div>

      {/* Interactive Demo Area */}
      <div className="relative z-10 flex flex-col items-center gap-8 min-h-[460px]">
        
        {/* Virtual NFC Card - Lumalabas bago ang subtext (Delay: ~1.2 seconds) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.04, rotateX: 6, rotateY: -6, y: -4 }}
          whileTap={{ scale: 0.96, rotateX: 0, rotateY: 0 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-72 h-44 bg-gradient-to-br from-slate-900/90 via-slate-900 to-indigo-950/80 backdrop-blur-xl border border-indigo-500/30 rounded-2xl shadow-[0_20px_50px_rgba(79,70,229,0.2)] p-6 cursor-pointer flex flex-col justify-between relative overflow-hidden group select-none"
        >
          {/* Card Shine Reflection */}
          <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />

          <div className="flex justify-between items-center">
            <span className="font-bold text-lg tracking-wider text-slate-100">Mitsu Kazuwara</span>
            <Share2 className="text-indigo-400 group-hover:rotate-12 transition-transform" size={20} />
          </div>

          <div className="text-center py-2">
            <span className="text-[11px] text-indigo-300/80 uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              {isOpen ? "[ Tap to Close ]" : "[ Tap to Test NFC ]"}
            </span>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-[9px] text-slate-500 uppercase tracking-wider">Owner</p>
              <p className="text-xs font-semibold text-slate-300">Mitsu Kazuwara</p>
            </div>
            {/* Smart Microchip Visual Feature */}
            <div className="w-8 h-6 bg-amber-400/20 border border-amber-400/40 rounded-md flex items-center justify-center">
              <div className="w-4 h-3 border border-amber-400/60 rounded-sm" />
            </div>
          </div>
        </motion.div>

        {/* Pop-in Simulated Phone Profile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.88, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 25, scale: 0.92, filter: "blur(6px)" }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="w-80 bg-slate-900/90 backdrop-blur-2xl border border-slate-800/80 rounded-3xl p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col items-center text-center relative"
            >
              {/* Profile Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-0.5 mb-3 shadow-lg shadow-indigo-500/20">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-bold text-xl text-indigo-300">
                  MK
                </div>
              </div>

              <h2 className="font-bold text-lg text-slate-100">Mitsu Kazuwara</h2>
              <p className="text-xs text-slate-400 mb-6">Student Entrepreneur & Creator</p>

              {/* Sample Profile Links */}
              <motion.div 
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08 }
                  }
                }}
                className="w-full flex flex-col gap-3"
              >
                {/* Instagram Button */}
                <motion.a 
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.02, x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.instagram.com/mitsu.kzwr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-slate-800/60 hover:bg-indigo-600/20 border border-slate-700/50 hover:border-indigo-500/50 rounded-xl text-xs font-medium flex items-center justify-between transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <User size={16} className="text-pink-400 group-hover:scale-110 transition-transform" /> Instagram Profile
                  </span>
                  <span className="text-[10px] text-slate-500 group-hover:text-slate-400">@mitsu.kzwr</span>
                </motion.a>

                {/* Facebook Button */}
                <motion.a 
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.02, x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.facebook.com/profile.php?id=61593941820561" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-slate-800/60 hover:bg-indigo-600/20 border border-slate-700/50 hover:border-indigo-500/50 rounded-xl text-xs font-medium flex items-center justify-between transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle size={16} className="text-blue-400 group-hover:scale-110 transition-transform" /> Facebook Page
                  </span>
                  <span className="text-[10px] text-slate-500 group-hover:text-slate-400">/Mitsu_Kazuwara</span>
                </motion.a>

                {/* TikTok Button */}
                <motion.a 
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.02, x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.tiktok.com/@mitsukzwr12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-slate-800/60 hover:bg-indigo-600/20 border border-slate-700/50 hover:border-indigo-500/50 rounded-xl text-xs font-medium flex items-center justify-between transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Video size={16} className="text-cyan-400 group-hover:scale-110 transition-transform" /> TikTok Profile
                  </span>
                  <span className="text-[10px] text-slate-500 group-hover:text-slate-400">@mitsukzwr12</span>
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}
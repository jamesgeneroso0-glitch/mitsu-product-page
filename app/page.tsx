'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Globe, Sparkles, MessageCircle, User } from 'lucide-react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Header */}
      <div className="text-center max-w-xl mb-12 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-4">
          <Sparkles size={16} /> Mitsu Smart Card
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Tap to Connect. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Isang tap lang, nasa kanila na lahat.
          </span>
        </h1>
        <p className="text-slate-400 text-sm md:text-base">
          Subukan ang interactive demo sa ibaba. I-click ang card para ma-experience ang pop-in profile ng Mitsu!
        </p>
      </div>

      {/* Interactive Demo Area */}
      <div className="relative z-10 flex flex-col items-center gap-8 min-h-[450px]">
        
        {/* Virtual NFC Card */}
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-72 h-44 bg-gradient-to-br from-slate-900 to-indigo-950 border border-indigo-500/30 rounded-2xl shadow-2xl p-6 cursor-pointer flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg tracking-wider text-slate-200">MITSU</span>
            <Share2 className="text-indigo-400" size={20} />
          </div>

          <div className="text-center py-2">
            <p className="text-xs text-indigo-300/70 uppercase tracking-widest font-semibold mb-1">
              [ Click to Test NFC Tap ]
            </p>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] text-slate-500 uppercase">Owner</p>
              <p className="text-xs font-semibold text-slate-300">Juan Cruz</p>
            </div>
            <div className="w-8 h-6 bg-amber-400/20 border border-amber-400/40 rounded-md flex items-center justify-center">
              <div className="w-4 h-3 border border-amber-400/60 rounded-sm" />
            </div>
          </div>
        </motion.div>

        {/* Pop-in Simulated Phone Profile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-80 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center"
            >
              {/* Profile Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-1 mb-3">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-bold text-xl text-indigo-400">
                  JC
                </div>
              </div>

              <h2 className="font-bold text-lg text-slate-100">Juan Cruz</h2>
              <p className="text-xs text-slate-400 mb-6">Student Entrepreneur & Creator</p>

              {/* Sample Profile Links */}
              <div className="w-full flex flex-col gap-3">
                <a href="#" className="w-full py-2.5 px-4 bg-slate-800/80 hover:bg-indigo-600/30 border border-slate-700/50 hover:border-indigo-500/50 rounded-xl text-xs font-medium flex items-center justify-between transition-all">
                  <span className="flex items-center gap-2"><User size={16} className="text-pink-400" /> Instagram Profile</span>
                  <span className="text-[10px] text-slate-500">@juancruz</span>
                </a>

                <a href="#" className="w-full py-2.5 px-4 bg-slate-800/80 hover:bg-indigo-600/30 border border-slate-700/50 hover:border-indigo-500/50 rounded-xl text-xs font-medium flex items-center justify-between transition-all">
                  <span className="flex items-center gap-2"><MessageCircle size={16} className="text-blue-400" /> Facebook Page</span>
                  <span className="text-[10px] text-slate-500">/juancruz</span>
                </a>

                <a href="#" className="w-full py-2.5 px-4 bg-slate-800/80 hover:bg-indigo-600/30 border border-slate-700/50 hover:border-indigo-500/50 rounded-xl text-xs font-medium flex items-center justify-between transition-all">
                  <span className="flex items-center gap-2"><Globe size={16} className="text-emerald-400" /> Portfolio Website</span>
                  <span className="text-[10px] text-slate-500">Visit</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}
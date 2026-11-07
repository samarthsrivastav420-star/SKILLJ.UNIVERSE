import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  PlayCircle,
  CalendarCheck,
  CheckCircle,
  FileCheck2,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenLoginModal: () => void;
  onOpenTeacherRegisterModal: () => void;
  onOpenExamModal: () => void;
  onExplorePathways: () => void;
  onOpenCertificateModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenLoginModal,
  onOpenTeacherRegisterModal,
  onOpenExamModal,
  onExplorePathways,
  onOpenCertificateModal,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-tr from-indigo-600/15 via-blue-500/10 to-amber-500/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Overline matching screenshot text: UNIVERSE PRESENTS • SKILLJ LEARNING ECOSYSTEM */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-900/40 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-semibold mb-6 tracking-wide shadow-sm">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span>UNIVERSE PRESENTS • SKILLJ LEARNING ECOSYSTEM</span>
          </div>

          {/* Headline matching screenshot: LEARN • TEACH • GROW */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-['Space_Grotesk'] leading-[1.08] mb-6">
            LEARN • TEACH • <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">GROW</span>
          </h1>

          {/* Subtitle matching screenshot text verbatim:
              "India's most trusted online education platform. Connecting ambitious students with verified master faculty across SKILL, COURSE, and EDUCATION pathways." */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-normal leading-relaxed mb-10 max-w-3xl mx-auto">
            India's most trusted online education platform. Connecting ambitious students with verified master faculty across{' '}
            <span className="font-semibold text-white underline decoration-indigo-400 decoration-2 underline-offset-4">SKILL</span>,{' '}
            <span className="font-semibold text-white underline decoration-emerald-400 decoration-2 underline-offset-4">COURSE</span>, and{' '}
            <span className="font-semibold text-white underline decoration-amber-400 decoration-2 underline-offset-4">EDUCATION</span> pathways.
          </p>

          {/* Hero Action Buttons (reflecting the exact buttons from the user screenshot) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            
            {/* LOGIN AS A STUDENT -> */}
            <button
              onClick={onOpenLoginModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base sm:text-lg shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer group"
            >
              <span>LOGIN AS A STUDENT</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform text-indigo-200" />
            </button>

            {/* REGISTER AS A TEACHER -> */}
            <button
              onClick={onOpenTeacherRegisterModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-base sm:text-lg shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer group"
            >
              <span>REGISTER AS A TEACHER</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform text-slate-900" />
            </button>

            {/* Monthly Exam Quick Trigger */}
            <button
              onClick={onOpenExamModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-base transition-all hover:border-slate-600 cursor-pointer"
            >
              <CalendarCheck className="h-5 w-5 text-emerald-400" />
              <span>Take 100-Mark Monthly Exam</span>
            </button>

          </div>

          {/* 4 Pillars Grid (reflecting the stat bullets from user screenshot) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 text-left">
            
            {/* 100% Verified Faculty (80% Direct Share) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all hover:-translate-y-0.5 shadow-md group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-indigo-400 transition-colors">100%</span>
                <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <ShieldCheck className="h-5 w-5" />
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-200 mb-1">Verified Faculty</h4>
              <p className="text-xs text-amber-400 font-medium">80% Direct Revenue Share</p>
            </div>

            {/* Monthly 1st Day Exams (100 Marks) */}
            <div
              onClick={onOpenExamModal}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all hover:-translate-y-0.5 shadow-md group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">Monthly</span>
                <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Award className="h-5 w-5" />
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-200 mb-1">1st Day Exams</h4>
              <p className="text-xs text-emerald-400 font-medium">100 Marks • Live Ranking</p>
            </div>

            {/* Grand Yearly Exam (10–25 Jan) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-all hover:-translate-y-0.5 shadow-md group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-400 transition-colors">10–25 Jan</span>
                <span className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <Sparkles className="h-5 w-5" />
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-200 mb-1">Grand Yearly Exam</h4>
              <p className="text-xs text-amber-400 font-medium">National Scholarships</p>
            </div>

            {/* Verify Certificate */}
            <div
              onClick={onOpenCertificateModal}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-all hover:-translate-y-0.5 shadow-md group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-sky-400 transition-colors">Instant</span>
                <span className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                  <FileCheck2 className="h-5 w-5" />
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-200 mb-1">Verify Certificate</h4>
              <p className="text-xs text-sky-400 font-medium">Public Blockchain Ledger</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

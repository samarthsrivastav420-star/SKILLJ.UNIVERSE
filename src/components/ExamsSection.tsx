import React from 'react';
import { CalendarCheck, Award, Sparkles, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { UPCOMING_EXAMS } from '../data/mockData';

interface ExamsSectionProps {
  onOpenExamModal: () => void;
}

export const ExamsSection: React.FC<ExamsSectionProps> = ({ onOpenExamModal }) => {
  return (
    <section id="exams-section" className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <CalendarCheck className="h-4 w-4" />
            <span>EXAMINATION ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-3">
            Standardized Monthly & Grand Yearly Exams
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every month on the 1st, students take standardized 100-mark benchmark evaluations to measure mastery, earn national percentiles, and unlock merit scholarships.
          </p>
        </div>

        {/* Exams Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Monthly Exam Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900/90 border-2 border-emerald-500/40 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-wider border border-emerald-500/40 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  LIVE NOW & EVERY 1ST OF MONTH
                </span>
                <span className="text-xs font-bold font-mono text-amber-400">100 MARKS STANDARD</span>
              </div>

              <h3 className="text-2xl font-black text-white font-['Space_Grotesk'] mb-2">
                Monthly 1st Day Scholarship Exam
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                India-wide assessment held on the 1st of every single month across SKILL, COURSE, and EDUCATION. 100 Marks standardized test with instant rank analysis.
              </p>

              <div className="space-y-2 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>10 Multi-Disciplinary Standard Questions (10 Marks each)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Negative Marking: -2.5 Marks per incorrect answer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Instant National Percentile and Verifiable SkillJ Rank Badge</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-emerald-400" />
                Duration: 20 Minutes
              </span>
              <button
                onClick={onOpenExamModal}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Take 100M Exam Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Grand Yearly Exam Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900/90 border border-amber-500/30 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black uppercase tracking-wider border border-amber-500/40 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  FLAGSHIP ANNUAL EVENT
                </span>
                <span className="text-xs font-bold font-mono text-amber-400">300 MARKS MEGA</span>
              </div>

              <h3 className="text-2xl font-black text-white font-['Space_Grotesk'] mb-2">
                Grand Yearly Exam 10–25 Jan
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                National scholarship examination conducted annually between 10–25 January. Top rankers receive ₹50 Lakhs pool in cash scholarships and direct research mentorship.
              </p>

              <div className="space-y-2 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Comprehensive 3-Hour Proctored National Examination</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>AIR 1 to AIR 100 National Recognition & Device Grants</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>All participants receive Official UNIVERSE Certificate</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-amber-400" />
                Schedule: 10–25 Jan
              </span>
              <button
                onClick={onOpenExamModal}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs sm:text-sm border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View Syllabus & Practice</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

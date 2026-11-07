import React from 'react';
import { ShieldCheck, Star, Users, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { FACULTY_MEMBERS } from '../data/mockData';

interface FacultySectionProps {
  onOpenTeacherRegisterModal: () => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({ onOpenTeacherRegisterModal }) => {
  return (
    <section className="py-16 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold mb-2 border border-amber-500/20">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
              <span>100% VERIFIED FACULTY • 80% DIRECT SHARE</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
              Learn Directly From Master Educators
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              By offering an 80% direct revenue share, SkillJ Universe attracts India's top mentors from IITs, AI research labs, and top medical institutes.
            </p>
          </div>

          <button
            onClick={onOpenTeacherRegisterModal}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold border border-slate-700 transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span>Apply as Faculty (80% Direct Share)</span>
          </button>
        </div>

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY_MEMBERS.map((faculty) => (
            <div
              key={faculty.id}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="relative mb-4">
                <img
                  src={faculty.avatar}
                  alt={faculty.name}
                  className="w-20 h-20 rounded-2xl object-cover ring-2 ring-amber-400/50 shadow-md"
                />
                <span className="absolute -bottom-2 -right-1 px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase shadow">
                  80% SHARE
                </span>
              </div>

              <div className="flex items-center gap-1.5 mb-1">
                <h3 className="font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                  {faculty.name}
                </h3>
                <ShieldCheck className="h-4 w-4 text-sky-400 shrink-0" />
              </div>

              <p className="text-xs text-amber-400 font-semibold mb-2">{faculty.title}</p>
              <p className="text-xs text-slate-400 mb-4">{faculty.specialization}</p>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1 font-semibold text-amber-300">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  {faculty.rating}
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Users className="h-3.5 w-3.5 text-indigo-400" />
                  {faculty.studentsTaught.toLocaleString('en-IN')}+ taught
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Course, PathwayCategory } from '../types';
import { COURSES_DATA } from '../data/mockData';
import {
  Code,
  GraduationCap,
  BookOpen,
  Star,
  Users,
  Clock,
  CheckCircle,
  Video,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface PathwaysSectionProps {
  onSelectCourse: (course: Course) => void;
  onOpenExamModal: () => void;
}

export const PathwaysSection: React.FC<PathwaysSectionProps> = ({ onSelectCourse, onOpenExamModal }) => {
  const [activeCategory, setActiveCategory] = useState<PathwayCategory>('skill');

  const filteredCourses = COURSES_DATA.filter((c) => c.category === activeCategory);

  return (
    <section id="pathways-section" className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Ecosystem Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-3">
            Choose Your Learning Pathway
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured curriculum guided by 100% verified master faculty with continuous monthly assessment.
          </p>
        </div>

        {/* 3 Pathway Tabs: SKILL, COURSE, EDUCATION */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveCategory('skill')}
            className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
              activeCategory === 'skill'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-400'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Code className="h-5 w-5 text-indigo-300" />
            <span>1. SKILL Pathway</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-black/30 font-medium">Tech & Design</span>
          </button>

          <button
            onClick={() => setActiveCategory('course')}
            className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
              activeCategory === 'course'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 ring-2 ring-emerald-400'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <GraduationCap className="h-5 w-5 text-emerald-300" />
            <span>2. COURSE Pathway</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-black/30 font-medium">Boards & JEE/NEET</span>
          </button>

          <button
            onClick={() => setActiveCategory('education')}
            className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
              activeCategory === 'education'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30 ring-2 ring-amber-400'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <BookOpen className="h-5 w-5 text-amber-300" />
            <span>3. EDUCATION Pathway</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-black/30 font-medium">UPSC & Career</span>
          </button>
        </div>

        {/* Pathway Description Card */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white capitalize flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
              {activeCategory.toUpperCase()} Learning Pathway
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {activeCategory === 'skill' && 'Industry-standard tech, GenAI, and product design programs taught by verified tech leads with portfolio capstones.'}
              {activeCategory === 'course' && 'Comprehensive academic rigor for Class 9-12 Boards, JEE Mains & Advanced, and NEET with AIR 1 mentors.'}
              {activeCategory === 'education' && 'Career development, corporate spoken English, UPSC foundation, and executive leadership pathways.'}
            </p>
          </div>
          <button
            onClick={onOpenExamModal}
            className="shrink-0 text-xs sm:text-sm font-semibold text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 px-4 py-2 rounded-lg border border-amber-500/30 transition-all flex items-center gap-1.5"
          >
            <span>Monthly Scholarship Exam for {activeCategory.toUpperCase()}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/30 group"
            >
              <div>
                {/* Thumbnail Header */}
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {course.badge && (
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-amber-500 text-slate-950 shadow-sm">
                        {course.badge}
                      </span>
                    )}
                    {course.isLiveNow && (
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-rose-600 text-white flex items-center gap-1 shadow-sm animate-pulse">
                        <Video className="h-3 w-3" />
                        LIVE LECTURE
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                    <span className="flex items-center gap-1 bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded border border-slate-700/60">
                      <Clock className="h-3 w-3 text-indigo-400" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded border border-slate-700/60 font-semibold text-amber-300">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      {course.rating} ({course.reviewsCount})
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-5">
                  <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-indigo-300 transition-colors line-clamp-2 mb-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Instructor Pill (Verified Faculty with 80% direct share) */}
                  <div className="flex items-center gap-2.5 py-2 px-3 rounded-lg bg-slate-800/60 border border-slate-800 mb-4">
                    <img
                      src={course.instructorAvatar}
                      alt={course.instructorName}
                      className="w-8 h-8 rounded-full object-cover ring-1 ring-amber-400"
                    />
                    <div className="truncate">
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-semibold text-slate-200 truncate">{course.instructorName}</span>
                        <ShieldCheck className="h-3 w-3 text-sky-400 shrink-0" />
                      </div>
                      <p className="text-[10px] text-amber-400 font-medium truncate">Verified Master Faculty • 80% Direct Share</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1 mb-4 text-xs text-slate-300">
                    {course.syllabusHighlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 truncate">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="p-5 pt-0 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-black text-white">₹{course.price.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-slate-500 line-through">₹{course.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold">Scholarship Eligible</span>
                </div>

                <button
                  onClick={() => onSelectCourse(course)}
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition-all hover:scale-[1.02] shadow-md shadow-indigo-600/20 cursor-pointer"
                >
                  View Cohort
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import {
  X,
  Star,
  Clock,
  BookOpen,
  Users,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Course } from '../types';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
  onOpenExamModal: () => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnroll,
  onOpenExamModal,
}) => {
  const [enrolled, setEnrolled] = useState(false);

  if (!course) return null;

  const handleEnrollClick = () => {
    setEnrolled(true);
    setTimeout(() => {
      onEnroll(course);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="relative h-48 sm:h-56 bg-slate-800 overflow-hidden shrink-0">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-4 right-4">
            <span className="px-2.5 py-1 rounded bg-indigo-600 text-white font-bold text-xs uppercase tracking-wider mb-2 inline-block">
              {course.category} Pathway
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk'] leading-tight">
              {course.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          
          {/* Key Metrics */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
            <span className="flex items-center gap-1.5 text-amber-300 font-bold">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {course.rating} ({course.reviewsCount} reviews)
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-indigo-400" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-emerald-400" />
              {course.totalLectures} Interactive Lectures
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-sky-400" />
              {course.studentsCount.toLocaleString('en-IN')}+ Enrolled
            </span>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-bold text-white text-sm mb-1.5">Overview</h4>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {course.description}
            </p>
          </div>

          {/* Instructor & 80% share note */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <img
                src={course.instructorAvatar}
                alt={course.instructorName}
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-amber-400/50"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <h5 className="font-bold text-white text-sm">{course.instructorName}</h5>
                  <ShieldCheck className="h-4 w-4 text-sky-400" />
                </div>
                <p className="text-xs text-slate-400">{course.instructorTitle}</p>
              </div>
            </div>
            <span className="text-[10px] uppercase font-black px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0">
              80% DIRECT SHARE
            </span>
          </div>

          {/* Syllabus Highlights */}
          <div>
            <h4 className="font-bold text-white text-sm mb-2">Curriculum Highlights</h4>
            <div className="space-y-2">
              {course.syllabusHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Exam Benefit */}
          <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <CalendarCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span className="text-emerald-300">
                Qualify for up to 100% scholarship via the <strong>Monthly 1st Day Exam</strong>.
              </span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenExamModal();
              }}
              className="text-emerald-400 font-bold underline hover:text-emerald-300 shrink-0 ml-2"
            >
              Take Mock Test
            </button>
          </div>

        </div>

        {/* Footer Pricing & CTA */}
        <div className="p-5 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-white">₹{course.price.toLocaleString('en-IN')}</span>
              <span className="text-xs text-slate-500 line-through">₹{course.originalPrice.toLocaleString('en-IN')}</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-semibold">Includes Monthly Exam Entry & Certificate</span>
          </div>

          <button
            onClick={handleEnrollClick}
            disabled={enrolled}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            {enrolled ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                <span>Enrolled! Opening...</span>
              </>
            ) : (
              <>
                <span>Enroll in Cohort</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

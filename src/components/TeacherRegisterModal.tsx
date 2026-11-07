import React, { useState } from 'react';
import {
  X,
  UserPlus,
  ShieldCheck,
  Sparkles,
  Calculator,
  CheckCircle2,
  DollarSign,
  ArrowRight,
} from 'lucide-react';
import { PathwayCategory } from '../types';

interface TeacherRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string) => void;
}

export const TeacherRegisterModal: React.FC<TeacherRegisterModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState<PathwayCategory>('skill');
  const [specialization, setSpecialization] = useState('Full Stack Web & GenAI Apps');
  const [experience, setExperience] = useState('5');
  const [sampleLectureUrl, setSampleLectureUrl] = useState('');
  const [studentEstimate, setStudentEstimate] = useState(250);
  const [courseFee, setCourseFee] = useState(2999);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // 80% Direct revenue share calculation
  const totalGrossRevenue = studentEstimate * courseFee;
  const facultyShare = Math.round(totalGrossRevenue * 0.8);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    setSubmitted(true);
    setTimeout(() => {
      onSuccess(fullName);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="px-5 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
              <UserPlus className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Faculty Registration & Onboarding
              </h3>
              <p className="text-[11px] text-amber-400 font-semibold">
                100% Verified Faculty • 80% Direct Revenue Share Model
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Highlight Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-indigo-500/10 to-transparent border border-amber-500/30 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-amber-300 block mb-0.5">
                    Why Top Faculty Choose SkillJ Universe?
                  </span>
                  Unlike traditional platforms that keep 50–70% of fees, our ecosystem offers an industry-first{' '}
                  <strong className="text-white">80% direct revenue share</strong> to verified master faculty, with instant monthly payouts.
                </div>
              </div>

              {/* Earnings Calculator Widget */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-300 uppercase flex items-center gap-1.5">
                    <Calculator className="h-4 w-4 text-emerald-400" />
                    Faculty 80% Revenue Estimator
                  </span>
                  <span className="text-xs text-emerald-400 font-mono font-bold">
                    Est. Monthly Take-Home: ₹{facultyShare.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-slate-400 block mb-1">Expected Students per Batch: {studentEstimate}</label>
                    <input
                      type="range"
                      min={50}
                      max={1000}
                      step={25}
                      value={studentEstimate}
                      onChange={(e) => setStudentEstimate(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Course Cohort Fee: ₹{courseFee}</label>
                    <input
                      type="range"
                      min={999}
                      max={9999}
                      step={500}
                      value={courseFee}
                      onChange={(e) => setCourseFee(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Rajesh Sharma"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="faculty@domain.com"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Teaching Pathway *</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as PathwayCategory)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="skill">SKILL Pathway (Engineering, AI, Design)</option>
                    <option value="course">COURSE Pathway (JEE, NEET, Class 9-12 Boards)</option>
                    <option value="education">EDUCATION Pathway (UPSC, Career, English)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Years of Teaching Experience *</label>
                  <input
                    type="number"
                    min="1"
                    max="40"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 text-xs font-semibold mb-1">
                  Subject & Core Specialization
                </label>
                <input
                  type="text"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  placeholder="e.g. Advanced Physics for JEE Advanced or GenAI & Deep Learning"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-xs font-semibold mb-1">
                  Sample Demo Lecture / Portfolio Link (YouTube / Drive)
                </label>
                <input
                  type="url"
                  value={sampleLectureUrl}
                  onChange={(e) => setSampleLectureUrl(e.target.value)}
                  placeholder="https://youtube.com/watch?v=sample or portfolio link"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Faculty Application (80% Direct Share)</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </form>
          ) : (
            /* Success confirmation */
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-emerald-400 ring-2 ring-emerald-500/40">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h4 className="text-2xl font-black text-white font-['Space_Grotesk']">
                Welcome to SkillJ Faculty Network, {fullName}!
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your application has been verified. You now have access to your Teacher Dashboard with 80% direct revenue sharing and live stream tools.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => onSuccess(fullName)}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  Open Teacher Dashboard
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

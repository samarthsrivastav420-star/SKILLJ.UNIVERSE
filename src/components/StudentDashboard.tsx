import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Award,
  Video,
  FileText,
  Clock,
  ArrowRight,
  CheckCircle2,
  Download,
  Sparkles,
} from 'lucide-react';
import { COURSES_DATA } from '../data/mockData';

interface StudentDashboardProps {
  studentName: string;
  onOpenExamModal: () => void;
  onOpenCertificateModal: () => void;
  onNavigateToLive: () => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  studentName,
  onOpenExamModal,
  onOpenCertificateModal,
  onNavigateToLive,
}) => {
  const [activeTab, setActiveTab] = useState<'enrolled' | 'exams' | 'certificates' | 'schedule'>('enrolled');

  const enrolledCourses = [COURSES_DATA[0], COURSES_DATA[3]];

  return (
    <section className="py-10 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Welcome Header */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-900 border border-indigo-500/30 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-amber-400 p-0.5 shadow-lg shrink-0">
                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                  <GraduationCap className="h-8 w-8 text-indigo-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-black text-white font-['Space_Grotesk']">
                    Welcome back, {studentName}!
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
                    Active Student
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Roll No: <span className="font-mono text-amber-300">SKJ-STU-88210</span> • Ecosystem Scholar
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenExamModal}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Award className="h-4 w-4" />
                <span>Monthly 100M Exam Active</span>
              </button>

              <button
                onClick={onNavigateToLive}
                className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Video className="h-4 w-4 animate-pulse" />
                <span>Join Live Class</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800/80">
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400">Enrolled Pathways</span>
              <p className="text-xl font-bold text-white font-mono mt-0.5">2 Active</p>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400">Attendance Rate</span>
              <p className="text-xl font-bold text-emerald-400 font-mono mt-0.5">96.4%</p>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400">Last Monthly Score</span>
              <p className="text-xl font-bold text-amber-400 font-mono mt-0.5">94 / 100</p>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400">Earned Certificates</span>
              <p className="text-xl font-bold text-sky-400 font-mono mt-0.5">1 Verified</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs inside Student Dashboard */}
        <div className="flex border-b border-slate-800 mb-6 gap-2">
          <button
            onClick={() => setActiveTab('enrolled')}
            className={`px-4 py-2.5 font-bold text-xs sm:text-sm border-b-2 transition-all cursor-pointer ${
              activeTab === 'enrolled'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            My Courses & Progress
          </button>
          <button
            onClick={() => setActiveTab('exams')}
            className={`px-4 py-2.5 font-bold text-xs sm:text-sm border-b-2 transition-all cursor-pointer ${
              activeTab === 'exams'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Exam History & Rank Cards
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-4 py-2.5 font-bold text-xs sm:text-sm border-b-2 transition-all cursor-pointer ${
              activeTab === 'certificates'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Verified Certificates
          </button>
        </div>

        {/* Tab Content: Enrolled Courses */}
        {activeTab === 'enrolled' && (
          <div className="grid md:grid-cols-2 gap-6">
            {enrolledCourses.map((c, idx) => (
              <div
                key={c.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="uppercase font-bold text-indigo-400">{c.category} Pathway</span>
                    <span className="text-emerald-400 font-semibold">{idx === 0 ? '78% Completed' : '45% Completed'}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-xs text-slate-300 mb-4">Instructor: {c.instructorName}</p>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-4">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full"
                      style={{ width: idx === 0 ? '78%' : '45%' }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-indigo-400" />
                    Next Live Class: Today 7:00 PM
                  </span>
                  <button
                    onClick={onNavigateToLive}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold cursor-pointer"
                  >
                    Resume Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Exams */}
        {activeTab === 'exams' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white text-base">Standardized 100-Mark Monthly Scorecards</h3>
              <button
                onClick={onOpenExamModal}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
              >
                Take Current Monthly Exam
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-amber-400 font-bold block">October 1st Monthly Scholarship Exam</span>
                  <span className="text-slate-400">Score: 94.5 / 100 • Percentile: 98.5th</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                    National Top 1% Scholar
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-sky-400 font-bold block">September 1st Monthly Scholarship Exam</span>
                  <span className="text-slate-400">Score: 88.0 / 100 • Percentile: 94.2th</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                    Gold Distinction
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Certificates */}
        {activeTab === 'certificates' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-white text-base">Your Verifiable Credentials</h3>
              <button
                onClick={onOpenCertificateModal}
                className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
              >
                Open Verification Ledger
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Full Stack Web Engineering & GenAI Apps</h4>
                  <p className="text-slate-400">Credential ID: SKILLJ-2026-9842 • Grade: Distinction (94.5%)</p>
                </div>
              </div>
              <button
                onClick={onOpenCertificateModal}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold"
              >
                View Credential
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

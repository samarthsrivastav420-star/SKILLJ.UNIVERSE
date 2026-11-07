import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Users,
  Award,
  Radio,
  Clock,
  Sparkles,
  Search,
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [pendingTeachers, setPendingTeachers] = useState([
    {
      id: 'app-1',
      name: 'Prof. Vikramaditya Joshi',
      degree: 'Ph.D. IIT Delhi',
      pathway: 'Course (JEE Advanced Mathematics)',
      exp: '16 Years',
      status: 'pending',
    },
    {
      id: 'app-2',
      name: 'Sanya Sengupta',
      degree: 'Design Lead ex-Swiggy',
      pathway: 'Skill (UI/UX & Product Design)',
      exp: '8 Years',
      status: 'pending',
    },
  ]);

  const handleApprove = (id: string) => {
    setPendingTeachers((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: 'approved' } : t))
    );
  };

  const handleReject = (id: string) => {
    setPendingTeachers((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: 'rejected' } : t))
    );
  };

  return (
    <section className="py-10 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Admin Header */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-slate-900 border border-purple-500/30 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-500 p-0.5 shadow-lg shrink-0">
                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                  <ShieldCheck className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-black text-white font-['Space_Grotesk']">
                    UNIVERSE Official Admin Governance
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-500/40">
                    Super Admin
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Ecosystem Controller • Faculty KYC, Exam Rules & Revenue Ledger
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 text-xs font-bold border border-emerald-500/30 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Ecosystem Servers Healthy
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mt-6 pt-6 border-t border-slate-800/80">
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400">Total Enrolled Students</span>
              <p className="text-2xl font-black text-white font-mono mt-0.5">48,720</p>
              <span className="text-[10px] text-emerald-400">+12% this month</span>
            </div>
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400">Verified Master Faculty</span>
              <p className="text-2xl font-black text-amber-400 font-mono mt-0.5">148</p>
              <span className="text-[10px] text-slate-500">80% direct revenue model</span>
            </div>
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400">Monthly Exam Takers</span>
              <p className="text-2xl font-black text-sky-400 font-mono mt-0.5">18,400</p>
              <span className="text-[10px] text-slate-500">1st of month standard</span>
            </div>
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400">Scholarship Fund Pool</span>
              <p className="text-2xl font-black text-purple-400 font-mono mt-0.5">₹42.5 Lakhs</p>
              <span className="text-[10px] text-slate-500">Grand Yearly Exam Jan 10-25</span>
            </div>
          </div>
        </div>

        {/* Administration Modules */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Faculty Approval Queue */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-base font-bold text-white mb-2 flex items-center justify-between">
              <span>Teacher Verification Approvals</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                {pendingTeachers.filter((t) => t.status === 'pending').length} Pending
              </span>
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Review credential documents before granting the 80% revenue share faculty badge.
            </p>

            <div className="space-y-3">
              {pendingTeachers.map((t) => (
                <div
                  key={t.id}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.name}</h4>
                    <p className="text-slate-400">{t.degree} • {t.exp}</p>
                    <p className="text-indigo-400 font-medium mt-0.5">{t.pathway}</p>
                  </div>

                  <div>
                    {t.status === 'pending' ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleApprove(t.id)}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1 cursor-pointer"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          <span>Approve 80% Share</span>
                        </button>
                        <button
                          onClick={() => handleReject(t.id)}
                          className="px-3 py-1.5 rounded-lg bg-rose-900/60 hover:bg-rose-800 text-rose-300 font-bold flex items-center gap-1 cursor-pointer"
                        >
                          <XCircle className="h-3.5 w-3.5" />
                          <span>Reject</span>
                        </button>
                      </div>
                    ) : (
                      <span
                        className={`font-bold px-2.5 py-1 rounded-md text-xs uppercase ${
                          t.status === 'approved'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                        }`}
                      >
                        {t.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exam Schedule Controller */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-400" />
              Standardized Exam Engine Status
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Configure parameters for the monthly standardized 100M tests and yearly grand exam.
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Monthly Scholarship Exam</span>
                  <span className="text-slate-400">Scheduled on: 1st of Every Month (100 Marks Standard)</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  Live & Automated
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Grand Yearly Universe Exam</span>
                  <span className="text-slate-400">Window: 10 Jan – 25 Jan • 300 Marks Mega Assessment</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                  Registrations Open
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Certificate Blockchain Ledger</span>
                  <span className="text-slate-400">SHA-256 Proof of Competence Verification</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30">
                  Syncing Blocks
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

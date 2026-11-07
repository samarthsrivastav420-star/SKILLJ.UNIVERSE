import React, { useState } from 'react';
import {
  DollarSign,
  Users,
  Video,
  FileCheck2,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Calendar,
  PlusCircle,
  CheckCircle2,
} from 'lucide-react';

interface TeacherDashboardProps {
  facultyName: string;
  onNavigateToLive: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  facultyName,
  onNavigateToLive,
}) => {
  const [scheduledSuccess, setScheduledSuccess] = useState(false);
  const [newTopic, setNewTopic] = useState('');

  const handleScheduleStream = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTopic.trim()) return;
    setScheduledSuccess(true);
    setTimeout(() => {
      setScheduledSuccess(false);
      setNewTopic('');
    }, 3000);
  };

  return (
    <section className="py-10 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Welcome Header */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-slate-900 border border-amber-500/30 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-500 p-0.5 shadow-lg shrink-0">
                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                  <Sparkles className="h-8 w-8 text-amber-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-black text-white font-['Space_Grotesk']">
                    Welcome, {facultyName || 'Dr. Aryan Verma'}!
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40 flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    100% Verified Master Faculty
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-amber-300/90 font-medium mt-1">
                  Active Revenue Model: <strong className="text-white">80% Direct Share Tier</strong> • Direct Bank Payout
                </p>
              </div>
            </div>

            <button
              onClick={onNavigateToLive}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-rose-600/30 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Video className="h-4 w-4 animate-pulse" />
              <span>Launch Live Lecture Studio</span>
            </button>
          </div>

          {/* Revenue & Analytics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mt-6 pt-6 border-t border-slate-800/80">
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Faculty 80% Take-Home</span>
                <span className="text-emerald-400 font-bold">+18.4%</span>
              </div>
              <p className="text-2xl font-black text-emerald-400 font-mono">₹2,84,400</p>
              <span className="text-[10px] text-slate-500">Current month payout calculated</span>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Active Cohort Students</span>
                <Users className="h-4 w-4 text-sky-400" />
              </div>
              <p className="text-2xl font-black text-white font-mono">1,120</p>
              <span className="text-[10px] text-slate-500">Across 2 active pathways</span>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Live Streams Conducted</span>
                <Video className="h-4 w-4 text-indigo-400" />
              </div>
              <p className="text-2xl font-black text-white font-mono">38</p>
              <span className="text-[10px] text-slate-500">Avg. 94% retention</span>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Faculty Rating</span>
                <Sparkles className="h-4 w-4 text-amber-400" />
              </div>
              <p className="text-2xl font-black text-amber-400 font-mono">4.94 / 5.0</p>
              <span className="text-[10px] text-slate-500">Based on 1,420 student reviews</span>
            </div>
          </div>
        </div>

        {/* Dashboard Tools: Schedule Class & Payout Breakdown */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Quick Schedule Class */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-indigo-400" />
              Schedule Next Live Stream Class
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Students will be notified automatically on their dashboard and SMS.
            </p>

            {scheduledSuccess && (
              <div className="p-3 mb-4 rounded-xl bg-emerald-950/40 border border-emerald-700/50 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>Class scheduled successfully! Stream key and student invite sent.</span>
              </div>
            )}

            <form onSubmit={handleScheduleStream} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Topic Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Advanced Distributed Systems & High-Load Architecture"
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Date</label>
                  <input
                    type="date"
                    defaultValue="2026-11-08"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Time (IST)</label>
                  <input
                    type="time"
                    defaultValue="19:00"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <PlusCircle className="h-4 w-4" />
                <span>Publish Schedule to Student Portals</span>
              </button>
            </form>
          </div>

          {/* 80% Revenue Transparency Breakdown */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-amber-400" />
                SkillJ 80% Direct Share Transparent Ledger
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Full cryptographic transparency on gross receipts, faculty shares, and platform costs.
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">Gross Student Enrollment Tuition</span>
                  <span className="font-mono font-bold text-white">₹3,55,500</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-between">
                  <span className="text-emerald-300 font-semibold">Faculty Direct Share (80%)</span>
                  <span className="font-mono font-bold text-emerald-400">₹2,84,400</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-slate-400">
                  <span>UNIVERSE Infrastructure & Servers (10%)</span>
                  <span className="font-mono">₹35,550</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-slate-400">
                  <span>Student Scholarship Pool (10%)</span>
                  <span className="font-mono">₹35,550</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Direct Bank NEFT / RTGS Payout Status:</span>
              <span className="text-emerald-400 font-bold">Processed Every 1st of Month</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

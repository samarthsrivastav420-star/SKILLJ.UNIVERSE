import React, { useState } from 'react';
import { X, LogIn, GraduationCap, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface StudentLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (studentName: string) => void;
}

export const StudentLoginModal: React.FC<StudentLoginModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [email, setEmail] = useState('student.aarav@skilljuniverse.edu');
  const [password, setPassword] = useState('••••••••');
  const [studentName, setStudentName] = useState('Aarav Sharma');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(studentName);
  };

  const handleDemoLogin = (name: string, mail: string) => {
    setStudentName(name);
    setEmail(mail);
    onSuccess(name);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Top Header */}
        <div className="px-5 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-bold text-white">Student Portal Login</h3>
              <p className="text-[11px] text-slate-400">SkillJ Universe Learning Ecosystem</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* Quick 1-Click Demo Profiles */}
          <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-800/40 space-y-2">
            <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              Instant Demo Access (No Password Required)
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => handleDemoLogin('Aarav Sharma', 'aarav.sharma@skillj.edu')}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-left border border-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-white truncate">Aarav Sharma</div>
                <div className="text-[10px] text-emerald-400">Skill Pathway (GenAI)</div>
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin('Priya Iyer', 'priya.iyer@skillj.edu')}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-left border border-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-white truncate">Priya Iyer</div>
                <div className="text-[10px] text-sky-400">Course Pathway (JEE Physics)</div>
              </button>
            </div>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-slate-800"></div>
            <span className="flex-shrink mx-3 text-slate-500 text-xs uppercase">Or sign in with email</span>
            <div className="flex-grow border-t border-slate-800"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Student Full Name</label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Registered Email ID</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="h-4 w-4" />
                <span>Enter Student Dashboard</span>
              </button>
            </div>
          </form>

        </div>

      </div>
    </div>
  );
};

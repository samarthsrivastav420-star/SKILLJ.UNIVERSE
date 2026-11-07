import React from 'react';
import { Award, Radio, ChevronRight, UserCheck } from 'lucide-react';
import { UserRole } from '../types';

interface AnnouncementBarProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  onOpenCertificateModal: () => void;
  onOpenExamModal: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  currentRole,
  onRoleChange,
  onOpenCertificateModal,
  onOpenExamModal,
}) => {
  return (
    <div className="bg-slate-950 text-slate-200 border-b border-slate-800 text-xs py-2 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2.5">
        
        {/* Ecosystem Announcement Banner */}
        <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto scrollbar-none py-0.5">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-semibold border border-emerald-500/30 shrink-0 text-[11px]">
            <Radio className="h-3 w-3 animate-pulse text-emerald-400" />
            LIVE ECOSYSTEM
          </span>

          <span className="font-semibold text-slate-100 shrink-0 tracking-wide">
            UNIVERSE OFFICIALSKILLJ:
          </span>

          <div className="flex items-center gap-2 text-slate-300 shrink-0">
            <button
              onClick={onOpenExamModal}
              className="hover:text-amber-300 font-medium transition-colors underline decoration-amber-500/50 underline-offset-2 flex items-center gap-1"
            >
              <span>Monthly Exams on 1st of every month</span>
              <ChevronRight className="h-3 w-3 text-amber-400" />
            </button>
            <span className="text-slate-600">•</span>
            <span className="text-sky-300 font-medium">Grand Yearly Exam 10–25 Jan</span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping inline-block"></span>
              Live Stream Classes Active
            </span>
          </div>
        </div>

        {/* Right Tools: Certificate Verifier & Mode Selector (matching screenshot) */}
        <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end shrink-0 pt-1 lg:pt-0 border-t lg:border-t-0 border-slate-800/60">
          
          {/* Verify Certificate Button */}
          <button
            onClick={onOpenCertificateModal}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-md font-medium transition-all hover:scale-[1.02] shadow-sm cursor-pointer"
          >
            <Award className="h-3.5 w-3.5 text-amber-400" />
            <span>Verify Certificate</span>
          </button>

          {/* Mode Selector (Directly reflects screenshot "Mode: Guest / Visitor") */}
          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700/80 px-2.5 py-1 rounded-md">
            <span className="text-slate-400 text-[11px] font-medium flex items-center gap-1">
              <UserCheck className="h-3 w-3 text-indigo-400" />
              Mode:
            </span>
            <select
              value={currentRole}
              onChange={(e) => onRoleChange(e.target.value as UserRole)}
              className="bg-transparent text-slate-200 text-xs font-semibold focus:outline-none cursor-pointer pr-1"
            >
              <option value="guest" className="bg-slate-900 text-slate-200">
                Guest / Visitor
              </option>
              <option value="student" className="bg-slate-900 text-slate-200">
                Student Dashboard
              </option>
              <option value="teacher" className="bg-slate-900 text-slate-200">
                Teacher / Faculty (80% Share)
              </option>
              <option value="admin" className="bg-slate-900 text-slate-200">
                UNIVERSE Admin
              </option>
            </select>
          </div>

        </div>

      </div>
    </div>
  );
};

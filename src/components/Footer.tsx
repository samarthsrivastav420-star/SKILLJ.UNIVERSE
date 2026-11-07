import React from 'react';
import { ShieldCheck, Award, Heart, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenCertificateModal: () => void;
  onOpenExamModal: () => void;
  onOpenTeacherRegisterModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCertificateModal,
  onOpenExamModal,
  onOpenTeacherRegisterModal,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white font-black">
                S
              </div>
              <span className="text-lg font-black tracking-tight text-white font-['Space_Grotesk']">
                SKILLJ<span className="text-amber-400">UNIVERSE</span>
              </span>
            </div>

            <p className="text-xs text-slate-300 font-bold tracking-widest uppercase">
              LEARN • TEACH • GROW
            </p>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              UNIVERSE OFFICIALSKILLJ Online Education Ecosystem. Connecting ambitious students with 100% verified master faculty across SKILL, COURSE, and EDUCATION pathways with our transparent 80% direct faculty revenue share model.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[11px] font-semibold">
                80% Faculty Direct Revenue Model
              </span>
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[11px] font-semibold">
                ISO & Blockchain Certified
              </span>
            </div>
          </div>

          {/* Ecosystem Pathways & Exams */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Ecosystem Features
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenExamModal}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Monthly Exams on 1st of every month
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenExamModal}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Grand Yearly Exam (10–25 Jan)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCertificateModal}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Verify Certificate Ledger
                </button>
              </li>
              <li>
                <a href="#pathways-section" className="hover:text-amber-300 transition-colors">
                  SKILL Pathways (AI & Web)
                </a>
              </li>
              <li>
                <a href="#pathways-section" className="hover:text-amber-300 transition-colors">
                  COURSE Pathways (JEE & NEET)
                </a>
              </li>
              <li>
                <a href="#pathways-section" className="hover:text-amber-300 transition-colors">
                  EDUCATION Pathways (UPSC)
                </a>
              </li>
            </ul>
          </div>

          {/* Faculty & Administration */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              For Educators & Students
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenTeacherRegisterModal}
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors text-left"
                >
                  Register as Teacher (80% Direct Share)
                </button>
              </li>
              <li>
                <span className="text-slate-400">100% Verified Faculty Roster</span>
              </li>
              <li>
                <span className="text-slate-400">Daily Live Stream Masterclasses</span>
              </li>
              <li>
                <span className="text-slate-400">Student Scholarship Fund</span>
              </li>
              <li className="pt-2 text-slate-500">
                Contact: <span className="text-slate-400">support@skilljuniverse.edu</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} UNIVERSE OFFICIALSKILLJ Online Education Ecosystem. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onOpenCertificateModal} className="hover:text-slate-400">
              Certificate Ledger
            </button>
            <span>•</span>
            <span className="text-slate-400">Made for ambitious learners & master teachers</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

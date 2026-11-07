import React from 'react';
import { X, CheckCircle2, AlertTriangle, ArrowRight, Sparkles, Smartphone } from 'lucide-react';

interface RawScreenshotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RawScreenshotModal: React.FC<RawScreenshotModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-5 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
              <Smartphone className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-bold text-white">
                Screenshot Breakdown: "Ye kya hai?"
              </h3>
              <p className="text-[11px] text-slate-400">
                Understanding what happened in your screenshot and how it was resolved
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          
          <div className="grid md:grid-cols-2 gap-6 items-start">
            
            {/* The actual user uploaded screenshot image */}
            <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-center">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-2 flex items-center justify-center gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5" />
                Aapka Uploaded Screenshot (Unstyled Raw HTML)
              </span>
              <div className="max-h-[380px] overflow-hidden rounded-xl border border-slate-800 flex justify-center bg-white">
                <img
                  src="/assets/aistudio/Screenshot_20261107-093947_bf6f46c0.jpg"
                  alt="User Uploaded Screenshot"
                  className="max-h-[380px] w-auto object-contain"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                Mobile browser me CSS styles load nahi huye the, isliye standard default HTML tags render huye the.
              </p>
            </div>

            {/* Explanation & Fix */}
            <div className="space-y-4 text-xs">
              
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="font-bold text-sm text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4" />
                  1. Ye kya tha? (What was this?)
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  Yeh <strong>SkillJ Universe (Universe Official SkillJ Online Education Ecosystem)</strong> ka text aur content tha, par <strong>bina kisi CSS design ya layout ke</strong>.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Jab kisi web page ka stylesheet ya CSS fail ho jata hai, browser HTML ko bina styling ke default black text, default box buttons aur raw dropdown ke roop me show kar deta hai.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-2">
                <h4 className="font-bold text-sm text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                  2. Humne isko kya bana diya? (The Full Solution)
                </h4>
                <ul className="text-slate-300 space-y-1.5 list-disc list-inside">
                  <li><strong>Modern Styling:</strong> Clean dark/indigo palette, responsive Tailwind typography.</li>
                  <li><strong>Role Dashboards:</strong> Student Dashboard, Teacher Dashboard (80% Direct Share), aur UNIVERSE Admin.</li>
                  <li><strong>Monthly 1st Day Exam (100 Marks):</strong> Live interactive quiz with negative marking & instant percentile.</li>
                  <li><strong>Live Streaming Studio:</strong> Real-time chat, doubts, and poll solver.</li>
                  <li><strong>Certificate Verification:</strong> Verifiable gold seal certificates with blockchain ledger IDs.</li>
                </ul>
              </div>

            </div>

          </div>

          <div className="text-center pt-2">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Explore Fixed Live Platform Now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

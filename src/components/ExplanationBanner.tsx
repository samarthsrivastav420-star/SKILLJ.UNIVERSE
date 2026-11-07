import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Smartphone, Eye } from 'lucide-react';

interface ExplanationBannerProps {
  onOpenRawPreview?: () => void;
  onOpenApkFix?: () => void;
}

export const ExplanationBanner: React.FC<ExplanationBannerProps> = ({ onOpenRawPreview, onOpenApkFix }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-gradient-to-r from-amber-950/80 via-slate-900 to-indigo-950/80 border-b border-amber-500/30 text-slate-100 text-sm px-4 py-2.5 transition-all">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 ring-1 ring-amber-400/40">
              <HelpCircle className="h-4 w-4" />
            </span>
            <div className="truncate">
              <span className="font-semibold text-amber-300">Aapka Sawal: "Ye kya hai?"</span>
              <span className="hidden sm:inline text-slate-300 ml-2">
                — Aapke screenshot me <strong>SKILLJUNIVERSE</strong> ka raw HTML (bina CSS styling ke) khula tha. Humne isko ek modern, fully-styled EdTech platform me build kar diya hai!
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onOpenApkFix && (
              <button
                onClick={onOpenApkFix}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-bold bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white rounded-md shadow-sm transition-all hover:scale-105 cursor-pointer"
                title="Fix APK / AAB display issue"
              >
                <Smartphone className="h-3.5 w-3.5" />
                <span>Fix APK / Vercel Issue</span>
              </button>
            )}

            {onOpenRawPreview && (
              <button
                onClick={onOpenRawPreview}
                className="hidden md:flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-md border border-slate-700 transition-colors"
                title="View what happened in screenshot"
              >
                <Eye className="h-3.5 w-3.5 text-amber-400" />
                <span>Screenshot Breakdown</span>
              </button>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-xs text-amber-300/90 hover:text-amber-200 px-2 py-1 rounded hover:bg-white/5 transition-colors"
            >
              <span>{isExpanded ? 'Details Hide' : 'Read Explanation'}</span>
              {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-slate-800/80 grid md:grid-cols-3 gap-3 text-xs text-slate-300">
            <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
              <div className="font-semibold text-rose-400 flex items-center gap-1.5 mb-1">
                <span>⚠️ Screenshot me kya dikkat thi?</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Aapke mobile browser me CSS stylesheet render nahi hui thi. Is wajah se saare buttons, links, aur headers unstyled plain HTML format me stack hokar bikhre hue dikhai de rahe the.
              </p>
            </div>

            <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
              <div className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Ab yeh kya ban chuka hai?</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Yeh <strong>UNIVERSE OFFICIALSKILLJ Online Education Ecosystem</strong> hai — jisme Student & Teacher Dashboards, 1st Day Monthly 100-Mark Exams, Grand Yearly Exam, Verified Faculty (80% Direct Share), aur Certificate Verification live hain!
              </p>
            </div>

            <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
              <div className="font-semibold text-sky-400 flex items-center gap-1.5 mb-1">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Live Features to Try</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Upar ke <strong>Mode dropdown</strong> se Guest, Student, Teacher ya Admin switch karein, <strong>100 Marks Mock Exam</strong> attempt karein, ya <strong>Verify Certificate</strong> button se instant certificate check karein.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

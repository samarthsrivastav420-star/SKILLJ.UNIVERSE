import React, { useState } from 'react';
import {
  X,
  AlertTriangle,
  CheckCircle2,
  Smartphone,
  Globe,
  Github,
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Download,
  Copy,
  Terminal,
} from 'lucide-react';

interface ApkFixModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApkFixModal: React.FC<ApkFixModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'why-failed' | 'how-to-fix' | 'pwabuilder-steps'>('how-to-fix');
  const [copiedVercelJson, setCopiedVercelJson] = useState(false);

  if (!isOpen) return null;

  const vercelJsonCode = `{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`;

  const handleCopyVercelJson = () => {
    navigator.clipboard?.writeText(vercelJsonCode);
    setCopiedVercelJson(true);
    setTimeout(() => setCopiedVercelJson(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-5 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-rose-500/20 text-rose-400">
              <Smartphone className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                APK / AAB Install Issue Fix Guide (AppsGeyser & PWABuilder)
              </h3>
              <p className="text-[11px] text-amber-400 font-medium">
                Why CSS was missing on phone install & Exact 4-step fix
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

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-5 gap-3 text-xs font-bold">
          <button
            onClick={() => setActiveTab('how-to-fix')}
            className={`py-3 border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'how-to-fix'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
            <span>1. Kaise Fix Karein (Step-by-Step)</span>
          </button>

          <button
            onClick={() => setActiveTab('why-failed')}
            className={`py-3 border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'why-failed'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertTriangle className="h-4 w-4" />
            <span>2. Yeh Problem Kyu Aayi Thi?</span>
          </button>

          <button
            onClick={() => setActiveTab('pwabuilder-steps')}
            className={`py-3 border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'pwabuilder-steps'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="h-4 w-4" />
            <span>3. PWABuilder vs AppsGeyser</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          
          {/* TAB 1: HOW TO FIX */}
          {activeTab === 'how-to-fix' && (
            <div className="space-y-5">
              
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-white block mb-0.5">Humne Aapke Codebase mein Zaroori Files Add Kar Di Hain:</strong>
                  1. <code className="text-amber-300 bg-black/40 px-1 py-0.5 rounded">vercel.json</code> (Vercel SPA rewrite & CSS MIME type fix)<br />
                  2. <code className="text-amber-300 bg-black/40 px-1 py-0.5 rounded">public/manifest.json</code> (PWABuilder compliance with 192px/512px icons)<br />
                  3. <code className="text-amber-300 bg-black/40 px-1 py-0.5 rounded">vite-plugin-pwa</code> (Automated Service Worker caching).
                </div>
              </div>

              {/* 4 Steps */}
              <div className="space-y-3.5">
                
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 font-bold text-white text-sm">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">1</span>
                    <span>Step 1: Yeh Updates GitHub par Push Karein</span>
                  </div>
                  <p className="text-slate-300 text-xs mb-3">
                    Apne project terminal mein yeh commands run karein taaki updated <code className="text-amber-300">vercel.json</code> aur <code className="text-amber-300">manifest.json</code> GitHub par upload ho sake:
                  </p>
                  <div className="bg-slate-900 p-3 rounded-lg font-mono text-xs text-slate-200 space-y-1 border border-slate-800">
                    <div className="text-emerald-400">git add .</div>
                    <div className="text-emerald-400">git commit -m "Fix Vercel SPA routing and add PWA manifest for APK"</div>
                    <div className="text-emerald-400">git push origin main</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 font-bold text-white text-sm">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">2</span>
                    <span>Step 2: Vercel Dashboard par Automatic Build Check Karein</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Jab aap GitHub par push karenge, Vercel automatically 1 minute ke andar naya build bana dega.
                    Check karein ki Vercel status <strong>Ready (Green)</strong> ho chuka hai.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 font-bold text-white text-sm">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">3</span>
                    <span>Step 3: Pehle Phone ke Chrome Browser mein Link Open Karein</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    APK banane se pehle apne phone ke <strong>Google Chrome</strong> mein apna Vercel URL kholkar verify karein (e.g. <code className="text-amber-300">https://your-project.vercel.app</code>).
                    Ab poori styling, dark mode, buttons aur fonts 100% styled dikhai denge!
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 mb-2 font-bold text-white text-sm">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">4</span>
                    <span>Step 4: PWABuilder se Naya APK / AAB Generate Karein</span>
                  </div>
                  <p className="text-slate-300 text-xs mb-3 leading-relaxed">
                    1. <a href="https://www.pwabuilder.com" target="_blank" rel="noreferrer" className="text-sky-400 font-bold underline inline-flex items-center gap-1">pwabuilder.com <ExternalLink className="h-3 w-3" /></a> par jayein.<br />
                    2. Apna Vercel URL daalein aur <strong>"Start"</strong> dabayein.<br />
                    3. Kyunki humne <code className="text-amber-300">manifest.json</code> aur icons add kar diye hain, PWABuilder ab <strong>Green Checkmark</strong> dega.<br />
                    4. <strong>"Package for Android"</strong> par click karein aur APK / AAB download karein.
                  </p>
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
                    💡 <strong>Pro Tip:</strong> Ab jab aap phone me APK install karenge, toh app bilkul asli native Android app jaisa smooth, styled aur fast open hoga!
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: WHY FAILED */}
          {activeTab === 'why-failed' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h4 className="font-bold text-amber-300 text-sm flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Screenshot me CSS kyu gayab ho gayi thi? (3 Main Kaaran)
                </h4>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <strong className="text-rose-400 block mb-1">Kaaran 1: Vercel par vercel.json ka na hona (SPA Rewrite Issue)</strong>
                    <p className="text-slate-400 leading-relaxed">
                      React + Vite apps Single Page Applications (SPA) hoti hain. Jab Android WebView stylesheet ya assets mangta hai, agar Vercel mein rewrite rule na ho toh Vercel CSS file ki jagah default HTML bhej deta hai. Browser bolta hai: <em>"MIME type text/html is not text/css"</em> aur styling ko block kar deta hai!
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <strong className="text-rose-400 block mb-1">Kaaran 2: AppsGeyser ka Outdated Android WebView</strong>
                    <p className="text-slate-400 leading-relaxed">
                      AppsGeyser ek purana wrapper use karta hai jisme modern CSS variables, Vite modules aur LocalStorage by default restrict ho jate hain ya cache clear nahi hoti.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <strong className="text-rose-400 block mb-1">Kaaran 3: Missing manifest.json & Service Worker</strong>
                    <p className="text-slate-400 leading-relaxed">
                      PWABuilder ko jab tak valid icons (192px aur 512px) aur Web App Manifest nahi milta, wo Google ki modern <strong>Trusted Web Activity (TWA)</strong> container generate nahi kar pata, aur fallback legacy webview create karta hai jo crash ho jaata hai.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vercel.json Display */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-xs flex items-center gap-1.5">
                    <Terminal className="h-4 w-4 text-emerald-400" />
                    Humne project mein ye vercel.json add kar diya hai:
                  </span>
                  <button
                    onClick={handleCopyVercelJson}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="h-3 w-3" />
                    <span>{copiedVercelJson ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="bg-slate-900 p-3 rounded-lg text-emerald-400 font-mono text-xs overflow-x-auto">
                  {vercelJsonCode}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: PWABUILDER VS APPSGEYSER */}
          {activeTab === 'pwabuilder-steps' && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                
                {/* AppsGeyser Box */}
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 space-y-2">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                    <ShieldAlert className="h-4 w-4" />
                    <span>AppsGeyser (Why it fails)</span>
                  </div>
                  <ul className="text-slate-300 space-y-1.5 list-disc list-inside">
                    <li>Purani Android KitKat/Lollipop level WebView engine.</li>
                    <li>Modern Tailwind v4 CSS & ESModules ko block karta hai.</li>
                    <li>Google Play Store ke naye target SDK 34 rules par reject ho sakta hai.</li>
                    <li>Third-party ads force karta hai.</li>
                  </ul>
                  <p className="text-amber-400 font-semibold pt-1">
                    Recommendation: AppsGeyser ke bajaye official PWABuilder use karein.
                  </p>
                </div>

                {/* PWABuilder Box */}
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>PWABuilder (Recommended Solution)</span>
                  </div>
                  <ul className="text-slate-300 space-y-1.5 list-disc list-inside">
                    <li>Microsoft & Google ka official open-source tool.</li>
                    <li><strong>Trusted Web Activity (TWA)</strong> generate karta hai jo phone ke real Chrome browser engine ko run karta hai (100% full CSS/JS speed).</li>
                    <li>Google Play Store ke liye direct <strong>.AAB (Android App Bundle)</strong> aur testing ke liye <strong>.APK</strong> deta hai.</li>
                    <li>Zero ads, 100% clean and fast.</li>
                  </ul>
                </div>

              </div>

              {/* Quick direct install button for browser */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <h5 className="font-bold text-white text-sm">Direct Phone Browser Install (Bina PWABuilder ke bhi):</h5>
                  <p className="text-slate-400 mt-0.5">
                    Aap apne phone ke Chrome browser me Vercel link open karke 3 dots (⋮) par tap karke <strong>"Add to Home Screen / Install App"</strong> dabayenge, toh bina kisi external APK generator ke bhi direct install ho jayega!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Files updated in your repository: <code className="text-amber-300">vercel.json</code>, <code className="text-amber-300">manifest.json</code>, <code className="text-amber-300">icons</code>
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
            >
              Samajh Gaya (Done)
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

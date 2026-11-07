import React, { useState } from 'react';
import {
  X,
  Award,
  Search,
  CheckCircle2,
  ShieldCheck,
  QrCode,
  Download,
  Share2,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { SAMPLE_CERTIFICATES } from '../data/mockData';
import { CertificateData } from '../types';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const [searchId, setSearchId] = useState('SKILLJ-2026-9842');
  const [selectedCert, setSelectedCert] = useState<CertificateData | null>(SAMPLE_CERTIFICATES[0]);
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = searchId.trim().toUpperCase();
    const found = SAMPLE_CERTIFICATES.find((c) => c.id.toUpperCase() === query);

    if (found) {
      setSelectedCert(found);
      setErrorMsg('');
    } else {
      setSelectedCert(null);
      setErrorMsg(`No certificate found matching ID "${searchId}". Please try sample IDs below.`);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.origin + '?cert=' + selectedCert?.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
              <Award className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Official Certificate Verification Portal
              </h3>
              <p className="text-[11px] text-slate-400">
                UNIVERSE OFFICIALSKILLJ Cryptographic Verification Ledger
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
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Search Box */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter Certificate ID (e.g. SKILLJ-2026-9842)"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Verify Certificate
            </button>
          </form>

          {/* Sample Certificate ID Quick Clicks */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Quick Test IDs:</span>
            {SAMPLE_CERTIFICATES.map((cert) => (
              <button
                key={cert.id}
                type="button"
                onClick={() => {
                  setSearchId(cert.id);
                  setSelectedCert(cert);
                  setErrorMsg('');
                }}
                className={`px-2.5 py-1 rounded-md font-mono text-[11px] border transition-all ${
                  selectedCert?.id === cert.id
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800'
                }`}
              >
                {cert.id} ({cert.studentName.split(' ')[0]})
              </button>
            ))}
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-800/50 text-rose-300 text-xs">
              {errorMsg}
            </div>
          )}

          {/* Certificate Render Frame */}
          {selectedCert && (
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50 via-amber-100/90 to-yellow-50 text-slate-900 border-8 border-double border-amber-600/60 shadow-xl overflow-hidden print:m-0 print:border-4">
              
              {/* Watermark Crest */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                <span className="text-9xl font-black font-['Space_Grotesk'] text-amber-900">SKILLJ</span>
              </div>

              {/* Certificate Header */}
              <div className="text-center relative z-10 border-b border-amber-300/80 pb-4 mb-5">
                <div className="inline-flex items-center gap-2 text-amber-900 text-xs font-bold tracking-widest uppercase mb-1">
                  <ShieldCheck className="h-4 w-4 text-amber-700" />
                  <span>UNIVERSE OFFICIALSKILLJ ONLINE EDUCATION ECOSYSTEM</span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-black tracking-tight text-amber-950 font-['Space_Grotesk']">
                  CERTIFICATE OF EXCELLENCE
                </h4>
                <p className="text-[11px] font-bold text-amber-800 tracking-[0.2em] uppercase mt-0.5">
                  LEARN • TEACH • GROW
                </p>
              </div>

              {/* Body */}
              <div className="text-center relative z-10 space-y-3">
                <p className="text-xs uppercase tracking-wider text-amber-900/80 font-medium">
                  This official document certifies that
                </p>
                <h5 className="text-xl sm:text-2xl font-black text-slate-900 underline decoration-amber-500 decoration-2 underline-offset-4">
                  {selectedCert.studentName}
                </h5>
                <p className="text-xs text-slate-700 max-w-lg mx-auto leading-relaxed">
                  has successfully completed the comprehensive curriculum and passed the standardized monthly & capstone evaluation for
                </p>
                <div className="p-2.5 rounded-xl bg-amber-200/50 border border-amber-300 inline-block font-extrabold text-slate-900 text-sm sm:text-base">
                  {selectedCert.courseName}
                </div>
                <div className="flex items-center justify-center gap-3 text-xs text-slate-800">
                  <span>Grade Awarded: <strong className="text-amber-900">{selectedCert.grade} ({selectedCert.scorePct}%)</strong></span>
                  <span>•</span>
                  <span>Pathway: <strong className="uppercase">{selectedCert.category}</strong></span>
                </div>
              </div>

              {/* Signatures & Verification Details Footer */}
              <div className="mt-8 pt-4 border-t border-amber-300/80 relative z-10 grid grid-cols-3 gap-3 items-end text-center">
                {/* Faculty Endorsement */}
                <div>
                  <div className="font-['Caveat',cursive] text-lg font-bold text-slate-900 italic">
                    {selectedCert.facultyName.split(' ')[0]}
                  </div>
                  <div className="h-px w-24 bg-slate-400 mx-auto my-1"></div>
                  <span className="text-[10px] font-bold text-slate-700 block truncate">{selectedCert.facultyName}</span>
                  <span className="text-[9px] text-slate-600 block">Verified Master Faculty</span>
                </div>

                {/* Golden Seal Emblem */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 p-0.5 shadow-md flex items-center justify-center ring-2 ring-amber-300">
                    <div className="w-full h-full rounded-full border border-dashed border-white flex flex-col items-center justify-center text-white">
                      <Award className="h-5 w-5" />
                      <span className="text-[8px] font-extrabold uppercase">OFFICIAL</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-amber-900 font-bold mt-1">ID: {selectedCert.id}</span>
                </div>

                {/* Registrar & Date */}
                <div>
                  <span className="font-mono text-xs font-bold text-slate-800 block">{selectedCert.issueDate}</span>
                  <div className="h-px w-24 bg-slate-400 mx-auto my-1"></div>
                  <span className="text-[10px] font-bold text-slate-700 block">UNIVERSE Registrar</span>
                  <span className="text-[9px] text-slate-600 block font-mono">Roll: {selectedCert.rollNumber}</span>
                </div>
              </div>

              {/* Verification Hash Bar */}
              <div className="mt-4 pt-2 border-t border-amber-300/60 flex items-center justify-between text-[9px] text-slate-600 font-mono">
                <span className="truncate">Hash: {selectedCert.verificationHash}</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1 shrink-0">
                  <CheckCircle2 className="h-3 w-3" />
                  AUTHENTICATED RECORD
                </span>
              </div>

            </div>
          )}

          {/* Modal Actions */}
          {selectedCert && (
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download / Print PDF</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center gap-1.5 border border-slate-700 transition-colors"
                >
                  <Copy className="h-3.5 w-3.5" />
                  <span>{copied ? 'Link Copied!' : 'Copy Public Verification Link'}</span>
                </button>
              </div>

              <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Valid across academic & industry recruiters
              </span>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

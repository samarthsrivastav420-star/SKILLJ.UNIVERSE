import React, { useState } from 'react';
import {
  GraduationCap,
  ShieldCheck,
  BookOpen,
  Menu,
  X,
  LogIn,
  UserPlus,
  Sparkles,
  Layers,
  Video,
  FileCheck2,
} from 'lucide-react';
import { UserRole } from '../types';
import { PWAInstallButton } from './PWAInstallButton';
import { Smartphone } from 'lucide-react';

interface NavbarProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenLoginModal: () => void;
  onOpenTeacherRegisterModal: () => void;
  onOpenCertificateModal: () => void;
  onOpenApkFix?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRole,
  onRoleChange,
  activeTab,
  onTabChange,
  onOpenLoginModal,
  onOpenTeacherRegisterModal,
  onOpenCertificateModal,
  onOpenApkFix,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: string, role?: UserRole) => {
    onTabChange(tab);
    if (role) {
      onRoleChange(role);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Ecosystem Motto */}
          <div
            onClick={() => handleNavClick('home', 'guest')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            {/* "S" emblem from screenshot "S SKILLJUNIVERSE" */}
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-amber-500 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-all">
              <span className="text-xl font-black text-white tracking-wider">S</span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-['Space_Grotesk']">
                  SKILLJ<span className="text-amber-400">UNIVERSE</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  OFFICIAL
                </span>
              </div>
              <p className="text-[11px] font-bold tracking-[0.25em] text-slate-400 group-hover:text-slate-300 transition-colors uppercase">
                LEARN • TEACH • GROW
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'home'
                  ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('pathways')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'pathways'
                  ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Layers className="h-4 w-4 text-indigo-400" />
              <span>Pathways</span>
            </button>

            <button
              onClick={() => handleNavClick('live')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'live'
                  ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Video className="h-4 w-4 text-emerald-400" />
              <span>Live Classes</span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </button>

            {/* Student Dashboard link (from screenshot) */}
            <button
              onClick={() => handleNavClick('student-dashboard', 'student')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                currentRole === 'student' && activeTab === 'student-dashboard'
                  ? 'bg-emerald-600/25 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <GraduationCap className="h-4 w-4 text-emerald-400" />
              <span>Student Dashboard</span>
            </button>

            {/* Teacher Dashboard link (from screenshot) */}
            <button
              onClick={() => handleNavClick('teacher-dashboard', 'teacher')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                currentRole === 'teacher' && activeTab === 'teacher-dashboard'
                  ? 'bg-amber-600/25 text-amber-300 border border-amber-500/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span>Teacher Dashboard</span>
            </button>

            {/* UNIVERSE Admin link (from screenshot) */}
            <button
              onClick={() => handleNavClick('admin-dashboard', 'admin')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                currentRole === 'admin' && activeTab === 'admin-dashboard'
                  ? 'bg-purple-600/25 text-purple-300 border border-purple-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <ShieldCheck className="h-4 w-4 text-purple-400" />
              <span>UNIVERSE Admin</span>
            </button>
          </nav>

          {/* Desktop Right Auth CTAs (from screenshot: Student Login, Teacher Register) */}
          <div className="hidden sm:flex items-center gap-2">
            <PWAInstallButton />

            {onOpenApkFix && (
              <button
                onClick={onOpenApkFix}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-all cursor-pointer"
                title="Fix APK / AAB display issue"
              >
                <Smartphone className="h-3.5 w-3.5" />
                <span>APK Fix Guide</span>
              </button>
            )}

            <button
              onClick={onOpenLoginModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-all"
            >
              <LogIn className="h-3.5 w-3.5 text-indigo-400" />
              <span>Student Login</span>
            </button>

            <button
              onClick={onOpenTeacherRegisterModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              <UserPlus className="h-3.5 w-3.5 text-slate-950" />
              <span>Teacher Register (80%)</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800 border border-slate-700 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-center">
            <button
              onClick={() => handleNavClick('home')}
              className={`p-2.5 rounded-lg text-sm font-semibold ${
                activeTab === 'home' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('pathways')}
              className={`p-2.5 rounded-lg text-sm font-semibold ${
                activeTab === 'pathways' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
              }`}
            >
              Pathways
            </button>
            <button
              onClick={() => handleNavClick('live')}
              className={`p-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 ${
                activeTab === 'live' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'
              }`}
            >
              <Video className="h-4 w-4" />
              <span>Live Classes</span>
            </button>
            <button
              onClick={() => {
                onOpenCertificateModal();
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-lg text-sm font-semibold bg-slate-800 text-amber-300 flex items-center justify-center gap-1.5"
            >
              <FileCheck2 className="h-4 w-4" />
              <span>Verify Cert</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Dashboards</p>
            <button
              onClick={() => handleNavClick('student-dashboard', 'student')}
              className="w-full text-left px-3 py-2.5 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-800/40 font-semibold flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Student Dashboard
              </span>
              <span className="text-xs text-emerald-400 bg-emerald-900/60 px-2 py-0.5 rounded">Active</span>
            </button>

            <button
              onClick={() => handleNavClick('teacher-dashboard', 'teacher')}
              className="w-full text-left px-3 py-2.5 rounded-lg bg-amber-950/40 text-amber-300 border border-amber-800/40 font-semibold flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Teacher Dashboard (80% Share)
              </span>
              <span className="text-xs text-amber-400 bg-amber-900/60 px-2 py-0.5 rounded">Faculty</span>
            </button>

            <button
              onClick={() => handleNavClick('admin-dashboard', 'admin')}
              className="w-full text-left px-3 py-2.5 rounded-lg bg-purple-950/40 text-purple-300 border border-purple-800/40 font-semibold flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                UNIVERSE Admin
              </span>
              <span className="text-xs text-purple-400 bg-purple-900/60 px-2 py-0.5 rounded">Governance</span>
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onOpenLoginModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-slate-800 text-slate-100 font-bold text-xs border border-slate-700 flex items-center justify-center gap-1.5"
            >
              <LogIn className="h-4 w-4 text-indigo-400" />
              <span>Student Login</span>
            </button>

            <button
              onClick={() => {
                onOpenTeacherRegisterModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow"
            >
              <UserPlus className="h-4 w-4" />
              <span>Teacher Register</span>
            </button>
          </div>

          {onOpenApkFix && (
            <button
              onClick={() => {
                onOpenApkFix();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-rose-950/40 border border-rose-500/40 text-rose-300 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Smartphone className="h-4 w-4 text-rose-400" />
              <span>Fix APK / Vercel Issue Guide</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};

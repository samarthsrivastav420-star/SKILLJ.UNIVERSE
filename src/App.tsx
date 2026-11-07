import React, { useState } from 'react';
import { UserRole, Course } from './types';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { ExplanationBanner } from './components/ExplanationBanner';
import { HeroSection } from './components/HeroSection';
import { PathwaysSection } from './components/PathwaysSection';
import { LiveClassStream } from './components/LiveClassStream';
import { FacultySection } from './components/FacultySection';
import { ExamsSection } from './components/ExamsSection';
import { StudentDashboard } from './components/StudentDashboard';
import { TeacherDashboard } from './components/TeacherDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { ExamModal } from './components/ExamModal';
import { CertificateModal } from './components/CertificateModal';
import { TeacherRegisterModal } from './components/TeacherRegisterModal';
import { StudentLoginModal } from './components/StudentLoginModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { RawScreenshotModal } from './components/RawScreenshotModal';
import { ApkFixModal } from './components/ApkFixModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>('guest');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [studentName, setStudentName] = useState('Aarav Sharma');
  const [facultyName, setFacultyName] = useState('Dr. Aryan Verma');

  // Modals state
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [isTeacherRegisterModalOpen, setIsTeacherRegisterModalOpen] = useState(false);
  const [isStudentLoginModalOpen, setIsStudentLoginModalOpen] = useState(false);
  const [isRawScreenshotModalOpen, setIsRawScreenshotModalOpen] = useState(false);
  const [isApkFixModalOpen, setIsApkFixModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleRoleChange = (role: UserRole) => {
    setCurrentRole(role);
    if (role === 'student') {
      setActiveTab('student-dashboard');
    } else if (role === 'teacher') {
      setActiveTab('teacher-dashboard');
    } else if (role === 'admin') {
      setActiveTab('admin-dashboard');
    } else {
      setActiveTab('home');
    }
  };

  const handleStudentLoginSuccess = (name: string) => {
    setStudentName(name);
    setIsStudentLoginModalOpen(false);
    setCurrentRole('student');
    setActiveTab('student-dashboard');
  };

  const handleTeacherRegisterSuccess = (name: string) => {
    setFacultyName(name);
    setIsTeacherRegisterModalOpen(false);
    setCurrentRole('teacher');
    setActiveTab('teacher-dashboard');
  };

  const handleEnrollCourse = (course: Course) => {
    setCurrentRole('student');
    setActiveTab('student-dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* 1. Explaining the user's question "Ye kya hai" */}
      <ExplanationBanner
        onOpenRawPreview={() => setIsRawScreenshotModalOpen(true)}
        onOpenApkFix={() => setIsApkFixModalOpen(true)}
      />

      {/* 2. Top Ecosystem Announcement Bar (from screenshot) */}
      <AnnouncementBar
        currentRole={currentRole}
        onRoleChange={handleRoleChange}
        onOpenCertificateModal={() => setIsCertificateModalOpen(true)}
        onOpenExamModal={() => setIsExamModalOpen(true)}
      />

      {/* 3. Main Navigation Header */}
      <Navbar
        currentRole={currentRole}
        onRoleChange={handleRoleChange}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        onOpenLoginModal={() => setIsStudentLoginModalOpen(true)}
        onOpenTeacherRegisterModal={() => setIsTeacherRegisterModalOpen(true)}
        onOpenCertificateModal={() => setIsCertificateModalOpen(true)}
        onOpenApkFix={() => setIsApkFixModalOpen(true)}
      />

      {/* 4. Dynamic Views Based on Active Tab & Role */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* Hero Section reflecting screenshot texts */}
            <HeroSection
              onOpenLoginModal={() => setIsStudentLoginModalOpen(true)}
              onOpenTeacherRegisterModal={() => setIsTeacherRegisterModalOpen(true)}
              onOpenExamModal={() => setIsExamModalOpen(true)}
              onExplorePathways={() => setActiveTab('pathways')}
              onOpenCertificateModal={() => setIsCertificateModalOpen(true)}
            />

            {/* Tri-Pathway Explorer (SKILL, COURSE, EDUCATION) */}
            <PathwaysSection
              onSelectCourse={(c) => setSelectedCourse(c)}
              onOpenExamModal={() => setIsExamModalOpen(true)}
            />

            {/* Live Stream Classes Active */}
            <LiveClassStream />

            {/* Standardized 100M Monthly Exams & Grand Yearly Exam */}
            <ExamsSection onOpenExamModal={() => setIsExamModalOpen(true)} />

            {/* 100% Verified Faculty (80% Direct Share) */}
            <FacultySection
              onOpenTeacherRegisterModal={() => setIsTeacherRegisterModalOpen(true)}
            />
          </>
        )}

        {activeTab === 'pathways' && (
          <div className="py-6">
            <PathwaysSection
              onSelectCourse={(c) => setSelectedCourse(c)}
              onOpenExamModal={() => setIsExamModalOpen(true)}
            />
          </div>
        )}

        {activeTab === 'live' && (
          <div className="py-6">
            <LiveClassStream />
          </div>
        )}

        {activeTab === 'student-dashboard' && (
          <StudentDashboard
            studentName={studentName}
            onOpenExamModal={() => setIsExamModalOpen(true)}
            onOpenCertificateModal={() => setIsCertificateModalOpen(true)}
            onNavigateToLive={() => setActiveTab('live')}
          />
        )}

        {activeTab === 'teacher-dashboard' && (
          <TeacherDashboard
            facultyName={facultyName}
            onNavigateToLive={() => setActiveTab('live')}
          />
        )}

        {activeTab === 'admin-dashboard' && (
          <AdminDashboard />
        )}
      </main>

      {/* 5. Footer */}
      <Footer
        onOpenCertificateModal={() => setIsCertificateModalOpen(true)}
        onOpenExamModal={() => setIsExamModalOpen(true)}
        onOpenTeacherRegisterModal={() => setIsTeacherRegisterModalOpen(true)}
      />

      {/* 6. Interactive Modals */}
      <ExamModal
        isOpen={isExamModalOpen}
        onClose={() => setIsExamModalOpen(false)}
      />

      <CertificateModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
      />

      <TeacherRegisterModal
        isOpen={isTeacherRegisterModalOpen}
        onClose={() => setIsTeacherRegisterModalOpen(false)}
        onSuccess={handleTeacherRegisterSuccess}
      />

      <StudentLoginModal
        isOpen={isStudentLoginModalOpen}
        onClose={() => setIsStudentLoginModalOpen(false)}
        onSuccess={handleStudentLoginSuccess}
      />

      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={handleEnrollCourse}
        onOpenExamModal={() => setIsExamModalOpen(true)}
      />

      <RawScreenshotModal
        isOpen={isRawScreenshotModalOpen}
        onClose={() => setIsRawScreenshotModalOpen(false)}
      />

      <ApkFixModal
        isOpen={isApkFixModalOpen}
        onClose={() => setIsApkFixModalOpen(false)}
      />

    </div>
  );
}

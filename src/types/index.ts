export type UserRole = 'guest' | 'student' | 'teacher' | 'admin';

export type PathwayCategory = 'skill' | 'course' | 'education';

export interface Course {
  id: string;
  title: string;
  category: PathwayCategory;
  instructorName: string;
  instructorTitle: string;
  instructorAvatar: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  price: number;
  originalPrice: number;
  thumbnail: string;
  badge?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  totalLectures: number;
  tags: string[];
  description: string;
  syllabusHighlights: string[];
  isLiveNow?: boolean;
}

export interface ExamQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  marks: number;
  negativeMarks: number;
  topic: string;
  explanation: string;
}

export interface ExamDetails {
  id: string;
  title: string;
  type: 'monthly' | 'yearly' | 'practice';
  scheduledDate: string;
  totalMarks: number;
  durationMinutes: number;
  questionsCount: number;
  description: string;
  rules: string[];
  status: 'upcoming' | 'live' | 'completed';
}

export interface ExamResult {
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unanswered: number;
  rawScore: number;
  maxScore: number;
  percentage: number;
  percentile: number;
  rankBadge: string;
  passed: boolean;
}

export interface CertificateData {
  id: string;
  studentName: string;
  rollNumber: string;
  courseName: string;
  category: PathwayCategory;
  facultyName: string;
  issueDate: string;
  grade: 'Distinction' | 'Merit' | 'A+' | 'A';
  scorePct: number;
  verificationHash: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  organization: string;
  experienceYears: number;
  specialization: string;
  verified: boolean;
  directSharePct: number; // e.g. 80%
  studentsTaught: number;
  rating: number;
  avatar: string;
  coursesCount: number;
}

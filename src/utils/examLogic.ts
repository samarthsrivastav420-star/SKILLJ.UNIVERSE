import { ExamQuestion, ExamResult } from '../types';

/**
 * Calculates standardized exam score with optional negative marking.
 * Standard SkillJ Universe Monthly Exam: 100 Marks.
 */
export function calculateExamScore(
  questions: ExamQuestion[],
  userAnswers: Record<number, number | null>
): ExamResult {
  let attempted = 0;
  let correct = 0;
  let incorrect = 0;
  let rawScore = 0;
  let maxScore = 0;

  for (const q of questions) {
    maxScore += q.marks;
    const ans = userAnswers[q.id];

    if (ans !== undefined && ans !== null) {
      attempted++;
      if (ans === q.correctAnswer) {
        correct++;
        rawScore += q.marks;
      } else {
        incorrect++;
        rawScore -= q.negativeMarks;
      }
    }
  }

  // Prevent negative final score on certificate display
  const normalizedScore = Math.max(0, Math.round(rawScore * 10) / 10);
  const percentage = maxScore > 0 ? Math.round((normalizedScore / maxScore) * 1000) / 10 : 0;

  // Percentile and rank estimation based on normalized bell curve
  const percentile = estimatePercentile(percentage);
  const rankBadge = determineRankBadge(percentage);
  const passed = percentage >= 40;

  return {
    totalQuestions: questions.length,
    attempted,
    correct,
    incorrect,
    unanswered: questions.length - attempted,
    rawScore: normalizedScore,
    maxScore,
    percentage,
    percentile,
    rankBadge,
    passed,
  };
}

export function estimatePercentile(percentage: number): number {
  if (percentage >= 95) return 99.8;
  if (percentage >= 90) return 98.5;
  if (percentage >= 80) return 94.2;
  if (percentage >= 70) return 86.0;
  if (percentage >= 60) return 74.5;
  if (percentage >= 50) return 58.0;
  if (percentage >= 40) return 42.0;
  return Math.max(5, Math.round(percentage * 0.8));
}

export function determineRankBadge(percentage: number): string {
  if (percentage >= 90) return 'National Top 1% Scholar';
  if (percentage >= 75) return 'Gold Distinction';
  if (percentage >= 60) return 'Silver Merit Scholar';
  if (percentage >= 40) return 'Certified Qualifier';
  return 'Participating Candidate';
}

export function formatTimeLeft(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

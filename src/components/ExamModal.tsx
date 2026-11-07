import React, { useState, useEffect } from 'react';
import {
  X,
  Clock,
  Award,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { SAMPLE_QUESTIONS, UPCOMING_EXAMS } from '../data/mockData';
import { calculateExamScore, formatTimeLeft } from '../utils/examLogic';
import { ExamResult } from '../types';

interface ExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCertificateRequested?: (scorePct: number) => void;
}

export const ExamModal: React.FC<ExamModalProps> = ({ isOpen, onClose, onCertificateRequested }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number | null>>({});
  const [secondsLeft, setSecondsLeft] = useState(20 * 60); // 20 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState<ExamResult | null>(null);
  const [showReview, setShowReview] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (!isOpen || isSubmitted) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, isSubmitted, userAnswers]);

  if (!isOpen) return null;

  const currentQ = SAMPLE_QUESTIONS[currentQuestionIndex];
  const totalQuestions = SAMPLE_QUESTIONS.length;

  const handleSelectOption = (optIndex: number) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optIndex,
    }));
  };

  const handleClearAnswer = () => {
    if (isSubmitted) return;
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  const handleSubmitExam = () => {
    const calculated = calculateExamScore(SAMPLE_QUESTIONS, userAnswers);
    setResult(calculated);
    setIsSubmitted(true);
  };

  const handleResetExam = () => {
    setUserAnswers({});
    setSecondsLeft(20 * 60);
    setIsSubmitted(false);
    setResult(null);
    setCurrentQuestionIndex(0);
    setShowReview(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Header */}
        <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Award className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Monthly Standardized Exam (1st of Every Month)
              </h3>
              <p className="text-[11px] text-slate-400">
                100 Marks Standard • 10 Questions • Negative Marking: -2.5 Marks
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {!isSubmitted && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 text-amber-300 font-mono text-xs border border-slate-700">
                <Clock className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                <span>{formatTimeLeft(secondsLeft)}</span>
              </div>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Exam"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {!isSubmitted ? (
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Question Area (2 Cols) */}
              <div className="md:col-span-2 space-y-5">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                  <span className="font-semibold text-indigo-400">
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                  </span>
                  <span className="bg-slate-800 px-2 py-0.5 rounded text-amber-300">
                    Topic: {currentQ.topic}
                  </span>
                  <span className="text-emerald-400 font-medium">+10 Marks / -2.5 Marks</span>
                </div>

                {/* Question Text */}
                <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {currentQ.question}
                </h4>

                {/* Options List */}
                <div className="space-y-2.5">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = userAnswers[currentQ.id] === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center gap-3 cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-600/30 border-indigo-400 text-white shadow-md shadow-indigo-600/20'
                            : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                            isSelected
                              ? 'bg-indigo-500 text-white'
                              : 'bg-slate-700 text-slate-300'
                          }`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Actions & Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <button
                    onClick={handleClearAnswer}
                    className="text-xs text-slate-400 hover:text-rose-400 transition-colors font-medium"
                  >
                    Clear Selection
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                      disabled={currentQuestionIndex === 0}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Prev
                    </button>

                    {currentQuestionIndex < totalQuestions - 1 ? (
                      <button
                        onClick={() => setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                        className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
                      >
                        Next
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmitExam}
                        className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer"
                      >
                        Finish & Submit
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Question Navigation Palette (1 Col) */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Question Palette
                  </h5>
                  <div className="grid grid-cols-5 gap-2 mb-4">
                    {SAMPLE_QUESTIONS.map((q, idx) => {
                      const isAnswered = userAnswers[q.id] !== undefined;
                      const isCurrent = currentQuestionIndex === idx;

                      return (
                        <button
                          key={q.id}
                          onClick={() => setCurrentQuestionIndex(idx)}
                          className={`h-9 rounded-lg font-mono font-bold text-xs transition-all ${
                            isCurrent
                              ? 'ring-2 ring-indigo-400 bg-indigo-600 text-white'
                              : isAnswered
                              ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50'
                              : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                          }`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>

                  <div className="space-y-2 text-[11px] text-slate-400 border-t border-slate-800/80 pt-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-emerald-500/40 border border-emerald-400"></span>
                      <span>Answered ({Object.keys(userAnswers).length})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-slate-800 border border-slate-700"></span>
                      <span>Unanswered ({totalQuestions - Object.keys(userAnswers).length})</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 mt-4">
                  <button
                    onClick={handleSubmitExam}
                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                  >
                    Submit 100 Marks Exam
                  </button>
                </div>
              </div>

            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6">
              <div className="text-center max-w-xl mx-auto">
                <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-emerald-400 mb-3 ring-1 ring-emerald-500/40">
                  <Award className="h-10 w-10" />
                </div>
                <h4 className="text-2xl font-black text-white font-['Space_Grotesk']">
                  {result?.passed ? 'Congratulations! Exam Qualified' : 'Exam Attempt Completed'}
                </h4>
                <p className="text-sm text-slate-300 mt-1">
                  Official SkillJ Universe Monthly Scholarship Diagnostic Result
                </p>

                {/* Score Big Display */}
                <div className="mt-4 p-5 rounded-2xl bg-slate-950 border border-slate-800 inline-block w-full">
                  <div className="text-4xl font-black text-amber-400 font-mono">
                    {result?.rawScore} <span className="text-xl text-slate-400">/ 100 Marks</span>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/40">
                    <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                    <span>Rank Tier: {result?.rankBadge}</span>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400">Correct Answers</span>
                  <p className="text-xl font-bold text-emerald-400 font-mono mt-1">
                    {result?.correct} / {result?.totalQuestions}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400">Incorrect (-2.5 ea)</span>
                  <p className="text-xl font-bold text-rose-400 font-mono mt-1">{result?.incorrect}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400">Percentage</span>
                  <p className="text-xl font-bold text-sky-400 font-mono mt-1">{result?.percentage}%</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400">Estimated Percentile</span>
                  <p className="text-xl font-bold text-amber-400 font-mono mt-1">{result?.percentile}th</p>
                </div>
              </div>

              {/* Detailed Answer Key & Review toggle */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setShowReview(!showReview)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-colors"
                >
                  {showReview ? 'Hide Answer Review' : 'View Detailed Answer Key & Explanations'}
                </button>
                <button
                  onClick={handleResetExam}
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Retake Monthly Exam</span>
                </button>
              </div>

              {showReview && (
                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <h5 className="font-bold text-sm text-slate-200">Answer Key & Explanations:</h5>
                  {SAMPLE_QUESTIONS.map((q, idx) => {
                    const userAns = userAnswers[q.id];
                    const isCorrect = userAns === q.correctAnswer;
                    return (
                      <div
                        key={q.id}
                        className={`p-4 rounded-xl border text-xs ${
                          isCorrect
                            ? 'bg-emerald-950/20 border-emerald-800/40'
                            : 'bg-rose-950/20 border-rose-800/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-slate-200">
                            Q{idx + 1}: {q.question}
                          </span>
                          <span className={`font-bold px-2 py-0.5 rounded ${isCorrect ? 'text-emerald-400 bg-emerald-900/50' : 'text-rose-400 bg-rose-900/50'}`}>
                            {isCorrect ? '+10 Marks' : userAns !== undefined ? '-2.5 Marks' : '0 (Skipped)'}
                          </span>
                        </div>
                        <p className="text-slate-400">
                          Your Answer:{' '}
                          <span className="font-semibold text-slate-200">
                            {userAns !== undefined && userAns !== null ? q.options[userAns] : 'Not Answered'}
                          </span>
                        </p>
                        <p className="text-emerald-400 font-semibold mt-0.5">
                          Correct Answer: {q.options[q.correctAnswer]}
                        </p>
                        <p className="text-slate-300 mt-2 bg-slate-900/80 p-2 rounded border border-slate-800">
                          💡 <strong>Explanation:</strong> {q.explanation}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

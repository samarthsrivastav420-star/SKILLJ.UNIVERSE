import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateExamScore, estimatePercentile, determineRankBadge, formatTimeLeft } from './examLogic';
import { ExamQuestion } from '../types';

const mockQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'What is 10 + 10?',
    options: ['10', '20', '30', '40'],
    correctAnswer: 1,
    marks: 25,
    negativeMarks: 5,
    topic: 'Math',
    explanation: '10 + 10 = 20',
  },
  {
    id: 2,
    question: 'Capital of India?',
    options: ['Mumbai', 'Kolkata', 'New Delhi', 'Bengaluru'],
    correctAnswer: 2,
    marks: 25,
    negativeMarks: 5,
    topic: 'GK',
    explanation: 'New Delhi is the capital.',
  },
  {
    id: 3,
    question: 'Which is a frontend library?',
    options: ['Postgres', 'React', 'Docker', 'Linux'],
    correctAnswer: 1,
    marks: 25,
    negativeMarks: 5,
    topic: 'Tech',
    explanation: 'React is a frontend library.',
  },
  {
    id: 4,
    question: 'Speed of light is approximately?',
    options: ['3 x 10^8 m/s', '3 x 10^6 m/s', '300 m/s', '3000 km/s'],
    correctAnswer: 0,
    marks: 25,
    negativeMarks: 5,
    topic: 'Physics',
    explanation: 'c is ~3 x 10^8 m/s',
  },
];

test('calculateExamScore gives 100% when all answers are correct', () => {
  const answers = { 1: 1, 2: 2, 3: 1, 4: 0 };
  const res = calculateExamScore(mockQuestions, answers);

  assert.equal(res.rawScore, 100);
  assert.equal(res.percentage, 100);
  assert.equal(res.attempted, 4);
  assert.equal(res.correct, 4);
  assert.equal(res.incorrect, 0);
  assert.equal(res.passed, true);
  assert.equal(res.rankBadge, 'National Top 1% Scholar');
});

test('calculateExamScore deducts negative marks on wrong answers', () => {
  // Q1 correct (+25), Q2 wrong (-5), Q3 unanswered (0), Q4 wrong (-5)
  // Total = 25 - 5 - 5 = 15 out of 100
  const answers = { 1: 1, 2: 0, 4: 1 };
  const res = calculateExamScore(mockQuestions, answers);

  assert.equal(res.attempted, 3);
  assert.equal(res.correct, 1);
  assert.equal(res.incorrect, 2);
  assert.equal(res.unanswered, 1);
  assert.equal(res.rawScore, 15);
  assert.equal(res.percentage, 15);
  assert.equal(res.passed, false);
});

test('determineRankBadge assigns correct honorific tiers', () => {
  assert.equal(determineRankBadge(95), 'National Top 1% Scholar');
  assert.equal(determineRankBadge(80), 'Gold Distinction');
  assert.equal(determineRankBadge(65), 'Silver Merit Scholar');
  assert.equal(determineRankBadge(45), 'Certified Qualifier');
  assert.equal(determineRankBadge(30), 'Participating Candidate');
});

test('formatTimeLeft formats seconds into mm:ss', () => {
  assert.equal(formatTimeLeft(125), '02:05');
  assert.equal(formatTimeLeft(3600), '60:00');
  assert.equal(formatTimeLeft(0), '00:00');
});

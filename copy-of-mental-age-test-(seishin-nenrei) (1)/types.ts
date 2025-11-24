export interface Option {
  text: string;
  score: number; // 1: Child, 2: Adult, 3: Elder
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export enum AppStep {
  START = 'START',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT',
}

export interface ResultData {
  mentalAge: number;
  description: string;
  title: string;
  colorClass: string;
}
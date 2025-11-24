import React from 'react';
import { Question, Option } from '../types';

interface QuizScreenProps {
  question: Question;
  currentStep: number;
  totalSteps: number;
  onAnswer: (score: number) => void;
  onPrev: () => void;
  selectedScore?: number;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ 
  question, 
  currentStep, 
  totalSteps, 
  onAnswer, 
  onPrev,
  selectedScore
}) => {
  const progress = ((currentStep) / totalSteps) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-xl mx-auto px-4">
      {/* Progress Bar */}
      <div className="w-full mb-8 px-2">
        <div className="flex justify-between text-xs font-bold text-indigo-400 mb-2 uppercase tracking-wider">
          <span>Question {currentStep + 1}</span>
          <span>{totalSteps} Total</span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-500 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="bg-white w-full rounded-3xl shadow-xl p-6 md:p-10 border border-indigo-50 relative overflow-hidden animate-slide-up">
        {/* Decorative background circle */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-50 rounded-full blur-2xl opacity-60 pointer-events-none"></div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight relative z-10">
          {question.text}
        </h2>

        <div className="space-y-4 relative z-10">
          {question.options.map((option: Option, index) => {
             const isSelected = selectedScore !== undefined && option.score === selectedScore;
             return (
              <button
                key={index}
                onClick={() => onAnswer(option.score)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow-md group flex items-center
                  ${isSelected 
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-900 ring-1 ring-indigo-500' 
                    : 'border-transparent bg-slate-50 hover:bg-indigo-50 hover:border-indigo-200 text-gray-700'
                  }`}
              >
                <div className="flex items-center w-full">
                  <span className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full font-bold mr-4 border transition-colors
                      ${isSelected
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'bg-white text-indigo-300 border-indigo-100 group-hover:bg-indigo-500 group-hover:text-white'
                      }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-lg">{option.text}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full mt-8 flex justify-start px-2">
        <button
          onClick={onPrev}
          className="flex items-center text-sm font-semibold transition-colors text-indigo-500 hover:text-indigo-700 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          上一题
        </button>
      </div>
    </div>
  );
};

export default QuizScreen;
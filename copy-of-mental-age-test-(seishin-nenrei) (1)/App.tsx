import React, { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { AppStep } from './types';
import { QUESTIONS } from './constants';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.START);
  const [realAge, setRealAge] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  // Preload styles to prevent flash
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleStart = (age: number | null) => {
    setRealAge(age);
    setStep(AppStep.QUIZ);
    setCurrentQuestionIndex(0);
    setAnswers({});
    window.scrollTo(0, 0);
  };

  const handleAnswer = (score: number) => {
    const questionId = QUESTIONS[currentQuestionIndex].id;
    setAnswers(prev => ({ ...prev, [questionId]: score }));

    // Small delay for UX transition
    setTimeout(() => {
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        window.scrollTo(0, 0);
      } else {
        setStep(AppStep.RESULT);
        window.scrollTo(0, 0);
      }
    }, 250);
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      setStep(AppStep.START);
    }
  };

  const handleRestart = () => {
    setStep(AppStep.START);
    setRealAge(null);
    setAnswers({});
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-sans bg-indigo-50 text-slate-800">
      {/* Header - Hidden on Result Screen for cleaner screenshot */}
      {step !== AppStep.RESULT && (
        <header className="w-full py-4 px-6 flex justify-between items-center bg-white/60 backdrop-blur-md fixed top-0 z-40 border-b border-indigo-50">
           <div className="font-bold text-indigo-900 tracking-tight flex items-center gap-2">
             <span className="bg-indigo-600 text-white w-6 h-6 rounded flex items-center justify-center text-xs">M</span>
             MentalAge<span className="text-indigo-500">Test</span>
           </div>
           <div className="hidden md:block text-xs font-semibold text-indigo-400 uppercase tracking-wider">
             Professional Assessment
           </div>
        </header>
      )}

      <main className="flex-grow container mx-auto flex flex-col items-center justify-center p-4 mt-16 md:mt-0">
        {step === AppStep.START && (
          <StartScreen onStart={handleStart} />
        )}

        {step === AppStep.QUIZ && (
          <QuizScreen 
            question={QUESTIONS[currentQuestionIndex]}
            currentStep={currentQuestionIndex}
            totalSteps={QUESTIONS.length}
            onAnswer={handleAnswer}
            onPrev={handlePrev}
            selectedScore={answers[QUESTIONS[currentQuestionIndex].id]}
          />
        )}

        {step === AppStep.RESULT && (
          <ResultScreen 
            answers={answers}
            realAge={realAge}
            onRestart={handleRestart}
          />
        )}
      </main>
      
      {/* Footer - Simple copyright */}
      {step === AppStep.START && (
        <footer className="w-full text-center py-6 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Mental Age Test · Seishin Nenrei Check</p>
        </footer>
      )}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
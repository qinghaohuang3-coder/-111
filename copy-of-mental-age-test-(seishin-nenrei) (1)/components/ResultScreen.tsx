import React, { useMemo, useState } from 'react';
import { ResultData } from '../types';

interface ResultScreenProps {
  answers: Record<number, number>;
  realAge: number | null;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ answers, realAge, onRestart }) => {
  const [showToast, setShowToast] = useState(false);
  
  const result: ResultData = useMemo(() => {
    // Explicitly cast to number[] to handle potential 'unknown' inference
    const scores = Object.values(answers) as number[];
    const totalScore = scores.reduce((sum, score) => sum + score, 0);

    // Logic: 
    // Min score = 33 (1.0 avg) -> Infant
    // Max score = 99 (3.0 avg) -> Elderly
    
    // Determine Mental Age
    let mentalAge = 0;
    
    // A simplified mapping curve based on the "Seishin Nenrei" concept
    if (totalScore <= 35) mentalAge = 5;
    else if (totalScore <= 40) mentalAge = 12;
    else if (totalScore <= 45) mentalAge = 16;
    else if (totalScore <= 50) mentalAge = 18;
    else if (totalScore <= 55) mentalAge = 21;
    else if (totalScore <= 60) mentalAge = 25;
    else if (totalScore <= 65) mentalAge = 28;
    else if (totalScore <= 70) mentalAge = 33;
    else if (totalScore <= 75) mentalAge = 40;
    else if (totalScore <= 80) mentalAge = 48;
    else if (totalScore <= 85) mentalAge = 55;
    else if (totalScore <= 90) mentalAge = 65;
    else mentalAge = 80;

    // Determine Keywords based on Mental Age
    let title = "";
    let description = "";
    let colorClass = ""; // Gradient class

    if (mentalAge <= 12) {
      title = "天真无邪";
      description = "你的内心住着一个永远长不大的孩子，纯真且充满好奇。";
      colorClass = "from-pink-400 to-rose-400";
    } else if (mentalAge <= 18) {
      title = "青春懵懂";
      description = "充满活力与叛逆，对世界充满幻想，正在探索自我的边界。";
      colorClass = "from-orange-400 to-amber-400";
    } else if (mentalAge <= 25) {
      title = "风华正茂";
      description = "既有成年人的担当，又保留了年轻人的冲劲，处于人生的黄金期。";
      colorClass = "from-emerald-400 to-teal-400";
    } else if (mentalAge <= 35) {
      title = "成熟稳重";
      description = "处事圆滑，不仅能照顾好自己，也能照顾身边的人。";
      colorClass = "from-blue-500 to-indigo-500";
    } else if (mentalAge <= 50) {
      title = "沧海桑田";
      description = "历经世事，看淡浮华。拥有大智慧，内心平静如水。";
      colorClass = "from-violet-500 to-purple-600";
    } else {
      title = "返璞归真";
      description = "通透豁达，世间万物已看破。拥有超脱世俗的平静。";
      colorClass = "from-slate-600 to-gray-800";
    }

    return { mentalAge, title, description, colorClass };
  }, [answers]);

  const diff = realAge ? result.mentalAge - realAge : 0;
  const diffText = realAge 
    ? (diff > 0 ? `(比实际年老 ${diff} 岁)` : diff < 0 ? `(比实际年轻 ${Math.abs(diff)} 岁)` : `(与实际年龄完全一致)`)
    : "";
  const yearOfBirth = new Date().getFullYear() - result.mentalAge;

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareText = `😱 我的心理年龄竟然是 ${result.mentalAge} 岁！获得称号【${result.title}】\n"${result.description}"\n👇 快来测测你的：`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: '心理年龄测试',
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        // User cancelled or share failed, fallback
      }
    } else {
      // Fallback for desktop/browsers without Web Share API
      try {
        await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } catch (err) {
        alert("无法复制链接，请手动分享");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 animate-fade-in py-8 relative">
        
      {/* Result Card - Optimized for Screenshots */}
      <div className="bg-black rounded-3xl overflow-hidden shadow-2xl w-full max-w-sm text-center transform transition-all hover:scale-[1.01] duration-500 ring-4 ring-white/20">
        
        {/* Top Section: Age Display */}
        <div className="pt-12 pb-8 px-6 bg-gray-900 relative">
          <div className="absolute top-4 right-4 text-xs font-mono text-gray-600 border border-gray-700 rounded px-2 py-0.5">
            MENTAL AGE TEST
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-widest mb-4 uppercase">您的心理年龄是</p>
          
          <div className="relative inline-block">
             <h1 className="text-[7rem] leading-none font-bold text-white font-sans tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              {result.mentalAge}
            </h1>
          </div>
          
          {realAge && (
            <p className="text-gray-400 text-sm mt-4 font-light border-t border-gray-800 pt-3 inline-block px-4">
              实际年龄 {realAge} 岁 {diffText}
            </p>
          )}
        </div>

        {/* Bottom Section: Keyword Title */}
        <div className={`py-12 px-6 bg-gradient-to-br ${result.colorClass} relative overflow-hidden`}>
             {/* Decorative noise/texture overlay */}
             <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
             
             <h2 className="text-5xl font-black text-white mb-3 relative z-10 tracking-wide drop-shadow-md">
                {result.title}
             </h2>
             <p className="text-white/90 text-sm font-bold relative z-10 opacity-90 uppercase tracking-[0.2em]">
                精神出生年：{yearOfBirth}
             </p>
        </div>
      </div>

      {/* Description Text */}
      <div className="mt-8 max-w-md text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-indigo-50">
          <p className="text-gray-700 leading-relaxed font-medium">
              {result.description}
          </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col w-full max-w-xs space-y-3 pb-8">
        <button
          onClick={handleShare}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center text-lg group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          分享结果 / 复制链接
        </button>

        <button
          onClick={onRestart}
          className="w-full bg-white hover:bg-gray-50 text-indigo-500 font-semibold py-3 px-8 rounded-xl border border-indigo-100 transition-colors flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          重新测试
        </button>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur text-white px-6 py-4 rounded-xl shadow-2xl animate-fade-in z-50 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          已复制链接！快去粘贴分享吧
        </div>
      )}
    </div>
  );
};

export default ResultScreen;
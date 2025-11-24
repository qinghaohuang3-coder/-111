import React, { useState } from 'react';

interface StartScreenProps {
  onStart: (age: number | null) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [ageInput, setAgeInput] = useState<string>('');
  const [isSecret, setIsSecret] = useState<boolean>(false);

  const handleStart = () => {
    if (isSecret) {
      onStart(null);
    } else {
      const age = parseInt(ageInput, 10);
      if (!isNaN(age) && age > 0 && age < 120) {
        onStart(age);
      } else if (ageInput === '') {
          // Allow empty input to be treated as secret/skip
          onStart(null);
      } else {
        alert("请输入有效的年龄，或者选择“保密”");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center animate-fade-in">
      <h1 className="text-4xl font-bold text-indigo-900 mb-2">心理年龄测试</h1>
      <p className="text-indigo-600/80 mb-8 font-medium tracking-wide text-sm">精神年龄チエック</p>
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-indigo-50">
        <div className="mb-6">
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            这是一个源自日本的经典心理测试。<br/>
            通过33个生活细节问题，<br/>
            精准分析你内心深处的真实年龄。
          </p>
        </div>

        <div className="space-y-4 mb-8">
            <div className={`transition-all duration-300 ${isSecret ? 'opacity-50 grayscale' : 'opacity-100'}`}>
                <label htmlFor="age" className="block text-left text-sm font-semibold text-gray-700 mb-1 ml-1">
                实际年龄 <span className="text-xs font-normal text-gray-400">(选填)</span>
                </label>
                <input
                type="number"
                id="age"
                value={ageInput}
                onChange={(e) => setAgeInput(e.target.value)}
                disabled={isSecret}
                placeholder="例如: 25"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-gray-800 placeholder-gray-300 text-lg"
                />
            </div>

            <div className="flex items-center justify-end space-x-2">
                <input
                type="checkbox"
                id="secret"
                checked={isSecret}
                onChange={(e) => setIsSecret(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer"
                />
                <label htmlFor="secret" className="text-sm text-gray-500 cursor-pointer select-none">
                年龄保密
                </label>
            </div>
        </div>

        <button
          onClick={handleStart}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-lg tracking-wide"
        >
          开始测试
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
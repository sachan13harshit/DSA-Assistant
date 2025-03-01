import React from 'react';
import { Code, ArrowRight } from 'lucide-react';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen grid-pattern flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-900 p-3 rounded-full">
            <Code size={40} className="text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
          Talk to your DSA problems using AI
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Seamlessly interact with LeetCode problems and get expert guidance. Whether you're
          seeking answers, exploring algorithms, or just curious, our DSA Learning Assistant brings
          solutions to your fingertips, making learning more accessible than ever before.
        </p>
        
        <button 
          onClick={onGetStarted}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all transform hover:scale-105"
        >
          Get Started For Free
          <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
      
      
    </div>
  );
};

export default LandingPage;
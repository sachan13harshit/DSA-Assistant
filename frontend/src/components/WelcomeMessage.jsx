import React from 'react';
import { BookOpen, Code, Brain, FileText, HelpCircle } from 'lucide-react';

const WelcomeMessage = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl mx-auto my-6 px-4">
          <div className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700 flex flex-col items-center text-center cursor-pointer">
            <div className="mb-4">
              <Code className="text-blue-400" size={24} />
            </div>
            <h3 className="font-medium text-gray-200 mb-2">Submit LeetCode Problems</h3>
            <p className="text-gray-400 text-sm">
              Paste a LeetCode URL to get specialized help with that problem
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700 flex flex-col items-center text-center cursor-pointer">
            <div className="mb-4">
              <HelpCircle className="text-indigo-400" size={24} />
            </div>
            <h3 className="font-medium text-gray-200 mb-2">Ask Questions</h3>
            <p className="text-gray-400 text-sm">
              Get explanations, hints, or step-by-step solutions
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700 flex flex-col items-center text-center cursor-pointer">
            <div className="mb-4">
              <BookOpen className="text-purple-400" size={24} />
            </div>
            <h3 className="font-medium text-gray-200 mb-2">Learn Concepts</h3>
            <p className="text-gray-400 text-sm">
              Understand the underlying data structures and algorithms
            </p>
          </div>
        </div>
      );
};

export default WelcomeMessage;
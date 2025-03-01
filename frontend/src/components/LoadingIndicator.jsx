import React from 'react';
import { Bot } from 'lucide-react';

const LoadingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex max-w-[80%] md:max-w-[70%]">
        <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-gray-700 mr-2">
          <Bot size={16} className="text-white" />
        </div>
        
        <div className="rounded-lg px-4 py-3 bg-gray-800 border border-gray-700">
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
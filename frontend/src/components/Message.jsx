import React from 'react';
import { User, Bot } from 'lucide-react';

const Message = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex max-w-[80%] md:max-w-[70%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${isUser ? 'bg-blue-600 ml-2' : 'bg-gray-700 mr-2'}`}>
          {isUser ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
        </div>
        
        <div className={`rounded-lg px-4 py-3 ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-800 border border-gray-700 text-gray-100'}`}>
          {message.leetCodeUrl && (
            <div className="mb-2 text-sm">
              <span className={`font-semibold ${isUser ? 'text-blue-200' : 'text-indigo-300'}`}>Problem:</span>{' '}
              <a 
                href={message.leetCodeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`underline ${isUser ? 'text-blue-200' : 'text-blue-300'} hover:opacity-80`}
              >
                {message.leetCodeUrl}
              </a>
            </div>
          )}
          
          <div className="whitespace-pre-wrap">
            {message.text.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < message.text.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
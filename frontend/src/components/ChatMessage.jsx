import React, { useRef, useEffect } from 'react';
import Message from './Message';
import WelcomeMessage from './WelcomeMessage';
import LoadingIndicator from './LoadingIndicator';

const ChatMessages = ({ messages, isLoading }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div 
      className="max-w-10xl mx-auto w-full h-[calc(100vh-200px)] overflow-y-auto p-4 space-y-2"
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(156, 163, 175, 0.5) rgba(229, 231, 235, 0.5)'
      }}
    >
      {messages.length === 0 ? (
        <WelcomeMessage />
      ) : (
        messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))
      )}
      
      {isLoading && <LoadingIndicator />}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
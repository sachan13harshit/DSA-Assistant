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
    <div className="max-w-10xl mx-auto w-full p-4 space-y-2">
      {messages.length === 0 ? (
        <WelcomeMessage flex justify-center items-center />
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
import React from 'react';
import Header from './Header';
import ChatMessages from './ChatMessage';
import ChatInput from './ChatInput';

const ChatPage = ({ 
  messages, 
  input, 
  setInput, 
  leetCodeUrl, 
  setLeetCodeUrl, 
  handleSendMessage, 
  isLoading 
}) => {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-900 overflow-hidden">
      <Header />
      
      <div className="flex-1">
        <ChatMessages flex justify-center items-center
          messages={messages}
          isLoading={isLoading}
        />
      </div>
      
      <ChatInput
        input={input}
        setInput={setInput}
        leetCodeUrl={leetCodeUrl}
        setLeetCodeUrl={setLeetCodeUrl}
        handleSendMessage={handleSendMessage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ChatPage;
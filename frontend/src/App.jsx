import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import ChatPage from './components/ChatPage';

function App() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [leetCodeUrl, setLeetCodeUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim() && !leetCodeUrl.trim()) return;
    
    // Add user message to chat
    const userMessage = {
      sender: 'user',
      text: input,
      leetCodeUrl: leetCodeUrl
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Convert messages to the format expected by the API
      const messageHistory = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.sender === 'user' && msg.leetCodeUrl 
          ? `LeetCode Problem: ${msg.leetCodeUrl}\n\n${msg.text}`
          : msg.text
      }));
      
      // Add the current message
      const currentMessage = {
        role: 'user',
        content: leetCodeUrl 
          ? `LeetCode Problem: ${leetCodeUrl}\n\n${input}`
          : input
      };
      
      // Make API call to backend which uses GPT-4 Turbo
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messageHistory, currentMessage],
          newLeetCodeUrl: leetCodeUrl // Only send the URL if it's new
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from assistant');
      }
      
      const data = await response.json();
      
      const assistantResponse = {
        sender: 'assistant',
        text: data.message
      };
      
      setMessages(prev => [...prev, assistantResponse]);
      // Only clear the LeetCode URL after successful response
      setLeetCodeUrl('');
      setIsLoading(false);
    } catch (error) {
      console.error('Error sending message:', error);
      // Add error message to chat
      setMessages(prev => [...prev, {
        sender: 'assistant',
        text: 'Sorry, I encountered an error. Please try again later.'
      }]);
      setIsLoading(false);
    }
  };

  const handleGetStarted = () => {
    setShowChat(true);
  };

  return (
    <div className="min-h-screen w-full bg-gray-900">
      {!showChat ? (
        <LandingPage onGetStarted={handleGetStarted} />
      ) : (
        <ChatPage 
          messages={messages}
          input={input}
          setInput={setInput}
          leetCodeUrl={leetCodeUrl}
          setLeetCodeUrl={setLeetCodeUrl}
          handleSendMessage={handleSendMessage}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default App;
import { Send, Link } from "lucide-react";
import { useState } from "react";

const ChatInput = ({ input, setInput, leetCodeUrl, setLeetCodeUrl, handleSendMessage, isLoading }) => {
  const [showLeetCodeInput, setShowLeetCodeInput] = useState(false);
  const isDisabled = isLoading || (!input.trim() && !leetCodeUrl.trim());

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isDisabled) {
        handleSendMessage();
        setShowLeetCodeInput(false);
      }
    }
  };

  const handleSendClick = () => {
    if (!isDisabled) {
      handleSendMessage();
      setShowLeetCodeInput(false); 
    }
  };

  return (
    <div className="bg-[#1c1c1c] p-4 border-t border-gray-800">
      <div className="flex items-center gap-3 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 flex-1 bg-[#2a2a2a] rounded-lg px-3 py-2 border border-gray-700">
          <button onClick={() => setShowLeetCodeInput((prev) => !prev)} className="focus:outline-none">
            <Link size={20} className="text-gray-400" />
          </button>
          <input
            type="text"
            placeholder="Ask anything DSA Assistant..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none focus:outline-none text-white placeholder-gray-400 text-sm"
          />
        </div>
        <button
          onClick={handleSendClick}
          disabled={isDisabled}
          className={`p-2 rounded-lg ${
            isDisabled ? "bg-gray-700 text-gray-500 cursor-not-allowed" : "bg-[#2a2a2a] text-white hover:bg-gray-700"
          } transition-colors`}
        >
          <Send size={20} />
        </button>
      </div>
      {showLeetCodeInput && (
        <div className="mt-2 max-w-5xl mx-auto">
          <input
            type="text"
            placeholder="Enter LeetCode URL..."
            value={leetCodeUrl}
            onChange={(e) => setLeetCodeUrl(e.target.value)}
            className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none placeholder-gray-400 text-sm"
          />
        </div>
      )}
    </div>
  );
};

export default ChatInput;

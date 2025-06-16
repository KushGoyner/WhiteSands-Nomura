import React, { useState, useRef, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { RiChatSmileAiLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '👋 Hi there! How can I help you today?' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, open]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const newMessage = { sender: 'user', text: message.trim() };
    setMessages(prev => [...prev, newMessage]);
    setMessage("");
    setLoading(true);

    
    setTimeout(() => {
      const botReply = getBotReply(message);
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
      setLoading(false);
    }, 1000);
  };

  const getBotReply = (msg) => {
    msg = msg.toLowerCase();
    if (msg.includes("hello") || msg.includes("hi")) return "Hello! 👋 How can I assist you today?";
    if (msg.includes("help")) return "Sure! Tell me what you need help with.";
    if (msg.includes("bye")) return "Goodbye! Have a great day 😊";
    return "I'm not sure how to respond to that yet, but I'm learning!";
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <div className="fixed bottom-8 right-8 z-[50]">
      {open ? (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col border border-gray-300">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-2 bg-green-600 text-white rounded-t-lg">
            <h2 className="text-sm font-bold">AI Chat Assistant</h2>
            <button onClick={() => setOpen(false)}>
              <IoMdClose className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-700">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span
                  className={`inline-block px-3 py-1.5 rounded-lg ${
                    msg.sender === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && (
              <div className="text-left text-gray-400 text-sm italic">Bot is typing...</div>
            )}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Input Field */}
          <div className="px-4 py-2 border-t border-gray-200 flex">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full px-3 py-1.5 text-sm border rounded focus:outline-none"
            />
            <button onClick={handleSendMessage}>
              <IoSend className="w-6 h-6 text-blue-600 ml-2" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700"
          aria-label="Open Chatbot"
        >
          <RiChatSmileAiLine className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;

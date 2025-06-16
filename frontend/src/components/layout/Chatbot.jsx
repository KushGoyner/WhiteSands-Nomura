import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { RiChatSmileAiLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";


const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [message,setMessage] = useState("");

  const handleSendMessage = ()=>{
    console.log(message)
    setMessage("")
  }


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

          {/* Chat area */}
          <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-700">
            <p className="mb-2">👋 Hi there! How can I help you today?</p>
            {/* Add messages or interaction logic here */}
          </div>

          {/* Input area (optional, static for now) */} 
          <div className="px-4 py-2 border-t border-gray-200 flex">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              className="w-full px-3 py-1.5 text-sm border rounded focus:outline-none"
              onChange={(e)=>setMessage(e.target.value)}
            />
            <IoSend className='w-6 h-6  m-1' onClick={handleSendMessage}/>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-green-700"
          aria-label="Open Chatbot"
        >
          <RiChatSmileAiLine className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
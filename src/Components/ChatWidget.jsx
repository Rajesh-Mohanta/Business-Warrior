import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: `Hello and thank you for contacting us! You have reached us outside of support hours which is Monday - Friday 7 a.m. to 6 p.m. PST. If this is urgent, please contact us at support@businesswarrior.com.`,
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white w-96 h-[28rem] rounded-lg shadow-lg flex flex-col">
          <div className="bg-[#007bff] text-white p-4 rounded-t-lg flex justify-between items-center">
            <span>Chat with a Business Warrior Expert</span>
            <button onClick={toggleChat} className="text-white">
              &#10005;
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 p-3 rounded-lg ${
                  msg.sender === "bot"
                    ? "bg-[#e6f3ff] text-gray-700"
                    : "bg-gray-100 text-gray-900 text-right"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-2 border-t border-gray-200 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write a message"
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-[#007bff] text-white p-2 rounded-r-lg hover:bg-[#0069d9] transition flex items-center justify-center"
            >
              <IoMdSend className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-[#007bff] text-white p-3 rounded-full shadow-lg hover:bg-[#0069d9] transition"
        >
          Chat
        </button>
      )}
    </div>
  );
}

export default ChatWidget;

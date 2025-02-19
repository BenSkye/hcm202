'use client'
import { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import { format } from "date-fns";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const genAI = new GoogleGenerativeAI("AIzaSyBjZUmfEeDZudrn5WXVGbzEZFXA6Kbxh7Q");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });




  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Tạo tin nhắn người dùng
    const userMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      // Gửi đến AI và nhận phản hồi
      const result = await model.generateContent(input);
      const responseText = result.response.text();

      // Tạo tin nhắn từ AI
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: responseText || "Xin lỗi, tôi không thể trả lời ngay bây giờ.",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Lỗi khi gửi tin nhắn:", error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 h-[80vh] shadow-lg rounded-xl overflow-hidden mx-auto mt-10 border border-gray-300 bg-white">
      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-100" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/640px-Flag_of_Vietnam.svg.png')", backgroundSize: "cover" }}>
        {messages.map((message) => (
          <div key={message.id} className={`flex items-end ${message.isUser ? "justify-end" : "justify-start"}`}>
            <div className={`p-3 max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-md ${message.isUser ? "bg-black text-white" : "bg-white text-black"}`}>
              <p className="text-sm">{message.text}</p>
              <span className="block text-xs text-gray-500 mt-1 text-right">{format(message.timestamp, "HH:mm")}</span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start items-center space-x-2">
            <div className="p-2 bg-gray-300 text-black rounded-lg shadow-md flex items-center space-x-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100" />
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 bg-white border-t border-gray-300 flex items-center">
        <input
          type="text"
          className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all shadow-sm"
          placeholder="Nhập tin nhắn... vd: (Ngày sinh Chủ Tịch Hồ Chí Minh)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <button
          className="ml-3 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all shadow-md disabled:bg-gray-400"
          onClick={sendMessage}
          disabled={!input.trim()}
        >
          <IoSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
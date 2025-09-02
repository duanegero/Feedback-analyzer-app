import { useState } from "react";
import { MdOutlineChat } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
      {/* Button to toggle chat */}
      <button
        onClick={toggleChat}
        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-green-400 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition cursor-pointer flex items-center justify-center text-3xl">
        {isOpen ? <IoMdClose /> : <MdOutlineChat />}
      </button>

      {/* Chat iframe, visible only when isOpen is true */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "70px",
            right: "20px",
            width: "400px",
            height: "500px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            background: "white",
          }}>
          <iframe
            src="http://localhost:5678/webhook/c51e0673-3762-4d06-801e-a33529e03e93/chat"
            style={{ width: "100%", height: "100%", border: "none" }}
            title="n8n Chat bot"
          />
        </div>
      )}
    </div>
  );
}

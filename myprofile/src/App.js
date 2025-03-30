import React, { useState } from "react";
import { FaComments, FaArrowUp } from "react-icons/fa"; // Import các icon

import Header from "./components/Header"; // Import component Header
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Footer from "./components/Footer";
import PageIntermediate from "./components/PageIntermediate";
import Chatbot from './components/Chatbot';

const App = () => {
  // Trạng thái để mở/đóng chatbot
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hàm mở hoặc đóng chatbot
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="relative bg-black">
      {/* Header */}
      <Header />
      <div>
        <Page1 />
        <PageIntermediate />
      </div>

      {/* Nội dung các phần */}
      <div id="story">
        <Page2 />
      </div>

      <div id="education">
        <Page3 />
      </div>

      <div id="experience">
        <Page4 />
      </div>

      <div id="documents">
        <Page5 />
      </div>

      <div id="contact">
        <Footer />
      </div>

      {/* Các nút cố định theo hàng dọc */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4">
        {/* Nút Chat */}
        <button
          onClick={toggleChatbot}
          className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 focus:outline-none relative group"
        >
          <FaComments size={24} /> {/* Icon Chat */}
          
          {/* Bong bóng thông báo */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-gray-800 text-white text-sm py-2 px-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-64">
            Bạn có thể hiểu rõ trình hơn bằng cách Chat với AI của anh ấy!
          </div>
        </button>

        {/* Nút Quay lại đầu trang */}
        <button
          onClick={scrollToTop}
          className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 focus:outline-none"
        >
          <FaArrowUp size={24} /> {/* Icon Mũi tên lên */}
        </button>
      </div>

      {/* Hiển thị cửa sổ chat nếu trạng thái isChatbotOpen là true */}
      {isChatbotOpen && (
        <div className="chatbot-window fixed top-16 right-6 bg-white p-4 shadow-lg rounded-lg w-80 h-96">
          <Chatbot />
        </div>
      )}
    </div>
  );
};

export default App;

import React from 'react';
import selfImage from '../assets/self.jpg';

const Page2 = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      {/* Container tổng */}
      <div className="flex w-4/5 h-4/5 bg-black shadow-lg rounded-lg overflow-hidden">
        {/* Cột bên trái */}
        <div className="flex flex-col items-center justify-center w-1/4 bg-black text-white relative">
          {/* Đường thẳng đầu tiên */}
          <div className="h-20 border-l-2 border-white"></div>
          {/* Chữ cái S T O R Y */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-noto-bold text-customOrange">S</p>
            <p className="text-3xl font-noto-bold text-customOrange">T</p>
            <p className="text-3xl font-noto-bold text-customOrange">O</p>
            <p className="text-3xl font-noto-bold text-customOrange">R</p>
            <p className="text-3xl font-noto-bold text-customOrange">Y</p>
          </div>
          {/* Đường thẳng dưới */}
          <div className="flex-grow border-l-2 border-white"></div>
        </div>

        {/* Nội dung bên phải */}
        <div className="flex flex-1 flex-col md:flex-row p-8 text-white">
          {/* Hình ảnh */}
          <div className="w-1/3 flex justify-center items-center">
            <img
              src={selfImage} // Thay đường dẫn bằng hình ảnh của bạn
              alt="Story Image"
              className="rounded-xl shadow-lg h-full object-cover"
            />
          </div>

          {/* Text nội dung */}
          <div className="w-2/3 pl-8 flex flex-col justify-center">
            {/* Tiêu đề */}
            <div className="flex items-center">
          <h1 className="text-4xl font-noto-bold mb-4">From Struggles</h1>
          <span className="mx-2"></span>
          <h1 className="text-4xl font-noto-bold mb-4 text-customOrange">to Strength</h1>
        </div>

            <h2 className="text-2xl mb-8 font-noto">
              My Journey to an MBA Dream
            </h2>

            {/* Đoạn văn */}
            <p className="mb-6 font-notose-light">
              It all started with a dream of achieving more, becoming more. The journey was
              full of challenges, but each step taught me resilience and determination.
            </p>
            <p className="mb-6 font-notose-light">
              From learning the basics of business to networking with industry leaders, every
              moment has shaped my path forward.
            </p>

            {/* Nút */}
            <button className="bg-customOrange opacity-80 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700  font-noto-regu">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;

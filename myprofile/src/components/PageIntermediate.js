import React from 'react';
import backgroundImage from '../assets/R.jpg';

const PageIntermediate = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Hình nền cố định */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed', // Hình nền đứng yên
        }}
      ></div>

      {/* Lớp phủ chuyển động */}
      <div className="relative w-full h-full">
        {/* Nội dung lớp phủ */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 animate-slide"></div>

        {/* Câu nói */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-24">
        <p className="text-white text-4xl font-noto-bold text-center px-4">
            “When you want something, all the universe conspires in helping you to achieve it”
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageIntermediate;

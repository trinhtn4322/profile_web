import React from 'react';
import selfImage from '../assets/self.jpg'; // Đảm bảo rằng bạn có tấm ảnh self.jpg trong thư mục assets
import nameImage from '../assets/name.png'; // Đảm bảo rằng bạn có tấm ảnh name.png trong thư mục assets
import { FaFacebook } from 'react-icons/fa'; // Thư viện Font Awesome để sử dụng biểu tượng Facebook
import { TbMailFilled } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaSquareGithub } from "react-icons/fa6";

const Page1 = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black relative"> {/* Background đen */}
      {/* Phần ảnh self nằm toàn màn hình */}
      <img
        src={selfImage}
        alt="Self"
        className="absolute top-0 left-0 w-full h-full object-cover" // Ảnh self chiếm toàn bộ màn hình
      />
      
      <div className="flex w-full justify-between items-center p-10 z-10">

        {/* Phía giữa - Thay tên bằng ảnh name.png */}
        <div className="flex flex-1 justify-start">
          <img src={nameImage} alt="Name" className="w-auto h-[250px] object-contain" /> {/* Tăng kích thước ảnh name */}
        </div>

        {/* Phía bên phải - Đường thẳng với biểu tượng Facebook */}
        <div className="flex justify-center items-center w-1/7">
          <div className="flex flex-col items-center">
            <div className="border-l-2 border-white h-24"></div>
            <FaFacebook size={30} className="mt-4 text-customOrange cursor-pointer  hover:text-blue-500" />

            {/* Các biểu tượng liên kết dưới Facebook */}
            <div className="flex flex-col items-center mt-6 space-y-4">
              {/* Biểu tượng Email */}
              <a href="mailto:trinhnhattran@gmail.com" className="text-2xl  text-customOrange  hover:text-blue-500">
                <TbMailFilled />
              </a>

              {/* Biểu tượng Phone */}
              <a href="tel:+1234567890" className="text-2xl  text-customOrange hover:text-blue-500">
                <FaPhoneAlt />
              </a>

              {/* Biểu tượng LinkedIn */}
              <a href="https://www.linkedin.com/in/trinhnhattran" target="_blank" rel="noopener noreferrer" className="text-2xl  text-customOrange hover:text-blue-500">
                <ImLinkedin />
              </a>

              {/* Biểu tượng GitHub */}
              <a href="https://github.com/trinhnhattran" target="_blank" rel="noopener noreferrer" className="text-3xl text-customOrange hover:text-blue-500">
                <FaSquareGithub />
              </a>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Page1;

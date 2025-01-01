import React, { useState, useEffect } from "react";
import logo from "../assets/TRINHTN.png";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true); // Trạng thái hiển thị header
  const [lastScrollY, setLastScrollY] = useState(0); // Theo dõi vị trí cuộn trước đó

  // Hàm xử lý khi cuộn
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Cuộn xuống và đã cuộn qua một khoảng -> Ẩn header
      setShowHeader(false);
    } else {
      // Cuộn lên hoặc gần đầu trang -> Hiện header
      setShowHeader(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-black flex items-center justify-between py-4 px-10 shadow-md transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center">
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="w-[120px] h-auto object-contain"
          />
        </a>
      </div>

      <nav>
        <div className="flex space-x-8">
          <a
            href="#story"
            className="text-white hover:text-green-400 cursor-pointer font-noto-regu"
          >
            Story
          </a>
          <a
            href="#education"
            className="text-white hover:text-green-400 cursor-pointer font-noto-regu"
          >
            Education
          </a>
          <a
            href="#experience"
            className="text-white hover:text-green-400 cursor-pointer font-noto-regu"
          >
            Experience
          </a>
          <a
            href="#documents"
            className="text-white hover:text-green-400 cursor-pointer font-noto-regu"
          >
            Documents
          </a>
          <a
            href="#contact"
            className="text-white hover:text-green-400 cursor-pointer font-noto-regu"
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;

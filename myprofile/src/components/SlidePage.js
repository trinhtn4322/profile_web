import React, { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

// Tạo trang trung gian với slider
const SlidePage = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false, // Tắt dấu chấm ở dưới slider
    infinite: true, // Lặp lại vòng trượt
    speed: 500, // Tốc độ trượt
    slidesToShow: 1, // Số lượng hình ảnh hiển thị một lần
    slidesToScroll: 1, // Số lượng hình ảnh trượt mỗi lần
    autoplay: true, // Tự động trượt
    autoplaySpeed: 2000, // Thời gian tự động trượt
    arrows: false, // Tắt mũi tên điều hướng
    afterChange: (current) => {
      // Khi slider hoàn tất một vòng trượt
      if (current === 0) {
        sliderRef.current.slickGoTo(0); // Quay lại slide đầu tiên
      }
    },
  };

  return (
    <div className="h-fit bg-black flex items-center justify-center overflow-hidden">
      <motion.div
        className="w-full h-full" // Chiếm hết chiều rộng và chiều cao
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Slider ref={sliderRef} {...settings} className="w-full h-full">
          <div>
            <img
              src="https://via.placeholder.com/1920x800/ff7f7f/333333"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1920x800/7f7fff/333333"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1920x800/7fff7f/333333"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1920x800/fff77f/333333"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </div>
        </Slider>
      </motion.div>
    </div>
  );
};

export default SlidePage;
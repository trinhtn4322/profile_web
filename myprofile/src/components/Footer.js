import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';  // Import icon

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bạn có thể xử lý form dữ liệu ở đây (lưu vào cơ sở dữ liệu, gửi email, v.v.)
    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn đã nhập thông tin!");
  };

  return (
    <footer className="bg-white text-black py-16 mt-12">
      <div className="container mx-auto px-6">
        {/* Footer Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Thông Tin Cá Nhân</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaUserAlt className="text-gray-600" />
                <span><strong>Name:</strong> Trinh Nhat Tran</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-gray-600" />
                <span><strong>Address:</strong> 6/213, Le Loi Street, Da Huoai District, Lam Dong Province</span>
              </div>
              <div className="flex items-center space-x-2">
                <span><strong>National:</strong> Vietnam</span>
              </div>
              <div className="flex items-center space-x-2">
                <span><strong>Code:</strong> 670000</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-gray-600" />
                <span><strong>Phone:</strong> +84 364687376</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-600" />
                <span><strong>Email:</strong> trinhtn43222gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span><strong>Date of B:</strong> 04-03-2024</span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Nhập Thông Tin Của Bạn</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-800">Tên của bạn</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Nhập tên của bạn"
                />
              </div>
              <div>
                <label htmlFor="emailOrPhone" className="block text-lg font-medium text-gray-800">Email hoặc Số điện thoại</label>
                <input
                  type="text"
                  id="emailOrPhone"
                  name="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Nhập email hoặc số điện thoại"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                Gửi Thông Tin
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">© 2024 Trinh Nhat Tran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

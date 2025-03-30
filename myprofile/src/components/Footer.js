import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';  // Import icon
import emailjs from "emailjs-com";  

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    message: "",  // Thêm field message
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
  
    // Kiểm tra nếu tất cả các trường bắt buộc đều đã được nhập
    if (!formData.name || !formData.emailOrPhone || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
  
    emailjs.sendForm('trinhtn4322', 'template_trinhtn', e.target, 'zPwDh4VwmQ7oJE8wI')
      .then((result) => {
        alert('Message Sent Successfully');
        // Reset form data after successful submission
        setFormData({
          name: "",
          emailOrPhone: "",
          message: "",
        });
      }, (error) => {
        console.log(error.text);
        alert('Something went wrong!');
      });
  };

  return (
    <footer className="bg-black text-white py-16 mt-12 shadow-xl">
      <div className="container mx-auto px-6">
        {/* Footer Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-16">
          <div className="space-y-6">
            <h1 className="text-4xl font-noto-bold mb-4">I Look Forward to</h1>
            <h1 className="text-4xl font-noto-bold mb-4 text-customOrange flex px-20">Connecting With You!</h1>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaUserAlt className="text-gold" />
                <span><strong className="font-notose-regu text-customOrange">Name:</strong> Trinh Nhat Tran</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-gold" />
                <span><strong className="font-notose-regu text-customOrange">Address:</strong> 6/213, Le Loi Street, Da Huoai District, Lam Dong Province</span>
              </div>
              <div className="flex items-center space-x-4">
                <span><strong className="font-notose-regu text-customOrange">Country:</strong> Vietnam</span>
              </div>
              <div className="flex items-center space-x-4">
                <span><strong className="font-notose-regu text-customOrange">Code:</strong> 670000</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-gold" />
                <span><strong className="font-notose-regu text-customOrange">Phone:</strong> +84 364687376</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-gold" />
                <span><strong className="font-notose-regu text-customOrange">Email:</strong> trinhtn43222@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <span><strong className="font-notose-regu text-customOrange">Date of Birth:</strong> 04-03-2002</span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-white">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent text-white border-b-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-gold transition duration-300"
                  placeholder="Enter your name"
                  required  // Đặt trường này là bắt buộc
                />
              </div>
              <div>
                <label htmlFor="emailOrPhone" className="block text-lg font-medium text-white">Email or Phone Number</label>
                <input
                  type="text"
                  id="emailOrPhone"
                  name="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent text-white border-b-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-gold transition duration-300"
                  placeholder="Enter your email or phone number"
                  required  // Đặt trường này là bắt buộc
                />
              </div>
              {/* Thêm ô nhập Message */}
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-white">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent text-white border-b-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-gold transition duration-300"
                  placeholder="Enter your message"
                  rows="4"  // Điều chỉnh chiều cao của textarea
                  required  // Đặt trường này là bắt buộc
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 border-2 border-dashed border-gold text-white rounded-lg text-lg font-semibold hover:bg-yellow-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-gold transition duration-300"
              >
                Submit Information
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">© 2024 Trinh Nhat Tran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

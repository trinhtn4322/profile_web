import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { RingLoader } from "react-spinners";
import { MdSend, MdAttachFile } from "react-icons/md";
import './Chatbot.css';
import ReactDOMServer from "react-dom/server";
import { TbRobot } from "react-icons/tb";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "user2", text: "XIN CHÀO BẠN CẦN BIẾT THÔNG TIN GÌ VỀ TRÌNH ?" },
  ]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);
const handleDragEnter = () => setIsDragging(true);
const handleDragLeave = () => setIsDragging(false);

  const messagesEndRef = useRef(null);


  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      processFile(droppedFile);
    }
  };
  
  
  const handlePaste = (e) => {
    const clipboardItems = e.clipboardData.items;
    for (let i = 0; i < clipboardItems.length; i++) {
      const item = clipboardItems[i];
      if (item.type.startsWith("image/")) {
        const blob = item.getAsFile();
        processFile(blob); // Gửi ảnh ngay lập tức
        break;
      }
    }
  };
  
  
  const processFile = async (file) => {
    if (file.type.startsWith("image/")) {
      const fileURL = URL.createObjectURL(file);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user1", text: "", image: fileURL },
      ]);
  
      const formData = new FormData();
      formData.append("file", file);
  
      try {
        setIsLoading(true);
        const response = await axios.post("http://57.155.0.174:5000/upload", formData);
        const fileId = response.data;
  
        const chatbotResponse = await fetchChatbotResponse(fileId);
        if (chatbotResponse) {
          chatbotResponse.forEach((response) => {
            setMessages((prevMessages) => [
              ...prevMessages,
              { sender: "user2", text: response },
            ]);
          });
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrorMessage("Vui lòng chọn một file hình ảnh!");
    }
  };
  
  
  // Tạo URL từ icon
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Kiểm tra loại file
      const isImage = selectedFile.type.startsWith("image/");
      const isPDF = selectedFile.type === "application/pdf";
  
      if (!isImage && !isPDF) {
        setErrorMessage("Vui lòng chọn một file hình ảnh hoặc PDF!");
        return;
      }
  
      // Hiển thị tệp lên giao diện
      const fileURL = URL.createObjectURL(selectedFile);
  
      if (isImage) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "user1", text: "", image: fileURL },
        ]);
      } else if (isPDF) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "user1", text: "PDF đã được tải lên", fileURL },
        ]);
      }
  
      // Upload file lên server
      const formData = new FormData();
      formData.append("file", selectedFile);
  
      try {
        setIsLoading(true);
        const response = await axios.post("http://57.155.0.174:5000/upload", formData);
        console.log("Backend response:", response.data);
  
        const fileId = response.data;
        console.log("File ID from backend:", fileId);
  
        const chatbotResponse = await fetchChatbotResponse(fileId);
        if (chatbotResponse) {
          chatbotResponse.forEach((chatbotResponse) => {
            setMessages((prevMessages) => [
              ...prevMessages,
              { sender: "user2", text: chatbotResponse },
            ]);
          });
        }
      } catch (error) {
        console.error("Error occurred while uploading the file:", error);
        if (error.response) {
          console.error("Backend responded with:", error.response.status);
          console.error("Backend response data:", error.response.data);
        } else {
          console.error("Error message:", error.message);
        }
      } finally {
        setIsLoading(false);
        setFile(null); // Xóa trạng thái file để cho phép chọn tệp khác
        e.target.value = "";
      }
    }
  };
  

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const fetchChatbotResponse = async (query) => {
  setIsLoading(true);
  try {
    const data = {
      contents: [
        {
          parts: [
            {
              text: `Bạn là một chatbot hỗ trợ TRẦN NHẬT TRÌNH xin học bổng MBA tại Đài Loan,đây là câu hỏi ${query} hãy trả lời thật ngắn gọn bằng tiếng anh dựa trên thông tin có trong tài liệu dưới đây. Tài liệu chứa thông tin chi tiết về ứng viên, bao gồm các thông tin cá nhân, thành tích học tập, các hoạt động ngoại khóa, kỹ năng, và lý do ứng viên muốn nhận học bổng. tài liệu: Personal Information: Name: Trinh Nhat Tran, Address: 6/213, Le Loi Street, Da Huoai District, Lam Dong Province, Vietnam, Code: 670000, Phone: +84 364687376, Email: trinhtn4322@gmail.com, Date of Birth: 04-03-2002. Family Information: Father's Name: Tuan Thanh Tran, Mother's Name: Thuy Diem Pham Thi, Phone: +84 908332902, Area Code: 263, Email: diemthuy1965@gmail.com. Education: Institution: FPT University, Degree: Bachelor, Major: Information Technology - Artificial Intelligence, Start Date: 09-2020, End Date: 12-2024, TOEIC Score: 825, Address: Long Thạnh Mỹ, Thu Duc City, Ho Chi Minh City. Full-time Work Experience: 1. WISKY COMPANY LIMITED - Position: AI Engineer, From: 09-2023 to 12-2023, Location: Ho Chi Minh City, Responsibilities: Participate in a company project - Project: Auto Retail Checkout for Food Shop, Read and research papers related to the project, Prepare and process data, Collaborate with team members, test and train models. 2. Fintech Innovation Solutions Joint Stock Company - Position: AI Engineer, From: 04-2024 to 09-2024, Location: Ho Chi Minh City, Responsibilities: Head of AI Department, Mainly responsible for the company's AI projects, Work and communicate with other departments. Why do you want to study in Taiwan? My background is as an AI Engineer, and more than anyone, I understand the power of semiconductor chips, and no place is more famous for them than Taiwan. This is the first reason why I became aware of Taiwan. The more I researched, the more I discovered interesting facts about Taiwan, such as it being a highly developed country in Asia that invests a lot in Vietnam. Most notably, its outstanding education system. Why National Tsing Hua University? When applying for the IMBA scholarship in Taiwan, I had many schools to choose from, and honestly, I can’t remember all of them. However, when I read reviews about National Tsing Hua University, I was extremely impressed by its educational system and the rigor of the school. It aligns perfectly with my life motto: "Smooth seas never make skillful sailors." What drives your passion for this field? I never imagined I would become a leader, let alone a team leader, but life pushed me into leadership roles in the teams I’ve been a part of. I realized that it wasn’t by chance; it’s in my nature to lead those teams. Furthermore, I’ve always had the desire to start a business or do something entrepreneurial. My brother and I once started a business selling goods, but after a few months, it failed. I witnessed him crying with our mother to ask for money to pay off debts, and that made me rethink things. Courage and luck are important factors for success, but above all, knowledge is key, and there’s no better place to gain that knowledge than a university environment. What experiences (academic, work, or personal) have motivated you to pursue this field? Growing up in a poor family, constantly facing financial challenges, made me obsessed with making money. However, my mother always encouraged me to live within a safe zone, doing whatever job I could to survive and support myself. I have worked as a security guard, a salesperson, and as an AI project manager for a company. But in my mind, I kept asking, "Why am I here?" Is chasing money and living in a safe world truly what I want? And now, my greatest achievement is daring to give up everything to follow my true passion. Short-term Goals (2-3 years): My goal at National Tsing Hua University is to complete the 10 mandatory courses in economics and management as quickly as possible with high marks. The second goal is to choose a major in Information Technology, which is my strength, while also leveraging Taiwan’s key semiconductor industry to benefit my future. Skills and Knowledge I Want to Learn: Business management skills, Technology management skills, Semiconductor knowledge, Chinese language. Plans for Research, Projects, or Clubs: I want to participate in research related to data and AI, as these are my strengths. I also hope to have the opportunity to exchange to a European country. Long-term Goals (5-10 years): My long-term goal is to build a network with outstanding individuals and companies in Taiwan by staying and working there for a period of time. National Tsing Hua University is home to many professors and PhDs who have received major awards, making it an ideal environment to build networks that will serve my startup. Future Career: Entrepreneurship: Before deciding to study abroad, my associates and I planned to start a business in AI and semiconductors and bridge the gap between Vietnam and Taiwan. Therefore, pursuing an MBA abroad is not only the first step but also the most important step in my future career. Once I have gained sufficient experience and network in Taiwan, I plan to become a connector between my associates in Vietnam and Taiwan.`,
            },
          ],
        },
      ],
    };

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDAFVuysO3qXZxc8ID7BluBAhQSNMS9Kvo", data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
  
      // Nếu API trả về danh sách phản hồi
      const chatbotReply =
      response.data?.candidates?.[0]?.content?.parts?.map((part) => part.text) || [];
      if (chatbotReply.length > 0) {
        
    return chatbotReply.length > 0 ? chatbotReply : ["Không có phản hồi từ chatbot"];
      } else {
        return ["Có lỗi xảy ra, vui lòng thử lại sau."];
      }
    } catch (error) {
      console.error("Error calling backend API:", error);
      return ["Có lỗi xảy ra, vui lòng thử lại sau.11"];
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleSendMessage = async () => {
    if (message.trim() !== "") {
      const userMessage = message;
  
      // Thêm tin nhắn người dùng vào giao diện
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user1", text: userMessage },
      ]);
  
      setMessage("");
  
      try {
        const chatbotResponses = await fetchChatbotResponse(userMessage);
  
        // Thêm từng phản hồi của chatbot vào danh sách tin nhắn
        chatbotResponses.forEach((chatbotResponse) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "user2", text: chatbotResponse },
          ]);
        });
      } catch (error) {
        console.error("Error handling send:", error);
      }
    }
  };
  

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div className="flex h-screen bg-[#f8f4f2]">
  <div className="w-full flex flex-col rounded-lg shadow-lg text-sm sm:text-base md:text-lg">
  <div className={`flex-1 overflow-auto scrollbar-hide p-[2vw] rounded-[2vw] ${
    isDragging ? "border-dashed border-4 border-blue-400 bg-blue-100" : ""
  }`}
  onDrop={(e) => {
    handleDrop(e);
    setIsDragging(false);
  }}
  onDragOver={(e) => {
    e.preventDefault();
    setIsDragging(true);
  }}
  onDragLeave={handleDragLeave}
  onPaste={handlePaste}
>
        {messages.map((msg, index) => (
  <div
    key={index}
    className={`flex items-center mb-[0.5vw] ${
      msg.sender === "user1" ? "justify-end" : "justify-start"
    }`}
  >
    {msg.image ? (
      <img
        src={msg.image}
        alt="Uploaded"
        className="max-w-[30vw] max-h-[20vw] rounded-[1vw] border"
      />
    ) : (
      <div
        className={`${
          msg.sender === "user1"
            ? "bg-[#fce3cd] text-black ml-[25vw]"
            : "bg-transparent text-gray-900 mr-[8vw]"
        } px-[1.5vw] py-[0.8vw] rounded-[2vw]`}style={{
          wordWrap: "break-word",  // Cho phép xuống dòng nếu từ quá dài
          wordBreak: "break-word"  // Đảm bảo không bị tràn ra ngoài
        }}
      >
        <span>{msg.text}</span>
      </div>
    )}
  </div>
))}

          {isLoading && (
            <div className="flex items-center mb-[1.5vw] justify-start">
              <RingLoader size={30} color="#36d7b7" />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex justify-center mt-3 sm:mt-2">
  <div
    className="flex items-center w-full max-w-[90vw] sm:max-w-[70vw] md:max-w-[40vw] bg-[#f8f4f2] p-1 sm:p-2 md:p-3 rounded-3xl shadow-lg transition-all duration-300 focus-within:max-w-[90vw] sm:focus-within:max-w-[75vw] md:focus-within:max-w-[55vw]"
    >
    <div className="bg-white rounded-3xl p-2 shadow-md w-full">
    <textarea
  placeholder="Nhập tin nhắn..."
  value={message}
  onChange={(e) => {
    handleInputChange(e);

    const textarea = e.target;
    // Tạm thời tắt sự thay đổi chiều cao trước khi cập nhật
    textarea.style.height = "auto"; // Reset chiều cao về auto để tính toán chính xác
    if (textarea.scrollHeight > textarea.clientHeight) {
      // Nếu có cuộn, đặt chiều cao theo scrollHeight (tăng dần)
      textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`; // Giới hạn chiều cao tối đa là 160px
    } else {
      // Nếu không có cuộn, đặt chiều cao về 2rem (48px)
      textarea.style.height = "2rem";
    }
  }}
  onPaste={handlePaste}
  onKeyDown={(e) => {
    if (e.key === "Enter" && e.shiftKey) {
      // Nếu nhấn Shift + Enter, cho phép xuống dòng mà không gửi tin nhắn
      return; // Ngừng hành động gửi tin nhắn mặc định
    }
    if (e.key === "Enter") {
      e.target.style.height = "2rem";
      e.preventDefault();
      handleSendMessage();
    }
  }}
  onBlur={(e) => {
    const textarea = e.target;
    // Chỉ reset chiều cao nếu không có cuộn
    if (textarea.scrollHeight <= textarea.clientHeight) {
      e.target.style.height = "2rem"; // Reset chiều cao về 2rem khi không có cuộn
    }
  }}
  className="flex-1 p-2 pl-4 sm:pl-3 p-3 md:pl-3 p-4 resize-none scrollbar-hide bg-white w-full text-black shadow-none border-none focus:shadow-none focus:outline-none"
  style={{
    fontSize: "1rem", // Giảm kích thước font trên màn hình nhỏ
    height: "3rem",   // Đặt chiều cao mặc định là 3rem
    minHeight: "3rem", // Chiều cao tối thiểu là 3rem
    maxHeight: "10rem", // Chiều cao tối đa là 10rem
  }}
/>

    </div>


    <div className="flex space-x-3 sm:space-x-2 ml-3 sm:ml-2">
      <button
        onClick={handleSendMessage}
        className="bg-[#ff8e4b] text-white rounded-full flex items-center justify-center shadow-md"
        style={{ width: "3rem", height: "3rem" }}
      >
        <MdSend className="text-white" size={24} />
      </button>
      <label
        htmlFor="file-input"
        className="bg-[#4b9fff] text-white text-[1rem] sm:text-[0.9rem] rounded-full flex items-center justify-center cursor-pointer shadow-md"
        style={{ width: "3rem", height: "3rem" }}
      >
        <MdAttachFile className="text-white" size={24} />
      </label>
      <input
        id="file-input"
        type="file"
        onChange={handleFileChange}
        className="hidden text-[1rem] sm:text-[0.9rem]"
      />
    </div>
  </div>
  {errorMessage && <p className="text-red-500 mt-2 text-xs sm:text-sm">{errorMessage}</p>}
  {file && <p className="text-gray-600 mt-2 text-xs sm:text-sm">Tệp chọn: {file.name}</p>}
</div>
</div>

    </div>
  );
};

export default Chatbot;
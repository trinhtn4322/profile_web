import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

// Dữ liệu tài liệu
const documents = [
  {
    id: 1,
    title: "Tài liệu 1",
    description:
      "Đây là mô tả ngắn gọn về tài liệu 1. Bạn có thể tải xuống nó từ liên kết dưới đây.",
    link: "https://drive.google.com/file/d/1KwRn6rENlStWZcBJjMChVK4k05W8w53G/view?usp=sharing"
  },
  {
    id: 2,
    title: "Tài liệu 2",
    description:
      "Đây là mô tả ngắn gọn về tài liệu 2. Bạn có thể tải xuống nó từ liên kết dưới đây.",
    link: "https://drive.google.com/file/d/1KwRn6rENlStWZcBJjMChVK4k05W8w53G/view?usp=sharing"
  },
  {
    id: 3,
    title: "Tài liệu 3",
    description:
      "Đây là mô tả ngắn gọn về tài liệu 3. Bạn có thể tải xuống nó từ liên kết dưới đây.",
    link: "https://drive.google.com/file/d/1KwRn6rENlStWZcBJjMChVK4k05W8w53G/view?usp=sharing"
  },
  {
    id: 4,
    title: "Tài liệu 4",
    description:
      "Đây là mô tả ngắn gọn về tài liệu 4. Bạn có thể tải xuống nó từ liên kết dưới đây.",
    link: "https://drive.google.com/file/d/1KwRn6rENlStWZcBJjMChVK4k05W8w53G/view?usp=sharing"
  },
];

const Page5 = () => {
  const [selectedDocId, setSelectedDocId] = useState(1);
  
  // Tạo một state phụ để ép React render lại mỗi khi tài liệu thay đổi
  const [key, setKey] = useState(0);

  // Tìm tài liệu dựa trên selectedDocId
  const selectedDocument = documents.find((doc) => doc.id === selectedDocId);

  // Áp dụng hiệu ứng mượt mà khi thay đổi nội dung tài liệu
  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 }, // thời gian hiệu ứng (500ms)
  });

  const handleClick = (id) => {
    setSelectedDocId(id);
    setKey(prevKey => prevKey + 1); // Thay đổi key để ép re-render
  }

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center py-12">
      {/* Background bao quanh nội dung */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-screen-lg">
        <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0">
          {/* Left Panel: List of Document Titles */}
          <div className="flex flex-col items-start space-y-4 md:w-1/3">
            {documents.map((document) => (
              <div
                key={document.id}
                onClick={() => handleClick(document.id)} // Thay đổi tài liệu khi bấm
                className={`text-xl font-noto text-white cursor-pointer 
                  ${selectedDocId === document.id ? "border-b-2 border-white" : ""}
                  hover:bg-gray-700 transition-all duration-300 py-2 px-4 w-full`}
              >
                {document.title}
              </div>
            ))}
          </div>

          {/* Right Panel: Document Description */}
          <div className="md:w-2/3 flex justify-center items-center">
            {/* Carousel wrapper with fade effect */}
            <div className="w-full p-6">
              {/* Áp dụng hiệu ứng chuyển động fade */}
              <animated.div style={fade} key={key}> {/* Dùng key để tái render */}
                <h2 className="text-3xl font-noto-regu mb-4">{selectedDocument.title}</h2>
                <p className="text-lg mb-6 font-notose-light">{selectedDocument.description}</p>
                <a
                  href={selectedDocument.link}
                  download
                  className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-noto-regu hover:bg-blue-400 transition duration-300"
                >
                  Tải {selectedDocument.title} về
                </a>
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;

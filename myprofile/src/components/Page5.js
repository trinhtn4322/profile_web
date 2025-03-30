import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

// Dữ liệu tài liệu
const documents = [
  {
    id: 1,
    title: "Curriculum vitae",
    description:
      "A comprehensive summary of personal information, academic background with a GPA of 7.89/10, English proficiency (TOEIC 825 – equivalent to B1), 2 years of professional experience, and notable achievements during studies at FPT University.",
    link: "https://drive.google.com/file/d/1KwRn6rENlStWZcBJjMChVK4k05W8w53G/view?usp=sharing"
  },
  {
    id: 2,
    title: "Essay",
    description:
      "A personal statement highlighting aspirations for pursuing an MBA, career development goals, and a heartfelt story of overcoming family hardships to grow into the best version of oneself.",
    link: "https://drive.google.com/file/d/1KwRn6rENlStWZcBJjMChVK4k05W8w53G/view?usp=sharing"
  },
  {
    id: 3,
    title: "English Certificate",
    description:
      "TOEIC 825 certification, demonstrating strong English communication skills that meet international academic standards.",
    link: "https://drive.google.com/file/d/1KwRn6rENlStWZcBJjMChVK4k05W8w53G/view?usp=sharing"
  },
  {
    id: 4,
    title: "Diploma",
    description:
      "A bachelor’s degree from FPT University with a GPA of 7.89/10, reflecting dedication and perseverance throughout the academic journey.",
    link: "https://drive.google.com/file/d/1KwRn6rENlStWZcBJjMChVK4k05W8w53G/view?usp=sharing"
  },
  {
    id: 5,
    title: "Study Plan",
    description:
      "A well-defined plan emphasizing how the MBA program will be a stepping stone to achieving career aspirations while contributing meaningful value to society and the community.",
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
    <div className="min-h-screen bg-black text-white flex flex-col justify-start items-center py-12 "> 
      <p className="text-3xl font-noto-regu text-customOrange ">"The boy who once received help from others now knows how to help others."</p>
    <div className="flex justify-center items-center py-12 ">
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
                <h2 className="text-3xl font-noto-regu text-customOrange mb-4">{selectedDocument.title}</h2>
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
    </div>
  );
};

export default Page5;

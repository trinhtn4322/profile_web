import React from 'react';

const Page3 = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black p-10">
      {/* Container tổng */}
      <div className="flex w-full h-full bg-black shadow-lg rounded-xl overflow-hidden">
        {/* Phần Education (Phần 1) */}
        <div className="flex-1 p-8 text-white">
          <h1 className="text-4xl font-noto-bold text-white mb-8">Education</h1>
          <div className="bg-gray-800 p-4 rounded-xl shadow-md mb-6 hover:shadow-2xl transition-all duration-300">
            <p className="font-semibold text-xl text-white mb-2 font-noto">2020 – 2024 FPT UNIVERSITY</p>
            <p className="text-gray-300 text-sm mb-1 font-notose-light">Major: Artificial Intelligence</p>
            <p className="text-gray-300 text-sm mb-1 font-notose-light">GPA: 7.89/10</p>
            <p className="text-gray-300 text-sm mb-1 font-notose-light">TOEIC: 825</p>
            <p className="text-gray-300 text-sm mb-1 font-notose-light">Excellent Student in Fall Semester 2023</p>
            <p className="text-gray-300 text-sm mb-1 font-notose-light">Honorable Student of 2 Semesters in 2023</p>
          </div>
        </div>

        {/* Phần Skills (Phần 2) */}
        <div className="flex-1 p-8 text-white">
          <h1 className="text-4xl font-semibold text-white mb-8  font-noto-bold">Skills</h1>

          {/* Kỹ năng lập trình */}
          <div className="relative bg-gray-600 p-6 rounded-xl shadow-md mb-6 hover:shadow-2xl transition-all duration-300 group">
            <p className="font-bold text-lg mb-2  font-notose-regu">Programming Languages</p>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-xl">
              <ul className="list-disc pl-5 text-sm text-gray-300  font-noto-regu">
                <li>Python (pandas, numpy, ...)</li>
                <li>R (tidyverse, tidymodels, ...)</li>
                <li>ReactJS, SQL</li>
              </ul>
            </div>
          </div>

          {/* Kỹ năng Big Data */}
          <div className="relative bg-gray-600 p-6 rounded-xl shadow-md mb-6 hover:shadow-2xl transition-all duration-300 group">
            <p className="font-bold text-lg mb-2 font-notose-regu">Big Data Technologies</p>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-xl">
              <ul className="list-disc pl-5 text-sm text-gray-300 font-noto-regu">
                <li>Docker</li>
                <li>Apache Hadoop, Spark</li>
                <li>Power BI</li>
              </ul>
            </div>
          </div>

          {/* Kỹ năng về Cơ sở dữ liệu */}
          <div className="relative bg-gray-600 p-6 rounded-xl shadow-md mb-6 hover:shadow-2xl transition-all duration-300 group">
            <p className="font-bold text-lg mb-2 font-notose-regu">Database</p>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-xl">
              <p className="text-sm text-gray-300 font-noto-regu">MS SQL Server, PgAdmin, MySQL, PostgreSQL</p>
            </div>
          </div>

          {/* Kỹ năng về Dữ liệu */}
          <div className="relative bg-gray-600 p-6 rounded-xl shadow-md mb-6 hover:shadow-2xl transition-all duration-300 group">
            <p className="font-bold text-lg mb-2 font-notose-regu">Data Skills</p>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-xl">
              <ul className="list-disc pl-5 text-sm text-gray-300 font-noto-regu">
                <li>Building basic ETL pipeline</li>
                <li>Knowledge of Statistics & Probability</li>
                <li>Experience with data preprocessing, visualization, mining</li>
              </ul>
            </div>
          </div>

          {/* Kỹ năng về AI */}
          <div className="relative bg-gray-600 p-6 rounded-xl shadow-md mb-6 hover:shadow-2xl transition-all duration-300 group">
            <p className="font-bold text-lg mb-2 font-notose-regu">Artificial Intelligence (AI)</p>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-xl">
              <ul className="list-disc pl-5 text-sm text-gray-300 font-noto-regu">
                <li>Knowledge of basic Machine Learning algorithms such as Linear Regression, SVM</li>
                <li>Basic knowledge of Deep Learning (CNN, RNN, LLM)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phần 2 đường thẳng */}
        <div className="flex flex-col items-center justify-center w-1/4 bg-black text-white relative">
          {/* Đường thẳng đầu tiên */}
          <div className="h-20 border-l-2 border-white"></div>
          {/* Chữ cái E D U C A T I O N */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-noto-bold  text-customOrange">E</p>
            <p className="text-3xl font-noto-bold text-customOrange">D</p>
            <p className="text-3xl font-noto-bold text-customOrange">U</p>
            <p className="text-3xl font-noto-bold text-customOrange">C</p>
            <p className="text-3xl font-noto-bold text-customOrange">A</p>
            <p className="text-3xl font-noto-bold text-customOrange">T</p>
            <p className="text-3xl font-noto-bold text-customOrange">I</p>
            <p className="text-3xl font-noto-bold text-customOrange">O</p>
            <p className="text-3xl font-noto-bold text-customOrange">N</p>
          </div>
          {/* Đường thẳng dưới */}
          <div className="flex-grow border-l-2 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Page3;

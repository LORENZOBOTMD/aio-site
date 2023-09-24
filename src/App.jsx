import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
 
  return (
    <div className="bg-[#040127] h-full min-h-screen p-5 flex flex-col items-center relative overflow-hidden z-[1]">
      {/* .....................Input Section.................... */}

      <div className="bg-gradient-to-r from-[#1671F2] to-[#B90EFF] w-80 h-80 rounded-full blur-[150px] absolute right-[-90px] top-[40%] z-[-1]"></div>
      <div className="bg-gradient-to-r from-[#1671F2] to-[#B90EFF] w-80 h-80 rounded-full blur-[150px] absolute left-[-150px] bottom-0 z-[-1]"></div>
      <div className="bg-gradient-to-r from-[#1671F2] to-[#B90EFF] w-40 h-40 rounded-full blur-[80px] absolute left-[-90px] top-[-90px] z-[-1]"></div>
      <h1 className="mt-3 text-transparent bg-gradient-to-r from-[#1671F2] to-[#B90EFF] bg-clip-text text-4xl font-[Poppins] text-center">
        Free Online Video Downloader
      </h1>
      <div className="input flex items-center mt-20 gap-2 w-full max-w-4xl">
        <div className="bg-gradient-to-r from-[#1671F2] to-[#B90EFF] p-[2px]  rounded-md w-full h-[60px] ">
          <input
            type="text"
            placeholder="Enter a Video url"
            className="w-full h-full p-2 bg-[#040127] rounded-md focus:outline-none text-white placeholder-white placeholder-opacity-60"
          />
        </div>
        <button className="h-[60px] bg-gradient-to-r from-[#1671F2] to-[#B90EFF] rounded-md p-2 text-white">
          Download
        </button>
      </div>

      {/* .....................Results Section.................... */}

      {/* .....................Youtube.................... */}
      <div className="w-full max-w-4xl p-2 mb-0 bg-black bg-opacity-20 mt-5 rounded-md flex flex-wrap justify-center items-center">
        <div className="img w-40 md:w-60 aspect-video bg-black rounded-md md:mr-5"></div>
        <div className="flex flex-col max-w-xl justify-center items-center md:items-start mt-3">
          <h1 className="text-[#ffffff] mx-2 text-xs md:text-xl text-center md:text-left">
            Black Clover Opening 10 Full『Black Catcher』by Vickeblanka | Lyrics
          </h1>
          <div className="button flex gap-3 m-2">
            <a
              href=""
              className="bg-[#420eff] p-2 md:p-4 rounded-md text-white mt-3 mb-3 text-xs text-center"
            >
              360p
            </a>
            <a
              href=""
              className="bg-[#420eff] p-2 md:p-4 rounded-md text-white mt-3 mb-3 text-xs text-center"
            >
              720p
            </a>
            <a
              href=""
              className="bg-[#420eff] p-2 md:p-4 rounded-md text-white mt-3 mb-3 text-xs text-center"
            >
              1080p
            </a>
          </div>
        </div>
      </div>

      {/* .....................Facebook.................... */}
      <div className="w-full max-w-4xl p-2 mb-0 bg-black bg-opacity-20 mt-5 rounded-md flex flex-wrap justify-center items-center">
        <div className="img w-40 md:w-60 aspect-video bg-black rounded-md md:mr-5"></div>
        <div className="flex flex-col max-w-xl justify-center items-center md:items-start mt-3">
          <h1 className="text-[#ffffff] mx-2 text-xs md:text-xl text-center md:text-left">
            LaShU NaGe
          </h1>
          <div className="button flex gap-3 m-2">
            <a
              href=""
              className="bg-[#420eff] p-2 md:p-4 rounded-md text-white mt-3 mb-3 text-xs text-center"
            >
              SD Quality
            </a>
            <a
              href=""
              className="bg-[#420eff] p-2 md:p-4 rounded-md text-white mt-3 mb-3 text-xs text-center"
            >
              HD Quality
            </a>
          </div>
        </div>
      </div>

      {/* .....................Tiktok.................... */}

      <div className="w-full max-w-4xl p-2 mb-0 bg-black bg-opacity-20 mt-5 rounded-md flex flex-col justify-center items-center">
        <div className="img w-20 aspect-square bg-black rounded-full"></div>
        <div className="flex flex-col max-w-xl justify-center items-center mt-3">
          <h1 className="text-[#ffffff] mx-2 text-md text-center md:text-left">
            Buddhika Shahan
          </h1>
          <h1 className="text-[#ffffff] mx-2 text-xs text-center opacity-50 ">
            @buddhika
          </h1>
          <h1 className="text-[#7e38ff] m-2 text-md text-center">LaShU NaGe</h1>
          <div className="button flex flex-col gap-3 m-2">
            <a
              href=""
              className="bg-[#420eff] p-2 md:p-4 rounded-md text-white mt-3 mb-3 text-xs text-center"
            >
              Without Water Mark
            </a>
            <a
              href=""
              className="bg-[#420eff] p-2 md:p-4 rounded-md text-white mt-3 mb-3 text-xs text-center"
            >
              With Water Mark
            </a>
            <a
              href=""
              className="bg-[#420eff] p-2 md:p-4 rounded-md text-white mt-3 mb-3 text-xs text-center"
            >
              Audio
            </a>
          </div>
        </div>
      </div>

      {/* .....................Instagram.................... */}

      <div className="w-full max-w-4xl p-2 mb-0 bg-black bg-opacity-20 mt-5 rounded-md flex flex-col justify-center items-center">
        <div className="img w-40 md:w-60 aspect-video bg-black rounded-md "></div>
        <div className="flex flex-col max-w-xl justify-center items-center mt-3">
          <a
            href=""
            className="bg-[#420eff] p-2 md:p-4 rounded-md text-white mt-3 mb-3 text-xs text-center"
          >
            Download
          </a>
        </div>
      </div>

      {/* .....................Twitter.................... */}
      <div className="w-full max-w-4xl p-2 mb-0 bg-black bg-opacity-20 mt-5 rounded-md flex flex-col md:flex-row justify-center items-center">
        <div className="img w-40 md:w-60 aspect-video bg-black rounded-md md:mr-5"></div>
        <div className="flex flex-col max-w-xl justify-center items-center md:items-start mt-3">
          <h1 className="text-[#ffffff] mx-2 text-md md:text-xl text-center md:text-left">
            Video Title
          </h1>
          <h1 className="text-[#6338ff] mx-2 mt-2 text-xs md:text-md text-center md:text-left">
            username
          </h1>
          <div className="button flex gap-3 m-2">
      
            <a
              href=""
              className="bg-[#420eff] p-2 md:p-4 rounded-md text-white mt-3 mb-3 text-xs text-center"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      {/* .....................Social Media Box.................... */}

      <div className="w-full max-w-4xl p-2 mb-5 bg-black bg-opacity-20 mt-5 rounded-md flex flex-wrap justify-between">
        <div className="left">
          <div className="item flex items-center gap-5 m-10">
            <img
              src="src/img/facebook.png"
              alt=""
              className="w-8 h-8 md:w-14 md:h-14"
            />
            <span className="text-white text-md md:text-xl">Facebook</span>
          </div>
          <div className="item flex items-center gap-5 m-10 ">
            <img
              src="src/img/youtube.png"
              alt=""
              className="w-8 h-8 md:w-14 md:h-14"
            />
            <span className="text-white text-md md:text-xl">Youtube</span>
          </div>
          <div className="item flex items-center gap-5 m-10 mb-0 ">
            <img
              src="src/img/tiktok.png"
              alt=""
              className="w-8 h-8 md:w-14 md:h-14"
            />
            <span className="text-white text-md md:text-xl">Tiktok</span>
          </div>
        </div>
        <div className="right mr-20">
          <div className="item flex items-center gap-5 m-10">
            <img
              src="src/img/instagram.png"
              alt=""
              className="w-8 h-8 md:w-14 md:h-14"
            />
            <span className="text-white text-md md:text-xl">Instagram</span>
          </div>
          <div className="item flex items-center gap-2 m-10 ml-7">
            <img
              src="src/img/threads.png"
              alt=""
              className="w-14 h-8 md:w-20 md:h-14"
            />
            <span className="text-white text-md md:text-xl">Threads</span>
          </div>
          <div className="item flex items-center gap-5 m-10 ">
            <img
              src="src/img/twitter.png"
              alt=""
              className="w-8 h-8 md:w-14 md:h-14"
            />
            <span className="text-white text-md md:text-xl">Twitter</span>
          </div>
        </div>
        <h1 className="text-center text-gray-400 w-full md:text-2xl">
          You can download any social media video
        </h1>
      </div>
      <h1 className="md:text-xl absolute bottom-0 p-2 text-[#1671F2]">
        © Buddhika & Vihanga
      </h1>
    </div>
  );
};

export default App;

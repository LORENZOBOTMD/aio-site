import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [down, setDown] = useState(false);
  const [er, setEr] = useState(null);

  function getUrl(val) {
    setUrl(val.target.value)
  }
  async function fetchData() {
    
    try {
      if (url.includes("tiktok.com")) {
        const response = await axios.get(
          "https://vihangayt.me/download/tiktok?url=" + url
        );
        const data = response.data.data;
        const videodata = {
          owner: data.owner,
          pp: data.author_a,
          author_name: data.author_name,
          author: data.author,
          desc: data.desc,
          wm: data.links[0].a,
          nwm: data.links[data.links.length - 2].a,
          audio: data.links[data.links.length - 1].a,
        };
        
        setResult(videodata);
      }
      setDown(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setEr(<h1 className='bg-red-400 p-3 rounded-md m-1'>Can not find video!</h1>);
      }
    
  }
  
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-screen p-5 flex flex-col items-center">
      <h1 className="text-center mt-10 mb-10 text-white text-3xl font-bold">
        VihangaYT TikTok Downloader
      </h1>
      <div className="flex flex-col items-center bg-white shadow-2xl rounded-xl p-2 max-w-4xl w-full">
        <div className="m-1 w-full flex gap-5">
          <input
            onChange={getUrl}
            type="text"
            placeholder="Enter Url"
            className="text-sky-500 border-cyan-500 border-2 p-5 rounded-md w-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />

          <button
            onClick={fetchData}
            className="text-white bg-cyan-500 p-5 rounded-md border-cyan-500 border-2 hover:bg-sky-500 hover:border-sky-500"
          >
            Download
          </button>
        </div>
        {down && result.pp ? (
          <div className="profile flex flex-col items-center">
            <img
              src={result.pp}
              alt=""
              className="w-20 h-20 rounded-full mt-5"
            />
            <h3 className="text-xl">{result.author_name}</h3>
            <h2 className="text-gray-400 text-center">{result.author}</h2>
            <h2 className="text-cyan-500 text-center">{result.desc}</h2>
            <div className="links flex flex-col">
              <a
                href={result.wm}
                className="bg-cyan-500 p-2 rounded-md m-4 text-white text-center hover:bg-sky-500"
              >
                Without Water Mark
              </a>
              <a
                href={result.nwm}
                className="bg-cyan-500 p-2 rounded-md m-4 text-white text-center hover:bg-sky-500"
              >
                With Water Mark
              </a>
              <a
                href={result.audio}
                className="bg-cyan-500 p-2 rounded-md m-4 text-white text-center hover:bg-sky-500"
              >
                Audio
              </a>
            </div>
          </div>
        ) : down && !url.includes("tiktok.com") ? 
            <h1 className="bg-red-400 p-3 rounded-md m-1">Please enter a tiktok url!</h1>
         : null}
        {er}
      </div>
      <h1 className="fixed bottom-0 bg-cyan-800 text-white p-1 w-full text-center text-lg"><a href="https://github.com/vihangayt0">©️ Made by Buddhika & Vihanga</a>
      </h1>
    </div>
  );
};

export default App;

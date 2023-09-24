import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.get("/results", (req, res) => {
  console.log(req.query.link)
  async function fetchData() {
    try {
      const response = await axios.get("https://vihangayt.me/download/tiktok?url=" + req.query.link);
      const data = response.data.data;
      const sendData = {
        "pp": data.author_a,
        "author_name": data.author_name,
        "author": data.author,
        "desc": data.desc,
        "wm": data.links[0].a,
        "nwm": data.links[data.links.length-2].a,
        "audio": data.links[data.links.length-1].a
      }
      res.send(sendData);
      console.log(sendData);
    } catch (error) {
      console.error("Error fetching data:", error);
      }
  }

  fetchData(); 
  
})

app.listen(5000, () => console.log("Server is running!"));
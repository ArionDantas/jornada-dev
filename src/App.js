import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [video, setVideo] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideo(videosList)
  }

  useEffect(() => {
    getVideos();
  }, []);

  console.log(video);

  return (
    <div className="App">
      <div className="app__videos">

      { video.map((item)=>{
        return (
          <Video
          likes={item.likes}
          menssages={item.menssages}
          shares={item.shares}
          name= {item.name}
          description= {item.description}
          music= {item.music}
          url= {item.url}
        />
        )
      })};
      </div>
    </div>
  );
}

export default App;

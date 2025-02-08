import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import MissionVision from "../components/MissionVision";
import Gallery from "./Gallery";
import SliderPage from "../components/SliderComponents";
import WhatWeDoSection from "../components/WhatWeDo";
import ResponsiveComponent from "../components/image";
import VideoSlider from "./videoPlayer";
import PatternedCTA from "./Cta";
import { useNavigate } from "react-router-dom";

interface Video {
  title: string;
  link: string;
}

export default function Home() {
  const navigate = useNavigate();
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("https://collify.sanakamedical.com/api/content/videos");
        const data: { title: string; url: string }[] = await response.json();
        
        if (Array.isArray(data)) {
          const formattedVideos: Video[] = data.map((video: { title: string; url: string }) => ({
            title: video.title,
            link: video.url,
          }));
          setVideos(formattedVideos);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
      <Hero />
      <SliderPage />
      <WhatWeDoSection />
      <MissionVision />
      <ResponsiveComponent />
      <Quote />
      <Gallery />
      <VideoSlider videos={videos} />
      <PatternedCTA onJoinClick={() => navigate("/contact")} />
    </>
  );
}

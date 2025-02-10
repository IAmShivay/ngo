import { useState, useEffect } from "react";
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

export default function Home() {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://collify.sanakamedical.com/api/content/videos');
        const data = await response.json();
        
        // Transform the API data to match the VideoSlider component's expected format
        const formattedVideos = data.map(video => ({
          title: video.title,
          // Convert YouTube watch URLs to embed URLs
          link: video.videoUrl.replace('watch?v=', 'embed/')
        }));
        
        setVideos(formattedVideos);
      } catch (error) {
        console.error('Error fetching videos:', error);
        // Fallback to empty array if fetch fails
        setVideos([]);
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
      {videos.length > 0 && <VideoSlider videos={videos} />}
      <PatternedCTA onJoinClick={() => navigate("/contact")} />
    </>
  );
}
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
  const videos = [
    {
      title: "React Tutorial 1",
      link: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "React Tutorial 2",
      link: "https://www.youtube.com/embed/1dQw4w9WgXcQ",
    },
    {
      title: "React Tutorial 3",
      link: "https://www.youtube.com/embed/2dQw4w9WgXcQ",
    },
  ];

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

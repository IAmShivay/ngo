import Hero from '../components/Hero';
import Quote from '../components/Quote';
import Founders from '../components/Founders';
import Committee from '../components/Committee';
import MissionVision from '../components/MissionVision';
import UpcomingEvents from '../components/UpcomingEvents';
import Gallery from './Gallery';

export default function Home() {
  return (
    <>
      <Hero />
      <Quote />
      <Founders />
      <MissionVision />
      <UpcomingEvents />
      {/* <Committee /> */}
      <Gallery/>
    </>
  );
}
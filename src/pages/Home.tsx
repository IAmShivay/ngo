import Hero from '../components/Hero';
import Quote from '../components/Quote';
import Founders from '../components/Founders';
import Committee from '../components/Committee';
import MissionVision from '../components/MissionVision';
import UpcomingEvents from '../components/UpcomingEvents';

export default function Home() {
  return (
    <>
      <Hero />
      <Quote />
      <MissionVision />
      <Founders />
      <UpcomingEvents />
      <Committee />
    </>
  );
}
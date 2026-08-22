import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Pitch } from '@/components/Pitch';
import { Flights } from '@/components/Flights';
import { Basecamps } from '@/components/Basecamps';
import { Itinerary } from '@/components/Itinerary';
import { Menu } from '@/components/Menu';
import { Budget } from '@/components/Budget';
import { Know } from '@/components/Know';
import { Closing } from '@/components/Closing';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pitch />
        <Flights />
        <Basecamps />
        <Itinerary />
        <Menu />
        <Budget />
        <Know />
        <Closing />
      </main>
      <Footer />
    </>
  );
}

import Hero from "@/components/Hero";
import About from "@/components/About";
import Theme from "@/components/Theme";
import Exhibition from "@/components/Exhibition";
import RecentEvents from "@/components/RecentEvents";
import Dedication from "@/components/Dedication";
import Judges from "@/components/Judges";
import PrizePool from "@/components/PrizePool";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Theme />
      <Exhibition />
      <RecentEvents />
      <Dedication />
      <Footer />
    </div>
  );
}

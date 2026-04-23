import Footer from "./components/Footer";
import FreeMeasure from "./components/FreeMeasure";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Ranges from "./components/Ranges";
import Showroom from "./components/Showroom";
import SiteAnimations from "./components/SiteAnimations";
import Spotlight from "./components/Spotlight";

export default function Home() {
  const today = new Date().getDay();
  return (
    <div className="app">
      <Nav />
      <main className="main">
        <Hero />
        <Ranges />
        <Spotlight />
        <FreeMeasure />
        <Showroom today={today} />
      </main>
      <Footer />
      <SiteAnimations />
    </div>
  );
}

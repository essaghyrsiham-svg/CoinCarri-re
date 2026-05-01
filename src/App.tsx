import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogosSlider from "./components/LogosSlider";
import Process from "./components/Process";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Transformation from "./components/Transformation";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white font-sans overflow-x-hidden text-deep-blue">
      <Navbar />
      <main>
        <Hero />
        <LogosSlider />
        <Process />
        <Benefits />
        <Testimonials />
        <Transformation />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

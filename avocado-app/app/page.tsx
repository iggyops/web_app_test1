import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Nutrition from "./components/Nutrition";
import Recipes from "./components/Recipes";
import RipenessTracker from "./components/RipenessTracker";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Nutrition />
      <Recipes />
      <RipenessTracker />
      <Footer />
    </>
  );
}

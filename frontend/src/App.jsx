import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import headerVideo from "./assets/earth-bg.mp4";

function App() {
  return (
    <>
      <div>
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={headerVideo} type="video/mp4" />
        </video>
      </div>
      <HeroSection />
      <Navbar />
      <Services />
    </>
  );
}

export default App;

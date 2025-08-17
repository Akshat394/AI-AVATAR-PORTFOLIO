import { BrowserRouter } from "react-router-dom";
import { useEffect, useRef } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { ComputersCanvas } from "./components/canvas";
import Footer from "./components/Footer";

const App = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt to autoplay the audio when component mounts
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
      
      // Try to autoplay (may be blocked by browser policies)
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented by browser:", error);
          // Add a click event listener to start audio on first user interaction
          const startAudio = () => {
            audioRef.current.play();
            document.removeEventListener('click', startAudio);
          };
          document.addEventListener('click', startAudio);
        });
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* Background Audio */}
        <audio
          ref={audioRef}
          autoPlay
          loop
          preload="auto"
          className="hidden"
        >
          <source src="/Tuyo_Narcos_Theme_Song-648780-mobiles24.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        {/* Hero Section */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        
        {/* Computer Model Section */}
        <ComputersCanvas />
        
        {/* Content Sections */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        
        {/* Contact & Footer */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

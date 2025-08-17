import { BrowserRouter } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { ComputersCanvas } from "./components/canvas";
import Footer from "./components/Footer";

const App = () => {
  const audioRef = useRef(null);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audioError, setAudioError] = useState(null);

  useEffect(() => {
    // Function to start audio
    const startAudio = () => {
      if (audioRef.current && audioLoaded && !audioError) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(error => {
          console.log("Audio play failed:", error);
          setAudioError(error);
        });
      }
    };

    // Function to handle audio loading
    const handleAudioLoad = () => {
      setAudioLoaded(true);
      setAudioError(null);
      console.log("Audio loaded successfully");
      
      // Try to start audio after loading
      setTimeout(() => {
        startAudio();
      }, 100);
    };

    // Function to handle audio errors
    const handleAudioError = (error) => {
      console.error("Audio error:", error);
      setAudioError(error);
      setAudioLoaded(false);
    };

    // Function to handle audio can play
    const handleCanPlay = () => {
      console.log("Audio can play");
      setAudioLoaded(true);
    };

    // Add event listeners to audio element
    if (audioRef.current) {
      audioRef.current.addEventListener('loadeddata', handleAudioLoad);
      audioRef.current.addEventListener('canplay', handleCanPlay);
      audioRef.current.addEventListener('error', handleAudioError);
      
      // Set initial volume
      audioRef.current.volume = 0.3;
      
      // Try to autoplay
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented by browser:", error);
          setAudioError(error);
          // Add click event listener to start audio on first user interaction
          document.addEventListener('click', startAudio, { once: true });
        });
      }
    }

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('loadeddata', handleAudioLoad);
        audioRef.current.removeEventListener('canplay', handleCanPlay);
        audioRef.current.removeEventListener('error', handleAudioError);
      }
      document.removeEventListener('click', startAudio);
    };
  }, [audioLoaded, audioError]);

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
          controls={false}
          id="background-audio"
        >
          <source src="/Tuyo_Narcos_Theme_Song-648780-mobiles24.mp3" type="audio/mpeg" />
          <source src="./Tuyo_Narcos_Theme_Song-648780-mobiles24.mp3" type="audio/mpeg" />
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

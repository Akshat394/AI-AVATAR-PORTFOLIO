import React, { useState, useRef, useEffect } from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaPlay, FaPause } from "react-icons/fa6";

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef(null);

  useEffect(() => {
    // Get the audio element from the parent App component
    audioRef.current = document.querySelector('audio');
    
    if (audioRef.current) {
      // Set initial volume
      audioRef.current.volume = volume;
      
      // Add event listeners
      audioRef.current.addEventListener('play', () => setIsPlaying(true));
      audioRef.current.addEventListener('pause', () => setIsPlaying(false));
      audioRef.current.addEventListener('volumechange', () => {
        setVolume(audioRef.current.volume);
        setIsMuted(audioRef.current.muted);
      });
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <footer className="w-full py-4 bg-black-100/55 text-white">
      <div className="flex flex-col items-center gap-4">
        {/* Audio Controls */}
        <div className="flex items-center gap-4 bg-black/20 px-4 py-2 rounded-lg">
          <button
            onClick={togglePlayPause}
            className="text-white hover:text-blue-400 transition-colors"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
          </button>
          
          <button
            onClick={toggleMute}
            className="text-white hover:text-blue-400 transition-colors px-2 py-1 rounded"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? "🔇" : "🔊"}
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
            title="Volume"
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/akshat_trivedi_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a href="https://x.com/Akshat394" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com/in/akshat-trived1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
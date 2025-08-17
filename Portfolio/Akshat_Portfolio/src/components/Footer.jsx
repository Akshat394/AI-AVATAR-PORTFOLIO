import React, { useState, useRef, useEffect } from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaPlay, FaPause } from "react-icons/fa6";

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioReady, setAudioReady] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Function to initialize audio
    const initializeAudio = () => {
      // Try to get audio element by ID first, then by querySelector
      let audioElement = document.getElementById('background-audio');
      if (!audioElement) {
        audioElement = document.querySelector('audio');
      }
      
      if (audioElement) {
        audioRef.current = audioElement;
        setAudioReady(true);
        
        // Set initial volume
        audioRef.current.volume = volume;
        
        // Add event listeners
        const handlePlay = () => {
          console.log("Audio started playing");
          setIsPlaying(true);
        };
        
        const handlePause = () => {
          console.log("Audio paused");
          setIsPlaying(false);
        };
        
        const handleTimeUpdate = () => {
          setCurrentTime(audioRef.current.currentTime);
        };
        
        const handleLoadedMetadata = () => {
          console.log("Audio metadata loaded, duration:", audioRef.current.duration);
          setDuration(audioRef.current.duration);
        };
        
        const handleVolumeChange = () => {
          setVolume(audioRef.current.volume);
          setIsMuted(audioRef.current.muted);
        };
        
        const handleCanPlay = () => {
          console.log("Audio can play");
          setAudioReady(true);
        };
        
        // Add event listeners
        audioRef.current.addEventListener('play', handlePlay);
        audioRef.current.addEventListener('pause', handlePause);
        audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
        audioRef.current.addEventListener('volumechange', handleVolumeChange);
        audioRef.current.addEventListener('canplay', handleCanPlay);
        
        // Set initial state
        setIsPlaying(!audioRef.current.paused);
        setIsMuted(audioRef.current.muted);
        setVolume(audioRef.current.volume);
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration || 0);
        
        // Cleanup function
        return () => {
          if (audioRef.current) {
            audioRef.current.removeEventListener('play', handlePlay);
            audioRef.current.removeEventListener('pause', handlePause);
            audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audioRef.current.removeEventListener('volumechange', handleVolumeChange);
            audioRef.current.removeEventListener('canplay', handleCanPlay);
          }
        };
      } else {
        console.log("Audio element not found, retrying...");
        // Retry after a short delay
        setTimeout(initializeAudio, 500);
      }
    };

    // Initialize audio
    initializeAudio();
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current && audioReady) {
      console.log("Toggling play/pause, current state:", isPlaying);
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Failed to play audio:", error);
        });
      }
    } else {
      console.log("Audio not ready or not found");
    }
  };

  const toggleMute = () => {
    if (audioRef.current && audioReady) {
      console.log("Toggling mute, current state:", isMuted);
      audioRef.current.muted = !isMuted;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current && audioReady) {
      audioRef.current.volume = newVolume;
      audioRef.current.muted = false; // Unmute when volume is adjusted
      setIsMuted(false);
    }
  };

  const handleSeek = (e) => {
    if (audioRef.current && audioReady && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const seekTime = (clickX / width) * duration;
      
      audioRef.current.currentTime = seekTime;
    }
  };

  const formatTime = (time) => {
    if (isNaN(time) || time === 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const debugAudio = () => {
    if (audioRef.current) {
      console.log("=== AUDIO DEBUG INFO ===");
      console.log("Audio element:", audioRef.current);
      console.log("Audio readyState:", audioRef.current.readyState);
      console.log("Audio paused:", audioRef.current.paused);
      console.log("Audio muted:", audioRef.current.muted);
      console.log("Audio volume:", audioRef.current.volume);
      console.log("Audio currentSrc:", audioRef.current.currentSrc);
      console.log("Audio error:", audioRef.current.error);
      console.log("Audio duration:", audioRef.current.duration);
      console.log("Audio currentTime:", audioRef.current.currentTime);
      console.log("Component state - isPlaying:", isPlaying);
      console.log("Component state - isMuted:", isMuted);
      console.log("Component state - volume:", volume);
      console.log("Component state - audioReady:", audioReady);
      console.log("==========================");
      
      // Try to force play
      audioRef.current.play().then(() => {
        console.log("Audio started successfully");
      }).catch(error => {
        console.error("Audio play failed:", error);
      });
    } else {
      console.log("Audio element not found");
    }
  };

  return (
    <footer className="w-full py-6 bg-black-100/55 text-white">
      <div className="flex flex-col items-center gap-6">
        {/* Simple Horizontal Audio Player */}
        <div className="bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-pink-900/80 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-lg w-full max-w-md">
          {/* Track Info */}
          <div className="text-center mb-3">
            <h3 className="text-sm font-semibold text-white">Tuyo Narcos Theme</h3>
            <p className="text-xs text-white/70">Background Music</p>
            {/* Audio Status Indicator */}
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className={`w-2 h-2 rounded-full ${audioReady ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`}></div>
              <span className="text-xs text-white/60">
                {audioReady ? 'Audio Ready' : 'Loading Audio...'}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-3">
            <div 
              className="relative h-2 bg-white/20 rounded-full cursor-pointer overflow-hidden"
              onClick={handleSeek}
            >
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-white/60 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-4 mb-3">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} className="ml-0.5" />}
            </button>

            {/* Mute Button */}
            <button
              onClick={toggleMute}
              className="w-8 h-8 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
              title={isMuted ? "Unmute" : "Mute"}
            >
              <span className="text-sm">{isMuted ? "🔇" : "🔊"}</span>
            </button>

            {/* Volume Slider */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/70">Vol</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 h-2 bg-white/20 rounded-full appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #4ade80 0%, #14b8a6 ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%)`
                }}
                title="Volume"
              />
              <span className="text-xs text-white/70 w-8 text-right">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>

          {/* Debug Button */}
          <button
            onClick={debugAudio}
            className="absolute top-2 right-2 text-white/40 hover:text-yellow-400 transition-colors text-xs"
            title="Debug Audio"
          >
            🐛
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
      <a
        href="https://www.instagram.com/akshat_trivedi_/"
        target="_blank"
        rel="noopener noreferrer"
            className="group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaInstagram size={24} className="relative text-white group-hover:text-pink-400 transition-colors duration-300" />
            </div>
          </a>
          <a href="https://x.com/Akshat394" target="_blank" rel="noopener noreferrer" className="group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaXTwitter size={24} className="relative text-white group-hover:text-blue-400 transition-colors duration-300" />
            </div>
      </a>
      <a
        href="https://linkedin.com/in/akshat-trived1"
        target="_blank"
        rel="noopener noreferrer"
            className="group"
      >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaLinkedin size={24} className="relative text-white group-hover:text-blue-500 transition-colors duration-300" />
            </div>
      </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
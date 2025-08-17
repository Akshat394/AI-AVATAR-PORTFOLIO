import React, { useState, useRef, useEffect } from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaPlay, FaPause } from "react-icons/fa6";

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
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
      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current.currentTime);
      });
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current.duration);
      });
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

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const seekTime = (clickX / width) * duration;
    
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const debugAudio = () => {
    if (audioRef.current) {
      console.log("Audio element:", audioRef.current);
      console.log("Audio readyState:", audioRef.current.readyState);
      console.log("Audio paused:", audioRef.current.paused);
      console.log("Audio muted:", audioRef.current.muted);
      console.log("Audio volume:", audioRef.current.volume);
      console.log("Audio currentSrc:", audioRef.current.currentSrc);
      console.log("Audio error:", audioRef.current.error);
      
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
        {/* Creative Audio Player */}
        <div className="relative group">
          {/* Main Audio Player Container */}
          <div className="bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-pink-900/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/25">
            {/* Player Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <div className="text-xs text-white/60 font-mono">AUDIO PLAYER v1.0</div>
            </div>

            {/* Track Info */}
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tuyo Narcos Theme
              </h3>
              <p className="text-sm text-white/70">Background Music</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div 
                className="relative h-2 bg-white/20 rounded-full cursor-pointer overflow-hidden group"
                onClick={handleSeek}
              >
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex justify-between text-xs text-white/60 mt-2">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-center gap-4 mb-4">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="relative group/btn"
                title={isPlaying ? "Pause" : "Play"}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50">
                  {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} className="ml-1" />}
                </div>
              </button>

              {/* Mute Button */}
              <button
                onClick={toggleMute}
                className="relative group/btn"
                title={isMuted ? "Unmute" : "Mute"}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-red-500/50">
                  <span className="text-lg">{isMuted ? "🔇" : "🔊"}</span>
                </div>
              </button>

              {/* Volume Control */}
              <div className="relative group/volume">
                <button
                  onMouseEnter={() => setShowVolumeSlider(true)}
                  onMouseLeave={() => setShowVolumeSlider(false)}
                  className="relative group/btn"
                  title="Volume"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-full blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-green-500/50">
                    <span className="text-lg">🎚️</span>
                  </div>
                </button>
                
                {/* Volume Slider Popup */}
                {showVolumeSlider && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-2xl">
                    <div className="w-32 h-4 bg-white/20 rounded-full p-1">
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-full h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full appearance-none cursor-pointer slider-vertical"
                        style={{
                          background: `linear-gradient(to right, #4ade80 0%, #14b8a6 ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%)`
                        }}
                        title="Volume"
                      />
                    </div>
                    <div className="text-center text-xs text-white/70 mt-1">
                      {Math.round(volume * 100)}%
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Visualizer Bars */}
            <div className="flex items-end justify-center gap-1 h-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 bg-gradient-to-t from-blue-400 to-purple-400 rounded-full transition-all duration-300 ${
                    isPlaying ? 'animate-pulse' : ''
                  }`}
                  style={{
                    height: `${isPlaying ? Math.random() * 100 : 20}%`,
                    animationDelay: `${i * 0.1}s`
                  }}
                ></div>
              ))}
            </div>

            {/* Debug Button */}
            <button
              onClick={debugAudio}
              className="absolute top-2 right-2 text-white/40 hover:text-yellow-400 transition-colors text-xs opacity-0 group-hover:opacity-100"
              title="Debug Audio"
            >
              🐛
            </button>
          </div>
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
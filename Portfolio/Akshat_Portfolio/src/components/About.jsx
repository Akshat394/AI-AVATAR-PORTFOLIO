import React, { useRef, useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import githubProfile from "../assets/github dp.jpg";

gsap.registerPlugin(ScrollTrigger);

// Typewriter effect for heading
const useTypewriter = (text, speed = 60) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
};

const CARD_GRADIENTS = [
  "from-pink-500 via-red-400 to-yellow-400",
  "from-blue-500 via-purple-500 to-pink-400",
  "from-green-400 via-cyan-400 to-blue-500",
  "from-yellow-400 via-orange-400 to-pink-500",
];

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: index * 0.18,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group w-full max-w-xs min-h-[260px] flex flex-col items-center justify-center p-1 rounded-2xl shadow-xl bg-gradient-to-br ${CARD_GRADIENTS[index % CARD_GRADIENTS.length]} transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden`}
      style={{ backdropFilter: 'blur(12px) saturate(160%)' }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-10 rounded-2xl pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center justify-center py-8 px-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white bg-opacity-30 shadow-lg mb-4 animate-card-icon-float">
          <img src={icon} alt={title} className="w-10 h-10 object-contain" />
        </div>
        <h3 className="text-white text-[20px] font-extrabold text-center drop-shadow-lg mb-2">
          {title}
        </h3>
      </div>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-16 bg-white bg-opacity-20 blur-2xl rounded-full group-hover:opacity-60 opacity-40 transition-all duration-300" />
    </div>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const containerRef = useRef(null);
  const typewriterText = useTypewriter("About Me.");

  useEffect(() => {
    if (containerRef.current) {
      // Futuristic entrance animation
      gsap.fromTo(
        containerRef.current,
        { 
          opacity: 0, 
          scale: 0.8,
          rotationY: -15,
          transformPerspective: 1000
        },
        { 
          opacity: 1, 
          scale: 1,
          rotationY: 0,
          duration: 1.5, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -50, y: 30 },
        { opacity: 1, x: 0, y: 0, duration: 1.2, ease: "power2.out", delay: 0.3 }
      );
    }
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power3.out", delay: 0.6 }
      );
    }
  }, []);

  return (
    <div className="relative flex justify-center items-center min-h-[600px] py-12 px-4 sm:px-8 overflow-hidden mt-32">
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] opacity-90" />
        <div className="absolute inset-0 cyber-grid" />
        <div className="absolute inset-0 floating-particles" />
        <div className="absolute inset-0 energy-field" />
      </div>
      
      {/* Glassmorphism Card */}
      <div ref={containerRef} className="relative z-10 max-w-3xl w-full mx-auto glass-card rounded-3xl shadow-2xl px-8 py-12 flex flex-col items-center">
        {/* Profile Image with Futuristic Border */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full cyber-border" />
          <img src={githubProfile} alt="Profile" className="w-40 h-40 rounded-full object-cover border-4 border-white relative z-10 profile-img-anim" />
        </div>
        
        {/* Animated Headline */}
        <div ref={headingRef} className="text-center">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText + " inline-block"}>
            <span>{typewriterText}</span>
            <span className="text-cyan-400 cyber-cursor">|</span>
          </h2>
        </div>
        
        {/* Improved Bio */}
        <p ref={paragraphRef} className="mt-4 text-secondary text-[18px] max-w-2xl leading-[32px] mx-auto text-center font-medium">
          Passionate about building the future at the intersection of <span className="text-[#00ffff] font-semibold">AI</span>, <span className="text-[#7366ff] font-semibold">IoT</span>, and <span className="text-[#00e6e6] font-semibold">Web</span> platforms. I thrive on solving real-world problems with elegant, scalable code and love collaborating in cross-functional teams. Always learning, always innovating.
        </p>
        
        {/* Call-to-Action Buttons - Less Shiny */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white font-bold text-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 focus:outline-none relative overflow-hidden group">
            <span className="relative z-10">Let's Connect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/akshat-trived1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#0077b5] to-[#00a0dc] text-white font-bold text-lg transition-transform duration-200 hover:scale-105 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            LinkedIn
          </a>
        </div>
        
        {/* Service Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
      
      {/* Futuristic CSS Effects */}
      <style>{`
        .glass-card {
          background: rgba(26, 26, 46, 0.6);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(0, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 255, 255, 0.1);
        }
        
        .cyber-grid {
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .floating-particles::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle, rgba(0, 255, 255, 0.3) 1px, transparent 1px);
          background-size: 100px 100px;
          animation: particleFloat 15s linear infinite;
        }
        
        @keyframes particleFloat {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-100px) rotate(360deg); }
        }
        
        .energy-field {
          background: radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
          animation: energyPulse 4s ease-in-out infinite;
        }
        
        @keyframes energyPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        .cyber-border {
          z-index: 1;
          display: block;
          width: 170px;
          height: 170px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #00ffff, #7366ff, #00e6e6, #00ffff 100%);
          filter: blur(6px) brightness(1.1);
          animation: cyberSpin 6s linear infinite;
        }
        
        @keyframes cyberSpin {
          0% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(360deg) scale(1.02); }
        }
        
        .cyber-cursor {
          animation: cyberBlink 1.5s infinite;
        }
        
        @keyframes cyberBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .profile-img-anim {
          transition: all 0.4s ease;
        }
        
        .profile-img-anim:hover {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
          transform: scale(1.05);
        }
        
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 12s ease-in-out infinite;
        }
        
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes card-icon-float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        
        .animate-card-icon-float {
          animation: card-icon-float 2.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(About, "about");

import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black-100/55 text-white">
      <div className="flex flex-col items-center gap-6">
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

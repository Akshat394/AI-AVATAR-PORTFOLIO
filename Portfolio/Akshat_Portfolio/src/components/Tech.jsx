import React from "react";
import { SectionWrapper } from "../hoc";

const floatStyle = {
  width: "900px",
  maxWidth: "100%",
  height: "auto",
  animation: "float 3.5s ease-in-out infinite"
};

const iconStyle = {
  width: "110px",
  height: "110px",
  margin: "0 32px",
  transition: "transform 0.2s",
  animation: "pulse 1.8s infinite"
};

const leetcodeColor =
  "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png";
const hackerrankColor =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png";

const Tech = () => (
  <section>
    <style>{`
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-24px); }
        100% { transform: translateY(0px); }
      }
      @keyframes pulse {
        0% { transform: scale(1); filter: brightness(1); }
        50% { transform: scale(1.18); filter: brightness(1.2); }
        100% { transform: scale(1); filter: brightness(1); }
      }
      .coding-handle-icon:hover {
        transform: scale(1.15);
      }
    `}</style>
    <h2 className="text-4xl font-bold text-center mb-6">Skills</h2>
    <p align="center">
      <img
        src="https://skillicons.dev/icons?i=python,js,typescript,c,cpp,scala,java,html,css,react,nextjs,tailwind,android,opencv,opengl,cmake,gradle,arduino,tensorflow,mongodb,kafka,docker,githubactions,aws,postgresql,sqlite,mysql,linux,vscode,git,postman,jira,confluence&theme=light&perline=10&size=96"
        alt="Skill Icons"
        style={floatStyle}
      />
    </p>
    {/* Coding Handles Section */}
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-center mb-6">Coding Handles</h2>
      <div className="flex flex-row justify-center items-center gap-10">
        <a href="https://leetcode.com/u/cannister2k22/" target="_blank" rel="noopener noreferrer" title="LeetCode">
          <img
            src={leetcodeColor}
            alt="LeetCode"
            className="coding-handle-icon"
            style={iconStyle}
          />
        </a>
        <a href="https://www.hackerrank.com/profile/2201640130012_IT" target="_blank" rel="noopener noreferrer" title="HackerRank">
          <img
            src={hackerrankColor}
            alt="HackerRank"
            className="coding-handle-icon"
            style={iconStyle}
          />
        </a>
      </div>
    </div>
  </section>
);

export default SectionWrapper(Tech, "");

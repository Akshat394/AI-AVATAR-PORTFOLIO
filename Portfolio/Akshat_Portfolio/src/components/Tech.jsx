import React from "react";
import { SectionWrapper } from "../hoc";

const iconFor = (id) => `https://skillicons.dev/icons?i=${id}`;
const badge = (label) => `https://img.shields.io/badge/${encodeURIComponent(label)}-black?style=for-the-badge`;

const categories = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: iconFor("python") },
      { name: "JavaScript", icon: iconFor("js") },
      { name: "TypeScript", icon: iconFor("typescript") },
      { name: "C", icon: iconFor("c") },
      { name: "C++", icon: iconFor("cpp") },
      { name: "Scala", icon: iconFor("scala") },
      { name: "Java", icon: iconFor("java") },
    ],
  },
  {
    title: "Web",
    items: [
      { name: "HTML", icon: iconFor("html") },
      { name: "CSS", icon: iconFor("css") },
      { name: "React", icon: iconFor("react") },
      { name: "Next.js", icon: iconFor("nextjs") },
      { name: "Tailwind CSS", icon: iconFor("tailwind") },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "React Native", icon: iconFor("react") },
      { name: "Android", icon: iconFor("android") },
    ],
  },
  {
    title: "Systems • Android",
    items: [
      { name: "JNI", icon: badge("JNI") },
      { name: "NDK", icon: badge("NDK") },
      { name: "Camera2", icon: badge("Camera2") },
      { name: "OpenGL ES", icon: iconFor("opengl") },
      { name: "GLSurfaceView", icon: badge("GLSurfaceView") },
    ],
  },
  {
    title: "ML • AI",
    items: [
      { name: "TensorFlow", icon: iconFor("tensorflow") },
      { name: "OpenCV", icon: iconFor("opencv") },
      { name: "CNNs", icon: badge("CNNs") },
      { name: "EfficientNet", icon: badge("EfficientNet") },
      { name: "InceptionResNet", icon: badge("InceptionResNet") },
      { name: "MediaPipe", icon: badge("MediaPipe") },
      { name: "LangChain", icon: badge("LangChain") },
      { name: "OpenAI API", icon: iconFor("openai") },
    ],
  },
  {
    title: "Data • Big Data",
    items: [
      { name: "MongoDB", icon: iconFor("mongodb") },
      { name: "PostgreSQL", icon: iconFor("postgresql") },
      { name: "SQLite", icon: iconFor("sqlite") },
      { name: "MySQL", icon: iconFor("mysql") },
      { name: "Hadoop/HDFS", icon: badge("Hadoop/HDFS") },
      { name: "Spark", icon: badge("Spark") },
      { name: "Hive", icon: badge("Hive") },
      { name: "Pig", icon: badge("Pig") },
      { name: "HBase", icon: badge("HBase") },
      { name: "Kafka", icon: iconFor("kafka") },
    ],
  },
  {
    title: "Tools • Build • Cloud",
    items: [
      { name: "Docker", icon: iconFor("docker") },
      { name: "GitHub Actions", icon: iconFor("githubactions") },
      { name: "AWS", icon: iconFor("aws") },
      { name: "CMake", icon: iconFor("cmake") },
      { name: "Gradle", icon: iconFor("gradle") },
      { name: "Linux", icon: iconFor("linux") },
      { name: "VS Code", icon: iconFor("vscode") },
      { name: "Git", icon: iconFor("git") },
      { name: "Postman", icon: iconFor("postman") },
      { name: "JIRA", icon: iconFor("jira") },
      { name: "Confluence", icon: iconFor("confluence") },
    ],
  },
];

const Item = ({ name, icon }) => (
  <div className="flex items-center gap-3 px-4 py-2 bg-tertiary rounded-xl border border-white/10 hover:border-white/30 transition">
    <img src={icon} alt={name} className="w-8 h-8 rounded-sm" />
    <span className="text-sm md:text-base text-white font-semibold">{name}</span>
  </div>
);

const Category = ({ title, items }) => (
  <div className="mb-10">
    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-wide">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {items.map((it) => (
        <Item key={`${title}-${it.name}`} {...it} />
      ))}
    </div>
  </div>
);

const Tech = () => (
  <section>
    <h2 className="text-4xl font-extrabold text-center mb-10">Skills</h2>
    <div className="max-w-6xl mx-auto px-4">
      {categories.map((c) => (
        <Category key={c.title} {...c} />
      ))}
    </div>
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-6">Coding Handles</h2>
      <div className="flex flex-row justify-center items-center gap-10">
        <a href="https://leetcode.com/u/cannister2k22/" target="_blank" rel="noopener noreferrer" title="LeetCode">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode"
            className="w-[110px] h-[110px] transition-transform duration-200 hover:scale-110"
          />
        </a>
        <a href="https://www.hackerrank.com/profile/2201640130012_IT" target="_blank" rel="noopener noreferrer" title="HackerRank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png"
            alt="HackerRank"
            className="w-[110px] h-[110px] transition-transform duration-200 hover:scale-110"
          />
        </a>
      </div>
    </div>
  </section>
);

export default SectionWrapper(Tech, "");

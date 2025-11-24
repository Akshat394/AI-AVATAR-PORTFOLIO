import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Item = ({ name, icon }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.04 }}
    className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-[rgba(26,26,46,0.55)] border border-white/10 hover:border-cyan-400/60 transition shadow-[0_8px_24px_rgba(0,255,255,0.08)]"
  >
    <img src={icon} alt={name} className="w-9 h-9 rounded-sm drop-shadow-[0_6px_16px_rgba(0,255,255,0.35)]" />
    <span className="text-sm md:text-base text-white font-semibold tracking-wide">{name}</span>
  </motion.div>
);

const Category = ({ title, items, index }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="relative mb-10"
  >
    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/15 via-fuchsia-500/15 to-purple-600/15 blur-xl" />
    <div className="relative rounded-2xl p-5 bg-[rgba(12,14,22,0.75)] border border-white/10">
      <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-purple-300 mb-4">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((it) => (
          <Item key={`${title}-${it.name}`} {...it} />
        ))}
      </div>
    </div>
  </motion.div>
);

const Tech = () => (
  <section>
    <style>{`
      .neon-title { text-shadow: 0 0 14px rgba(0,255,255,0.35), 0 0 34px rgba(255,0,255,0.25); }
    `}</style>
    <div className="text-center mb-10">
      <span id="skills"></span>
      <h2 className="neon-title text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400">
        Skills
      </h2>
    </div>
    <div className="max-w-6xl mx-auto px-4">
      {categories.map((c, i) => (
        <Category key={c.title} {...c} index={i} />
      ))}
    </div>
    <div className="mt-16">
      <span id="codinghandles"></span>
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

export default SectionWrapper(Tech, "skills");

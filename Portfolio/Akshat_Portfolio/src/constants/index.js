import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import techIcons from './autoIcons';

// --- Akshat Trivedi Portfolio Data ---

const services = [
  {
    title: "Software Developer",
    icon: web, // Use your best 'web' or 'backend' icon
  },
  {
    title: "Full Stack Developer",
    icon: backend, // Use your 'backend' or 'creator' icon
  },
  {
    title: "AI/ML Engineer",
    icon: creator, // Use your 'creator' or AI-related icon
  },
  {
    title: "Data Analyst and Researcher",
    icon: aws, // Use your 'aws' or data/analytics icon
  },
];

const technologies = [
  { name: "Python", icon: techIcons['python'] || nodejs },
  { name: "JavaScript (ES6+)", icon: techIcons['javascript'] || nodejs },
  { name: "TypeScript", icon: techIcons['typescript'] || nodejs },
  { name: "C", icon: techIcons['c'] || nodejs },
  { name: "C++", icon: techIcons['cpp'] || nodejs },
  { name: "Scala", icon: techIcons['scala'] || nodejs },
  { name: "Java", icon: techIcons['java'] || nodejs },
  { name: "HTML", icon: techIcons['html'] || nodejs },
  { name: "CSS", icon: techIcons['css'] || nodejs },
  { name: "React", icon: techIcons['reactjs'] || nodejs },
  { name: "Next.js", icon: techIcons['nextjs'] || nodejs },
  { name: "Tailwind CSS", icon: techIcons['tailwind'] || nodejs },
  { name: "Streamlit", icon: techIcons['streamlit'] || nodejs },
  { name: "React Native", icon: techIcons['reactnative'] || nodejs },
  { name: "Android", icon: techIcons['android'] || nodejs },
  { name: "Arduino", icon: techIcons['arduino'] || nodejs },
  { name: "Embedded C", icon: techIcons['embeddedc'] || nodejs },
  { name: "8051 microcontrollers", icon: techIcons['8051microcontrollers'] || nodejs },
  { name: "OpenCV", icon: techIcons['opencv'] || nodejs },
  { name: "OpenGL ES", icon: techIcons['opengl'] || nodejs },
  { name: "JNI", icon: techIcons['jni'] || nodejs },
  { name: "NDK", icon: techIcons['ndk'] || nodejs },
  { name: "Camera2", icon: techIcons['camera2'] || nodejs },
  { name: "GLSurfaceView", icon: techIcons['glsurfaceview'] || nodejs },
  { name: "CMake", icon: techIcons['cmake'] || nodejs },
  { name: "Gradle", icon: techIcons['gradle'] || nodejs },
  { name: "TensorFlow", icon: techIcons['tensorflow'] || nodejs },
  { name: "CNNs", icon: techIcons['cnns'] || nodejs },
  { name: "EfficientNet", icon: techIcons['efficientnet'] || nodejs },
  { name: "InceptionResNet", icon: techIcons['inceptionresnet'] || nodejs },
  { name: "MediaPipe", icon: techIcons['mediapipe'] || nodejs },
  { name: "LangChain", icon: techIcons['langchain'] || nodejs },
  { name: "OpenAI API", icon: techIcons['openaiapi'] || nodejs },
  { name: "Hadoop/HDFS", icon: techIcons['hadoop'] || nodejs },
  { name: "Spark", icon: techIcons['spark'] || nodejs },
  { name: "Hive", icon: techIcons['hive'] || nodejs },
  { name: "Pig", icon: techIcons['pig'] || nodejs },
  { name: "HBase", icon: techIcons['hbase'] || nodejs },
  { name: "MongoDB", icon: techIcons['mongodb'] || nodejs },
  { name: "Kafka", icon: techIcons['kafka'] || nodejs },
  { name: "Docker", icon: techIcons['docker'] || nodejs },
  { name: "GitHub Actions", icon: techIcons['githubactions'] || nodejs },
  { name: "n8n", icon: techIcons['n8n'] || nodejs },
  { name: "Apify", icon: techIcons['apify'] || nodejs },
  { name: "AWS", icon: techIcons['aws'] || nodejs },
  { name: "PostgreSQL", icon: techIcons['postgresql'] || nodejs },
  { name: "SQLite", icon: techIcons['sqlite'] || nodejs },
  { name: "MySQL", icon: techIcons['mysql'] || nodejs },
  { name: "Linux (Ubuntu)", icon: techIcons['linux'] || nodejs },
  { name: "VS Code", icon: techIcons['vscode'] || nodejs },
  { name: "Git", icon: techIcons['git'] || nodejs },
  { name: "Postman", icon: techIcons['postman'] || nodejs },
  { name: "JIRA", icon: techIcons['jira'] || nodejs },
  { name: "Confluence", icon: techIcons['confluence'] || nodejs },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "The Vibe Coder (Startup)",
    icon: backend,
    iconBg: "#383E56",
    date: "2025-Present",
    points: [
      "Developed Facebook Social Analyzer: Engineered a Python tool for analyzing and visualizing Facebook social graphs, providing actionable insights for research and analytics.",
      "Built Studio AI: Created a TypeScript web app for AI-driven content creation and design automation, streamlining creative workflows with generative AI tools.",
      "Implemented Mercari Scraper: Developed a Python-based shopping assistant for Mercari Japan, featuring intelligent product recommendations and automated web scraping.",
      "Collaborated with cross-functional teams to deliver robust, production-ready solutions and contributed to code reviews and documentation."
    ],
  },
  {
    title: "RLHF Code Specialist (Freelance)",
    company_name: "Outlier AI",
    icon: creator,
    iconBg: "#383E56",
    date: "2024-2025",
    points: [
      "Specialized in Reinforcement Learning from Human Feedback (RLHF) for code generation and evaluation tasks.",
      "Designed and implemented RLHF pipelines to improve LLM-based code assistants, focusing on prompt engineering, reward modeling, and human-in-the-loop evaluation.",
      "Collaborated with research and engineering teams to deploy scalable solutions for code quality and safety.",
      "Delivered technical documentation and best practices for RLHF workflows in production environments."
    ],
  },
  {
    title: "Chairperson & Research Associate",
    company_name: "IEEE PSIT (Student Branch)",
    icon: web,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Led the IEEE Student Branch as Chairperson, overseeing research, events, and technical initiatives.",
      "Developed Deepfake Detector: Built a Python-based dual-path video forgery detection system using advanced deep learning models for high-accuracy detection.",
      "Engineered Squid Game Doll Embedded Real-Time Motion Detection System: Created an Arduino-based interactive replica with real-time control logic and embedded systems integration.",
      "Conducted research, mentored junior members, and presented findings at national and international conferences."
    ],
  },
];

const testimonials = [
  {
    testimonial: "Akshat is a passionate Python developer who brings clarity and innovation to every project.",
    name: "Peer Reviewer",
    designation: "Open Source Collaborator",
    company: "Hugging Face Community",
    image: firstTestimonial,
  },
  {
    testimonial: "His ability to explain complex concepts makes him a great mentor and team player.",
    name: "Team Lead",
    designation: "AI Research",
    company: "Outlier AI",
    image: secondTestimonial,
  },
  {
    testimonial: "Akshat's work in ML and cloud automation is top-notch. Highly recommended!",
    name: "Project Manager",
    designation: "Cloud Solutions",
    company: "Freelance",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "FlamEdge",
    description: "Real-time Android edge detection pipeline powered by Camera2, JNI, OpenCV (C++), and OpenGL ES 2.0, plus a lightweight TypeScript web viewer for sharing processed frames.",
    tags: [
      { name: "Android", color: "blue-text-gradient" },
      { name: "OpenCV", color: "green-text-gradient" },
      { name: "C++", color: "pink-text-gradient" },
      { name: "OpenGL ES", color: "white-text-gradient" },
      { name: "JNI", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/Akshat394/FlamEdge",
  },
  {
    name: "Deepfake Detector",
    description: "Python-based dual-path video forgery detection system with ASCII preprocessing, temporal fusion, and advanced deep learning models. High accuracy on real-world datasets.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "TensorFlow", color: "green-text-gradient" },
      { name: "OpenCV", color: "pink-text-gradient" },
      { name: "Deep Learning", color: "white-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/Akshat394/DEEPFAKE-DETECTOR",
  },
  {
    name: "Smart Retail 360",
    description: "Next-generation supply chain orchestration platform with AI/ML, real-time analytics, IoT, and autonomous delivery. Features digital twin simulation, sustainability tracking, and omnichannel order management.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "AI/ML", color: "white-text-gradient" },
      { name: "IoT", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/Akshat394/Smart-Retail-360",
  },
  {
    name: "Squid Game Doll Embedded Real-Time Motion Detection System",
    description: "Arduino-based interactive replica of the Squid Game doll using servos, ultrasonic sensors, audio modules, and real-time control logic.",
    tags: [
      { name: "Arduino", color: "blue-text-gradient" },
      { name: "Embedded", color: "green-text-gradient" },
      { name: "Real-Time", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/Akshat394/Squid-Game-Doll-Embedded-Real-Time-Motion-Detection-System",
  },
  {
    name: "Fair Play App",
    description: "React Native anti-doping education app with TensorFlow models, AWS-backed inference, and real-time quiz modules. Interactive and user-centric design.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "TensorFlow", color: "green-text-gradient" },
      { name: "AWS", color: "pink-text-gradient" },
      { name: "Mobile", color: "white-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/Akshat394/FairPlayAPP",
  },
  {
    name: "Crisp: AI-Powered Interview Assistant",
    description: "Next-generation AI-powered interview assistant with modern UI, robust data persistence, and advanced AI features for real-world interview simulations.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "Ant Design", color: "pink-text-gradient" },
      { name: "OpenAI", color: "white-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/Akshat394/CRISP-AI-iNTERVIEWER",
  },
  {
    name: "Resume GPT",
    description: "AI-powered resume builder and analyzer with OpenAI API, LangChain, and PDF export. Built with TypeScript, React, and Node.js for seamless user experience.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "OpenAI", color: "white-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/Akshat394/resume-gpt",
  },
  {
    name: "Smart-City-Traveller",
    description: "AI-assisted city explorer using Foursquare Places API v3 and Google Maps. Zero-typing city autocomplete, curated categories, live discovery, and map visualization.",
    tags: [
      { name: "Android", color: "blue-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "Google Maps", color: "pink-text-gradient" },
      { name: "Foursquare", color: "white-text-gradient" },
      { name: "Volley", color: "blue-text-gradient" },
    ],
    image: "/smart-city-traveller.png",
    source_code_link: "https://github.com/Akshat394/Smart-City-Traveller",
  },
  {
    name: "Pulsesenti Sentiment Analysis Dashboard",
    description: "TypeScript dashboard for live social media sentiment analysis, anomaly detection, and alerts. Real-time insights and visualization.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Data Viz", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/Akshat394/Pulsesenti_sentiment_analysis_dashboard",
  },
  {
    name: "Studio AI",
    description: "TypeScript web app for AI-driven content creation and design automation. Streamlines creative workflows with generative AI tools.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/Akshat394/StudioAI",
  },
  {
    name: "Facebook-Social-Analyzer",
    description: "Python tool for Facebook social graph analysis, extracting insights and visualizing connections. Useful for research and analytics.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Social Graph", color: "green-text-gradient" },
      { name: "Analytics", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/Akshat394/Facebook-Social-Analyzer",
  },
  {
    name: "Mercari Scraper",
    description: "Python-based shopping assistant for Mercari Japan: real web scraping, intelligent product recommendations, and automated search.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Web Scraping", color: "green-text-gradient" },
      { name: "Automation", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/Akshat394/Mercari-japan-scraper-v2",
  },
  {
    name: "p2p-book-exchange-app",
    description: "Next.js/React community book-sharing application with responsive UI and REST APIs. Secure, real-time, and user-friendly.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80",
    source_code_link: "https://github.com/Akshat394/p2p-book-exchange-app",
  },
  {
    name: "PSIT Virtual Labs",
    description: "HTML/CSS/JS virtual lab platform featuring interactive simulations for CS and EE curricula. Enhances learning with hands-on digital experiments.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Education", color: "white-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/Akshat394/PSIT-VIRTUAL-LABS",
  },
];

export { services, technologies, experiences, testimonials, projects };

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "codinghandles",
    title: "Coding Handles",
  },
];

// ─────────────────────────────────────────────────────────────
//  PORTFOLIO DATA — Edit this file to update your portfolio
// ─────────────────────────────────────────────────────────────

export const personal = {
  name: "R. Siraddeen",
  title: "Full Stack Developer",
  tagline: "React · Node.js · TypeScript",
  location: "Tirupati, India",
  email: "siraddeen15@gmail.com",
  github: "https://github.com/Siraddeen",
  linkedin: "https://www.linkedin.com/in/siraddeen/",
  available: true,
};

export const stats = [
  { num: "2+", label: "Live Projects" },
  { num: "3",  label: "Certifications" },
  { num: "MERN", label: "Core Stack" },
  { num: "0",  label: "Notice Period" },
];

export const skills = [
  {
    icon: "⚛️",
    name: "Frontend",
    desc: "Building responsive, accessible UIs with modern React patterns and TypeScript.",
    tags: ["React.js", "TypeScript", "JavaScript ES6+", "HTML5 / CSS3", "Context API", "Hooks"],
  },
  {
    icon: "🔧",
    name: "Backend",
    desc: "Designing and building RESTful APIs with authentication, validation, and MVC structure.",
    tags: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "MVC", "Middleware"],
  },
  {
    icon: "🗄️",
    name: "Database",
    desc: "Schema design, CRUD operations, and data modeling for scalable applications.",
    tags: ["MongoDB", "MySQL", "SQL", "Schema Design"],
  },
  {
    icon: "🚀",
    name: "DevOps & Deployment",
    desc: "CI/CD pipelines, containerisation, and cloud deployment for production apps.",
    tags: ["Docker", "Git / GitHub", "Render", "Netlify", "CI/CD", "Linux CLI"],
  },
  {
    icon: "🐍",
    name: "Python & Data",
    desc: "Scripting, data processing, and analytics with Python and BI tools.",
    tags: ["Python", "CSV Processing", "Power BI", "Excel", "SQL Analytics"],
  },
  {
    icon: "🛠️",
    name: "Tools & Concepts",
    desc: "Industry-standard workflows, testing, and engineering concepts.",
    tags: ["Postman", "Cloudinary", "VS Code", "OOP", "Agile", "RBAC"],
  },
];

export const experience = [
  {
    date: "July 2024",
    title: "Full Stack Developer Intern",
    company: "CodeTech IT Solutions — Remote",
    bullets: [
      "Built and delivered a full-stack web application independently as part of a structured certification programme.",
      "Integrated React frontend with Node.js + Express backend and handled end-to-end feature implementation.",
      "Practised agile-based task execution, Git version control, and iterative debugging in a professional environment.",
    ],
  },
  {
    date: "2024",
    title: "Software Engineering Virtual Experience",
    company: "JPMorgan Chase & Co. (Forage) — Remote",
    bullets: [
      "Completed enterprise-grade Java backend simulation — built RESTful APIs and service-layer logic following structured design patterns.",
      "Gained exposure to SDLC, debugging workflows, and production-quality coding standards.",
    ],
  },
  {
    date: "Aug 2025",
    title: "Data Analytics Job Simulation",
    company: "Deloitte Australia (Forage) — Remote",
    bullets: [
      "Performed practical data analysis including cleaning, validation, forensic technology, and dashboard creation.",
      "Created a Power BI dashboard using real-world company data and derived business insights from structured datasets.",
    ],
  },
];

// ─── ADD YOUR NEW PROJECTS HERE ────────────────────────────────
export const projects = [
  {
    num: "PROJECT 01",
    title: "Mini Social Media Platform",
    desc: "Production-ready full-stack social platform with JWT authentication, role-based access control, media uploads, REST APIs, pagination, and error handling. Built end-to-end and deployed live.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT", "Docker"],
    liveUrl: "https://siraddeen-mini-media.onrender.com/",
    githubUrl: "https://github.com/Siraddeen",
  },
  {
    num: "PROJECT 02",
    title: "Python CSV Data Cleaner & Processor",
    desc: "Python utility to clean, validate, normalize, and transform raw CSV datasets. Handles missing values, duplicates, and formatting inconsistencies with modular, reusable functions. Live on Render.",
    stack: ["Python", "Data Validation", "Automation", "CSV Processing", "Render"],
    liveUrl: "https://csv-data-processor.onrender.com/",
    githubUrl: "https://github.com/Siraddeen",
  },
];

export const education = {
  degree: "Mechanical Engineering",
  grade: "B.Tech · 71%",
  institution: "JNTU Anantapur (JNTUA)",
  year: "Graduated 2023 · Tirupati, India",
  note: "Pivoted into software development through self-directed learning, building a complete MERN stack skillset from the ground up.",
};

export const certifications = [
  { title: "Full Stack Web Dev (0–100)", issuer: "100xDevs" },
  { title: "Software Engineering VE", issuer: "JPMorgan Chase · Forage" },
  { title: "Data Analytics Simulation", issuer: "Deloitte Australia · Forage" },
  { title: "Full Stack Internship", issuer: "CodeTech IT Solutions · 2024" },
];

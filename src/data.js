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
  { num: "4+", label: "Live Projects" },
  { num: "3", label: "Certifications" },
  { num: "MERN", label: "Core Stack" },
  { num: "0", label: "Notice Period" },
];

export const skills = [
  {
    icon: "⚛️",
    name: "Frontend",
    desc: "Building responsive, accessible UIs with modern React patterns and TypeScript.",
    tags: [
      "React.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5 / CSS3",
      "Context API",
      "Hooks",
    ],
  },
  {
    icon: "🔧",
    name: "Backend",
    desc: "Designing and building RESTful APIs with authentication, validation, and MVC structure.",
    tags: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "MVC",
      "Middleware",
    ],
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
    desc: "Production-ready full-stack social platform with JWT authentication, role-based access control, media uploads, REST APIs, pagination, and error handling.",
    image: "/images/social.png",
    insights: [
      "Implemented JWT-based secure auth system",
      "Handled media uploads via Cloudinary",
      "Built scalable REST APIs with pagination",
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "JWT",
      "Docker",
    ],
    liveUrl: "https://siraddeen-mini-media-v2.onrender.com/",
    githubUrl: "https://github.com/Siraddeen/mini-media-v2",
  },

  {
    num: "PROJECT 02",
    title: "Banking Customer Intelligence Pipeline",
    desc: "End-to-end data pipeline to clean, transform, and analyze banking customer data for fraud detection and segmentation.",
    image: "/images/banking.png",
    insights: [
      "Detected high-risk anomalies in customer transactions",
      "Reduced missing data by 35%",
      "Applied Pareto analysis for revenue insights",
    ],
    stack: ["Python", "Pandas", "ETL", "Data Cleaning", "SQL"],
    liveUrl: "https://github.com/Siraddeen/Banking-Customer-Data-Pipeline",
    githubUrl: "https://github.com/Siraddeen/Banking-Customer-Data-Pipeline",
  },

  {
    num: "PROJECT 03",
    title: "Remote Job Analytics Dashboard",
    desc: "Built & deployed a full-stack analytics dashboard processing real job data, reducing data inconsistencies and visualizing trends across 30+ days.",
    image: "/images/jobs.png",
    insights: [
      "React & Node jobs dominate remote roles",
      "US salaries are 2x higher than global avg",
      "Python/data roles growing fastest",
    ],
    stack: ["Python", "Power BI", "Data Visualization", "Analytics"],
    liveUrl: "https://siraddeen-remote-job-analytics.netlify.app/",
    githubUrl: "https://github.com/Siraddeen/Remote-job-analytic-dashboard",
  },

  {
    num: "PROJECT 04",
    title: "Python CSV Data Cleaner & Processor",
    desc: "Python utility to clean, validate, normalize CSV datasets and handle missing values & duplicates.",
    image: "/images/csv.png",
    insights: [
      "Automated CSV cleaning pipeline",
      "Handled duplicates & missing values",
      "Reusable modular functions",
    ],
    stack: ["Python", "Automation", "CSV Processing"],
    liveUrl: "https://siraddeen-dataclean-csv.onrender.com/",
    githubUrl: "https://github.com/Siraddeen/csv-data-processor2",
  },
];
// export const projects = [
//   {
//     num: "PROJECT 01",
//     title: "Mini Social Media Platform",
//     desc: "Production-ready full-stack social platform with JWT authentication, role-based access control, media uploads, REST APIs, pagination, and error handling. Built end-to-end and deployed live.",
//     stack: [
//       "React",
//       "TypeScript",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "Cloudinary",
//       "JWT",
//       "Docker",
//     ],
//     liveUrl: "https://siraddeen-mini-media.onrender.com/",
//     githubUrl: "https://github.com/Siraddeen/Siraddeen-mini-Media",
//   },
//   {
//     num: "PROJECT 02",
//     title: "Python CSV Data Cleaner & Processor",
//     desc: "Python utility to clean, validate, normalize, and transform raw CSV datasets. Handles missing values, duplicates, and formatting inconsistencies with modular, reusable functions. Live on Render.",
//     stack: [
//       "Python",
//       "Data Validation",
//       "Automation",
//       "CSV Processing",
//       "Render",
//     ],
//     liveUrl: "https://csv-data-processor.onrender.com/",
//     githubUrl: "https://github.com/Siraddeen/csv-data-processor",
//   },
// ];

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

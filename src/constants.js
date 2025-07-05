// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import docxitologo from "./assets/company_logo/docxitologo.png";
import cdaclogo from "./assets/company_logo/cdaclogo.png";
import Aagazlogo from "./assets/company_logo/aagazlogo.png";

// Education Section Logo's
import mplogo from "./assets/education_logo/mplogo.png";
import satilogo from "./assets/education_logo/satilogo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import Planup from "./assets/work_logo/planup.png";
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },

      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },

      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },

      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },

      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },

      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },

      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },

      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: docxitologo,
    role: "SDE INTERN",
    company: "Docxito (A Product of Autofabrico Manufacturing )",
    date: " Feb’ 2025-April’ 2025   ",
    desc: "Developed and optimized mobile UI components using React Native, TypeScript, and Tailwind CSS. Integrated REST APIs and enhanced overall app performance by refactoring and structuring clean, efficient code. Contributed to a faster and more user-friendly experience through close collaboration with cross-functional teams. Gained hands-on experience in a fast-paced startup environment focused on rapid iteration, scalable design, and AI-integrated workflows.",
    skills: [
      "HTML",
      "CSS",
      "TypeScript",
      "Tailwind CSS",
      "React Native",
      "Figma",
      "REST API Integration",
      "postman",
      "Git",
    ],
  },
  {
    id: 1,
    img: cdaclogo,
    role: "Virtual Intern",
    company: "C-DAC, Noida (Cyber Gyan Project) ",
    date: "Jul 2024 – Sep 2024",
    desc: "Completed a practical internship focused on the fundamentals of ethical hacking, network security, and identifying common vulnerabilities in web applications. Gained hands-on knowledge of how various attacks—such as SQL Injection, Cross-Site Scripting (XSS), and insecure authentication—can compromise websites, and learned techniques to prevent these threats when developing secure web systems. Developed a beginner-level understanding of the hacker mindset, enabling a stronger emphasis on writing secure and resilient applications.",
    skills: [
      "Network Security Basics",
      "Web Application Security",
      "Vulnerability Assessment (e.g., SQL Injection, XSS)",
      "Secure Coding Practices",
      "Authentication and Access Control",
      "Threat Modeling and Mitigation Strategies",
    ],
  },
  {
    id: 2,
    img: Aagazlogo,
    role: "Cyber Security Outreach Intern",
    company: " Aagaz Internship (Aawaj Jankalyan Samiti) ",
    date: "September 2021 - August 2022",
    desc: "Conducted 10+ workshops and 10+ awareness campaigns in schools, colleges, and community centers across Vidisha District, reaching over 250 individuals and educating them on digital safety and best practices for secure online behavior. Designed and distributed 500+ educational materials, including pamphlets and digital resources, to raise awareness about child protection laws and effective strategies for safeguarding children online.",
    skills: [
      "Public Speaking",
      "Workshop Facilitation",
      "Digital Safety Awareness",
      "Community Outreach",
      "Educational Content Design",
      "Child Protection Awareness",
      "Communication and Interpersonal Skills",
      "Campaign Planning and Execution",
      "Resource Distribution and Management",
      "Advocacy and Social Impact",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: satilogo,
    school: "Samrat Ashok Technological Institute, Vidisha MP, India",
    date: "2022 - 2026",
    grade: "7.57 CGPA",
    desc: "I have a strong interest in both Web Development and the Internet of Things (IoT), and I actively work on integrating these technologies to build smart, connected solutions. With hands-on experience in HTML, CSS, JavaScript, React, and Node.js, I develop responsive and user-friendly web applications. Alongside this, my background in IoT allows me to work with sensors, microcontrollers, and cloud platforms to create real-time, data-driven systems. I enjoy building end-to-end solutions where IoT devices communicate seamlessly with web interfaces, delivering innovative and impactful user experiences.",
    degree: "B.tech - IOT department of IT",
  },
  {
    id: 1,
    img: mplogo,
    school: "Govt Model Higher Secondary School, Palera ",
    date: "2021",
    grade: "75%",
    desc: " Completed my 12th grade with a focus on Physics, Chemistry, Mathematics, and Biology (PCMB). This diverse curriculum provided me with a strong foundation in both the sciences and mathematics, enhancing my analytical and problem-solving skills. My studies included advanced topics in physics and chemistry, as well as biological sciences, which have been instrumental in shaping my understanding of complex systems and processes.",
    degree: "MP Board 12th PCMB",
  },
];

export const projects = [
  {
    id: 0,
    title: "Planup",
    description:
      " Planup is a comprehensive task management web application designed to help users efficiently organize and prioritize their tasks. It features a user-friendly interface that allows users to create, edit, and delete tasks, set deadlines, and categorize them for better organization. The app also includes a calendar view for visualizing tasks over time, making it easier to manage schedules and deadlines.",
    image: Planup,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js 15",
      "React 19",
      "MongoDB Atlas",
      "JWT",
      "TailwindCSS",
      "Vercel",
    ],
    github: "https://github.com/Yashwant7869/TaskManagementApp",
    webapp: "https://planup-iota.vercel.app/",
  },

  {
    id: 1,
    title: "LocalSetu",
    description:
      "LocalSetu is a comprehensive web application designed to connect users with local services and businesses. It allows users to search for nearby services, view detailed information, and access contact details. The app features a user-friendly interface, making it easy to find and connect with local providers.",
   
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "",
    webapp: "https://localsetu.vercel.app/",
  },
];

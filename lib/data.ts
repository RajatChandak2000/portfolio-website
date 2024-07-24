import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Research Developer",
    location: "North Carolina State University, Raleigh, NC",
    description: [
      "Developed Next.js frontend for an agricultural decision-making platform helping over 1000+ farmers make informed decisions",
      "Architected scalable backend using Nest.js and MongoDB, implementing MVC architecture and JWT auth for 10,000+ users",
      "Deployed on AWS (Amplify, S3, CloudFormation) for scalability and CI/CD, reducing deployment time by 50%",
      "Engineered ETL pipelines with Selenium and GitHub Actions, processing 100K+ data points for real-time agricultural insights",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2024 – Present",
  },
  {
    title: "Software Developer",
    location: "ZS Associates, India",
    description: [
      "Played a key role in the development of 3 machine learning and AWS-based products in ZS's Zaidyn Data & Analytics suite",
      "Developed a Java-based automation framework with Selenium, covering 200+ functionalities and reducing testing time by 25%",
      "Refactored 10,000+ lines of legacy code and integrated SonarQube, reducing critical code issues by 30%",
      "Implemented a dashboard for automation build results using Python, HTML, and JavaScript. Integrated with TeamCity for artifact hosting and Microsoft Teams for automated build notifications, boosting collaboration and transparency by 40%",
      "Created an AWS resource monitoring tool with Python, boto3, and SMTP, deployed on Lambda with API Gateway. Built a Flask API for on-demand queries and used CloudWatch for daily scans, saving around $2,000 per week in AWS resource costs",
      "Conducted code reviews, mentored junior team members, and practiced Agile methodologies, improving team efficiency by 15%",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 – Jul 2023",
  },
  {
    title: "Software Developer Intern",
    location: "Vigilante Cyber Forces, India",
    description: [
      "Developed a C++-driven audit tool utilizing WMI scripts and registry access to analyze OS configurations and network settings",
      "Engineered multithreaded algorithm to scan file directories, detecting unnecessary files and optimizing audit speed by 60%",
      "Developed automated checks for antivirus, firewall, browser history, and password policies, generating extensive audit reports",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2021 – May 2021",
  },
  {
    title: "Master of Computer Science",
    location: "North Carolina State University, Raleigh, NC",
    description: [
      "Expected Graduation: May 2025",
      "GPA: 3.89/4.00",
      "Coursework: Design and Analysis of Algorithms, Linux Networking, Software Engineering, Efficient Deep Learning",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 – May 2025",
  },
  {
    title: "Bachelor of Engineering in Computer Science Engineering",
    location: "Shri Ramdeobaba College of Engineering and Management, Nagpur, India",
    description: [
      "Graduation: Jun 2022",
      "GPA: 8.68/10.00",
      "Coursework: Data Structures and Algorithms, Database Management Systems, Distributed Systems, Object-Oriented Programming",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2018 – Jun 2022",
  },
] as const;


export const projectsData = [
  {
    title: "Scalable CDN as a Service (CDNaaS) and Infrastructure as a Service (IaaS) on Linux Environment",
    Outsidedescription: "Led the creation of a scalable multi-tenant IaaS platform simulating cloud service for 100+ users.",
    description: `
      <ul>
        <li>Led creation of scalable multi-tenant IaaS platform, simulating cloud service for 100+ users with tailored VPCs, subnets, and VMs using Linux virtualization and Docker containers and used Linux routing tables to set up connection between different components.</li>
        <li>Developed a comprehensive CDNaaS solution with Flask-based API endpoints, enabling tenants to deploy and manage edge server VMs that execute custom scripts for advanced content management and delivery.</li>
        <li>Orchestrated Smart DNS server with Google Maps API for edge server routing, implemented round-robin algorithm for load balancing, and simulated CDN functionality and fault tolerance via a smart browser script.</li>
        <li>Devised a high-performance automation framework with Ansible and Python for the South-Bound service, which streamlined the deployment of user-requested infrastructure, ensuring rapid provisioning and reliability.</li>
      </ul>
    `,
    tags: ["Linux", "Docker", "Flask", "Google Maps API", "Ansible", "Python"],
    imageUrl: "/CDNS.jpeg",
    githubLink: "https://github.com/RajatChandak2000/Linux_Networking_Iaas_and_CDN"
  },
  {
    title: "Full-Stack Development: Open-Source AI-based JobTracker Application",
    Outsidedescription: "Developed a job-tracking platform using Flask, MongoDB, React, and OpenAI API.",
    description: `
      <ul>
        <li>Developed a job-tracking platform using Flask, MongoDB, React, and OpenAI API, boosting user job search efficiency by 50%.</li>
        <li>Implemented Selenium web scraping, aggregating 1000+ job postings daily from 5 major job sites based on keywords.</li>
        <li>Achieved 80% code coverage with Pytest unit tests, integrated Codecov and Pylint, and executed GitHub Actions for CI/CD.</li>
      </ul>
    `,
    tags: ["Flask", "MongoDB", "React", "OpenAI API", "Selenium", "Pytest"],
    imageUrl: "/jobtracker.png",
    githubLink: "https://github.com/RajatChandak2000/JTracker"
  },
  {
    title: "Government Fund Tracker using Ethereum Blockchain",
    Outsidedescription: "Led a team of 5 in developing a MERN stack-based blockchain app for tracking fund flow across government tiers.",
    description: `
      <ul>
        <li>Developed a responsive ReactJS interface featuring a dynamic dashboard with graphs, ledgers, secure login, and advanced fund management tools, and integrated Redux for robust state management.</li>
        <li>Optimized MongoDB schema and built RESTful APIs in Node.js for efficient data retrieval and scalability.</li>
      </ul>
    `,
    tags: ["React", "Node.js", "MongoDB", "Redux", "Ethereum Blockchain", "MERN Stack"],
    imageUrl: "/fund.png",
    githubLink: "https://github.com/RajatChandak2000/Goverment-Fund-Tracking-System"
  },
  {
    title: "Interpretable Deep Learning Model for Kidney Disease Detection",
    Outsidedescription: "Developed an interpretable deep learning model using Python and TensorFlow/Keras for kidney disease detection.",
    description: `
      <ul>
        <li>Implemented explainable AI techniques to provide insights into model decisions.</li>
        <li>Evaluated and fine-tuned the model's performance to achieve high accuracy and interpretability.</li>
      </ul>
    `,
    tags: ["Python", "TensorFlow", "Keras", "Deep Learning", "Interpretable AI"],
    imageUrl: "/rmtdev.png",
    githubLink: "https://github.com/RajatChandak2000/DL-Kideny-Disease-prediction"
  },
] as const;


export const skillsData = [
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "React",
  "Flask",
  "Node.js",
  "MongoDB",
  "MySQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "Git",
  "Selenium",
  "TensorFlow/Keras",
  "Machine Learning",
  "Deep Learning",
  "Data Analysis",
  "SQL",
  "HTML",
  "CSS",
  "Linux",
  "Ansible",
] as const;

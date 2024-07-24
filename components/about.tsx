"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      style={{ paddingTop: "4rem" }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi there! I'm Rajat, a Computer Science professional pursuing my Master's at{" "}
        <span className="font-medium">North Carolina State University</span>, with a focus on software development and backend engineering. 
        I'm dedicated to crafting high-quality, scalable solutions that truly make an impact. My core skills include{" "}
        <span className="font-medium">
          C/C++, Python, Java, SQL, JavaScript, React, Flask, Docker, Kubernetes, and AWS
        </span>
        . I'm passionate about writing clean, efficient code and building robust backend systems to tackle complex challenges.
      </p>

      <p className="mb-3">
        <span className="italic">What drives me</span> is the power of code to solve real-world problems and enhance user experiences. 
        I thrive in fast-paced environments where teamwork, creative brainstorming, and problem-solving are key. 
        I'm keen on leveraging data to drive decisions and improve systems, complementing my development skills with data-driven insights.
      </p>

      <p>
        <span className="italic">Beyond coding</span>, I'm fascinated by the rapid advancement of large language models (LLMs) and AI technologies. 
        I'm eager to be part of this technological evolution and explore its potential to drive innovation. 
        I'm currently looking for opportunities in{" "}
        <span className="font-medium">software development and backend roles</span> where I can apply my skills to build impactful solutions.
        If you're interested in connecting or discussing opportunities, feel free to reach out!
      </p>
    </motion.section>
  );
}
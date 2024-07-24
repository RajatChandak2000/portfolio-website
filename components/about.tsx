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
        I am currently pursuing my Master of Computer Science at{" "}
        <span className="font-medium">North Carolina State University</span>,
        with an expected graduation date of May 2025. I hold a Bachelor of Engineering in Computer Science Engineering from{" "}
        <span className="font-medium">Shri Ramdeobaba College of Engineering and Management</span>, Nagpur, India.
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core skills include{" "}
        <span className="font-medium">
          Python, Java, SQL, MongoDB, AWS, and Docker
        </span>
        . I am also familiar with various frameworks and tools such as Selenium, React, and Flask. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">data engineer internship</span> position.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and learning new things. I am currently
        enhancing my knowledge in{" "}
        <span className="font-medium">deep learning and cloud computing</span>. I also like to keep up with the latest advancements in technology.
      </p>
    </motion.section>
  );
}

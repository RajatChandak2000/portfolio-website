import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ModalPortal from "./modalportal";
import { FaGithubSquare } from "react-icons/fa";

// ProjectModalProps type definition
type ProjectModalProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubLink?: string;
  closeModal: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
  closeModal,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <ModalPortal>
      <motion.div
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-md"
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <Image
                src={imageUrl}
                alt="Project I worked on"
                width={600}
                height={400}
                quality={95}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div
                className="leading-relaxed"
                style={{
                  listStyleType: 'disc', // Ensure bullets are displayed
                  paddingLeft: '20px', // Indent list
                }}
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <ul className="flex flex-wrap mt-4 gap-2">
                {tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block"
                >
                  <FaGithubSquare size={30} className="text-black dark:text-white" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </ModalPortal>
  );
};

export default ProjectModal;

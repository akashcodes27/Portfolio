import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "NeuroMatch",
    description:
      "AI-powered personality quiz + career matching system using React, Firebase, and GPT API.",
    tech: ["React", "Firebase", "OpenAI"],
    github: "https://github.com/akashcodes27/Neuromatch",
    live: "https://neuromatch.vercel.app",
  },
  {
    title: "CloudDrive",
    description:
      "CloudDrive – A full-stack cloud storage platform built with React, Django, AWS S3, and CloudFront, featuring CI/CD automation with GitHub Actions.",
    tech: ["React", "Django", "GPT"],
    github: "https://github.com/akashcodes27/CloudDrive",
    live: "http://clouddrive-owner-bucket.s3-website.ca-central-1.amazonaws.com/",
  },
  {
    title: "TranquilMind",
    description:
      "Mental health chatbot built with React and Django backend, providing motivational therapy conversations.",
    tech: ["React", "Django", "GPT"],
    github: "https://github.com/yourusername/mindease",
    live: "https://mindease.vercel.app",
  },
  {
    title: "LitterLens",
    description:
      "Mental health chatbot built with React and Django backend, providing motivational therapy conversations.",
    tech: ["React", "Django", "GPT"],
    github: "https://github.com/yourusername/mindease",
    live: "https://mindease.vercel.app",
  },

  {
    title: "Intern Management System",
    description:
      "Mental health chatbot built with React and Django backend, providing motivational therapy conversations.",
    tech: ["React", "Django", "GPT"],
    github: "https://github.com/yourusername/mindease",
    live: "https://mindease.vercel.app",
  },

  {
    title: "TranquilMind",
    description:
      "Mental health chatbot built with React and Django backend, providing motivational therapy conversations.",
    tech: ["React", "Django", "GPT"],
    github: "https://github.com/yourusername/mindease",
    live: "https://mindease.vercel.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen mt-[-3rem] pt-32 pb-20 px-8 bg-apricot text-cosmos rounded-t-[3rem] shadow-[0_-8px_20px_rgba(0,0,0,0.05)]"
    >
      <h2 className="text-4xl font-extrabold text-center text-redwood mb-12 relative inline-block">
        Projects
        <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-redwood rounded-full"></span>
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white text-mapleGray p-6 rounded-2xl shadow-xl hover:shadow-[0_10px_40px_rgba(70,18,32,0.2)] transition duration-300 border border-softSilver"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-cosmos mb-2">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-justify">{project.description}</p>

            {/* Tech Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-redwood text-white text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Icons */}
            <div className="mt-5 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cosmos hover:text-redwood text-xl"
                >
                  <FaGithub />
                </a>
              )}
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cosmos hover:text-redwood text-xl"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

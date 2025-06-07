import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "May 2025",
    image: "/certificates/AZ-900.jpg",  // Add this
    link: "/certificates/AZ-900.jpg",   // Optional: same as image
  },
  {
    title: "Agile Software Development",
    issuer: "Linkedin Learning",
    date: "Oct 2024",
    image: "/certificates/agile.png",  // Add this
    link: "/certificates/agile.png",   // Optional: same as image
  },
  {
    title: "Software Design and Development: Design Patterns & SOLID Principles",
    issuer: "Infosys",
    date: "Oct 2024",
    image: "/certificates/agile.png",  // Add this
    link: "/certificates/agile.png",   // Optional: same as image
  },
  {
    title: "Software Design: Developing Effective Requirements",
    issuer: "Linkedin Learning",
    date: "Nov 2024",
    image: "/certificates/Software_Design.png",  // Add this
    link: "/certificates/Software_Design.png",   // Optional: same as image
  },
  {
    title: "Software Development Life Cycle (SDLC)",
    issuer: "Linkedin Learning",
    date: "Oct 2024",
    image: "/certificates/SDLC.png",  // Add this
    link: "/certificates/SDLC.png",   // Optional: same as image
  },
  {
    title: "Software Project Management Foundations",
    issuer: "Linkedin Learning",
    date: "Oct 2024",
    image: "/certificates/SPM.png",  // Add this
    link: "/certificates/SPM.png",   // Optional: same as image
  },
  {
    title: "Selenium Essential Training",
    issuer: "Linkedin Learning",
    date: "Oct 2024",
    image: "/certificates/selenium.png",  // Add this
    link: "/certificates/selenium.png",   // Optional: same as image
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen mt-[-3rem] pt-24 pb-20 px-8 bg-apricot text-cosmos rounded-t-[3rem] shadow-[0_-8px_20px_rgba(0,0,0,0.05)]"
    >
      <h2 className="text-4xl font-extrabold text-redwood text-center mb-12 relative inline-block">
        Certifications
        <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-redwood rounded-full"></span>
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl border border-softSilver transition hover:shadow-[0_10px_30px_rgba(70,18,32,0.2)]"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-cosmos">{cert.title}</h3>
            <p className="text-sm text-mapleGray mt-1">{cert.issuer}</p>
            <p className="text-sm text-mapleGray mb-4">{cert.date}</p>

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-redwood font-medium hover:underline"
              >
                View Credential <FaExternalLinkAlt className="ml-2" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

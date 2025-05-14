import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Apr 2024",
    link: "https://aws.amazon.com/verification-link",
  },
  {
    title: "IBM DevOps and Software Engineering",
    issuer: "IBM Skills Network",
    date: "Feb 2024",
    link: "https://coursera.org/verify/ibm-cert-link",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta via Coursera",
    date: "Jan 2024",
    link: "https://coursera.org/verify/meta-cert-link",
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
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

import { motion } from "framer-motion";

const skills = [
    { label: "Python", level: 75 },
    { label: "Java", level: 85 },
    { label: "JavaScript", level: 85 },
    { label: "React", level: 90 },
    { label: "Django", level: 85 },
    { label: "NodeJs", level: 80 },
    { label: "RESTful API", level: 90 },
    { label: "Firebase", level: 85 },
    { label: "Postman", level: 90 },
    { label: "HTML-CSS", level: 95 },
    { label: "Git & GitHub", level: 70 },
    { label: "AWS S3 | EC2 | IAM", level: 65 },
    { label: "DevOps (CI/CD)", level: 45 },
    { label: "MS Office Tools", level: 85 },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen mt-[-2rem] pt-24 pb-20 px-8 bg-cosmos text-apricot rounded-t-[3rem] shadow-[0_-8px_20px_rgba(0,0,0,0.1)]"
        >
            <h2 className="text-4xl font-extrabold text-redwood text-center mb-12 relative inline-block">
                Skills
                <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-redwood rounded-full"></span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="flex justify-between text-sm font-medium">
                            <span>{skill.label}</span>
                            <span>{skill.level}%</span>
                        </div>
                        <div className="w-full rounded-full h-5 relative overflow-hidden shadow-[0_0_20px_rgba(178,58,72,0.3)] bg-softSilver">
                            <div
                                className="h-full rounded-full bg-redwood transition-all duration-700"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;




// import { motion } from "framer-motion";

// const About = () => {
//     return (
//         <section
//             id="about"
//             className="min-h-screen mt-[-1rem] pt-24 px-8 pb-4 bg-cosmos text-apricot flex flex-col md:flex-row items-center gap-10 rounded-t-[3rem] shadow-[0_-8px_20px_rgba(0,0,0,0.1)]"
//         >
//             {/* Avatar / Image */}
//             {/* Avatar with gradient border */}
//             <motion.div
//                 className="relative w-64 h-64 rounded-2xl p-[4px] bg-gradient-to-br from-redwood to-melon shadow-[0_12px_48px_rgba(178,58,72,0.55)]"
//                 initial={{ opacity: 0, x: -60 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.7 }}
//             >
//                 <img
//                     src="/profile.jpeg"
//                     alt="Akash Patil"
//                     className="rounded-2xl w-full h-full object-cover"
//                 />
//             </motion.div>


//             {/* Text Section */}
//             <motion.div
//                 className="max-w-2xl space-y-6"
//                 initial={{ opacity: 0, x: 60 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.7 }}
//             >
//                 {/* Fancy Section Title with underline */}
//                 <h2 className="text-4xl font-extrabold text-redwood mb-2 relative inline-block">
//                     About Me
//                     <span className="absolute left-0 -bottom-2 w-16 h-1 bg-redwood rounded-full"></span>
//                 </h2>

//                 {/* Quote-style intro */}
//                 <p className="text-lg leading-relaxed border-l-4 border-redwood pl-4 italic">
//                     I’m Akash Patil — a full-stack developer currently based in Canada 🇨🇦. I love crafting clean, intuitive digital experiences that feel as smooth as they look. My work blends aesthetic clarity with technical precision.
//                 </p>

//                 {/* Main Description */}
//                 <p className="text-lg leading-relaxed text-justify">
//                     I’m pursuing my Master’s in Computer Science while building real-world applications across multiple different technologies. I believe in writing expressive code and delivering scalable solutions that improve people's lives. I have project-based experience in full-stack web development and cloud applications. Currently exploring DevOps practices and passionatly building reliable, user-focused software with secure and
//                     scalable architecture.
//                 </p>

//                 {/* Personal Touch */}
//                 <p className="text-lg leading-relaxed">
//                     Outside the code editor, you’ll find me exploring new fitness routines 💪, tech trends 📱, or catching sunsets across Ontario 🍁.
//                 </p>
//             </motion.div>
//         </section>
//     );
// };

// export default About;



import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen mt-[-1rem] pt-24 px-8 pb-20 bg-cosmos text-apricot flex flex-col md:flex-row items-center gap-12 rounded-t-[3rem] shadow-[0_-8px_20px_rgba(0,0,0,0.1)]"
        >
            {/* Profile Image with Gradient Border */}
            <motion.div
                className="relative w-80 h-80 rounded-2xl p-[5px] bg-gradient-to-br from-redwood to-melon shadow-[0_16px_60px_rgba(178,58,72,0.55)]"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
            >
                <img
                    src="/profile.jpeg"
                    alt="Akash Patil"
                    className="rounded-2xl w-full h-full object-cover"
                />
            </motion.div>


            {/* Text Content */}
            <motion.div
                className="max-w-2xl space-y-6"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
            >
                {/* Header */}
                <h2 className="text-4xl font-extrabold text-redwood mb-2 relative inline-block">
                    Full-Stack Developer | Microsoft Certified: AZ-900
                    <span className="absolute left-0 -bottom-2 w-16 h-1 bg-redwood rounded-full"></span>
                </h2>

                {/* Intro Paragraph */}
                <p className="text-lg leading-relaxed text-justify">
                    Hi there! 👋 I’m Akash, a solution-driven full-stack developer based in Canada 🇨🇦. I enjoy building responsive, elegant, and functional web applications that combine design and engineering to solve real problems.
                </p>

                {/* Academic Highlights */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-base font-medium">
                    <div>
                        <span className="text-redwood">🎓 Major:</span>{" "}
                        <span className="text-apricot">Applied Computer Science</span>
                    </div>
                     <div>
                        <span className="text-redwood">🎯 Level of Education:</span>{" "}
                        <span className="text-apricot">Masters</span>
                    </div>
                    <div>
                        <span className="text-redwood">📌 Area of Interest:</span>{" "}
                        <span className="text-apricot">Full-Stack | Cloud | ML</span>
                    </div>
                   
                    <div>
                        <span className="text-redwood">⭐ CGPA:</span>{" "}
                        <span className="text-apricot">3.7 / 4</span>
                    </div>
                </div>

                {/* Vision Paragraph */}
                <p className="text-lg leading-relaxed text-justify">
                    I build meaningful software that’s scalable, accessible, and fun to use. Whether it's automating pipelines, crafting front-end experiences, or architecting APIs, I enjoy every layer of the stack. My goal is to blend creativity with engineering to make a positive impact in the world of tech.
                </p>
            </motion.div>
        </section>
    );
};

export default About;

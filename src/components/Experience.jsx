import React, { Children } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, MapPinIcon } from "lucide-react";
export function Experience() {
  const experiences = [
    {
      role: "Director of Electronics",
      company:
        "Biomedical Carleton Applied Research and Engineering Team (BioCARE)",
      location: "Ottawa, ON",
      period: "April 2025 - Present",
      description:
        "Led the design, development, and integration of electronic systems, ensuring reliability and performance in innovative projects. Oversaw circuit design, testing, and hardware implementation while mentoring team members and coordinating with other departments to deliver effective solutions.",
    },
    {
      role: "Computer Lab Support",
      company: "Faculty of Engineering and Design",
      location: "Carleton University",
      period: "May 2025 - August 2025",
      description:
        "Provided technical assistance and troubleshooting for hardware, software, and networking issues in the computer lab. Supported students and faculty with system setup, maintenance, and smooth operation of lab resources to ensure an efficient learning environment.",
    },
    {
      role: "Graphic Designer",
      company:
        "Humanitarian Organization of Latin American Students (H.O.L.A.S.)",
      location: "Carleton University",
      period: "August 2025 - Present",
      description:
        "Designed engaging visuals, promotional materials, and digital content to support events and initiatives. Focused on creating student-friendly, vibrant designs that strengthened community outreach and engagement.",
    },
  ];
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-neutral-dark"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="relative max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neutral-gray/30 transform md:translate-x-[-0.5px]"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right md:ml-0 md:mr-auto"
                  : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2 pl-12 md:pl-0`}
              variants={itemVariants}
            >
              <div
                className={`absolute  w-4 h-4 rounded-full bg-primary-teal border-4 border-white transform ${
                  index % 2 === 0
                    ? "md:translate-x-[50%] md:translate-y-[700%] md:right-0"
                    : "md:translate-x-[-50%] md:translate-y-[700%] md:left-0"
                }`}
              ></div>
              <div className="bg-neutral-light p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-bold text-primary-blue">
                  {exp.role}
                </h3>
                <h4 className="font-medium text-neutral-dark">{exp.company}</h4>
                <div
                  className={`flex items-center gap-4 text-neutral-gray text-sm mt-3 ${
                    index % 2 == 0
                      ? "justify-content-end"
                      : "justify-content-start"
                  } `}
                >
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <p className="mt-3 text-neutral-dark">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;

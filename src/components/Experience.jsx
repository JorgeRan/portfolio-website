import React, { Children } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, MapPinIcon } from "lucide-react";
export function Experience() {
  const experiences = [
    {
      role: "Research Assistant",
      company: "Medical Devices Innovation Lab",
      location: "University of Technology",
      period: "Jan 2023 - Present",
      description:
        "Leading a team developing a novel biosensor for continuous glucose monitoring. Responsible for circuit design, signal processing algorithms, and prototype testing.",
    },
    {
      role: "Engineering Intern",
      company: "BioTech Solutions",
      location: "Boston, MA",
      period: "May 2022 - Aug 2022",
      description:
        "Assisted in the development of a portable ECG device. Implemented signal filtering algorithms and contributed to the PCB design process.",
    },
    {
      role: "Undergraduate Researcher",
      company: "Neural Engineering Lab",
      location: "University of Technology",
      period: "Sep 2021 - Dec 2022",
      description:
        "Conducted research on brain-computer interfaces. Processed EEG signals and developed machine learning models for pattern recognition.",
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
                <div className={`flex items-center gap-4 text-neutral-gray text-sm mt-3 ${index % 2 == 0 ? "justify-content-end" : "justify-content-start"} `}>
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

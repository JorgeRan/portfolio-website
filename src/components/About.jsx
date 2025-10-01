import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCapIcon,
  PencilRulerIcon,
  BriefcaseIcon,
  CodeIcon,
  BrainIcon,
  MicroscopeIcon,
  CpuIcon,
} from "lucide-react";
export function About() {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-neutral-dark"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeInUp}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="bg-neutral-light rounded-xl p-8 shadow-soft"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                },
              },
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-blue">Bio</h3>
            <p className="text-neutral-dark mb-6 leading-relaxed">
              I’m a Biomedical and Electrical Engineering student and Full Stack
              Developer passionate about creating innovative solutions at the
              intersection of healthcare and technology. My work spans from
              circuit design and embedded systems to building responsive,
              data-driven web applications with modern frameworks. I thrive in
              collaborative environments and enjoy integrating engineering and
              software to tackle complex challenges, turning them into practical
              tools that improve accessibility and outcomes.
            </p>
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <div className="p-3 bg-primary-teal/10 rounded-full">
                  <GraduationCapIcon className="w-6 h-6 text-primary-teal" />
                </div>
              </div>
              <div>
                <h4 className="font-bold">Education</h4>
                <p className="text-neutral-dark my-1">
                  B.S. Biomedical & Electrical Engineering
                </p>
                <p className="text-neutral-gray">
                  Carleton University, 2023-2028
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="p-3 bg-primary-blue/10 rounded-full">
                  <BriefcaseIcon className="w-6 h-6 text-primary-blue" />
                </div>
              </div>
              <div>
                <h4 className="font-bold">Current Role</h4>
                <p className="text-neutral-dark my-1">
                  Director Of Electronics
                </p>
                <p className="text-neutral-gray">
                  Biomedical Carleton Applied Research and Engineering Team{" "}
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-neutral-light rounded-xl p-8 shadow-soft"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                },
              },
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-blue">
              Key Skills
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <CodeIcon className="w-5 h-5 text-primary-teal mr-2" />
                  <h4 className="font-bold my-0">Software Development</h4>
                </div>
                <div className="w-full bg-neutral-gray/20 rounded-full h-3">
                  <motion.div
                    className="bg-primary-teal h-3 rounded-full"
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "85%",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.6,
                    }}
                  ></motion.div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>
                    Python, C/C++, MATLAB, JavaScript/TypeScript, React, Node.js
                  </span>
                  <span>85%</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <CpuIcon className="w-5 h-5 text-primary-blue mr-2" />

                  <h4 className="font-bold my-0">
                    Electronics & Embedded Systems
                  </h4>
                </div>
                <div className="w-full bg-neutral-gray/20 rounded-full h-3">
                  <motion.div
                    className="bg-primary-blue h-3 rounded-full"
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "90%",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay: 1,
                    }}
                  ></motion.div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>Circuit Design, PCB, VHDL/Verilog, Arduino/STM32</span>
                  <span>90%</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <BrainIcon className="w-5 h-5 text-accent mr-2" />
                  <h4 className="font-bold my-0">Data Science & Engineering</h4>
                </div>
                <div className="w-full bg-neutral-gray/20 rounded-full h-3">
                  <motion.div
                    className="bg-accent h-3 rounded-full"
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "85%",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.6,
                    }}
                  ></motion.div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>
                    SQL, ETL, Azure, Databricks, Machine Learning basics
                  </span>
                  <span>85%</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <MicroscopeIcon className="w-5 h-5 text-magenta mr-2" />
                  <h4 className="font-bold my-0">Biomedical & Lab Skills</h4>
                </div>
                <div className="w-full bg-neutral-gray/20 rounded-full h-3">
                  <motion.div
                    className="bg-magenta h-3 rounded-full"
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "75%",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.8,
                    }}
                  ></motion.div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>
                    Medical Imaging, ECG/EMG/EEG analysis, Signal Processing
                  </span>
                  <span>75%</span>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <PencilRulerIcon className="w-5 h-5 text-red mr-2" />
                  <h4 className="font-bold my-0">Collaboration & Tools</h4>
                </div>
                <div className="w-full bg-neutral-gray/20 rounded-full h-3">
                  <motion.div
                    className="bg-red h-3 rounded-full"
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "80%",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay: 1,
                    }}
                  ></motion.div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>Git, Jira, Agile, CI/CD, cloud platforms</span>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

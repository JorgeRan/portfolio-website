import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCapIcon,
  BriefcaseIcon,
  CodeIcon,
  MicroscopeIcon,
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
              Developer passionate about creating innovative technologies at the
              intersection of healthcare and software. My work focuses on
              integrating AI with medical devices to improve patient outcomes
              and accessibility. I thrive in collaborative environments and
              enjoy turning complex challenges into practical, user-friendly
              solutions.
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
                <p className="text-neutral-dark my-1">Director Of Electronics</p>
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
                  <h4 className="font-bold my-0">Programming</h4>
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
                  <span>Python, MATLAB, C++</span>
                  <span>85%</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <MicroscopeIcon className="w-5 h-5 text-primary-blue mr-2" />
                  <h4 className="font-bold my-0">Medical Imaging</h4>
                </div>
                <div className="w-full bg-neutral-gray/20 rounded-full h-3">
                  <motion.div
                    className="bg-primary-blue h-3 rounded-full"
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
                  <span>MRI, CT, Signal Processing</span>
                  <span>75%</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 flex items-center justify-center text-accent mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v8"></path>
                      <path d="m4.93 10.93 1.41 1.41"></path>
                      <path d="M2 18h2"></path>
                      <path d="M20 18h2"></path>
                      <path d="m19.07 10.93-1.41 1.41"></path>
                      <path d="M22 22H2"></path>
                      <path d="m8 22 4-10 4 10"></path>
                    </svg>
                  </div>
                  <h4 className="font-bold my-0">Circuit Design</h4>
                </div>
                <div className="w-full bg-neutral-gray/20 rounded-full h-3">
                  <motion.div
                    className="bg-accent h-3 rounded-full"
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
                  <span>PCB, Analog, Digital</span>
                  <span>90%</span>
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

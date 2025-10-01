import React, { useState, cloneElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CodeIcon,
  BrainIcon,
  PencilRulerIcon,
  DatabaseIcon,
  MicroscopeIcon,
  UsersIcon,
  LayoutGrid,
  BarChart3,
  CpuIcon,
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export function Skills() {
  const [activeTab, setActiveTab] = useState("cards");
  const [activeCategory, setActiveCategory] = useState(0);
  const [flippedCard, setFlippedCard] = useState(null);

  const skillCategories = [
    {
      name: "Software Development",
      icon: <CodeIcon className="w-6 h-6" />,
      color: "primary-teal",
      skills: [
        {
          name: "Python",
          level: 90,
          description:
            "Data analysis, ML/AI, automation scripts, visualization",
        },
        {
          name: "MATLAB",
          level: 85,
          description: "Signal processing, simulations, control systems",
        },
        {
          name: "C/C++",
          level: 80,
          description: "Embedded programming, device drivers, optimization",
        },
        {
          name: "JavaScript/TypeScript",
          level: 80,
          description: "Full-stack development with React, Next.js, Node.js",
        },
        {
          name: "Java",
          level: 70,
          description: "Object-oriented programming, backend systems",
        },
      ],
    },
    {
      name: "Electronics & Embedded Systems",
      icon: <CpuIcon className="w-6 h-6" />,
      color: "primary-blue",
      skills: [
        {
          name: "Circuit Design",
          level: 90,
          description:
            "Analog/digital circuits, PCB design, soldering, testing",
        },
        {
          name: "Embedded Systems",
          level: 85,
          description: "Arduino, STM32, PLCs, sensors, real-time control",
        },
        {
          name: "FPGA (VHDL/Verilog)",
          level: 70,
          description: "Digital logic design, simulation, hardware prototyping",
        },
        {
          name: "Simulation Tools",
          level: 80,
          description:
            "SPICE, Multisim, ADS, Cadence for RF/mixed-signal design",
        },
      ],
    },
    {
      name: "Data Science & Engineering",
      icon: <BrainIcon className="w-6 h-6" />,
      color: "accent",
      skills: [
        {
          name: "Data Analysis",
          level: 85,
          description: "Pandas, NumPy, SciPy, exploratory data analysis",
        },
        {
          name: "Machine Learning",
          level: 75,
          description:
            "Scikit-learn, TensorFlow basics, classification/regression",
        },
        {
          name: "Databases",
          level: 70,
          description: "SQL, PostgreSQL, MongoDB, schema design",
        },
        {
          name: "Cloud Platforms",
          level: 65,
          description: "AWS, Azure (data lakes, ETL pipelines, deployment)",
        },
      ],
    },
    {
      name: "Biomedical & Lab Skills",
      icon: <MicroscopeIcon className="w-6 h-6" />,
      color: "magenta",
      skills: [
        {
          name: "Medical Imaging",
          level: 75,
          description: "MRI, CT, ultrasound signal processing and analysis",
        },
        {
          name: "Biomedical Devices",
          level: 80,
          description:
            "Electronics for medical applications, real-time monitoring",
        },
        {
          name: "Wet Lab Techniques",
          level: 70,
          description: "Sample prep, assays, flow cytometry (familiarity)",
        },
        {
          name: "Technical Documentation",
          level: 85,
          description: "Reports, research papers, regulatory compliance notes",
        },
      ],
    },
    {
      name: "Collaboration & Tools",
      icon: <PencilRulerIcon className="w-6 h-6" />,
      color: "red",
      skills: [
        {
          name: "Version Control",
          level: 90,
          description: "Git, GitHub, GitLab, CI/CD pipelines",
        },
        {
          name: "Agile & Project Management",
          level: 85,
          description: "Scrum, Jira, Kanban, sprint planning",
        },
        {
          name: "Lab & Test Equipment",
          level: 75,
          description: "Oscilloscopes, multimeters, power supplies, analyzers",
        },
        {
          name: "Communication",
          level: 90,
          description:
            "Cross-disciplinary teamwork, presentations, stakeholder reports",
        },
      ],
    },
  ];

  // Format data for radar chart
  const radarData = skillCategories.map((category) => {
    const avgSkill =
      category.skills.reduce((sum, skill) => sum + skill.level, 0) /
      category.skills.length;
    return { subject: category.name, A: avgSkill, fullMark: 100 };
  });

  // Detailed radar data (all skills)
  const detailedRadarData = [];
  skillCategories.forEach((category) => {
    category.skills.forEach((skill) => {
      detailedRadarData.push({
        subject: skill.name,
        A: skill.level,
        fullMark: 100,
        category: category.name,
      });
    });
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const tabVariants = {
    inactive: { opacity: 0.7, scale: 0.95, y: 0 },
    active: { opacity: 1, scale: 1, y: -5 },
  };

  const handleFlip = (index) => {
    if (flippedCard === index) setFlippedCard(null);
    else setFlippedCard(index);
  };

  return (
    <section id="skills" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-neutral-dark"
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
          Skills & Tools
        </motion.h2>
        <motion.p
          className="text-center text-neutral-gray mb-16 max-w-2xl mx-auto"
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
            delay: 0.1,
          }}
        >
          I bring together biomedical knowledge and software development
          expertise to create solutions that merge health and technology. My
          skills span from building web and mobile applications to working with
          hardware systems, giving me the flexibility to develop innovative
          projects across multiple domains.
        </motion.p>
        {/* Visualization Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full shadow p-1 inline-flex">
            <motion.button
              className={`flex items-center px-5 py-2 rounded-full ${
                activeTab === "cards"
                  ? "bg-teal-500 text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setActiveTab("cards")}
            >
              <LayoutGrid className="w-4 h-4 mr-2" />
              Skill Cards
            </motion.button>
            <motion.button
              className={`flex items-center px-5 py-2 rounded-full ${
                activeTab === "radar"
                  ? "bg-primary-blue text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setActiveTab("radar")}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Skill Map
            </motion.button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "cards" && (
            <motion.div
              key="cards"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {skillCategories.map((category, idx) => (
                  <motion.button
                    key={idx}
                    className={`px-5 py-3 rounded-xl flex items-center gap-2 transition-all
                      ${
                        activeCategory === idx
                          ? `bg-${category.color} text-white shadow-md`
                          : "bg-white text-neutral-dark shadow-soft hover:bg-neutral-light"
                      }`}
                    onClick={() => setActiveCategory(idx)}
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    <span
                      className={
                        activeCategory !== idx ? `text-${category.color}` : ""
                      }
                    >
                      {cloneElement(category.icon, {
                        className: `w-5 h-5 ${
                          activeCategory !== idx ? `text-${category.color}` : ""
                        }`,
                      })}
                    </span>
                    {category.name}
                  </motion.button>
                ))}
              </div>
              {/* Skill Cards */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
              >
                {skillCategories[activeCategory].skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="relative h-64 perspective-1000 cursor-pointer"
                    variants={itemVariants}
                    onClick={() => handleFlip(idx)}
                  >
                    <motion.div
                      className={`absolute w-full h-full rounded-xl shadow-soft transition-all duration-500 backface-hidden
                        ${
                          flippedCard === idx
                            ? "rotate-y-180 opacity-0"
                            : "rotate-y-0 opacity-100"
                        }`}
                      style={{
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div
                        className={`bg-white h-full w-full rounded-xl p-6 flex flex-col justify-between border-t-4 border-${skillCategories[activeCategory].color}`}
                      >
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-neutral-dark">
                            {skill.name}
                          </h3>
                          <div className="mt-4 mb-2 flex justify-between items-center">
                            <span className="text-sm text-neutral-gray">
                              Proficiency
                            </span>
                            <span
                              className={`text-sm font-medium text-${skillCategories[activeCategory].color}`}
                            >
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-neutral-gray/20 rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full bg-${skillCategories[activeCategory].color}`}
                              initial={{
                                width: 0,
                              }}
                              whileInView={{
                                width: `${skill.level}%`,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                duration: 1,
                                delay: 0.2,
                              }}
                            />
                          </div>
                        </div>
                        <div className="text-sm text-neutral-gray mt-4">
                          Click for details
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className={`absolute w-full h-full rounded-xl shadow-soft transition-all duration-500 backface-hidden
                        ${
                          flippedCard === idx
                            ? "rotate-y-0 opacity-100"
                            : "rotate-y-180 opacity-0"
                        }`}
                      style={{
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div
                        className={`bg-${skillCategories[activeCategory].color} h-full w-full rounded-xl p-6 flex flex-col justify-between text-white`}
                      >
                        <div>
                          <h3 className="text-xl font-bold mb-4">
                            {skill.name}
                          </h3>
                          <p className="text-white/90">{skill.description}</p>
                        </div>
                        <div className="text-sm text-white/80 mt-4">
                          Click to flip back
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
          {activeTab === "radar" && (
            <motion.div
              key="radar"
              className="bg-white rounded-xl p-6 shadow-soft"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-center text-primary-blue">
                  Skill Proficiency Map
                </h3>
                <p className="text-neutral-gray text-center max-w-2xl mx-auto">
                  This visualization shows my proficiency across different
                  technical domains, highlighting my balanced expertise in both
                  hardware and software skills.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Category Radar Chart */}
                <div className="bg-neutral-light rounded-xl p-4 shadow-inner">
                  <h4 className="text-lg font-medium mb-4 text-center">
                    Expertise by Category
                  </h4>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        data={radarData}
                      >
                        <PolarGrid stroke="#B0B0B0" strokeOpacity={0.3} />
                        <PolarAngleAxis
                          dataKey="subject"
                          tick={{
                            fill: "#333333",
                            fontSize: 12,
                          }}
                        />
                        <PolarRadiusAxis
                          angle={30}
                          domain={[0, 100]}
                          tick={{
                            fill: "#B0B0B0",
                          }}
                        />
                        <Radar
                          name="Skills"
                          dataKey="A"
                          stroke="#00BFA6"
                          fill="#00BFA6"
                          fillOpacity={0.6}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                {/* Detailed Skills Radar */}
                <div className="bg-neutral-light rounded-xl p-4 shadow-inner">
                  <h4 className="text-lg font-medium mb-4 text-center">
                    Top Skills Across Domains
                  </h4>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        data={detailedRadarData.filter((item) => item.A >= 85)}
                      >
                        <PolarGrid stroke="#B0B0B0" strokeOpacity={0.3} />
                        <PolarAngleAxis
                          dataKey="subject"
                          tick={{
                            fill: "#333333",
                            fontSize: 12,
                          }}
                        />
                        <PolarRadiusAxis
                          angle={30}
                          domain={[0, 100]}
                          tick={{
                            fill: "#B0B0B0",
                          }}
                        />
                        <Radar
                          name="Skills"
                          dataKey="A"
                          stroke="#004E89"
                          fill="#004E89"
                          fillOpacity={0.6}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              {/* Skills Legend */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {skillCategories.map((category, idx) => (
                  <div key={idx} className="bg-neutral-light rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-${category.color}`}>
                        {cloneElement(category.icon, {
                          className: `w-5 h-5 text-${category.color}`,
                        })}
                      </span>
                      <h5 className="font-medium mb-0">{category.name}</h5>
                    </div>
                    <ul className="text-sm text-neutral-dark">
                      {category.skills
                        .filter((skill) => skill.level >= 85)
                        .map((skill, i) => (
                          <li key={i} className="flex justify-between">
                            <span>{skill.name}</span>
                            <span className={`text-${category.color}`}>
                              {skill.level}%
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Skills;

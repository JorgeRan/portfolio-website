import React, { Children } from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, ExternalLinkIcon } from 'lucide-react'
export function Portfolio() {
  const projects = [
    {
      title: 'AI-Powered ECG Analysis',
      description:
        'Developed a machine learning algorithm to detect cardiac abnormalities from ECG signals with 94% accuracy.',
      image:
        '/images/NeuroFit.svg',
      technologies: ['Python', 'TensorFlow', 'Signal Processing'],
      github: 'https://github.com/JorgeRan/NeuroFit',
      demo: '#',
    },
    {
      title: 'Pump Up!',
      description:
        'Designed and prototyped a low-power wearable device that tracks vital signs and transmits data wirelessly.',
      image: '/images/PumpUp.svg',

      technologies: ['Flutter, Firebase, Resful API'],
      github: 'https://github.com/JorgeRan/fitness_app',
      demo: '#',
    },
    {
      title: 'Medical Imaging Enhancement',
      description:
        'Created an algorithm to enhance low-quality medical images using advanced filtering techniques.',
      image:
        'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['MATLAB', 'Image Processing', 'Deep Learning'],
      github: '#',
    },
    {
      title: 'Prosthetic Hand Control System',
      description:
        'Developed an EMG-based control system for a 3D-printed prosthetic hand with individual finger movement.',
      image:
        'https://images.unsplash.com/photo-1562752281-974f49e8d366?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['C++', 'Signal Processing', '3D Printing'],
      github: '#',
      demo: '#',
    },
  ]
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }
  return (
    <section id="portfolio" className="py-20 bg-neutral-light">
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
          Portfolio
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-soft group"
              variants={itemVariants}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary-teal/80 text-white px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-dark mb-4">{project.description}</p>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-primary-blue hover:text-primary-teal transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-primary-blue hover:text-primary-teal transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLinkIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


export default Portfolio;

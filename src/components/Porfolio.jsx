import React, { Children } from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, ExternalLinkIcon } from 'lucide-react'
export function Portfolio() {
  const projects = [
    
    {
      title: 'BioCARE: Biomedical Carleton Applied Research & Engineering Team',
      description:
        'Led electronics design and prototyping at BioCARE, developing biomedical devices that integrate hardware, microcontrollers, and real-time data systems.',
      image:
        '/images/BioCARE.png',
      technologies: ['C++', 'Signal Processing', '3D Printing'],
      github: 'https://github.com/BioCARE-Software',
      demo: 'https://carleton-biocare.ca/',
    },
    {
      title: 'NeuroFit',
      description:
        'NeuroFit makes fitness personal with muscle-based exercise selection and AI-ready features.',
      image:
        '/images/NeuroFit.svg',
      technologies: ['Python', 'TensorFlow', 'Signal Processing'],
      github: 'https://github.com/JorgeRan/NeuroFit',
      demo: '',
    },
    {
      title: 'Pump Up!',
      description:
        'A fitness app that lets users build personalized workout routines, explore exercise guides, and track progress, all powered by Flutter and Firebase.',
      image: '/images/PumpUp.svg',

      technologies: ['Flutter, Firebase, Resful API'],
      github: 'https://github.com/JorgeRan/fitness_app',
      demo: '',
    },
    {
      title: 'Visited Contries Website',
      description:
        'A web app that lets users track and share the countries they’ve visited through a personalized interactive map.',
      image:
        '/images/visited_contries.png',
      technologies: ['MATLAB', 'Image Processing', 'Deep Learning'],
      github: 'https://github.com/JorgeRan/Visited-Countries',
    },
    {
      title: 'Blog API Project',
      description:
        'A blogging platform powered by a custom-built API, enabling seamless content creation, management, and display with a modern interface.',
      image:
        '/images/blog_api.png',
      technologies: ['C++', 'Signal Processing', '3D Printing'],
      github: 'https://github.com/JorgeRan/Blog-API-Project',
      demo: '',
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
              className="bg-white rounded-xl shadow-soft group"
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

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Button } from "./common/Button";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-teal to-primary-blue z-0"></div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 text-white"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            >
              Jorge Rangel
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl font-medium mb-8"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
            >
              Biomedical Engineer & Full Stack Developer
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
            >
              <Button primary href="#portfolio">
                View Portfolio
              </Button>
              <Button secondary href="#contact">
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center mt-10 md:mt-0"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/20 p-2">
              <div className="w-full h-full rounded-full overflow-hidden">
                { <img
                  src="images/avatar.svg"
                  alt="Professional portrait"
                  className="w-full h-full object-cover"
                /> }
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

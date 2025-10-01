import React from 'react'
import { motion } from 'framer-motion'
import { HeartIcon } from 'lucide-react'
export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-primary-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <p className="text-lg font-bold mb-2 mt-3">Jorge Rangel</p>
            <p className="text-sm text-white/70">
              Biomedical Engineer & Full Stack Developer
            </p>
          </motion.div>
          <motion.div
            className="flex items-center"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <p className="text-sm flex items-center">
              <span>Made with</span>
              <HeartIcon className="w-4 h-4 mx-1 text-primary-teal" />
              <span>© {currentYear}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

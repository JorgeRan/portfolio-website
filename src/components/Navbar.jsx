import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-soft py-2" : "bg-transparent py-4"
      }`}
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          className="text-xl font-bold"
          whileHover={{
            scale: 1.05,
          }}
        >
          <span className={scrolled ? "text-primary-blue" : "text-white"}>
            { <img
                  src="images/logo.png"
                  alt="logo"
                  className="w-10 h-10 object-cover"
                /> }
          </span>
        </motion.div>
        <nav>
          <ul className="flex space-x-6 my-2">
            {["About", "Portfolio", "Experience", "Skills", "Contact"].map(
              (item) => (
                <motion.li
                  className="text-lg font-medium"
                  key={item}
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{textDecoration: 'none'}}
                    className={`transition-colors hover:text-primary-teal text-decoration:none ${
                      scrolled ? "text-neutral-dark" : "text-white"
                    } `}
                  >
                    {item}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;

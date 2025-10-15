import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
            {
              <img
                src="images/logo.png"
                alt="logo"
                className="w-10 h-10 object-cover"
              />
            }
          </span>
        </motion.div>
        <nav className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 my-2 items-center">
              {["About", "Portfolio", "Experience", "Skills", "Contact"].map(
                (item) => (
                  <motion.li
                    className="text-lg font-medium"
                    key={item}
                    whileHover={{ scale: 1.1 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`transition-colors hover:text-primary-teal no-underline ${
                        scrolled ? "text-neutral-dark" : "text-white"
                      }`}
                    >
                      {item}
                    </a>
                  </motion.li>
                )
              )}

              <motion.li whileHover={{ scale: 1.1 }}>
                <a
                  href="/files/Jorge_Rangel_CV_Hybrid.pdf"
                  download="JorgeRangel_CV.pdf"
                  className="bg-black text-white font-semibold no-underline px-4 py-2 rounded-lg hover:bg-primary-blue transition-colors"
                >
                  Download CV
                </a>
              </motion.li>
            </ul>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;

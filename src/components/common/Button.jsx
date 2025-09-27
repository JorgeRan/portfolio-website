import React from "react";
import { motion } from "framer-motion";

export function Button({
  children,
  primary,
  secondary,
  href,
  onClick,
  className = "",
}) {
  const baseClasses =
    "inline-block py-3 px-6 rounded-xl font-medium transition-all text-center";
  let buttonClasses = baseClasses;

  if (primary) {
    buttonClasses += " bg-white text-primary-blue hover:bg-opacity-90";
  } else if (secondary) {
    buttonClasses +=
      " bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10";
  } else {
    buttonClasses += " bg-primary-teal text-white hover:bg-opacity-90";
  }

  buttonClasses += ` ${className}`;

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block w-full"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {buttonContent}
    </button>
  );
}

export default Button;

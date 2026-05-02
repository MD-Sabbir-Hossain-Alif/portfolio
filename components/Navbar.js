"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 border-b border-primary/10 bg-background/60 backdrop-blur-md shadow-2xl shadow-black/5 transition-all duration-300 antialiased tracking-tight"
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <div className="text-xl font-extrabold text-foreground tracking-widest">
          DevPortfolio
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface-variant hover:text-foreground transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-semibold active:scale-95 transition-transform hover:bg-primary-container/80 border border-primary/20">
            Resume
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

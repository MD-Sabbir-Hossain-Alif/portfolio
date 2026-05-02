"use client";

import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20 min-h-[80vh] overflow-visible">
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-block px-4 py-1 rounded-full bg-primary-container/20 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase"
        >
          AVAILABLE FOR HIRE
        </motion.div>

        <h1 className="text-display text-foreground drop-shadow-sm">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="block"
          >
            Crafting Scalable
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-primary block relative"
          >
            MERN Experiences
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute -bottom-2 left-0 h-1 bg-primary/30 rounded-full"
            />
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg text-on-surface-variant max-w-lg leading-relaxed"
        >
          I'm a Frontend-focused MERN Stack Developer specializing in building high-performance, accessible, and visually stunning web applications.
        </motion.p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="px-8 py-4 bg-primary-container text-on-primary-container rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary-container/20 active:scale-95">
            <span className="material-symbols-outlined">download</span>
            Download Resume
          </button>
          <div className="flex gap-4 items-center pl-4">
            {["terminal", "link", "chat"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="text-on-surface-variant hover:text-primary transition-colors p-2 glass-panel rounded-lg"
              >
                <span className="material-symbols-outlined">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>
        <div className="glass-panel p-4 rounded-[40px] overflow-hidden relative z-10">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
            alt="Developer portrait"
            className="w-full aspect-square object-cover rounded-[32px] grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Floating elements with Framer Motion */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-6 glass-panel p-4 rounded-2xl z-20 hidden lg:block"
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-bold text-foreground">5+ Projects Completed</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

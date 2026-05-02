"use client";

import { motion } from "framer-motion";


export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass-panel p-10 rounded-3xl space-y-6 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The Journey Behind the Code
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            With a foundation built on the MERN stack, I bridge the gap between complex backend logic and intuitive user experiences. My journey started with a fascination for how data moves across the web, leading me to master React's component-based architecture and Node.js's efficient runtime.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Beyond the screen, I find balance through creative and active pursuits. I am an avid painter, where I explore color theory that often translates back into my UI designs. On weekends, you'll likely find me on the court or field, staying sharp through sports.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="glass-panel p-8 rounded-3xl h-full flex flex-col justify-center gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-5 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-tertiary-container flex items-center justify-center shadow-lg shadow-tertiary-container/20 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-foreground text-3xl group-hover:scale-110 transition-transform">palette</span>
              </div>
              <div>
                <p className="text-foreground font-bold text-lg">Painting</p>
                <p className="text-sm text-on-surface-variant">Abstract & Landscape</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-5 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center shadow-lg shadow-primary-container/20 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-foreground text-3xl group-hover:scale-110 transition-transform">sports_basketball</span>
              </div>
              <div>
                <p className="text-foreground font-bold text-lg">Sports</p>
                <p className="text-sm text-on-surface-variant">Weekly Basketball League</p>
              </div>
            </motion.div>
            
            <div className="mt-4 p-4 rounded-2xl bg-surface-container-highest/30 border border-primary/10 text-sm text-center italic text-on-surface-variant">
              "Balance is not something you find, it's something you create."
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

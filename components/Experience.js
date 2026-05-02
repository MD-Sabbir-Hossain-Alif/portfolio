"use client";

import { motion } from "framer-motion";


export default function Experience() {
  const experiences = [
    {
      title: "Senior Fullstack Developer",
      company: "TechFlow Solutions",
      period: "2021 - Present",
      description: "Lead development of scalable React dashboard architectures and Node.js microservices.",
      color: "primary",
    },
    {
      title: "Frontend Developer",
      company: "Creative Canvas",
      period: "2019 - 2021",
      description: "Focused on pixel-perfect UI implementation and animation frameworks for e-commerce clients.",
      color: "slate-500",
    },
  ];

  const education = [
    {
      title: "M.S. in Computer Science",
      school: "Global Institute of Tech",
      period: "2017 - 2019",
      description: "Specialization in Distributed Systems and Software Architecture.",
      color: "secondary",
    },
    {
      title: "B.S. in Software Engineering",
      school: "Metropolitan University",
      period: "2013 - 2017",
      description: "Core foundations in data structures, algorithms, and web technologies.",
      color: "slate-500",
    },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20">
      {/* Experience */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-10 rounded-3xl space-y-8"
      >
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-4xl">work</span>
          <h2 className="text-3xl font-bold text-foreground">Experience</h2>
        </div>
        <div className="space-y-12">
          {experiences.map((item, idx) => (
            <div key={idx} className="relative pl-8 border-l border-primary/30">
              <div className={`absolute -left-[5px] top-0 w-2 h-2 rounded-full ${item.color === 'primary' ? 'bg-primary ring-4 ring-primary/20' : 'bg-slate-500'}`}></div>
              <h4 className="text-foreground font-bold text-lg">{item.title}</h4>
              <p className="text-primary text-sm font-semibold">{item.company} • {item.period}</p>
              <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-10 rounded-3xl space-y-8"
      >
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-secondary text-4xl">school</span>
          <h2 className="text-3xl font-bold text-foreground">Education</h2>
        </div>
        <div className="space-y-12">
          {education.map((item, idx) => (
            <div key={idx} className="relative pl-8 border-l border-secondary/30">
              <div className={`absolute -left-[5px] top-0 w-2 h-2 rounded-full ${item.color === 'secondary' ? 'bg-secondary ring-4 ring-secondary/20' : 'bg-slate-500'}`}></div>
              <h4 className="text-foreground font-bold text-lg">{item.title}</h4>
              <p className="text-secondary text-sm font-semibold">{item.school} • {item.period}</p>
              <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

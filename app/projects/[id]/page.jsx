"use client";

import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Project not found</h1>
          <Link href="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-8 max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Link href="/" className="text-primary flex items-center gap-2 group mb-8">
              <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Back to Portfolio
            </Link>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-primary-container/20 text-primary text-xs font-bold rounded-full border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl font-black text-foreground tracking-tight">{project.title}</h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">{project.description}</p>
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-primary text-background font-bold rounded-xl active:scale-95 transition-all shadow-lg shadow-primary/20">
                Live Demo
              </button>
              <button className="px-8 py-4 glass-panel text-foreground font-bold rounded-xl active:scale-95 transition-all">
                GitHub Repository
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel p-2 rounded-[40px] overflow-hidden shadow-2xl"
          >
            <img src={project.image} alt={project.title} className="w-full aspect-video object-cover rounded-[32px]" />
          </motion.div>
        </section>

        {/* Details Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="glass-panel p-10 rounded-3xl space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Project Overview</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">{project.fullDescription}</p>
            </div>

            <div className="glass-panel p-10 rounded-3xl space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                    <p className="text-on-surface-variant font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="glass-panel p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-foreground uppercase tracking-widest text-xs">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-surface-container-highest text-foreground text-sm rounded-lg border border-primary/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-foreground uppercase tracking-widest text-xs">Project Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">Timeline</span>
                  <span className="text-foreground font-bold">4 Weeks</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">Role</span>
                  <span className="text-foreground font-bold">Full Stack</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">Completion</span>
                  <span className="text-primary font-bold">100%</span>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}

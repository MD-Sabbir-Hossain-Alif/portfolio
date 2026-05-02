"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { MdArrowOutward } from "react-icons/md";

export default function Projects() {
    return (
        <section id="projects" className="py-20 space-y-12">
            <div className="flex justify-between items-end">
                <h2 className="text-display text-foreground">Selected Works</h2>
                <a
                    href="#"
                    className="text-primary hover:underline font-semibold flex items-center gap-2 group"
                >
                    View Portfolio
                    <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        <MdArrowOutward />
                    </span>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-panel rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                    >
                        <div className="h-56 overflow-hidden relative z-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-xs z-10 pointer-events-none group-hover:pointer-events-auto">
                                <Link href={`/projects/${project.id}`}>
                                    <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 hover:scale-110 active:scale-95 shadow-xl">
                                        View Case Study
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <h4 className="text-foreground font-bold text-xl">
                                {project.title}
                            </h4>
                            <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] px-2 py-0.5 rounded bg-primary-container/20 text-primary font-bold tracking-tighter"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link href={`/projects/${project.id}`}>
                                <button className="w-full py-3 rounded-xl border border-primary/20 hover:bg-primary-container hover:text-on-primary-container transition-all text-sm font-bold active:scale-95">
                                    View Project
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

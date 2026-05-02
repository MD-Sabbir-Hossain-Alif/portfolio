"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLaptopCode, FaTools } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const bars = sectionRef.current.querySelectorAll(".progress-bar");

        bars.forEach((bar) => {
            const targetWidth = bar.getAttribute("data-width");
            gsap.to(bar, {
                width: targetWidth,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: bar,
                    start: "top 90%",
                },
            });
        });
    }, []);

    const skillGroups = [
        {
            title: "Frontend",
            Icon: FaLaptopCode,
            skills: [
                { name: "React / Next.js", level: "95%" },
                { name: "Tailwind CSS", level: "90%" },
                { name: "TypeScript", level: "85%" },
            ],
            tags: ["Framer Motion", "GSAP", "Redux"],
        },
        {
            title: "Backend",
            Icon: FiDatabase,
            skills: [
                { name: "Node.js / Express", level: "85%" },
                { name: "MongoDB", level: "80%" },
                { name: "PostgreSQL", level: "75%" },
            ],
            tags: ["REST APIs", "GraphQL", "JWT"],
        },
        {
            title: "Tools",
            Icon: FaTools,
            skills: [
                { name: "Docker / DevOps", level: "75%" },
                { name: "Git / CI-CD", level: "90%" },
                { name: "AWS", level: "70%" },
            ],
            tags: ["Postman", "Figma", "Linux"],
        },
    ];

    return (
        <section id="skills" ref={sectionRef} className="py-20 space-y-12">
            <div className="text-center">
                <h2 className="text-display text-foreground">
                    Technical Arsenal
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillGroups.map((group, idx) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="glass-panel p-8 rounded-3xl space-y-6 flex flex-col"
                    >
                        <div className="flex items-center gap-3">
                            <group.Icon size={20} />
                            <h3 className="text-2xl font-semibold text-foreground">
                                {group.title}
                            </h3>
                        </div>

                        <div className="space-y-6 grow">
                            {group.skills.map((skill) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-on-surface">
                                            {skill.name}
                                        </span>
                                        <span className="font-bold text-primary">
                                            {skill.level}
                                        </span>
                                    </div>
                                    <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                                        <div
                                            className="progress-bar h-full bg-primary shadow-[0_0_10px_rgba(156,202,255,0.5)]"
                                            data-width={skill.level}
                                            style={{ width: "0%" }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-primary/10">
                            {group.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-primary-container/20 text-foreground text-[10px] uppercase tracking-wider font-bold rounded-full border border-primary/10"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

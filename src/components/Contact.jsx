"use client";

import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import {
    MdOutlineCall,
    MdOutlineEmail,
    MdOutlineWhatsapp,
} from "react-icons/md";

export default function Contact() {
    const contactInfo = [
        {
            icon: <MdOutlineEmail size={24} />,
            label: "Email",
            value: "sabbir.web.dp@gmail.com",
        },
        {
            icon: <MdOutlineCall size={24} />,
            label: "Phone",
            value: "01300386800",
        },
        {
            icon: <MdOutlineWhatsapp size={24} />,
            label: "WhatsApp",
            value: "Connect on Chat",
        },
    ];

    return (
        <section id="contact" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-8 md:p-12 rounded-[40px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                <div className="space-y-8">
                    <h2 className="text-display text-foreground">
                        Let&apos;s Build Something{" "}
                        <span className="text-primary">Incredible</span>
                    </h2>
                    <p className="text-on-surface-variant text-lg">
                        Ready to start your next digital project? Reach out
                        through any of these channels.
                    </p>

                    <div className="space-y-6">
                        {contactInfo.map((info, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-lg shadow-primary-container/10">
                                    {info.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                                        {info.label}
                                    </p>
                                    <p className="text-foreground font-semibold">
                                        {info.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <form className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-on-surface-variant ml-2">
                            Name
                        </label>
                        <input
                            type="text"
                            className="w-full rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all backdrop-blur-md bg-surface-container/50 border-2 border-surface-container-highest text-foreground focus:bg-surface-container-highest/30"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-on-surface-variant ml-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all backdrop-blur-md bg-surface-container/50 border-2 border-surface-container-highest text-foreground focus:bg-surface-container-highest/30"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-on-surface-variant ml-2">
                            Message
                        </label>
                        <textarea
                            className="w-full rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all backdrop-blur-md bg-surface-container/50 border-2 border-surface-container-highest text-foreground focus:bg-surface-container-highest/30 min-h-37.5"
                            placeholder="Tell me about your project..."
                        />
                    </div>
                    <button className="w-full py-4 border-2 border-surface-container-highest hover:text-on-primary-container font-bold rounded-2xl active:scale-[0.98] transition-all hover:bg-primary-container/80 flex items-center justify-center gap-2 group cursor-pointer">
                        <span className="material-symbols-outlined group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            <FiSend />
                        </span>
                        Send Message
                    </button>
                </form>
            </motion.div>
        </section>
    );
}

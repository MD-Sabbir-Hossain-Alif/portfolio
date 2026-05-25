"use client";

import Link from "next/link";
import {
    FaLinkedin,
    FaGithub,
    FaXTwitter,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa6";

export default function Footer() {
    const socialLinks = [
        {
            Icon: FaLinkedin,
            href: "https://bd.linkedin.com/in/md-sabbir-hossain-alif",
        },
        { Icon: FaGithub, href: "https://github.com/MD-Sabbir-Hossain-Alif" },
        { Icon: FaXTwitter, href: "https://x.com/original_sabbir" },
        { Icon: FaInstagram, href: "https://www.instagram.com/sabbir.web.dp" },
        {
            Icon: FaFacebook,
            href: "https://www.facebook.com/sabbirofficial.dev.fb",
        },
    ];

    return (
        <footer className="w-full border-t border-primary/10 mt-20 bg-background/80 backdrop-blur-xl antialiased">
            <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="space-y-2 text-center md:text-left">
                    {/* <div className="text-2xl md:text-3xl font-black text-foreground tracking-tighter">
                        Sabbir<span className="text-primary">.</span>dev
                    </div> */}
                    <p className="text-on-surface-variant text-sm">
                        © 2026 Developer Portfolio. Built with MERN stack &
                        Next.js.
                    </p>
                </div>

                <div className="flex gap-4">
                    {socialLinks.map(({ Icon, href }, idx) => (
                        <Link
                            key={idx}
                            href={href}
                            className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all p-2.5"
                        >
                            <Icon size={18} />
                        </Link>
                    ))}
                </div>

                {/* <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    <a
                        href="#"
                        className="hover:text-foreground transition-colors"
                    >
                        Privacy
                    </a>
                    <a
                        href="#"
                        className="hover:text-foreground transition-colors"
                    >
                        Terms
                    </a>
                </div> */}
            </div>
        </footer>
    );
}

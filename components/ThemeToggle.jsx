"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl bg-primary-container/20 border border-primary/20 text-primary transition-colors hover:bg-primary-container/30 cursor-pointer"
            aria-label="Toggle theme"
        >
            <span className="material-symbols-outlined">
                {theme === "dark" ? (
                    <MdOutlineLightMode size={24} />
                ) : (
                    <MdOutlineDarkMode size={24} />
                )}
            </span>
        </motion.button>
    );
}

"use client";

export default function Footer() {

  const socialLinks = [
    { icon: "https://cdn.simpleicons.org/linkedin", href: "#" },
    { icon: "https://cdn.simpleicons.org/github/d5e3ff", href: "#" },
    { icon: "https://cdn.simpleicons.org/x/d5e3ff", href: "#" },
    { icon: "https://cdn.simpleicons.org/instagram/d5e3ff", href: "#" },
  ];

  return (
    <footer className="w-full border-t border-primary/10 mt-20 bg-background/80 backdrop-blur-xl antialiased">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <div className="text-2xl font-black text-foreground tracking-tighter">
            DevPortfolio<span className="text-primary">.</span>
          </div>
          <p className="text-on-surface-variant text-sm">
            © 2024 Developer Portfolio. Built with MERN stack & Next.js.
          </p>
        </div>

        <div className="flex gap-4">
          {socialLinks.map((link, idx) => (
            <a 
              key={idx}
              href={link.href} 
              className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all p-2.5"
            >
              <img src={link.icon} alt="social" className="w-full h-full opacity-70 group-hover:opacity-100" />
            </a>
          ))}
        </div>
        
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}

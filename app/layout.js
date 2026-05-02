import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "DevPortfolio | MERN Stack Developer",
  description: "I'm a Frontend-focused MERN Stack Developer specializing in building high-performance, accessible, and visually stunning web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className="font-manrope text-foreground selection-primary transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

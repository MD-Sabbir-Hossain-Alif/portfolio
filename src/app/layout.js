import "./globals.css";
import SmoothScroll from "@/src/components/SmoothScroll";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import { Manrope } from "next/font/google";

const manrope = Manrope({
	subsets: ["latin"],
	variable: "--font-manrope",
	display: "swap",
});

export const metadata = {
	title: "Sabbir | MERN Stack Developer",
	description:
		"I'm a Frontend-focused MERN Stack Developer specializing in building high-performance, accessible, and visually stunning web applications.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={manrope.variable} suppressHydrationWarning>
			<body className="font-manrope text-foreground selection-primary transition-colors duration-300">
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					<SmoothScroll>{children}</SmoothScroll>
				</ThemeProvider>
			</body>
		</html>
	);
}
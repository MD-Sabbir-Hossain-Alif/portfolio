import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Experience from "@/src/components/Experience";
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="grow pt-24 px-8 max-w-7xl mx-auto overflow-hidden">
				<Hero />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

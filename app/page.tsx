import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}

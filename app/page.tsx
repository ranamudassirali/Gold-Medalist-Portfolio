import {
  Header,
  Hero,
  Stats,
  About,
  Experience,
  Projects,
  Skills,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

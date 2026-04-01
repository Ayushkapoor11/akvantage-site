import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery4 from "@/components/blocks/gallery4";
import HowItWorks from "@/components/HowItWorks";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Gallery4 />
      <HowItWorks />
      <ContactCTA />
      <Footer />
    </main>
  );
}

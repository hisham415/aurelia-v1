import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Pillars from "@/components/Pillars";
import Development from "@/components/Development";
import MediaStatement from "@/components/MediaStatement";
import Journal from "@/components/Journal";
import Footer from "@/components/Footer";
import InteractiveShell from "@/components/InteractiveShell";

export default function HomePage() {
  return (
    <InteractiveShell>
      <main id="top">
        <Hero />
        <Intro />
        <Pillars />
        <Development />
        <MediaStatement />
        <Journal />
      </main>
      <Footer />
    </InteractiveShell>
  );
}

import { Hero } from '@/components/sections/hero';
import { Experience } from '@/components/sections/experience';
import { Skills } from '@/components/sections/skills';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-background to-background/80 min-h-screen">
      <Hero />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
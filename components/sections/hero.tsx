'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Álvaro Sánchez González
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
          Site Reliability Engineer
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-12 text-muted-foreground">
          Specializing in infrastructure automation, cloud architecture, and building reliable, scalable systems in AWS. 
          Passionate about DevOps culture and continuous improvement.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:alvarosanchezgon1997@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <Button asChild>
          <a href="/cv/cv-2024.pdf" download>
            Download CV
          </a>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </section>
  );
}
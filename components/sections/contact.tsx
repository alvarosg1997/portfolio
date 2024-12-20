'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center glass-card rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          Let's Connect
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Open to new opportunities and interesting projects
        </p>
        <div className="flex gap-6 justify-center">
          <Button 
            variant="ghost" 
            size="lg" 
            asChild 
            className="hover:bg-primary/20 hover:text-primary transition-all duration-300"
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 mr-2" />
              GitHub
            </a>
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            asChild 
            className="hover:bg-secondary/20 hover:text-secondary transition-all duration-300"
          >
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            asChild 
            className="hover:bg-accent/20 hover:text-accent transition-all duration-300"
          >
            <a href="mailto:alvarosanchezgon1997@gmail.com">
              <Mail className="h-6 w-6 mr-2" />
              Email
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
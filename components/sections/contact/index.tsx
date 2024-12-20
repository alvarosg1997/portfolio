'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-zinc-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-zinc-400 mb-8">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" size="icon" asChild className="hover:bg-zinc-800">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="hover:bg-zinc-800">
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="hover:bg-zinc-800">
            <a href="mailto:alvarosanchezgon1997@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
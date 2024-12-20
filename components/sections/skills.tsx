'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Cloud & Infrastructure',
    skills: ['AWS', 'Azure', 'Terraform', 'Kubernetes', 'Docker']
  },
  {
    title: 'DevOps & Automation',
    skills: ['CI/CD', 'Jenkins', 'GitLab', 'Ansible', 'Python']
  },
  {
    title: 'Monitoring & Security',
    skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Security']
  },
  {
    title: 'Development',
    skills: ['Git', 'Linux', 'Bash', 'APIs', 'Documentation']
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          Technical Expertise
        </h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="glass-card rounded-xl p-6 hover:bg-muted/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg text-sm bg-muted hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
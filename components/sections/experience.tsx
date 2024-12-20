'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const experiences = [
  {
    title: 'SRE Junior',
    company: 'Softek',
    period: '2023 - Present',
    description: 'Specialized in infrastructure automation using Terraform and Terragrunt. Managed cloud resources across Azure and AWS, implemented monitoring systems, and improved deployment processes.',
    technologies: ['Terraform', 'Terragrunt', 'Azure', 'AWS', 'Monitoring']
  },
  {
    title: 'Infrastructure System Technician',
    company: 'NTT Data',
    period: '2022 - 2023',
    description: 'Led API integration projects using Apigee, developed automation scripts, and maintained critical infrastructure systems.',
    technologies: ['Apigee', 'API Integration', 'System Administration']
  },
  {
    title: 'SysAdmin and Cloud Engineer',
    company: 'Small Development',
    period: '2021 - 2022',
    description: 'Managed AWS infrastructure, implemented CI/CD pipelines, and handled network administration tasks.',
    technologies: ['AWS', 'CI/CD', 'Network Administration']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <Card key={index} className="backdrop-blur-sm bg-card/50">
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{exp.company} • {exp.period}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
'use client';

import { SkillCategory } from './skill-category';

const skillCategories = [
  {
    title: 'Cloud & Infrastructure',
    skills: [
      'AWS', 'Azure', 'Terraform', 'Terragrunt', 'Kubernetes', 'Docker',
      'Infrastructure as Code', 'Cloud Architecture'
    ]
  },
  {
    title: 'DevOps & Automation',
    skills: [
      'CI/CD', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'Ansible',
      'Shell Scripting', 'Python', 'Automation'
    ]
  },
  {
    title: 'Monitoring & Security',
    skills: [
      'Prometheus', 'Grafana', 'ELK Stack', 'Security Best Practices',
      'Log Management', 'Alerting', 'Incident Response'
    ]
  },
  {
    title: 'Development & Tools',
    skills: [
      'Git', 'VS Code', 'Linux', 'Bash', 'REST APIs', 'JSON/YAML',
      'Documentation', 'Problem Solving'
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
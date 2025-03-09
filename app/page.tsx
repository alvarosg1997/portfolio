"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  Cloud,
  Server,
  Code,
  Container,
  GitBranch,
  Monitor,
  Shield,
  Settings,
  Terminal
} from "lucide-react"
import Image from "next/image"

const technologies = [
  { name: "AWS", icon: Cloud, description: "Arquitectura Cloud y Servicios AWS" },
  { name: "Terraform", icon: Server, description: "Infraestructura como Código" },
  { name: "Kubernetes", icon: Container, description: "Orquestación de Contenedores" },
  { name: "CI/CD", icon: GitBranch, description: "Integración y Despliegue Continuo" },
  { name: "Monitorización", icon: Monitor, description: "Observabilidad y Métricas" },
  { name: "Seguridad", icon: Shield, description: "DevSecOps y Mejores Prácticas" },
  { name: "Automatización", icon: Settings, description: "Procesos y Flujos de Trabajo" },
  { name: "Python", icon: Code, description: "Desarrollo y Scripting" }
]

const projects = [
  {
    title: "Infraestructura Multi-Region AWS",
    description: "Implementación de arquitectura altamente disponible en múltiples regiones de AWS usando Terraform y mejores prácticas de IaC.",
    tags: ["AWS", "Terraform", "High Availability"],
    link: "https://github.com/yourusername/aws-multi-region"
  },
  {
    title: "Platform Engineering",
    description: "Plataforma de desarrollo interno que automatiza el ciclo de vida completo de las aplicaciones, desde el desarrollo hasta la producción.",
    tags: ["Kubernetes", "ArgoCD", "GitOps"],
    link: "https://github.com/yourusername/platform-engineering"
  },
  {
    title: "Monitorización y Alertas",
    description: "Sistema completo de monitorización y alertas utilizando Prometheus, Grafana y AlertManager para infraestructura crítica.",
    tags: ["Prometheus", "Grafana", "SRE"],
    link: "https://github.com/yourusername/monitoring-stack"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-lg font-semibold">Álvaro Sánchez</span>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="#about">Sobre mí</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#projects">Proyectos</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#contact">Contacto</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              DevOps & Cloud Engineer
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Especializado en diseñar y mantener infraestructuras cloud escalables y seguras.
              Transformando la entrega de software a través de la automatización y las mejores prácticas DevOps.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contactar
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Sobre mí</h2>
            <div className="space-y-4 text-lg">
              <p>
                Soy un DevOps & Cloud Engineer con más de 5 años de experiencia en el diseño
                e implementación de soluciones cloud empresariales. Mi experiencia se centra
                en AWS, donde he liderado la transformación de infraestructuras tradicionales
                a arquitecturas cloud nativas.
              </p>
              <p>
                Me especializo en:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Arquitectura de sistemas distribuidos en AWS</li>
                <li>Implementación de pipelines CI/CD</li>
                <li>Automatización de infraestructura con Terraform</li>
                <li>Orquestación de contenedores con Kubernetes</li>
                <li>Desarrollo de soluciones de monitorización y observabilidad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Tecnologías y Competencias</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10">
                    <tech.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Separator />
                <div className="p-4">
                  <Button variant="ghost" className="w-full" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Ver Proyecto
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contacto</h2>
            <p className="text-lg text-muted-foreground mb-8">
              ¿Interesado en colaborar o tienes alguna pregunta? No dudes en contactarme
              a través de cualquiera de estos canales.
            </p>
            <div className="flex flex-col gap-4">
              <Button size="lg" asChild>
                <a href="mailto:tu@email.com">
                  <Mail className="mr-2 h-5 w-5" />
                  tu@email.com
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Álvaro Sánchez. Todos los derechos reservados.
            </span>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
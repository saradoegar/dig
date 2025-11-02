import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "LPU Unimall",
      description:
        "Built a responsive website using Wix for LPU Unimall as part of a bridge course. Showcased different stores and services with clear navigation and branding. Applied UI/UX customization to improve accessibility and visual presentation.",
      tech: ["Wix", "UI/UX Design"],
      date: "August 2025",
      link: "https://saradoegar.wixsite.com/lpu-unimall", // Update your links here
      type: "Website",
    },
    {
      title: "Digital Portfolio Website",
      description:
        "Designed and deployed a personal portfolio website hosted on Vercel. Structured sections for About Me, Technical Skills, Creative Skills, and Contact Information. Focused on clean layout and styling using HTML and CSS basics.",
      tech: ["HTML", "CSS", "Vercel"],
      date: "October 2025",
      link: "#", // Update your links here
      github: "#", // Update your links here
      type: "Portfolio",
    },
    /* Add more projects here */
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions I've built.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card p-6 card-shadow hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {project.type}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {project.date}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link && (
                    <Button
                      asChild
                      variant="default"
                      className="flex-1 bg-primary hover:bg-primary/90 rounded-full"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-primary/20 hover:border-primary rounded-full"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Add more project cards here */}
      </div>
    </section>
  );
}

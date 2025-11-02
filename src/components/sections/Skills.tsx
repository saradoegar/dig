import { Code2, Wrench, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: [
        "C++",
        "C",
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        /* Add more languages here */
      ],
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: [
        "React",
        "Node.js",
        "MySQL",
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Canva",
        "Wix",
        /* Add more frameworks/tools here */
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Adaptability",
        "Teamwork",
        "Creativity",
        "Patience",
        "Leadership",
        "Communication",
        "Problem Solving",
        /* Add more soft skills here */
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse set of technical and interpersonal skills that I've developed
            through education and hands-on experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-card p-6 card-shadow hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1 text-sm bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Certificates() {
  const certificates = [
    {
      title: "MySQL Bootcamp",
      issuer: "LetsUpgrade",
      date: "September 2025",
      verifyLink: "#", // Update your links here
    },
    {
      title: "Python Bootcamp Course",
      issuer: "LetsUpgrade",
      date: "September 2025",
      verifyLink: "#", // Update your links here
    },
    {
      title: "HTML & CSS BootCamp",
      issuer: "LetsUpgrade",
      date: "September 2025",
      verifyLink: "#", // Update your links here
    },
    {
      title: "Figma BootCamp",
      issuer: "LetsUpgrade",
      date: "August 2025",
      verifyLink: "#", // Update your links here
    },
    /* Add more certificates here */
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and completed courses that showcase my
            commitment to continuous learning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="glass-card p-6 card-shadow hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-gradient transition-all">
                  {cert.title}
                </h3>

                <p className="text-primary text-sm mb-1">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {cert.date}
                </p>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-primary/20 hover:border-primary hover:bg-primary/10 rounded-full"
                >
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Add more certificate cards here */}
      </div>
    </section>
  );
}

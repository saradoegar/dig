import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/saradoegar",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/saradoegar",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:doegarsara@gmail.com",
    },
    {
      name: "Phone",
      icon: Phone,
      url: "tel:+918894346425",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-gradient">Sara Doegar</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                MCA Student & Full-Stack Developer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Passionate about creating elegant solutions through code. Currently
              pursuing my Master's in Computer Applications at Lovely Professional
              University, with a strong foundation in full-stack development and a
              creative approach to problem-solving.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:glow-effect"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-primary" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 glow-effect transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>

          {/* Photo Placeholder */}
          <div className="flex-1 flex items-center justify-center animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center overflow-hidden glow-effect">
                {/* Replace this with your photo */}
                <div className="text-center p-8">
                  <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center">
                    <p className="text-muted-foreground">
                      {/* Replace with your photo */}
                      Add Your Photo Here
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

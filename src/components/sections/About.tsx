import { GraduationCap, Award, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export function About() {
  const education = [
    {
      degree: "Master in Computer Application",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      period: "August 2025 - Present",
      icon: GraduationCap,
    },
    {
      degree: "Bachelor of Science",
      institution: "CSK Agriculture University",
      location: "H.P., India",
      period: "August 2021 - August 2024",
      description: "Physics, Mathematics and Chemistry",
      icon: GraduationCap,
    },
    {
      degree: "Senior Secondary (Non-Medical)",
      institution: "DAV Sr. Sec. Public School",
      location: "Dehra, Kangra",
      period: "April 2020 - March 2021",
      icon: GraduationCap,
    },
  ];

  const achievements = [
    {
      title: "Build Storm 2025 Finalist",
      description:
        "Selected as a Finalist in 'Build Storm 2025' AI Hackathon for demonstrating exceptional innovation, teamwork, and problem-solving skills.",
      date: "September 2025",
      icon: Award,
    },
    {
      title: "NSS Team Leader",
      description:
        "Worked as a Team Leader during a 7-day NSS (National Service Scheme) Camp, coordinating activities and guiding volunteers.",
      date: "November 2024",
      icon: Sparkles,
    },
    {
      title: "Published Writer",
      description:
        "Wrote about the growing shift from books and newspapers to digital media and e-readers like Kindle in a published Letter to the Editor.",
      date: "April 2023",
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer with a strong academic background and a drive to
            create meaningful digital experiences.
          </p>
        </div>

        {/* Personal Summary */}
        <div className="mb-16 animate-fade-in">
          <Card className="glass-card p-8 card-shadow">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm Sara Doegar, currently pursuing my Master's in Computer
              Applications at Lovely Professional University. With a solid foundation
              in science and a growing expertise in technology, I've developed a
              unique perspective that combines analytical thinking with creative
              problem-solving. My journey from studying Physics, Mathematics, and
              Chemistry to diving deep into programming has equipped me with strong
              logical reasoning and attention to detail. I'm passionate about web
              development, UI/UX design, and continuously learning new technologies to
              build impactful digital solutions.
            </p>
          </Card>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient">Education</span>
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="glass-card p-6 card-shadow hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <edu.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                    <p className="text-primary text-sm mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm">{edu.location}</p>
                    <p className="text-muted-foreground text-sm">{edu.period}</p>
                    {edu.description && (
                      <p className="text-muted-foreground text-sm mt-2">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient">Achievements</span>
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="glass-card p-6 card-shadow hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      {achievement.description}
                    </p>
                    <p className="text-primary text-sm font-medium">
                      {achievement.date}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          <span>© {currentYear} Sara Doegar. Made with</span>
          <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
          <span>and passion for code.</span>
        </p>
      </div>
    </footer>
  );
}

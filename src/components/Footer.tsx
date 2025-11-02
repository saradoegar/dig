import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          <span>© {currentYear} Sara Doegar </span>
    
          <span> </span>
        </p>
      </div>
    </footer>
  );
}

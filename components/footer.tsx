import { profileData } from "@/lib/data";
import { Mail, Github, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 border-t border-border bg-secondary/30 dark:bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">{profileData.name}</h3>
            <p className="text-muted-foreground">{profileData.title}</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
          <p className="mt-2">© {currentYear} {profileData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

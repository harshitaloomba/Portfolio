import { profileData } from "@/lib/data";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
              <Image
                src={profileData.image}
                alt={profileData.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              {profileData.name}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
              {profileData.title}
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              {profileData.summary}
            </p>

            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-sky-600 dark:hover:bg-sky-500 transition-colors font-medium"
              >
                <Mail size={20} />
                Get in Touch
              </a>
              <a
                href="/api/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-foreground rounded-lg hover:bg-gray-50 transition-colors font-medium border border-border shadow-sm"
              >
                View Resume
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="flex gap-6 justify-center md:justify-start">
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
      </div>
    </section>
  );
}

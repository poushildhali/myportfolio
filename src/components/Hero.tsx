"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, ArrowDown } from "lucide-react";
import profileImage from "@/assets/poushil-profile-2.jpg"; // ✅ this is already a string

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/poushil-dhali-8a2472239/",
      icon: <Linkedin className="h-4 w-4" />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/poushildhali",
      icon: <Github className="h-4 w-4" />,
      label: "GitHub",
    },
    {
      href: "https://x.com/PoushilD",
      icon: <Twitter className="h-4 w-4" />,
      label: "Twitter",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4 animate-fadeIn">
              <h1 className="text-hero font-bold text-gradient leading-tight">
                Poushil Dhali
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                “Hi, I’m Poushil Dhali — a Computer Science graduate and aspiring software engineer passionate about web development, AI, and creating user-focused digital experiences.”
              </p>
            </div>

            {/* Buttons + Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fadeIn delay-200">
              <Button
                onClick={scrollToAbout}
                size="lg"
                className="shadow-glow hover:shadow-hero transition-transform hover:scale-105 active:scale-95"
                aria-label="Scroll to About section"
              >
                Let's get started
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>

              <div className="flex items-center gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="transform transition-transform hover:scale-110"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:border-primary hover:text-primary active:scale-95"
                    >
                      {link.icon}
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fadeIn delay-500">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-hero border-4 border-primary/20">
                {/* ✅ Use profileImage directly */}
                <img
                  src={profileImage}
                  alt="Poushil Dhali - Software Engineer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-primary/10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-primary transition-colors"
      >
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;

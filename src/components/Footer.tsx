import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/poushil-dhali',
      icon: Linkedin
    },
    {
      name: 'GitHub',
      url: 'https://github.com/poushil-dhali',
      icon: Github
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/poushil_dhali',
      icon: Twitter
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-gradient">Poushil Dhali</h3>
            <p className="text-muted-foreground max-w-md">
              Computer Science graduate passionate about creating innovative solutions 
              through code. Always excited to take on new challenges and collaborate 
              on meaningful projects.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button key={index} variant="outline" size="icon" asChild>
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Visit ${social.name} profile`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-muted-foreground hover:text-primary transition-smooth text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a href="mailto:poushil.dhali@gmail.com" className="hover:text-primary transition-smooth">
                  poushil.dhali@gmail.com
                </a>
              </p>
              <p>Kolkata, West Bengal, India</p>
              <p>Available for remote opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Poushil Dhali. Made with 
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              and lots of coffee.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
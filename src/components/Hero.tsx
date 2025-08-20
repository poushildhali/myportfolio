import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';
import profileImage from '@/assets/poushil-profile.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-hero font-bold text-gradient leading-tight">
                Poushil Dhali
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                “Hi, I’m Poushil Dhali — a Computer Science graduate and aspiring software engineer passionate about web development, AI, and creating user-focused digital experiences.”
              </p>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToAbout}
                size="lg" 
                className="shadow-glow hover:shadow-hero transition-bounce"
              >
                Let's get started
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com/in/poushil-dhali" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/poushil-dhali" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://x.com/poushil_dhali" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-hero border-4 border-primary/20">
                <img 
                  src={profileImage} 
                  alt="Poushil Dhali - Software Engineer" 
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-primary/10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
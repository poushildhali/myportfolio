import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  const handleDownloadResume = () => {
    // In a real application, this would download the actual resume PDF
    // For demo purposes, we'll create a placeholder link
    const link = document.createElement('a');
    link.href = '/resume-poushil-dhali.pdf';
    link.download = 'Poushil_Dhali_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-heading font-bold mb-4 text-gradient">Resume</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download my complete resume to learn more about my experience, education, and achievements.
            </p>
          </div>

          <Card className="p-12 card-gradient shadow-card hover:shadow-glow transition-smooth">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-semibold">Professional Resume</h3>
                <p className="text-muted-foreground max-w-md">
                  Get a comprehensive overview of my skills, experience, projects, and educational background 
                  in a professionally formatted PDF document.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button 
                  onClick={handleDownloadResume}
                  size="lg" 
                  className="shadow-glow hover:shadow-hero transition-bounce"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Updated: December 2024 • PDF Format • 2 Pages
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;
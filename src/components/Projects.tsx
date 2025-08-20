import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'News Feed App',
      description: 'A real-time news aggregation platform with personalized feeds, built using React and Node.js. Features include user authentication, category filtering, and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/poushil-dhali/news-feed-app',
      liveUrl: 'https://news-feed-demo.com',
      image: 'news-app'
    },
    {
      title: 'Movie Recommendation App',
      description: 'AI-powered movie recommendation system using machine learning algorithms. Provides personalized suggestions based on user preferences and viewing history.',
      technologies: ['Python', 'React', 'scikit-learn', 'PostgreSQL'],
      githubUrl: 'https://github.com/poushil-dhali/movie-recommender',
      liveUrl: 'https://movie-rec-demo.com',
      image: 'movie-app'
    },
    {
      title: 'Weather Forecast App',
      description: 'Comprehensive weather application with 7-day forecasts, location-based services, and interactive maps. Features clean UI and real-time weather updates.',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Tailwind CSS'],
      githubUrl: 'https://github.com/poushil-dhali/weather-app',
      liveUrl: 'https://weather-forecast-demo.com',
      image: 'weather-app'
    },
    {
      title: 'Video Calling App',
      description: 'Real-time video conferencing application with screen sharing, chat functionality, and room management. Built with WebRTC for seamless communication.',
      technologies: ['React', 'WebRTC', 'Socket.io', 'Node.js'],
      githubUrl: 'https://github.com/poushil-dhali/video-call-app',
      liveUrl: 'https://videocall-demo.com',
      image: 'video-app'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-heading font-bold mb-4 text-gradient">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my best work demonstrating technical skills, creativity, and problem-solving abilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden card-gradient shadow-card hover:shadow-glow transition-smooth group">
                <div className="aspect-video bg-muted/20 flex items-center justify-center border-b border-border/50">
                  <div className="text-6xl opacity-20">
                    {project.image === 'news-app' && '📰'}
                    {project.image === 'movie-app' && '🎬'}
                    {project.image === 'weather-app' && '🌤️'}
                    {project.image === 'video-app' && '📹'}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
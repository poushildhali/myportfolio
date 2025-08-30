import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'News Feed App',
      description: 'A real-time news aggregation platform with personalized feeds, built using React and Node.js. Features include user authentication, category filtering, and responsive design.',
      technologies: ['ReactJS', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'Firebase FCM', 'WebSpeech API', 'GNews API', 'Google Gemini API', 'Node.js'],
      githubUrl: 'https://github.com/poushildhali/newsapp',
      liveUrl: 'https://taazanews.ppg.in.net/',
      image: 'news-app'
    },
    {
      title: 'Movie Recommendation App',
      description: 'AI-powered movie recommendation system using machine learning algorithms. Provides personalized suggestions based on user preferences and viewing history.',
      technologies: ['Axios', 'React', 'Tailwind CSS', 'TMBD API', 'Node.js','React Router'],
      githubUrl: 'https://github.com/poushildhali/Movie',
      liveUrl: 'https://poushildhali.github.io/Movie/',
      image: 'movie-app'
    },
    {
      title: 'Weather Forecast App',
      description: 'Comprehensive weather application with 7-day forecasts, location-based services, and interactive maps. Features clean UI and real-time weather updates.',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/poushildhali/world_weather_app',
      liveUrl: 'https://poushildhali.github.io/world_weather_app/',
      image: 'weather-app'
    },
    {
      title: 'Video Calling App',
      description: 'Real-time video conferencing application with screen sharing, chat functionality, and room management. Built with WebRTC for seamless communication.',
      technologies: ['React', 'WebRTC', 'Socket.io', 'Node.js', 'Express', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/poushildhali/face2face.github.io',
      liveUrl: 'https://poushildhali.github.io/face2face.github.io/',
      image: 'video-app'
    },
    {
      title: 'Crypto Wallet',
      description: 'A decentralized cryptocurrency wallet built with React and Web3.js. Allows users to send, receive, and store tokens securely with MetaMask integration.',
      technologies: ['React', 'Tailwind CSS', 'Web3.js', 'Ethers.js', 'Solidity', 'Smart Contracts', 'Node.js'],
      githubUrl: 'https://github.com/poushildhali/crypto-wallet', 
      liveUrl: 'https://crypto-wallet-three-lime.vercel.app/', // still building the app
      image: 'wallet-app'
    },
    {
      title: 'Decentralized To-Do List',
      description: 'Blockchain-based task management application where tasks are stored on-chain, ensuring transparency and immutability. Built using Solidity and Web3.',
      technologies: ['React', 'Solidity', 'Ethers.js', 'Smart Contracts', 'Tailwind CSS', 'Node.js'],
      githubUrl: 'https://github.com/poushildhali/To-Do-Dapp', 
      liveUrl: 'https://poushildhali.github.io/decentralized-todo/', // still building the app
      image: 'todo-app'
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
                    {project.image === 'wallet-app' && '💳'}
                    {project.image === 'todo-app' && '✅'}
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

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Code, Brain } from 'lucide-react';

const About = () => {
  const skills = [
    'Java', 'Python', 'React', 'Node.js', 'TypeScript', 'SQL', 
    'MongoDB', 'Git', 'Docker', 'AWS', 'Machine Learning', 'Web3'
  ];

  const certifications = [
    'JAVA J2EE by Wipro – 2024',
    'HTML, CSS and JavaScript for Web Developer (Coursera – 2022)',
    '3D CAD Fundamental (Coursera – 2022)'
  ];

  return (
    <section id="about" className="py-20 bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-heading font-bold mb-4 text-gradient">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hi, I’m Poushil Dhali, a passionate and hardworking Computer Science and Engineering graduate (B.Tech, WBUT) from Kolkata, West Bengal. I’m someone who finds joy in solving problems, creating meaningful digital experiences, and constantly learning new things.

Over the years, I’ve built a strong foundation in web development, working with technologies like HTML, CSS, JavaScript, React.js, Node.js, SQL, and MongoDB. I’ve also explored programming with Java, Python, and C, which gave me a deeper understanding of logic building and software development. Through my projects — like a real-time News Feed app, a Movie Recommendation platform, a Weather App, and even a Video Calling tool — I’ve gained hands-on experience in building responsive, user-friendly applications that bring ideas to life.

I’ve also strengthened my knowledge with certifications such as JAVA J2EE (Wipro, 2024), HTML, CSS & JavaScript for Web Developers (Coursera, 2022), and 3D CAD Fundamentals (Coursera, 2022).

Beyond technology, I have a curiosity for AI/ML and Blockchain (Web3) — two areas I believe will shape the future. I’m also a JLPT N5 certified Japanese language learner, which reflects my love for exploring cultures and languages.

When I’m not coding, you’ll probably find me playing football or chess, reading novels, or creating melodies on my piano and guitar 🎶. These hobbies keep me creative, balanced, and always inspired.

For me, being a software engineer isn’t just about code — it’s about innovation, impact, and connection. My dream is to build solutions that not only work but also bring smiles to people’s lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Education */}
            <Card className="p-6 card-gradient shadow-card hover:shadow-glow transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">B.Tech in Computer Science & Engineering</h4>
                  <p className="text-muted-foreground">West Bengal University of Technology (WBUT)</p>
                  <p className="text-sm text-muted-foreground">2021 - 2025</p>
                </div>
              </div>
            </Card>

            {/* Certifications */}
            <Card className="p-6 card-gradient shadow-card hover:shadow-glow transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Skills */}
          <Card className="p-6 card-gradient shadow-card hover:shadow-glow transition-smooth mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Passion */}
          <Card className="p-6 card-gradient shadow-card hover:shadow-glow transition-smooth">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">My Passion</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I am deeply passionate about building innovative and user-focused digital experiences. Technology excites me because it allows me to transform ideas into solutions that make life easier, smarter, and more connected. I love exploring the world of Web Development, where creativity meets logic, and I enjoy turning clean code into beautiful, responsive designs.

I am also fascinated by the future of Artificial Intelligence, Machine Learning, and Web3 (Blockchain) — fields that inspire me to keep learning and evolving. Beyond coding, I find joy in solving complex problems, collaborating with people, and continuously growing as an engineer and as a person.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
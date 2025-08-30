import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ResearchAnalysis from '@/components/ResearchAnalysis';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CompanyLogos from '@/components/CompanyLogos';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <CompanyLogos />
        <About />
        <Projects />
        {/* ✅ Research Section */}
        <div id="research">
          <ResearchAnalysis />
        </div>
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

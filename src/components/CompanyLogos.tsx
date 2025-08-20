const CompanyLogos = () => {
  const companies = [
    { name: 'Java, Python, C Language', logo: '💻'},
    { name: 'HTML, CSS, JavaScript, React, Next', logo: '🌐' },
    { name: 'SQL, MongoDB, Supabase', logo: '🗄️' },
    { name: 'Git, Github, Vercel, Netlify', logo: '🔧' }
  ];

  return (
    <section className="py-16 bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-muted-foreground font-medium tracking-wider uppercase text-sm">
            Technologies I Work With
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 hover:opacity-100 transition-smooth group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">
                {company.logo}
              </span>
              <span className="text-muted-foreground font-medium hidden md:block">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
import { Card, CardContent } from "@/components/ui/card";

const CompanyLogos = () => {
  const companies = [
    { name: "Java, Python, C Language", logo: "💻" },
    { name: "HTML, CSS, JavaScript, React, Next", logo: "🌐" },
    { name: "SQL, MongoDB, Supabase", logo: "🗄️" },
    { name: "Git, Github, Vercel, Netlify", logo: "🔧" },
  ];

  return (
    <section className="py-16 bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-muted-foreground font-medium tracking-wider uppercase text-sm">
            Technologies I Work With
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all rounded-2xl"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 space-y-3 text-center">
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {company.logo}
                </span>
                <span className="text-muted-foreground font-medium text-sm md:text-base">
                  {company.name}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;

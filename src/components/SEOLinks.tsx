import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SEOLinksProps {
  className?: string;
}

const SEOLinks: React.FC<SEOLinksProps> = ({ className = '' }) => {
  const seoLinks = [
    {
      category: "Beliebte Behandlungen",
      links: [
        { href: "/achseln", text: "Laser Haarentfernung Achseln", description: "Schnell & effektiv" },
        { href: "/bikinizone", text: "Bikinizone Haarentfernung", description: "Diskret & professionell" },
        { href: "/beine", text: "Dauerhafte Haarentfernung Beine", description: "Glatte Beine ohne Rasur" },
        { href: "/gesicht", text: "Gesicht Haarentfernung", description: "Oberlippe, Kinn & Wangen" }
      ]
    },
    {
      category: "Nach Geschlecht",
      links: [
        { href: "/frauen", text: "Haarentfernung für Frauen", description: "Alle weiblichen Bereiche" },
        { href: "/maenner", text: "Haarentfernung für Männer", description: "Rücken, Brust & mehr" },
        { href: "/frauen/intimbereich", text: "Intimbereich Frauen", description: "Diskrete Behandlung" },
        { href: "/maenner/intimbereich", text: "Intimbereich Männer", description: "Professionell & diskret" }
      ]
    },
    {
      category: "Weitere Bereiche",
      links: [
        { href: "/arme", text: "Arme Haarentfernung", description: "Unter- & Oberarme" },
        { href: "/brust", text: "Brust Haarentfernung", description: "Sensible Bereiche" },
        { href: "/bauch", text: "Bauch Haarentfernung", description: "Bauchlinie & Unterbauch" },
        { href: "/maenner/ruecken", text: "Rücken Haarentfernung", description: "Große Flächen effizient" }
      ]
    }
  ];

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Laser-Haarentfernung Hamburg
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professionelle Laser-Haarentfernung für alle Körperbereiche mit modernster Alexandrit-Laser-Technologie in Hamburg
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {seoLinks.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.href}
                    className="group block p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                    title={`${link.text} - ${link.description}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {link.text}
                        </div>
                        <div className="text-sm text-gray-600">
                          {link.description}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOLinks;
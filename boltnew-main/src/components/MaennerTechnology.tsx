import React from 'react';
import { Zap, Target, ThermometerSun, Shield } from 'lucide-react';

const MaennerTechnology = () => {
  const technologies = [
    {
      icon: Target,
      title: "Alexandrit-Laser (755 nm)",
      description: "Optimal für helle bis mittlere Hauttypen mit dunklen Haaren. Besonders effektiv bei dichter männlicher Körperbehaarung."
    },
    {
      icon: Zap,
      title: "Diodenlaser (808 nm)",
      description: "Vielseitig einsetzbar für verschiedene Hauttypen. Tiefe Penetration für nachhaltige Ergebnisse bei starkem Haarwuchs."
    },
    {
      icon: ThermometerSun,
      title: "Kontaktkühlung",
      description: "Integrierte Kühlung schützt die Hautoberfläche und maximiert den Behandlungskomfort auch bei größeren Arealen."
    },
    {
      icon: Shield,
      title: "Angepasste Parameter",
      description: "Speziell kalibriert für männliche Haut und Haarstruktur – höhere Energien für dickere, dichtere Haare."
    }
  ];

  const features = [
    "Dual-Wellenlängen-System für optimale Ergebnisse",
    "Speziell angepasst für männliche Körperbehaarung",
    "Effektive Behandlung großer Areale wie Rücken",
    "NiSV-zertifizierte Anwendung für maximale Sicherheit"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Modernste Laser-Technologie für Männer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Speziell angepasste Laser-Technologien für die effektive Behandlung 
            männlicher Körperbehaarung – auch bei dichtem und starkem Haarwuchs. 
            Dual-Wellenlängen-System mit höheren Energien für optimale Ergebnisse.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <tech.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.title}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <img
              src="/Derma-Light-Laser.JPG"
              alt="Derma Light Laser-Technologie für professionelle Haarentfernung bei Männern"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* Technology Features */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Unsere Technologie-Vorteile für Männer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contextual Links */}
      <div className="text-center mt-16">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/beratung" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kostenlose Erstberatung vereinbaren
          </a>
          <a 
            href="/preise-haarentfernung" 
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Alle Preise ansehen
          </a>
        </div>
      </div>
    </section>
  );
};

export default MaennerTechnology;
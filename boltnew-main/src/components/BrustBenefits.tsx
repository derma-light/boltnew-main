import React from 'react';
import { Target, Shield, Sparkles, Eye, Heart, Clock } from 'lucide-react';

const BrustBenefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Langfristige Reduktion sichtbarer, dunkler Härchen",
      description: "Gezielte Behandlung für nachhaltige Ergebnisse"
    },
    {
      icon: Shield,
      title: "Weniger Reizungen durch Zupfen oder häufige Rasur",
      description: "Schonendere Alternative zu mechanischen Methoden"
    },
    {
      icon: Sparkles,
      title: "Sauberere Hautstruktur",
      description: "Weniger Pickelchen / Follikulitis durch reduzierte Irritation"
    },
    {
      icon: Eye,
      title: "Diskretion & planbare kurze Sitzungen",
      description: "Professionelle, diskrete Behandlung in kurzer Zeit"
    },
    {
      icon: Heart,
      title: "Komfortsteigerung beim Tragen ausgeschnittener Kleidung",
      description: "Mehr Selbstvertrauen und Wohlbefinden"
    },
    {
      icon: Clock,
      title: "Geringerer Pflegeaufwand im Alltag",
      description: "Weniger Zeit für tägliche Haarentfernung"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vorteile
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle Laser-Haarentfernung für den sensiblen Brustbereich.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-8 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
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

export default BrustBenefits;
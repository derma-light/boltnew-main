import React from 'react';
import { Target, Maximize, Star, Sparkles, Heart } from 'lucide-react';

const BikinizoneZones = () => {
  const zones = [
    {
      icon: Target,
      title: "Klassische Bikinilinie",
      description: "Seitlicher Rand entlang der Unterwäsche"
    },
    {
      icon: Maximize,
      title: "Erweiterte Bikinizone",
      description: "Leicht weiter nach innen/oben"
    },
    {
      icon: Star,
      title: "Brazilian",
      description: "Größerer Anteil vorderer Bereich, definierte Restform optional"
    },
    {
      icon: Sparkles,
      title: "Komplett / \"Hollywood\"",
      description: "Vollständige Entfernung – nur nach individueller Eignung"
    },
    {
      icon: Heart,
      title: "Pofalte",
      description: "Bei Bedarf kombinierbar"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Behandlungszonen
            </h2>
            <p className="text-xl text-gray-600">
              Individuelle Anpassung je nach Wunsch und Komfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {zones.map((zone, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <zone.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {zone.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {zone.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <p className="text-gray-700 italic">
              *Der konkrete Umfang wird diskret im Beratungsgespräch abgestimmt. 
              Fokus: Komfort, Hygiene & klare Absprachen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikinizoneZones;
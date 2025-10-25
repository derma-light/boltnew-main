import React from 'react';
import { Target, Maximize, Star, Sparkles } from 'lucide-react';

const IntimbereichZones = () => {
  const zones = [
    {
      icon: Target,
      title: "Bikinilinie klassisch",
      description: "Traditionelle Behandlung entlang der Bikinizone"
    },
    {
      icon: Maximize,
      title: "Erweiterte Bikinizone / Brazilian",
      description: "Äußere Bereiche mit erweiterten Behandlungsoptionen"
    },
    {
      icon: Star,
      title: "Kompletter Intimbereich",
      description: "Inkl. Labien / äußere Genitalregion – nur nach individueller Eignung"
    },
    {
      icon: Sparkles,
      title: "Pofalte",
      description: "Separat buchbar als zusätzliche Behandlungszone"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
              Die genaue Zone wird im Beratungsgespräch definiert. Grenzen & Komfort stehen immer im Vordergrund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntimbereichZones;
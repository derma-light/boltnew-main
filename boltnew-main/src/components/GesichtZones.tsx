import React from 'react';
import { Target, Circle, Square, Triangle, Hexagon } from 'lucide-react';

const GesichtZones = () => {
  const zones = [
    {
      icon: Target,
      title: "Oberlippe",
      description: "Präzise Behandlung feiner Härchen über der Oberlippe"
    },
    {
      icon: Circle,
      title: "Kinn",
      description: "Gezielte Reduktion von Kinnhaaren"
    },
    {
      icon: Square,
      title: "Wangen",
      description: "Behandlung seitlicher Gesichtsbereiche"
    },
    {
      icon: Triangle,
      title: "Nasenbereich",
      description: "Ausgewählte, geeignete Areale"
    },
    {
      icon: Hexagon,
      title: "Bart-/Koteletten-Zone",
      description: "Bei individueller Eignung"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Zielbereiche im Gesicht
            </h2>
            <p className="text-xl text-gray-600">
              Individuelle Behandlung verschiedener Gesichtsbereiche.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {zones.slice(0, 3).map((zone, index) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            {zones.slice(3).map((zone, index) => (
              <div 
                key={index + 3} 
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
              *Wir klären in der Beratung, welche Teilareale individuell sinnvoll und geeignet sind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GesichtZones;
import React from 'react';
import { Target, Heart, ArrowUp } from 'lucide-react';

const BrustZones = () => {
  const zones = [
    {
      icon: Target,
      title: "Areola",
      description: "Periareolarer Kranz einzelner Haare"
    },
    {
      icon: Heart,
      title: "Bereich zwischen den Brüsten",
      description: "Sternum / Dekolleté-Linie"
    },
    {
      icon: ArrowUp,
      title: "Oberer Bauchansatz",
      description: "Übergang zum Brustbein"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Zonen & Besonderheiten
            </h2>
            <p className="text-xl text-gray-600">
              Typische Unterteilung der Behandlungsbereiche
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

          <div className="bg-blue-50 rounded-xl p-8">
            <p className="text-gray-700 leading-relaxed">
              Die Haut kann empfindlich sein; die Areola besitzt mehr Melanin als umliegende Haut. 
              Dadurch ist eine korrekte Parameterwahl (Energie, Pulsdauer, ggf. Kontaktkühlung) wichtig, 
              um Effektivität & Hautschonung auszubalancieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrustZones;
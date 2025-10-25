import React from 'react';
import { Dna, Activity, Clock } from 'lucide-react';

const BauchCauses = () => {
  const causes = [
    {
      icon: Dna,
      title: "Genetik",
      description: "Dichte/dunkle Körperbehaarung kann familiär gehäuft auftreten."
    },
    {
      icon: Activity,
      title: "Hormonelle Faktoren",
      description: "Z. B. erhöhte Androgensensitivität, PCOS, Zyklus-/Menopause-bedingte Veränderungen."
    },
    {
      icon: Clock,
      title: "Alter",
      description: "Verschiebungen im Hormonhaushalt können Muster und Dichte verändern."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Warum entstehen Haare am Bauch?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Leichte Behaarung am Bauch ist normal. Wahrnehmbar störend sind häufig dunklere Härchen in einer Linie 
              unterhalb des Nabels oder rund um den Bauchnabel. Mögliche Einflüsse:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {causes.map((cause, index) => (
              <div 
                key={index} 
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <cause.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {cause.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {cause.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BauchCauses;
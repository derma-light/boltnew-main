import React from 'react';
import { Calendar, Sun, Droplets, Thermometer, Shield, Sparkles } from 'lucide-react';

const BeinePreparation = () => {
  const beforeCare = [
    {
      icon: Calendar,
      text: "24–48h vor dem Termin glatt rasieren (keine Epilation/Waxing min. 4 Wochen vorher)"
    },
    {
      icon: Sun,
      text: "2 Wochen starke UV-/Sonnenexposition meiden (kein frischer Sonnenbrand)"
    },
    {
      icon: Droplets,
      text: "Keine Selbstbräuner vor der Sitzung"
    }
  ];

  const afterCare = [
    {
      icon: Thermometer,
      text: "24h keine Sauna, kein intensiver Sport, kein heißes Vollbad"
    },
    {
      icon: Shield,
      text: "Keine aggressiven Peelings / Säuren direkt danach"
    },
    {
      icon: Sparkles,
      text: "Bei Bedarf kühlen & milde, nicht-okklusive Pflege nutzen"
    },
    {
      icon: Sun,
      text: "Konsequent Sonnenschutz (LSF) auf exponierte Areale bei UV-Exposition"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vor- & Nachbereitung
            </h2>
            <p className="text-xl text-gray-600">
              Optimale Vorbereitung und Nachsorge für beste Behandlungsergebnisse.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Before Care */}
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Vorbereitung</h3>
              <div className="space-y-6">
                <h4 className="font-medium text-gray-900">Vor der Behandlung:</h4>
                <div className="space-y-4">
                  {beforeCare.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <item.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* After Care */}
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Nachsorge</h3>
              <div className="space-y-6">
                <h4 className="font-medium text-gray-900">Nach der Behandlung:</h4>
                <div className="space-y-4">
                  {afterCare.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <item.icon className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeinePreparation;
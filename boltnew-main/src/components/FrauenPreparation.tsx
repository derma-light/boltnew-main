import React from 'react';
import { AlertTriangle, Sun, Scissors, Shield, Heart, Clock } from 'lucide-react';

const FrauenPreparation = () => {
  const beforeTreatment = [
    {
      icon: Scissors,
      title: "24-48 h vorher rasieren",
      description: "Keine Epilation/Wachs ≥ 3-4 Wochen"
    },
    {
      icon: Sun,
      title: "Starke Sonne/Solarium meiden",
      description: "1-2 Wochen vor der Behandlung"
    },
    {
      icon: AlertTriangle,
      title: "Keine starken Peelings/Retinoide",
      description: "3-5 Tage vorher aussetzen"
    },
    {
      icon: Heart,
      title: "Fotosensibilisierende Medikamente",
      description: "Vorab angeben"
    }
  ];

  const afterTreatment = [
    {
      icon: Sun,
      title: "UV-Schutz (LSF) anwenden",
      description: "Bei Exposition"
    },
    {
      icon: Clock,
      title: "24 h keine Sauna/heiße Bäder",
      description: "Starke Reibung vermeiden"
    },
    {
      icon: Heart,
      title: "Beruhigende Pflege nutzen",
      description: "Nicht-okklusive Produkte"
    },
    {
      icon: AlertTriangle,
      title: "Peelings/Retinoide aussetzen",
      description: "3-5 Tage nach der Behandlung"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vorbereitung & Nachpflege
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wichtige Hinweise für optimale Ergebnisse und schnelle Regeneration nach der Laser-Haarentfernung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vor der Behandlung */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Vor dem Termin</h3>
            </div>
            
            <div className="space-y-6">
              {beforeTreatment.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nach der Behandlung */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Nach dem Termin</h3>
            </div>
            
            <div className="space-y-6">
              {afterTreatment.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wichtiger Hinweis */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Wichtiger Hinweis</h4>
              <p className="text-gray-700">
                Während der Schwangerschaft führen wir keine Behandlung durch. Häufig normalisiert sich der Haarwuchs 
                durch hormonelle Umstellungen im Anschluss wieder. Bei Fragen zur Eignung beraten wir Sie gerne persönlich.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="/beratung" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Persönliche Beratung vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
};

export default FrauenPreparation;

import React from 'react';
import { Calendar, Droplets, Sun, Shield, Thermometer, Eye, AlertCircle } from 'lucide-react';

const BrustPreparation = () => {
  const beforeCare = [
    {
      icon: Calendar,
      text: "24-48h vorher die Bereiche glatt rasieren (nicht wachsen / nicht epilieren)"
    },
    {
      icon: Droplets,
      text: "Keine intensiven Säure-/Retinolprodukte direkt am Vortag oder Behandlungstag"
    },
    {
      icon: Sun,
      text: "Keine frisch gebräunte oder irritierte Haut (Sonne / Selbstbräuner meiden)"
    }
  ];

  const afterCare = [
    {
      icon: Thermometer,
      text: "24h keine aggressiven Peelings, kein intensives Reiben"
    },
    {
      icon: Shield,
      text: "Leichte Rötung oder perifollikuläres Erythem sind normal und klingen meist schnell ab"
    },
    {
      icon: Sun,
      text: "Sonnenschutz (LSF) bei exponiertem Dekolleté konsequent anwenden"
    },
    {
      icon: AlertCircle,
      text: "Ungewöhnliche Bläschen, anhaltende Schwellung oder starke Krusten → Rücksprache"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vor- & Nachbereitung
            </h2>
            <p className="text-xl text-gray-600">
              Optimale Vorbereitung und Nachsorge für empfindliche Brustbereiche.
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

export default BrustPreparation;
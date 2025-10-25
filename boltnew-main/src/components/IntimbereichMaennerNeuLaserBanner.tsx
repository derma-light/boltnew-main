import React from 'react';
import { Shield, Zap, Target, Clock } from 'lucide-react';

const IntimbereichMaennerNeuLaserBanner = () => {
  const features = [
    {
      icon: Shield,
      title: "Diskrete Behandlung",
      description: "Geschützte Atmosphäre mit geschultem Fachpersonal"
    },
    {
      icon: Zap,
      title: "Moderne Technologie",
      description: "Alexandrit-Laser mit integrierter Kontaktkühlung"
    },
    {
      icon: Target,
      title: "Individuelle Anpassung",
      description: "Parameter speziell für männliche Haut und Haarstruktur"
    },
    {
      icon: Clock,
      title: "Effiziente Behandlung",
      description: "25-40 Minuten pro Sitzung, je nach Umfang"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Laser Haarentfernung Brust & Bauch
        </h3>
        <p className="text-gray-600">
          Professionelle Behandlung für Männer in Hamburg
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <feature.icon className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-xs">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-blue-200">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            Individuelle Beratung und Behandlung
          </p>
          <a 
            href="/beratung"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Beratung vereinbaren
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntimbereichMaennerNeuLaserBanner;

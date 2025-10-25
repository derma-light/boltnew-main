import React from 'react';
import { Zap, Shield, Target, CheckCircle } from 'lucide-react';

const BikinizoneWhy = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Dual 755 & 808 nm",
      description: "Optimale Kombination: 808 nm für dichte Bereiche, 755 nm für feinere Resthaare in späteren Sitzungen."
    },
    {
      icon: Shield,
      title: "Hautschonender Ansatz",
      description: "Kontaktkühlung & passende Pulsparameter zur Reduktion von Überhitzung und Irritation."
    },
    {
      icon: Target,
      title: "Planbare Ergebnisse",
      description: "Serienprotokoll & dokumentierte Anpassung – nachvollziehbarer Fortschritt."
    },
    {
      icon: CheckCircle,
      title: "Weniger Rasurirritationen",
      description: "Fortschreitende Haarreduktion kann Stoppeln, eingewachsene Haare und Rasurbrand verringern."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Warum Derma Light in der Bikinizone?
            </h2>
            <p className="text-xl text-gray-600">
              Gezielte Anpassung an unterschiedliche Haarstärken in Randbereichen & zentraleren Zonen – 
              für weniger Rasurfrequenz und reduziertes Risiko von Irritationen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="group p-8 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <advantage.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
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

export default BikinizoneWhy;
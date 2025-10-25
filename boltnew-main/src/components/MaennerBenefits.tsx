import React from 'react';
import { Target, Clock, Shield, Zap, CheckCircle, TrendingUp } from 'lucide-react';

const MaennerBenefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Definierter Look",
      description: "Präzise Haarentfernung für einen gepflegten, maskulinen Auftritt – ob im Business oder beim Sport."
    },
    {
      icon: Clock,
      title: "Weniger Pflegeaufwand",
      description: "Keine tägliche Rasur mehr an Rücken oder Brust – mehr Zeit für wichtigere Dinge."
    },
    {
      icon: Shield,
      title: "Keine Rasurirritationen",
      description: "Schluss mit Rasurbrand, eingewachsenen Haaren und Hautreizungen – besonders am Rücken."
    },
    {
      icon: Zap,
      title: "Sportlicher Vorteil",
      description: "Weniger Reibung beim Sport, bessere Hygiene und ein athletischerer Look."
    },
    {
      icon: CheckCircle,
      title: "Professioneller Eindruck",
      description: "Gepflegte Erscheinung im Beruf und Alltag – Selbstvertrauen durch makelloses Aussehen."
    },
    {
      icon: TrendingUp,
      title: "Langfristige Lösung",
      description: "Dauerhafte Haarreduktion statt ständiger Rasur – eine Investition in Ihr Wohlbefinden."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ihre Vorteile der Laser-Haarentfernung für Männer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie die Vorteile professioneller Laser-Haarentfernung für den modernen Mann. 
            Speziell entwickelt für männliche Körperbehaarung mit höheren Energien und präziser Technologie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-8 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
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

export default MaennerBenefits;
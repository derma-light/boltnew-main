import React from 'react';
import { UserCheck, Settings, Zap, Shield, Calendar } from 'lucide-react';

const ArmeProcess = () => {
  const processSteps = [
    {
      icon: UserCheck,
      title: "Beratung & Hautanalyse",
      description: "Einschätzung von Haardichte und Hauttyp"
    },
    {
      icon: Settings,
      title: "Vorbereitung",
      description: "Areale sind rasiert und produktfrei; Abdecken von Muttermalen"
    },
    {
      icon: Zap,
      title: "Einstellung",
      description: "Energie & Puls passend zu Unter- oder Oberarm"
    },
    {
      icon: Shield,
      title: "Laserimpulse",
      description: "Überlappungsarme, gleichmäßige Abdeckung großflächiger Bereiche"
    },
    {
      icon: Calendar,
      title: "Kühlung & Hinweise",
      description: "Pflege, UV-Schutz bei Exposition, Reibung kurz meiden"
    }
  ];

  const sessionInfo = [
    "Typischer Rahmen: ca. 6–8 Sitzungen",
    "Intervalle anfangs 4–6 Wochen, später 6–8 Wochen",
    "Unterarme reagieren oft etwas schneller als Oberarme",
    "Pro Termin ca. 15-18% Haarreduktion möglich",
    "Sichtbares Ausfallen nach 1-2 Wochen",
    "Nach 3 Sitzungen bis zu 40% weniger Haare möglich"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ablauf der Behandlung
          </h2>
          <p className="text-xl text-gray-600">
            Professionelle Laser-Haarentfernung für Unter- und Oberarme in 5 Schritten.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-sm font-bold text-blue-600 mb-2">Schritt {index + 1}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sessions & Intervals */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Sitzungen & Intervalle
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sessionInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{info}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="/beratung" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Kostenlose Erstberatung vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArmeProcess;
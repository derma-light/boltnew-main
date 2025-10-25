import React from 'react';
import { UserCheck, Settings, Zap, Shield, Calendar } from 'lucide-react';

const FrauenProcess = () => {
  const processSteps = [
    {
      icon: UserCheck,
      title: "Beratung & Analyse",
      description: "Hauttyp, Haarstruktur, Kontraindikationen"
    },
    {
      icon: Settings,
      title: "Vorbereitung",
      description: "Areal rasiert, sauber, produktfrei"
    },
    {
      icon: Zap,
      title: "Einstellung",
      description: "Energie, Puls, Spotgröße individuell"
    },
    {
      icon: Shield,
      title: "Laserimpulse",
      description: "Gleichmäßige Abdeckung mit Kontaktkühlung"
    },
    {
      icon: Calendar,
      title: "Nachsorge",
      description: "Kühlung, Pflege, UV-Schutz"
    }
  ];

  const sessionInfo = [
    "6-8 Sitzungen (Durchschnitt)",
    "4-8 Wochen Abstand",
    "1-2 Wochen Shedding",
    "Individuelle Anpassung an Ihren Haarwachstumszyklus"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ablauf, Sitzungen & Intervalle
          </h2>
          <p className="text-xl text-gray-600">
            Detaillierter Behandlungsablauf mit allen wichtigen Informationen zu Sitzungen und Intervallen.
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

        {/* Session Information */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Behandlungsablauf & Sitzungen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sessionInfo.map((info, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{info}</span>
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

export default FrauenProcess;
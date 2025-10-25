import React from 'react';
import { UserCheck, Search, Settings, Zap, Shield, Heart } from 'lucide-react';

const BeineProcess = () => {
  const processSteps = [
    {
      icon: UserCheck,
      title: "Kurzberatung & Haut-/Haartyp-Check",
      description: "Kontraindikationen ausschließen"
    },
    {
      icon: Search,
      title: "Kontrolle",
      description: "Wurden die Beine innerhalb der letzten 24–48h glatt rasiert?"
    },
    {
      icon: Settings,
      title: "Optional: Unterteilung",
      description: "Behandlungszonen (Unterschenkel / Oberschenkel / Knie)"
    },
    {
      icon: Zap,
      title: "Parameter-Festlegung",
      description: "Fluenz, Puls, Spotgröße basierend auf Hauttyp & Haar"
    },
    {
      icon: Shield,
      title: "Präzise Behandlung",
      description: "Mit Kontakt- oder Soft-Kühlung für maximalen Komfort"
    },
    {
      icon: Heart,
      title: "Kurze Nachpflege",
      description: "Beruhigen, Hinweise für die nächsten 24–48h"
    }
  ];

  const sessionInfo = [
    "Typischer Rahmen: ca. 6–8 Sitzungen für eine deutliche Reduktion",
    "Unterschenkel reagieren oft etwas schneller als Oberschenkel",
    "Anfangs liegen die Abstände bei ca. 4–6 Wochen, später verlängern sie sich",
    "Auffrischungen (Maintenance) in größeren Intervallen sind optional"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ablauf einer Sitzung
          </h2>
          <p className="text-xl text-gray-600">
            Professionelle Laser-Haarentfernung für Beine in 6 strukturierten Schritten.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Sitzungen & Intervalle
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

export default BeineProcess;
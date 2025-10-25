import React from 'react';
import { UserCheck, TestTube, Scissors, Zap, Snowflake } from 'lucide-react';

const IntimbereichProcess = () => {
  const processSteps = [
    {
      icon: UserCheck,
      title: "Anamnese, Haut- & Haartyp-Analyse",
      description: "Individuelle Einschätzung und Beratung"
    },
    {
      icon: TestTube,
      title: "Optionaler Patch-Test",
      description: "Bei empfindlicher oder dunklerer Haut"
    },
    {
      icon: Scissors,
      title: "Rasierte, saubere Haut",
      description: "24–48 h vorher vorbereitet"
    },
    {
      icon: Zap,
      title: "Laserapplikation",
      description: "Mit angepassten Parametern (755 oder 808 nm)"
    },
    {
      icon: Snowflake,
      title: "Kurzzeitige Kühlung & Pflegehinweise",
      description: "Beruhigung und Nachsorge-Informationen"
    }
  ];

  const sessionInfo = [
    "Meist 6–10 Sitzungen im Abstand von etwa 4–8 Wochen",
    "Hormonelle Faktoren (z. B. PCOS), Haardichte und individuelle Regeneration beeinflussen die Anzahl",
    "Feine Resthaare werden in späteren Sitzungen oft bevorzugt mit 755 nm adressiert"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ablauf der Behandlung
          </h2>
          <p className="text-xl text-gray-600">
            Professionelle und diskrete Behandlung in 5 strukturierten Schritten.
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

        {/* Sessions Info */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Wie viele Sitzungen?
            </h3>
            <div className="space-y-4">
              {sessionInfo.map((info, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{info}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Medical Note */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <p className="text-gray-700 italic">
              Leichtes peripiläres Erythem (kleine Rötung um Haaröffnungen) ist normal und erwünscht.
            </p>
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

export default IntimbereichProcess;
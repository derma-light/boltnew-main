import React from 'react';
import { UserCheck, Settings, Zap, Shield, Calendar } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Beratung & Analyse",
      description: "Hauttyp, Haarstruktur, Kontraindikationen"
    },
    {
      icon: Settings,
      title: "Parametrierung",
      description: "Energie / Puls / Spot abgestimmt"
    },
    {
      icon: Zap,
      title: "Laserbehandlung",
      description: "Kurze Lichtimpulse, leichtes Wärmegefühl"
    },
    {
      icon: Shield,
      title: "Kühlung & Hinweise",
      description: "Pflege & Lichtschutz"
    },
    {
      icon: Calendar,
      title: "Folgesitzungen",
      description: "4–6 Wochen Abstand"
    }
  ];

  const beforeCare = [
    "24 h vorher rasieren (kein Epilieren/Waxing 3 Wochen)",
    "Keine starke Sonne / Solarium 1–2 Wochen",
    "Kein Selbstbräuner & keine starken Peelings 3–5 Tage",
    "Areale sauber & produktfrei"
  ];

  const afterCare = [
    "SPF 50 min. 2 Wochen",
    "Keine Sauna / intensive Hitze 24 h",
    "Keine Peelings / Retinol 3–5 Tage",
    "Nicht kratzen oder reizen"
  ];

  return (
    <section id="beratung" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            So läuft Ihre Behandlung ab
          </h2>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
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

        {/* Care Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Vorbereitung der Laser-Haarentfernung</h3>
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Vor der Behandlung:</h4>
              <ul className="space-y-3">
                {beforeCare.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Nachsorge nach Laser-Haarentfernung</h3>
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Nach der Behandlung:</h4>
              <ul className="space-y-3">
                {afterCare.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
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

export default Process;
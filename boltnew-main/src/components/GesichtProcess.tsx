import React from 'react';
import { UserCheck, Sparkles, Settings, Zap, Snowflake } from 'lucide-react';

const GesichtProcess = () => {
  const processSteps = [
    {
      icon: UserCheck,
      title: "Beratung & Hautanalyse",
      description: "Einschätzung von Haardichte, Pigment & Hautempfindlichkeit"
    },
    {
      icon: Sparkles,
      title: "Vorbereitung",
      description: "Haut sauber, Make-up entfernt; Abdecken von Muttermalen bei Bedarf"
    },
    {
      icon: Settings,
      title: "Einstellung",
      description: "Energie & Puls angepasst an Areal (Oberlippe, Kinn, Wangen)"
    },
    {
      icon: Zap,
      title: "Laserimpulse",
      description: "Punktgenaue Applikation mit gleichmäßiger Abdeckung"
    },
    {
      icon: Snowflake,
      title: "Kühlung & Hinweise",
      description: "Beruhigende Pflege, UV-Schutz bei Exposition"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ablauf deiner Behandlung
          </h2>
          <p className="text-xl text-gray-600">
            Professionelle Laser-Haarentfernung im Gesicht in 5 strukturierten Schritten.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto mb-16">
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

        {/* Medical Note */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <p className="text-gray-700 italic">
              *Leichte Rötung ist normal und klingt meist rasch ab.
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

export default GesichtProcess;
import React from 'react';
import { UserCheck, Eye, Settings, Zap, Shield, Calendar } from 'lucide-react';

const RueckenProcess = () => {
  const processSteps = [
    {
      icon: UserCheck,
      title: "Persönliche Beratung",
      description: "Ausführliches Gespräch über Ihre Wünsche und Analyse der Rückenbehaarung"
    },
    {
      icon: Eye,
      title: "Hautanalyse",
      description: "Professionelle Einschätzung von Hauttyp und Haarstruktur für optimale Parameter"
    },
    {
      icon: Settings,
      title: "Individuelle Einstellung",
      description: "Anpassung der Laser-Parameter speziell für große Flächen und männliche Haarstruktur"
    },
    {
      icon: Zap,
      title: "Effiziente Behandlung",
      description: "Systematische Behandlung des gesamten Rückens mit modernster Laser-Technologie"
    },
    {
      icon: Shield,
      title: "Nachsorge",
      description: "Beruhigende Pflege und ausführliche Hinweise für die optimale Heilung"
    },
    {
      icon: Calendar,
      title: "Folgesitzungen",
      description: "Regelmäßige Termine im optimalen Abstand für beste Langzeitergebnisse"
    }
  ];

  const sessionInfo = [
    "Durchschnittlich 8-12 Sitzungen für optimale Ergebnisse",
    "Intervalle von 6-8 Wochen zwischen den Behandlungen",
    "Rückenbehaarung ist oft sehr dicht und erfordert mehr Sitzungen",
    "Erste sichtbare Ergebnisse meist nach 3-4 Behandlungen",
    "Behandlungsdauer: 30-45 Minuten pro Sitzung"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Der Ablauf der Behandlung
          </h2>
          <p className="text-xl text-gray-600">
            Die Behandlung zur dauerhaften Haarentfernung auf dem Rücken beginnt immer mit einer gründlichen Beratung und einer Analyse des Haut- und Haartyps. Dies ist wichtig, um den geeigneten Laser oder das passende IPL-Gerät auszuwählen und sicherzustellen, dass die Behandlung effektiv und sicher durchgeführt wird.
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

        {/* Laser Process Explanation */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Wie funktioniert die Laserbehandlung?
            </h3>
            <p className="text-gray-700 leading-relaxed text-center">
              Während der Behandlung werden die Lichtimpulse des Lasers gezielt auf die Haarfollikel gerichtet. 
              Das Licht wird von dem Melanin in den Haaren absorbiert und in Wärme umgewandelt, die schließlich 
              die Haarwurzel verödet. Dieser Prozess verhindert, dass das Haar nachwächst. Da Haare in unterschiedlichen 
              Wachstumsphasen sind und der Laser nur die Haare in der aktiven Wachstumsphase effektiv veröden kann, 
              sind in der Regel mehrere Sitzungen notwendig, um das gewünschte Ergebnis zu erreichen.
            </p>
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
            Kostenlose Beratung vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
};

export default RueckenProcess;
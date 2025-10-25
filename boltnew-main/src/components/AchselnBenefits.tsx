import React from 'react';
import { Droplets, Shield, Clock, Target, CheckCircle, Sparkles } from 'lucide-react';

const AchselnBenefits = () => {
  const benefits = [
    {
      icon: Droplets,
      title: "Mehr Hygiene",
      description: "Weniger Haare bedeuten weniger Oberfläche für Bakterienanhaftung – Schweißgeruch kann subjektiv geringer wahrgenommen werden."
    },
    {
      icon: Shield,
      title: "Schonend zur Haut",
      description: "Kein tägliches Klingenreiben. Reizungen, kleine Schnitte oder dunkle Schatten nach dem Rasieren reduzieren sich deutlich."
    },
    {
      icon: Clock,
      title: "Schnelle Termine",
      description: "Der Achselbereich ist kompakt: Laserzeit nur wenige Minuten – ideal in der Mittagspause oder vor dem Training."
    },
    {
      icon: Target,
      title: "Langanhaltende Reduktion",
      description: "Zyklusgerechte Sitzungen stören die Wachstumsphase der Haarfollikel nachhaltig – sichtbarer Unterschied schon nach wenigen Behandlungen."
    },
    {
      icon: CheckCircle,
      title: "Weniger eingewachsene Haare",
      description: "Durch verminderte mechanische Reizung und fehlende Nachwuchsspitzen sinkt die Wahrscheinlichkeit von Einwachsungen."
    },
    {
      icon: Sparkles,
      title: "Glatter Look",
      description: "Kein „5-Uhr-Schatten\" mehr: nach dem Ausfallen wirken die Achseln gleichmäßiger und heller."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vorteile der Laser-Haarentfernung an den Achseln
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Warum Laser-Haarentfernung Achseln die beste Lösung für dauerhaft glatte Achseln ist.
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

export default AchselnBenefits;
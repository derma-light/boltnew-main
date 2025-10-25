import React from 'react';
import { Droplets, Shield, Clock, Target, CheckCircle, Heart } from 'lucide-react';

const RueckenBenefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Tragen Sie kurzärmelig wann immer sie möchten",
      description: "Langfristige Ergebnisse: Im Vergleich zu herkömmlichen Methoden wie Rasieren oder Wachsen ist die Laserhaarentfernung eine dauerhafte Lösung. Die behandelten Haarfollikel werden verödet, sodass sie in den meisten Fällen nicht mehr nachwachsen."
    },
    {
      icon: Shield,
      title: "Weniger Hautirritationen durch das wiederholte Rasieren",
      description: "Präzision: Der Laser wirkt gezielt auf die Haarfollikel, ohne die umliegende Haut zu schädigen. Dies macht die Methode besonders sicher und schonend."
    },
    {
      icon: Clock,
      title: "Die Wirkung von Selbstbräunern hält länger an",
      description: "Zeitersparnis: Die Zeit, die für regelmäßiges Rasieren oder Waxing aufgewendet werden muss, entfällt. Nach einigen Behandlungen gehört der Haarwuchs auf dem Rücken der Vergangenheit an."
    },
    {
      icon: Droplets,
      title: "Schnelle, sichtbare Ergebnisse",
      description: "Schmerzreduziert im Vergleich zu anderen Methoden: Im Gegensatz zum Wachsen oder Epilieren empfinden viele die Laserbehandlung als weniger schmerzhaft. Moderne Geräte verfügen über Kühlsysteme, die den Komfort während der Behandlung erhöhen."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            4 Vorteile der Laserbehandlung für den Rücken
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie die Vorteile professioneller Laser-Haarentfernung am Rücken für den modernen Mann.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 border border-gray-100"
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

export default RueckenBenefits;
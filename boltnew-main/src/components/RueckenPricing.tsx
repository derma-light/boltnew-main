import React from 'react';
import { Phone, Calendar, Euro, CheckCircle } from 'lucide-react';

const RueckenPricing = () => {
  const pricingFeatures = [
    "Individuelle Preisgestaltung je nach Behandlungsumfang",
    "Transparente Kostenaufstellung ohne versteckte Gebühren",
    "Paketpreise für komplette Behandlungsserien verfügbar",
    "Kostenlose Erstberatung und Hautanalyse",
    "Flexible Zahlungsoptionen verfügbar",
    "Keine Vertragsbindung oder Mindestlaufzeit"
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: "Telefonische Beratung",
      description: "Rufen Sie uns an für eine unverbindliche telefonische Erstberatung",
      action: "040 55435357",
      link: "tel:+494055435357"
    },
    {
      icon: Calendar,
      title: "Persönlicher Termin",
      description: "Vereinbaren Sie einen unverbindlichen Beratungstermin vor Ort",
      action: "Termin buchen",
      link: "#beratung"
    },
    {
      icon: Euro,
      title: "Kostenvoranschlag",
      description: "Erhalten Sie einen individuellen Kostenvoranschlag für Ihre Rückenbehandlung",
      action: "Angebot anfordern",
      link: "#beratung"
    }
  ];

  return (
    <section id="preise" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Preise & Beratung
            </h2>
            <p className="text-xl text-gray-600">
              Individuelle Preisgestaltung für Ihre Rückenbehandlung.
            </p>
          </div>

          {/* Pricing Info */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Warum individuelle Preise für die Rückenbehandlung?
            </h3>
            <p className="text-gray-700 text-center mb-8 leading-relaxed">
              Die Kosten für eine Laser-Haarentfernung am Rücken variieren je nach Größe der zu behandelnden 
              Fläche, Haardichte und individuellen Bedürfnissen. Der Rücken ist eine der größeren Behandlungszonen, 
              daher erstellen wir Ihnen gerne ein maßgeschneidertes Angebot nach einer persönlichen Beratung.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pricingFeatures.map((feature, index) => (
                <div key={index} className="flex items-center p-3 bg-white rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactOptions.map((option, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {option.description}
                </p>
                <a 
                  href={option.link}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  {option.action}
                </a>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="text-center bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Bereit für Ihre Rückenbehandlung?
            </h3>
            <p className="text-gray-300 mb-6">
              Vereinbaren Sie noch heute Ihre kostenlose Erstberatung und erfahren Sie mehr über unsere Rücken-Haarentfernung.
            </p>
            <a 
              href="/beratung" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Jetzt Beratungstermin vereinbaren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RueckenPricing;
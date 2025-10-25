import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Zap, Shield, Euro, UserCheck, Award } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Calendar,
      title: "Langjährige Erfahrung",
      description: "Seit 2005 spezialisiert, etablierte Abläufe"
    },
    {
      icon: Zap,
      title: "Echter Alexandrit-Laser",
      description: "755 nm, hohe Selektivität für pigmentierte Haarfollikel"
    },
    {
      icon: Shield,
      title: "Präzision & Sicherheit",
      description: "Individuelle Parameter + Kontaktkühlung"
    },
    {
      icon: Euro,
      title: "Transparente Preise",
      description: "Einzelpreise statt Paketdruck"
    },
    {
      icon: UserCheck,
      title: "Persönliche Analyse",
      description: "Haut- & Haarcheck, Erwartungsmanagement"
    },
    {
      icon: Award,
      title: "Zertifiziert & Bewertet",
      description: "NiSV & verifizierte Kundenstimmen"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ihre Vorteile bei Derma Light
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle Laser-Haarentfernung Hamburg: Kompetenz, Präzision & Transparenz für nachhaltige Ergebnisse.
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

        {/* Internal Links Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Laser-Haarentfernung Behandlungsbereiche in Hamburg
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link 
              to="/frauen" 
              className="group p-6 bg-pink-50 rounded-xl border border-pink-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300"
              title="Laser-Haarentfernung für Frauen - Alle Behandlungsbereiche"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-600">
                Behandlungen für Frauen
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Gesicht, Achseln, Bikinizone, Beine und mehr
              </p>
              <span className="text-pink-600 text-sm font-medium group-hover:underline">
                Alle Bereiche entdecken →
              </span>
            </Link>
            <Link 
              to="/maenner" 
              className="group p-6 bg-blue-50 rounded-xl border border-blue-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              title="Laser-Haarentfernung für Männer - Alle Behandlungsbereiche"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                Behandlungen für Männer
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Rücken, Brust, Intimbereich und mehr
              </p>
              <span className="text-blue-600 text-sm font-medium group-hover:underline">
                Alle Bereiche entdecken →
              </span>
            </Link>
          </div>
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

export default Benefits;
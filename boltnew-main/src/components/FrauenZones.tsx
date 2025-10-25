import React from 'react';
import { User, Heart, Zap, Target, Sparkles, Eye, Shield, Clock } from 'lucide-react';

const FrauenZones = () => {
  const zones = [
    {
      icon: Zap,
      title: "Achseln",
      description: "Schnell, effektiv & hautschonend",
      link: "/achseln",
      duration: "5-10 Min."
    },
    {
      icon: Clock,
      title: "Beine",
      description: "Unter- & Oberschenkel – weniger Rasur",
      link: "/beine",
      duration: "25-40 Min."
    },
    {
      icon: Sparkles,
      title: "Bikinizone",
      description: "Präzise & sensibel angepasst",
      link: "/bikinizone",
      duration: "15-30 Min."
    },
    {
      icon: Shield,
      title: "Intimbereich",
      description: "Diskret & routiniert",
      link: "/frauen/intimbereich",
      duration: "25-40 Min."
    },
    {
      icon: Eye,
      title: "Gesicht",
      description: "Oberlippe, Kinn, Wangen",
      link: "/gesicht",
      duration: "10-25 Min."
    },
    {
      icon: Target,
      title: "Arme",
      description: "Großflächig & gleichmäßig",
      link: "/arme",
      duration: "25-35 Min."
    },
    {
      icon: User,
      title: "Bauch",
      description: "Unterbauch & Nabelbereich",
      link: "/bauch",
      duration: "15-25 Min."
    },
    {
      icon: Heart,
      title: "Brust",
      description: "Diskrete, punktgenaue Reduktion",
      link: "/brust",
      duration: "10-20 Min."
    },
    {
      icon: Shield,
      title: "Po-Falte",
      description: "Mehr Komfort & Hygiene",
      link: "/bikinizone",
      duration: "10-15 Min."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Beliebte Zonen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Laser-Haarentfernung für Frauen in Hamburg: Alle wichtigen Körperbereiche von Gesicht bis Beine professionell und diskret behandelt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((zone, index) => (
            <a 
              key={index}
              href={zone.link}
              className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <zone.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {zone.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {zone.description}
              </p>
              <div className="flex items-center text-xs text-blue-600 font-medium">
                <Clock className="w-3 h-3 mr-1" />
                {zone.duration}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            Alle Behandlungen werden individuell an Ihren Hauttyp und Ihre Bedürfnisse angepasst.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrauenZones;
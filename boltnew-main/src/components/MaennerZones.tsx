import React from 'react';
import { Square, Heart, User, Shield, Scissors, Clock } from 'lucide-react';

const MaennerZones = () => {
  const zones = [
    {
      icon: Square,
      title: "Rücken",
      description: "Vollständige Rückenbehandlung",
      link: "/maenner/ruecken",
      duration: "30-45 Min."
    },
    {
      icon: Heart,
      title: "Brust",
      description: "Brustbereich und Dekolleté",
      link: "/maenner/brust",
      duration: "20-30 Min."
    },
    {
      icon: User,
      title: "Bauch",
      description: "Bauchbereich und Bauchlinie",
      link: "/maenner/bauch",
      duration: "15-25 Min."
    },
    {
      icon: Shield,
      title: "Intimbereich",
      description: "Diskrete, professionelle Behandlung",
      link: "/maenner/intimbereich",
      duration: "25-40 Min."
    },
    {
      icon: Scissors,
      title: "Nacken",
      description: "Nackenbereich und Haaransatz",
      link: "/maenner/nacken",
      duration: "10-15 Min."
    },
    {
      icon: Square,
      title: "Schultern",
      description: "Schulterbereich und Oberarme",
      link: "/maenner/schultern",
      duration: "20-30 Min."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Behandlungsbereiche für Männer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Laser-Haarentfernung Hamburg für Männer: Rücken, Brust, Intimbereich und weitere Bereiche professionell behandelt. 
            Speziell angepasst für männliche Körperbehaarung mit höheren Energien und präziser Technologie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default MaennerZones;
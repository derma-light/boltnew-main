import React from 'react';
import { Calendar, Sun, Droplets, Shield, Pill, Heart, Thermometer, Sparkles, Eye } from 'lucide-react';

const BikinizonePreparation = () => {
  const beforeCare = [
    {
      icon: Calendar,
      text: "24-48 h vorher sauber & gleichmäßig rasieren (kein Wachsen / Epilieren)"
    },
    {
      icon: Sun,
      text: "Keine intensive Sonne oder Solarium 1-2 Wochen davor"
    },
    {
      icon: Droplets,
      text: "Kein Selbstbräuner"
    },
    {
      icon: Shield,
      text: "Am Termin: keine fetthaltigen Cremes / Öle im Areal"
    },
    {
      icon: Pill,
      text: "Photosensibilisierende Medikamente vorher angeben"
    },
    {
      icon: Heart,
      text: "Eng anliegende, atmungsaktive Unterwäsche für danach bevorzugen"
    }
  ];

  const afterCare = [
    {
      icon: Thermometer,
      text: "Leichte Rötung / Wärmegefühl: normal, meist kurzzeitig"
    },
    {
      icon: Shield,
      text: "24-48 h: Keine Sauna, starkes Reiben oder sehr enge synthetische Kleidung"
    },
    {
      icon: Sparkles,
      text: "Sanfte Reinigung; keine Peelings oder aggressive Produkte für einige Tage"
    },
    {
      icon: Calendar,
      text: "Kein Wachsen / Epilieren – nur Rasur bis zur nächsten Sitzung"
    },
    {
      icon: Sun,
      text: "UV-Exposition minimieren; exponierte Randbereiche mit LSF 50 schützen"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vorbereitung & Nachsorge
            </h2>
            <p className="text-xl text-gray-600">
              Optimale Vor- und Nachbereitung für beste Behandlungsergebnisse in der sensiblen Bikinizone.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Before Care */}
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Vorbereitung</h3>
              <div className="space-y-6">
                <h4 className="font-medium text-gray-900">Vor der Behandlung:</h4>
                <div className="space-y-4">
                  {beforeCare.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <item.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* After Care */}
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Nachsorge</h3>
              <div className="space-y-6">
                <h4 className="font-medium text-gray-900">Nach der Behandlung:</h4>
                <div className="space-y-4">
                  {afterCare.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <item.icon className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikinizonePreparation;
import React from 'react';
import { ArrowRight, Clock, Shield, Zap, Star, Award, Target } from 'lucide-react';

const BikinizoneHero = () => {
  const benefitElements = [
    { icon: Clock, text: "15-30 Min. pro Sitzung (Umfangsabhängig)" },
    { icon: Shield, text: "Reduzierte Stoppeln & eingewachsene Haare" },
    { icon: Zap, text: "Kontaktkühlung für hautschonende Impulse" }
  ];

  const trustElements = [
    { icon: Star, text: "⭐️⭐️⭐️⭐️⭐️ 4,9 (187)" },
    { icon: Award, text: ">21.200 Behandlungen" },
    { icon: Target, text: "Dermatologisch geprüfte Technologie" }
  ];

  return (
    <section className="relative bg-gray-50 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/alexandrit-laser-light-blue.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Laser-Haarreduktion Bikinizone · Hamburg
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Präzise Laser Haarreduktion in der Bikinizone – glatter, gepflegter
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-6">
            Klassische Linie, erweitert oder Brazilian: Dauerhafte Haarreduktion mit Alexandrit (755 nm) & Diodenlaser (808 nm). Fortschreitende Ausdünnung über die Sitzungsserie.*
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Spezialisierte Bikinizone-Haarentfernung in Hamburg mit Dual-Wellenlängen-Technologie. 
            Weniger Rasurfrequenz, reduzierte Stoppeln und eingewachsene Haare durch präzise Laserbehandlung.*
          </p>

          {/* Benefits Pills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {benefitElements.map((element, index) => (
              <div key={index} className="flex items-center p-4 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <element.icon className="w-6 h-6 text-blue-600 mr-3" />
                <span className="font-medium text-gray-700">{element.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="/beratung" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Kostenlos & unverbindlich beraten lassen
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/preise-haarentfernung" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              Preise ansehen
            </a>
          </div>

          {/* Trust Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trustElements.map((element, index) => (
              <div key={index} className="flex items-center text-center p-4 bg-blue-50/80 backdrop-blur-sm rounded-xl border border-blue-200 hover:bg-blue-100/80 hover:shadow-lg transition-all duration-300">
                <element.icon className="w-5 h-5 text-blue-700 mr-2" />
                <span className="text-sm font-medium text-blue-800">{element.text}</span>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-gray-600 italic mt-8">
            *Individuelle Ergebnisse variieren (Haar- & Hauttyp, Dichte, hormonelle Faktoren).
          </p>
        </div>
      </div>
    </section>
  );
};

export default BikinizoneHero;
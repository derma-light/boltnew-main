import React from 'react';
import { ArrowRight, Clock, Target, Shield, Zap, Thermometer, Award } from 'lucide-react';

const AchselnHero = () => {
  const uspElements = [
    { icon: Clock, text: "5–10 Min." },
    { icon: Target, text: "Ø 6–8 Sitzungen" },
    { icon: Shield, text: "Weniger Einwachsungen" }
  ];

  const trustElements = [
    { icon: Zap, text: "755 & 808 nm" },
    { icon: Thermometer, text: "Kühltechnologie" },
    { icon: Award, text: "Erfahrung" }
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
          {/* Label Pill */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Achseln
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Laser Haarentfernung Achseln in Hamburg
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-6">
            Weniger Rasur, weniger Reizungen – moderne 755 & 808 nm Technologie für hygienisch glattere Achseln
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Spezialisierte Achsel-Haarentfernung in Hamburg mit Dual-Wellenlängen-Technologie. 
            Schnelle Termine, weniger Einwachsungen und dauerhaft glattere Achseln ohne tägliche Rasur.*
          </p>

          {/* USP Pills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {uspElements.map((element, index) => (
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
              Kostenlose Beratung
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/preise-haarentfernung" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              Preise
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
        </div>
      </div>
    </section>
  );
};

export default AchselnHero;
import React from 'react';
import { ArrowRight, Clock, Target, Shield, Star, Award, Zap } from 'lucide-react';

const MaennerHero = () => {
  const benefitElements = [
    { icon: Clock, text: "Individuelle Behandlungsdauer" },
    { icon: Target, text: "Präzise Technologie für alle Bereiche" },
    { icon: Shield, text: "Hautschonende Verfahren" }
  ];

  const trustElements = [
    { icon: Star, text: "⭐️⭐️⭐️⭐️⭐️ 4,9" },
    { icon: Award, text: ">1.200 Behandlungen" },
    { icon: Zap, text: "Dermatologisch geprüfte Technologie" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-400/10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 backdrop-blur-sm text-blue-200 rounded-full text-sm font-medium mb-8 border border-blue-400/30">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
            Laser-Haarentfernung für Männer · Hamburg
          </div>

          {/* Main Headline with Gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Laser-Haarentfernung
            </span>
            <br />
            <span className="text-white">
              für Männer
            </span>
          </h1>
          
          {/* Dynamic Subheadline */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl text-blue-100 font-semibold mb-4">
              <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Rücken · Brust · Intimbereich
              </span>
            </h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {['Definierter Look', 'Weniger Pflege', 'Selbstvertrauen', 'Professionell'].map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed max-w-4xl">
            Professionelle Laser-Haarentfernung speziell für Männer in Hamburg. 
            <span className="text-white font-semibold"> Dauerhafte Haarreduktion</span> für einen 
            <span className="text-blue-200 font-semibold"> definierten, maskulinen Look</span> mit minimalem Aufwand. 
            <span className="text-blue-100"> Speziell angepasst für männliche Körperbehaarung mit modernster Dual-Wellenlängen-Technologie.</span>
          </p>

          {/* Enhanced Benefits Pills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {benefitElements.map((element, index) => (
              <div key={index} className="group flex items-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-colors">
                  <element.icon className="w-6 h-6 text-blue-300" />
                </div>
                <span className="font-semibold text-white text-lg">{element.text}</span>
              </div>
            ))}
          </div>

          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <a 
              href="/beratung" 
              className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 text-lg"
            >
              Kostenlose Erstberatung buchen
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/preise-haarentfernung" 
              className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-lg"
            >
              Preise ansehen
            </a>
          </div>

          {/* Enhanced Trust Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustElements.map((element, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <element.icon className="w-6 h-6 text-blue-300 mr-3" />
                <span className="text-white font-semibold">{element.text}</span>
              </div>
            ))}
          </div>

          {/* Enhanced Disclaimer */}
          <p className="text-sm text-blue-200 italic mt-10 text-center max-w-3xl mx-auto">
            *Ergebnisse variieren je nach Haar- und Hauttyp sowie hormonellen und individuellen Faktoren.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MaennerHero;
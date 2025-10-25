import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Award, Target, Euro, Star } from 'lucide-react';

const Hero = () => {
  const trustElements = [
    { icon: Award, text: "Seit 2005 in Hamburg" },
    { icon: Zap, text: "808-nm-Diodenlaser" },
    { icon: Shield, text: "NiSV-zertifiziert" },
    { icon: Target, text: "Individuelle Beratung" },
    { icon: Euro, text: "Ab 29 € pro Behandlung" },
    { icon: Star, text: "4,9/5" }
  ];

  return (
    <section className="relative bg-gray-50 min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Alexandrit Laser Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/alexandrit-laser-light-blue.png"
          alt="Alexandrit-Laser Technologie 755nm - Animiertes Bild zeigt Laserstrahl, Haarfollikel, Melanin-Absorption und Präzision"
          className="w-full h-full object-cover opacity-30 alexandrit-laser-image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/70"></div>
        
        {/* Animated Overlay Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-50" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-40" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 bg-blue-600 rounded-full animate-ping opacity-70" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Dauerhafte Haarentfernung Hamburg – Erfahrung seit 2005
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-6">
            Willkommen bei Derma Light – Ihrem Spezialisten für professionelle Laserhaarentfernung in Hamburg
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Seit 2005 begleiten wir unsere Kundinnen und Kunden auf dem Weg zu glatter, haarfreier Haut – mit modernster 808-nm-Diodenlaser-Technologie, langjähriger Erfahrung und individueller Beratung in Hamburg Innenstadt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="/beratung" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Jetzt kostenloses Beratungsgespräch vereinbaren
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/preise-haarentfernung" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              Preise & Termin buchen
            </a>
          </div>

          {/* Trust Elements */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {trustElements.map((element, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-blue-50/80 backdrop-blur-sm rounded-xl border border-blue-200 hover:bg-blue-100/80 hover:shadow-lg transition-all duration-300">
                <element.icon className="w-6 h-6 text-blue-700 mb-2" />
                <span className="text-sm font-medium text-blue-800">{element.text}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 italic">
            Hinweis: Laserbehandlungen führen zu einer dauerhaften Reduktion des Haarwuchses – 
            vereinzelte feine Haare können später erneut wachsen.
          </p>

          {/* Quick Access Links */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              to="/frauen" 
              className="group p-4 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center"
              title="Laser-Haarentfernung für Frauen"
            >
              <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Für Frauen</div>
              <div className="text-xs text-gray-500">Alle Bereiche</div>
            </Link>
            <Link 
              to="/maenner" 
              className="group p-4 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center"
              title="Laser-Haarentfernung für Männer"
            >
              <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Für Männer</div>
              <div className="text-xs text-gray-500">Alle Bereiche</div>
            </Link>
            <Link 
              to="/achseln" 
              className="group p-4 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center"
              title="Laser-Haarentfernung Achseln"
            >
              <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Achseln</div>
              <div className="text-xs text-gray-500">5-10 Min.</div>
            </Link>
            <Link 
              to="/bikinizone" 
              className="group p-4 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center"
              title="Laser-Haarentfernung Bikinizone"
            >
              <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Bikinizone</div>
              <div className="text-xs text-gray-500">15-30 Min.</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import IntimbereichMaennerNeuLaserBanner from './IntimbereichMaennerNeuLaserBanner';

const IntimbereichMaennerNeuBannerIntro = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Linke Spalte - Banner */}
          <div className="order-2 lg:order-1">
            <IntimbereichMaennerNeuLaserBanner />
          </div>
          
          {/* Rechte Spalte - Intro Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Laser Haarentfernung Männer: Brust & Bauch in Hamburg
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Ein glatter, gepflegter Oberkörper wirkt sportlich und modern. Mit der professionellen 
                Laser Haarentfernung für Männer entfernen wir störende Haare an Brust und Bauch dauerhaft –
                effektiv, sicher und hautschonend. Ideal für dichte, dunkle Haare und empfindliche Haut.
              </p>
              <p>
                Im Unterschied zur Rasur oder zum Waxing erzielt die Laserbehandlung langanhaltende 
                Ergebnisse. Der Alexandrit-Laser wirkt präzise auf die Haarfollikel, ohne die umliegende 
                Haut zu reizen. So reduzieren wir nach und nach das Haarwachstum – sichtbar und nachhaltig.
              </p>
              <p>
                Unsere Behandlung in Hamburg ist speziell auf männliche Haut und Haarstruktur ausgelegt. 
                Individuell angepasste Parameter, moderne Kontaktkühlung und erfahrene Spezialisten sorgen 
                für ein angenehmes, professionelles Treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntimbereichMaennerNeuBannerIntro;

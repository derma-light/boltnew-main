import React from 'react';
import RueckenLaserBanner from './RueckenLaserBanner';

const RueckenBannerIntro = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Linke Spalte - Banner */}
          <div className="order-2 lg:order-1">
            <RueckenLaserBanner />
          </div>
          
          {/* Rechte Spalte - Intro Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Rückenhaare entfernen dauerhaft ...
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Es ist keineswegs ungewöhnlich, dass Männer den Wunsch haben, ihren Rücken dauerhaft haarfrei zu halten. 
                Tatsächlich ist die Haarentfernung des Rückens die am häufigsten nachgefragte Behandlung bei Männern.
              </p>
              <p>
                Die Gründe hierfür sind vielfältig: Von ästhetischen Vorlieben bis hin zu hygienischen Aspekten und 
                einem besseren Gefühl bei sportlichen Aktivitäten – der haarfreie Rücken ist für viele Männer ein Wunsch, 
                der nicht nur das äußere Erscheinungsbild, sondern auch das Selbstbewusstsein positiv beeinflusst.
              </p>
              <p>
                Die Rückenbehaarung ist eine der am schwersten selbst zugänglichen Körperregionen, was die regelmäßige 
                Pflege und Haarentfernung zu einer Herausforderung macht. Viele Männer empfinden die Haare am Rücken als 
                unästhetisch oder störend, insbesondere im Sommer oder beim Sport. Hier bietet sich die dauerhafte 
                Haarentfernung mittels Laser oder IPL (Intense Pulsed Light) als ideale Lösung an, um dauerhaft glatte 
                Haut zu genießen und den Pflegeaufwand erheblich zu reduzieren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RueckenBannerIntro;


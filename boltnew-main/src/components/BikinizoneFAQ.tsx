import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, children, isOpen, onToggle }: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
        onClick={onToggle}
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`} 
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const BikinizoneFAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const faqItems = [
    {
      id: 'classic-vs-extended',
      title: 'Klassisch vs. erweitert – was ist der Unterschied?',
      content: 'Klassisch: Nur seitliche Linie entlang der Unterwäsche. Erweitert: Zusätzlich etwas weiter nach innen/oben geglättet. Umfang individuell anpassbar.'
    },
    {
      id: 'brazilian-vs-complete',
      title: 'Brazilian oder komplett?',
      content: 'Brazilian lässt optional eine kleine Form (z. B. Streifen) bestehen; komplett (Hollywood) entfernt alles – nur bei Eignung und klarer Einwilligung.'
    },
    {
      id: 'visible-reduction',
      title: 'Wie lange bis zur sichtbaren Reduktion?',
      content: 'Nach jeder Sitzung fallen Haare nach 1-3 Wochen aus; deutliche Ausdünnung zeigt sich seriell über mehrere Sitzungen.'
    },
    {
      id: 'ingrown-hairs',
      title: 'Was tun bei eingewachsenen Haaren?',
      content: 'Nicht aufkratzen. Laser kann das Risiko längerfristig reduzieren. Zwischen Sitzungen nur sanft rasieren und keine aggressiven Peelings direkt danach.'
    },
    {
      id: 'products-removal',
      title: 'Make-up oder Pflegeprodukte vorher entfernen?',
      content: 'Im Bikinibereich üblicherweise kein Make-up – wichtig ist, dass die Haut sauber, trocken und frei von fetthaltigen Produkten ist.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl text-gray-600">
              Alles was Sie über die Laser-Haarentfernung in der Bikinizone wissen müssen.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                title={item.title}
                isOpen={openAccordion === item.id}
                onToggle={() => toggleAccordion(item.id)}
              >
                {item.content}
              </AccordionItem>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a 
              href="/beratung" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Kostenlose Beratung vereinbaren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikinizoneFAQ;
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

const BeineFAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const faqItems = [
    {
      id: 'results',
      title: 'Wann sehe ich erste Ergebnisse?',
      content: 'Nach den ersten 1–2 Sitzungen fallen behandelte Haare zeitverzögert aus. Eine deutlich wahrnehmbare Reduktion entsteht schrittweise im Verlauf mehrerer Sitzungen.'
    },
    {
      id: 'difference',
      title: 'Unterscheidet sich die Behandlung von Unterschenkel und Oberschenkel?',
      content: 'Ja. Haardichte, Struktur und Zykluslänge können variieren. Unterschenkel reagieren oft etwas schneller. Parameter werden je Zone angepasst.'
    },
    {
      id: 'pain',
      title: 'Ist die Behandlung schmerzhaft?',
      content: 'Meist nur ein moderates Wärme- oder leichtes Piksen. Durch Kühlung wird das Empfinden reduziert. Sehr empfindliche Bereiche (z. B. Kniekehle) können etwas intensiver wirken.'
    },
    {
      id: 'shaving',
      title: 'Darf ich weiter rasieren zwischen den Sitzungen?',
      content: 'Ja, Rasur ist erlaubt. Nicht epilieren, wachsen oder zupfen, da die Haarwurzel für die Laserwirkung benötigt wird.'
    },
    {
      id: 'tanning',
      title: 'Was ist mit Bräune oder Solarium?',
      content: 'Frische starke Bräunung kann das Risiko für Hautreaktionen erhöhen. Termine bei frisch gebräunter oder irritierter Haut besser verschieben. Sonnenschutz konsequent beachten.'
    },
    {
      id: 'remaining',
      title: 'Wieso bleiben manchmal einzelne Haare übrig?',
      content: 'Haare in ruhenden Phasen wurden beim jeweiligen Termin nicht optimal erreicht. Außerdem können hormonelle Faktoren oder sehr helle / feine Haare die Reaktion abschwächen. Einzelne Auffrischungssitzungen sind möglich.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl text-gray-600">
              Alles was Sie über die Laser-Haarentfernung an den Beinen wissen müssen.
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

export default BeineFAQ;
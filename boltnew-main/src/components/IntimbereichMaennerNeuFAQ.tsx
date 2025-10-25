import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem = ({ 
  id, 
  title, 
  content, 
  isOpen, 
  onToggle 
}: { 
  id: string; 
  title: string; 
  content: string; 
  isOpen: boolean; 
  onToggle: (id: string) => void; 
}) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  );
};

const IntimbereichMaennerNeuFAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const faqItems = [
    {
      id: 'sessions',
      title: 'Wie viele Sitzungen brauche ich für Brust & Bauch?',
      content: 'Für die Bereiche Brust und Bauch sind in der Regel 6–10 Sitzungen sinnvoll. Die genaue Anzahl hängt von Haarfarbe, -dichte und Hauttyp ab.'
    },
    {
      id: 'pain',
      title: 'Ist die Behandlung schmerzhaft?',
      content: 'Dank Kontaktkühlung empfinden die meisten Männer die Behandlung als gut tolerierbar. Häufig wird ein kurzes Wärme- oder Pieksen wahrgenommen.'
    },
    {
      id: 'preparation',
      title: 'Wie bereite ich mich auf die Laserbehandlung vor?',
      content: 'Bitte 24–48 Stunden vorher Brust und Bauch glatt rasieren. 2 Wochen vor der Behandlung intensive Sonne und Solarium vermeiden. Am Tag der Behandlung keine Cremes verwenden.'
    },
    {
      id: 'aftercare',
      title: 'Was muss ich nach der Behandlung beachten?',
      content: 'Für 24–48 Stunden starke Hitze (Sauna, Solarium), intensiven Sport und enge, scheuernde Kleidung meiden. Milde, parfümfreie Pflege verwenden.'
    },
    {
      id: 'results',
      title: 'Wann sehe ich erste Ergebnisse?',
      content: 'Nach 2–3 Sitzungen wird das Haarwachstum sichtbar reduziert. Feinere und langsamere Nachwuchsphasen sind typisch.'
    },
    {
      id: 'permanent',
      title: 'Sind die Ergebnisse dauerhaft?',
      content: 'Behandelte Haarfollikel werden deaktiviert und bilden in der Regel keine kräftigen Haare mehr. Einzelne feine Haare können hormonell bedingt später nachwachsen.'
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
              Antworten zur Laser Haarentfernung für Männer in Hamburg – Brust & Bauch.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                isOpen={openAccordion === item.id}
                onToggle={toggleAccordion}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Haben Sie weitere Fragen? Wir beraten Sie gerne persönlich.
            </p>
            <a 
              href="/beratung" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Persönliche Beratung vereinbaren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntimbereichMaennerNeuFAQ;

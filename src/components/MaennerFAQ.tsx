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

const MaennerFAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const faqItems = [
    {
      id: 'sessions',
      title: 'Wie viele Sitzungen brauche ich als Mann?',
      content: 'Männliche Körperbehaarung ist oft dichter und stärker als bei Frauen. Daher sind meist 8-12 Sitzungen pro Areal nötig. Besonders am Rücken und der Brust kann die Behandlung mehr Zeit in Anspruch nehmen.'
    },
    {
      id: 'pain',
      title: 'Ist die Behandlung bei Männern schmerzhafter?',
      content: 'Durch die oft dickeren und dichteren Haare kann das Wärmegefühl etwas intensiver sein. Die integrierte Kontaktkühlung sorgt jedoch für maximalen Komfort. Die meisten Männer empfinden die Behandlung als gut erträglich.'
    },
    {
      id: 'back-treatment',
      title: 'Wie läuft die Rückenbehandlung ab?',
      content: 'Die Rückenbehandlung ist einer unserer häufigsten Behandlungen für Männer. Sie dauert etwa 30-45 Minuten und wird in bequemer Bauchlage durchgeführt. Durch die große Fläche sind meist mehr Sitzungen nötig.'
    },
    {
      id: 'preparation',
      title: 'Wie bereite ich mich als Mann vor?',
      content: '24-48 Stunden vor der Behandlung sollten Sie die zu behandelnden Bereiche gründlich rasieren. Bei schwer erreichbaren Stellen wie dem Rücken können wir Ihnen dabei helfen. Vermeiden Sie Sonnenbäder 2 Wochen vorher.'
    },
    {
      id: 'results',
      title: 'Wann sehe ich als Mann erste Ergebnisse?',
      content: 'Aufgrund der oft dichteren Behaarung können erste Ergebnisse etwas länger dauern. Nach 3-4 Sitzungen ist meist eine deutliche Reduktion sichtbar. Die behandelten Haare fallen nach 2-3 Wochen aus.'
    },
    {
      id: 'cost',
      title: 'Was kostet die Behandlung für Männer?',
      content: 'Die Kosten variieren je nach Behandlungsareal. Große Bereiche wie der Rücken sind aufwendiger als kleinere Zonen. Gerne erstellen wir Ihnen ein individuelles Angebot in der kostenlosen Erstberatung.'
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
              Alles was Sie über die Laser-Haarentfernung für Männer wissen müssen. 
              Speziell angepasst für männliche Körperbehaarung mit höheren Energien und präziser Technologie.
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

export default MaennerFAQ;
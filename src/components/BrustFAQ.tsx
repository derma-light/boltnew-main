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

const BrustFAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const faqItems = [
    {
      id: 'results-speed',
      title: 'Wie schnell sehe ich einen Unterschied?',
      content: 'Meist nach den ersten 1-2 Sitzungen sichtbar: Haare wachsen langsamer nach oder fallen vereinzelt aus. Der Effekt kumuliert über mehrere Sitzungen.'
    },
    {
      id: 'fine-hair',
      title: 'Wirkt die Behandlung bei sehr feinen Flaumhaaren?',
      content: 'Sehr feine, helle Vellushaare haben wenig Pigment und reagieren nur gering. Dunklere, definierte Härchen reagieren deutlich besser.'
    },
    {
      id: 'areola-sensitivity',
      title: 'Ist die Areola besonders empfindlich?',
      content: 'Sie kann sensibler sein. Mit ausreichender Kühlung und korrekt gewählten Parametern ist die Behandlung kurz und normal.'
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
              Alles was Sie über die Laser-Haarentfernung im Brustbereich wissen müssen.
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

export default BrustFAQ;
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

const RueckenFAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const faqItems = [
    {
      id: 'pain',
      title: 'Tut die Behandlung weh?',
      content: 'Die Empfindlichkeit variiert von Person zu Person, aber viele Männer beschreiben die Behandlung als nur leicht unangenehm, ähnlich einem leichten Stechen oder einem warmen Gefühl. Die moderne Lasertechnologie, die bei Derma Light verwendet wird, ist darauf ausgelegt, die Behandlungsfläche zu kühlen und so das Unbehagen zu minimieren.'
    },
    {
      id: 'sessions',
      title: 'Wie viele Sitzungen sind erforderlich?',
      content: 'Um ein optimales Ergebnis zu erzielen, sind durchschnittlich 6 bis 8 Sitzungen notwendig. Dies hängt jedoch von Faktoren wie dem Haartyp, der Dichte und der individuellen Reaktion der Haut auf die Behandlung ab. Zwischen den einzelnen Sitzungen liegt in der Regel ein Zeitraum von 4 bis 6 Wochen.'
    },
    {
      id: 'aftercare',
      title: 'Was ist nach der Behandlung zu beachten?',
      content: 'Nach der Behandlung sollte die behandelte Haut gut gepflegt werden. Es wird empfohlen, direkte Sonneneinstrahlung für mindestens zwei Wochen zu vermeiden und einen hohen Sonnenschutz (SPF 50+) zu verwenden, um Hautirritationen zu verhindern. Die Haut kann nach der Behandlung etwas gerötet sein, was normalerweise innerhalb weniger Stunden bis Tage abklingt.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Häufige Fragen zur Rückenbehandlung
            </h2>
            <p className="text-xl text-gray-600">
              Alles was Sie über die Laser-Haarentfernung am Rücken wissen müssen.
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
              Persönliche Beratung vereinbaren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RueckenFAQ;
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

const IntimbereichMaennerFAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const faqItems = [
    {
      id: 'sessions',
      title: 'Wie viele Sitzungen brauche ich als Mann im Intimbereich?',
      content: 'Männliche Intimbereich-Haare sind oft dichter und stärker als bei Frauen. Daher sind meist 8-12 Sitzungen nötig. Die genaue Anzahl hängt von Ihrer individuellen Haarstruktur und dem gewünschten Ergebnis ab.'
    },
    {
      id: 'pain',
      title: 'Ist die Behandlung im Intimbereich schmerzhaft?',
      content: 'Der Intimbereich ist sensibler als andere Körperregionen. Durch unsere moderne Kontaktkühlung und individuell angepasste Parameter ist die Behandlung jedoch gut erträglich. Die meisten Männer empfinden nur ein leichtes Wärmegefühl.'
    },
    {
      id: 'discretion',
      title: 'Wie wird Diskretion gewährleistet?',
      content: 'Diskretion hat bei uns höchste Priorität. Die Behandlung erfolgt in einem geschützten Einzelraum durch geschultes Fachpersonal. Alle Mitarbeiter unterliegen der Schweigepflicht. Termine können diskret vereinbart werden.'
    },
    {
      id: 'preparation',
      title: 'Wie bereite ich mich auf die Behandlung vor?',
      content: '24-48 Stunden vor der Behandlung sollten Sie den Intimbereich gründlich rasieren. Vermeiden Sie 2 Wochen vorher intensive Sonneneinstrahlung. Am Behandlungstag keine Cremes oder Lotionen verwenden.'
    },
    {
      id: 'zones',
      title: 'Welche Bereiche können behandelt werden?',
      content: 'Wir können alle gewünschten Bereiche des männlichen Intimbereichs behandeln - von einer dezenten Reduktion bis zur kompletten Entfernung. Der genaue Umfang wird diskret in der Beratung besprochen.'
    },
    {
      id: 'aftercare',
      title: 'Was muss ich nach der Behandlung beachten?',
      content: 'Vermeiden Sie 24-48 Stunden nach der Behandlung Sauna, intensive körperliche Aktivität und enge Kleidung. Tragen Sie lockere, atmungsaktive Unterwäsche und verwenden Sie bei Bedarf eine beruhigende Pflege.'
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
              Alles was Sie über die Laser-Haarentfernung im Intimbereich für Männer wissen müssen.
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

export default IntimbereichMaennerFAQ;
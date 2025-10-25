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

const FrauenFAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const faqItems = [
    {
      id: 'pain',
      title: 'Ist die Behandlung schmerzhaft?',
      content: 'Das Empfinden ist individuell. Dank Kontaktkühlung wird das Wärmegefühl deutlich gemildert und meist gut toleriert. Die meisten Patientinnen empfinden die Behandlung als gut erträglich, besonders im Vergleich zu anderen Haarentfernungsmethoden.'
    },
    {
      id: 'shaving',
      title: 'Kann ich zwischen den Sitzungen rasieren?',
      content: 'Ja, das ist sogar erwünscht. Nicht zupfen oder wachsen – die Haarwurzel wird für die Laserwirkung benötigt. Rasieren ist die beste Methode zur Haarentfernung zwischen den Behandlungen.'
    },
    {
      id: 'light-hair',
      title: 'Was ist, wenn ich sehr helle Haare habe?',
      content: 'Sehr helle/rote/graue Haare enthalten wenig Melanin und sprechen schwächer an. Wir beraten zu realistischen Erwartungen. In manchen Fällen kann eine Kombination verschiedener Wellenlängen oder alternative Behandlungsansätze sinnvoll sein.'
    },
    {
      id: 'sessions',
      title: 'Wie viele Sitzungen brauche ich insgesamt?',
      content: 'Die Anzahl der Sitzungen variiert je nach Körperbereich und individuellen Faktoren. Durchschnittlich sind 6-8 Sitzungen pro Areal nötig. Gesicht und Achseln benötigen oft weniger Sitzungen als Beine oder Rücken.'
    },
    {
      id: 'preparation',
      title: 'Wie bereite ich mich auf die Behandlung vor?',
      content: '24-48 Stunden vor der Behandlung sollten Sie die zu behandelnden Bereiche rasieren. Vermeiden Sie 2 Wochen vorher intensive Sonneneinstrahlung und verwenden Sie keine Selbstbräuner. Keine starken Peelings oder Retinoide 3-5 Tage vorher.'
    },
    {
      id: 'results',
      title: 'Wann sehe ich erste Ergebnisse?',
      content: 'Erste Ergebnisse sind oft schon nach 1-2 Sitzungen sichtbar. Die behandelten Haare fallen nach 2-3 Wochen aus (Shedding-Phase). Eine deutliche Reduktion der Haardichte zeigt sich meist nach 3-4 Sitzungen.'
    },
    {
      id: 'aftercare',
      title: 'Was muss ich nach der Behandlung beachten?',
      content: 'Vermeiden Sie 24-48 Stunden nach der Behandlung Sauna, intensive Sonneneinstrahlung und aggressive Peelings. Verwenden Sie bei Bedarf eine beruhigende Pflege und konsequent Sonnenschutz. Peelings und Retinoide 3-5 Tage aussetzen.'
    },
    {
      id: 'cost',
      title: 'Was kostet die Behandlung?',
      content: 'Die Kosten variieren je nach Behandlungsareal und Anzahl der benötigten Sitzungen. Gerne erstellen wir Ihnen ein individuelles Angebot in der kostenlosen Erstberatung. Kombi-Pakete sind oft günstiger als Einzelbehandlungen.'
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
              Alles was Sie über die Laser-Haarentfernung für Frauen wissen müssen.
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

export default FrauenFAQ;
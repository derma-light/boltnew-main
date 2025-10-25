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

const IntimbereichFAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const faqItems = [
    {
      id: 'sessions',
      title: 'Wie viele Sitzungen sind im Intimbereich nötig?',
      content: 'Meist 6–10 Sitzungen im Abstand von etwa 4–8 Wochen. Hormonelle Faktoren (z. B. PCOS), Haardichte und individuelle Regeneration beeinflussen die Anzahl. Feine Resthaare werden in späteren Sitzungen oft bevorzugt mit 755 nm adressiert.'
    },
    {
      id: 'comfort',
      title: 'Ist die Behandlung im Intimbereich schmerzhaft?',
      content: 'Durch die effiziente Kontaktkühlung und individuell angepasste Parameter wird die Behandlung so komfortabel wie möglich gestaltet. Ein leichtes Wärmegefühl ist normal und zeigt die Wirksamkeit der Behandlung an. Leichtes peripiläres Erythem (kleine Rötung um Haaröffnungen) ist normal und erwünscht.'
    },
    {
      id: 'discretion',
      title: 'Wie wird Diskretion gewährleistet?',
      content: 'Wir verwenden abgedeckte Areale, Einmalmaterialien und haben geschultes Fachpersonal. Die genaue Zone wird diskret im Beratungsgespräch definiert, wobei Grenzen & Komfort immer im Vordergrund stehen.'
    },
    {
      id: 'zones',
      title: 'Welche Behandlungszonen sind möglich?',
      content: 'Bikinilinie klassisch, erweiterte Bikinizone / Brazilian (äußere Bereiche), kompletter Intimbereich (inkl. Labien / äußere Genitalregion – nur nach individueller Eignung) und Pofalte (separat buchbar). Die genaue Zone wird im Beratungsgespräch definiert.'
    },
    {
      id: 'preparation',
      title: 'Wie bereite ich mich auf die Behandlung vor?',
      content: '24–48 h vorher rasieren (kein Wachsen, Epilieren, Zupfen, Sugaring), keine intensive Sonne oder Solarium 1–2 Wochen davor, kein Selbstbräuner (Fleckrisiko), am Behandlungstag keine fetthaltigen Cremes im Areal und Medikamente (photosensibilisierend?) im Vorfeld angeben.'
    },
    {
      id: 'aftercare',
      title: 'Was muss ich nach der Behandlung beachten?',
      content: 'Leichte Rötung / Wärmegefühl ist normal und meist kurzzeitig. 24–48 h: Keine Sauna, intensiver Sport, sehr enge synthetische Kleidung. Sanfte Reinigung, nicht peelen oder kratzen. UV-Exposition minimieren; falls Randbereiche exponiert: LSF 50. Nicht zupfen oder wachsen – nur rasieren bis zur nächsten Sitzung.'
    },
    {
      id: 'technology',
      title: 'Welche Technologie wird verwendet?',
      content: 'Wir verwenden Dual-Wellenlängen-Technologie mit 755 nm (Alexandrit) und 808 nm (Diodenlaser). Alexandrit für feinere Resthaare, Diodenlaser für dichtere, tiefere Haarfollikel. Die Kombination ermöglicht eine passgenaue Anpassung an unterschiedliche Haarstärken und Hauttypen.'
    },
    {
      id: 'cost',
      title: 'Was kostet die Intimbereich-Behandlung?',
      content: 'Die Kosten variieren je nach gewählter Zone und Anzahl der benötigten Sitzungen. Gerne erstellen wir Ihnen ein individuelles Angebot in der kostenlosen Erstberatung. Kombi-Pakete mit anderen Körperbereichen sind oft günstiger als Einzelbehandlungen.'
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
              Alles was Sie über die Laser-Haarentfernung im Intimbereich wissen müssen.
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

export default IntimbereichFAQ;
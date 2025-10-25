import React from 'react';
import { Zap, Target, ThermometerSun, ChevronDown } from 'lucide-react';

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

const Technology = () => {
  const [openAccordion, setOpenAccordion] = React.useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordionItems = [
    {
      id: 'wavelength',
      title: 'Warum 808 nm Diodenlaser?',
      content: 'Die 808-nm-Diodenlaser-Technologie ist der Goldstandard für effektive und sichere Haarentfernung. Diese Wellenlänge bietet optimale Absorption durch Melanin in den Haarfollikeln bei gleichzeitigem Schutz der umliegenden Hautstrukturen. Die Technologie ist wissenschaftlich belegt und eignet sich für nahezu alle Hauttypen.'
    },
    {
      id: 'safety',
      title: 'Ihre Sicherheit steht an erster Stelle',
      content: 'Vor jeder Behandlung führen wir eine ausführliche Beratung und Hautanalyse durch. Wir arbeiten ausschließlich mit zertifizierten Geräten und bilden uns regelmäßig fort. Dank der modernen Lasertechnologie der neuesten Generation sind Nebenwirkungen selten. Abgesehen von einer leichten Rötung gibt es bei korrekter Anwendung kaum etwas zu befürchten.'
    },
    {
      id: 'suitability',
      title: 'Für wen ist die Behandlung geeignet?',
      content: 'Die 808-nm-Diodenlaser-Technologie eignet sich für nahezu alle Hauttypen und Haarfarben – mit Ausnahme von sehr hellem oder grauem Haar. Dank individuell einstellbarer Parameter passen wir die Behandlung optimal an Ihre Bedürfnisse an. Ideal bei dunklen, kräftigen Haaren auf heller bis mittlerer Haut.'
    },
    {
      id: 'comparison',
      title: 'Diodenlaser vs. Alexandrit-Laser',
      content: 'Wir setzen auf die bewährte 808-nm-Diodenlaser-Technologie, die sich durch maximale Flexibilität und Sicherheit auszeichnet. Diodenlaser sind besonders effektiv bei verschiedenen Hauttypen und bieten eine schonende, präzise Behandlung. Die Kombination aus modernster Technik und langjähriger Erfahrung garantiert optimale Ergebnisse.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Unsere Technologie: 808-nm-Diodenlaser & Alexandrit-Laser
            </h2>
            <p className="text-xl text-gray-600">
              Für Ihre dauerhafte Haarentfernung setzen wir auf die moderne 808-nm-Diodenlaser-Technologie – den Goldstandard für effektive und sichere Ergebnisse.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Maximaler Hautschutz</h3>
                  <p className="text-gray-600">
                    Integrierte Kühlsysteme sorgen für Komfort und Sicherheit während der Behandlung. Die gezielte Energieabgabe minimiert Nebenwirkungen und schützt das umliegende Gewebe.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ThermometerSun className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Wissenschaftlich belegt</h3>
                  <p className="text-gray-600">
                    Die Wirksamkeit und Sicherheit für verschiedene Hauttypen ist durch Studien bestätigt. Dank individuell einstellbarer Parameter passen wir die Behandlung optimal an Ihre Bedürfnisse an.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Schnelle Resultate</h3>
                  <p className="text-gray-600">
                    Bereits nach wenigen Sitzungen ist eine deutliche Reduktion des Haarwuchses sichtbar. Die 808-nm-Diodenlaser-Technologie eignet sich für nahezu alle Hauttypen und Haarfarben – mit Ausnahme von sehr hellem oder grauem Haar.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative laser-beam">
              <img
                src="/alexandrit-laser-light-blue.png"
                alt="Alexandrit-Laser Technologie 755nm - Animiertes Bild zeigt Laserstrahl, Haarfollikel, Melanin-Absorption und Präzision"
                className="w-full h-auto rounded-xl shadow-lg alexandrit-laser-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-blue-300/10 rounded-xl"></div>
              
              {/* Animated Laser Effect Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent laser-sweep opacity-60"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent laser-sweep opacity-80" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent laser-sweep opacity-70" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Warum Alexandrit-Laser für Haarentfernung?
              </h3>
              <p className="text-lg text-gray-600">
                Selektive Energieabgabe an pigmentierte Haarfollikel – effektiv bei geeigneten Haut- und Haartypen.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {accordionItems.map((item) => (
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
          </div>
        </div>

        {/* Contextual Links */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/beratung" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Kostenlose Erstberatung vereinbaren
            </a>
            <a 
              href="/preise-haarentfernung" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Alle Preise ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
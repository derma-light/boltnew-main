import React from 'react';
import { ChevronDown, Clock, Shield, Euro, AlertTriangle, HelpCircle, Zap } from 'lucide-react';

const SEOFAQ = () => {
  const [openAccordion, setOpenAccordion] = React.useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const faqItems = [
    {
      id: 'sessions',
      title: 'Wie viele Sitzungen sind nötig?',
      icon: Clock,
      content: `In der Regel können Sie mit etwa 6 bis 10 Behandlungen rechnen, um eine dauerhafte Haarreduktion zu erreichen. Verschiedene Faktoren wie Hormone, das Alter, der Haut- und Haartyp sowie die ethnische Zugehörigkeit spielen eine wichtige Rolle, die den Verlauf der Behandlung beeinflussen können.

Für Personen mit optimalen Voraussetzungen, wie zum Beispiel Hauttyp 1 (helle Haut, dunkle Haare), sind in der Regel etwa 6 Behandlungen ausreichend, um eine fast vollständige Haarentfernung zu erzielen. Bei anderen Haut- und Haartypen kann die Anzahl der Behandlungen variieren.

Besonders feine, blonde, graue oder rote Haare sind für die Laserbehandlung weniger geeignet, da der Laser auf das Pigment des Haares zielt. In einem kostenlosen und unverbindlichen Beratungsgespräch bei Derma Light besprechen wir, ob eine Laserhaarentfernung für Sie geeignet ist und wie Ihre individuellen Voraussetzungen den Erfolg der Behandlung beeinflussen könnten.`
    },
    {
      id: 'pain',
      title: 'Ist die Behandlung schmerzhaft?',
      icon: AlertTriangle,
      content: `Das Gefühl während der Laser-Haarentfernung wird häufig mit dem Schnipsen eines Gummibands auf die Haut verglichen. Dieses Schnipsen kann stärker oder schwächer ausfallen, je nachdem, wie empfindlich die behandelte Person ist.

Der Vorteil der Laserbehandlung besteht darin, dass das Gerät so eingestellt werden kann, dass die Intensität des Lasers an die Schmerzempfindlichkeit der Kundin oder des Kunden angepasst wird.

Im Vergleich zu anderen Methoden wie Sugaring, Waxing oder Epilation schneidet die Laserbehandlung oft sogar besser ab. Durch die Möglichkeit, die Intensität des Lasers anzupassen, lässt sich die Behandlung individuell auf die Schmerztoleranz der Person einstellen, was die Behandlung deutlich erträglicher macht.`
    },
    {
      id: 'duration',
      title: 'Wie lange dauert eine Laserbehandlung?',
      icon: Clock,
      content: `Die Dauer einer Laserbehandlung variiert je nach der zu behandelnden Körperregion und kann zwischen 5 Minuten und maximal einer Stunde liegen. Es ist jedoch wichtig zu betonen, dass eine Behandlung aller Körperbereiche in einer Stunde nicht realistisch ist.

Einige Beispiele für die durchschnittliche Behandlungsdauer beliebter Zonen sind:
• Unterschenkel und Bikini-Zone: Etwa 25 Minuten
• Die Laserenthaarung Achseln: Nur 5 bis 8 Minuten  
• Kompletter Männer-Rücken: Je nach Größe des Rückens ungefähr 25 Minuten

Bei größeren Bereichen teilt man die Behandlung häufig in zwei Sitzungen auf, um den Komfort zu erhöhen. Mit zunehmender Dauer der Behandlung nimmt auch die Schmerztoleranz ab, was die Behandlung anstrengender machen kann.`
    },
    {
      id: 'cost',
      title: 'Was kostet die Laserhaarentfernung?',
      icon: Euro,
      content: `Unsere Preise beziehen sich immer auf einzelne Behandlungen – es gibt keine Verträge oder Abonnements, und niemand ist verpflichtet, eine bestimmte Anzahl von Sitzungen im Voraus zu buchen. Jede Behandlung wird direkt im Anschluss bezahlt, sodass Sie volle Flexibilität behalten.

Beispiele für unsere Preise:
• 89 EUR für beide Unterschenkel
• 45 EUR für beide Achseln

Zusätzlich bieten wir die Möglichkeit, durch das Zusammenstellen eines individuellen Behandlungspakets, zum Beispiel für Achseln, Unterschenkel und Bikini-Zone, von attraktiven Paketpreisen zu profitieren. Bei größeren Paketen können Sie bis zu 25% Rabatt erhalten, je nachdem, wie viele Zonen Sie kombinieren möchten.`
    },
    {
      id: 'safety',
      title: 'Wie sicher ist die Laserhaarentfernung?',
      icon: Shield,
      content: `Eine Laserhaarentfernung ist grundsätzlich sicher, sofern sie von einem qualifizierten und erfahrenen Behandler durchgeführt wird. Bei Derma Light legen wir großen Wert darauf, dass vor jeder Behandlung eine gründliche Anamnese erfolgt.

Dadurch können wir mögliche Kontraindikationen ausschließen und sicherstellen, dass der Hauttyp des Kunden für die Behandlung geeignet ist. Dank der modernen Lasertechnologie der neuesten Generation sind Nebenwirkungen selten.

Abgesehen von einer leichten Rötung oder einem sanften Ziepen während der Behandlung gibt es bei korrekter Anwendung kaum etwas zu befürchten. Entscheidend ist dabei, dass das Gerät präzise und individuell auf den Kunden eingestellt wird.

Wenn alle gesetzlich vorgeschriebenen Sicherheitsvorkehrungen und Maßnahmen eingehalten werden, besteht kein Grund zur Sorge. Sie können sich sicher sein, dass Sie bei uns in erfahrenen Händen sind.`
    },
    {
      id: 'regrowth',
      title: 'Kommen die Haare wieder?',
      icon: HelpCircle,
      content: `Grundsätzlich gilt: Wenn eine Haarwurzel durch den Laser zerstört wurde, kann an dieser Stelle kein neues Haar mehr wachsen. Allerdings bedeutet das nicht, dass niemals wieder Haare an der behandelten Stelle erscheinen.

Der menschliche Körper besitzt viele Haarfollikel, die oft jahrelang inaktiv bleiben. Diese ruhenden Follikel können im Laufe des Lebens durch verschiedene Faktoren wie hormonelle Veränderungen, Krankheiten oder schlicht durch den natürlichen Alterungsprozess aktiviert werden.

Die gute Nachricht ist jedoch, dass die Ergebnisse der Laser-Haarentfernung in der Regel viele Jahre anhalten. Für die meisten Menschen ist es eine sehr langfristige Lösung. Dennoch kann es sinnvoll sein, gelegentlich eine Auffrischungsbehandlung durchzuführen, um das Ergebnis dauerhaft zu erhalten.

Diese Auffrischungen sind in der Regel seltener und weniger aufwendig als die initialen Behandlungen.`
    },
    {
      id: 'consultation',
      title: 'Warum ist eine Beratung vor der Laser-Haarentfernung wichtig?',
      icon: Zap,
      content: `Bei Derma Light ist die Beratung ein zentraler Bestandteil vor jeder Behandlung – und sie ist kostenlos sowie unverbindlich.

Eine gründliche Beratung ist der Schlüssel, um sicherzustellen, dass die Behandlung individuell auf Ihre Bedürfnisse und Hautbeschaffenheit abgestimmt ist. Auch wenn es möglich ist, direkt nach der Beratung mit der Behandlung zu starten, empfehle ich, sich mindestens 24 Stunden Bedenkzeit zu nehmen, bevor man eine endgültige Entscheidung trifft.

So haben Sie genügend Zeit, die erhaltenen Informationen zu verarbeiten und eventuelle Rückfragen zu klären. Mein oberstes Ziel ist es, nur Behandlungen durchzuführen, bei denen ich eine realistische Chance sehe, die gewünschten Ergebnisse zu erreichen.

Denn der Erfolg der Behandlung hängt von vielen Faktoren ab – und diese klären wir ausführlich in der Beratung. Dieser Schritt bietet Ihnen nicht nur Klarheit, sondern auch die Sicherheit, dass wir gemeinsam die besten Voraussetzungen für ein optimales Ergebnis schaffen.`
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Fragen und Antworten zur Laser Haarentfernung
            </h2>
            <p className="text-xl text-gray-600">
              Hier finden Sie ausführliche Antworten auf die wichtigsten Fragen zur dauerhaften Haarentfernung
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <div className="flex items-center space-x-4">
                    <item.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="font-semibold text-gray-900 text-lg">{item.title}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openAccordion === item.id ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                {openAccordion === item.id && (
                  <div className="px-6 py-6 bg-gray-50 border-t border-gray-200">
                    <div className="prose prose-gray max-w-none">
                      {item.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Haben Sie weitere Fragen?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Wir beraten Sie gerne persönlich in einem kostenlosen und unverbindlichen Gespräch.
              </p>
              <a 
                href="/beratung" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Kostenlose Beratung vereinbaren
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOFAQ;

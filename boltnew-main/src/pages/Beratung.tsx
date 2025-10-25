import React, { useState } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Eye, 
  Heart, 
  Shield, 
  User, 
  Users, 
  Zap, 
  Calendar,
  Phone,
  ChevronDown,
  Star,
  Award,
  Target,
  AlertTriangle,
  FileText,
  Microscope
} from 'lucide-react';

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
          <div className="text-gray-700">{children}</div>
        </div>
      )}
    </div>
  );
};

const Beratung = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const trustElements = [
    { icon: Star, text: "⭐️⭐️⭐️⭐️⭐️ 4,9 (187)" },
    { icon: Award, text: ">1.200 Behandlungen" },
    { icon: Target, text: "Seit 2005 Erfahrung" }
  ];

  const consultationSteps = [
    {
      icon: User,
      title: "Persönliches Gespräch",
      description: "Wir nehmen uns Zeit für Ihre Fragen, Wünsche und Bedenken. Keine Zeitdruck, keine Verkaufsgespräche."
    },
    {
      icon: Microscope,
      title: "Haut- & Haaranalyse",
      description: "Professionelle Einschätzung Ihres Hauttyps, der Haarstruktur und -farbe für optimale Behandlungsparameter."
    },
    {
      icon: FileText,
      title: "Medizinische Anamnese",
      description: "Erfassung relevanter Vorerkrankungen, Medikamente und Kontraindikationen für Ihre Sicherheit."
    },
    {
      icon: Target,
      title: "Behandlungsplan",
      description: "Entwicklung eines individuellen Behandlungskonzepts mit realistischen Erwartungen und Zeitrahmen."
    },
    {
      icon: Calendar,
      title: "Kostenaufstellung",
      description: "Transparente Preisgestaltung ohne versteckte Kosten. Aufklärung über Paketoptionen und Zahlungsmöglichkeiten."
    },
    {
      icon: Shield,
      title: "Aufklärung & Einverständnis",
      description: "Ausführliche Information über Ablauf, Risiken und Nachsorge. Bedenkzeit ohne Druck."
    }
  ];

  const analysisFactors = [
    {
      icon: Eye,
      title: "Hauttyp-Bestimmung",
      description: "Fitzpatrick-Skala I-VI zur optimalen Laser-Parameter-Einstellung",
      details: "Helle Haut (Typ I-III) reagiert optimal auf 755nm Alexandrit, dunklere Hauttypen benötigen angepasste Parameter."
    },
    {
      icon: Zap,
      title: "Haarfarbe & -struktur",
      description: "Melaningehalt bestimmt Behandlungserfolg",
      details: "Dunkle, kräftige Haare sprechen am besten an. Sehr helle, rote oder graue Haare reagieren eingeschränkt."
    },
    {
      icon: Heart,
      title: "Hormoneller Status",
      description: "Einfluss auf Haarwachstum und Behandlungsergebnis",
      details: "Schwangerschaft, PCOS, Schilddrüsenerkrankungen oder Medikamente können das Ergebnis beeinflussen."
    },
    {
      icon: Shield,
      title: "Medizinische Vorgeschichte",
      description: "Ausschluss von Kontraindikationen",
      details: "Hauterkrankungen, Medikamente, Allergien oder Vorbehandlungen werden sorgfältig erfasst."
    }
  ];

  const faqItems = [
    {
      id: 'cost-consultation',
      title: 'Kostet die Beratung etwas?',
      content: (
        <div>
          <p className="mb-3">
            <strong>Nein, unsere Erstberatung ist vollständig kostenlos und unverbindlich.</strong> 
            Wir nehmen uns ausreichend Zeit für Sie – ohne Zeitdruck oder Verkaufsgespräche.
          </p>
          <p>
            Sie erhalten eine professionelle Einschätzung Ihrer Situation, einen individuellen 
            Behandlungsplan und eine transparente Kostenaufstellung. Erst wenn Sie sich für eine 
            Behandlung entscheiden, entstehen Kosten.
          </p>
        </div>
      )
    },
    {
      id: 'duration-consultation',
      title: 'Wie lange dauert eine Beratung?',
      content: (
        <div>
          <p className="mb-3">
            Eine ausführliche Erstberatung dauert etwa <strong>30-45 Minuten</strong>. 
            Diese Zeit investieren wir gerne, um Ihnen alle wichtigen Informationen zu vermitteln.
          </p>
          <p>
            Wir besprechen Ihre Wünsche, analysieren Haut und Haare, klären medizinische Fragen 
            und entwickeln gemeinsam einen individuellen Behandlungsplan. Nehmen Sie sich diese 
            Zeit – sie ist die Grundlage für Ihren Behandlungserfolg.
          </p>
        </div>
      )
    },
    {
      id: 'what-to-bring',
      title: 'Was sollte ich zur Beratung mitbringen?',
      content: (
        <div>
          <p className="mb-3">
            <strong>Für die Beratung müssen Sie nichts Besonderes vorbereiten.</strong> 
            Kommen Sie einfach so, wie Sie sind.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Liste aktueller Medikamente (falls vorhanden)</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Informationen über Vorbehandlungen (Waxing, IPL, etc.)</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Ihre Fragen und Bedenken – wir beantworten alles ausführlich</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'suitable-candidate',
      title: 'Bin ich ein geeigneter Kandidat für Laserhaarentfernung?',
      content: (
        <div>
          <p className="mb-3">
            Das können wir nur in einer persönlichen Beratung beurteilen. 
            <strong>Grundsätzlich gilt:</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Optimal geeignet:</h4>
              <ul className="text-sm space-y-1">
                <li>• Dunkle, kräftige Haare</li>
                <li>• Helle bis mittlere Hauttypen</li>
                <li>• Realistische Erwartungen</li>
                <li>• Keine akuten Hauterkrankungen</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Eingeschränkt geeignet:</h4>
              <ul className="text-sm space-y-1">
                <li>• Sehr helle, rote oder graue Haare</li>
                <li>• Sehr dunkle Hauttypen</li>
                <li>• Schwangerschaft</li>
                <li>• Bestimmte Medikamente</li>
              </ul>
            </div>
          </div>
          <p>
            In der Beratung klären wir individuell, ob und wie eine Behandlung bei Ihnen 
            erfolgreich sein kann. Auch bei eingeschränkter Eignung gibt es oft Lösungsansätze.
          </p>
        </div>
      )
    },
    {
      id: 'pressure-free',
      title: 'Werde ich unter Druck gesetzt, mich sofort zu entscheiden?',
      content: (
        <div>
          <p className="mb-3">
            <strong>Absolut nicht.</strong> Seriöse Laserhaarentfernung erfordert eine durchdachte 
            Entscheidung. Wir geben Ihnen alle Informationen mit und lassen Sie in Ruhe entscheiden.
          </p>
          <p className="mb-3">
            Nach der Beratung erhalten Sie:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Einen schriftlichen Kostenvoranschlag</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Bedenkzeit ohne jeglichen Druck</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Unsere Kontaktdaten für weitere Fragen</span>
            </li>
          </ul>
          <p className="mt-3">
            Eine gute Beratung informiert – sie drängt nicht.
          </p>
        </div>
      )
    },
    {
      id: 'test-treatment',
      title: 'Kann ich eine Testbehandlung machen?',
      content: (
        <div>
          <p className="mb-3">
            <strong>Ja, bei Unsicherheit bieten wir Patch-Tests an.</strong> Besonders bei 
            empfindlicher Haut oder wenn Sie unsicher bezüglich der Verträglichkeit sind.
          </p>
          <p className="mb-3">
            Ein Patch-Test umfasst:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Behandlung einer kleinen Teststelle</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Beobachtung der Hautreaktion über 24-48h</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Anpassung der Parameter bei Bedarf</span>
            </li>
          </ul>
          <p className="mt-3">
            So können Sie die Behandlung risikofrei testen, bevor Sie sich für die komplette 
            Serie entscheiden.
          </p>
        </div>
      )
    }
  ];

  const whyConsultationReasons = [
    {
      icon: Shield,
      title: "Sicherheit geht vor",
      description: "Ausschluss von Kontraindikationen und Risikofaktoren für eine sichere Behandlung."
    },
    {
      icon: Target,
      title: "Realistische Erwartungen",
      description: "Ehrliche Einschätzung der erreichbaren Ergebnisse basierend auf Ihrem Haut- und Haartyp."
    },
    {
      icon: Zap,
      title: "Optimale Parameter",
      description: "Individuelle Laser-Einstellungen für maximale Effektivität bei minimalen Nebenwirkungen."
    },
    {
      icon: Clock,
      title: "Zeitplanung",
      description: "Realistische Einschätzung der benötigten Sitzungsanzahl und Behandlungsdauer."
    }
  ];

  const canonical = 'https://dermalight-hamburg.de/beratung';
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Kostenlose Beratung Laser Haarentfernung Hamburg | Derma Light"
        description="Kostenlose, unverbindliche Beratung zur Laser Haarentfernung in Hamburg: Analyse, Behandlungsplan, transparente Kosten."
        canonical={canonical}
        breadcrumb={[
          { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
          { name: 'Beratung', href: canonical, position: 2 }
        ]}
        service={{
          serviceType: 'Beratung Laser Haarentfernung',
          description: 'Professionelle Erstberatung zur Laser Haarentfernung in Hamburg – kostenlos und unverbindlich.',
          providerId: new URL(canonical).origin + '/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Beratung Laser Haarentfernung Hamburg',
          primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
          websiteId: new URL(canonical).origin + '/#website'
        }}
        faq={[
          { question: 'Kostet die Beratung etwas?', answer: 'Nein, die Erstberatung ist kostenlos und unverbindlich.' },
          { question: 'Wie lange dauert eine Beratung?', answer: 'In der Regel 30–45 Minuten, abhängig von Ihren Fragen und Zielen.' }
        ]}
      />
      <Header />
      <DropdownScript />
      <Breadcrumbs currentPageName="Beratung" />
      
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/alexandrit-laser-light-blue.png"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              Kostenlose Erstberatung · Hamburg
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Kostenlose Beratung Laser-Haarentfernung Hamburg
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-6">
              Unverbindlich & professionell
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Kostenlose Erstberatung für Laser-Haarentfernung in Hamburg: Professionelle Analyse ohne Zeitdruck 
              und Verkaufsgespräche für Ihren Weg zu dauerhaft glatter Haut.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="tel:+494055435357" 
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Jetzt anrufen: 040 55435357
              </a>
              <a 
                href="/preise-haarentfernung" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200"
              >
                Preise ansehen
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            {/* Trust Elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {trustElements.map((element, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
                  <element.icon className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">{element.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Consultation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Warum ist eine Beratung so wichtig?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Warum eine professionelle Beratung vor Laser-Haarentfernung entscheidend für Ihren Behandlungserfolg ist.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyConsultationReasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="group p-8 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                    <reason.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                So läuft Ihre Beratung ab
              </h2>
              <p className="text-xl text-gray-600">
                Ablauf der kostenlosen Laser-Haarentfernung Beratung in Hamburg – strukturiert und ohne Zeitdruck.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-sm font-bold text-blue-600 mb-2">Schritt {index + 1}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Factors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Was wird bei der Analyse untersucht?
              </h2>
              <p className="text-xl text-gray-600">
                Haut- und Haaranalyse für optimale Laser-Haarentfernung: Diese Faktoren beeinflussen Ihren Behandlungserfolg.
              </p>
            </div>

            <div className="space-y-8">
              {analysisFactors.map((factor, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-colors">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <factor.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {factor.title}
                      </h3>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        {factor.description}
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600 italic">
                          <strong>Details:</strong> {factor.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Was Sie von unserer Beratung erwarten können
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Das bekommen Sie:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Ausführliche, ehrliche Aufklärung</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Individuellen Behandlungsplan</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Transparente Kostenaufstellung</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Realistische Erfolgseinschätzung</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Bedenkzeit ohne Druck</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Das gibt es bei uns nicht:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Verkaufsdruck oder Zeitdruck</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Unrealistische Versprechungen</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Versteckte Kosten</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Paketdruck oder Vertragsbindung</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Oberflächliche Beratung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Häufige Fragen zur Beratung
              </h2>
              <p className="text-xl text-gray-600">
                Die wichtigsten Antworten für Ihren ersten Besuch bei uns.
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
          </div>
        </div>
      </section>

      {/* For New Customers Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Speziell für Neukunden
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Erstberatung Laser-Haarentfernung Hamburg: Besonders ausführlich für Neukunden.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Für Frauen</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Diskrete Beratung zu allen weiblichen Bereichen</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Aufklärung über hormonelle Einflüsse</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Beratung zu Kombi-Behandlungen</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Zyklusgerechte Terminplanung</span>
                  </li>
                </ul>
                <a 
                  href="/frauen" 
                  className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Behandlungen für Frauen ansehen
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <User className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Für Männer</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Beratung zu großflächigen Behandlungen (Rücken)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Diskrete Intimbereich-Beratung</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Anpassung an männliche Haarstruktur</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Realistische Sitzungsplanung</span>
                  </li>
                </ul>
                <a 
                  href="/maenner" 
                  className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Behandlungen für Männer ansehen
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="termin-buchen" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Jetzt kostenlose Laser-Haarentfernung Beratung in Hamburg buchen
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Vereinbaren Sie Ihren unverbindlichen Beratungstermin für Laser-Haarentfernung in Hamburg. 
              Kostenlos, professionell und ohne Verkaufsdruck.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-left">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Telefonisch</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Rufen Sie uns direkt an für eine erste Einschätzung und Terminvereinbarung.
                </p>
                <a 
                  href="tel:+494055435357"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  040 55435357 anrufen
                </a>
                <p className="text-sm text-gray-400 mt-3">
                  Mo-Fr: 9:00-18:00 Uhr
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-left">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Vor Ort</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Besuchen Sie uns in unserer Praxis in Hamburg für eine persönliche Beratung.
                </p>
                <div className="space-y-2 text-gray-300 text-sm mb-4">
                  <p>Derma Light Haarentfernung</p>
                  <p>Gertrudenkirchhof 10</p>
                  <p>20095 Hamburg</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Gertrudenkirchhof+10,+20095+Hamburg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Route planen
                </a>
              </div>
            </div>

            <div className="bg-blue-600 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Jetzt Beratungstermin vereinbaren
              </h3>
              <p className="text-blue-100 mb-6">
                Kostenlos, unverbindlich und ohne Zeitdruck – der erste Schritt zu dauerhaft glatter Haut.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+494055435357" 
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Sofort anrufen
                </a>
                <a 
                  href="mailto:info@dermalight-hamburg.de?subject=Beratungstermin%20Anfrage" 
                  className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                >
                  E-Mail senden
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Beratung;
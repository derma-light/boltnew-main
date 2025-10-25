import React from 'react';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react';

const Datenschutz = () => {
  const sections = [
    {
      id: 'verantwortlicher',
      title: 'Verantwortlicher',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Derma Light Haarentfernung</h4>
            <div className="space-y-1 text-gray-700">
              <p>Inhaber: Ralf Kreppein</p>
              <p>Gertrudenkirchhof 10</p>
              <p>20095 Hamburg</p>
              <p>E-Mail: info@dermalight-hamburg.de</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'datenarten',
      title: 'Arten der verarbeiteten Daten',
      icon: Shield,
      content: (
        <ul className="space-y-2">
          <li className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span>Bestandsdaten (z.B. Namen, Adressen)</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span>Kontaktdaten (z.B. E-Mail, Telefonnummern)</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span>Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos)</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)</span>
          </li>
        </ul>
      )
    },
    {
      id: 'zweck',
      title: 'Zweck der Verarbeitung',
      icon: Eye,
      content: (
        <ul className="space-y-2">
          <li className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span>Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span>Sicherheitsmaßnahmen</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span>Reichweitenmessung/Marketing</span>
          </li>
        </ul>
      )
    },
    {
      id: 'rechte',
      title: 'Ihre Rechte als betroffene Person',
      icon: Lock,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Auskunftsrecht (Art. 15 DSGVO)</h4>
              <p className="text-sm text-gray-700">Recht auf Bestätigung und Auskunft über verarbeitete Daten</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Berichtigungsrecht (Art. 16 DSGVO)</h4>
              <p className="text-sm text-gray-700">Recht auf Vervollständigung und Berichtigung unrichtiger Daten</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Löschungsrecht (Art. 17 DSGVO)</h4>
              <p className="text-sm text-gray-700">Recht auf unverzügliche Löschung betreffender Daten</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Datenübertragbarkeit (Art. 20 DSGVO)</h4>
              <p className="text-sm text-gray-700">Recht auf Erhalt und Übermittlung Ihrer Daten</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DropdownScript />
      <Breadcrumbs currentPageName="Datenschutzerklärung" />
      
      <main className="container mx-auto px-4 lg:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Datenschutzerklärung
            </h1>
            <h2 className="text-xl text-gray-600 font-medium leading-relaxed">
              Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von 
              personenbezogenen Daten innerhalb unseres Onlineangebotes auf.
            </h2>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <p className="text-gray-700 leading-relaxed">
              Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von 
              personenbezogenen Daten (nachfolgend kurz „Daten") innerhalb unseres Onlineangebotes und der 
              mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen auf. 
              Im Hinblick auf die verwendeten Begrifflichkeiten verweisen wir auf die Definitionen im Art. 4 
              der Datenschutzgrundverordnung (DSGVO).
            </p>
          </div>

          {/* Main Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={section.id} className="scroll-mt-20 group" id={section.id}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <section.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{section.title}</h3>
                </div>
                <div className="text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg border border-gray-200 group-hover:border-blue-200 transition-colors">
                  {section.content}
                </div>
              </section>
            ))}

            {/* Detailed Legal Sections */}
            <section className="scroll-mt-20 group" id="rechtsgrundlagen">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">Maßgebliche Rechtsgrundlagen</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 group-hover:border-green-200 transition-colors">
              <p className="text-gray-700 leading-relaxed mb-4">
                Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Einwilligung: Art. 6 Abs. 1 lit. a und Art. 7 DSGVO</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Vertragserfüllung: Art. 6 Abs. 1 lit. b DSGVO</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Rechtliche Verpflichtungen: Art. 6 Abs. 1 lit. c DSGVO</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Berechtigte Interessen: Art. 6 Abs. 1 lit. f DSGVO</span>
                </li>
              </ul>
              </div>
            </section>

            <section className="scroll-mt-20 group" id="sicherheit">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-200 transition-colors">
                  <Lock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-red-700 transition-colors">Sicherheitsmaßnahmen</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 group-hover:border-red-200 transition-colors">
              <p className="text-gray-700 leading-relaxed">
                Wir treffen nach Maßgabe des Art. 32 DSGVO geeignete technische und organisatorische Maßnahmen, 
                um ein dem Risiko angemessenes Schutzniveau zu gewährleisten. Zu den Maßnahmen gehören insbesondere 
                die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des 
                physischen Zugangs zu den Daten sowie des Zugriffs, der Eingabe, Weitergabe und Trennung.
              </p>
              </div>
            </section>

            <section className="scroll-mt-20 group" id="cookies">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">Cookies</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 group-hover:border-purple-200 transition-colors">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Als „Cookies" werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. 
                  Wir können temporäre und permanente Cookies einsetzen.
                </p>
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Cookie-Einstellungen</h4>
                  <p className="text-gray-700 text-sm">
                    Sie können Cookies in den Systemeinstellungen Ihres Browsers deaktivieren oder löschen. 
                    Der Ausschluss von Cookies kann zu Funktionseinschränkungen führen.
                  </p>
                </div>
              </div>
              </div>
            </section>

            <section className="scroll-mt-20 group" id="loeschung">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-orange-700 transition-colors">Löschung von Daten</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 group-hover:border-orange-200 transition-colors">
              <p className="text-gray-700 leading-relaxed mb-4">
                Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 17 und 18 DSGVO gelöscht oder 
                in ihrer Verarbeitung eingeschränkt. Gespeicherte Daten werden gelöscht, sobald sie für ihre 
                Zweckbestimmung nicht mehr erforderlich sind.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Aufbewahrungsfristen</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Geschäftsdaten: 10 Jahre (§§ 147 Abs. 1 AO, 257 Abs. 1 HGB)</li>
                  <li>• Handelsbriefe: 6 Jahre (§ 257 Abs. 1 Nr. 2 und 3 HGB)</li>
                  <li>• Kontaktanfragen: Überprüfung alle zwei Jahre</li>
                </ul>
              </div>
              </div>
            </section>

            <section className="scroll-mt-20 group" id="kontakt">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-indigo-200 transition-colors">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">Kontaktaufnahme</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 group-hover:border-indigo-200 transition-colors">
              <p className="text-gray-700 leading-relaxed">
                Bei der Kontaktaufnahme mit uns (per Kontaktformular, E-Mail, Telefon oder via sozialer Medien) 
                werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage gem. Art. 6 Abs. 1 lit. b DSGVO 
                verarbeitet. Die Angaben können in einem CRM-System gespeichert werden.
              </p>
              </div>
            </section>

            <section className="scroll-mt-20 group" id="hosting">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-teal-200 transition-colors">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">Hosting & Logfiles</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 group-hover:border-teal-200 transition-colors">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Unser Hostinganbieter verarbeitet Bestandsdaten, Kontaktdaten, Inhaltsdaten, Vertragsdaten, 
                  Nutzungsdaten sowie Meta- und Kommunikationsdaten auf Grundlage unserer berechtigten Interessen 
                  gem. Art. 6 Abs. 1 lit. f DSGVO.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Serverlogfiles enthalten:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Name der abgerufenen Webseite und Datei</li>
                    <li>• Datum und Uhrzeit des Abrufs</li>
                    <li>• Übertragene Datenmenge</li>
                    <li>• Browsertyp und Version</li>
                    <li>• Betriebssystem des Nutzers</li>
                    <li>• IP-Adresse und anfragender Provider</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    Logfile-Informationen werden aus Sicherheitsgründen maximal 7 Tage gespeichert.
                  </p>
                </div>
              </div>
              </div>
            </section>

            <section className="scroll-mt-20 group" id="drittdienste">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-pink-200 transition-colors">
                  <Eye className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-pink-700 transition-colors">Eingesetzte Drittdienste</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Facebook Pixel</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Analyse und Optimierung unseres Onlineangebotes sowie zielgerichtete Werbung.
                  </p>
                  <a href="https://www.facebook.com/policy.php" className="text-blue-600 hover:text-blue-700 text-xs">
                    Datenschutzrichtlinie →
                  </a>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Services</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Google Fonts, Maps, ReCaptcha und YouTube für erweiterte Funktionalität.
                  </p>
                  <a href="https://www.google.com/policies/privacy/" className="text-blue-600 hover:text-blue-700 text-xs">
                    Datenschutzerklärung →
                  </a>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Microsoft Bing Ads</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Conversion-Tracking und Reichweitenmessung für Werbeanzeigen.
                  </p>
                  <a href="https://privacy.microsoft.com/de-de/privacystatement" className="text-blue-600 hover:text-blue-700 text-xs">
                    Datenschutzerklärung →
                  </a>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Social Media</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Integration von Twitter, Instagram, Pinterest, Xing und LinkedIn.
                  </p>
                  <span className="text-xs text-gray-600">Jeweilige Datenschutzrichtlinien beachten</span>
                </div>
              </div>
            </section>
          </div>

          {/* Contact & Navigation */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </a>
              <a 
                href="/impressum" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Impressum ansehen
              </a>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Erstellt mit Datenschutz-Generator.de von RA Dr. Thomas Schwenke
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;
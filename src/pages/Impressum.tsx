import React from 'react';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import { ArrowLeft, Building, Phone, Mail, Shield, ExternalLink, FileText } from 'lucide-react';

const Impressum = () => {
  const contactInfo = [
    { icon: Building, label: "Unternehmen", value: "Derma Light Haarentfernung" },
    { icon: Building, label: "Inhaber", value: "Ralf Kreppein" },
    { icon: Building, label: "Adresse", value: "Gertrudenkirchhof 10, 20095 Hamburg" },
    { icon: Phone, label: "Telefon", value: "(040) 554 35357", link: "tel:+494055435357" },
    { icon: Mail, label: "E-Mail", value: "info@dermalight-hamburg.de", link: "mailto:info@dermalight-hamburg.de" }
  ];

  const legalSections = [
    {
      id: 'haftung-inhalte',
      title: 'Haftung für Inhalte',
      content: `Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
      Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter 
      sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
      Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte 
      fremde Informationen zu überwachen.`
    },
    {
      id: 'haftung-links',
      title: 'Haftung für Links',
      content: `Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. 
      Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten 
      ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum 
      Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.`
    },
    {
      id: 'urheberrecht',
      title: 'Urheberrecht',
      content: `Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
      Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen 
      des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und 
      Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.`
    },
    {
      id: 'datenschutz-hinweis',
      title: 'Datenschutz',
      content: `Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
      Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf freiwilliger Basis. 
      Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, 
      dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann.`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DropdownScript />
      <Breadcrumbs currentPageName="Impressum" />
      
      <main className="container mx-auto px-4 lg:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Impressum
            </h1>
            <h2 className="text-xl text-gray-600 font-medium">
              Angaben gemäß § 5 TMG
            </h2>
          </div>

          {/* Contact Information */}
          <section className="mb-16">
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Kontaktdaten</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">{info.label}:</span>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="block text-gray-900 hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="block text-gray-900">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Legal Sections */}
          <div className="space-y-12">
            <div className="flex items-center mb-8 group">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-200 transition-colors">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-red-700 transition-colors">Haftungsausschluss</h3>
            </div>

            {legalSections.map((section, index) => (
              <section key={section.id} className="scroll-mt-20 group" id={section.id}>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">{section.title}</h4>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 group-hover:border-blue-200 transition-colors">
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              </section>
            ))}
          </div>

          {/* Anti-Spam Notice */}
          <section className="mt-16">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 hover:bg-amber-100 hover:border-amber-300 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Widerspruch gegen Werbe-E-Mails</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur 
                    Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit 
                    ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte 
                    im Falle der unverlangten Zusendung von Werbeinformationen vor.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
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
                href="/datenschutz" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileText className="w-4 h-4 mr-2" />
                Datenschutzerklärung
              </a>
            </div>
          </div>

          {/* Legal Source */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-4 inline-block">
              <p className="text-sm text-gray-600 font-medium">
              Quelle: Disclaimer von eRecht24, dem Portal zum Internetrecht von Rechtsanwalt Sören Siebert
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
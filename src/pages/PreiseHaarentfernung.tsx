import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import PriceCalculator from '../components/PriceCalculator';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import { Calculator, Euro, Percent, Star } from 'lucide-react';

const PreiseHaarentfernung = () => {
  const benefits = [
    {
      icon: Calculator,
      title: "Transparente Preise",
      description: "Alle Preise auf einen Blick – keine versteckten Kosten"
    },
    {
      icon: Percent,
      title: "Paket-Rabatte",
      description: "Bis zu 20% Rabatt bei Kombination mehrerer Bereiche"
    },
    {
      icon: Euro,
      title: "Faire Preisgestaltung",
      description: "Hochwertige Behandlung zu fairen Preisen"
    },
    {
      icon: Star,
      title: "Individuelle Pakete",
      description: "Stellen Sie Ihr persönliches Behandlungspaket zusammen"
    }
  ];

  const canonical = 'https://dermalight-hamburg.de/preise-haarentfernung';
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Preise Laser Haarentfernung Hamburg | Derma Light"
        description="Transparente Preise für Laser Haarentfernung in Hamburg. Individuelle Pakete und Rabatte. Kostenlose Erstberatung."
        canonical={canonical}
        breadcrumb={[
          { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
          { name: 'Preise', href: canonical, position: 2 }
        ]}
        service={{
          serviceType: 'Laser Haarentfernung – Preise',
          description: 'Preisübersicht und Paketoptionen für Laser Haarentfernung in Hamburg – fair und transparent.',
          providerId: new URL(canonical).origin + '/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Preise Laser Haarentfernung Hamburg',
          primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
          websiteId: new URL(canonical).origin + '/#website'
        }}
      />
      <Header />
      <DropdownScript />
      <Breadcrumbs currentPageName="Preise Haarentfernung" />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Preise Laser-Haarentfernung Hamburg: Transparente Kosten & Paket-Rabatte
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Aktuelle Preise für Laser-Haarentfernung in Hamburg: Erstellen Sie Ihr individuelles Behandlungspaket 
              und profitieren Sie von bis zu 20% Paket-Rabatt.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-6 py-16">
        <section>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Preise Laser-Haarentfernung Hamburg
          </h3>
          
          <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-6">
            Transparente Kosten & Paket-Rabatte
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Laser-Haarentfernung Hamburg Preise: Stellen Sie Ihr individuelles Behandlungspaket zusammen 
            und sparen Sie bis zu 20% bei Kombination mehrerer Körperbereiche wie Achseln, Beine und Bikinizone.
          </p>
        </section>

        {/* Price Calculator */}
        <section>
          <PriceCalculator />
        </section>

        {/* Additional Information */}
        <section className="mt-16">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Wichtige Hinweise zu den Preisen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Preise pro Sitzung</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Alle Preise verstehen sich pro Einzelsitzung</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Durchschnittlich 6-8 Sitzungen pro Bereich nötig</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Individuelle Beratung für realistische Einschätzung</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Paket-Vorteile</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Automatische Rabattberechnung</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Flexible Terminplanung</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Keine Vertragsbindung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PreiseHaarentfernung;
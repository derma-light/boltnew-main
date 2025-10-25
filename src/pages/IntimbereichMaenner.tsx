import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import IntimbereichMaennerHero from '../components/IntimbereichMaennerHero';
import IntimbereichMaennerIntro from '../components/IntimbereichMaennerIntro';
import IntimbereichMaennerBenefits from '../components/IntimbereichMaennerBenefits';
import IntimbereichMaennerProcess from '../components/IntimbereichMaennerProcess';
import IntimbereichMaennerFAQ from '../components/IntimbereichMaennerFAQ';
import IntimbereichMaennerPricing from '../components/IntimbereichMaennerPricing';
import Breadcrumbs from '../components/Breadcrumbs';
import InternalLinkingWidget from '../components/InternalLinkingWidget';
import TreatmentNavigation from '../components/TreatmentNavigation';
import Footer from '../components/Footer';

const IntimbereichMaenner = () => {
  const canonical = 'https://dermalight-hamburg.de/maenner/intimbereich';
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Laser Haarentfernung Männer Hamburg – Intimbereich | Derma Light"
        description="Diskrete, professionelle Laser Haarentfernung für Männer in Hamburg: Intimbereich effektiv, sicher und hautschonend behandeln. Kostenlose Beratung."
        canonical={canonical}
        breadcrumb={[
          { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
          { name: 'Männer', href: new URL(canonical).origin + '/maenner', position: 2 },
          { name: 'Intimbereich', href: canonical, position: 3 }
        ]}
        service={{
          serviceType: 'Laser Haarentfernung Intimbereich (Männer)',
          description: 'Dauerhafte Laser Haarentfernung im männlichen Intimbereich – diskret, sicher und effektiv in Hamburg.',
          providerId: new URL(canonical).origin + '/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Laser Haarentfernung Männer – Intimbereich in Hamburg',
          primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
          websiteId: new URL(canonical).origin + '/#website'
        }}
        faq={[
          { question: 'Wie viele Sitzungen brauche ich im Intimbereich?', answer: 'Meist 8–12 Sitzungen, abhängig von Haarstärke, -farbe und Hauttyp.' },
          { question: 'Ist die Behandlung schmerzhaft?', answer: 'Durch Kontaktkühlung gut erträglich; meist als kurzes, warmes Pieksen empfunden.' },
          { question: 'Wie bereite ich mich vor?', answer: '24–48 Stunden vorher gründlich rasieren; 2 Wochen vorher Sonne/Solarium vermeiden; am Tag der Behandlung keine Cremes.' },
          { question: 'Was beachten nach der Behandlung?', answer: '24–48 Stunden Sauna, Solarium und intensiven Sport meiden; lockere Kleidung tragen; milde Pflege nutzen.' },
          { question: 'Wann sehe ich Ergebnisse?', answer: 'Nach 2–3 Sitzungen ist das Haarwachstum sichtbar reduziert; Haare fallen in den Wochen nach der Sitzung aus.' },
          { question: 'Sind die Ergebnisse dauerhaft?', answer: 'Behandelte Follikel werden deaktiviert; einzelne feine Haare können hormonell bedingt später nachwachsen.' }
        ]}
      />
      <Header />
      <DropdownScript />
      <Breadcrumbs />
      <IntimbereichMaennerHero />
      <IntimbereichMaennerIntro />
      <IntimbereichMaennerBenefits />
      <IntimbereichMaennerProcess />
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <InternalLinkingWidget currentPage="/maenner/intimbereich" />
      </div>
      <IntimbereichMaennerFAQ />
      <IntimbereichMaennerPricing />
      <div className="container mx-auto px-4 lg:px-6">
        <TreatmentNavigation currentPath="/maenner/intimbereich" />
      </div>
      <Footer />
    </div>
  );
};

export default IntimbereichMaenner;
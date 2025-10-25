import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import IntimbereichMaennerNeuHero from '../components/IntimbereichMaennerNeuHero';
import IntimbereichMaennerNeuBannerIntro from '../components/IntimbereichMaennerNeuBannerIntro';
import IntimbereichMaennerNeuBenefits from '../components/IntimbereichMaennerNeuBenefits';
import IntimbereichMaennerNeuProcess from '../components/IntimbereichMaennerNeuProcess';
import IntimbereichMaennerNeuFAQ from '../components/IntimbereichMaennerNeuFAQ';
import IntimbereichMaennerNeuPricing from '../components/IntimbereichMaennerNeuPricing';
import Breadcrumbs from '../components/Breadcrumbs';
import InternalLinkingWidget from '../components/InternalLinkingWidget';
import TreatmentNavigation from '../components/TreatmentNavigation';
import Footer from '../components/Footer';

const BrustBauch = () => {
  const canonical = 'https://dermalight-hamburg.de/maenner/brust-bauch';

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Laser Haarentfernung Männer Hamburg – Brust & Bauch | Derma Light"
        description="Dauerhafte Laser Haarentfernung für Männer in Hamburg: Brust & Bauch professionell behandeln. Schonend, effektiv, moderne Alexandrit-Technologie. Kostenlose Beratung."
        canonical={canonical}
        breadcrumb={[
          { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
          { name: 'Männer', href: new URL(canonical).origin + '/maenner', position: 2 },
          { name: 'Brust & Bauch', href: canonical, position: 3 }
        ]}
        service={{
          serviceType: 'Laser Haarentfernung Brust & Bauch (Männer)',
          description: 'Dauerhafte Laser Haarentfernung für Männer in Hamburg: Brust & Bauch mit moderner Alexandrit-Technologie – effektiv, hautschonend und professionell.',
          providerId: new URL(canonical).origin + '/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Laser Haarentfernung Männer – Brust & Bauch in Hamburg',
          primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
          websiteId: new URL(canonical).origin + '/#website'
        }}
        faq={[
          { question: 'Wie viele Sitzungen brauche ich für Brust & Bauch?', answer: 'Für die Bereiche Brust und Bauch sind in der Regel 6–10 Sitzungen sinnvoll. Die genaue Anzahl hängt von Haarfarbe, -dichte und Hauttyp ab.' },
          { question: 'Ist die Behandlung schmerzhaft?', answer: 'Dank Kontaktkühlung empfinden die meisten Männer die Behandlung als gut tolerierbar. Häufig wird ein kurzes Wärme- oder Pieksen wahrgenommen.' },
          { question: 'Wie bereite ich mich auf die Laserbehandlung vor?', answer: 'Bitte 24–48 Stunden vorher Brust und Bauch glatt rasieren. 2 Wochen vor der Behandlung intensive Sonne und Solarium vermeiden. Am Tag der Behandlung keine Cremes verwenden.' },
          { question: 'Was muss ich nach der Behandlung beachten?', answer: 'Für 24–48 Stunden starke Hitze (Sauna, Solarium), intensiven Sport und enge, scheuernde Kleidung meiden. Milde, parfümfreie Pflege verwenden.' },
          { question: 'Wann sehe ich erste Ergebnisse?', answer: 'Nach 2–3 Sitzungen wird das Haarwachstum sichtbar reduziert. Feinere und langsamere Nachwuchsphasen sind typisch.' },
          { question: 'Sind die Ergebnisse dauerhaft?', answer: 'Behandelte Haarfollikel werden deaktiviert und bilden in der Regel keine kräftigen Haare mehr. Einzelne feine Haare können hormonell bedingt später nachwachsen.' }
        ]}
      />
      <Header />
      <DropdownScript />
      <Breadcrumbs />
      <IntimbereichMaennerNeuHero />
      <IntimbereichMaennerNeuBannerIntro />
      <IntimbereichMaennerNeuBenefits />
      <IntimbereichMaennerNeuProcess />
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <InternalLinkingWidget currentPage="/maenner/brust-bauch" />
      </div>
      <IntimbereichMaennerNeuFAQ />
      <IntimbereichMaennerNeuPricing />
      <div className="container mx-auto px-4 lg:px-6">
        <TreatmentNavigation currentPath="/maenner/brust-bauch" />
      </div>
      <Footer />
    </div>
  );
};

export default BrustBauch;

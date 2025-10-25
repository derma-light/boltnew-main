import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import IntimbereichHero from '../components/IntimbereichHero';
import IntimbereichWhy from '../components/IntimbereichWhy';
import IntimbereichZones from '../components/IntimbereichZones';
import IntimbereichProcess from '../components/IntimbereichProcess';
import IntimbereichPreparation from '../components/IntimbereichPreparation';
import IntimbereichFAQ from '../components/IntimbereichFAQ';
import Breadcrumbs from '../components/Breadcrumbs';
import InternalLinkingWidget from '../components/InternalLinkingWidget';
import TreatmentNavigation from '../components/TreatmentNavigation';
import Footer from '../components/Footer';

const Intimbereich = () => {
  const canonical = 'https://dermalight-hamburg.de/frauen/intimbereich';
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Laser Haarentfernung Hamburg – Intimbereich Frauen | Derma Light"
        description="Diskrete, professionelle Laser Haarentfernung im Intimbereich für Frauen in Hamburg: hautschonend und effektiv. Kostenlose Beratung."
        canonical={canonical}
        breadcrumb={[
          { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
          { name: 'Frauen', href: new URL(canonical).origin + '/frauen', position: 2 },
          { name: 'Intimbereich', href: canonical, position: 3 }
        ]}
        service={{
          serviceType: 'Laser Haarentfernung Intimbereich (Frauen)',
          description: 'Sanfte und effektive Laser Haarentfernung im Intimbereich für Frauen in Hamburg.',
          providerId: new URL(canonical).origin + '/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Laser Haarentfernung – Intimbereich Frauen in Hamburg',
          primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
          websiteId: new URL(canonical).origin + '/#website'
        }}
        faq={[
          { question: 'Wie viele Sitzungen brauche ich im Intimbereich?', answer: 'Meist 6–10 Sitzungen im Abstand von 4–8 Wochen, abhängig von Haarstärke und Hauttyp.' },
          { question: 'Ist die Behandlung schmerzhaft?', answer: 'Dank Kontaktkühlung gut verträglich; meist als kurzes, warmes Pieksen empfunden.' }
        ]}
      />
      <Header />
      <DropdownScript />
      <Breadcrumbs />
      <IntimbereichHero />
      <IntimbereichWhy />
      <IntimbereichZones />
      <IntimbereichProcess />
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <InternalLinkingWidget currentPage="/frauen/intimbereich" />
      </div>
      <IntimbereichPreparation />
      <IntimbereichFAQ />
      <div className="container mx-auto px-4 lg:px-6">
        <TreatmentNavigation currentPath="/frauen/intimbereich" />
      </div>
      <Footer />
    </div>
  );
};

export default Intimbereich;
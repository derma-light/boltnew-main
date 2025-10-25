import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import GesichtHero from '../components/GesichtHero';
import GesichtBenefits from '../components/GesichtBenefits';
import GesichtProcess from '../components/GesichtProcess';
import GesichtTechnology from '../components/GesichtTechnology';
import GesichtZones from '../components/GesichtZones';
import GesichtFAQ from '../components/GesichtFAQ';
import Breadcrumbs from '../components/Breadcrumbs';
import InternalLinkingWidget from '../components/InternalLinkingWidget';
import TreatmentNavigation from '../components/TreatmentNavigation';
import Footer from '../components/Footer';

const Gesicht = () => {
  const canonical = 'https://dermalight-hamburg.de/gesicht';
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Laser Haarentfernung Hamburg – Gesicht | Derma Light"
        description="Dauerhafte Laser Haarentfernung im Gesicht in Hamburg: präzise, hautschonend und effektiv. Moderne Alexandrit-Technologie. Kostenlose Beratung."
        canonical={canonical}
        breadcrumb={[
          { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
          { name: 'Frauen', href: new URL(canonical).origin + '/frauen', position: 2 },
          { name: 'Gesicht', href: canonical, position: 3 }
        ]}
        service={{
          serviceType: 'Laser Haarentfernung Gesicht',
          description: 'Sanfte, präzise Laser Haarentfernung im Gesichtsbereich in Hamburg.',
          providerId: new URL(canonical).origin + '/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Laser Haarentfernung – Gesicht in Hamburg',
          primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
          websiteId: new URL(canonical).origin + '/#website'
        }}
        faq={[
          { question: 'Wie viele Sitzungen sind im Gesicht üblich?', answer: 'Meist 6–10 Sitzungen im Abstand von 4–8 Wochen, abhängig von Bereich und Haarstärke.' },
          { question: 'Ist die Behandlung schmerzhaft?', answer: 'Durch Kontaktkühlung in der Regel gut verträglich.' }
        ]}
      />
      <Header />
      <DropdownScript />
      <Breadcrumbs />
      <GesichtHero />
      <GesichtBenefits />
      <GesichtProcess />
      <GesichtTechnology />
      <GesichtZones />
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <InternalLinkingWidget currentPage="/gesicht" />
      </div>
      <GesichtFAQ />
      <div className="container mx-auto px-4 lg:px-6">
        <TreatmentNavigation currentPath="/gesicht" />
      </div>
      <Footer />
    </div>
  );
};

export default Gesicht;
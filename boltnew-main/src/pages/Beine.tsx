import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import BeineHero from '../components/BeineHero';
import BeineIntro from '../components/BeineIntro';
import BeineBenefits from '../components/BeineBenefits';
import BeineProcess from '../components/BeineProcess';
import BeineTechnology from '../components/BeineTechnology';
import BeinePreparation from '../components/BeinePreparation';
import BeineFAQ from '../components/BeineFAQ';
import Breadcrumbs from '../components/Breadcrumbs';
import InternalLinkingWidget from '../components/InternalLinkingWidget';
import TreatmentNavigation from '../components/TreatmentNavigation';
import Footer from '../components/Footer';

const Beine = () => {
  const canonical = 'https://dermalight-hamburg.de/beine';
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Laser Haarentfernung Hamburg – Beine | Derma Light"
        description="Dauerhafte Laser Haarentfernung an den Beinen in Hamburg: glatt, schonend und effizient. Moderne Alexandrit-Technologie. Kostenlose Beratung."
        canonical={canonical}
        breadcrumb={[
          { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
          { name: 'Frauen', href: new URL(canonical).origin + '/frauen', position: 2 },
          { name: 'Beine', href: canonical, position: 3 }
        ]}
        service={{
          serviceType: 'Laser Haarentfernung Beine',
          description: 'Lang anhaltend glatte Beine dank professioneller Laser Haarentfernung in Hamburg.',
          providerId: new URL(canonical).origin + '/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Laser Haarentfernung – Beine in Hamburg',
          primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
          websiteId: new URL(canonical).origin + '/#website'
        }}
        faq={[
          { question: 'Wie viele Sitzungen sind an den Beinen üblich?', answer: 'Je nach Haarstärke meist 6–10 Sitzungen im Abstand von 4–8 Wochen.' },
          { question: 'Ist die Behandlung schmerzhaft?', answer: 'Dank Kontaktkühlung angenehm durchführbar; meist als kurzes Pieksen empfunden.' }
        ]}
      />
      <Header />
      <DropdownScript />
      <Breadcrumbs />
      <BeineHero />
      <BeineIntro />
      <BeineBenefits />
      <BeineProcess />
      <BeineTechnology />
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <InternalLinkingWidget currentPage="/beine" />
      </div>
      <BeinePreparation />
      <BeineFAQ />
      <div className="container mx-auto px-4 lg:px-6">
        <TreatmentNavigation currentPath="/beine" />
      </div>
      <Footer />
    </div>
  );
};

export default Beine;
import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import BrustHero from '../components/BrustHero';
import BrustIntro from '../components/BrustIntro';
import BrustZones from '../components/BrustZones';
import BrustBenefits from '../components/BrustBenefits';
import BrustProcess from '../components/BrustProcess';
import BrustTechnology from '../components/BrustTechnology';
import BrustPreparation from '../components/BrustPreparation';
import BrustFAQ from '../components/BrustFAQ';
import Footer from '../components/Footer';

const Brust = () => {
  const canonical = 'https://dermalight-hamburg.de/brust';
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Laser Haarentfernung Hamburg – Brust | Derma Light"
        description="Dauerhafte Laser Haarentfernung an der Brust in Hamburg: effektiv, präzise und hautschonend. Moderne Alexandrit-Technologie. Kostenlose Beratung."
        canonical={canonical}
        breadcrumb={[
          { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
          { name: 'Frauen', href: new URL(canonical).origin + '/frauen', position: 2 },
          { name: 'Brust', href: canonical, position: 3 }
        ]}
        service={{
          serviceType: 'Laser Haarentfernung Brust',
          description: 'Professionelle Laser Haarentfernung an der Brust in Hamburg für dauerhaft glatte Haut.',
          providerId: new URL(canonical).origin + '/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Laser Haarentfernung – Brust in Hamburg',
          primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
          websiteId: new URL(canonical).origin + '/#website'
        }}
        faq={[
          { question: 'Wie viele Sitzungen sind an der Brust üblich?', answer: 'Je nach Haarstärke meist 6–10 Sitzungen im Abstand von 4–8 Wochen.' },
          { question: 'Ist die Behandlung schmerzhaft?', answer: 'Dank Kontaktkühlung gut verträglich.' }
        ]}
      />
      <Header />
      <DropdownScript />
      <BrustHero />
      <BrustIntro />
      <BrustZones />
      <BrustBenefits />
      <BrustProcess />
      <BrustTechnology />
      <BrustPreparation />
      <BrustFAQ />
      <Footer />
    </div>
  );
};

export default Brust;
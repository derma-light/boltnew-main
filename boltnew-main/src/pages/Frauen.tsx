import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import FrauenHero from '../components/FrauenHero';
import FrauenBenefits from '../components/FrauenBenefits';
import FrauenZones from '../components/FrauenZones';
import FrauenProcess from '../components/FrauenProcess';
import FrauenTechnology from '../components/FrauenTechnology';
import FrauenPreparation from '../components/FrauenPreparation';
import FrauenFAQ from '../components/FrauenFAQ';
import Footer from '../components/Footer';

const Frauen = () => {
  const canonical = 'https://dermalight-hamburg.de/frauen';
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Laser Haarentfernung Hamburg – Frauen | Derma Light"
        description="Dauerhafte Laser Haarentfernung für Frauen in Hamburg: moderne Alexandrit-Technologie, hautschonend und effektiv. Kostenlose Beratung."
        canonical={canonical}
        breadcrumb={[
          { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
          { name: 'Frauen', href: canonical, position: 2 }
        ]}
        service={{
          serviceType: 'Laser Haarentfernung – Frauen',
          description: 'Umfassende Laser Haarentfernung für Frauen in Hamburg – individuelle Beratung und Behandlung.',
          providerId: new URL(canonical).origin + '/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Laser Haarentfernung – Frauen in Hamburg',
          primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
          websiteId: new URL(canonical).origin + '/#website'
        }}
      />
      <Header />
      <DropdownScript />
      <FrauenHero />
      <FrauenBenefits />
      <FrauenZones />
      <FrauenProcess />
      <FrauenTechnology />
      <FrauenPreparation />
      <FrauenFAQ />
      <Footer />
    </div>
  );
};

export default Frauen;
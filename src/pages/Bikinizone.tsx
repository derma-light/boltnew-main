import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import BikinizoneHero from '../components/BikinizoneHero';
import BikinizoneWhy from '../components/BikinizoneWhy';
import BikinizoneZones from '../components/BikinizoneZones';
import BikinizoneProcess from '../components/BikinizoneProcess';
import BikinizonePreparation from '../components/BikinizonePreparation';
import BikinizoneFAQ from '../components/BikinizoneFAQ';
import Breadcrumbs from '../components/Breadcrumbs';
import InternalLinkingWidget from '../components/InternalLinkingWidget';
import TreatmentNavigation from '../components/TreatmentNavigation';
import Footer from '../components/Footer';

const Bikinizone = () => {
  const canonical = 'https://dermalight-hamburg.de/bikinizone';
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Laser Haarentfernung Hamburg – Bikinizone | Derma Light"
        description="Dauerhafte Laser Haarentfernung in der Bikinizone in Hamburg: präzise, hautschonend und effektiv. Moderne Alexandrit-Technologie. Kostenlose Beratung."
        canonical={canonical}
        breadcrumb={[
          { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
          { name: 'Frauen', href: new URL(canonical).origin + '/frauen', position: 2 },
          { name: 'Bikinizone', href: canonical, position: 3 }
        ]}
        service={{
          serviceType: 'Laser Haarentfernung Bikinizone',
          description: 'Professionelle Laser Haarentfernung in der Bikinizone in Hamburg – sanft und effizient für glatte Haut.',
          providerId: new URL(canonical).origin + '/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Laser Haarentfernung – Bikinizone in Hamburg',
          primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
          websiteId: new URL(canonical).origin + '/#website'
        }}
        faq={[
          { question: 'Wie viele Sitzungen sind in der Bikinizone üblich?', answer: 'Meist 6–10 Sitzungen, abhängig von Haarstärke und Hauttyp.' },
          { question: 'Ist die Behandlung schmerzhaft?', answer: 'Dank Kontaktkühlung gut verträglich; ein kurzes, warmes Pieksen ist üblich.' }
        ]}
      />
      <Header />
      <DropdownScript />
      <Breadcrumbs />
      <BikinizoneHero />
      <BikinizoneWhy />
      <BikinizoneZones />
      <BikinizoneProcess />
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <InternalLinkingWidget currentPage="/bikinizone" />
      </div>
      <BikinizonePreparation />
      <BikinizoneFAQ />
      <div className="container mx-auto px-4 lg:px-6">
        <TreatmentNavigation currentPath="/bikinizone" />
      </div>
      <Footer />
    </div>
  );
};

export default Bikinizone;
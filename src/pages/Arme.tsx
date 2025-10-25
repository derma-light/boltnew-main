import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import ArmeHero from '../components/ArmeHero';
import ArmeBenefits from '../components/ArmeBenefits';
import ArmeTechnology from '../components/ArmeTechnology';
import ArmeProcess from '../components/ArmeProcess';
import ArmeFAQ from '../components/ArmeFAQ';
import Breadcrumbs from '../components/Breadcrumbs';
import InternalLinkingWidget from '../components/InternalLinkingWidget';
import TreatmentNavigation from '../components/TreatmentNavigation';
import Footer from '../components/Footer';

const Arme = () => {
  const canonical = 'https://dermalight-hamburg.de/arme';
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Laser Haarentfernung Hamburg – Arme | Derma Light"
        description="Dauerhafte Laser Haarentfernung an den Armen in Hamburg: präzise, hautschonend und effektiv. Moderne Alexandrit-Technologie. Kostenlose Beratung."
        canonical={canonical}
        breadcrumb={[
          { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
          { name: 'Frauen', href: new URL(canonical).origin + '/frauen', position: 2 },
          { name: 'Arme', href: canonical, position: 3 }
        ]}
        service={{
          serviceType: 'Laser Haarentfernung Arme',
          description: 'Schonende und effiziente Laser Haarentfernung an den Armen in Hamburg für glatte Haut.',
          providerId: new URL(canonical).origin + '/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Laser Haarentfernung – Arme in Hamburg',
          primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
          websiteId: new URL(canonical).origin + '/#website'
        }}
        faq={[
          { question: 'Wie viele Sitzungen sind an den Armen üblich?', answer: 'Meist 6–8 Sitzungen im Abstand von 4–8 Wochen, abhängig von Haar- und Hauttyp.' },
          { question: 'Ist die Behandlung schmerzhaft?', answer: 'Dank Kontaktkühlung gut verträglich; als kurzes warmes Pieksen wahrgenommen.' },
          { question: 'Wie bereite ich die Arme vor?', answer: '24–48 Stunden vorher rasieren; keine Cremes am Behandlungstag; Sonne/Solarium 2 Wochen vorher vermeiden.' }
        ]}
      />
      <Header />
      <DropdownScript />
      <Breadcrumbs />
      <ArmeHero />
      <ArmeBenefits />
      <ArmeTechnology />
      <ArmeProcess />
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <InternalLinkingWidget currentPage="/arme" />
      </div>
      <ArmeFAQ />
      <div className="container mx-auto px-4 lg:px-6">
        <TreatmentNavigation currentPath="/arme" />
      </div>
      <Footer />
    </div>
  );
};

export default Arme;
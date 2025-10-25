import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import BauchHero from '../components/BauchHero';
import BauchIntro from '../components/BauchIntro';
import BauchBenefits from '../components/BauchBenefits';
import BauchProcess from '../components/BauchProcess';
import BauchCauses from '../components/BauchCauses';
import BauchTechnology from '../components/BauchTechnology';
import BauchFAQ from '../components/BauchFAQ';
import Footer from '../components/Footer';

const Bauch = () => {
  const canonical = 'https://dermalight-hamburg.de/bauch';
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Laser Haarentfernung Hamburg – Bauch | Derma Light"
        description="Dauerhafte Laser Haarentfernung am Bauch in Hamburg: präzise, effektiv und sanft. Moderne Alexandrit-Technologie. Kostenlose Beratung."
        canonical={canonical}
        breadcrumb={[
          { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
          { name: 'Frauen', href: new URL(canonical).origin + '/frauen', position: 2 },
          { name: 'Bauch', href: canonical, position: 3 }
        ]}
        service={{
          serviceType: 'Laser Haarentfernung Bauch',
          description: 'Effektive und hautschonende Laser Haarentfernung am Bauch in Hamburg für ein gepflegtes Erscheinungsbild.',
          providerId: new URL(canonical).origin + '/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Laser Haarentfernung – Bauch in Hamburg',
          primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
          websiteId: new URL(canonical).origin + '/#website'
        }}
        faq={[
          { question: 'Wie viele Sitzungen sind am Bauch üblich?', answer: 'Je nach Haardichte meist 6–10 Sitzungen im Abstand von 4–8 Wochen.' },
          { question: 'Ist die Behandlung schmerzhaft?', answer: 'Die Behandlung ist dank Kontaktkühlung gut verträglich.' }
        ]}
      />
      <Header />
      <DropdownScript />
      <BauchHero />
      <BauchIntro />
      <BauchBenefits />
      <BauchProcess />
      <BauchCauses />
      <BauchTechnology />
      <BauchFAQ />
      <Footer />
    </div>
  );
};

export default Bauch;
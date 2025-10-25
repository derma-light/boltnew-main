import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import AchselnHero from '../components/AchselnHero';
import AchselnBenefits from '../components/AchselnBenefits';
import AchselnTechnology from '../components/AchselnTechnology';
import AchselnFAQ from '../components/AchselnFAQ';
import Breadcrumbs from '../components/Breadcrumbs';
import InternalLinkingWidget from '../components/InternalLinkingWidget';
import TreatmentNavigation from '../components/TreatmentNavigation';
import Process from '../components/Process';
import Footer from '../components/Footer';

const Achseln = () => {
  const canonical = 'https://dermalight-hamburg.de/achseln';
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Laser Haarentfernung Hamburg – Achseln | Derma Light"
        description="Dauerhafte Laser Haarentfernung der Achseln in Hamburg: hautschonend, effektiv und präzise. Moderne Alexandrit-Technologie. Kostenlose Beratung."
        canonical={canonical}
        breadcrumb={[
          { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
          { name: 'Frauen', href: new URL(canonical).origin + '/frauen', position: 2 },
          { name: 'Achseln', href: canonical, position: 3 }
        ]}
        service={{
          serviceType: 'Laser Haarentfernung Achseln',
          description: 'Professionelle Laser Haarentfernung der Achseln in Hamburg – dauerhaft glatte Haut durch moderne Alexandrit-Technologie.',
          providerId: new URL(canonical).origin + '/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Laser Haarentfernung – Achseln in Hamburg',
          primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
          websiteId: new URL(canonical).origin + '/#website'
        }}
        faq={[
          { question: 'Wie viele Sitzungen brauche ich für die Achseln?', answer: 'In der Regel 6–8 Sitzungen im Abstand von 4–8 Wochen, je nach Haarstärke und Hauttyp.' },
          { question: 'Wie lange dauert eine Achsel-Behandlung?', answer: 'Die Laserzeit liegt meist bei 5–10 Minuten zuzüglich kurzer Vorbereitung.' },
          { question: 'Ist die Achsel-Behandlung schmerzhaft?', answer: 'Die meisten empfinden ein kurzes, warmes Prickeln; Kontaktkühlung erhöht den Komfort.' },
          { question: 'Was muss ich vor dem Termin beachten?', answer: '12–24 Stunden vorher glatt rasieren; keine enthaarenden Wachse/Epilierer ≥ 4 Wochen; Sonne/Solarium 2 Wochen vermeiden.' }
        ]}
      />
      <Header />
      <DropdownScript />
      <Breadcrumbs />
      <AchselnHero />
      <AchselnBenefits />
      <AchselnTechnology />
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <InternalLinkingWidget currentPage="/achseln" />
      </div>
      <AchselnFAQ />
      <Process />
      <div className="container mx-auto px-4 lg:px-6">
        <TreatmentNavigation currentPath="/achseln" />
      </div>
      <Footer />
    </div>
  );
};

export default Achseln;
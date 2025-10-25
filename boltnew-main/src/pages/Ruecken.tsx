// React-Import entfernt, da nicht direkt verwendet
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import RueckenHero from '../components/RueckenHero';
import RueckenBannerIntro from '../components/RueckenBannerIntro';
import RueckenBenefits from '../components/RueckenBenefits';
import RueckenProcess from '../components/RueckenProcess';
import RueckenFAQ from '../components/RueckenFAQ';
import RueckenPricing from '../components/RueckenPricing';
import Breadcrumbs from '../components/Breadcrumbs';
import InternalLinkingWidget from '../components/InternalLinkingWidget';
import TreatmentNavigation from '../components/TreatmentNavigation';
import Footer from '../components/Footer';

const Ruecken = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Laser Haarentfernung Männer Hamburg – Rücken | Derma Light"
        description="Dauerhafte Laser Haarentfernung für Männer in Hamburg: Rücken professionell, effektiv und hautschonend behandeln. Moderne Alexandrit-Technologie. Kostenlose Beratung."
        canonical={"https://dermalight-hamburg.de/maenner/ruecken"}
        breadcrumb={[
          { name: 'Home', href: 'https://dermalight-hamburg.de/', position: 1 },
          { name: 'Männer', href: 'https://dermalight-hamburg.de/maenner', position: 2 },
          { name: 'Rücken', href: 'https://dermalight-hamburg.de/maenner/ruecken', position: 3 }
        ]}
        service={{
          serviceType: 'Laser Haarentfernung Rücken (Männer)',
          description: 'Laser Haarentfernung am Rücken für Männer in Hamburg – gründlich, effizient und hautschonend.',
          providerId: 'https://dermalight-hamburg.de/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Laser Haarentfernung Männer – Rücken in Hamburg',
          primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
          websiteId: 'https://dermalight-hamburg.de/#website'
        }}
        faq={[
          { question: 'Wie viele Sitzungen brauche ich für den Rücken?', answer: 'Je nach Haardichte meist 6–10 Sitzungen im Abstand von 4–6 Wochen.' },
          { question: 'Ist die Behandlung am Rücken schmerzhaft?', answer: 'Dank Kontaktkühlung gut tolerierbar; es wird häufig als warmes Pieksen beschrieben.' },
          { question: 'Wie bereite ich den Rücken vor?', answer: 'Bitte 24–48 Stunden vor dem Termin vollständig rasieren; Sonne und Solarium 2 Wochen vorher meiden.' },
          { question: 'Was beachten nach der Behandlung?', answer: '24–48 Stunden starke Hitze und intensiven Sport meiden; milde, parfümfreie Pflege nutzen.' },
          { question: 'Wann sehe ich Ergebnisse?', answer: 'Nach 2–3 Sitzungen sichtbar weniger Haar; Haare fallen 2–3 Wochen nach der Sitzung vermehrt aus.' },
          { question: 'Sind die Ergebnisse dauerhaft?', answer: 'Behandelte Follikel werden deaktiviert; gelegentlich können einzelne feine Haare später nachwachsen.' }
        ]}
      />
      <Header />
      <DropdownScript />
      <Breadcrumbs />
      <RueckenHero />
      <RueckenBannerIntro />
      <RueckenBenefits />
      <RueckenProcess />
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <InternalLinkingWidget currentPage="/maenner/ruecken" />
      </div>
      <RueckenFAQ />
      <RueckenPricing />
      <div className="container mx-auto px-4 lg:px-6">
        <TreatmentNavigation currentPath="/maenner/ruecken" />
      </div>
      <Footer />
    </div>
  );
};

export default Ruecken;
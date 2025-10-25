import React from 'react';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import IntimbereichMaennerNeuHero from '../components/IntimbereichMaennerNeuHero';
import IntimbereichMaennerNeuBannerIntro from '../components/IntimbereichMaennerNeuBannerIntro';
import IntimbereichMaennerNeuBenefits from '../components/IntimbereichMaennerNeuBenefits';
import IntimbereichMaennerNeuProcess from '../components/IntimbereichMaennerNeuProcess';
import IntimbereichMaennerNeuFAQ from '../components/IntimbereichMaennerNeuFAQ';
import IntimbereichMaennerNeuPricing from '../components/IntimbereichMaennerNeuPricing';
import Breadcrumbs from '../components/Breadcrumbs';
import InternalLinkingWidget from '../components/InternalLinkingWidget';
import TreatmentNavigation from '../components/TreatmentNavigation';
import Footer from '../components/Footer';

const BrustBauch = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DropdownScript />
      <Breadcrumbs />
      <IntimbereichMaennerNeuHero />
      <IntimbereichMaennerNeuBannerIntro />
      <IntimbereichMaennerNeuBenefits />
      <IntimbereichMaennerNeuProcess />
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <InternalLinkingWidget currentPage="/maenner/brust-bauch" />
      </div>
      <IntimbereichMaennerNeuFAQ />
      <IntimbereichMaennerNeuPricing />
      <div className="container mx-auto px-4 lg:px-6">
        <TreatmentNavigation currentPath="/maenner/brust-bauch" />
      </div>
      <Footer />
    </div>
  );
};

export default BrustBauch;

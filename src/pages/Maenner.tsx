import React from 'react';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import MaennerHero from '../components/MaennerHero';
import MaennerBenefits from '../components/MaennerBenefits';
import MaennerZones from '../components/MaennerZones';
import MaennerProcess from '../components/MaennerProcess';
import MaennerTechnology from '../components/MaennerTechnology';
import MaennerFAQ from '../components/MaennerFAQ';
import Footer from '../components/Footer';

const Maenner = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DropdownScript />
      <MaennerHero />
      <MaennerBenefits />
      <MaennerZones />
      <MaennerProcess />
      <MaennerTechnology />
      <MaennerFAQ />
      <Footer />
    </div>
  );
};

export default Maenner;
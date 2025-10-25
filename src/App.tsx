import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Technology from './components/Technology';
import Process from './components/Process';
import SEOLinks from './components/SEOLinks';
import SEOFAQ from './components/SEOFAQ';
import Footer from './components/Footer';
import HomeLongform from './components/HomeLongform';
import DropdownScript from './components/DropdownScript';

// Seiten per Code-Splitting (dynamische Imports)
const Achseln = lazy(() => import('./pages/Achseln'));
const Arme = lazy(() => import('./pages/Arme'));
const Bauch = lazy(() => import('./pages/Bauch'));
const Beine = lazy(() => import('./pages/Beine'));
const Bikinizone = lazy(() => import('./pages/Bikinizone'));
const Brust = lazy(() => import('./pages/Brust'));
const Gesicht = lazy(() => import('./pages/Gesicht'));
const Intimbereich = lazy(() => import('./pages/Intimbereich'));
const Frauen = lazy(() => import('./pages/Frauen'));
const Maenner = lazy(() => import('./pages/Maenner'));
const IntimbereichMaenner = lazy(() => import('./pages/IntimbereichMaenner'));
const BrustBauch = lazy(() => import('./pages/BrustBauch'));
const Ruecken = lazy(() => import('./pages/Ruecken'));
const Datenschutz = lazy(() => import('./pages/Datenschutz'));
const Impressum = lazy(() => import('./pages/Impressum'));
const PreiseHaarentfernung = lazy(() => import('./pages/PreiseHaarentfernung'));
const Beratung = lazy(() => import('./pages/Beratung'));
const Termine = lazy(() => import('./pages/Termine'));

const HomePage = () => (
  <>
    <Header />
    <DropdownScript />
    <Hero />
    <Benefits />
    <Technology />
    <Process />
    <HomeLongform />
    <SEOFAQ />
    <SEOLinks />
    <Footer />
  </>
);

function App() {
  return (
      <div className="min-h-screen bg-white">
        <Suspense fallback={<div className="p-8 text-center text-gray-600">Laden...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/frauen" element={<Frauen />} />
            <Route path="/maenner" element={<Maenner />} />
            <Route path="/achseln" element={<Achseln />} />
            <Route path="/arme" element={<Arme />} />
            <Route path="/bauch" element={<Bauch />} />
            <Route path="/beine" element={<Beine />} />
            <Route path="/bikinizone" element={<Bikinizone />} />
            <Route path="/brust" element={<Brust />} />
            <Route path="/gesicht" element={<Gesicht />} />
            <Route path="/frauen/intimbereich" element={<Intimbereich />} />
            <Route path="/maenner/intimbereich" element={<IntimbereichMaenner />} />
            <Route path="/maenner/brust-bauch" element={<BrustBauch />} />
            <Route path="/maenner/ruecken" element={<Ruecken />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/preise-haarentfernung" element={<PreiseHaarentfernung />} />
            <Route path="/beratung" element={<Beratung />} />
            <Route path="/termine" element={<Termine />} />
          </Routes>
        </Suspense>
      </div>
  );
}

export default App;
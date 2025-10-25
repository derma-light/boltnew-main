import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import { Calendar, ArrowRight, CheckCircle, Info, Shield, Clock, MapPin, ExternalLink } from 'lucide-react';

const Termine = () => {
  const bookingUrl = 'https://termine.dermalight-hamburg.de/';

  const infos = [
    {
      icon: CheckCircle,
      title: 'Einfach online buchen',
      text: 'Wählen Sie Datum und Uhrzeit bequem online. Sie erhalten sofort eine Bestätigung per E‑Mail.'
    },
    {
      icon: Shield,
      title: 'Kostenlose Erstberatung',
      text: 'Die Erstberatung ist unverbindlich und kostenlos – ideal, um alle Fragen zu klären.'
    },
    {
      icon: Clock,
      title: 'Flexible Zeiten',
      text: 'Früh- und Abendtermine verfügbar. Kurzfristige Slots werden laufend freigegeben.'
    }
  ];

  const beforeBooking = [
    {
      icon: Info,
      title: 'Rasieren statt epilieren',
      text: 'Bitte 24 Stunden vor einem Behandlungstermin rasieren. Nicht epilieren oder waxen.'
    },
    {
      icon: MapPin,
      title: 'Anfahrt',
      text: 'Derma Light, Gertrudenkirchhof 10, 20095 Hamburg. Gute ÖPNV‑Anbindung, Parkhäuser in der Nähe.'
    },
    {
      icon: Shield,
      title: 'Medizinische Hinweise',
      text: 'Teilen Sie uns Medikamente, Hauterkrankungen oder eine Schwangerschaft vorab mit.'
    }
  ];

  const canonical = 'https://dermalight-hamburg.de/termine';
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Termine Laser Haarentfernung Hamburg – Online buchen | Derma Light"
        description="Buchen Sie Termine zur Laser Haarentfernung in Hamburg online: kostenlose Erstberatung oder Behandlung – schnell und unkompliziert."
        canonical={canonical}
        breadcrumb={[
          { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
          { name: 'Termine', href: canonical, position: 2 }
        ]}
        service={{
          serviceType: 'Online-Terminbuchung Laser Haarentfernung',
          description: 'Online Termine für Laser Haarentfernung in Hamburg – Beratung und Behandlung schnell buchen.',
          providerId: new URL(canonical).origin + '/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Termine – Laser Haarentfernung Hamburg',
          primaryImagePath: '/laser-haarentfernung-schonende-behandlung-banner.png',
          websiteId: new URL(canonical).origin + '/#website'
        }}
      />
      <Header />
      <DropdownScript />
      <Breadcrumbs currentPageName="Termine" />

      {/* Hero */}
      <section className="relative bg-gray-50 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/laser-haarentfernung-schonende-behandlung-banner.png"
            alt="Laser-Haarentfernung Hamburg"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              Online-Terminbuchung · Hamburg
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Termine buchen
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-6">
              Schnell, transparent und unverbindlich
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Buchen Sie Ihren Beratungstermin oder eine Behandlung direkt online. Keine Wartezeit am Telefon – 
              wählen Sie einfach den passenden Slot aus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Zum Terminplan
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {infos.map((item, idx) => (
                <div key={idx} className="flex items-start p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
                  <item.icon className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-700">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to book */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">So buchen Sie Ihren Termin</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Der gesamte Prozess dauert nur wenige Minuten – ganz ohne Telefonwarteschleife.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Terminart wählen',
                  text: 'Erstberatung (kostenlos) oder Behandlung – je nach Bedarf.'
                },
                {
                  step: '2',
                  title: 'Zeit auswählen',
                  text: 'Freien Slot im Kalender anklicken und bestätigen.'
                },
                {
                  step: '3',
                  title: 'Bestätigung erhalten',
                  text: 'Sie bekommen alle Details per E‑Mail – inklusive Änderung/Stornierung.'
                }
              ].map((card) => (
                <div key={card.step} className="group p-8 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 border border-gray-100 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {card.step}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Jetzt Termin im Kalender auswählen
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Before booking */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Gut zu wissen vor der Buchung</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {beforeBooking.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Jetzt Termin sichern</h3>
            <p className="text-blue-100 mb-8">Kostenlose Erstberatung oder Folgetermin – in wenigen Klicks online gebucht.</p>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Zum Online‑Kalender
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Termine;





import React from 'react';
import { Phone, MapPin, FileText, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer bg-gray-900 text-white" role="contentinfo">
      <div className="footer-inner container mx-auto px-4 lg:px-6 py-16">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-blue-400 mb-2">Derma Light Haarentfernung</h4>
                <div className="flex items-start space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <div>Gertrudenkirchhof 10</div>
                    <div>20095 Hamburg</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">Telefon:</span>
                <a 
                  href="tel:+494055435357" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  040 55435357
                </a>
              </div>
            </div>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Rechtliches</h3>
            <div className="space-y-3">
              <a href="/impressum" className="block text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                Impressum
              </a>
              <a href="/datenschutz" className="block text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Datenschutz
              </a>
              <a href="/frauen" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Behandlungen für Frauen
              </a>
              <a href="/maenner" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Behandlungen für Männer
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick-Links</h3>
            <div className="space-y-3">
              <a href="/achseln" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Achseln
              </a>
              <a href="/bikinizone" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Bikinizone
              </a>
              <a href="/beine" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Beine
              </a>
              <a href="/preise-haarentfernung" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Preisliste
              </a>
              <a href="/gesicht" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Gesicht
              </a>
            </div>
          </div>

          {/* CTA Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Termin?</h3>
            <p className="text-gray-300 mb-4">
              Fragen klären & unverbindlich beraten lassen.
            </p>
            <a 
              href="/beratung" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Beratung anfragen
            </a>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            © Derma Light Haarentfernung 2024
          </p>
          <p className="text-sm text-gray-500">
            Hinweis: Ergebnisse können individuell variieren.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
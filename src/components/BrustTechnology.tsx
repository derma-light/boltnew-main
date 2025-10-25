import { Zap, Target, ThermometerSun, AlertTriangle } from 'lucide-react';
import BrustLaserTile from './BrustLaserTile';

const BrustTechnology = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technologie & Sicherheit
            </h2>
            <p className="text-xl text-gray-600">
              Selektive Phototermolyse mit spezieller Anpassung für empfindliche Brustbereiche.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Selektive Phototermolyse</h3>
                  <p className="text-gray-600">
                    Laserenergie wird vom Melanin im Haarschaft absorbiert und zerstört durch Wärmeübertragung 
                    Strukturen im Follikel.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ThermometerSun className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontakt-/Saphirkühlung</h3>
                  <p className="text-gray-600">
                    Kontrollierte Energien und gute Kühlung sind wichtig, um epidermalen Stress zu minimieren, 
                    da die Areola mehr Pigment tragen kann.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Haartyp-spezifische Wirkung</h3>
                  <p className="text-gray-600">
                    Dunklere terminale Haare reagieren deutlich besser als feine, kaum pigmentierte Flaumhaare (Vellus).
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <BrustLaserTile />
            </div>
          </div>

          {/* Medical Advisory */}
          <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Hinweis zu hormonellen Ursachen
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Vermehrter neuer Haarwuchs oder plötzlich stärkere Verdichtung sollte medizinisch abgeklärt werden 
                  (u. a. Endokrinologie / Gynäkologie). Die Laserbehandlung ersetzt keine Diagnose, kann aber nach 
                  Abklärung sinnvoll zur kosmetischen Reduktion beitragen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contextual Links */}
      <div className="text-center mt-16">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/beratung" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kostenlose Erstberatung vereinbaren
          </a>
          <a 
            href="/preise-haarentfernung" 
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Alle Preise ansehen
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrustTechnology;
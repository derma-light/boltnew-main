import React from 'react';
import { Shield, Zap } from 'lucide-react';

const IntimbereichMaennerTile = () => {
  return (
    <article className="tile" aria-labelledby="tile-intimbereich-maenner-head">
      <header>
        <div className="icon-wrap" aria-hidden="true">
          <div className="flex items-center justify-center w-full h-full">
            <Shield className="w-6 h-6 text-white" />
            <Zap className="w-4 h-4 text-white ml-1" />
          </div>
        </div>
        <div>
          <h3 id="tile-intimbereich-maenner-head">Laser Intimbereich Männer – Parametrierung</h3>
          <div className="divider" aria-hidden="true"></div>
        </div>
      </header>

      <p>
        Individuelle Anpassung der Laser-Parameter speziell für männliche Haut und Haarstruktur im Intimbereich. 
        Moderne Diodenlaser-Technologie mit integrierter Kontaktkühlung für maximale Effizienz und Komfort.
      </p>

      <a className="more" href="/maenner/intimbereich" aria-label="Mehr über Laser Intimbereich für Männer erfahren">
        Mehr erfahren →
      </a>
    </article>
  );
};

export default IntimbereichMaennerTile;

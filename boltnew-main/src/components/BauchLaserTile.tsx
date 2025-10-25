import { Target, Zap } from 'lucide-react';

const BauchLaserTile = () => {
  return (
    <article className="tile" aria-labelledby="tile-bauch-laser-head">
      <header>
        <div className="icon-wrap" aria-hidden="true">
          <div className="flex items-center justify-center w-full h-full">
            <Target className="w-6 h-6 text-white" />
            <Zap className="w-4 h-4 text-white ml-1" />
          </div>
        </div>
        <div>
          <h3 id="tile-bauch-laser-head">Laser Haarentfernung Bauch – Präzise Behandlung</h3>
          <div className="divider" aria-hidden="true"></div>
        </div>
      </header>

      <p>
        Spezialisierte Laser-Behandlung für empfindliche Bauchbereiche. Individuelle Parameter für verschiedene 
        Haardicken und Hautzustände mit integrierter Kontaktkühlung für maximalen Komfort.
      </p>

      <a className="more" href="/bauch" aria-label="Mehr über Laser Haarentfernung am Bauch erfahren">
        Mehr erfahren →
      </a>
    </article>
  );
};

export default BauchLaserTile;

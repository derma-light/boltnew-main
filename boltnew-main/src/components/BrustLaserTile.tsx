import { Heart, Shield } from 'lucide-react';

const BrustLaserTile = () => {
  return (
    <article className="tile" aria-labelledby="tile-brust-laser-head">
      <header>
        <div className="icon-wrap" aria-hidden="true">
          <div className="flex items-center justify-center w-full h-full">
            <Heart className="w-6 h-6 text-white" />
            <Shield className="w-4 h-4 text-white ml-1" />
          </div>
        </div>
        <div>
          <h3 id="tile-brust-laser-head">Laser Haarentfernung Brust – Schonende Behandlung</h3>
          <div className="divider" aria-hidden="true"></div>
        </div>
      </header>

      <p>
        Spezialisierte Laser-Behandlung für empfindliche Brustbereiche. Kontaktkühlung und angepasste 
        Parameter für schonende Haarreduktion mit maximaler Sicherheit und Komfort.
      </p>

      <a className="more" href="/brust" aria-label="Mehr über Laser Haarentfernung an der Brust erfahren">
        Mehr erfahren →
      </a>
    </article>
  );
};

export default BrustLaserTile;

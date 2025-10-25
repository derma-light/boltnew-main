import { Eye, Zap } from 'lucide-react';

const GesichtLaserTile = () => {
  return (
    <article className="tile" aria-labelledby="tile-gesicht-laser-head">
      <header>
        <div className="icon-wrap" aria-hidden="true">
          <div className="flex items-center justify-center w-full h-full">
            <Eye className="w-6 h-6 text-white" />
            <Zap className="w-4 h-4 text-white ml-1" />
          </div>
        </div>
        <div>
          <h3 id="tile-gesicht-laser-head">Laser Haarentfernung Gesicht – Präzise Behandlung</h3>
          <div className="divider" aria-hidden="true"></div>
        </div>
      </header>

      <p>
        Spezialisierte Laser-Behandlung für sensible Gesichtsbereiche. Individuelle Parameter für 
        Oberlippe, Kinn und Wangen mit schonender Kontaktkühlung für optimale Ergebnisse.
      </p>

      <a className="more" href="/gesicht" aria-label="Mehr über Laser Haarentfernung im Gesicht erfahren">
        Mehr erfahren →
      </a>
    </article>
  );
};

export default GesichtLaserTile;

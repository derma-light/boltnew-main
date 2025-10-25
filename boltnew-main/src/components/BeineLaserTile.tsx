import { Activity, Zap } from 'lucide-react';

const BeineLaserTile = () => {
  return (
    <article className="tile" aria-labelledby="tile-beine-laser-head">
      <header>
        <div className="icon-wrap" aria-hidden="true">
          <div className="flex items-center justify-center w-full h-full">
            <Activity className="w-6 h-6 text-white" />
            <Zap className="w-4 h-4 text-white ml-1" />
          </div>
        </div>
        <div>
          <h3 id="tile-beine-laser-head">Laser Haarentfernung Beine – Großflächige Behandlung</h3>
          <div className="divider" aria-hidden="true"></div>
        </div>
      </header>

      <p>
        Effektive Laser-Behandlung für Unter- und Oberschenkel. Mehrwellenlängen-Technologie mit 
        selektiver Phototermolyse für dauerhafte Haarreduktion an den Beinen.
      </p>

      <a className="more" href="/beine" aria-label="Mehr über Laser Haarentfernung an den Beinen erfahren">
        Mehr erfahren →
      </a>
    </article>
  );
};

export default BeineLaserTile;

import { Heart, Zap } from 'lucide-react';

const FrauenLaserTile = () => {
  return (
    <article className="tile" aria-labelledby="tile-frauen-laser-head">
      <header>
        <div className="icon-wrap" aria-hidden="true">
          <div className="flex items-center justify-center w-full h-full">
            <Heart className="w-6 h-6 text-white" />
            <Zap className="w-4 h-4 text-white ml-1" />
          </div>
        </div>
        <div>
          <h3 id="tile-frauen-laser-head">Frauen Laserhaarentfernung – alle Körperbereiche</h3>
          <div className="divider" aria-hidden="true"></div>
        </div>
      </header>

      <p>
        Professionelle Laser-Haarentfernung für alle weiblichen Körperbereiche. Von Gesicht bis Beine – 
        individuelle Behandlung mit modernster Diodenlaser-Technologie für dauerhafte Haarreduktion.
      </p>

      <a className="more" href="/frauen" aria-label="Mehr über Frauen Laserhaarentfernung erfahren">
        Mehr erfahren →
      </a>
    </article>
  );
};

export default FrauenLaserTile;

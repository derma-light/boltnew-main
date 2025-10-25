import IntimbereichMaennerTile from './IntimbereichMaennerTile';

const IntimbereichMaennerIntro = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Warum Laser-Haarentfernung im Intimbereich für Männer?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Linke Spalte: Text */}
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Immer mehr Männer entscheiden sich für eine professionelle Laser-Haarentfernung im Intimbereich. 
                Die Gründe sind vielfältig: verbessertes Hygienegefühl, weniger Hautirritationen durch Rasur, 
                ein gepflegtes Erscheinungsbild und mehr Komfort beim Sport oder in der Sauna.
              </p>
              <p>
                Unsere Behandlung ist speziell auf die Bedürfnisse von Männern abgestimmt. Wir verwenden modernste 
                Laser-Technologie mit individuell angepassten Parametern für männliche Haut und Haarstruktur. 
                Diskretion und Professionalität stehen dabei immer im Vordergrund.
              </p>
              <p>
                Die Behandlung erfolgt in einem geschützten Rahmen durch geschultes Fachpersonal. Wir nehmen uns 
                die Zeit für eine ausführliche Beratung und gehen individuell auf Ihre Wünsche und Bedenken ein.
              </p>
            </div>

            {/* Rechte Spalte: Kachel */}
            <div className="flex justify-center lg:justify-end">
              <IntimbereichMaennerTile />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntimbereichMaennerIntro;
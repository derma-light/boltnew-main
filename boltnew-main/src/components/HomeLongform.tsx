import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeLongform() {
  return (
    <main role="main" className="bg-white">
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header>
          <h1 className="mb-4 text-2xl font-semibold text-gray-900">
            Dauerhafte Laser-Haarentfernung in Hamburg – sicher, effektiv, transparent
          </h1>
          <div className="mb-6 rounded-md border border-gray-200 bg-gray-50 p-4">
            <p className="text-gray-800">
              <span className="mr-2 inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-xs font-medium text-gray-800 shadow-sm">
                📌 Kurzfassung
              </span>
              Wir bieten seit 2005 professionelle <strong>Laserhaarentfernung in Hamburg</strong>
              – mit <strong>Alexandrit‑Laser (755&nbsp;nm)</strong> und <strong>Diodenlasern</strong>. Typisch sind 6–10 Sitzungen,
              klare Preise pro Behandlung und Kombi‑Pakete. Jetzt
              {" "}
              <Link to="/beratung" className="text-blue-700 underline">kostenlos beraten lassen</Link>
              {" "}
              oder direkt die{ " "}
              <Link to="/preise-haarentfernung" className="text-blue-700 underline">Preise ansehen</Link>.
            </p>
          </div>
          <p className="mb-6 text-gray-700">
            Seit 2005 steht Derma Light in Hamburg für professionelle{' '}
            <strong>Laser Haarentfernung</strong> mit moderner Technologie. Wir arbeiten mit
            <strong> Alexandrit‑Laser (755&nbsp;nm)</strong> und <strong>Diodenlasern</strong> für eine
            <strong> dauerhafte Haarentfernung</strong> – ohne Laufzeitverträge und mit klaren Preisen.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">Für wen ist die Methode geeignet?</h2>
          <p className="text-gray-700">
            Besonders gute Resultate sehen wir bei hellerer Haut mit dunkleren Haaren, weil der
            Laser das Haarpigment (Melanin) gezielt anspricht. Sehr helle, rote oder graue Haare
            enthalten wenig Melanin und reagieren entsprechend schwächer. Wir beraten individuell,
            damit Sie die für Sie passende Lösung erhalten.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">Ablauf einer Behandlung</h2>
          <p className="text-gray-700">
            Jede Behandlung beginnt mit einer kurzen Anamnese und einem Hautcheck. Die eigentliche
            Laserzeit variiert je nach Zone von wenigen Minuten bis zu etwa einer Stunde. Dank
            Kontaktkühlung wird die Wärmeentwicklung an der Haut reduziert. 2–3 Wochen nach der
            Sitzung fallen viele behandelte Haare in der sogenannten Shedding‑Phase aus.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">Wie viele Sitzungen sind nötig?</h2>
          <p className="text-gray-700">
            Üblicherweise benötigen Sie <strong>6–10 Sitzungen</strong> im Abstand von 4–8 Wochen.
            Faktoren wie Haarstärke, Dichte, Hormone und Hauttyp beeinflussen die Anzahl. Vereinzelte
            Auffrischungen können sinnvoll sein, um das Ergebnis langfristig zu erhalten.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">Preise und Kombi‑Pakete</h2>
          <p className="text-gray-700">
            Unsere <strong>Preise</strong> sind transparent und gelten pro Sitzung. Durch
            <strong> Kombi‑Pakete</strong> – zum Beispiel <em>Achseln + Intimbereich</em> oder
            <em> Unterschenkel + Achseln</em> – lässt sich der Einzelpreis pro Zone deutlich reduzieren.
          </p>
          <p className="mt-2">
            <Link to="/preise-haarentfernung" className="text-blue-700 underline">
              Zu den Preisen
            </Link>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">Warum Derma Light?</h2>
          <div className="mb-4 flex flex-wrap gap-2" aria-label="Trust Badges">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
              ⭐ Seit 2005 Erfahrung
            </span>
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
              ★ 4,9/5 aus 23 Bewertungen
            </span>
            <span className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-800">
              ⚙️ Alexandrit 755 nm & Diodenlaser
            </span>
            <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-800">
              ✓ Transparente Preise & Pakete
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-800">
              📍 Innenstadt: Gertrudenkirchhof 10
            </span>
          </div>
          <div className="mb-5 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <p className="text-gray-800">
                Fragen oder direkt starten? Lassen Sie sich <strong>kostenlos beraten</strong> oder buchen Sie
                sofort einen <strong>Termin</strong>.
              </p>
              <div className="flex gap-2">
                <Link to="/beratung" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  Kostenlose Beratung
                </Link>
                <Link to="/termine" className="inline-flex items-center rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50">
                  Termin vereinbaren
                </Link>
              </div>
            </div>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li><strong>Erfahrung seit 2005:</strong> Tausende erfolgreiche Behandlungen in Hamburg.</li>
            <li><strong>Top‑Bewertungen:</strong> 4,9/5 Sterne bei aktuell 23 Rezensionen.</li>
            <li><strong>Moderne Technologie:</strong> Alexandrit‑Laser (755&nbsp;nm) & Diodenlaser.</li>
            <li><strong>Transparente Preise:</strong> Pro Sitzung, ohne Laufzeitvertrag – Kombi‑Pakete möglich.</li>
            <li><strong>Zentrale Lage:</strong> Gertrudenkirchhof&nbsp;10, 20095 Hamburg (Innenstadt).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">Mikro‑FAQ</h2>
          <dl className="space-y-3 text-gray-700">
            <div>
              <dt className="font-medium text-gray-900">Tut die Laser‑Behandlung weh?</dt>
              <dd>Meist ein kurzes, warmes Prickeln. Die Kontaktkühlung erhöht den Komfort deutlich.</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">Wie schnell sehe ich Ergebnisse?</dt>
              <dd>Erste Effekte nach 1–2 Sitzungen; sichtbarer Haarausfall ca. 2–3 Wochen danach.</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">Gibt es Verträge?</dt>
              <dd>Nein. Transparente Preise pro Sitzung, auf Wunsch mit Kombi‑Paketen.</dd>
            </div>
          </dl>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">Häufige Fragen – kurz beantwortet</h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>
              <strong>Komfort:</strong> Intensität individuell einstellbar; Kontaktkühlung reduziert Wärme.
              Empfinden variiert je nach Zone und Haarstärke.
            </li>
            <li>
              <strong>Ergebnisse & Zeitplan:</strong> Häufig verlangsamt sich das Wachstum ab 1–2 Sitzungen;
              sichtbares Shedding folgt ca. 2–3 Wochen nach jeder Sitzung. Deutliche Ausdünnung
              stellt sich über mehrere Zyklen hinweg ein.
            </li>
            <li>
              <strong>Sicherheit:</strong> Qualifizierte Behandler, gründliche Beratung und moderne
              Technik minimieren Nebenwirkungen.
            </li>
          </ul>
          <p className="mt-2">
            <Link to="/beratung" className="text-blue-700 underline">
              Kostenlose Beratung vereinbaren
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">Beliebte Zonen</h2>
          <nav aria-label="Beliebte Zonen" className="flex flex-wrap gap-4">
            <Link to="/achseln" className="text-blue-700 underline">Achseln</Link>
            <Link to="/bikinizone" className="text-blue-700 underline">Bikinizone</Link>
            <Link to="/frauen/intimbereich" className="text-blue-700 underline">Intimbereich (Frauen)</Link>
            <Link to="/maenner/intimbereich" className="text-blue-700 underline">Intimbereich (Männer)</Link>
            <Link to="/gesicht" className="text-blue-700 underline">Gesicht</Link>
            <Link to="/beine" className="text-blue-700 underline">Beine</Link>
            <Link to="/brust" className="text-blue-700 underline">Brust</Link>
            <Link to="/maenner/brust-bauch" className="text-blue-700 underline">Brust & Bauch (Männer)</Link>
            <Link to="/maenner/ruecken" className="text-blue-700 underline">Rücken (Männer)</Link>
          </nav>
        </section>

        <footer className="border-t pt-6">
          <p className="text-gray-700">
            Sie möchten störende Haare <strong>dauerhaft entfernen</strong>? In unserer Praxis in der
            Hamburger Innenstadt kombinieren wir Erfahrung seit 2005 mit <strong>Alexandrit‑Laser</strong>
            und <strong>Diodenlaser</strong> für bestmögliche, reproduzierbare Resultate – transparent,
            sicher und individuell.
          </p>
        </footer>
      </article>
    </main>
  );
}



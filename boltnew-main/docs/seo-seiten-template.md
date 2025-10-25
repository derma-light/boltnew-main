### Ziel
Wiederverwendbares „Markup“ (Vorlagen + Checklisten), um neue/überarbeitete Seiten schnell konsistent mit Inhalt, Routing und SEO (JSON‑LD, OG/Twitter) aufzusetzen.

## Seite-Template (React mit SEO-Komponente)
```tsx
import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import DropdownScript from '../components/DropdownScript';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';

const NeueSeite = () => {
  const canonical = 'https://dermalight-hamburg.de/<pfad>';

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Seitentitel – prägnant und suchintentionstauglich | Derma Light"
        description="1–2 Sätze mit Nutzenversprechen, Keywords und Ort (Hamburg)."
        canonical={canonical}
        breadcrumb={[
          { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
          // optional Kategorie-Ebene:
          { name: 'Kategorie', href: new URL(canonical).origin + '/<kategorie>', position: 2 },
          { name: 'Seitenname', href: canonical, position: 3 }
        ]}
        service={{
          serviceType: 'Laser Haarentfernung <Bereich/Zielgruppe>',
          description: 'Kurzbeschreibung des Services, Nutzen, Ort (Hamburg).',
          providerId: new URL(canonical).origin + '/#business',
          areaServedName: 'Hamburg'
        }}
        webPage={{
          name: 'Seitenname (für Social & Alt-Fallback)',
          primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
          primaryImageAlt: 'Beschreibender Alternativtext zum Social-Bild',
          websiteId: new URL(canonical).origin + '/#website'
        }}
        faq={[
          { question: 'Relevante Frage 1?', answer: 'Kurze, klare Antwort.' },
          { question: 'Relevante Frage 2?', answer: 'Kurze, klare Antwort.' }
        ]}
        ogLocale="de_DE"
        ogLocaleAlternate={['de_DE']}
        twitterSite="@DermaLight_ipl"
      />

      <Header />
      <DropdownScript />
      <Breadcrumbs />
      {/* Inhalt: Hero, Intro, Benefits, Process, FAQ, (optional) Pricing */}
      <Footer />
    </div>
  );
};

export default NeueSeite;
```

## Inhaltsstruktur (schnelle Checkliste)
- Hero: Eyebrow (Ort + Zielgruppe), H1, starker Untertitel, Kurztext, CTA(s)
- Intro/Banner: 2–3 Absätze (Nutzen, Differenzierung, Technologie)
- Benefits: 3–6 Kacheln (klare Headlines, kurze Beschreibungen)
- Process: 3–6 Schritte mit Icons; Infos zu Sitzungsanzahl/Intervallen
- FAQ: 5–8 echte Fragen der Zielgruppe
- Pricing (optional): Erwartungssteuerung, CTA zu Beratung/Preisen

## SEO/SEM-Checkliste (pro Seite)
- Title: 55–60 Zeichen, Marke ans Ende
- Description: 150–160 Zeichen, Nutzen + Ort
- Canonical: vollständige HTTPS‑URL der Zielseite
- BreadcrumbList: Home → Kategorie (optional) → Seite
- Service: serviceType + kurze Beschreibung; providerId="/#business"
- WebPage: websiteId="/#website", Bildpfad + Alt‑Text
- FAQPage: nur echte Fragen; 4–8 Einträge
- Open Graph/Twitter (von SEO-Komponente gesetzt):
  - og:title, og:description, og:type=website, og:url, og:image, og:site_name
  - og:locale=de_DE, og:locale:alternate optional
  - twitter:card, twitter:title, twitter:description, twitter:image, twitter:site=@DermaLight_ipl
  - og:image:alt / twitter:image:alt aus webPage.primaryImageAlt (Fallback: webPage.name)

## Routing-/Umbenennungs-Checkliste
- Datei/Komponente umbenennen: `src/pages/<Name>.tsx`, Komponentenname anpassen
- Router aktualisieren: `src/App.tsx` → `<Route path="..." element={<.../>} />`
- Navigation/Links anpassen:
  - `src/components/Header.tsx`
  - `src/components/InternalLinkingWidget.tsx` (Keys + Hrefs)
  - `src/components/TreatmentNavigation.tsx` (prev/next + Pfade)
  - Verweis-Props in Seiten (z. B. `InternalLinkingWidget currentPage="..."`, `TreatmentNavigation currentPath="..."`)

## Wiederverwendbare SEO-Config (Kopiervorlage)
```ts
const canonical = 'https://dermalight-hamburg.de/<pfad>';

const seoConfig = {
  title: 'Laser Haarentfernung <Bereich/Zielgruppe> Hamburg | Derma Light',
  description: 'Kurz & klar: Nutzen + Technologie + Ort.',
  canonical,
  breadcrumb: [
    { name: 'Home', href: new URL(canonical).origin + '/', position: 1 },
    // optional Kategorie
    { name: '<Kategorie>', href: new URL(canonical).origin + '/<kategorie>', position: 2 },
    { name: '<Seitenname>', href: canonical, position: 3 }
  ],
  service: {
    serviceType: 'Laser Haarentfernung <Bereich/Zielgruppe>',
    description: 'Kurzbeschreibung Service in Hamburg.',
    providerId: new URL(canonical).origin + '/#business',
    areaServedName: 'Hamburg'
  },
  webPage: {
    name: '<Seitenname>',
    primaryImagePath: '/laser-haarentfernung-hamburg-hero-image.png',
    primaryImageAlt: '<Aussagekräftiger Alt-Text>',
    websiteId: new URL(canonical).origin + '/#website'
  },
  faq: [
    { question: 'Wie viele Sitzungen ...?', answer: '...' },
    { question: 'Ist die Behandlung schmerzhaft?', answer: '...' }
  ],
  ogLocale: 'de_DE',
  ogLocaleAlternate: ['de_DE'],
  twitterSite: '@DermaLight_ipl'
};
```

## Bild-/Alt-Text To‑Dos (für später)
- `primaryImageAlt` je Seite nach Bild-Upload setzen:
  - Startseite; Preise; Beratung; Termine
  - Männer: Brust‑Bauch, Rücken, Intimbereich
  - Frauen: Übersicht, Intimbereich, Achseln, Arme, Bauch, Beine, Bikinizone, Brust, Gesicht



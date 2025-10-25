import React, { useEffect } from 'react';

interface BreadcrumbItem {
  name: string;
  href: string;
  position: number;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceConfig {
  serviceType: string;
  description: string;
  providerId: string;
  areaServedName?: string;
}

interface WebPageConfig {
  name: string;
  primaryImagePath?: string;
  primaryImageAlt?: string;
  websiteId: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  breadcrumb: BreadcrumbItem[];
  service: ServiceConfig;
  webPage: WebPageConfig;
  faq?: FAQItem[];
  ogLocale?: string;
  ogLocaleAlternate?: string[];
  twitterSite?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, breadcrumb, service, webPage, faq = [], ogLocale = 'de_DE', ogLocaleAlternate = [], twitterSite = '@DermaLight_ipl' }) => {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonical;

    // Open Graph
    const ensureMeta = (attr: { name?: string; property?: string }, content: string) => {
      const selector = attr.name ? `meta[name="${attr.name}"]` : `meta[property="${attr.property}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        if (attr.name) el.name = attr.name; else if (attr.property) el.setAttribute('property', attr.property);
        document.head.appendChild(el);
      }
      el.content = content;
      return el;
    };

    const ogTitle = ensureMeta({ property: 'og:title' }, title);
    const ogDesc = ensureMeta({ property: 'og:description' }, description);
    const ogType = ensureMeta({ property: 'og:type' }, 'website');
    const ogUrl = ensureMeta({ property: 'og:url' }, canonical);
    const imageUrl = webPage.primaryImagePath ? new URL(webPage.primaryImagePath, canonical).toString() : undefined;
    const imageAlt = webPage.primaryImageAlt || webPage.name;
    const ogImage = imageUrl ? ensureMeta({ property: 'og:image' }, imageUrl) : null;
    const ogImageAlt = imageUrl ? ensureMeta({ property: 'og:image:alt' }, imageAlt) : null;
    const ogSiteName = ensureMeta({ property: 'og:site_name' }, 'Derma Light Haarentfernung');
    const ogLocaleMeta = ensureMeta({ property: 'og:locale' }, ogLocale);
    const ogLocaleAlternateMetas: HTMLMetaElement[] = [];
    ogLocaleAlternate.forEach(loc => {
      const el = ensureMeta({ property: 'og:locale:alternate' }, loc);
      ogLocaleAlternateMetas.push(el);
    });

    // Twitter
    const twCard = ensureMeta({ name: 'twitter:card' }, imageUrl ? 'summary_large_image' : 'summary');
    const twTitle = ensureMeta({ name: 'twitter:title' }, title);
    const twDesc = ensureMeta({ name: 'twitter:description' }, description);
    const twImage = imageUrl ? ensureMeta({ name: 'twitter:image' }, imageUrl) : null;
    const twImageAlt = imageUrl ? ensureMeta({ name: 'twitter:image:alt' }, imageAlt) : null;
    const twSite = ensureMeta({ name: 'twitter:site' }, twitterSite);

    const breadcrumbLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': canonical + '#breadcrumbs',
      itemListElement: breadcrumb.map(item => ({
        '@type': 'ListItem',
        position: item.position,
        name: item.name,
        item: item.href
      }))
    } as const;

    const serviceLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': canonical + '#service',
      serviceType: service.serviceType,
      provider: { '@id': service.providerId },
      areaServed: service.areaServedName ? { '@type': 'AdministrativeArea', name: service.areaServedName } : undefined,
      description: service.description
    } as const;

    const faqLd = faq.length > 0 ? {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': canonical + '#faq',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer }
      }))
    } : null;

    const webPageLd = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': canonical + '#webpage',
      url: canonical,
      name: webPage.name,
      description,
      inLanguage: 'de-DE',
      isPartOf: { '@id': webPage.websiteId },
      about: { '@id': canonical + '#service' },
      primaryImageOfPage: webPage.primaryImagePath ? { '@type': 'ImageObject', url: new URL(webPage.primaryImagePath, canonical).toString() } : undefined
    } as const;

    const scriptBreadcrumb = document.createElement('script');
    scriptBreadcrumb.type = 'application/ld+json';
    scriptBreadcrumb.textContent = JSON.stringify(breadcrumbLd);
    document.head.appendChild(scriptBreadcrumb);

    const scriptService = document.createElement('script');
    scriptService.type = 'application/ld+json';
    scriptService.textContent = JSON.stringify(serviceLd);
    document.head.appendChild(scriptService);

    let scriptFaq: HTMLScriptElement | null = null;
    if (faqLd) {
      scriptFaq = document.createElement('script');
      scriptFaq.type = 'application/ld+json';
      scriptFaq.textContent = JSON.stringify(faqLd);
      document.head.appendChild(scriptFaq);
    }

    const scriptWebPage = document.createElement('script');
    scriptWebPage.type = 'application/ld+json';
    scriptWebPage.textContent = JSON.stringify(webPageLd);
    document.head.appendChild(scriptWebPage);

    return () => {
      document.title = previousTitle;
      if (scriptBreadcrumb.parentNode) scriptBreadcrumb.parentNode.removeChild(scriptBreadcrumb);
      if (scriptService.parentNode) scriptService.parentNode.removeChild(scriptService);
      if (scriptFaq && scriptFaq.parentNode) scriptFaq.parentNode.removeChild(scriptFaq);
      if (scriptWebPage.parentNode) scriptWebPage.parentNode.removeChild(scriptWebPage);
      // Clean OG/Twitter
      ogTitle?.remove();
      ogDesc?.remove();
      ogType?.remove();
      ogUrl?.remove();
      ogImage?.remove?.();
      ogImageAlt?.remove?.();
      ogSiteName?.remove();
      ogLocaleMeta?.remove();
      ogLocaleAlternateMetas.forEach(m => m.remove());
      twCard?.remove();
      twTitle?.remove();
      twDesc?.remove();
      twImage?.remove?.();
      twImageAlt?.remove?.();
      twSite?.remove();
    };
  }, [title, description, canonical, breadcrumb, service, webPage, faq, ogLocale, ogLocaleAlternate, twitterSite]);

  return null;
};

export default SEO;



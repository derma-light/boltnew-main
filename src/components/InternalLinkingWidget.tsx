import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, User } from 'lucide-react';

interface RelatedLink {
  title: string;
  href: string;
  description: string;
  category: 'frauen' | 'maenner' | 'general';
}

interface InternalLinkingWidgetProps {
  currentPage: string;
  className?: string;
}

const InternalLinkingWidget: React.FC<InternalLinkingWidgetProps> = ({ currentPage, className = '' }) => {
  // Define related links for each page
  const relatedLinks: Record<string, RelatedLink[]> = {
    '/achseln': [
      { title: 'Bikinizone', href: '/bikinizone', description: 'Kombi-Behandlung möglich', category: 'frauen' },
      { title: 'Arme', href: '/arme', description: 'Ähnliche Behandlungsdauer', category: 'frauen' },
      { title: 'Frauen Übersicht', href: '/frauen', description: 'Alle Behandlungsbereiche', category: 'frauen' }
    ],
    '/arme': [
      { title: 'Achseln', href: '/achseln', description: 'Beliebte Kombination', category: 'frauen' },
      { title: 'Beine', href: '/beine', description: 'Großflächige Behandlung', category: 'frauen' },
      { title: 'Frauen Übersicht', href: '/frauen', description: 'Alle Behandlungsbereiche', category: 'frauen' }
    ],
    '/bikinizone': [
      { title: 'Intimbereich', href: '/frauen/intimbereich', description: 'Erweiterte Behandlung', category: 'frauen' },
      { title: 'Achseln', href: '/achseln', description: 'Häufige Kombination', category: 'frauen' },
      { title: 'Beine', href: '/beine', description: 'Kombi-Paket verfügbar', category: 'frauen' }
    ],
    '/frauen/intimbereich': [
      { title: 'Bikinizone', href: '/bikinizone', description: 'Klassische Alternative', category: 'frauen' },
      { title: 'Achseln', href: '/achseln', description: 'Beliebte Kombination', category: 'frauen' },
      { title: 'Frauen Übersicht', href: '/frauen', description: 'Alle Behandlungsbereiche', category: 'frauen' }
    ],
    '/maenner/ruecken': [
      { title: 'Brust & Bauch', href: '/maenner/brust-bauch', description: 'Brust- und Bauchbehandlung', category: 'maenner' },
      { title: 'Intimbereich Männer', href: '/maenner/intimbereich', description: 'Klassische Intimbereich-Behandlung', category: 'maenner' },
      { title: 'Männer Übersicht', href: '/maenner', description: 'Alle Behandlungsbereiche', category: 'maenner' }
    ],
    '/maenner/brust-bauch': [
      { title: 'Rücken', href: '/maenner/ruecken', description: 'Große Behandlungsfläche', category: 'maenner' },
      { title: 'Intimbereich Männer', href: '/maenner/intimbereich', description: 'Klassische Behandlung', category: 'maenner' },
      { title: 'Männer Übersicht', href: '/maenner', description: 'Alle Behandlungsbereiche', category: 'maenner' }
    ],
    '/maenner/intimbereich': [
      { title: 'Brust & Bauch', href: '/maenner/brust-bauch', description: 'Brust- und Bauchbehandlung', category: 'maenner' },
      { title: 'Rücken', href: '/maenner/ruecken', description: 'Große Behandlungsfläche', category: 'maenner' },
      { title: 'Männer Übersicht', href: '/maenner', description: 'Alle Behandlungsbereiche', category: 'maenner' }
    ],
    '/beine': [
      { title: 'Bikinizone', href: '/bikinizone', description: 'Kombi-Behandlung', category: 'frauen' },
      { title: 'Achseln', href: '/achseln', description: 'Beliebte Kombination', category: 'frauen' },
      { title: 'Arme', href: '/arme', description: 'Großflächige Bereiche', category: 'frauen' }
    ],
    '/gesicht': [
      { title: 'Achseln', href: '/achseln', description: 'Kurze Behandlungszeit', category: 'frauen' },
      { title: 'Frauen Übersicht', href: '/frauen', description: 'Alle Behandlungsbereiche', category: 'frauen' },
      { title: 'Brust', href: '/brust', description: 'Sensible Bereiche', category: 'frauen' }
    ],
    '/brust': [
      { title: 'Gesicht', href: '/gesicht', description: 'Sensible Hautbereiche', category: 'frauen' },
      { title: 'Bauch', href: '/bauch', description: 'Angrenzende Zone', category: 'frauen' },
      { title: 'Frauen Übersicht', href: '/frauen', description: 'Alle Behandlungsbereiche', category: 'frauen' }
    ],
    '/bauch': [
      { title: 'Brust', href: '/brust', description: 'Angrenzender Bereich', category: 'frauen' },
      { title: 'Bikinizone', href: '/bikinizone', description: 'Häufige Kombination', category: 'frauen' },
      { title: 'Frauen Übersicht', href: '/frauen', description: 'Alle Behandlungsbereiche', category: 'frauen' }
    ]
  };

  const links = relatedLinks[currentPage] || [];

  if (links.length === 0) {
    return null;
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frauen': return <Users className="w-4 h-4 text-pink-600" />;
      case 'maenner': return <User className="w-4 h-4 text-blue-600" />;
      default: return <ArrowRight className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <aside className={`bg-gray-50 rounded-xl p-6 border border-gray-200 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
        Verwandte Behandlungen
      </h3>
      <div className="space-y-3">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="group flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            title={`Mehr über ${link.title} erfahren`}
          >
            <div className="flex items-center space-x-3">
              {getCategoryIcon(link.category)}
              <div>
                <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {link.title}
                </div>
                <div className="text-sm text-gray-600">
                  {link.description}
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default InternalLinkingWidget;
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Star, Clock, Euro } from 'lucide-react';

interface ContextualLinksProps {
  type: 'pricing' | 'consultation' | 'overview' | 'combination';
  currentPage?: string;
  className?: string;
}

const ContextualLinks: React.FC<ContextualLinksProps> = ({ type, currentPage, className = '' }) => {
  const linkSets = {
    pricing: [
      { 
        href: '/preise-haarentfernung', 
        text: 'Aktuelle Preise ansehen', 
        description: 'Transparente Preisübersicht',
        icon: Euro,
        variant: 'secondary' as const
      },
      { 
        href: '/beratung', 
        text: 'Kostenlose Beratung', 
        description: 'Individuelle Kosteneinschätzung',
        icon: Star,
        variant: 'primary' as const
      }
    ],
    consultation: [
      { 
        href: '/beratung', 
        text: 'Beratungstermin vereinbaren', 
        description: 'Kostenlos & unverbindlich',
        icon: Clock,
        variant: 'primary' as const
      },
      { 
        href: 'tel:+494055435357', 
        text: '040 55435357', 
        description: 'Direkt anrufen',
        icon: ExternalLink,
        variant: 'secondary' as const,
        external: true
      }
    ],
    overview: [
      { 
        href: '/frauen', 
        text: 'Alle Behandlungen für Frauen', 
        description: 'Komplette Übersicht',
        icon: ArrowRight,
        variant: 'secondary' as const
      },
      { 
        href: '/maenner', 
        text: 'Alle Behandlungen für Männer', 
        description: 'Komplette Übersicht',
        icon: ArrowRight,
        variant: 'secondary' as const
      }
    ],
    combination: [
      { 
        href: '/achseln', 
        text: 'Achseln + Bikinizone', 
        description: 'Beliebte Kombination',
        icon: Star,
        variant: 'secondary' as const
      },
      { 
        href: '/beine', 
        text: 'Beine + Bikinizone', 
        description: 'Sommer-Paket',
        icon: Star,
        variant: 'secondary' as const
      }
    ]
  };

  const links = linkSets[type] || [];

  if (links.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {links.map((link, index) => {
        const baseClasses = "group inline-flex items-center justify-between w-full p-4 rounded-lg font-medium transition-all duration-200 hover:shadow-md";
        const variantClasses = link.variant === 'primary' 
          ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg"
          : "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50";

        const LinkComponent = link.external ? 'a' : Link;
        const linkProps = link.external 
          ? { href: link.href, target: '_blank', rel: 'noopener noreferrer' }
          : { to: link.href };

        return (
          <LinkComponent
            key={index}
            {...linkProps}
            className={`${baseClasses} ${variantClasses}`}
            title={link.description}
          >
            <div className="flex items-center">
              <link.icon className="w-5 h-5 mr-3" />
              <div>
                <div className="font-semibold">{link.text}</div>
                <div className={`text-sm ${link.variant === 'primary' ? 'text-blue-100' : 'text-gray-600'}`}>
                  {link.description}
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </LinkComponent>
        );
      })}
    </div>
  );
};

export default ContextualLinks;
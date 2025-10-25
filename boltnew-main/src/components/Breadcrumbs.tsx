import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentPageName?: string;
  customPath?: Array<{ name: string; href: string }>;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPageName, customPath }) => {
  const location = useLocation();
  
  // Define page mappings for better breadcrumb names
  const pageNames: Record<string, string> = {
    '/': 'Startseite',
    '/frauen': 'Frauen',
    '/maenner': 'Männer',
    '/achseln': 'Achseln',
    '/arme': 'Arme',
    '/bauch': 'Bauch',
    '/beine': 'Beine',
    '/bikinizone': 'Bikinizone',
    '/brust': 'Brust',
    '/gesicht': 'Gesicht',
    '/frauen/intimbereich': 'Intimbereich',
    '/maenner/intimbereich': 'Intimbereich',
    '/maenner/ruecken': 'Rücken',
    '/datenschutz': 'Datenschutzerklärung',
    '/impressum': 'Impressum'
  };

  // Define parent relationships for hierarchical breadcrumbs
  const parentPages: Record<string, { name: string; href: string }> = {
    '/achseln': { name: 'Frauen', href: '/frauen' },
    '/arme': { name: 'Frauen', href: '/frauen' },
    '/bauch': { name: 'Frauen', href: '/frauen' },
    '/beine': { name: 'Frauen', href: '/frauen' },
    '/bikinizone': { name: 'Frauen', href: '/frauen' },
    '/brust': { name: 'Frauen', href: '/frauen' },
    '/gesicht': { name: 'Frauen', href: '/frauen' },
    '/frauen/intimbereich': { name: 'Frauen', href: '/frauen' },
    '/maenner/intimbereich': { name: 'Männer', href: '/maenner' },
    '/maenner/ruecken': { name: 'Männer', href: '/maenner' }
  };

  const buildBreadcrumbs = () => {
    if (customPath) {
      return customPath;
    }

    const breadcrumbs = [{ name: 'Startseite', href: '/' }];
    
    // Add parent page if exists
    const parent = parentPages[location.pathname];
    if (parent) {
      breadcrumbs.push(parent);
    }
    
    // Add current page
    const currentName = currentPageName || pageNames[location.pathname] || 'Seite';
    if (location.pathname !== '/') {
      breadcrumbs.push({ name: currentName, href: location.pathname });
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = buildBreadcrumbs();

  return (
    <nav className="bg-gray-50 py-4 border-b border-gray-200" aria-label="Breadcrumb">
      <div className="container mx-auto px-4 lg:px-6">
        <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <div className="flex items-center">
                {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mr-2" />}
                {index === 0 && <Home className="w-4 h-4 mr-1" />}
                {index === breadcrumbs.length - 1 ? (
                  <span 
                    className="text-gray-900 font-medium" 
                    aria-current="page"
                    itemProp="name"
                  >
                    {crumb.name}
                  </span>
                ) : (
                  <Link 
                    to={crumb.href} 
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{crumb.name}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
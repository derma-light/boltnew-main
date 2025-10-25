import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Users, User } from 'lucide-react';

interface TreatmentNavigationProps {
  currentPath: string;
  className?: string;
}

const TreatmentNavigation: React.FC<TreatmentNavigationProps> = ({ currentPath, className = '' }) => {
  // Define navigation sequences for logical flow
  const navigationSequences: Record<string, { prev?: { name: string; href: string }; next?: { name: string; href: string }; category: string }> = {
    // Frauen sequence
    '/frauen': { 
      next: { name: 'Gesicht', href: '/gesicht' },
      category: 'frauen'
    },
    '/gesicht': { 
      prev: { name: 'Frauen Übersicht', href: '/frauen' },
      next: { name: 'Achseln', href: '/achseln' },
      category: 'frauen'
    },
    '/achseln': { 
      prev: { name: 'Gesicht', href: '/gesicht' },
      next: { name: 'Arme', href: '/arme' },
      category: 'frauen'
    },
    '/arme': { 
      prev: { name: 'Achseln', href: '/achseln' },
      next: { name: 'Brust', href: '/brust' },
      category: 'frauen'
    },
    '/brust': { 
      prev: { name: 'Arme', href: '/arme' },
      next: { name: 'Bauch', href: '/bauch' },
      category: 'frauen'
    },
    '/bauch': { 
      prev: { name: 'Brust', href: '/brust' },
      next: { name: 'Bikinizone', href: '/bikinizone' },
      category: 'frauen'
    },
    '/bikinizone': { 
      prev: { name: 'Bauch', href: '/bauch' },
      next: { name: 'Intimbereich', href: '/frauen/intimbereich' },
      category: 'frauen'
    },
    '/frauen/intimbereich': { 
      prev: { name: 'Bikinizone', href: '/bikinizone' },
      next: { name: 'Beine', href: '/beine' },
      category: 'frauen'
    },
    '/beine': { 
      prev: { name: 'Intimbereich', href: '/frauen/intimbereich' },
      category: 'frauen'
    },
    
    // Männer sequence
    '/maenner': { 
      next: { name: 'Rücken', href: '/maenner/ruecken' },
      category: 'maenner'
    },
    '/maenner/ruecken': { 
      prev: { name: 'Männer Übersicht', href: '/maenner' },
      next: { name: 'Brust & Bauch', href: '/maenner/brust-bauch' },
      category: 'maenner'
    },
    '/maenner/brust-bauch': { 
      prev: { name: 'Rücken', href: '/maenner/ruecken' },
      next: { name: 'Intimbereich', href: '/maenner/intimbereich' },
      category: 'maenner'
    },
    '/maenner/intimbereich': { 
      prev: { name: 'Brust & Bauch', href: '/maenner/brust-bauch' },
      category: 'maenner'
    }
  };

  const navigation = navigationSequences[currentPath];

  if (!navigation) {
    return null;
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frauen': return 'pink';
      case 'maenner': return 'blue';
      default: return 'gray';
    }
  };

  const color = getCategoryColor(navigation.category);

  return (
    <nav className={`flex justify-between items-center py-8 border-t border-gray-200 ${className}`} aria-label="Behandlungsnavigation">
      <div className="flex-1">
        {navigation.prev && (
          <Link
            to={navigation.prev.href}
            className={`group inline-flex items-center px-6 py-3 bg-${color}-50 text-${color}-700 rounded-lg hover:bg-${color}-100 transition-all duration-200 hover:shadow-md`}
            title={`Vorherige Behandlung: ${navigation.prev.name}`}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="text-xs text-gray-600">Vorherige</div>
              <div className="font-medium">{navigation.prev.name}</div>
            </div>
          </Link>
        )}
      </div>
      
      <div className="flex-1 text-right">
        {navigation.next && (
          <Link
            to={navigation.next.href}
            className={`group inline-flex items-center px-6 py-3 bg-${color}-50 text-${color}-700 rounded-lg hover:bg-${color}-100 transition-all duration-200 hover:shadow-md`}
            title={`Nächste Behandlung: ${navigation.next.name}`}
          >
            <div className="text-right">
              <div className="text-xs text-gray-600">Nächste</div>
              <div className="font-medium">{navigation.next.name}</div>
            </div>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default TreatmentNavigation;
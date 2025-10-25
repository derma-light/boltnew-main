import React, { useState, useEffect } from 'react';
import { Users, User, Calculator, Tag, Percent } from 'lucide-react';

interface PriceItem {
  id: string;
  name: string;
  price: number;
}

interface SelectedItem {
  name: string;
  price: number;
}

const PriceCalculator = () => {
  const [activeGender, setActiveGender] = useState<'women' | 'men'>('women');
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const womenPrices: PriceItem[] = [
    // Kopf
    { id: 'forehead', name: 'Stirn', price: 39 },
    { id: 'sideburns', name: 'Koteletten', price: 35 },
    { id: 'upper-lip', name: 'Oberlippe', price: 29 },
    { id: 'chin', name: 'Kinn', price: 35 },
    { id: 'cheeks', name: 'Wangen / Jochbeine', price: 45 },
    { id: 'full-face', name: 'Gesicht komplett (ohne Hals)', price: 85 },
    { id: 'neck', name: 'Hals', price: 45 },
    { id: 'nape', name: 'Nacken', price: 39 },
    // Oberkörper
    { id: 'armpits', name: 'Achseln', price: 45 },
    { id: 'shoulders', name: 'Schultern', price: 69 },
    { id: 'upper-arms', name: 'Oberarme', price: 69 },
    { id: 'forearms', name: 'Unterarme', price: 69 },
    { id: 'nipples', name: 'Brustwarzen', price: 39 },
    { id: 'full-chest', name: 'Brust komplett', price: 69 },
    { id: 'midline', name: 'Medianlinie', price: 35 },
    { id: 'abdomen', name: 'Bauch', price: 69 },
    { id: 'full-back', name: 'Rücken', price: 129 },
    { id: 'partial-back', name: 'Rücken (teilweise)', price: 69 },
    // Unterkörper
    { id: 'bikini', name: 'Bikini', price: 49 },
    { id: 'intimate', name: 'Intim (inkl. Bikinizone)', price: 89 },
    { id: 'gluteal-fold', name: 'Gesäßfalte', price: 39 },
    { id: 'buttocks', name: 'Gesäß', price: 69 },
    { id: 'thighs', name: 'Oberschenkel', price: 99 },
    { id: 'thighs-back', name: 'Oberschenkel (nur Rückseite)', price: 59 },
    { id: 'lower-legs', name: 'Unterschenkel', price: 89 },
    { id: 'feet-span', name: 'Füße (Spann)', price: 19 },
    { id: 'feet-toes', name: 'Füße (Spann und Zehen)', price: 39 }
  ];

  const menPrices: PriceItem[] = [
    // Kopf
    { id: 'neck', name: 'Hals', price: 49 },
    { id: 'nape', name: 'Nacken', price: 49 },
    // Oberkörper
    { id: 'armpits', name: 'Achseln', price: 49 },
    { id: 'shoulders', name: 'Schultern', price: 69 },
    { id: 'upper-arms', name: 'Oberarme', price: 89 },
    { id: 'lower-arms', name: 'Unterarme', price: 89 },
    { id: 'nipples', name: 'Brustwarzen', price: 39 },
    { id: 'chest', name: 'Brust komplett', price: 89 },
    { id: 'median-line', name: 'Medianlinie', price: 9 },
    { id: 'abdomen', name: 'Bauch', price: 79 },
    { id: 'full-back', name: 'Rücken komplett', price: 120 },
    { id: 'lower-back', name: 'Rücken Lendenbereich', price: 69 },
    { id: 'intimate', name: 'Intim', price: 109 },
    { id: 'gluteal-fold', name: 'Gesäßfalte', price: 49 },
    // Unterkörper
    { id: 'buttocks-complete', name: 'Gesäß (inkl. Gesäßfalte)', price: 119 },
    { id: 'thigh', name: 'Oberschenkel', price: 159 },
    { id: 'lower-leg', name: 'Unterschenkel', price: 139 },
    { id: 'feet-arch', name: 'Füße (Spann)', price: 29 },
    { id: 'feet-arch-toes', name: 'Füße (Spann und Zehen)', price: 49 }
  ];

  const currentPrices = activeGender === 'women' ? womenPrices : menPrices;

  // Group prices by category
  const groupedPrices = {
    head: currentPrices.filter(item => 
      ['forehead', 'sideburns', 'upper-lip', 'chin', 'cheeks', 'full-face', 'neck', 'nape'].includes(item.id)
    ),
    upperBody: currentPrices.filter(item => 
      ['armpits', 'shoulders', 'upper-arms', 'forearms', 'lower-arms', 'nipples', 'full-chest', 'chest', 'midline', 'median-line', 'abdomen', 'full-back', 'partial-back', 'lower-back', 'intimate'].includes(item.id)
    ),
    lowerBody: currentPrices.filter(item => 
      ['bikini', 'intimate', 'gluteal-fold', 'buttocks', 'buttocks-complete', 'thighs', 'thighs-back', 'thigh', 'lower-legs', 'lower-leg', 'feet-span', 'feet-toes', 'feet-arch', 'feet-arch-toes'].includes(item.id)
    )
  };

  const handleItemToggle = (item: PriceItem, isChecked: boolean) => {
    if (isChecked) {
      if (selectedItems.length >= 6) {
        alert("Sie können maximal 6 Artikel auswählen.");
        return;
      }
      setSelectedItems(prev => [...prev, { name: item.name, price: item.price }]);
    } else {
      setSelectedItems(prev => prev.filter(selected => selected.name !== item.name));
    }
  };

  const calculatePricing = () => {
    const total = selectedItems.reduce((acc, item) => acc + item.price, 0);
    let discountAmount = 0;

    // Rabattberechnung basierend auf der Anzahl der ausgewählten Artikel
    if (selectedItems.length === 2) discountAmount = total * 0.05;
    if (selectedItems.length === 3) discountAmount = total * 0.10;
    if (selectedItems.length === 4) discountAmount = total * 0.15;
    if (selectedItems.length >= 5) discountAmount = total * 0.20;

    const final = total - discountAmount;

    setTotalPrice(total);
    setDiscount(discountAmount);
    setFinalPrice(final);
  };

  useEffect(() => {
    calculatePricing();
  }, [selectedItems]);

  useEffect(() => {
    // Reset selections when switching gender
    setSelectedItems([]);
  }, [activeGender]);

  const renderPriceSection = (title: string, items: PriceItem[]) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item) => {
          const isSelected = selectedItems.some(selected => selected.name === item.name);
          return (
            <label 
              key={item.id} 
              className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
                checked={isSelected}
                onChange={(e) => handleItemToggle(item, e.target.checked)}
              />
              <span className="flex-1 text-gray-700 font-medium">
                {item.name}
              </span>
              <span className="text-blue-600 font-semibold">
                {item.price} €
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Laser-Haarentfernung Preisrechner Hamburg: Ihr individuelles Angebot
        </h4>
        <p className="text-xl text-gray-600 leading-relaxed">
          Berechnen Sie die Kosten für Ihre Laser-Haarentfernung in Hamburg: Individuelles Behandlungspaket 
          mit bis zu 20% Paket-Rabatt bei Kombination mehrerer Bereiche.
        </p>
      </div>

      {/* Gender Selection */}
      <div className="text-center mb-8">
        <div className="inline-flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveGender('women')}
            className={`flex items-center px-6 py-3 rounded-md font-semibold transition-all ${
              activeGender === 'women'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <Users className="w-5 h-5 mr-2" />
            Frauen
          </button>
          <button
            onClick={() => setActiveGender('men')}
            className={`flex items-center px-6 py-3 rounded-md font-semibold transition-all ${
              activeGender === 'men'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <User className="w-5 h-5 mr-2" />
            Männer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Price Selection */}
        <div className="lg:col-span-2">
          <div className="bg-gray-50 rounded-xl p-6">
            {activeGender === 'women' ? (
              <>
                {renderPriceSection('Kopf', groupedPrices.head)}
                {renderPriceSection('Oberkörper', groupedPrices.upperBody)}
                {renderPriceSection('Unterkörper', groupedPrices.lowerBody)}
              </>
            ) : (
              <>
                {renderPriceSection('Kopf', groupedPrices.head)}
                {renderPriceSection('Oberkörper', groupedPrices.upperBody)}
                {renderPriceSection('Unterkörper', groupedPrices.lowerBody)}
              </>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <Calculator className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Ihre Auswahl
                </h3>
              </div>

              {selectedItems.length > 0 ? (
                <div className="space-y-3 mb-6">
                  {selectedItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-blue-600 font-semibold">{item.price} €</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Tag className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Wählen Sie Behandlungsbereiche aus</p>
                </div>
              )}

              {selectedItems.length > 0 && (
                <div className="border-t border-gray-200 pt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Gesamtpreis:</span>
                    <span className="text-lg font-semibold text-gray-900">{Math.round(totalPrice)} €</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between items-center text-green-600">
                      <span className="flex items-center">
                        <Percent className="w-4 h-4 mr-1" />
                        Rabatt ({selectedItems.length >= 5 ? '20' : selectedItems.length === 4 ? '15' : selectedItems.length === 3 ? '10' : '5'}%):
                      </span>
                      <span className="font-semibold">-{Math.round(discount)} €</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-lg font-bold text-gray-900">Endpreis:</span>
                    <span className="text-2xl font-bold text-blue-600">{Math.round(finalPrice)} €</span>
                  </div>

                  {selectedItems.length >= 2 && (
                    <div className="bg-green-50 p-4 rounded-lg mt-4">
                      <p className="text-sm text-green-700 text-center font-medium">
                        🎉 Sie sparen {Math.round(discount)} € durch Ihr Paket!
                      </p>
                    </div>
                  )}
                </div>
              )}

              {selectedItems.length < 6 && (
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Maximal 6 Bereiche auswählbar
                </p>
              )}
            </div>

            {/* CTA */}
            {selectedItems.length > 0 && (
              <div className="mt-6">
                <a 
                  href="/beratung" 
                  className="block w-full text-center px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Beratung für Ihr Paket buchen
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Discount Information */}
      <div className="mt-12 bg-blue-50 rounded-xl p-8">
        <h5 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Laser-Haarentfernung Paket-Rabatte Hamburg
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-white rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">5%</div>
            <div className="text-sm text-gray-600">2 Bereiche</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">10%</div>
            <div className="text-sm text-gray-600">3 Bereiche</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">15%</div>
            <div className="text-sm text-gray-600">4 Bereiche</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">20%</div>
            <div className="text-sm text-gray-600">5+ Bereiche</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
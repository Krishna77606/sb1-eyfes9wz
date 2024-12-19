import { useState } from 'react';
import { motion } from 'framer-motion';
import { useBookingStore } from '../../../store/bookingStore';
import { CakeSelection } from './CakeSelection';
import { AddOnCategory } from './AddOnCategory';
import { addOnCategories } from '../../../lib/mockData';

type CategoryId = 'CAKE' | 'DECORATION' | 'PHOTOGRAPHY' | 'ENTERTAINMENT';

export function CustomSelection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('CAKE');
  
  return (
    <div className="space-y-6">
      {/* Category Navigation */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {addOnCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as CategoryId)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              activeCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Category Content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeCategory === 'CAKE' ? (
          <CakeSelection />
        ) : (
          <AddOnCategory 
            category={addOnCategories.find(c => c.id === activeCategory)!} 
          />
        )}
      </div>
    </div>
  );
}
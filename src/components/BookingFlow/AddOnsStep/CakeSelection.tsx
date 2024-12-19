import { useState } from 'react';
import { motion } from 'framer-motion';
import { useBookingStore } from '../../../store/bookingStore';
import { cakes } from '../../../lib/mockData';

export function CakeSelection() {
  const [category, setCategory] = useState<'STANDARD' | 'PREMIUM'>('STANDARD');
  const { selectedCake, setCake } = useBookingStore();

  const filteredCakes = cakes.filter(cake => 
    category === 'PREMIUM' ? cake.price >= 750 : cake.price < 750
  );

  return (
    <div className="space-y-6">
      <div className="flex space-x-2">
        <button
          onClick={() => setCategory('STANDARD')}
          className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
            category === 'STANDARD'
              ? 'bg-purple-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Standard Cakes
        </button>
        <button
          onClick={() => setCategory('PREMIUM')}
          className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
            category === 'PREMIUM'
              ? 'bg-purple-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Premium Cakes
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {filteredCakes.map((cake) => (
          <motion.div
            key={cake.id}
            whileHover={{ scale: 1.02 }}
            className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
              selectedCake?.id === cake.id
                ? 'border-purple-900 bg-purple-50'
                : 'border-transparent hover:border-purple-200'
            }`}
            onClick={() => setCake(cake)}
          >
            <div className="aspect-square">
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h4 className="font-medium text-sm">{cake.name}</h4>
              <p className="text-purple-900 font-semibold">₹{cake.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import type { City } from '../types';
import { useBookingStore } from '../store/bookingStore';
import { cities } from '../lib/mockData';

export function CitySelector() {
  const { selectedCity, setSelectedCity } = useBookingStore();

  return (
    <div className="flex justify-center">
      {cities.map((city) => (
        <motion.button
          key={city.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCity(city)}
          className={`flex items-center px-6 py-3 rounded-full transition-colors ${
            selectedCity?.id === city.id
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          } shadow-md`}
        >
          <MapPin className="w-4 h-4 mr-2" />
          {city.name}
        </motion.button>
      ))}
    </div>
  );
}
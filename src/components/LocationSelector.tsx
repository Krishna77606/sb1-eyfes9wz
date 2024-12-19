import { motion } from 'framer-motion';
import { useBookingStore } from '../store/bookingStore';

export function LocationSelector() {
  const { selectedCity, selectedLocation, setSelectedLocation } = useBookingStore();

  if (!selectedCity) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-xs"
    >
      <select
        value={selectedLocation?.id || ''}
        onChange={(e) => {
          const location = selectedCity.locations.find(
            (loc) => loc.id === e.target.value
          );
          if (location) setSelectedLocation(location);
        }}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        <option value="" disabled>
          Select a location
        </option>
        {selectedCity.locations.map((location) => (
          <option key={location.id} value={location.id}>
            {location.name}
          </option>
        ))}
      </select>
    </motion.div>
  );
}
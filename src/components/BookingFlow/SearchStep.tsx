import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { CitySelector } from '../CitySelector';
import { LocationSelector } from '../LocationSelector';
import { DateSelector } from '../DateSelector';
import { BookingStats } from '../BookingStats';
import { useBookingStore } from '../../store/bookingStore';
import { TheaterList } from '../TheaterList';

export function SearchStep() {
  const { selectedCity, selectedLocation, selectedDate, searchTheaters, nextStep, theaters } = useBookingStore();

  const handleSearch = async () => {
    if (selectedCity && selectedLocation && selectedDate) {
      try {
        await searchTheaters();
        if (theaters.length > 0) {
          nextStep();
        }
      } catch (error) {
        toast.error('Failed to search theaters. Please try again.');
      }
    }
  };

  const isSearchEnabled = selectedCity && selectedLocation && selectedDate;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Find Your Perfect Theater</h1>
        <p className="text-gray-600">Book a private theater for your special occasion</p>
      </div>

      <div className="space-y-6">
        <CitySelector />
        
        <div className="flex flex-col items-center space-y-4">
          <LocationSelector />
          <DateSelector />
        </div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSearch}
            disabled={!isSearchEnabled}
            className={`flex items-center px-8 py-3 rounded-lg shadow-md space-x-2 ${
              isSearchEnabled
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Search className="w-5 h-5" />
            <span>Search Theaters</span>
          </motion.button>
        </div>

        <BookingStats />
      </div>
    </motion.div>
  );
}
import { motion } from 'framer-motion';
import { useBookingStore } from '../store/bookingStore';
import { TheaterCard } from './TheaterCard';

export function TheaterList() {
  const { 
    theaters, 
    isSearching, 
    selectedTheater,
    selectedSlot,
    selectedGroupType,
    nextStep,
  } = useBookingStore();

  if (isSearching) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  if (theaters.length === 0) {
    return null;
  }

  const canContinue = selectedTheater && selectedSlot && selectedGroupType;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {theaters.map((theater) => (
          <TheaterCard 
            key={theater.id} 
            theater={theater}
            isSelected={selectedTheater?.id === theater.id}
          />
        ))}
      </div>

      {canContinue ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <button
            onClick={nextStep}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Continue to Next Step
          </button>
        </motion.div>
      ) : selectedTheater && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-gray-600"
        >
          {!selectedGroupType && 'Please select a group type'}
          {selectedGroupType && !selectedSlot && 'Please select an available time slot'}
        </motion.div>
      )}
    </div>
  );
}
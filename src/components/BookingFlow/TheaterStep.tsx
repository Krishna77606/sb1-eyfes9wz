import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useBookingStore } from '../../store/bookingStore';
import { TheaterList } from '../TheaterList';

export function TheaterStep() {
  const { prevStep } = useBookingStore();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="space-y-6"
    >
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={prevStep}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-semibold">Select Your Theater</h2>
      </div>

      <TheaterList />
    </motion.div>
  );
}
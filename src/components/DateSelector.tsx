import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useBookingStore } from '../store/bookingStore';

export function DateSelector() {
  const { selectedDate, setSelectedDate } = useBookingStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-xs"
    >
      <input
        type="date"
        value={selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''}
        onChange={(e) => setSelectedDate(new Date(e.target.value))}
        min={format(new Date(), 'yyyy-MM-dd')}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </motion.div>
  );
}
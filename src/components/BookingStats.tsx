import { motion } from 'framer-motion';
import { Users, Calendar } from 'lucide-react';

const stats = {
  totalBookings: 75080,
  activeUsers: 77,
};

export function BookingStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center space-y-2"
    >
      <div className="flex items-center space-x-2 text-indigo-600">
        <Calendar className="w-5 h-5" />
        <span className="font-bold">{stats.totalBookings.toLocaleString()} bookings completed</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-500 text-sm">
        <Users className="w-4 h-4" />
        <span>{stats.activeUsers} people searching right now!</span>
      </div>
    </motion.div>
  );
}
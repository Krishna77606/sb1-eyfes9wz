import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useBookingStore } from '../../../store/bookingStore';
import { gifts } from '../../../lib/mockData';

export function GiftSelection() {
  const { selectedAddOns, addAddOn, removeAddOn } = useBookingStore();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {gifts.map((gift) => {
        const count = selectedAddOns.filter(addon => addon.id === gift.id).length;

        return (
          <motion.div
            key={gift.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="aspect-square">
              <img
                src={gift.image}
                alt={gift.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-medium text-sm">{gift.name}</h4>
              <div className="flex justify-between items-center mt-2">
                <span className="text-indigo-600 font-semibold">₹{gift.price}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => count > 0 && removeAddOn(gift.id)}
                    className={`p-1 rounded-full ${
                      count > 0 ? 'hover:bg-gray-100' : 'text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-6 text-center text-sm">{count}</span>
                  <button
                    onClick={() => addAddOn(gift)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
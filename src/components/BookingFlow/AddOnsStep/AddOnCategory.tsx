import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useBookingStore } from '../../../store/bookingStore';
import type { AddOnCategory as AddOnCategoryType } from '../../../types';

interface AddOnCategoryProps {
  category: AddOnCategoryType;
}

export function AddOnCategory({ category }: AddOnCategoryProps) {
  const { selectedAddOns, addAddOn, removeAddOn } = useBookingStore();

  return (
    <div className="grid gap-4">
      {category.items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
        >
          <div className="w-24 h-24 rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
              <div className="text-lg font-bold text-indigo-600">₹{item.price}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => removeAddOn(item.id)}
              className="p-1 rounded-full hover:bg-gray-200"
            >
              <Minus className="w-5 h-5" />
            </button>
            <span className="w-8 text-center">
              {selectedAddOns.filter((a) => a.id === item.id).length}
            </span>
            <button
              onClick={() => addAddOn(item)}
              className="p-1 rounded-full hover:bg-gray-200"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
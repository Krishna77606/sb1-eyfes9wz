import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { useBookingStore } from '../../store/bookingStore';

const addOns = [
  {
    id: 'cake',
    name: 'Birthday Cake',
    description: 'Delicious chocolate cake with customized message',
    price: 599,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80',
  },
  {
    id: 'decoration',
    name: 'Premium Decoration',
    description: 'Balloons, banners, and themed decorations',
    price: 999,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80',
  },
  {
    id: 'photography',
    name: 'Professional Photography',
    description: '2-hour photoshoot with edited photos',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80',
  },
];

export function AddOnsStep() {
  const { prevStep, nextStep, selectedAddOns, addAddOn, removeAddOn } = useBookingStore();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="max-w-4xl mx-auto"
    >
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={prevStep}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-semibold">Enhance Your Experience</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {addOns.map((addon) => (
          <motion.div
            key={addon.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={addon.image}
              alt={addon.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-indigo-600 font-semibold">₹{addon.price}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => removeAddOn(addon.id)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-8 text-center">
                    {selectedAddOns.filter((a) => a.id === addon.id).length}
                  </span>
                  <button
                    onClick={() => addAddOn(addon)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className="flex justify-center mt-8">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={nextStep}
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700"
        >
          Continue to Next Step
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
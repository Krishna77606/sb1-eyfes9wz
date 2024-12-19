import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useBookingStore } from '../../../store/bookingStore';
import { CakeSelection } from './CakeSelection';
import { DecorationSelection } from './DecorationSelection';
import { SpecialServices } from './SpecialServices';
import { BookingSummary } from '../BookingSummary';

type Category = 'CAKE' | 'DECORATION' | 'SERVICES';

export function AddOnsStep() {
  const [category, setCategory] = useState<Category>('CAKE');
  const { prevStep, nextStep } = useBookingStore();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="max-w-7xl mx-auto"
    >
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={prevStep}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-semibold">Customize Your Experience</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
            <button
              onClick={() => setCategory('CAKE')}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                category === 'CAKE'
                  ? 'bg-purple-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Choose Cake
            </button>
            <button
              onClick={() => setCategory('DECORATION')}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                category === 'DECORATION'
                  ? 'bg-purple-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Extra Decoration
            </button>
            <button
              onClick={() => setCategory('SERVICES')}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                category === 'SERVICES'
                  ? 'bg-purple-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Special Services
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            {category === 'CAKE' && <CakeSelection />}
            {category === 'DECORATION' && <DecorationSelection />}
            {category === 'SERVICES' && <SpecialServices />}
          </div>

          <div className="mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={nextStep}
              className="w-full py-3 bg-purple-900 text-white rounded-lg font-medium hover:bg-purple-800"
            >
              Continue to Next Step
            </motion.button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <BookingSummary />
        </div>
      </div>
    </motion.div>
  );
}
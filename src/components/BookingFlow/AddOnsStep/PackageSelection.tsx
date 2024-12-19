import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useBookingStore } from '../../../store/bookingStore';
import { packages } from '../../../lib/mockData';

export function PackageSelection() {
  const { selectedPackage, setPackage } = useBookingStore();

  return (
    <div className="grid gap-6">
      {packages.map((pkg) => (
        <motion.div
          key={pkg.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`bg-white p-6 rounded-lg shadow-md cursor-pointer border-2 transition-colors ${
            selectedPackage?.id === pkg.id
              ? 'border-indigo-600'
              : 'border-transparent hover:border-indigo-200'
          }`}
          onClick={() => setPackage(pkg)}
        >
          <div className="flex items-start gap-4">
            <div className="w-24 h-24 rounded-lg overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{pkg.name}</h3>
                  <p className="text-gray-600 mt-1">{pkg.description}</p>
                </div>
                <div className="text-xl font-bold text-indigo-600">₹{pkg.price}</div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {pkg.includes.map((item, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
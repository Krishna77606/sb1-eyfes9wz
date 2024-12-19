import { motion } from 'framer-motion';
import { useBookingStore } from '../../../store/bookingStore';

export function BookingSummary() {
  const { 
    selectedTheater,
    selectedGroupType,
    selectedCake,
    selectedAddOns,
    nextStep
  } = useBookingStore();

  const getTheaterPrice = () => {
    if (!selectedTheater || !selectedGroupType) return 0;
    const option = selectedTheater.capacityOptions.find(o => o.type === selectedGroupType);
    return option ? option.pricePerPerson * option.minPeople : 0;
  };

  const getAddOnsTotal = () => {
    const cakePrice = selectedCake?.price || 0;
    const addOnsPrice = selectedAddOns.reduce((total, addon) => total + addon.price, 0);
    return cakePrice + addOnsPrice;
  };

  const subtotal = getTheaterPrice() + getAddOnsTotal();
  const advanceAmount = Math.min(750, subtotal * 0.3);
  const balanceAmount = subtotal - advanceAmount;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-50 p-6 rounded-lg"
    >
      <h3 className="text-lg font-semibold mb-6">Booking Summary</h3>
      
      <div className="space-y-4">
        {/* Theater Charges */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Theater ({selectedGroupType?.toLowerCase()} ppl)</span>
          <span className="font-medium">₹{getTheaterPrice()}</span>
        </div>

        {/* Selected Add-ons */}
        {selectedCake && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">{selectedCake.name}</span>
            <span className="font-medium">₹{selectedCake.price}</span>
          </div>
        )}
        {selectedAddOns.map((addon, index) => (
          <div key={`${addon.id}-${index}`} className="flex justify-between text-sm">
            <span className="text-gray-600">{addon.name}</span>
            <span className="font-medium">₹{addon.price}</span>
          </div>
        ))}

        {/* Subtotal */}
        <div className="pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">₹{subtotal}</span>
          </div>
        </div>

        {/* Advance Amount */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Advance amount payable</span>
          <span className="font-medium">₹{advanceAmount}</span>
        </div>

        {/* Balance Amount */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Balance amount</span>
          <span className="font-medium">₹{balanceAmount}</span>
        </div>

        {/* Continue Button */}
        <button
          onClick={nextStep}
          className="w-full py-3 bg-purple-900 text-white rounded-lg font-medium hover:bg-purple-800 transition-colors mt-4"
        >
          Next step
        </button>
      </div>
    </motion.div>
  );
}
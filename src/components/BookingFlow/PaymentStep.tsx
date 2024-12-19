import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { useBookingStore } from '../../store/bookingStore';

export function PaymentStep() {
  const { prevStep, selectedTheater, selectedAddOns } = useBookingStore();

  const calculateTotal = () => {
    const theaterPrice = selectedTheater?.price || 0;
    const addOnsTotal = selectedAddOns.reduce((total, addon) => total + addon.price, 0);
    return theaterPrice + addOnsTotal;
  };

  const handlePayment = () => {
    // Implement payment logic
    console.log('Processing payment...');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="max-w-2xl mx-auto"
    >
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={prevStep}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-semibold">Complete Your Payment</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="space-y-6">
          <div className="border-b pb-6">
            <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Theater Charges</span>
                <span>₹{selectedTheater?.price}</span>
              </div>
              {selectedAddOns.map((addon, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{addon.name}</span>
                  <span>₹{addon.price}</span>
                </div>
              ))}
              <div className="border-t pt-2 mt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total Amount</span>
                  <span>₹{calculateTotal()}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:border-indigo-500">
                <div className="flex items-center">
                  <CreditCard className="w-6 h-6 mr-2" />
                  <span>Credit/Debit Card</span>
                </div>
                <span className="text-sm text-gray-500">Secured by Razorpay</span>
              </button>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePayment}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700"
          >
            Pay ₹{calculateTotal()}
          </motion.button>

          <p className="text-sm text-gray-500 text-center">
            By clicking Pay, you agree to our terms and conditions
          </p>
        </div>
      </div>
    </motion.div>
  );
}
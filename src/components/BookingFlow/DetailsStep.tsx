import { motion } from 'framer-motion';
import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useBookingStore } from '../../store/bookingStore';
import { BookingSummary } from './BookingSummary';

interface BookingDetailsForm {
  name: string;
  phone: string;
  email: string;
  numberOfPeople: number;
  decoration: 'Yes' | 'No';
  couponCode?: string;
}

export function DetailsStep() {
  const { prevStep, nextStep, selectedTheater, selectedGroupType } = useBookingStore();
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<BookingDetailsForm>();

  const numberOfPeople = watch('numberOfPeople') || 2;
  const capacityOption = selectedTheater?.capacityOptions.find(
    opt => opt.type === selectedGroupType
  );

  const onSubmit = (data: BookingDetailsForm) => {
    console.log(data);
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="max-w-2xl mx-auto"
    >
      {/* Overview Section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-4">Overview</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Theater:</span>
            <span>{selectedTheater?.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Location:</span>
            <span>{selectedTheater?.location}</span>
          </div>
        </div>
      </div>

      {/* Booking Details Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Booking Name *
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-900"
            placeholder="Type here"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of people
          </label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setValue('numberOfPeople', Math.max(2, numberOfPeople - 1))}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Minus className="w-5 h-5" />
            </button>
            <span className="w-8 text-center">{numberOfPeople}</span>
            <button
              type="button"
              onClick={() => setValue('numberOfPeople', Math.min(capacityOption?.maxPeople || 2, numberOfPeople + 1))}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Whatsapp Number *
          </label>
          <input
            {...register('phone', { required: 'Phone number is required' })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-900"
            placeholder="Type here"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email ID *
          </label>
          <input
            {...register('email', { required: 'Email is required' })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-900"
            placeholder="Type here"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Do you want decoration? *
          </label>
          <select
            {...register('decoration')}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-900"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex gap-4">
          <input
            {...register('couponCode')}
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-900"
            placeholder="Enter coupon code"
          />
          <button
            type="button"
            className="px-6 py-2 bg-purple-900 text-white rounded-lg hover:bg-purple-800"
          >
            Apply
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-purple-900 text-white rounded-lg font-medium hover:bg-purple-800"
        >
          Next step
        </button>
      </form>

      {/* Booking Summary */}
      <div className="mt-8">
        <BookingSummary />
      </div>
    </motion.div>
  );
}
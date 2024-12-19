import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useBookingStore } from '../../store/bookingStore';
import { BookingSummary } from './BookingSummary';
import type { OccasionType } from '../../types';

interface OccasionOption {
  type: OccasionType;
  label: string;
  image: string;
  fields: Array<{
    key: string;
    label: string;
    required?: boolean;
  }>;
}

const occasions: OccasionOption[] = [
  {
    type: 'BIRTHDAY',
    label: 'Birthday',
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80',
    fields: [
      { key: 'birthdayPerson', label: 'Name of Birthday Person', required: true }
    ]
  },
  {
    type: 'ANNIVERSARY',
    label: 'Anniversary',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80',
    fields: [
      { key: 'person1', label: 'Your Name', required: true },
      { key: 'person2', label: "Partner's Name", required: true }
    ]
  },
  // ... other occasions remain the same
];

export function OccasionStep() {
  const { prevStep, nextStep, setOccasion } = useBookingStore();
  const [selectedType, setSelectedType] = useState<OccasionType | null>(null);
  const [names, setNames] = useState<Record<string, string>>({});
  const [specialRequests, setSpecialRequests] = useState('');

  const selectedOccasion = occasions.find(o => o.type === selectedType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedType && Object.keys(names).length > 0) {
      setOccasion({ 
        type: selectedType, 
        names,
        specialRequests: specialRequests.trim() 
      });
      nextStep();
    }
  };

  const isFormValid = selectedType && 
    selectedOccasion?.fields.every(field => 
      field.required ? names[field.key]?.trim() : true
    );

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
        <h2 className="text-2xl font-semibold">Select Your Occasion</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {occasions.map((occasion) => (
              <button
                key={occasion.type}
                onClick={() => {
                  setSelectedType(occasion.type);
                  setNames({});
                }}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  selectedType === occasion.type
                    ? 'border-purple-900 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-200'
                }`}
              >
                <div className="aspect-square mb-2 overflow-hidden rounded-lg">
                  <img 
                    src={occasion.image} 
                    alt={occasion.label} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-center">{occasion.label}</p>
              </button>
            ))}
          </div>

          {selectedOccasion && (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-4">
                Enter {selectedOccasion.label} Details
              </h3>
              
              <div className="space-y-4">
                {selectedOccasion.fields.map((field) => (
                  <div key={field.key}>
                    <label 
                      htmlFor={field.key}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field.label}
                      {field.required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type="text"
                      id={field.key}
                      value={names[field.key] || ''}
                      onChange={(e) => setNames(prev => ({
                        ...prev,
                        [field.key]: e.target.value
                      }))}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-900"
                      required={field.required}
                    />
                  </div>
                ))}

                <div>
                  <label 
                    htmlFor="specialRequests"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-900"
                    placeholder="Any special requests or requirements?"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!isFormValid}
                className={`w-full mt-6 py-3 rounded-lg font-medium ${
                  isFormValid
                    ? 'bg-purple-900 text-white hover:bg-purple-800'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                Continue to Next Step
              </motion.button>
            </motion.form>
          )}
        </div>

        <div className="lg:col-span-1">
          <BookingSummary />
        </div>
      </div>
    </motion.div>
  );
}
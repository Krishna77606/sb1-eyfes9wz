import { motion } from 'framer-motion';
import { Star, Users, Clock } from 'lucide-react';
import type { Theater, TheaterGroupType } from '../types';
import { useBookingStore } from '../store/bookingStore';

interface TheaterCardProps {
  theater: Theater;
  isSelected: boolean;
}

export function TheaterCard({ theater, isSelected }: TheaterCardProps) {
  const { 
    selectedSlot,
    selectedGroupType,
    setSelectedSlot,
    setSelectedTheater,
    setSelectedGroupType
  } = useBookingStore();

  const handleSlotSelect = (slotId: string) => {
    if (isSelected) {
      setSelectedSlot(slotId);
    } else {
      setSelectedTheater(theater);
      setSelectedSlot(slotId);
    }
  };

  const handleGroupTypeSelect = (type: TheaterGroupType) => {
    if (isSelected) {
      setSelectedGroupType(type);
    } else {
      setSelectedTheater(theater);
      setSelectedGroupType(type);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer ${
        isSelected ? 'ring-2 ring-indigo-600' : 'hover:shadow-xl'
      }`}
      onClick={() => !isSelected && setSelectedTheater(theater)}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={theater.image}
          alt={theater.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{theater.name}</h3>
            <p className="text-gray-500">{theater.location}</p>
          </div>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{theater.rating}</span>
          </div>
        </div>

        {/* Group Type Selection */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Select Group Type</h4>
          <div className="grid grid-cols-3 gap-2">
            {theater.capacityOptions.map((option) => (
              <button
                key={option.type}
                onClick={(e) => {
                  e.stopPropagation();
                  handleGroupTypeSelect(option.type);
                }}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  selectedGroupType === option.type && isSelected
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                }`}
              >
                <div className="flex flex-col items-center">
                  <span>{option.type.charAt(0) + option.type.slice(1).toLowerCase()}</span>
                  <span className="text-xs">
                    {option.minPeople === option.maxPeople 
                      ? `${option.minPeople} people`
                      : `${option.minPeople}-${option.maxPeople} people`}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div className="border-t pt-4">
          <div className="flex items-center mb-2">
            <Clock className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Available Slots</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {theater.slots.map((slot) => (
              <button
                key={slot.id}
                disabled={!slot.available}
                onClick={(e) => {
                  e.stopPropagation();
                  slot.available && handleSlotSelect(slot.id);
                }}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  !slot.available
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : selectedSlot === slot.id && isSelected
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                }`}
              >
                <div className="flex flex-col items-center">
                  <span>{slot.startTime}</span>
                  <span className="text-xs">to</span>
                  <span>{slot.endTime}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
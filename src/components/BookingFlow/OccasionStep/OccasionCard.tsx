import { motion } from 'framer-motion';
import type { OccasionType } from '../../../types/occasion';

interface OccasionCardProps {
  type: OccasionType;
  label: string;
  image: string;
  isSelected: boolean;
  onSelect: (type: OccasionType) => void;
}

export function OccasionCard({ type, label, image, isSelected, onSelect }: OccasionCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(type)}
      className={`p-4 rounded-lg border-2 transition-colors ${
        isSelected
          ? 'border-indigo-600 bg-indigo-50'
          : 'border-gray-200 hover:border-indigo-200'
      }`}
    >
      <div className="aspect-square mb-2">
        <img 
          src={image} 
          alt={label} 
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-sm font-medium text-center">{label}</p>
    </motion.button>
  );
}
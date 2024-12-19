import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const steps = [
    'Search',
    'Select Theater',
    'Enter Details',
    'Select Occasion',
    'Add-ons',
    'Payment',
  ];

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex flex-col items-center relative"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: index + 1 <= currentStep ? 1 : 0.8 }}
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                index + 1 <= currentStep
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {index + 1}
            </motion.div>
            <span className="text-sm text-gray-600">{step}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 h-2 bg-gray-200 rounded-full">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: `${(currentStep - 1) * (100 / (totalSteps - 1))}%` }}
          className="h-full bg-indigo-600 rounded-full"
        />
      </div>
    </div>
  );
}
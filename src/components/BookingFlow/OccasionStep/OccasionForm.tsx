import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import type { OccasionType } from '../../../types/occasion';

interface OccasionFormProps {
  occasionType: OccasionType;
  onSubmit: (data: { names: Record<string, string>; specialRequests?: string }) => void;
}

export function OccasionForm({ occasionType, onSubmit }: OccasionFormProps) {
  const { register, handleSubmit, formState: { isValid } } = useForm();

  const getFields = () => {
    switch (occasionType) {
      case 'BIRTHDAY':
        return [{ key: 'birthdayPerson', label: 'Name of Birthday Person', required: true }];
      case 'ANNIVERSARY':
      case 'ROMANTIC_DATE':
      case 'MARRIAGE_PROPOSAL':
        return [
          { key: 'person1', label: 'Your Name', required: true },
          { key: 'person2', label: "Partner's Name", required: true }
        ];
      // Add other cases based on occasion type
      default:
        return [];
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {getFields().map((field) => (
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
            {...register(field.key, { required: field.required })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
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
          {...register('specialRequests')}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          placeholder="Any special requests or requirements?"
        />
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className={`w-full py-3 rounded-lg font-medium ${
          isValid
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        Continue to Next Step
      </button>
    </motion.form>
  );
}
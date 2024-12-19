import { motion } from 'framer-motion';
import { Search, Calendar, Gift, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Find Your Theater',
    description: 'Browse through our collection of premium theaters and choose your preferred location.',
  },
  {
    icon: Calendar,
    title: 'Select Date & Time',
    description: 'Pick a date and time slot that works best for your celebration.',
  },
  {
    icon: Gift,
    title: 'Customize Experience',
    description: 'Add special touches with our range of add-ons and celebration packages.',
  },
  {
    icon: CreditCard,
    title: 'Quick Booking',
    description: 'Secure your booking instantly with our easy payment process.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How does Private Theater Celebration work?
          </h2>
          <p className="text-xl text-gray-600">
            Four simple steps to create your perfect celebration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <step.icon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
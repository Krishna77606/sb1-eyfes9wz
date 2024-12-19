import { motion } from 'framer-motion';
import { Film, Gift, Music, Camera, Coffee, Star } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Film,
      title: 'Private Screenings',
      description: 'Watch your favorite movies in complete privacy with premium audio-visual equipment.',
      price: 'Starting from ₹1,499',
    },
    {
      icon: Gift,
      title: 'Special Occasions',
      description: 'Celebrate birthdays, anniversaries, and other special moments with customized packages.',
      price: 'Starting from ₹2,499',
    },
    {
      icon: Music,
      title: 'Karaoke Nights',
      description: 'Sing your heart out with our professional karaoke system.',
      price: 'Starting from ₹1,999',
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography services to capture your memorable moments.',
      price: 'Starting from ₹999',
    },
    {
      icon: Coffee,
      title: 'Food & Beverages',
      description: 'Wide range of snacks, beverages, and customized cakes available.',
      price: 'Starting from ₹499',
    },
    {
      icon: Star,
      title: 'Premium Experience',
      description: 'Luxury seating, ambient lighting, and personalized service.',
      price: 'Starting from ₹3,499',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600">Discover our range of premium entertainment services</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <service.icon className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-indigo-600 font-semibold">{service.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
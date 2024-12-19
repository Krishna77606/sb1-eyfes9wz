import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Clock } from 'lucide-react';
import { useNavigationStore } from '../store/navigationStore';
import { BookingFlow } from './BookingFlow';

export function Home() {
  const { setPage } = useNavigationStore();

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80"
            alt="Theater"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-white mb-6"
            >
              Your Private Cinema Experience Awaits
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Book a private theater for your special occasions. Create unforgettable memories with friends and family.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage('services')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium flex items-center space-x-2 hover:bg-indigo-700"
            >
              <span>Book Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Star,
              title: 'Premium Experience',
              description: 'State-of-the-art projection and sound systems for an immersive experience.',
            },
            {
              icon: Users,
              title: 'Private Screenings',
              description: 'Enjoy movies with your loved ones in complete privacy.',
            },
            {
              icon: Clock,
              title: 'Flexible Timings',
              description: 'Choose from multiple slots that suit your schedule.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Book Your Experience</h2>
        <BookingFlow />
      </section>
    </div>
  );
}
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigationStore } from '../../store/navigationStore';
import { BookingFlow } from '../BookingFlow';
import { HowItWorks } from './HowItWorks';
import { Testimonials } from './Testimonials';
import { FAQ } from './FAQ';

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
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Booking Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Book Your Experience</h2>
        <BookingFlow />
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
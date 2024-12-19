import { motion } from 'framer-motion';
import { Award, Users, ThumbsUp } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600">Creating memorable entertainment experiences since 2020</p>
      </motion.div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            We started with a simple idea: to revolutionize the way people experience cinema. Our journey began when we
            realized that watching movies should be more than just sitting in a crowded theater.
          </p>
          <p className="text-gray-600">
            Today, we're proud to offer premium private theater experiences that bring people together and create lasting
            memories. Our state-of-the-art facilities and dedication to customer service have made us the go-to destination
            for special celebrations and intimate gatherings.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <img
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80"
            alt="Our Theater"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          { icon: Award, stat: '50+', label: 'Theaters Nationwide' },
          { icon: Users, stat: '100,000+', label: 'Happy Customers' },
          { icon: ThumbsUp, stat: '4.9/5', label: 'Customer Rating' },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="text-center"
          >
            <item.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">{item.stat}</div>
            <div className="text-gray-600">{item.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-12">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'John Doe',
              role: 'Founder & CEO',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
            },
            {
              name: 'Jane Smith',
              role: 'Operations Director',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
            },
            {
              name: 'Mike Johnson',
              role: 'Technical Director',
              image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80',
    title: 'Premium Theater',
    category: 'Theaters',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80',
    title: 'Couple Screening',
    category: 'Events',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80',
    title: 'Birthday Celebration',
    category: 'Events',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&q=80',
    title: 'Luxury Seating',
    category: 'Theaters',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&q=80',
    title: 'Karaoke Night',
    category: 'Events',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80',
    title: 'Anniversary Special',
    category: 'Events',
  },
];

export function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
        <p className="text-xl text-gray-600">Explore our premium theaters and memorable events</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg shadow-lg aspect-video cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
              <p className="text-gray-200">{image.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
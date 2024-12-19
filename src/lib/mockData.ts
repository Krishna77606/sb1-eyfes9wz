import type { City, Theater, AddOn, Package, AddOnCategory } from '../types';

// Cities and Locations
export const cities: City[] = [
  {
    id: '1',
    name: 'Bangalore',
    locations: [
      { id: '1', name: 'MG Road' },
      { id: '2', name: 'Koramangala' },
      { id: '3', name: 'Banashankari' },
    ],
  },
];

// Theater data
export const theaters: Theater[] = [
  {
    id: '1',
    name: 'Luxe Cinema',
    location: 'MG Road, Bangalore',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80',
    slots: [
      { id: '1', startTime: '9:30 AM', endTime: '12:30 PM', available: true },
      { id: '2', startTime: '12:30 PM', endTime: '3:30 PM', available: true },
      { id: '3', startTime: '3:30 PM', endTime: '6:30 PM', available: true },
      { id: '4', startTime: '6:30 PM', endTime: '9:30 PM', available: true },
      { id: '5', startTime: '9:30 PM', endTime: '12:30 AM', available: true },
    ],
    capacityOptions: [
      { type: 'COUPLE', minPeople: 2, maxPeople: 2, pricePerPerson: 1500 },
      { type: 'FAMILY', minPeople: 8, maxPeople: 10, pricePerPerson: 1000 },
      { type: 'GROUP', minPeople: 6, maxPeople: 8, pricePerPerson: 800 }
    ],
    amenities: ['4K Projection', 'Dolby Atmos', 'Recliner Seats'],
    description: 'Premium theater experience with state-of-the-art facilities',
  },
  {
    id: '2',
    name: 'Premier Screens',
    location: 'Koramangala, Bangalore',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80',
    slots: [
      { id: '1', startTime: '9:30 AM', endTime: '12:30 PM', available: true },
      { id: '2', startTime: '12:30 PM', endTime: '3:30 PM', available: true },
      { id: '3', startTime: '3:30 PM', endTime: '6:30 PM', available: true },
      { id: '4', startTime: '6:30 PM', endTime: '9:30 PM', available: true },
      { id: '5', startTime: '9:30 PM', endTime: '12:30 AM', available: true },
    ],
    capacityOptions: [
      { type: 'COUPLE', minPeople: 2, maxPeople: 2, pricePerPerson: 1500 },
      { type: 'FAMILY', minPeople: 8, maxPeople: 10, pricePerPerson: 1000 },
      { type: 'GROUP', minPeople: 6, maxPeople: 8, pricePerPerson: 800 }
    ],
    amenities: ['4K Projection', 'Dolby Atmos', 'Premium Seating'],
    description: 'Luxury cinema experience in the heart of Koramangala',
  },
  {
    id: '3',
    name: 'Royal Cinema',
    location: 'Banashankari, Bangalore',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80',
    slots: [
      { id: '1', startTime: '9:30 AM', endTime: '12:30 PM', available: true },
      { id: '2', startTime: '12:30 PM', endTime: '3:30 PM', available: true },
      { id: '3', startTime: '3:30 PM', endTime: '6:30 PM', available: true },
      { id: '4', startTime: '6:30 PM', endTime: '9:30 PM', available: true },
      { id: '5', startTime: '9:30 PM', endTime: '12:30 AM', available: true },
    ],
    capacityOptions: [
      { type: 'COUPLE', minPeople: 2, maxPeople: 2, pricePerPerson: 1500 },
      { type: 'FAMILY', minPeople: 8, maxPeople: 10, pricePerPerson: 1000 },
      { type: 'GROUP', minPeople: 6, maxPeople: 8, pricePerPerson: 800 }
    ],
    amenities: ['4K Projection', 'Surround Sound', 'Luxury Seating'],
    description: 'Classic cinema experience with modern amenities',
  },
];

// Rest of the file remains the same...
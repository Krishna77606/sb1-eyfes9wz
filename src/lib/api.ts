import type { Theater, BookingDetails, AddOn, PaymentDetails } from '../types';
import { theaters } from './mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const theaterApi = {
  search: async (cityId: string, locationId: string, date: string) => {
    await delay(1500);
    return theaters;
  },

  getDetails: async (theaterId: string) => {
    await delay(1000);
    const theater = theaters.find(t => t.id === theaterId);
    if (!theater) throw new Error('Theater not found');
    return theater;
  },

  getAddOns: async (theaterId: string) => {
    await delay(1000);
    return [];
  },
};

export const bookingApi = {
  create: async (bookingDetails: Partial<BookingDetails>) => {
    await delay(1500);
    return {
      id: 'mock-booking-id',
      ...bookingDetails,
      status: 'PENDING',
      totalAmount: 1499,
    } as BookingDetails;
  },

  getDetails: async (bookingId: string) => {
    await delay(1000);
    throw new Error('Not implemented');
  },

  cancel: async (bookingId: string) => {
    await delay(1000);
    throw new Error('Not implemented');
  },
};

export const paymentApi = {
  initiate: async (bookingId: string) => {
    await delay(1000);
    return {
      id: 'mock-payment-id',
      bookingId,
      amount: 1499,
      status: 'PENDING',
      timestamp: new Date().toISOString(),
    } as PaymentDetails;
  },

  verify: async (paymentId: string) => {
    await delay(1000);
    return {
      id: paymentId,
      bookingId: 'mock-booking-id',
      amount: 1499,
      status: 'SUCCESS',
      timestamp: new Date().toISOString(),
    } as PaymentDetails;
  },
};
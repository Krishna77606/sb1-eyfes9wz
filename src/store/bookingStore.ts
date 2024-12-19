import { create } from 'zustand';
import type { 
  City, 
  Location, 
  Theater, 
  BookingDetails,
  Package,
  AddOn,
  BookingSummary,
  TheaterGroupType,
  OccasionDetails 
} from '../types';
import { theaterApi, bookingApi } from '../lib/api';

interface BookingState {
  // Selection state
  selectedCity: City | null;
  selectedLocation: Location | null;
  selectedDate: Date | null;
  selectedTheater: Theater | null;
  selectedSlot: string | null;
  selectedGroupType: TheaterGroupType | null;
  selectedPackage: Package | null;
  selectedAddOns: AddOn[];
  selectedCake: AddOn | null;
  occasion: OccasionDetails | null;
  
  // UI state
  step: number;
  isSearching: boolean;
  theaters: Theater[];
  
  // Actions
  setSelectedCity: (city: City) => void;
  setSelectedLocation: (location: Location) => void;
  setSelectedDate: (date: Date) => void;
  setSelectedTheater: (theater: Theater) => void;
  setSelectedSlot: (slotId: string) => void;
  setSelectedGroupType: (type: TheaterGroupType) => void;
  setPackage: (pkg: Package | null) => void;
  setOccasion: (occasion: OccasionDetails) => void;
  setCake: (cake: AddOn | null) => void;
  addAddOn: (addOn: AddOn) => void;
  removeAddOn: (addOnId: string) => void;
  getBookingSummary: () => BookingSummary;
  nextStep: () => void;
  prevStep: () => void;
  searchTheaters: () => Promise<void>;
  createBooking: (userDetails: { name: string; email: string; phone: string }) => Promise<BookingDetails>;
  reset: () => void;
}

const initialState = {
  selectedCity: null,
  selectedLocation: null,
  selectedDate: null,
  selectedTheater: null,
  selectedSlot: null,
  selectedGroupType: null,
  selectedPackage: null,
  selectedAddOns: [],
  selectedCake: null,
  occasion: null,
  step: 1,
  isSearching: false,
  theaters: [],
};

export const useBookingStore = create<BookingState>((set, get) => ({
  ...initialState,

  setSelectedCity: (city) => set({ selectedCity: city, selectedLocation: null }),
  setSelectedLocation: (location) => set({ selectedLocation: location }),
  setSelectedDate: (date) => set({ selectedDate: date }),
  setSelectedTheater: (theater) => set({ selectedTheater: theater }),
  setSelectedSlot: (slotId) => set({ selectedSlot: slotId }),
  setSelectedGroupType: (type) => set({ selectedGroupType: type }),
  setPackage: (pkg) => set({ selectedPackage: pkg }),
  setOccasion: (occasion) => set({ occasion }),
  setCake: (cake) => set({ selectedCake: cake }),
  
  addAddOn: (addOn) => set((state) => ({
    selectedAddOns: [...state.selectedAddOns, addOn],
  })),
  
  removeAddOn: (addOnId) => set((state) => ({
    selectedAddOns: state.selectedAddOns.filter((addon) => addon.id !== addOnId),
  })),

  getBookingSummary: () => {
    const state = get();
    const theaterPrice = state.selectedTheater?.capacityOptions.find(
      o => o.type === state.selectedGroupType
    )?.pricePerPerson ?? 0;
    
    const summary: BookingSummary = {
      theater: {
        price: theaterPrice,
        people: state.selectedTheater?.capacityOptions.find(
          o => o.type === state.selectedGroupType
        )?.minPeople ?? 0,
      },
      package: state.selectedPackage,
      addOns: state.selectedAddOns,
      cake: state.selectedCake,
      subtotal: 0,
      advanceAmount: 0,
      balanceAmount: 0,
    };

    // Calculate totals
    const total = 
      (theaterPrice * summary.theater.people) +
      (state.selectedPackage?.price ?? 0) +
      state.selectedAddOns.reduce((sum, addon) => sum + addon.price, 0) +
      (state.selectedCake?.price ?? 0);

    summary.subtotal = total;
    summary.advanceAmount = Math.min(750, total * 0.3);
    summary.balanceAmount = total - summary.advanceAmount;

    return summary;
  },

  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),

  searchTheaters: async () => {
    const { selectedCity, selectedLocation, selectedDate } = get();
    if (!selectedCity || !selectedLocation || !selectedDate) return;

    set({ isSearching: true });
    try {
      const theaters = await theaterApi.search(
        selectedCity.id,
        selectedLocation.id,
        selectedDate.toISOString()
      );
      set({ theaters, isSearching: false });
    } catch (error) {
      set({ isSearching: false });
      throw error;
    }
  },

  createBooking: async (userDetails) => {
    const state = get();
    const summary = state.getBookingSummary();
    
    if (!state.selectedTheater || !state.selectedSlot || !state.selectedDate || 
        !state.selectedGroupType || !state.occasion) {
      throw new Error('Missing required booking details');
    }

    const bookingDetails = {
      theaterId: state.selectedTheater.id,
      slotId: state.selectedSlot,
      date: state.selectedDate.toISOString(),
      groupType: state.selectedGroupType,
      occasion: state.occasion,
      package: state.selectedPackage,
      addOns: state.selectedAddOns,
      cake: state.selectedCake,
      summary,
      ...userDetails,
    };

    return await bookingApi.create(bookingDetails);
  },

  reset: () => set(initialState),
}));
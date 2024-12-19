import { create } from 'zustand';

type Page = 'home' | 'services' | 'about' | 'gallery' | 'contact' | 'login';

interface NavigationState {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentPage: 'home',
  setPage: (page) => set({ currentPage: page }),
}));
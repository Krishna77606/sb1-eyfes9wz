export interface BookingSummary {
  theater: {
    price: number;
    people: number;
  };
  package: Package | null;
  addOns: AddOn[];
  cake: AddOn | null;
  subtotal: number;
  advanceAmount: number;
  balanceAmount: number;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'CAKE' | 'DECORATION' | 'GIFT' | 'SERVICE';
  description?: string;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  includes: string[];
}

export interface AddOnCategory {
  id: string;
  name: string;
  items: AddOn[];
}
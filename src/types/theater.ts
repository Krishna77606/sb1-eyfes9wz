export interface Theater {
  id: string;
  name: string;
  location: string;
  rating: number;
  image: string;
  slots: Array<{
    id: string;
    startTime: string;
    endTime: string;
    available: boolean;
  }>;
  capacityOptions: Array<{
    type: TheaterGroupType;
    minPeople: number;
    maxPeople: number;
    pricePerPerson: number;
  }>;
  amenities: string[];
  description: string;
}

export type TheaterGroupType = 'COUPLE' | 'FAMILY' | 'GROUP';
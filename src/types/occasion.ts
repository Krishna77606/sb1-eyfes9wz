export type OccasionType = 
  | 'BIRTHDAY'
  | 'ANNIVERSARY'
  | 'ROMANTIC_DATE'
  | 'MARRIAGE_PROPOSAL'
  | 'BRIDE_TO_BE'
  | 'FAREWELL'
  | 'VICTORY'
  | 'BABY_SHOWER'
  | 'GROOM_TO_BE';

export interface OccasionDetails {
  type: OccasionType;
  names: Record<string, string>;
  specialRequests?: string;
}
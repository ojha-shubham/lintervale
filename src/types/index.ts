export type ConstructionType =
  | 'House / Residential'
  | 'Commercial Building'
  | 'RCC / Slab Work'
  | 'Road / Civil Work'
  | 'Other';

export interface MachineBookingRequest {
  name: string;
  phone: string;
  location: string;
  date: string;
  time: string;
  constructionType: ConstructionType;
  slabArea: string;
  requirement: string;
}
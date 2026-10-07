import type { LucideIcon } from 'lucide-react';
import { Building2, Layers3, Route, Drill, Home, Wrench, Landmark, Mountain } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: ServiceItem[] = [
  { title: 'Residential Construction', description: 'House construction and structural work coordinated around practical site requirements.', icon: Home },
  { title: 'RCC & Slab Work', description: 'Concrete, RCC and slab-related work with attention to site execution and finishing.', icon: Layers3 },
  { title: 'Road & Civil Work', description: 'Road, paving and civil construction support for local development work.', icon: Route },
  { title: 'Machine Service', description: 'Concrete finishing machine availability for slab and floor finishing enquiries.', icon: Drill },
  { title: 'Building Construction', description: 'A foundation for future full-scope building construction services.', icon: Building2 },
  { title: 'Renovation', description: 'Practical support for repair, improvement and renovation requirements.', icon: Wrench },
  { title: 'Foundation Work', description: 'Site-focused foundation and early-stage civil work support.', icon: Mountain },
  { title: 'Commercial Construction', description: 'Construction support for commercial spaces and structural requirements.', icon: Landmark },
];
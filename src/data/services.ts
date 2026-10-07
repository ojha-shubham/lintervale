import type { LucideIcon } from "lucide-react";
import { Building2, Layers3, Route, Drill, Home, Wrench, Landmark, Mountain } from "lucide-react";

export interface ServiceItem {
  title: string; description: string; hinglishTitle: string; hinglishDescription: string; icon: LucideIcon;
}
export const services: ServiceItem[] = [
  { title:"Residential Construction", hinglishTitle:"Ghar Ka Construction", description:"House construction and structural work coordinated around practical site requirements.", hinglishDescription:"Ghar ka construction aur structural work, practical site requirements ke hisaab se.", icon:Home },
  { title:"RCC & Slab Work", hinglishTitle:"RCC & Slab Work", description:"Concrete, RCC and slab-related work with attention to site execution and finishing.", hinglishDescription:"Concrete, RCC aur slab ka kaam, site execution aur finishing par focus ke saath.", icon:Layers3 },
  { title:"Road & Civil Work", hinglishTitle:"Road & Civil Work", description:"Road, paving and civil construction support for local development work.", hinglishDescription:"Road, paving aur local civil construction ke liye practical support.", icon:Route },
  { title:"Machine Service", hinglishTitle:"Linter Machine Service", description:"Concrete finishing machine availability for slab and floor finishing enquiries.", hinglishDescription:"Slab aur floor finishing ke liye concrete finishing machine availability.", icon:Drill },
  { title:"Building Construction", hinglishTitle:"Building Construction", description:"A foundation for future full-scope building construction services.", hinglishDescription:"Future full-scope building construction services ke liye complete support.", icon:Building2 },
  { title:"Renovation", hinglishTitle:"Renovation / Repair", description:"Practical support for repair, improvement and renovation requirements.", hinglishDescription:"Repair, improvement aur renovation ke liye practical support.", icon:Wrench },
  { title:"Foundation Work", hinglishTitle:"Foundation Work", description:"Site-focused foundation and early-stage civil work support.", hinglishDescription:"Foundation aur construction ke starting stage ka site-focused support.", icon:Mountain },
  { title:"Commercial Construction", hinglishTitle:"Commercial Construction", description:"Construction support for commercial spaces and structural requirements.", hinglishDescription:"Commercial spaces aur structural requirements ke liye construction support.", icon:Landmark },
];

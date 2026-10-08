import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Layers3,
  Route,
  Drill,
  Home,
  Wrench,
  Landmark,
  Mountain,
} from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  hinglishTitle: string;
  hinglishDescription: string;
  icon: LucideIcon;
}

export const services: ServiceItem[] = [
  {
    title: "Residential Construction",
    hinglishTitle: "Ghar Ka Construction",
    description:
      "House construction work for residential sites. Discuss the location, stage of work and what needs to be done.",
    hinglishDescription:
      "Ghar ke construction ke liye location, kaam ki stage aur requirement share karke baat karein.",
    icon: Home,
  },
  {
    title: "RCC & Slab Work",
    hinglishTitle: "RCC & Slab Work",
    description:
      "RCC and slab work enquiries, including concrete finishing requirements.",
    hinglishDescription:
      "RCC aur slab ke kaam ke saath concrete finishing ki requirement bhi discuss kar sakte hain.",
    icon: Layers3,
  },
  {
    title: "Road & Civil Work",
    hinglishTitle: "Road & Civil Work",
    description: "Road, paving and other local civil work requirements.",
    hinglishDescription:
      "Road, paving aur doosre local civil work ke liye requirement share karein.",
    icon: Route,
  },
  {
    title: "Linter Machine Service",
    hinglishTitle: "Linter Machine Service",
    description:
      "Machine enquiries for concrete slab and floor finishing. Availability is checked for the required date.",
    hinglishDescription:
      "Concrete slab aur floor finishing ke liye linter machine ki enquiry. Required date par availability check hogi.",
    icon: Drill,
  },
  {
    title: "Building Construction",
    hinglishTitle: "Building Construction",
    description:
      "Discuss your building construction requirement, site and current stage of work.",
    hinglishDescription:
      "Building construction ke liye site aur kaam ki current stage ke saath requirement batayein.",
    icon: Building2,
  },
  {
    title: "Renovation & Repair",
    hinglishTitle: "Renovation / Repair",
    description:
      "Repair, improvement and renovation work can be discussed based on the site requirement.",
    hinglishDescription:
      "Repair, improvement aur renovation ka kaam site requirement ke hisaab se discuss karein.",
    icon: Wrench,
  },
  {
    title: "Foundation Work",
    hinglishTitle: "Foundation Work",
    description: "Foundation and early-stage civil work enquiries.",
    hinglishDescription:
      "Foundation aur construction ke starting-stage civil work ke liye enquiry karein.",
    icon: Mountain,
  },
  {
    title: "Commercial Construction",
    hinglishTitle: "Commercial Construction",
    description:
      "Construction requirements for shops, commercial spaces and other building work.",
    hinglishDescription:
      "Shop, commercial space aur doosre building work ke liye requirement share karein.",
    icon: Landmark,
  },
];

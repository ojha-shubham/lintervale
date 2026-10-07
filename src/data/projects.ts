export interface ProjectItem {
  category: "Residential" | "RCC / Slab" | "Commercial" | "Road / Civil";
  title: string;
  description: string;
  location: string;
  imageLabel: string;
  imageUrl: string;
}

const image = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=82`;

export const projects: ProjectItem[] = [
  {
    category: "Residential",
    title: "Residential Construction",
    description:
      "Illustrative construction image. Replace with a real project photograph and details.",
    location: "Project location",
    imageLabel: "Residential",
    imageUrl: image("photo-1503387762-592deb58ef4e"),
  },
  {
    category: "RCC / Slab",
    title: "Concrete Slab Work",
    description:
      "Illustrative concrete-work image. Replace with a real slab or finishing photograph.",
    location: "Project location",
    imageLabel: "RCC / Slab",
    imageUrl: image("photo-1541888946425-d81bb19240f5"),
  },
  {
    category: "Commercial",
    title: "Commercial Construction",
    description:
      "Illustrative construction image. Replace with a real commercial project photograph.",
    location: "Project location",
    imageLabel: "Commercial",
    imageUrl: image("photo-1504307651254-35680f356dfd"),
  },
  {
    category: "Road / Civil",
    title: "Road & Civil Work",
    description:
      "Illustrative civil-work image. Replace with a real road or civil project photograph.",
    location: "Project location",
    imageLabel: "Road / Civil",
    imageUrl: image("photo-1511818966892-d7d671e672a2"),
  },
  {
    category: "RCC / Slab",
    title: "Concrete Finishing",
    description:
      "Illustrative concrete finishing image. Replace with a real machine/service photograph.",
    location: "Project location",
    imageLabel: "Concrete Finishing",
    imageUrl: image("photo-1590644365607-1c5a4c8e4c2c"),
  },
];

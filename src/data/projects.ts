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
    imageUrl: image("photo-1685464196339-46a985b2049b"),
  },
  {
    category: "RCC / Slab",
    title: "Concrete Slab Work",
    description:
      "Illustrative concrete-work image. Replace with a real slab or finishing photograph.",
    location: "Project location",
    imageLabel: "RCC / Slab",
    imageUrl: image("photo-1743130940742-c0d1fff97f1c"),
  },
  {
    category: "Commercial",
    title: "Commercial Construction",
    description:
      "Illustrative construction image. Replace with a real commercial project photograph.",
    location: "Project location",
    imageLabel: "Commercial",
    imageUrl: image("photo-1627591637320-fcfe8c34b62d"),
  },
  {
    category: "Road / Civil",
    title: "Road & Civil Work",
    description:
      "Illustrative civil-work image. Replace with a real road or civil project photograph.",
    location: "Project location",
    imageLabel: "Road / Civil",
    imageUrl: image("photo-1647252397463-4724e68ffbd3"),
  },
  {
    category: "RCC / Slab",
    title: "Concrete Finishing",
    description:
      "Illustrative concrete finishing image. Replace with a real machine/service photograph.",
    location: "Project location",
    imageLabel: "Concrete Finishing",
    imageUrl: image("photo-1743130940742-c0d1fff97f1c"),
  },
];

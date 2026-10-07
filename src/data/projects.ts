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
    description: "Work type image for residential construction.",
    location: "Work type",
    imageLabel: "Residential construction",
    imageUrl: image("photo-1685464196339-46a985b2049b"),
  },
  {
    category: "RCC / Slab",
    title: "Concrete Slab Work",
    description: "Work type image for RCC and slab work.",
    location: "Work type",
    imageLabel: "Concrete slab work",
    imageUrl: image("photo-1743130940742-c0d1fff97f1c"),
  },
  {
    category: "Commercial",
    title: "Commercial Construction",
    description: "Work type image for commercial construction.",
    location: "Work type",
    imageLabel: "Commercial construction",
    imageUrl: image("photo-1627591637320-fcfe8c34b62d"),
  },
  {
    category: "Road / Civil",
    title: "Road & Civil Work",
    description: "Work type image for road and civil work.",
    location: "Work type",
    imageLabel: "Road and civil work",
    imageUrl: image("photo-1647252397463-4724e68ffbd3"),
  },
  {
    category: "RCC / Slab",
    title: "Concrete Finishing",
    description: "Work type image for concrete finishing.",
    location: "Work type",
    imageLabel: "Concrete finishing",
    imageUrl: image("photo-1743130940742-c0d1fff97f1c"),
  },
];

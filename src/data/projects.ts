export interface ProjectItem {
  category: 'Residential' | 'RCC / Slab' | 'Commercial' | 'Road / Civil';
  title: string;
  description: string;
  location: string;
  imageLabel: string;
}

export const projects: ProjectItem[] = [
  { category: 'Residential', title: 'House Construction', description: 'Project showcase placeholder — replace with a real residential project image and details.', location: 'Location placeholder', imageLabel: 'Residential Project' },
  { category: 'RCC / Slab', title: 'Concrete Slab Work', description: 'Project showcase placeholder — replace with a real slab or finishing image.', location: 'Location placeholder', imageLabel: 'RCC / Slab Project' },
  { category: 'Commercial', title: 'Commercial Structure', description: 'Project showcase placeholder — replace with a real commercial construction image.', location: 'Location placeholder', imageLabel: 'Commercial Project' },
  { category: 'Road / Civil', title: 'Civil Work', description: 'Project showcase placeholder — replace with a real road or civil work image.', location: 'Location placeholder', imageLabel: 'Road / Civil Project' },
];
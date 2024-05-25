export interface Blog {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  date: string;
  slug: string;
}

export const blogList: Blog[] = [
  {
    title: "Exploring the Unseen Realms of Parallel Processing",
    category: "Graphics",
    description: "Dive into the intricate world of parallel processing with a blend of graphics, distributed systems, and deep learning. Discover my projects, insights, and experiences in this fascinating field.",
    technologies: ["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"],
    date: "January 1st, 2024",
    slug: "exploring-the-unseen-realms-of-parallel-processing",
  },
  
];
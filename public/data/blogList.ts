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
  {
    title: "Harnessing the Power of GPUs for Advanced Computing",
    category: "Graphics",
    description: "Join me on my journey through the realms of GPU computing, where I explore graphics, distributed systems, and deep learning. Learn from my projects and experiences, and gain new perspectives.",
    technologies: ["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"],
    date: "January 1st, 2024",
    slug: "harnessing-the-power-of-gpus-for-advanced-computing",
  },
  {
    title: "A Deep Dive into CUDA and Parallel Algorithms",
    category: "Graphics",
    description: "Uncover the secrets of CUDA and parallel algorithms as I share my journey into graphics, distributed systems, and deep learning. Follow my projects and insights for an engaging experience.",
    technologies: ["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"],
    date: "January 1st, 2024",
    slug: "a-deep-dive-into-cuda-and-parallel-algorithms",
  },
  {
    title: "Navigating the Complexities of Modern Graphics Programming",
    category: "Graphics",
    description: "Explore the complexities of modern graphics programming through my experiences with distributed systems and deep learning. Discover my projects and thoughts on the ever-evolving landscape of technology.",
    technologies: ["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"],
    date: "January 1st, 2024",
    slug: "navigating-the-complexities-of-modern-graphics-programming",
  },
];
export interface Project {
    title: string;
    category: string;
    tag: string;
    description: string;
    technologies: string[];
    imageSrc: string;
    githubLink: string;
  }

  export interface Blog {
    title: string;
    category: string;
    description: string;
    technologies: string[];
    date: string;
    slug: string;
  }

  export type Toc = {
    value: string;
    depth: number;
    url: string;
  }[];
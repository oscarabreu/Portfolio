import { Project } from 'types'; 

export const featuredProjects: Project[] = [
  {
    title: "Multithreaded Ray Tracer",
    category: "Graphics",
    description: `A multithreaded ray tracer in C++ with advanced material modeling, and efficient data-structures. Ongoing Project.`,
    technologies: ["C++", "CUDA", "NVRTC"],
    imageSrc: "/nvidiart.webp",
    githubLink: "https://github.com/oscarabreu/Multithreaded-Path-Tracer",
  },
  {
    title: "Wireframe Renderer",
    category: "Graphics",
    description: `I implemented a wireframe renderer using the SDL2 library and TGA image format
    composed of a model loader class, geometric utilities, TGA image handling and Bresehnham's line drawing algorithm.`,
    technologies: ["C++", "SDL2", "OpenGL"],
    imageSrc: "/african.webp",
    githubLink: "https://github.com/oscarabreu/Wireframe-Renderer",
  },
  {
    title: "Respiration Rate Detection",
    category: "Systems",
    description: `This project uses an STM324F and a Bosch BME680 680 sensor embedded within a clinical oxygen mask that will poll
     for respiration rate using temperature deviations in a closed chamber. If a patient stops breathing for over 5 seconds, the 
     microcontroller will signal an alarm. `,
    technologies: ["C++", "STM32", "GPIO", "I2C", "RCC", "BME680"],
    imageSrc: "/stm32.webp",
    githubLink: "https://github.com/oscarabreu/Embedded-Mask---Respiration-Rate-Detection/tree/main",
  },
  {
    title: "File I/O Benchmark Tool",
    category: "Systems",
    description: `This program is a simple utility to measure the read and write performance of a file. It uses block-based operations 
    to read or write data, allowing users to specify the size and count of blocks. My first real 'project', and a nice introduction to multithreading.`,
    technologies: ["C++"],
    imageSrc: "/linux.webp",
    githubLink: "https://github.com/oscarabreu/File-IO-Performance-Tool",
  },
  {
    title: "Redis - K/V Database",
    category: "Systems",
    description: `A simplified Redis-like in-memory data structure store, capable of supporting basic data structures such as strings, hashes, lists, sets, and more,
    with a command parser to interpret and execute basic Redis commands and persistence to save and load data from disk to retain data across sessions.`,
    technologies: ["C++"],
    imageSrc: "/redis2.webp",
    githubLink: "https://github.com/oscarabreu/K-V-Store",
  },
  {
    title: "Relational Database",
    category: "Systems",
    description: `A simplified relational database project implemented in Go. This project encompasses fundamental aspects of a database system such as B-Trees, transaction handling, and query language parsing and execution.
    `,
    technologies: ["Go", "net/http"],
    imageSrc: "/relational.webp",
    githubLink: "https://github.com/oscarabreu/Relational-Database",
  },
  {
    title: "Mandelbrot Set",
    category: "Graphics",
    description: `A C++ SDL2 rendering of the famous Mandelbrot Set! I will likely add more sets like this to this repository!`,
    technologies: ["C++", "SDL2"],
    imageSrc: "/mandelbrot.webp",
    githubLink: "https://github.com/oscarabreu/Mandelbrot-Viewer",
  },
  {
    title: "FabledFungi API",
    category: "Web",
    description: `FabledFungi is a unique API hosted on AWS, designed to fetch random mushroom observations with a wealth of related metadata for each observation.
    `,
    technologies: ["Go", "VPC", "DyanmoDB", "Redis", "Lambdas", "S3", "Python", "Typescript"],
    imageSrc: "/fungi.webp",
    githubLink: "https://github.com/oscarabreu/FabledFungi?tab=readme-ov-file",
  },
  {
    title: "Upscaling the Dense Residual Connection Transformer",
    category: "Machine Learning",
    description: ` Improving DRCT 4x super-resolution model stability through post-normalization, cosine attention, and log-spaced continuous position bias. `,
    technologies: ["Python", "Pytorch", "WandB", "ONNX", "CUDA", "MLFlow", "SageMaker", "Torchscript"],
    imageSrc: "/DRCT4.webp",
    githubLink: "https://github.com/oscarabreu/hpml_final",
  },
  
];
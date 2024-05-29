// public/data/workExperienceList.ts

export const workList = [
  {
    companyLogo: '/nagoya.webp',
    title: 'Computer Vision Research Intern',
    company: 'Nagoya University',
    date: 'May 2024 – Aug 2024',
    location: 'Nagoya, Japan',
    description: [
      'Developing real-time tracking and identification systems using the Shifted Window Transformer (SWIN) for SoccerNet Game State Reconstruction.',
      'Utilizing transfer learning, unsupervised learning, and semi-supervised learning paradigms to enhance model performance given limited annotated data.',
      'Contributing to the development of a novel benchmark, dataset, and evaluation metric for the SoccerNet Game State Reconstruction task.'
    ],
    technologies: ['Python', 'Pytorch', 'Tensorflow', "ONNX", "Transformer"]
  },
  {
    companyLogo: '/Visentra.webp',
    title: 'Software Engineer (Founder)',
    company: 'Visentra',
    date: 'May 2024 - Present',
    location: 'New York, NY',
    description: [
      "Developed a scalable image-processing service utilizing ECS, on-demand GPUs via RunPod/Modal/Lambdas, and Kubernetes (KubeFlow) for AI Image Conversion.",
      'Implemented efficient workflows and managed deployment pipelines to ensure high availability and performance of the image-processing service in production environments, integrating cutting-edge ML technologies and cloud infrastructure.'
    ],
    technologies: ['Python', 'Pytorch', 'Tensorflow', "ONNX", "Transformer"]
  }
];
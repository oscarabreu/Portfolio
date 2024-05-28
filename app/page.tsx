import HomeSection from '@/components/HomeSection';

async function fetchFeaturedProjects() {
  return [
    {
      title: "Ray-Tracer",
      description: "A multi-threaded ray-tracer built from scratch",
      imageUrl: "/nvidiart.webp",
      githubLink: "https://github.com/oscarabreu/Multithreaded-Path-Tracer",
      tags: ["C++", "CUDA", "cuRAND", "NVRTC"],
    },
    {
      title: "FabledFungi API",
      description: `FabledFungi is a unique API hosted on AWS, designed to fetch random mushroom observations with a wealth of related metadata for each observation.
      `,
      tags: ["Go", "DyanmoDB", "Redis", "S3"],
      imageUrl: "/fungi.webp",
      githubLink: "https://github.com/oscarabreu/FabledFungi?tab=readme-ov-file",
    },
  ];
}

export default async function HomePage() {
  const featuredProjects = await fetchFeaturedProjects();

  return (
    <div className="flex flex-col min-h-screen font-body bg-bgclr">
      <main className="text-sm my-5 mx-5">
        <HomeSection featuredProjects={featuredProjects} />
      </main>
    </div>
  );
}
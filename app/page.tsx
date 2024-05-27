// app/page.tsx

import HeroSection from '@/components/HeroSection';

interface HomePageProps {
  featuredProject: {
    title: string;
    description: string;
    imageUrl: string;
    githubLink: string;
    tags: string[];
  };
}

async function fetchFeaturedProject() {
  return {
    title: "Ray-Tracer",
    description: "A multi-threaded ray-tracer built from scratch",
    imageUrl: "/nvidiart.webp",
    githubLink: "https://github.com/oscarabreu/Multithreaded-Path-Tracer",
    tags: ["C++", "CUDA", "cuRAND", "NVRTC"],
  };
}

export default async function HomePage() {
  const featuredProject = await fetchFeaturedProject();

  return (
    <div className="flex flex-col min-h-screen font-body bg-bgclr">
      <main className="text-sm my-5 mx-5">
        <HeroSection featuredProject={featuredProject} />
      </main>
    </div>
  );
}
/** @format */

import { Project } from 'types';
import ProjectPage from '@/components/ProjectPage'; // Adjust the path if necessary

const fetchProjects = async () => {
  const { featuredProjects } = await import("@/public/data/projectList");
  return featuredProjects;
};

export default async function Projects() {
  const projects: Project[] = await fetchProjects();
  const searchQuery = '';  
  const activeCategory = 'All';  

  return (
    <div className="flex flex-col min-h-screen font-body bg-bgclr">
      <main className="text-sm my-5 mx-5">
        <ProjectPage projects={projects} searchQuery={searchQuery} activeCategory={activeCategory} />
      </main>
    </div>
  );
};
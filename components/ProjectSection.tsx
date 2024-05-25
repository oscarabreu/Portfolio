import React from 'react';
import ProjectPage from '@/components/ProjectPage'; // Adjust the path if necessary
import { Project } from 'types';

interface ProjectSectionProps {
  projects: Project[];
  searchQuery: string;
  activeCategory: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects, searchQuery, activeCategory }) => {
  return (
    <ProjectPage projects={projects} searchQuery={searchQuery} activeCategory={activeCategory} />
  );
};

export default ProjectSection;
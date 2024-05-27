import React from 'react';
import ProjectPage from '@/components/ProjectPage'; // Adjust the path if necessary
import { Project } from 'types';

interface ProjectSectionProps {
  projects: Project[];
  searchQuery: string;
  activeTag: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects, searchQuery, activeTag }) => {
  return (
    <ProjectPage projects={projects} searchQuery={searchQuery} activeTag={activeTag} />
  );
};

export default ProjectSection;
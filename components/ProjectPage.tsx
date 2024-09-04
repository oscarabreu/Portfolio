"use client";

import React, { useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import { Project } from 'types';
import ProjectItem from '@/components/ProjectItem';

interface ProjectPageProps {
  projects: Project[];
  searchQuery: string;
  activeTag: string;
}

const PROF_ITEMS = [
  { label: "All" },
  { label: "ML/AI" },
  { label: "Graphics" },
  { label: "Systems" },
  { label: "Web" },
];

const ITEMS_PER_PAGE = 5;

const ProjectPage: React.FC<ProjectPageProps> = ({ projects, searchQuery, activeTag }) => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [query, setQuery] = useState<string>(searchQuery);
  const [tag, setTag] = useState<string>(activeTag);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    filterProjects(projects, query, tag);
  }, [projects, query, tag]);

  const filterProjects = (projects: Project[], query: string, tag: string) => {
    const filtered = projects.filter((project) => {
      const matchesSearchQuery =
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.category.toLowerCase().includes(query.toLowerCase()) ||
        project.tag.toLowerCase().includes(query.toLowerCase());
      const matchesTag = tag === "All" || project.tag === tag;
      return matchesSearchQuery && matchesTag;
    });
    setFilteredProjects(filtered);
    setCurrentPage(1); 
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleTagClick = (newTag: string) => {
    setTag(newTag);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section id="home">
      <div className="flex flex-col max-w-3xl m-auto text-txtclr text-lg">
        <div className="flex justify-center md:justify-start py-4">
          <Nav />
        </div>
        <h1 className="text-4xl py-5 font-bold max-md:text-center text-txtclr2">Projects</h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col space-y-2 md:w-2/5">
            <h4 className="text-sm text-gray-500 max-md:text-center">By name</h4>
            <div className="relative pb-4">
              <input
                type="text"
                aria-label="Search projects"
                placeholder="Search projects"
                value={query}
                onChange={handleSearchChange}
                className="block w-full rounded-md px-4 py-1 focus:border-primary-500 focus:ring-primary-500 border-gray-900 bg-gray-800 text-gray-200"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="absolute right-3 top-2 h-5 w-5 text-gray-400 dark:text-gray-300"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col space-y-2 pb-4 md:w-3/5">
            <h4 className="text-sm text-gray-500 md:text-end max-md:text-center">By category</h4>
            <div className="text-base flex flex-row justify-center md:justify-end">
              <div className="space-x-2 max-md:w-full flex flex-row flex-wrap max-md:justify-center">
                {PROF_ITEMS.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleTagClick(item.label)}
                    className={`block md:inline-block rounded ${
                      tag === item.label
                        ? "bg-txtclr2 text-bgclr"
                        : "bg-gray-800 text-gray-400 hover:bg-ytclr hover:text-bgclr"
                    } border-gray-800 border px-3 py-1`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col py-6 justify-evenly">
          {currentProjects.length > 0 ? (
            currentProjects.map((project, idx) => (
              <ProjectItem
                key={idx}
                title={project.title}
                category={project.category}
                tag={project.tag}
                description={project.description}
                technologies={project.technologies}
                imageSrc={project.imageSrc}
                githubLink={project.githubLink}
              />
            ))
          ) : (
            <p>No projects found.</p>
          )}
        </div>
        <div className="flex justify-between py-4">
          {currentPage > 1 && (
            <button
              onClick={handlePreviousPage}
              className="block md:inline-block rounded bg-bgclr text-txtclr border-txtclr hover:border-txtclr hover:bg-txtclr2 hover:text-bgclr border px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary-500 active:bg-txtclr2 active:text-bgclr"
            >
              Previous Page
            </button>
          )}
          <div className="flex-grow"></div>
          {startIndex + currentProjects.length < filteredProjects.length && (
            <button
              onClick={handleNextPage}
              className="block md:inline-block rounded bg-bgclr text-txtclr border-txtclr hover:border-txtclr hover:bg-txtclr2 hover:text-bgclr border px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary-500 active:bg-txtclr2 active:text-bgclr"
            >
              Next Page
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
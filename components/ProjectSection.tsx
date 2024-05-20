/** @format */

"use client";
import React, { useState } from "react";
import Nav from "@/components/Nav";
import { featuredProjects } from "@/public/data/projectList"; // Make sure this is correctly imported
import ProjectItem from "@/components/ProjectItem";
import Link from "next/link";
import { Project } from 'types'; // Import the Project type

interface ProfItem {
  label: string;
}

const PROF_ITEMS: Array<ProfItem> = [
  {
    label: "Machine Learning",
  },
  {
    label: "Graphics",
  },
  {
    label: "Systems",
  },
  {
    label:"Web"
  },
  {
    label: "All",
  },
];
const ProjectSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const filteredProjects = featuredProjects.filter((project: Project) => {
    const matchesSearchQuery =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    return matchesSearchQuery && matchesCategory;
  });

  return (
    <section id="home">
      <div className="flex flex-col max-w-5xl m-auto text-txtclr text-lg">
        <div className="flex justify-center md:justify-start pt-4 pb-12">
          <Nav />
        </div>
        <h1 className="text-4xl pb-2 font-bold max-md:text-center">Projects</h1>
        <div className="flex flex-col md:flex-row pb-0 justify-between">
          <div className="flex flex-col space-y-2 md:w-2/5">
            <h4 className="text-sm text-gray-500 max-md:text-center">By name</h4>
            <div className="relative pb-4">
              <input
                type="text"
                aria-label="Search projects"
                placeholder="Search projects"
                value={searchQuery}
                onChange={handleSearchChange}
                className="block w-full rounded-md px-4 py-1 focus:border-primary-500 focus:ring-primary-500 border-gray-900 bg-gray-300 text-bgclr"
              />
              <svg
                className="absolute right-3 top-2 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
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
                    onClick={() => handleCategoryClick(item.label)}
                    className={`block md:inline-block rounded ${
                      activeCategory === item.label
                        ? "bg-txtclr2 text-bgclr"
                        : "bg-txtclr text-gray-800"
                    } border-gray-800 hover:bg-ytclr hover:text-grey-100 border px-3 py-1`}
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
          {filteredProjects.map((project, idx) => (
            <ProjectItem
              key={idx}
              title={project.title}
              category={project.category}
              description={project.description}
              technologies={project.technologies}
              imageSrc={project.imageSrc}
              githubLink={project.githubLink}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
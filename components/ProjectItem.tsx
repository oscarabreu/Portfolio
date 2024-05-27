import React from "react";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";


interface ProjectProps {
  title: string;
  category: string;
  tag: string;
  description: string;
  technologies: string[];
  imageSrc: string;
  githubLink: string;
}

const ProjectItem: React.FC<ProjectProps> = ({
  title,
  category,
  tag,
  description,
  technologies,
  imageSrc,
  githubLink,
}) => {
  return (
    <div className="flex flex-row my-4 relative justify-center min-h-[275px]">
      <div className="flex-grow relative flex justify-center items-center max-md:opacity-20 overflow-hidden rounded h-[275px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="rounded transition-transform duration-500"
        />
      </div>
      <div className="max-md:absolute max-md:text-center flex flex-col md:ml-4 max-md:h-full justify-evenly md:w-1/2">
        <h3 className="text-base text-txtclr">{category}</h3>
        <h3 className="text-2xl font-semibold text-ytclr">{title}</h3>
        <ul className="text-sm flex gap-1.5 flex-wrap max-md:justify-center">
          {technologies.map((tech) => (
            <li key={tech} className="border rounded px-1 py-1 bg-bgclr text-txtclr border-txtclr text-xs">
              {tech}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-400">{description}</p>
        <div className="text-2xl flex gap-4 flex-row max-md:justify-center">
          <a
            className="text-txtclr hover:text-txtclr"
            href={githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
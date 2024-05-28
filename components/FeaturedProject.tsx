import React from 'react';
import Image from 'next/image';
import { AiOutlineGithub } from 'react-icons/ai';

interface FeaturedProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string;
  tags: string[];
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ title, description, imageUrl, githubLink, tags }) => {
  return (
    <div className="flex flex-col md:flex-row h-auto items-center justify-center py-2 w-full" style={{ height: '250px' }}>
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 right-0 bottom-0 z-20 flex flex-col justify-around items-center text-sm text-center">
          <a className="text-2xl font-bold text-txtclr2 hover:underline" href={githubLink}>{title}</a>
          <h3 className="text-sm text-txtclr">{description}</h3>
          <div className="text-xl flex gap-4">
            <a
              className="hover:-translate-y-1 hover:text-txtclr2 transition-transform cursor-pointer text-txtclr2"
              href={githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub />
            </a>
          </div>
          <ul className="text-xs flex flex-wrap justify-center">
            {tags.map((tag, idx) => (
              <li key={idx} className="border rounded px-3 py-1 mx-1 my-1 bg-txtclr text-bgclr border-txtclr">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full h-full overflow-hidden">
          <Image
            className="rounded opacity-20"
            src={imageUrl}
            alt={title}
            fill /* Fill the container */
            sizes="100vw" /* Fill the available width */
            style={{ objectFit: 'cover', objectPosition: 'center' }} /* Cover and center the image */
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
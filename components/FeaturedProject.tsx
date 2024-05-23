import React from 'react';
import Image from 'next/image';
import { AiOutlineGithub, AiOutlineApartment, AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

interface FeaturedProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string;
  liveLink: string;
  tags: string[];
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ title, description, imageUrl, githubLink, liveLink, tags }) => {
  return (
    <div className="flex flex-row h-auto justify-center items-center py-4">
      <div className="relative flex">
        <div
          className="flex flex-col justify-around md:items-start max-md:absolute max-md:items-center max-md:justify-around max-md:space-y-4 
                      top-0 left-0 right-0 bottom-0 z-20 lg:w-1/2  text-sm"
        >
          <h3 className="text-2xl font-bold text-txtclr">{title}</h3>
          <p className="text-sm max-md:text-center text-txtclr">{description}</p>
          <div className="text-2xl flex gap-4 flex-row">
            <a
              className="text-txtclr hover:text-txtclr"
              href={githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub />
            </a>
            <a
              className="text-txtclr hover:text-txtclr"
              href={liveLink}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineApartment />
            </a>
          </div>
          <ul className="text-xs flex flex-wrap max-md:justify-center">
            {tags.map((tag, idx) => (
              <li key={idx} className="border rounded px-3 py-1 mx-1 my-1 bg-bgclr text-txtclr border-txtclr">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image
            className="flex max-md:opacity-20  mx-auto rounded"
            src={imageUrl}
            alt={title}
            width={1500}
            height={900}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
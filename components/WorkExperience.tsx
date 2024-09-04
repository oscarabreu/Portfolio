// components/WorkExperience.tsx

import React from 'react';
import Image from 'next/image';

interface WorkExperienceProps {
  companyLogo: string;
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  technologies: string[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ companyLogo, title, company, date, location, description, technologies }) => {
  return (
    <div className="flex h-auto  py-4">
      <div className="relative max-w-4xl p-4 bg-bgclr rounded-lg shadow-lg s">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 mr-4 relative">
            <Image
              src={companyLogo}
              alt={`${company} logo`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-txtclr2">{title}</h3>
            <p className="text-md text-txtclr">{company}</p>
            <p className="text-sm text-gray-400">{date}</p>
            <p className="text-sm text-gray-400">{location}</p>
          </div>
        </div>
        <ul className="text-sm text-txtclr list-disc list-inside mb-4">
          {description.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
        <div className="flex flex-wrap">
          {technologies.map((tech, idx) => (
            <span key={idx} className="border text-sm rounded px-3 py-1 mx-1 my-1 bg-txtclr text-bgclr border-txtclr">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
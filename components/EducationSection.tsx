import React from 'react';
import Image from 'next/image';

interface EducationProps {
  institutionLogo: string;
  degree: string;
  institution: string;
  date: string;
  activities: string;
}

const Education: React.FC<EducationProps> = ({ institutionLogo, degree, institution, date, activities}) => {
  return (
    <div className="flex flex-row items-start justify-start w-full p-4 bg-bgclr rounded-lg shadow-lg">
      <div className="w-16 h-16 flex-shrink-0">
        <Image 
          src={institutionLogo} 
          alt={`${institution} logo`} 
          width={60} 
          height={60} 
          className="object-contain"
        />
      </div>
      <div className='text-left ml-3 justify-evenly space-y-1'>
        <h3 className="text-xl font-bold text-txtclr2">{institution}</h3>
        <p className="text-base text-ytclr">{degree}</p>
        <p className="text-sm text-txtclr">{date}</p>
        <p className="text-sm text-gray-400">{activities}</p>
      </div>
    </div>
  );
};

export default Education;
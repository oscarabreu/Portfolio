// components/Education.tsx

import React from 'react';
import Image from 'next/image';

interface EducationProps {
  institutionLogo: string;
  degree: string;
  institution: string;
  date: string;
  awards: string[];
  activities: string;
}

const Education: React.FC<EducationProps> = ({ institutionLogo, degree, institution, date, activities, awards}) => {
  return (
    <div className="flex flex-col md:flex-row h-auto items-center justify-center">
      <div className="relative w-full py-4 bg-bgclr rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 mr-4 relative">
            <Image src={institutionLogo} alt={`${institution} logo`} layout="fill" objectFit="contain" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-txtclr2">{degree}</h3>
            <p className="text-md text-txtclr">{institution}</p>
            <p className="text-sm text-gray-400">{date}</p>
            <p className='text-sm text-gray-400'>{activities}</p>
            <p className='text-sm text-gray-400'>{awards}</p>
          </div>
        </div>
        <div className="text-sm text-txtclr">
        </div>
      </div>
    </div>
  );
};

export default Education;

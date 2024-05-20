import React from 'react';
import Image from 'next/image';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

interface ReadingItemProps {
  imageUrl: string;
  notesLink: string;
  bookName: string;
  bookAuthor: string,
  description: string,
}

const ReadingItem: React.FC<ReadingItemProps> = ({ imageUrl, notesLink, bookName, bookAuthor, description }) => {
  return (
    <div className="flex justify-evenly">
      <a
        className="flex items-center hover:text-txtclr"
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
      >
      </a>
      <div className="flex justify-center items-center w-1/3">
        <Image
          src={imageUrl}
          alt={bookName}
          width={100}
          height={125}
          className="justify-center items-center"
        />
      </div>
      <div className="flex flex-col justify-center space-y-1 text-left md:text-center text-txtclr w-3/4 px-2 py-4 max-h-300">
        <h4>{bookName}</h4>
        <h4 className='text-sm'>{bookAuthor}</h4>
        <h6 className='text-xs text-gray-500'>{description}</h6>
        <h4>
            <a href={notesLink} className="underline hover:text-txtclr">
            Notes Here
            </a>
        </h4>
      </div>
      <a
        className="flex items-center hover:text-txtclr text-xl"
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
      >
      </a>
    </div>
  );
};

export default ReadingItem;
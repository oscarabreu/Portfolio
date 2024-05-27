import React from 'react';
import Image from 'next/image';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

interface ReadingItemProps {
  imageUrl: string;
  notesLink: string;
  bookName: string;
  bookAuthor: string;
  description: string;
}

const ReadingItem: React.FC<ReadingItemProps> = ({
  imageUrl,
  notesLink,
  bookName,
  bookAuthor,
  description,
}) => {
  return (
    <div className="flex flex-row justify-evenly">
      <a
        className="flex items-center hover:text-txtclr"
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
      >
      </a>
      <div className="flex justify-center items-center w-full md:w-1/3">
        <Image
          src={imageUrl}
          alt={bookName}
          width={100}
          height={125}
          style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
          className="justify-center items-center"
        />
      </div>
      <div className="flex flex-col items-center justify-between max-md:space-y-2 text-center text-txtclr w-full md:w-2/3 px-2 ">
        <h4 className='text-txtclr2'>{bookName}</h4>
        <h4 className="text-sm">{bookAuthor}</h4>
        <h6 className="text-xs text-gray-500">{description}</h6>
        <h4>
          <a href={notesLink} className="block w-full md:inline-block rounded text-txtclr bg-bgclr border-txtclr hover:bg-ytclr hover:text-bgclr hover:border-ytclr border px-4 py-1">
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
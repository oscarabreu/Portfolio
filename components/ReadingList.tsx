import React from 'react';
import ReadingItem from './ReadingItem';

const ReadingList: React.FC = () => {
  return (
    <div className="py-4 px-2 flex flex-col text-center justify-between md:w-1/2 md:border-l space-y-4">
      <h4 className='text-xl'>Reading List:</h4>
      <ReadingItem
        imageUrl="/textbook/ddia.jpg"
        description="A must-read for learning modern distributed application design principles. A good supplement to AWS Solutions Architecture certifications."
        notesLink="https://amazing-sunstone-9aa.notion.site/Designing-Data-Intensive-Applications-af710b91cf964b13b9e891bfa308cb06?pvs=4"
        bookName="Designing Data Intensive Applications"
        bookAuthor='Martin Kleppman'
      />
      <ReadingItem
        imageUrl="/textbook/go_with_jon.jpg"
        description="After having a lack of Fundamentals in GoLang, I read v1 of this book and was so satisfied that I purchased the second version for Go 1.22. Strongly recommended."
        notesLink="https://amazing-sunstone-9aa.notion.site/Learning-GoLang-Jon-Bodner-45074ecc5ab74371a7a00caccfb4d35a?pvs=4"
        bookName="Learning GoLang (2nd Edition)" 
        bookAuthor="Jon Bodner"
      />
    </div>
  );
};

export default ReadingList;

// Template ReadingList
 
/*
<ReadingItem
        imageUrl="/textbook/ddia.jpg"
        notesLink="https://google.com"
        bookName="Designing Data Intensive Applications by Martin Kleppman"
        category="Distributed Systems"
  />
*/
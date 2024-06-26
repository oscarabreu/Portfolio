import React from 'react';
import ReadingItem from './ReadingItem';

const ReadingList: React.FC = () => {
  return (
    <div className="py-6 px-6 flex flex-col text-center justify-evenly md:w-1/2 md:border-l space-y-6">
      <ReadingItem
        imageUrl="/textbook/ddia.webp"
        description="A must-read for learning best-practices and modern distributed application design principles."
        notesLink="https://amazing-sunstone-9aa.notion.site/Designing-Data-Intensive-Applications-af710b91cf964b13b9e891bfa308cb06?pvs=4"
        bookName="Designing Data Intensive Applications"
        bookAuthor='Martin Kleppman'
      />
      <ReadingItem
        imageUrl="/textbook/go_with_jon.webp"
        description="I read the first version of this book and was so satisfied that I purchased the second version for Go 1.22. Strongly recommended."
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
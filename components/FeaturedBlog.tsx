import React from 'react';

interface BlogProps {
  title: string;
  link: string;
  tags: string[];
}

const FeaturedBlog: React.FC<BlogProps> = ({ title, link, tags }) => {
  return (
    <div className="pb-4">
      <a href={link} className="underline text-txtclr2 hover:text-ytclr">
        {title}
      </a>
      <br />
      <div className="flex flex-row flex-wrap justify-center pt-4">
        {tags.map((tag, idx) => (
          <p key={idx} className=" text-xs border rounded px-3 py-1 mx-1 my-1 bg-bgclr text-txtclr border-txtclr ">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlog;

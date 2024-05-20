import React from 'react';

interface BlogProps {
  title: string;
  link: string;
  tags: string[];
}

const FeaturedBlog: React.FC<BlogProps> = ({ title, link, tags }) => {
  return (
    <div className="pb-4">
      <a href={link} className="underline text-txtclr hover:text-txtclr">
        {title}
      </a>
      <br />
      <div className="flex flex-row flex-wrap justify-center pt-4">
        {tags.map((tag, idx) => (
          <p key={idx} className="text-txtclr border border-txtclr px-2 py-1 mx-1 my-1 text-xs rounded">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlog;
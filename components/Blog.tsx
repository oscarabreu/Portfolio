import React from "react";
import Link from "next/link";

interface BlogProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  date: string;
  slug: string;
}

const Blog: React.FC<BlogProps> = ({ title, category, description, technologies, date, slug }) => {
  return (
    <div className="py-4 space-y-2">
      <Link href={`/blogs/${slug}`} className="block">
        <h2 className="text-2xl font-bold text-txtclr2 hover:underline">{title}</h2>
      </Link>
      <p className="text-sm text-gray-500">{date} - {category}</p>
      <p>{description}</p>
      <div className="flex flex-wrap space-x-3">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-txtclr text-bgclr px-2 py-1 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Blog;
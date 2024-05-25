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
    <div className="py-4">
      <Link href={`/posts/${slug}`} legacyBehavior>
        <a>
          <h2 className="text-2xl font-bold text-primary-500 hover:underline">{title}</h2>
        </a>
      </Link>
      <p className="text-sm text-gray-500">{date} - {category}</p>
      <p className="py-2">{description}</p>
      <div className="flex flex-wrap space-x-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-gray-800 text-gray-200 px-2 py-1 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Blog;
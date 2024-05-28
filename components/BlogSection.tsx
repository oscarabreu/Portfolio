"use client";
import React from "react";
import Nav from "@/components/Nav";
import Blog from "@/components/Blog";
import { blogList } from "@/public/data/blogList";
import Layout from "@/components/Layout";

const BlogSection = () => {
  return (
    <Layout>
      <h1 className="text-4xl py-5 font-bold max-md:text-center text-txtclr2">Blogs</h1>
      <div className="flex flex-col md:flex-row pb-0 justify-between">
        <div className="flex flex-col space-y-2 md:w-2/5">
          <h4 className="text-sm text-gray-500 max-md:text-center">By name</h4>
          <div className="relative pb-4 ">
            <input
              type="text"
              aria-label="Search blogs"
              placeholder="Search blogs"
              className="block w-full rounded-md px-4 py-1 focus:border-primary-500 focus:ring-primary-500 border-gray-900 bg-gray-800 text-gray-200"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="absolute right-3 top-2 h-5 w-5 text-gray-400 dark:text-gray-300"
            >
              <svg
                className="absolute right-3 top-2 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </svg>
          </div>
        </div>
        <div className="flex flex-col md:w-3/5">
        </div>
      </div>
      <hr />
      <div className="flex flex-col justify-evenly">
        {blogList.map((blog, index) => (
          <Blog
            key={index}
            title={blog.title}
            category={blog.category}
            description={blog.description}
            technologies={blog.technologies}
            date={blog.date}
            slug={blog.slug}
          />
        ))}
      </div>
    </Layout>
  );
};

export default BlogSection;
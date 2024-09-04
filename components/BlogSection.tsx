"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import Blog from "./Blog";
import { blogList } from "@/public/data/blogList";

const BlogSection = () => {
  const [blogs] = useState(blogList);

  return (
    <section id="home">
      <div className="flex flex-col max-w-3xl m-auto text-txtclr text-lg">
        <div className="flex justify-center md:justify-start pt-4 pb-7">
          <Nav />
        </div>
        <h1 className="text-4xl py-5 font-bold max-md:text-center text-txtclr2">Blogs</h1>
        <div className="flex flex-col md:flex-row pb-0 justify-between">
          <div className="flex flex-col space-y-2 md:w-2/5">
            <h4 className="text-sm text-gray-500 max-md:text-center">By name</h4>
            <div className="relative pb-4">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col md:w-3/5"></div>
        </div>
        <hr />
        <div className="flex flex-col justify-evenly">
          {blogs.map((blog, index) => (
            <Blog key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
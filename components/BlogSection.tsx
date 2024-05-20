/** @format */

"use client";
import React from "react";
import Nav from "@/components/Nav";
import Blog from "@/components/Blog"
import Link from "next/link";

interface ProfItem {
    label: string;
    page: string;
  }
  
  const PROF_ITEMS: Array<ProfItem> = [
    {
      label: "Deep Learning",
      page: "https://www.dropbox.com/scl/fi/mt22pey65wsmx5h1i6yjt/Oscar-Abreu-Resume.pdf?rlkey=yo30u4gbgnntnioptp8f687l6&dl=0",
    },
    {
      label: "Graphics",
      page: "mailto:oja227@nyu.edu",
    },
    {
        label: "Systems",
        page: "mailto:oja227@nyu.edu",
    },
    {
        label: "All",
        page: "mailto:oja227@nyu.edu",
    },

  ];
  

// animate-fadeIn animation-delay-2 First DIV if you want animation fade-in
const BlogSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col max-w-5xl m-auto text-txtclr text-lg">
        <div className="flex justify-center md:justify-start pt-4 pb-7">
          <Nav></Nav>
        </div>
        <h1 className="text-4xl pb-2 font-bold max-md:text-center">Blogs</h1>
        {/* Add something useful here regarding Projects? */}
        <div className="flex flex-col md:flex-row pb-0 jusstify-between">
            <div className="flex flex-col space-y-2 md:w-2/5">
                <h4 className="text-sm text-gray-500 max-md:text-center">By name</h4>
                <div className="relative pb-4 ">
                    <input type="text" aria-label="Search blogs" placeholder="Search blogs" className="block w-full rounded-md px-4 py-1 focus:border-primary-500 focus:ring-primary-500 border-gray-900 bg-gray-800 text-gray-200"></input>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute right-3 top-2 h-5 w-5 text-gray-400 dark:text-gray-300">
                    <svg className="absolute right-3 top-2 h-5 w-5 text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col space-y-2 pb-4 md:w-3/5">
                <h4 className="text-sm text-gray-500 md:text-end max-md:text-center">By category</h4>
                <div className=" text-base flex flex-row jusify-center md:justify-end">
                    <div className="space-x-2 max-md:w-full flex flex-row flex-wrap max-md:justify-center">
                        {PROF_ITEMS.map((item, idx) => {
                            return (
                            <Link legacyBehavior key={idx} href={item.page}>
                                <a
                                className={`block md:inline-block rounded ${
                                    "bg-txtclr text-gray-800 border-gray-800 hover:bg-ytclr whitespace-nowrap"
                                } hover:text-bgclr border px-3 py-1`}
                                >
                                {item.label}
                                </a>
                            </Link>
                            );
                        })}
                        </div>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className="flex flex-col py-6 justify-evenly">
        <Blog 
            title="Exploring the Unseen Realms of Parallel Processing"
            category="Graphics"
            description="Dive into the intricate world of parallel processing with a blend of graphics, distributed systems, and deep learning. Discover my projects, insights, and experiences in this fascinating field."
            technologies={["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"]}
            date="January 1st, 2024"
            githubLink="https://github.com/project-link"
            projectLink="https://project-link.com"
        />
        <Blog 
            title="Harnessing the Power of GPUs for Advanced Computing"
            category="Graphics"
            description="Join me on my journey through the realms of GPU computing, where I explore graphics, distributed systems, and deep learning. Learn from my projects and experiences, and gain new perspectives."
            technologies={["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"]}
            date="January 1st, 2024"
            githubLink="https://github.com/project-link"
            projectLink="https://project-link.com"
        />
        <Blog 
            title="A Deep Dive into CUDA and Parallel Algorithms"
            category="Graphics"
            description="Uncover the secrets of CUDA and parallel algorithms as I share my journey into graphics, distributed systems, and deep learning. Follow my projects and insights for an engaging experience."
            technologies={["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"]}
            date="January 1st, 2024"
            githubLink="https://github.com/project-link"
            projectLink="https://project-link.com"
        />
        <Blog 
            title="Navigating the Complexities of Modern Graphics Programming"
            category="Graphics"
            description="Explore the complexities of modern graphics programming through my experiences with distributed systems and deep learning. Discover my projects and thoughts on the ever-evolving landscape of technology."
            technologies={["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"]}
            date="January 1st, 2024"
            githubLink="https://github.com/project-link"
            projectLink="https://project-link.com"
        />
    </div>
      </div>
    {/* </div> */}
    </section>
  );
};

export default BlogSection;

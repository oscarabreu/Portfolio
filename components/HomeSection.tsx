import React from "react";
import Nav from "@/components/Nav";
import Profile from "@/components/Profile";
import ReadingList from "@/components/ReadingList";
import FeaturedBlog from "./FeaturedBlog";
import FeaturedProject from "./FeaturedProject";
import {
  AiOutlineGithub,
  AiOutlineApartment,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

interface HomeSectionProps {
  featuredProject: {
    title: string;
    description: string;
    imageUrl: string;
    githubLink: string;
    tags: string[];
  };
}

const skills = [
  "C++", "CUDA", "SDL2", "Go", "Python", "Numpy", "Pandas", "TensorFlow",
  "PyTorch", "Typescript", "Next", "AWS Lambda", "API Gateway", "SNS/SQS",
  "gRPC", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "DynamoDB", "Redis",
  "S3","VPC"
];

const HomeSection: React.FC<HomeSectionProps> = ({ featuredProject }) => {
  return (
    <section id="home">
      <div className="flex flex-col max-w-4xl m-auto text-txtclr text-lg">
        <div className="flex justify-center md:justify-start py-4">
          <Nav />
        </div>
        <div className="flex flex-row max-md:flex-col pb-4">
          <div className="flex flex-col md:w-1/3 justify-center">
            <Profile />
          </div>
          <div className="flex flex-col md:w-2/3 max-md:space-y-4 text-base justify-around">
            <h2 className="text-3xl font-bold flex max-md:justify-center">
              Hey, I&apos;m&nbsp;<span className="text-txtclr2">Oscar</span>
            </h2>
            <p className="max-md:justify-center text-base">
              Welcome to my page! My passion for computer science all started with a small hobby in
              electronics with arduinos which blossomed into a deep-seated passion
              for computer science - leading me to the <span className="text-txtclr2"> Master of
              Science in Computer Engineering at New York University!</span> Since starting this program, 
              I&apos;ve independently explored myriad fields in Software and
              Computer Engineering though projects and coursework, and narrowed
              my passions toward <span className="text-txtclr2">
              Distributed Systems, and Machine Learning! </span> More
              specifically, I am interested in documenting and implementing work
              pertaining to: <span className="text-ytclr">
              Image/Audio Processing, Databases, Cloud, and ML Infrastructure.</span> 
            </p>
            <p> At the present moment, <a className="underline" href="https://github.com/oscarabreu/Portfolio">this page is under construction</a>. Soon, it will track my interests with a blog section for technical tutorials and a fun section for art and music! Please check the featured blogs, reading list, or projects for a preview.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row py-4">
          <div className="w-1/8 flex justify-center items-center text-txtclr md:px-2 max-md:pb-4">
            Skills:
          </div>
          <div className="w-7/8 flex flex-wrap flex-row justify-center text-xs">
            {skills.map((skill, idx) => (
              <p key={idx} className="border rounded px-3 py-1 mx-1 my-1 bg-bgclr text-txtclr border-txtclr">
                {skill}
              </p>
            ))}
          </div>
        </div>
        <hr />
        {/* Div for the entire Featured Project container */}
        <FeaturedProject
          title={featuredProject.title}
          description={featuredProject.description}
          imageUrl={featuredProject.imageUrl}
          githubLink={featuredProject.githubLink}
          tags={featuredProject.tags}
        />
        <hr />
        <div className="flex flex-col md:flex-row text-sm">
          <div className="flex flex-col text-center justify-between md:w-1/2 py-4 px-2">
            <h4 className="pb-4 text-xl flex text-center justify-center"> Recent Blogs:</h4>
              <FeaturedBlog
                title="Machine Learning - Understanding ML and Data-Driven Soutions"
                link="https://www.notion.so/Machine-Learning-Understanding-ML-and-Data-Driven-Soutions-97ae336cecdc472fa439acb51ce31322"
                tags={["Machine Learning", "Python", "Pandas"]}
              />
              <FeaturedBlog
                title="Machine Learning - Linear Regression in Depth"
                link="https://amazing-sunstone-9aa.notion.site/Machine-Learning-Linear-Regression-in-Depth-4c82bea6f259438582dcea81136c3579?pvs=4"
                tags={["Machine Learning", "Python"]}
              />
              <FeaturedBlog
                title="Machine Learning - Optimizations and Gradient Descent"
                link="https://amazing-sunstone-9aa.notion.site/Machine-Learning-Optimizations-and-Gradient-Descent-f77e5e52496748488deb170345e5cbaa?pvs=4"
                tags={["Graphics", "C++"]}
              />
              <FeaturedBlog
                title="High Performance Machine Learning - Notes"
                link="https://amazing-sunstone-9aa.notion.site/NYU-High-Performance-Machine-Learning-c62eea8affcf49f68daffad6a073ae6a?pvs=4"
                tags={["Machine Learning", "C++", "Pytorch"]}
              />
            </div>
          <hr className="md:hidden"></hr>
          <ReadingList />
        </div>
        <hr></hr>
      </div>
    </section>
  );
};

export default HomeSection;
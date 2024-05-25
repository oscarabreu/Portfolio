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

interface HeroSectionProps {
  featuredProject: {
    title: string;
    description: string;
    imageUrl: string;
    githubLink: string;
    tags: string[];
  };
}

const skills = [
  "C++", "CUDA", "OpenGL", "SDL2", "Go", "Python", "Numpy/Pandas", "TensorFlow",
  "PyTorch", "Typescript", "Next", "AWS Lambda", "API Gateway", "SNS/SQS",
  "gRPC", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "DynamoDB", "Redis",
  "S3","VPC"
];

const HeroSection: React.FC<HeroSectionProps> = ({ featuredProject }) => {
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
          <div className="flex flex-col md:w-2/3 space-y-4 text-base">
            <h2 className="text-3xl font-bold flex max-md:justify-center">
              Hey, I am&nbsp;<span className="text-txtclr">Oscar</span>
            </h2>
            <p className="max-md:justify-center text-base">
              Welcome to my page! I first embarked on my academic path with a BS
              in Biochemistry at Binghamton University, only to find my passion
              within Software Engineering. It all started with a hobby in
              Arduino electronics, which blossomed into a deep-seated passion
              for computer science. This led me to the <span className="text-ytclr">New York University
              Bridge to Tandon</span> program, where I gained proficiency in the
              fundamentals and successfully earned my place in the <span className="text-txtclr">Master of
              Science in Computer Engineering program.</span>
            </p>
            <p className="max-md:justify-center text-base">
              I&apos;ve independently explored myriad fields in Software and
              Computer Engineering though projects and coursework, and narrowed
              my passions toward <span className="text-ytclr">
                Distributed Systems, Deep Learning,
              </span> and <span className="text-ytclr">Graphics Programming.</span> More
              specifically, I am interested in documenting and implementing work
              pertaining to: <span className="text-txtclr">
              Computer Vision, Information Retrieval, Databases, </span> and <span className="text-txtclr"> 
              Physically Based Renderers.</span> 
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
              <p key={idx} className="bg-bgclr text-txtclr border border-txtclr px-3 py-1 mx-1 my-1 rounded">
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
                tags={["Machine Learn", "Python", "Pandas"]}
              />
              <FeaturedBlog
                title="Machine Learning - Linear Regression in Depth"
                link="https://amazing-sunstone-9aa.notion.site/Machine-Learning-Linear-Regression-in-Depth-4c82bea6f259438582dcea81136c3579?pvs=4"
                tags={["Depp Learning", "Python"]}
              />
              <FeaturedBlog
                title="Machine Learning - Optimizations and Gradient Descent"
                link="https://amazing-sunstone-9aa.notion.site/Machine-Learning-Optimizations-and-Gradient-Descent-f77e5e52496748488deb170345e5cbaa?pvs=4"
                tags={["Graphics", "C++"]}
              />
            </div>
          <hr className="md:hidden"></hr>
          <ReadingList />
        </div>
        <hr className="md:hidden"></hr>
      </div>
    </section>
  );
};

export default HeroSection;
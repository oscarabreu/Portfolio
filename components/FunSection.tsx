/** @format */

"use client";
import React from "react";
import Nav from "@/components/Nav";
import Blog from "@/components/Blog"
import Link from "next/link";


// animate-fadeIn animation-delay-2 First DIV if you want animation fade-in
const FunSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col max-w-4xl m-auto text-txtclr text-lg">
        <div className="flex justify-center md:justify-start py-4">
          <Nav></Nav>
        </div>
        <h3 className="py-5 text-txtcl text-center text-xl  "> Still in progress. Please check again later. </h3>
    </div>
    </section>
  )
}

export default FunSection;
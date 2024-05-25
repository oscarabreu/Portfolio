/** @format */

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Resume",
    page: "https://oscarabreuresume.tiiny.site/",
  },
  {
    label: "Contact",
    page: "mailto:oja227@nyu.edu",
  },
];

const Profile = () => {
  return (
    <section className="flex flex-col justify-center items-center max-md:border-txtclr py-5">
      <div className="flex justify-center">
        <div style={{ width: "100px", height: "100px" }}>
          <Image
            src="/headshot.webp"
            alt="Oscar's Headshot"
            width={100}
            height={100}
            priority
            style={{
              width: "100px",
              height: "100px",
              objectPosition: "top center",
            }}
            className="object-cover rounded-full w-auto"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 py-6 text-sm text-center text-txtclr">
        <h1 className="text-txtclr">Oscar Abreu</h1>
        <h3>
          MSCE at NYU <br></br> May 2025
        </h3>
        <div className="flex flex-row items-center justify-center space-x-3 text-txtclr">
          <a
            href="https://github.com/oscarabreu"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 hover:text-ytclr transition-transform cursor-pointer text-txtclr dext--txtclr"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ojabreu/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 hover:text-ytclr transition-transform cursor-pointer text-txtclr dext--txtclr"
              size={30}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCI3LSzJUvjdIm5gjrhzw7UA"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 hover:text-ytclr transition-transform cursor-pointer text-txtclr dext--txtclr"
              size={30}
            />
          </a>
        </div>
        <div className="items-center justify-center flex space-x-3">
          {NAV_ITEMS.map((item, idx) => {
            const isLastItem = idx === NAV_ITEMS.length - 1;
            return (
              <Link legacyBehavior key={idx} href={item.page}>
                <a
                  className={`block md:inline-block rounded ${
                    isLastItem
                      ? "bg-txtclr text-gray-800 border-gray-800"
                      : "text-txtclr bg-bgclr border-txtclr "
                  }  border px-4 py-1`}
                >
                  {item.label}
                  {isLastItem}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Profile;

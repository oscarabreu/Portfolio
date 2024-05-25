/** @format */

import { useRouter } from "next/router";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <li className="border-transparent hover:text-txtclr2 px-2 rounded group">
    <Link href={href} passHref>
      <span className="cursor-pointer focus:outline-none py-0.5 border-b-2 border-transparent transition-all align-middle px-2">
        {children}
      </span>
    </Link>
  </li>
);

const Nav = () => {
  return (
    <nav className="flex text-xl">
      <ul className="flex flex-row items-center text-txtclr text-base">
        <NavLink href="/">home</NavLink>
        <NavLink href="/projects">projects</NavLink>
        <NavLink href="/blog">blog</NavLink>
      </ul>
    </nav>
  );
};
export default Nav;

/*
            <button className="py-1 border-b-2 border-transparent">
*/

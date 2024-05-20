/** @format */

import { useRouter } from "next/router";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <li className="border-transparent hover:border-ytclr hover:text-ytclr px-2 rounded group">
    <Link href={href} passHref>
      <span className="cursor-pointer focus:outline-none py-0.5 border-b-2 border-transparent transition-all hover:text-txtlcr2 align-middle px-2">
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
        <li className="px-2 rounded group text-gray-700">
          <h4 className="py-0.5 border-transparent transition-all align-middle px-2">blog</h4>
        </li>
        <li className="px-2 rounded group text-gray-700">
          <h4 className="py-0.5 border-transparent transition-all align-middle px-2">fun</h4>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;

/*
            <button className="py-1 border-b-2 border-transparent">
*/

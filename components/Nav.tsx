/** @format */
"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname(); // Use usePathname from next/navigation

  // Determine if the current route matches the NavLink href
  const isActive = pathname === href;

  return (
    <li className="px-4 pb-2 group">
      <Link href={href} passHref>
        <span
          className={`relative cursor-pointer py-0.5 transition-all ${
            isActive ? "text-txtclr2" : "hover:text-ytclr"
          }`}
        >
          {children}
        </span>
      </Link>
    </li>
  );
};

const Nav = () => {
  return (
    <nav className="flex text-xl">
      <ul className="flex flex-row items-center text-base">
        <NavLink href="/">home</NavLink>
        <NavLink href="/projects">projects</NavLink>
        <NavLink href="/blog">blog</NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
"use client";

import Link from "next/link";
import { useNav } from "./NavContext";

const NavLink = ({ href, children }) => {
  const { pathname } = useNav();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
        isActive
          ? "bg-[#16240b] text-[#b8f500]"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
import Image from "next/image";
import Link from "next/link";
import { NavProvider } from "./NavContext";
import NavLink from "./NavLink";
import PlanCount from "@/app/context/PlanCount";
import SaveCount from "@/app/context/SaveCount";

const Navbar = () => {
  return (
    <nav className="min-h-20 border-b border-[#202126] bg-[#0d0e10]">
      <div className="mx-auto flex min-h-20 max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6">

        {/* Logo */}
        <Link href="/" className="  flex shrink-0 items-center gap-2 sm:gap-3">
          <Image
            src="/logo.png"
            width={25}
            height={50}
            alt="FITLOG Logo"
            className="h-auto w-6 sm:w-8"
          />

          <span className="text-lg font-bold tracking-wide text-white sm:text-xl">
            FITLOG
          </span>
        </Link>

        {/* Main Navigation */}
        <NavProvider>
          <div className="flex items-center gap-1 sm:gap-2">
            <NavLink href="/">Workouts</NavLink>
            <NavLink href="/my-plan">My Plan</NavLink>
          </div>
        </NavProvider>

        {/* Plan & Saved */}
        <div className="flex flex-col items-end gap-1 text-sm sm:flex-row sm:items-center sm:gap-5 md:gap-7">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-gray-300 transition hover:text-white sm:gap-2"
          >
            <span>Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b8f500] px-1 text-xs font-bold text-black">
              <PlanCount />
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-gray-300 transition hover:text-white sm:gap-2"
          >
            <span>Saved</span>

            <span>
              <SaveCount />
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;


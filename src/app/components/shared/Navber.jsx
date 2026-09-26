
import Image from 'next/image';
import Link from "next/link";
import { NavProvider } from "./NavContext";
import NavLink from "./NavLink";
import { usePlan } from '@/app/context/PlanContext';
import PlanCount from '@/app/context/PlanCount';
import SaveCount from '@/app/context/SaveCount';

const Navbar = () => {
  return (
    <nav className="h-20 border-b border-[#202126] bg-[#0d0e10]">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6">
        
        <Link href="/" className="flex items-center gap-3">
          <div className="text-2xl text-[#b8f500]">
            <Image
              src="/logo.png"
              width={25}
              height={50}
              alt="Logo"
              className="w-8 h-auto"
            />
          </div>
          <span className="text-xl font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        <NavProvider>
          <div className="flex items-center gap-2">
            <NavLink href="/">Workouts</NavLink>
            <NavLink href="/my-plan">My Plan</NavLink>
          </div>
        </NavProvider>

        <div className="flex items-center gap-7 text-sm">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-gray-300 transition hover:text-white"
          >
            <span>Plan</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b8f500] px-1 text-xs font-bold text-black">
              <PlanCount/>
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-gray-300 transition hover:text-white"
          >
            <span>Saved</span>
            
              <SaveCount/>
            
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
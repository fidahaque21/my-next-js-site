import Image from 'next/image';
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-6 px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <Link href="/" className="flex items-center gap-3">
          <div className="text-2xl text-[#b8f500]">
            <Image
              src="/logo.png"
              width={25}
              height={50}
              alt="Logo"
            />
          </div>
          <span className="text-xl font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        <p className="text-sm text-gray-400 text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}
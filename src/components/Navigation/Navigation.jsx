"use client";
import { usePathname } from "next/navigation.js";
import Link from "next/link.js";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <>
      <nav className="bg-slate-200 py-5 shadow-lg mb-5 ">
        <div className="container items-center justify-around flex">
          <span>LOGO</span>
          
          <ul className="flex gap-4">
            <li>
              <Link
                href={"/"}
                className={`link ${
                  pathname == "/" ? "font-semibold" : "font-normal"
                }`}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className={`link ${
                  pathname == "/about" ? "font-semibold" : "font-normal"
                }`}
              >
                à propos
              </Link>
            </li>
          </ul>
          <span></span>
        </div>
      </nav>
    </>
  );
}

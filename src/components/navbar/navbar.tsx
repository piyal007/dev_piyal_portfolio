"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Get current route

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const linkStyles = "text-gray-400 hover:text-teal-500 hover:scale-105 transition-all duration-300 cursor-pointer";
  const activeLinkStyles = "text-teal-500 font-semibold border-b-2 border-teal-500";

  return (
    <>
      <nav className="bg-white">
        <div className="nav-container max-w-7xl mx-auto py-2 flex justify-between items-center">
          {/* left nav */}
          <div className="left-nav">
            <div>
              <Link href="/" className="text-2xl font-bold uppercase p-2 text-gray-400">
                &lt; Piyal Islam /&gt;
              </Link>
            </div>
          </div>
          {/* middle nav */}
          <div className="middle-nav flex gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${linkStyles} ${
                    isActive ? activeLinkStyles : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          {/* right nav */}
          <div className="right-nav">
            <button className="bg-gradient-to-b from-teal-500 to-teal-700 hover:from-teal-700 hover:to-teal-500 text-white font-semibold px-4 py-2 rounded-md">
              <Link href="/resume">Resume</Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

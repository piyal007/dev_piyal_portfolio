"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav className="bg-white shadow-sm">
        <div className="nav-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo - Mobile First Design */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                &lt; Piyal Islam /&gt;
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${linkStyles} ${isActive ? activeLinkStyles : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Resume Button - Hidden on mobile */}
            <div className="hidden md:block">
              <button className="bg-gradient-to-b from-teal-500 to-teal-700 hover:from-teal-700 hover:to-teal-500 text-white font-semibold px-3 py-2 md:px-4 md:py-2 rounded-md text-sm md:text-base transition-all duration-300">
                <Link href="/resume">Resume</Link>
              </button>
            </div>

            {/* Mobile Hamburger Button - Visible only on mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-teal-500 focus:outline-none focus:text-teal-500 transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 pt-4 pb-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-base px-3 py-2 rounded-md transition-all duration-300 ${
                        isActive 
                          ? "text-teal-500 bg-teal-50 font-semibold" 
                          : "text-gray-400 hover:text-teal-500 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                
                {/* Mobile Resume Button */}
                <div className="pt-3 border-t border-gray-200">
                  <Link
                    href="/resume"
                    className="bg-gradient-to-b from-teal-500 to-teal-700 hover:from-teal-700 hover:to-teal-500 text-white font-semibold px-4 py-2 rounded-md text-center block transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import useRouter and usePathname
import Image from "next/image";
import logo from "../../asset/img/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Get current route

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigate = (url: string) => {
    router.push(url);
    setIsMenuOpen(false); // Close menu on navigation
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand */}
        <Image
          src={logo}
          width={100} // Set the width of the image
          height={100} // Set the height of the image
          alt={""}
        />
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <div
              key={item.path}
              className={`cursor-pointer ${
                pathname === item.path ? "text-yellow-500" : "text-white"
              } hover:text-yellow-500 transition`}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-transparent backdrop-blur-md">
          {navItems.map((item) => (
            <div
              key={item.path}
              className={`px-4 py-2 text-center cursor-pointer ${
                pathname === item.path ? "text-yellow-500" : "text-white"
              } hover:text-yellow-500 transition`}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

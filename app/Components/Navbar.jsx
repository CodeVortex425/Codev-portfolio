'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150;

      let current = 'home';

      for (const link of navLinks) {
        if (link.href !== '#') {
          const section = document.querySelector(link.href);
          if (section && scrollY >= section.offsetTop) {
            current = link.name.toLowerCase();
          }
        } else if (scrollY < document.getElementById('about')?.offsetTop) {
          current = 'home';
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <Link href="/" className="font-semibold text-xl">
          Samwel's Portfolio
        </Link>

        <div className="hidden md:flex space-x-6 text-base font-medium">
          {navLinks.map(({ name, href }) => {
            const isActive = activeSection === name.toLowerCase();
            return (
              <Link
                key={name}
                href={href}
                className={`
                  relative
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                  after:bg-black after:transition-all after:duration-300
                  ${isActive ? 'after:w-full font-semibold text-black' : 'after:w-0 text-gray-700'}
                  hover:after:w-full
                `}
              >
                {name}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 shadow-md backdrop-blur-md px-6 pb-5">
          <div className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map(({ name, href }) => {
              const isActive = activeSection === name.toLowerCase();
              return (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    relative
                    after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                    after:bg-black after:transition-all after:duration-300
                    ${isActive ? 'after:w-full font-semibold text-black' : 'after:w-0 text-gray-700'}
                    hover:after:w-full
                  `}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

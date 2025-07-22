import React from 'react'
import { ArrowUp } from 'lucide-react';
import { smoothScrollTo } from '../utils/scroll';

export default function Footer() {
  return (
    <footer className="py-6 mt-18 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-black -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0)_60%)] -z-10"></div>
      
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="font-display font-bold text-xl text-gray-200">Portfolio.</h2>
            <p className="mt-2 text-gray-200/80">
              &copy; {new Date().getFullYear()} Samwel Amani. All rights reserved.
            </p>
          </div>
          
          <button 
            className="mt-6 md:mt-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200/10 hover:bg-gray-200/20 transition-colors"
            onClick={() => smoothScrollTo('home')}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="text-text-gray-200" />
          </button>
        </div>
      </div>
    </footer>
  )
}

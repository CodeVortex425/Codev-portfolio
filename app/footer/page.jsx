'use client'

import React from 'react'
import { ArrowUp } from 'lucide-react';
import { smoothScrollTo } from '../utils/scroll';

export default function Footer() {
  return (
    <footer className="py-6 mt-18 px-6 relative">
      <div className="absolute inset-0 -z-10"></div>
      <div className="absolute inset-0 -z-10"></div>
      
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="font-display font-bold text-xl text-gray-700">Samwel's Portfolio.</h2>
            <p className="mt-2 text-gray-700/80">
              &copy; {new Date().getFullYear()} Samwel Amani. All rights reserved.
            </p>
          </div>
          
          <button 
            className="mt-6 md:mt-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-700 hover:text-gray-300 transition-colors animate-bounce"
            onClick={() => smoothScrollTo('home')}
            aria-label="Scroll to top"
          >
            <ArrowUp size={25} className="text-text-gray-700" />
          </button>
        </div>
      </div>
    </footer>
  )
}

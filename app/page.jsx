'use client'

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { smoothScrollTo } from './utils/scroll';
import About from './about/page';
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: 'easeOut', delay : 0.3 }}
      id="home" 
      className="relative pt-48  min-h-screen flex flex-col items-center justify-center px-6"
    >
        <div className='text-center mb-22  max-w-4xl mx-auto relative z-10'>
         <span className='inline-flex items-center px-2.5 py-1 text-xs font-medium bg-gray-200 rounded-full animate-fade-in animation-delay-100'>
          Passionate Developer
         </span>
        
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mt-6 animate-fade-in animation-delay-200'>
           <span className='block'>Hello, I'm Samwel Amani</span>
           <span className='block mt-2 bg-gradient-to-r from-black to-black/50 bg-clip-text text-transparent'>
             <Typewriter
                options={{
                  strings: [
                    "Passionate Web Developer",
                    "React & Next.js Enthusiast",
                    "Frontend Innovator",
                    "UI/UX Design Lover",
                    "Problem Solver & Creator",
                    "Building Digital Experiences",
                    "Coding with Clean & Efficient Code",
                    "Lifelong Learner in Tech"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 100,
                }}
              />
           </span>
         </h1>
        
        <p className='mt-6 text-lg text-gray-700 max-w-xl mx-auto text-center animate-fade-in animation-delay-300'>
           I create exceptional digital experiences that combine beautiful design with clean, efficient code. Let's build something amazing together.
         </p>
        
        <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-400'>
          <button
            onClick={() => smoothScrollTo('projects')}
            className='bg-black text-white px-6 py-3 rounded-full inline-flex items-center justify-center text-sm font-medium transition-all hover:scale-105 active:scale-95'
          >
            Explore My Work
          </button>

          <button
           onClick={() => smoothScrollTo('contact')}
          className='inline-flex items-center justify-center px-6 py-3 text-sm rounded-full bg-gray-200 hover:scale-105 active:scale-95 font-medium transition-all'>
            Get in Touch
          </button>
         </div>
         <button 
        className="absolute mt-18 flex items-center justify-center left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gray-200 text-gray-900 animate-fade-in animation-delay-500 animate-bounce hover:bg-gray-900 hover:text-gray-200 transition-colors"
        onClick={() => smoothScrollTo('about')}
        aria-label="Scroll to about section"
      >
        <ChevronDown size={20} />
      </button>
      </div>
      
      <About />
    </motion.section>
  );
};

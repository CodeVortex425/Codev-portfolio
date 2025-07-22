'use client'

import React from 'react'
import { GraduationCap, Briefcase, Award, Code } from 'lucide-react'
import Project from '../projects/page'

const AboutItem = ({icon, title, description, delay = ''}) => {
  return (
    <div className={`flex items-start gap-4 animate-fade-in ${delay}`}>
      <div className='flex-shrink-0 w-12 h-12 flex-center rounded-full bg-gray-100 text-gray-900 flex text-center items-center justify-center'>
        {icon}
      </div>
      <div>
        <h3 className='font-display font-semibold text-lg'>{title}</h3>
        <p className='mt-2 text-gray/80'>{description}</p>
      </div>
    </div>
  )
}


export default function About() {
  return (
    <section id='about'>

    <div className='max-w-4xl mx-auto relative z-10 pt-38'>
      <div className='text-center mb-16'>
        <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-900'>About Me</span>
        <h2
        className='text-3xl md:text-4xl font-display font-bold tracking-tight mt-4'>My Journey</h2>
        <div className='w-20 h-1 bg-black/20 mx-auto mt-6'></div>
      </div>

      <div className='grid md:grid-cols-2 gap-12'>
        <div>
          <p className='text-lg leading-relaxed ml-5'>
            I'm a passionate web developer and designer with 1+ year of experience creating beautiful, functional digital experiences. My approach combines technical expertise with creative problem-solving.
          </p>
          <p className='text-lg leading-relaxed mt-4 ml-5'>
            Currently working on exciting projects that push the boundaries of web technology while maintaining a focus on user experience and accessibility.
          </p>

          <div className='grid grid-cols-2 gap-4 mt-8'>
            <div className='bg-gray-200 rounded-lg p-4'>
              <h3 className='font-medium text-sm text-black/70'>Frontend</h3>
              <p className='mt-1 font-semibold font-display'>React, Next, Javascript</p>
            </div>
            <div className='bg-gray-200 rounded-lg p-4'>
              <h3 className='font-medium text-sm text-black/70'>Backend</h3>
              <p className='mt-1 font-semibold font-display'>Node.js, Python, mySQL</p>
            </div>
            <div className='bg-gray-200 rounded-lg p-4'>
              <h3 className='font-medium text-sm text-black/70'>Design</h3>
              <p className='mt-1 font-semibold font-display'>Figma, Photoshop</p>
            </div>
            <div className='bg-gray-200 rounded-lg p-4'>
              <h3 className='font-medium text-sm text-black/70'>Tools</h3>
              <p className='mt-1 font-semibold font-display'>Git, AWS</p>
            </div>
          </div>
        </div>

        <div className='space-y-8'>
          <AboutItem 
          icon={<Briefcase size={20}/>}
          title="Work Experience"
          description="One year of experience in web development, working with various technologies to build responsive and user-friendly applications."
          delay="animate-delay-100" 
          />
          <AboutItem 
          icon={<GraduationCap size={20}/>}
          title="Education"
          description="Diploma in Computer Science from Arusha Technical College, where I gained a solid foundation in programming and software development."
          delay="animate-delay-200"
          />
          <AboutItem
          icon={<Award size={20}/>}
          title="Achievements"
          description="Recognized for excellence in web development projects, including awards for innovative design and functionality."
          delay="animate-delay-300"
          />
          <AboutItem
          icon={<Code size={20}/>}
          title="Current Projects"
          description="Currently working on several projects that focus on enhancing user experience and implementing modern web technologies."
          delay="animate-delay-400"
           />
        </div>
      </div>
    </div>
    <Project/>
    </section>
  )
}

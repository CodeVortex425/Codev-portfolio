'use client'

import React, { useState } from 'react'
import { useIntersectionObserver } from '../utils/scroll';
import { Award, Download, FileText, Languages } from 'lucide-react';
import Contact from '../contact/page';

export default function Resume() {

  const experience =[
    {
    position: 'Frontend Developer (Self-Taught)',
    company: 'Personal Projects',
    period: '2024 - Present',
    description: 'Building responsive web applications using HTML, CSS, JavaScript, and React. Practicing version control with Git and collaborating on small open-source projects to enhance skills.',
    },
    {
      position: 'Freelance Web Developer (Part-Time)',
      company: 'Independent',
      period: '2024',
      description: 'Completed small projects for local clients including portfolio websites and landing pages. Focused on clean design, accessibility, and mobile-first responsiveness.',
    },
  ];

  const education = [
    {
    certificate: 'Full-Stack Web Development',
    institution: 'Online Platform',
    period: '2024-2025',
    },
    {
      certificate: 'Diploma in Computer Science',
      institution: 'Arusha Technical College',
      period: '2024 - Present',
    },
  ];

  const skills = [
    {name: 'HTML/CSS', level: 98},
    {name: 'JavaScript', level: 90},
    {name: 'React', level: 85},
    {name: 'Next.js', level: 80},
    {name: 'Node.js', level: 75},
  ];

  const [isVisible, ref] = useIntersectionObserver();

  return (
    <section
    id='resume'
    >
      <div className='max-w-4xl mx-auto pt-38'>
        <div className='text-center mb-16'>
          <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-900'>Resume</span>
          <h2 className='text-3xl md:text-4xl font-display font-bold tracking-tight mt-4'>My Experience</h2>
          <div className='w-20 h-1 bg-black/20 mx-auto mt-6'></div>
        </div>

        <div className='flex justify-center mb-12'>
          <a
          href="/resume.pdf"
          target="_blank"
          download= "Samwel_Amani_Resume.pdf"
          className='inline-flex items-center justify-center rounded-full bg-black text-gray-100 px-6 py-3 text-sm font-medium transition-all hover:scale-105 active:scale-95'
          >
            <Download className='mr-2' size={18} />
            Download Resume
          </a>
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <div className='flex items-center mb-6 gap-3'>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700">
                <FileText size={20} />
              </div>
              <h3 className='text-2xl md:text-3xl font-display font-semibold'>Experience</h3>
            </div>

            <div className='space-y-8'>
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-gray-200 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-gray-200"></div>
                  <h4 className='font-display font-semibold text-lg'>{exp.position}</h4>
                  <div className='flex items-center justify-between mt-1'>
                    <p className='text-black/70'>{exp.company}</p>
                    <p className='text-sm text-black/60 font-medium'>{exp.period}</p>
                  </div>
                  <p className='mt-3 text-black/80'>{exp.description}</p>
                </div>
              ))}
            </div>

            <div className='flex items-center mt-12 mb-6 gap-6'>
              <div className='flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-700 rounded-full'>
                <Award size={20} />
              </div>
              <h3 className='text-2xl md:text-3xl font-display font-semibold'>Education</h3>
            </div>
            
            <div className='space-y-6'>
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-gray-200 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className='absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-gray-200'></div>
                  <h4 className='font-display font-semibold text-lg'>{edu.certificate}</h4>
                  <div className='flex items-center justify-between mt-1'>
                    <p className='text-black/70'>{edu.institution}</p>
                    <p className='text-sm text-black/60 font-medim'>{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className='flex items-center mb-6 gap-6'>
            <div className='flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-700 rounded-full'>
              <Languages size={20} />
            </div>
            <h3 className='text-2xl md:text-3xl font-display font-semibold'>Skills</h3>
          </div>

          <div className='space-y-6' ref={ref}>
            {skills.map((skill, index) => (
              <div key={index} className=" animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className='flex justify-between items-center mb-2'>
                  <h4 className='font-medium'>{skill.name}</h4>
                  <span className='text-sm text-black/60'>{skill.level}%</span>
                </div>
                <div className='w-full overflow-hidden h-2 rounded-full bg-gray-50'>
                  <div
                    className='h-full bg-black transition-all duration-1000 ease-out rounded-full'
                    style={{width: `${isVisible ? skill.level: 0}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-3">
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6">Certifications</h3>

            <div className="bg-gray-50 rounded-lg p-5 animate-fade-in">
              <h4 className="font-display font-semibold">Responsive Web Design Certification</h4>
              <p className="text-sm text-gray-600 mt-1">Super Simple Dev, 2024</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5 animate-fade-in animation-delay-100">
              <h4 className="font-display font-semibold">JavaScript Algorithms & Data Structures</h4>
              <p className="text-sm text-gray-600 mt-1">Super Simple Dev, 2024</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5 animate-fade-in animation-delay-200">
              <h4 className="font-display font-semibold">Frontend Development with React</h4>
              <p className="text-sm text-gray-600 mt-1">Bro Code, 2024</p>
            </div>
          </div>

          </div>
        </div>
      </div>
      <Contact />
    </section>
  )
}

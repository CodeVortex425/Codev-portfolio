'use client'

import React from 'react'
import { useState } from 'react'
import { useIntersectionObserver } from '../utils/scroll.jsx'
import { Github, ExternalLink, X } from 'lucide-react';
import Resume from '../resume/page.jsx';


export default function Page() {

    const [isVisible, ref] = useIntersectionObserver();
    const [selectedProject, setSelectedProject] = useState(null);

  
  const projects = [
    {
      id: 'project1',
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      longDescription: 'A comprehensive e-commerce solution featuring product listings, shopping cart functionality, user authentication, payment processing with Stripe, and order management. The platform includes an admin dashboard for inventory management and sales analytics.'
    },
    {
      id: 'project2',
      title: 'Task Management App',
      description: 'A productivity app for managing daily tasks',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      longDescription: 'A feature-rich task management application allowing users to create, organize, and track tasks with customizable categories and priorities. The app includes reminder notifications, progress tracking, and data visualization for productivity insights.'
    },
    {
      id: 'project3',
      title: 'Weather Dashboard',
      description: 'Real-time weather information with React',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS Modules'],
      imageUrl: 'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      longDescription: 'An interactive weather dashboard providing real-time weather data from multiple locations. Features include 7-day forecasts, historical weather data visualization, customizable alerts for weather conditions, and geolocation for automatic local weather updates.'
    },
    {
      id: 'project4',
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with modern web technologies',
      technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      longDescription: 'A modern portfolio website showcasing design and development skills. Features include smooth animations, responsive design, dynamic project filtering, contact form with validation, and a custom blog system integrated with a headless CMS.'
    }
  ]

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
    };

    const closeProjectDetails = () => {
      setSelectedProject(null);
      document.body.style.overflow = 'auto';
    }
  
  return (
    <section
    id='projects'
    >
      <div className="absolute inset-0 bg-secondary/30 -z-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6bTAtMTJjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6bTAgMjRjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6bTAgMj0yYzAgMyAzIDYgNiA2czYtMyA2LTYtMy02LTYtNi02IDMtNiA2eiI+PC9wYXRoPjwvc3ZnPg==')] bg-repeat opacity-10 -z-10"></div>

      <div className=' max-w-4xl mx-auto relative z-10 pt-38'>
        <div className='text-center mb-16'>
          <span className='bg-white text-gray-900 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium;'>My Work</span>
          <h2 className='text-3xl md:text-4xl font-display font-bold tracking-tight mt-4'>Featured Projects</h2>
          <div className='w-20 h-1 bg-black/20 mx-auto mt-6'></div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div
            key={project.id}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className='overflow-hidden h-56 relative'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 duration-300 transition-opacity flex items-end p-6'>
                  <div>
                    <h2 className='text-white font-display font-semibold text-xl'>{project.title}</h2>
                    <p className='text-white/90 mt-2'>{project.description}</p>
                  </div>
                </div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
              </div>

              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='bg-gray-100 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex justify-between items-center'>
                  <button
                    className="text-sm font-medium text-black/80 hover:text-black transition-colors"
                    onClick={() => openProjectDetails(project)}
                  >
                    View Details
                  </button>

                  <div className='flex items-center gap-4'>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='text-black/70 hover:text-black transition-colors'
                      aria-label='Github Repository'
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-black/70 hover:text-black transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-56 sm:h-72">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <button 
                className="absolute flex items-center justify-center top-4 right-4 w-8 h-8 flex-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={closeProjectDetails}
                aria-label="Close details"
              >
                <X className='' size={16} />
              </button>
            </div>
            
            <div className="p-6 sm:p-8">
              <h3 className="font-display font-bold text-2xl">{selectedProject.title}</h3>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedProject.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="mt-6 text-black/80 leading-relaxed">
                {selectedProject.longDescription}
              </p>
              
              <div className="mt-8 flex gap-4">
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-input bg-gray-200 px-6 py-3 text-sm font-medium transition-all hover:bg-accent hover:text-accent-white hover:scale-105 active:scale-95"
                >
                  <Github className="mr-2" size={16} />
                  View Code
                </a>
                <a 
                  href={selectedProject.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium transition-all hover:scale-105 active:scale-95"
                >
                  <ExternalLink className="mr-2" size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <Resume />
    </section>
  )
}

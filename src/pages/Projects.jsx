import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const projectsContainer = useRef(null)
  const projectCards = useRef([])
  const headerRef = useRef(null)
  const ctaRef = useRef(null)

  const myProjects = [
    {
      id: 1,
      title: 'OpenATS+',
      description:
        'An AI-ready Applicant Tracking System that helps developers optimize resumes for job applications. Upload resumes, track applications, and analyze resume fit with job descriptions through a modern dashboard.',
      technologies: [
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind CSS',
        'REST API'
      ],
      image: '📄',
      github: 'https://github.com/manikanta240/ATS.git',
      live: 'https://ats-9zjw.onrender.com/login',
      backend: 'https://github.com/manikanta240/ATS',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio showcasing projects and skills with GSAP motion, scroll storytelling, and a cohesive visual system.',
      technologies: ['React', 'GSAP', 'Tailwind CSS', 'React Router'],
      image: '💼',
      github: 'https://github.com/manikanta240/portfolio.git',
      live: 'https://example.com',
      backend: null,
      status: 'completed'
    },

    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'A responsive weather application that displays current weather conditions and forecasts using a weather API with a clean, focused UI.',
      technologies: ['React', 'API Integration', 'CSS3', 'JavaScript'],
      image: '🌤️',
      github: 'https://github.com/manikanta240/Weather-App.git',
      live: 'https://example.com',
      backend: null,
      status: 'completed'
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description:
        'A hands-on full-stack e-commerce application with user authentication, shopping cart, and payment integration. Built with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      image: '🛒',
      github: 'https://github.com/manikanta240/E-Commerce.git',
      live: 'https://example.com',
      backend: 'https://github.com/manikanta240/E-Commerce',
      status: 'completed'
    }
  ]

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        const title = headerRef.current.querySelector('.projects-title')
        const accent = headerRef.current.querySelector('.projects-accent')
        const desc = headerRef.current.querySelector('.projects-desc')
        gsap.from([title, accent, desc], {
          y: 48,
          opacity: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        })
      }

      projectCards.current.forEach((card, idx) => {
        if (!card) return
        const media = card.querySelector('.project-media')
        const body = card.querySelector('.project-body')

        gsap.from(card, {
          y: 120,
          opacity: 0,
          rotateX: 6,
          duration: 0.95,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none'
          },
          delay: idx * 0.06
        })

        card.addEventListener('mouseenter', () => {
          gsap.to(media, {
            scale: 1.06,
            duration: 0.55,
            ease: 'power2.out'
          })
          gsap.to(body, { y: -4, duration: 0.45, ease: 'power2.out' })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(media, { scale: 1, duration: 0.5, ease: 'power2.out' })
          gsap.to(body, { y: 0, duration: 0.45, ease: 'power2.out' })
        })
      })

      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          scale: 0.92,
          opacity: 0,
          duration: 0.7,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        })
      }
    }, projectsContainer)

    return () => ctx.revert()
  }, [])

  const addProjectRef = (element, index) => {
    projectCards.current[index] = element
  }

  const getStatusStyle = status => {
    const styles = {
      completed: 'bg-green-500 text-white',
      'in-progress': 'bg-yellow-500 text-white',
      planned: 'bg-blue-500 text-white'
    }
    return styles[status] || styles.completed
  }

  return (
    <section
      ref={projectsContainer}
      className='min-h-screen w-full py-20 px-6 md:px-10 lg:px-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50'
    >
      <div className='max-w-7xl mx-auto'>
        <div ref={headerRef} className='text-center mb-16'>
          <h1 className='projects-title text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#5D866C] to-fuchsia-700 bg-clip-text text-transparent'>
            My Projects
          </h1>
          <div className='projects-accent w-24 h-1 bg-gradient-to-r from-[#5D866C] to-fuchsia-700 mx-auto mb-6 rounded-full' />
          <p className='projects-desc text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
            Full-stack builds from Seelam Naga Manikanta — APIs, dashboards, and
            frontends wired together. Use Code for the repo, Backend for the
            service or API surface, and Live for the deployed app.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {myProjects.map((project, idx) => (
            <div
              key={project.id}
              ref={el => addProjectRef(el, idx)}
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden'
            >
              <div className='project-media h-48 bg-gradient-to-br from-[#5D866C] to-fuchsia-700 flex items-center justify-center text-8xl origin-center will-change-transform'>
                {project.image}
              </div>

              <div className='project-body p-6 will-change-transform'>
                <div className='flex items-start justify-between mb-3 gap-2'>
                  <h3 className='text-2xl font-bold text-gray-800 flex-1'>
                    {project.title}
                  </h3>
                  <span
                    className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusStyle(
                      project.status
                    )}`}
                  >
                    {project.status.replace('-', ' ')}
                  </span>
                </div>

                <p className='text-gray-600 mb-4 leading-relaxed min-h-[4.5rem]'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className={`grid gap-2 ${
                    project.backend
                      ? 'grid-cols-1 sm:grid-cols-3'
                      : 'grid-cols-2'
                  }`}
                >
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-3 py-2.5 bg-gray-900 text-white rounded-xl text-center text-sm font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2'
                  >
                    <i className='ri-github-fill text-lg' />
                    Code
                  </a>
                  {project.backend ? (
                    <a
                      href={project.backend}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-3 py-2.5 bg-slate-700 text-white rounded-xl text-center text-sm font-semibold hover:bg-slate-800 transition-colors duration-300 flex items-center justify-center gap-2 border border-slate-600/80'
                      title='API, server, or backend repository'
                    >
                      <i className='ri-server-line text-lg' />
                      Backend
                    </a>
                  ) : null}
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`px-3 py-2.5 bg-gradient-to-r from-[#5D866C] to-fuchsia-700 text-white rounded-xl text-center text-sm font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      project.backend ? '' : 'sm:col-span-1'
                    }`}
                  >
                    <i className='ri-external-link-line text-lg' />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className='mt-16 text-center'>
          <p className='text-xl text-gray-700 mb-6'>
            Want to see more of my work?
          </p>
          <a
            href='https://github.com/manikanta240'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#5D866C] to-fuchsia-700 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300'
          >
            <i className='ri-github-fill text-2xl' />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

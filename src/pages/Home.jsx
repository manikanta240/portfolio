import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import profileImg from '../assets/mine2.png'

gsap.registerPlugin(ScrollTrigger)

const ROLE_WORDS = [
  { text: 'FULL', className: 'from-fuchsia-600 to-[#5D866C]' },
  { text: 'STACK', className: 'from-[#5D866C] to-emerald-600' },
  { text: 'WEB', className: 'from-emerald-600 to-fuchsia-600' },
  { text: 'DEVELOPER', className: 'from-fuchsia-700 to-[#5D866C]' }
]

function splitWordIntoLetters (word, wordIdx) {
  return word.split('').map((letter, i) => (
    <span key={`${wordIdx}-${i}`} className='role-letter inline-block'>
      {letter}
    </span>
  ))
}

const Home = () => {
  const mainContainer = useRef(null)
  const imageWrap = useRef(null)
  const profileImage = useRef(null)
  const socialIconsWrapper = useRef(null)
  const nameHeading = useRef(null)
  const roleHeading = useRef(null)
  const sublineRef = useRef(null)
  const helloRef = useRef(null)
  const andIamRef = useRef(null)
  const scrollHintRef = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(helloRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.6
      }).from(
        profileImage.current,
        {
          x: 120,
          opacity: 0,
          scale: 0.92,
          rotate: 2,
          duration: 1,
          ease: 'power4.out'
        },
        0.05
      )

      const nameLetters = nameHeading.current?.querySelectorAll('.letter')
      if (nameLetters?.length) {
        tl.from(
          nameLetters,
          {
            y: 72,
            opacity: 0,
            rotateX: -22,
            duration: 0.85,
            stagger: 0.045
          },
          '-=0.65'
        )
      }

      tl.from(
        andIamRef.current,
        { y: 20, opacity: 0, duration: 0.45 },
        '-=0.35'
      )

      const roleLetters = roleHeading.current?.querySelectorAll('.role-letter')
      if (roleLetters?.length) {
        tl.from(
          roleLetters,
          {
            y: 56,
            opacity: 0,
            stagger: 0.028,
            duration: 0.75,
            ease: 'back.out(1.25)'
          },
          '-=0.25'
        )
      }

      tl.from(
        sublineRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.7
        },
        '-=0.4'
      ).from(
        socialIconsWrapper.current?.children || [],
        {
          scale: 0,
          opacity: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: 'elastic.out(1, 0.6)'
        },
        '-=0.35'
      )

      if (scrollHintRef.current) {
        tl.from(
          scrollHintRef.current,
          { opacity: 0, y: 10, duration: 0.5 },
          '-=0.2'
        )
      }

      if (profileImage.current) {
        gsap.to(profileImage.current, {
          y: '+=12',
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })
      }

      if (imageWrap.current && mainContainer.current) {
        gsap.to(imageWrap.current, {
          y: -48,
          scrollTrigger: {
            trigger: mainContainer.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2
          }
        })
      }
    }, mainContainer)

    return () => ctx.revert()
  }, [])

  const socialMedia = [
    { icon: 'ri-linkedin-box-fill', url: 'https://linkedin.com' },
    { icon: 'ri-github-fill', url: 'https://github.com' },
    { icon: 'ri-twitter-x-line', url: 'https://twitter.com' },
    { icon: 'ri-instagram-line', url: 'https://instagram.com' }
  ]

  return (
    <section
      ref={mainContainer}
      className='relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-20 gap-12 overflow-hidden'
    >
      <div ref={imageWrap} className='w-full md:w-1/2 flex justify-center'>
        <img
          ref={profileImage}
          src={profileImg}
          alt='Seelam Naga Manikanta'
          className='h-[500px] md:h-[500px] rounded-2xl shadow-2xl ring-2 ring-white/40 object-cover'
        />
      </div>

      <div className='w-full md:w-1/2 space-y-6'>
        <h4
          ref={helloRef}
          className='text-2xl text-gray-600 uppercase tracking-widest'
        >
          Hello! I am
        </h4>

        <h1
          ref={nameHeading}
          className='flex flex-wrap text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#5D866C] to-fuchsia-700 bg-clip-text text-transparent'
        >
          <span className='flex mr-2'>
            {'SEELAM'.split('').map((letter, idx) => (
              <span key={idx} className='letter inline-block'>
                {letter}
              </span>
            ))}
          </span>

          <span className='flex mr-2'>
            {'NAGA'.split('').map((letter, idx) => (
              <span key={idx} className='letter inline-block'>
                {letter}
              </span>
            ))}
          </span>

          <span className='flex whitespace-nowrap'>
            {'MANIKANTA'.split('').map((letter, idx) => (
              <span key={idx} className='letter inline-block'>
                {letter}
              </span>
            ))}
          </span>
        </h1>

        <h3
          ref={andIamRef}
          className='text-2xl text-gray-600 uppercase tracking-wide'
        >
          And I am a
        </h3>

        <h2
          ref={roleHeading}
          className='flex flex-wrap gap-x-3 gap-y-1 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight'
        >
          {ROLE_WORDS.map((w, wi) => (
            <span
              key={w.text}
              className={`inline-flex bg-gradient-to-r ${w.className} bg-clip-text text-transparent`}
            >
              {splitWordIntoLetters(w.text, wi)}
            </span>
          ))}
        </h2>

        <p
          ref={sublineRef}
          className='text-lg text-gray-700 max-w-xl leading-relaxed'
        >
          Seelam Naga Manikanta — full stack web developer crafting fast,
          interactive products end to end: polished interfaces, solid APIs, and
          dependable data layers.
        </p>

        <div ref={socialIconsWrapper} className='flex gap-6 mt-6'>
          {socialMedia.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target='_blank'
              rel='noreferrer'
              className='text-3xl text-gray-700 hover:text-fuchsia-700 hover:scale-125 transition duration-300'
            >
              <i className={social.icon} />
            </a>
          ))}
        </div>

        <p
          ref={scrollHintRef}
          className='hidden md:flex items-center gap-2 pt-4 text-sm font-medium text-gray-500'
        ></p>
      </div>
    </section>
  )
}

export default Home

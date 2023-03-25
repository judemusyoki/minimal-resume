import React from 'react'
import resume from '../assets/jude_musyoki_resume.pdf'

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Jude Musyoki
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm a digital fiddler that combines combining my front-end developer
        knowledge with over 5 years marketing experience. I mostly work with
        JavaScript centered technologies like Reacjs, Nextjs & Nodejs. My
        passion is to creatively develop web apps that make life easier fo
        others.
        <br />
        <a
          href="https://github.com/judemusyoki"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          Jude Musyoki
        </a>
      </p>
      <p>
        <a
          href={resume}
          download="Jude Musyoki Resume.pdf"
          className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-neutral-800 bg-teal-300 drop-shadow-md hover:bg-teal-700 hover:scale-105 hover:transform-origin-center transition-all duration-200 ease-in-out"
        >
          My Resume {' >'}
        </a>
      </p>
    </div>
  )
}

export default Intro

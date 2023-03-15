import React from 'react'

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Musyoki
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm aa software developer with over 3 years of experience, specializing
        in frontend development and working primarily with JavaScript and
        related technologies such as Next.js, React.js, and Node.js. As a
        software developer, you are likely skilled in writing clean, efficient,
        and scalable code to build web applications and user interfaces. You may
        also have experience with version control systems like Git and knowledge
        of agile development methodologies.
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
    </div>
  )
}

export default Intro

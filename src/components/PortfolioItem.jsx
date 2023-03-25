import React from 'react'

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
    >
      <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat opacity-0 hover:opacity-100 duration-300 inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </span>
          <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
        </p>
      </div>
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img
          src={imgUrl}
          alt="portfolio"
          className="w-full h-36 md:h-48 object-cover cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  )
}

export default PortfolioItem

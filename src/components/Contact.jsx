import React from 'react'
import Title from './Title'

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/383f74a7-4605-4cde-b54e-6cb2b333b6c4"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-neutral-800 bg-teal-300 hover:bg-teal-700 drop-shadow-md  hover:scale-105 hover:transform-origin-center transition-all duration-200 ease-in-out"
          >
            Work With Me {' >'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

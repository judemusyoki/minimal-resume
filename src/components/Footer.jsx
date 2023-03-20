import React from 'react'

function Footer({ children, id }) {
  return (
    <div className="flex flex-row justify-center mx-auto">
      <p
        id={id && id}
        className="decoration-4 mb-5 text-stone-900 dark:text-white mx-auto"
      >
        {children}
      </p>
    </div>
  )
}

export default Footer

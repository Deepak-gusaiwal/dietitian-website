import React from 'react'

const Section = ({className="",children}) => {
  return (
    <section className={`w-full md:py-4 ${className}`}>
      {children}
    </section>
  )
}

export default Section

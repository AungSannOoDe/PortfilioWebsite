import React from 'react'

const Layout = ({className,children}) => {
  return (
    <section className={`  ${className} max-w-7xl mx-auto `}>
{children}
    </section>
  )
}

export default Layout
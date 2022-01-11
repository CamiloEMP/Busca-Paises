import React from 'react'

export const Layout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-black transition-all w-full min-h-screen">
      {children}
    </div>
  )
}

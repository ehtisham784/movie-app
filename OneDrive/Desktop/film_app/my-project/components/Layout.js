import React from 'react'
import Navbar from "./Navbar"
import Meta from "./Meta"
function Layout({children}) {
  return (
    <>
      <Meta /> 
      <Navbar/>
      <main>
        {children}
      </main>

    </>
  )
}

export default Layout
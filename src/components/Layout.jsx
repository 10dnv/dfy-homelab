import React from 'react'
import Navbar  from './Navbar'

function Layout({ children }) {
  return (
    <div className='h-[100vh] w-[100%] flex flex-col'>
        <Navbar/>
        <div className='flex h-[100%]'>
            {/* <Content/> */}
            { children }
        </div>
    </div>
  )
}

export default Layout
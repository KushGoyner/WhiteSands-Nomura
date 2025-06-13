import React from 'react'

import Navbar from './Navbar'
import Topbar from '../layout/Topbar'

const Header = () => {
  return (
    <header className='border-b border-gray-200'>
        <Topbar/>
        <Navbar/>
    </header>
  )
}

export default Header
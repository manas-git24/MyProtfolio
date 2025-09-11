import React from 'react'

const Header = () => {
  return (
    <div className='flex'>
        <h1>Manas p.</h1>
        <nav>
        <ul className='flex'>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Projects
            </li>
            <li>
                Contact
            </li>
        </ul>
        </nav>
    </div>
  )
}

export default Header
import React from 'react'
import './Technologies.css'
import { NavLink, Outlet } from 'react-router-dom'

function Technologies() {
  return (
    <div className='tech'>
      <div className='leftPanel'>
        <NavLink to='html'>HTML</NavLink>
        <NavLink to='css'>CSS</NavLink>
        <NavLink to='js'>JavaScript</NavLink>
        <NavLink to='react'>React</NavLink>
      </div>
      <div className='rightPanel'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Technologies

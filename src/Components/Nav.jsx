import React from 'react'
import './Nav.css'
import { useState } from 'react'
import { useContext} from 'react'
import { Context } from './Context'

function Nav() {
  const {setLogin,user}=useContext(Context)
  return (
    <div className='nav'>
      <div id='title'>
        <h2>React Context</h2>
      </div>
      <div id='list'>
        <a href=''>Home</a>
        <a href=''>profile</a>
        <a href=''>Products</a>
        <a href=''>Contact</a>
        <button onClick={()=>{setLogin(false)}}>Logout</button>
        <span style={{color:'yellow', fontSize:'22px',marginLeft:'30px'}}><b>{user.name}</b></span>
      </div>
    </div>
  )
}

export default Nav

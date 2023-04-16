import React from 'react'
import './Nav.css'
import { useContext} from 'react'
import { Context } from './Context'
import { NavLink, useNavigate } from 'react-router-dom'

function Nav() {
  const {setLogin,user}=useContext(Context)
  const navigate=useNavigate()
  return (
    <div className='nav'>
      <div id='title'>
        <h2>React Context</h2>
      </div>
      <div id='list'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/tech'>Technologies</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <button onClick={()=>{setLogin(false);navigate('/')}}>Logout</button>
        <span style={{color:'yellow', fontSize:'22px',marginLeft:'30px'}}><b>{user.name}</b></span>
      </div>
    </div>
  )
}

export default Nav

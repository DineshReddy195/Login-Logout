import React from 'react'
import { useContext } from 'react'
import { Context } from './Context'

function Login() {
    const {setLogin,user,setUser}=useContext(Context)
    var styles={
        width:'300px',
        boxShadow:'0 0 10px black',
        textAlign:'center',
        padding:'30px',
        margin:'150px auto'
    }
    const handleLogin=()=>{
        if(user.name==='Dinesh' && user.password==='Dinesh@123' || user.name==='admin'&&user.password==='admin@123'){
            setLogin(true)
        }else{
            alert('Enter Correct Credentials')
        }
    }
  return (
    <div style={styles}>
        <h3>Login Form</h3>
      <div className='input'>
        <input type='text' placeholder='Enter Username' onChange={(e)=>{setUser({...user,name:e.target.value})}}/>
      </div><br/>
      <div>
        <input type='password' placeholder='Enter Password' onChange={(e)=>{setUser({...user, password:e.target.value})}}/>
      </div><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login

import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { useSelector, useDispatch } from 'react-redux'
import {User} from '../features/counter/loginSlice'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username,setUsername]=useState()
  const [password,setPass]=useState()
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const handlelogin=(e)=>{
    localStorage.clear();
    console.log({'username':username,'password':password})
    dispatch(User({'username':username,'password':password}))
    e.preventDefault();
    
  }
 
  return (
    <div>
      <div className='form'>
        <div className='content'>

          <div className='heading'><h1>Login</h1>
          </div>
          <div className='rows'>
            <div className='row'>Username:</div>
            <div className='row'><input type='text' onChange={(e)=>setUsername(e.target.value)} placeholder="username"/></div>
            <div className='row'>Password:</div>
            <div className='row'><input type='text' onChange={(e)=>setPass(e.target.value)} placeholder="Password"/></div>
            <div ><button className='btn' onClick={handlelogin}>Login</button></div>
            <div className='message'><span>Don't have account <Link to="register">signUp</Link></span></div>
            <div>{<Link to='home' style={{color:"white"}}>goto home</Link>}</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
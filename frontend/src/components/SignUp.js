import React, { useEffect } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {register} from '../features/counter/registerSlice'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import {register} from '../features/counter/registerSlice'



const SignUp = () => {
const [username,setUsername]=useState()
const [email,setEmail]=useState()
const [password,setPass]=useState()
const navigate=useNavigate()
const dispatch = useDispatch();

const handleClick=(e)=>{
  console.log({'username':username,'password':password,"email":email})
  dispatch(register({'username':username,'password':password,"email":email}))
  e.preventDefault();

  
}


  return (
    <div>
      <div className='form'>
        <div className='content'>

          <div className='heading'><h1>Register</h1>
          </div>
          <div className='rows'>
            <div className='row'>Username:</div>
            <div className='row'><input type='text'onChange={(e)=>setUsername(e.target.value)} placeholder="username"/></div>
            <div className='row'>Email:</div>
            <div className='row'><input type='text'onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/></div>
            <div className='row'>Password:</div>
            <div className='row'><input type='text' onChange={(e)=>setPass(e.target.value)} placeholder="Password"/></div>
            <div ><button className='btn' onClick={handleClick} >Register</button></div>

            <div className='message'><span>Already have account <Link to="/">Login</Link></span></div>
    
          </div>

        </div>
      </div>


    </div>
  )
}

export default SignUp
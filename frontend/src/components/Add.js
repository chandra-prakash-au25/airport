import React from 'react'
import './styles.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {putdata} from '../features/counter/addSlice'
import { useState } from 'react'
import axios from 'axios'
const Add = () => {
  const [name,setName]=useState()
  const [code,setCode]=useState()
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleClick=async(e)=>{

    const user=JSON.parse(localStorage.getItem('user'))
    const token=user['token']
    const id=user['other'].id
     console.log(user['other'].id,token)
     axios.post(
      "http://localhost:4000/api/airports",{
        "name":name,
        "code":code
      },{headers:{
        'token': `Basic ${token}`
               },
            params:{
            "userid":id
         }
        }
    ).then((res)=>{
      console.log(res.data)
      navigate('/home')
    }).catch((e)=>{
   console.log(e)
       })
 
  
    e.preventDefault()
  }
  return (
    <div>
        <div className='form'>
        <div className='content'>

          <div className='heading'><h1>AIRPORT DETAILS</h1>
          </div>
          <div className='rows'>
            <div className='row'>NAME:</div>
            <div className='row'><input type='text' onChange={(e)=>setName(e.target.value)} placeholder="NAME"/></div>
            <div className='row'>CODE:</div>
            <div className='row'><input type='text' onChange={(e)=>setCode(e.target.value)} placeholder="CODE"/></div>
            <div className='message' id='add'><button onClick={handleClick} className='btn'>ADD</button></div>
    
          </div>

        </div>
      </div>

    </div>
  )
}

export default Add
import React from 'react'
import './styles.css';
import logo from './logo2.jpg'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {getdata} from '../features/counter/getSlice'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const data=[
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },

  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  },
  { 
    "id":1,
    "name":"amousi airport",
    "code":"1233445533csd",
  }


]


const Home = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [data,setData]=useState()
  
  const user=JSON.parse(localStorage.getItem('user'))
  if(!user){
    navigate('/')
  }
 
  useEffect((e) => {
    //dispatch(getdata(user))
   const user=JSON.parse(localStorage.getItem('user'))
   const token=user['token']
   const id=user['other'].id
    console.log(user['other'].id,token)
    axios.post(
     "http://localhost:4000/api/alldata",{},{headers:{
       'token': `Basic ${token}`
              },
           params:{
           "userid":id
        }
       }
   ).then((res)=>{
     console.log(res.data)
     setData(res.data)
   }).catch((e)=>{
  console.log(e)
      })

  },[]);
  const name = useSelector((state) => state.data.alldataInfo)
  console.log(name)
  return (
    <div className='container'>
      <div className='nav'><img className='logo' src={logo}/><div><h1 className='nav-head'>WINGSMAN</h1></div><Link className='add-btn' to='/add'>ADD DETAILS</Link>
    </div>
      <div className='form1'>
      <div className="row1">
        {data&& data.map((val,i)=>{
          return(
            <div className="column" key={i}>
                <div className="card">
                  <p>{val.name}</p>
                  <p>{val.code}</p>
                </div>
            </div>
          )


        })}
        </div>
      </div>
    </div>
  )
}

export default Home
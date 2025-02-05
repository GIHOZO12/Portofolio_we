// eslint-disable-next-line no-unused-vars
import React from 'react'
import Section from '../Components/Section'

const Contact = () => {
    const user={
        "name":"GIHOZO Ismail",
        "email":"gihozoismail@gmail.com",
        "gender":"male"
    }
  return (
    <div>
<Section title='SAY HELLO'/>
<div className='flex  gap-80 p-4'>
    <div className='p-5 gap-1'>
        <h1 className='text-white'>{"{"}</h1>
      {Object.keys(user).map((key)=>(
        // eslint-disable-next-line react/jsx-key
        <h1>
            <span className='text-white'>{key} :</span>    <span className='text-white'>{user[key]}</span>
        </h1>
      ))}
      <h1 className='text-white'>{"}"}</h1>
    </div>
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdb_m0eYeQQNGk796cpoGFfcHbCiVm4vRUg&s" alt="" />
    </div>
    </div>
    </div>
  )
}

export default Contact
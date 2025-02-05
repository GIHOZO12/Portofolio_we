// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Section from '../Components/Section'
import {Courses_list} from '../Resources/Courses'

const Courses = () => {
    const [selected, setselected]=useState(false)
  return (
    <div>
        <Section title='Courses'/>
         <div className='flex flex-col   gap-5 sm:flex-row sm:gap[20%]'>
            <div className='flex flex-row gap-2 w-full overflow-y-auto sm:flex-col sm:w-1/3 sm:overflow-y-auto'>
  {Courses_list.map((item,index)=>(
    <div key={index}
    className='p-5'
    onClick={()=>setselected(index)}
    
    >
        <h1 className={`text-lg px-3 border-l-2 py-2 ${
                  selected === index
                    ? 'text-tertiary border-tertiary bg-[#22736c]'
                    : 'text-white'
                }`}
              >{item.title}</h1>
    </div>
  ))}

 
            </div>
     <div className='flex flex-col sm:flex-row sm:w-full sm:items-center sm:gap-5'>
    
        {selected !==false &&(
        <><div>

                              <div className='p-5'>
                                  <h1 className='text-xl text-secondary'>{Courses_list[selected].title}</h1>
                                  <p className='text-xl text-white'>{Courses_list[selected].description}</p>
                              </div>
                              
                              
                          </div>
                          <img src={Courses_list[selected].image}  alt='image not found'/>
                          </>
                          )}
  
     </div>
   
         </div>
    </div>
  )
}

export default Courses
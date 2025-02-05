// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../Components/Header'
import Intro from './Intro'
import About from './About'
import Experiances from './Experiances'
import Projects from './Projects'
import Courses from './Courses'
import Contact from './Contact'
import Footer from './Footer'
import Leftseder from './leftseder'


const Home = () => {
  return (
    <div className='bg-primary'>
           <Header/>
           <div className='p-10'>
           <Intro/>
           <About/>
           <Experiances/>
           <Projects/>
           <Courses/>
           <Contact/>
           <Footer/>
          <Leftseder/>
          </div>
      
    </div>
  )
}

export default Home
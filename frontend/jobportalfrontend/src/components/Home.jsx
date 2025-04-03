import React from 'react'
import JobCategories from './JobCategories';
import './Home.css'
import Footer from './Footer';
const Home = () => {
  return (
    <div>
      <div className='homecontainer'>
         <div className='banner'>
            <div className='bannercon'>
              <h1>Find Your Dream Job</h1>
              <p>Explore thousands of jobs listings in our application</p>
              <button>Browse jobs</button>
            </div>
         </div>
          <JobCategories/>  
          <Footer/>
      </div>
    </div>
  )
}

export default Home
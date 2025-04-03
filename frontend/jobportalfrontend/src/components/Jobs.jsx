import React, { useEffect, useState } from 'react'
import './Jobs.css'
import axios from 'axios'
const Jobs = () => {
  const [jobs,setjobs]=useState([])
  // const [data,setdata]=useState(0)
  // const [data2,setdata2]=useState(0)
  useEffect(()=>{
     axios.get('http://localhost:2004/api/jobs').then((res)=>{
      console.log(res.data.jobs);
      setjobs(res.data.jobs)
     }).catch((err)=>console.log(err)
     )
     
  },[])
  const handleapply=async(jobid)=>{
       console.log(jobid);
       let user=JSON.parse(localStorage.getItem('user'))
       console.log(user);
      let res=await axios.post(`http://localhost:2004/api/application/${jobid}/${user._id}`,
        {description:"i think i have right skills for this job so i feel like i fit for this job"}
       )
       console.log(res);
       if(res.status===200){
        alert('applid successfully')
       }
       
  }
  return (
    <div>
         <div className='jobstitle'>
          <h1>Find Jobs</h1>
          <button style={{height:'6vh',margin:"0px",padding:'0px'}}>add job</button>
         </div>
         {/* <div className='ujobcard'>
                <h2>Job role</h2>
                <p>
                Apple Incorporation  | 234 Reviews</p>
                <div className='userjobinfo'>
                  <p>1-4exp</p>
                  <p>no disclosed</p>
                  <p>location</p>
                </div>
                <div className='' style={{marginLeft:'25px'}}>
                <span><strong>Skills</strong>:HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP, PHOTOSHOP</span>
                </div>
              <button className='applybtn'>Apply</button>
              </div> */}
         <div className='jobsconainer'>
          {/* {
            jobs.map((job)=>(
               <div key={job._id} onClick={()=>{handleonlick(job)}}>
                <h3>{job.companyname}</h3>
                <h4>{job.jobrole}</h4>
                <p>{job.exp}</p>
               </div>
            ))
          } */}
          <div style={{width:"90%"}}>
          <div className='jobcontainercards'>
             
          {
            jobs.map((job)=>(
              <div className='ujobcard'>
                {/* <h2>{job.jobrole?job.jobrole:"no role"}</h2>
                <p>{job.companyname} | 234 Reviews</p> */}
                <div className='imgcn'>
                  <img src={job.companylogo} alt="" />
                  <div>
                  <h2>{job.jobrole?job.jobrole:"no role"}</h2>
                  <p>{job.companyname} | 234 Reviews</p>
                  </div>

                </div>
                <div className='userjobinfo'>
                  <p>{job.exp} exp</p>
                  <p>no disclosed</p>
                  <p>{job.location}</p>
                </div>
                <div className='' style={{marginLeft:'25px'}}>
                <span><strong>Skills</strong>:HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP, PHOTOSHOP</span>
                </div>
              <button className='applybtn' onClick={()=>{handleapply(job._id)}}>Apply</button>
              </div> 
            ))
          } 
              
              
          </div>
          </div>
         </div>
      
    </div>
  )
}

export default Jobs
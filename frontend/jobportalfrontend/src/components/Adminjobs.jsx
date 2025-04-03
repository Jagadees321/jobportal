
import React, { useEffect, useState } from 'react';
import './Adminjobs.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Adminjobs = () => {
    const [jobs, setJobs] = useState([]);
    const [editJob, setEditJob] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        companyname: '',
        companylogo: '',
        jobrole: '',
        expectedpackage: '',
        location: '',
        contactnumber: '',
        reqhigherdegree: '',
        exp: '',
        reqskills: '',
        lastdaytoapply: ''
    });

    useEffect(() => {
        fetchData();
    }, []);
    const navigate = useNavigate();
    
    // Modify the job card click handler
    const handleJobClick = (jobId) => {
        navigate(`/applications/${jobId}`);
    };


    const fetchData = async () => {
        try {
            let res = await axios.get('http://localhost:2004/api/jobs');
            setJobs(res.data.jobs);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };

    const handleEditClick = (job) => {
        setEditJob(job);
        setFormData({
            companyname: job.companyname,
            companylogo: job.companylogo,
            jobrole: job.jobrole,
            expectedpackage: job.expectedpackage,
            location: job.location,
            contactnumber: job.contactnumber,
            reqhigherdegree: job.reqhigherdegree,
            exp: job.exp,
            reqskills: job.reqskills,
            lastdaytoapply: job.lastdaytoapply ? job.lastdaytoapply.split('T')[0] : ''
        });
        setShowModal(true);
        document.body.style.overflow = "hidden";
    };

    const handleCloseModal = () => {
        setShowModal(false);
        document.body.style.overflow = "auto";
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:2004/api/jobs/${editJob._id}`, formData);
            setShowModal(false);
            document.body.style.overflow = "auto";
            fetchData();
        } catch (error) {
            console.error("Error updating job:", error);
        }
    };

    return (
        <div>
            <h2 className='adminjobstitle'>Admin Jobs</h2>
            {jobs.length > 0 ? (
                <div className='jobscontainer'>
                    {jobs.map((job) => (
                        <div className='jobcard' key={job._id}>
                            <div className='jobinfo' onClick={() => handleJobClick(job._id)}>
                                <img src={job?.companylogo} alt={job.companyname} className='joblogo' />
                                <div className='jobdetails'>
                                    <h2 className='companyname' style={{color:'gray',margin:'0px',marginLeft:'45px'}}>{job?.companyname?job.companyname:"no compony"}</h2>
                                   
                                    <div className='job-meta'>
                                    <p className='jobrole'>{job.jobrole}</p>
                                        <span><strong>Location:</strong> {job.location}</span>
                                       
                                        <span><strong>Experience:</strong> {job.exp}</span>
                                    </div>
                                </div>
                                <div className='jobactions'>
                                    <button className='editbtn' onClick={() => handleEditClick(job)}>Edit</button>
                                    <button className='deletebtn' style={{backgroundColor:'red'}}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No jobs available.</p>
            )}

            {showModal && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Edit Job</h2>
                        <form onSubmit={handleSubmit} className='edit-form'>
                            <div className='form-row'>
                                <div className='form-group'>
                                    <label>Company Name</label>
                                    <input type="text" name="companyname" value={formData.companyname} onChange={handleChange} required />
                                </div>
                                <div className='form-group'>
                                    <label>Company Logo URL</label>
                                    <input type="text" name="companylogo" value={formData.companylogo} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='form-group'>
                                    <label>Job Role</label>
                                    <input type="text" name="jobrole" value={formData.jobrole} onChange={handleChange} required />
                                </div>
                                <div className='form-group'>
                                    <label>Location</label>
                                    <input type="text" name="location" value={formData.location} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='form-group'>
                                    <label>Expected Package (LPA)</label>
                                    <input type="number" name="expectedpackage" value={formData.expectedpackage} onChange={handleChange} />
                                </div>
                                <div className='form-group'>
                                    <label>Experience</label>
                                    <input type="text" name="exp" value={formData.exp} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='button-group'>
                                <button type="submit" className="btn-save">Save</button>
                                <button type="button" className="btn-cancel" onClick={handleCloseModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Adminjobs; 
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const Applications = () => {
    const [applications, setApplications] = useState([]);
    const [job, setJob] = useState(null);
    const { jobId } = useParams();
    const navigate = useNavigate();
    const [selectedApp, setSelectedApp] = useState(null);
    const [feedback, setFeedback] = useState("");

    const fetchData = async () => {
      try {
          const jobRes = await axios.get(`http://localhost:2004/api/jobs/${jobId}`);
          setJob(jobRes.data);

          const appRes = await axios.get(`http://localhost:2004/api/application/getbyjobid/${jobId}`);
          setApplications(appRes.data);
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };
    useEffect(() => {
       
        fetchData();
    }, [jobId]);

    // Open modal for feedback
    const openFeedbackModal = (application) => {
        setSelectedApp(application);
        setFeedback(application.feedback || "");
    };

    // Close modal
    const closeModal = () => {
        setSelectedApp(null);
        setFeedback("");
    };

    // Submit feedback & mark as seen
    const submitFeedback = async () => {
        if (!selectedApp) return;

        try {
            await axios.put(`http://localhost:2004/api/application/${selectedApp._id}`, {
                feedback,
                status: true
            });

            fetchData();

            closeModal();
        } catch (error) {
            console.error("Error updating feedback:", error);
        }
    };

    return (
        <div className="applications-container">
            <button onClick={() => navigate(-1)} className="back-button" style={{position:"relative",left:"45%" ,top:"30%",margin:"5px 0px"}}>
                &larr; Back to Jobs
            </button>

            {job && (
                <div className="job-header">
                    <h2>Applications for {job.companyname}</h2>
                    <p className="job-role">Job Role: {job.jobrole}</p>
                </div>
            )}

            <div className="applications-grid">
                {applications.length > 0 ? (
                    applications.map((application) => (
                        <div key={application._id} className="application-item">
                           <div className="applicationbodycard">
                           <h3 className="applicant-name">{application.userid?.username || "Unknown"}</h3>
                            <p className="applicant-email"><strong>Email:</strong> {application.userid?.email || "Not provided"}</p>
                            <p><strong>Status:</strong>{application.status?"seen":"unseen"}</p>         
                            <p><strong style={{marginLeft:'-10px'}}>Description:</strong>{application.description}</p>
                            <p><strong>Feedback:</strong> {application.feedback || "Not provided"}</p>
                           </div>

                           <div className="apnbtn">
                           <button onClick={() => openFeedbackModal(application)} className="edit-button">
                                Reply
                            </button>
                           </div>
                        </div>
                    ))
                ) : (
                    <p className="no-applications">No applications found for this job</p>
                )}
            </div>

            {/* Feedback Modal */}
            {selectedApp && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Give Feedback</h2>
                        <p>Candidate: <strong>{selectedApp.userid?.name || "Unknown"}</strong></p>
                        <textarea
                            placeholder="Enter feedback..."
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        ></textarea>
                        <div className="modal-actions">
                            <button onClick={submitFeedback} className="submit-button">Submit</button>
                            <button onClick={closeModal} className="close-button">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Applications;

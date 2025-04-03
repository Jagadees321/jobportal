import React from "react";
import "./About.css"; // Import custom styles
import Footer from "./Footer";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About JobPortal</h1>
          <p style={{color:'aqua',fontWeight:'bold'}}>Connecting Talent with Opportunity</p>
          <button className="about-btn">Explore Jobs</button>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="about-mission">
        <div className="about-mission-content">
          <div className="about-mission-text">
            <h2>Our Mission</h2>
            <p>
              We aim to bridge the gap between job seekers and employers by
              providing a seamless platform to find the perfect job or the
              best candidate.
            </p>
          </div>
          <div className="about-mission-image">
            <img src="https://images.pexels.com/photos/6077239/pexels-photo-6077239.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Mission" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-why">
        <h2>Why Choose Us?</h2>
        <div className="about-why-cards">
          <div className="about-card">
            <h3>Easy Job Search</h3>
            <p>Find jobs quickly and easily with our intuitive platform.</p>
          </div>
          <div className="about-card">
            <h3>Verified Employers</h3>
            <p>Work with trusted companies to build your career.</p>
          </div>
          <div className="about-card">
            <h3>Career Growth</h3>
            <p>Get access to learning resources and professional development.</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaEnvelope, FaHeadset, FaUserTie, FaTasks, FaChartLine, FaHandshake, FaBook, FaDraftingCompass } from "react-icons/fa";

const jobCategories = [
  { icon: <FaEnvelope size={40} />, title: "Marketing" },
  { icon: <FaHeadset size={40} />, title: "Customer Service" },
  { icon: <FaUserTie size={40} />, title: "Human Resource" },
  { icon: <FaTasks size={40} />, title: "Project Management" },
  { icon: <FaChartLine size={40} />, title: "Business Development" },
  { icon: <FaHandshake size={40} />, title: "Sales & Communication" },
  { icon: <FaBook size={40} />, title: "Teaching & Education" },
  { icon: <FaDraftingCompass size={40} />, title: "Design & Creative" },
];

const JobCategories = () => {
  return (
   <>
       <div className="jccon">
        {jobCategories.map((category, index) => (
          <div style={{height:'200px',margin:'10px',marginBottom:'60px'}}>
         
            <Card className="p-4 text-center shadow-sm border-0" style={{height:'220px',width:'100%'}}>
              <div className="text-success">{category.icon}</div>
              <Card.Body>
                <Card.Title className="fw-bold">{category.title}</Card.Title>
                <Card.Text className="text-success">123 Vacancy</Card.Text>
              </Card.Body>
            </Card>
          
          </div>
        ))}
        </div>
     </>
  );
};

export default JobCategories;

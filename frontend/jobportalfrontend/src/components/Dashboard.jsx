import { Link } from "react-router-dom";
// import Navbar from './Navbar';
// import Footer from './Footer';

const Dashboard = ({ ContentComponent }) => {
    if (!ContentComponent) {
        return <h2>Error: No component passed</h2>;
      }
  return (
    <div>
{/* <Navbar/> */}
      <div className="content">
        <ContentComponent /> {/* Render dynamic component */}
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Dashboard;

import React from 'react';
//  import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Facilities from './components/Facilities';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import RoomAllocation from './components/RoomAllocation';
import ImageSlider from './components/ImageSlider';
import './App.css';

function App() {
  const slides = [
    { url: 'http://localhost:3000/image-1.jpg', title: 'HostelFront' },
    { url: 'http://localhost:3000/image-2.jpg', title: 'AdminOffice' },
    { url: 'http://localhost:3000/image-3.jpg', title: 'Mess' },
  ];

  const roomImages = [
    { url: 'http://localhost:3000/image-6.jpeg', title: 'Room1' },
    { url: 'http://localhost:3000/image-7.jpeg', title: 'Room2' },
  ];

  const facilitiesImages = [
    { url: 'http://localhost:3000/image-8.webp', title: 'Room3' },
    { url: 'http://localhost:3000/image-9.jpeg', title: 'Room4' },
    { url: 'http://localhost:3000/image-10.jpg', title: 'Room5' },
    { url: 'http://localhost:3000/image-11.webp', title: 'Room6' },
    { url: 'http://localhost:3000/image-12.webp', title: 'Room7' },
    { url: 'http://localhost:3000/image-13.webp', title: 'Room8' },
  ];

  const containerStyles = {
    margin: '0 auto',
    width: '90%', // Adjusted width for responsiveness
    maxWidth: '1808px',
    height: '720px',
    objectFit: 'cover',
    objectPosition: '50% 50%',
  };

  const headingStyles = {
    textAlign: 'center',
    fontSize: '48px',
    letterSpacing: '0.02em',
    fontFamily: 'Bebas Neue',
    fontStyle: 'normal',
    color: '#333', // Adjusted color
    margin: '2rem 0', // Adjusted margin
  };

  const offWhiteBackground = {
    backgroundColor: '#f8f8f8', // Off-white background color
  };

  const dashStyles = {
    width:"15px",
    height:"5px",
    //margin: "2rem auto",
    borderBottom: "4px solid black",
    marginLeft: "auto", marginRight: "auto",
    marginTop: "0.5rem", marginBottom: "1rem" 
  }

  return (
    <div style={offWhiteBackground}> 
      {/* { <div>
        <Navbar/>
      </div>} */}
      
      <div>

        <div style={headingStyles}>
          <h2 className="text-black mb-2">ROYAL CARE HOSTEL</h2>
        </div>

        <div style={dashStyles}>

        </div>

      </div>
      

      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>

      <div>
        <AboutUs/>        
      </div>

      <div>
        <RoomAllocation roomImages={roomImages}/>
      </div>

      <div>
        <Facilities facilitiesImages={facilitiesImages}/>
      </div>

      <div>
        <Feedback />
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default App;

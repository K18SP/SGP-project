import React from 'react';
import '../components/Facilities.css';


const Facilities = ({ facilitiesImages }) => {

  const headingstyles = {
    textAlign: "center",
    fontSize: "48px",
    letterSpacing: "0.02em",
    fontFamily: 'Bebas Neue',
    fontStyle: "normal",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "8rem",
    justifyContent: "center"
  }

  const dashStyles = {
    width: "15px",
    height: "5px",
    borderBottom: "4px solid black",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "0.5rem",
    marginBottom: "5rem"
  }

  

  return (
    <div >
      <div style={headingstyles}>
        <h1>Facilities</h1>
        <div style={dashStyles}></div>
      </div>
      <div className='main-container'>
        <div className ='img-container'>
          <div className='grid'>

            <div className="heading-styles">
              <h1 className='text-styles'>Free Wifi</h1>
            </div>

            <div className='facimg-image1'>
              <img className='hihello' src={facilitiesImages[0].url} alt={facilitiesImages[0].title} /> 
            </div>
          </div>
          
          <div className='grid'>
            <div className="facimg-image1">
              <img className='hihello' src={facilitiesImages[1].url} alt={facilitiesImages[1].title} />            
            </div>
            <div className='heading-styles'>
              <h1 className="text-styles">Breakfast Included</h1>
            </div>
          </div>

          <div className='grid'>
            <div className="facimg-image1">
              <img className='hihello' src={facilitiesImages[2].url} alt={facilitiesImages[2].title} />            
            </div>
            <div className='heading-styles'>
              <h1 className="text-styles">24 Hour Reception</h1>
            </div>
          </div>

          <div className='grid'>
            <div className="facimg-image1">
              <img className='hihello' src={facilitiesImages[3].url} alt={facilitiesImages[3].title} />            
            </div>
            <div className='heading-styles'>
              <h1 className="text-styles">Self-Catering Facilities</h1>
            </div>
          </div>

          <div className='grid'>
            <div className="facimg-image1">
              <img className='hihello' src={facilitiesImages[4].url} alt={facilitiesImages[4].title} />            
            </div>
            <div className='heading-styles'>
              <h1 className="text-styles">Luggage Room & Safe</h1>
            </div>
          </div>

          <div className='grid'>
            <div className="facimg-image1">
              <img className='hihello' src={facilitiesImages[5].url} alt={facilitiesImages[5].title} />            
            </div>
            <div className='heading-styles'>
              <h1 className="text-styles">Laundry Facilities</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  )
}

export default Facilities;


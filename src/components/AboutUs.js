import React from 'react'
import {Helmet} from 'react-helmet';
import '../index.css'

const AboutUs = () => {

  const headingstyles = {
    "text-align": "center",
    //margin:"2rem auto",
    fontSize:"48px",
    "letter-spacing": "normal",
    "line-height": "normal",
    display: "flex", flexDirection: "column", alignItems: "center",
    marginTop:"18rem",
    letterSpacing:"0.02em",
    fontFamily: 'Bebas Neue',
    fontStyle: "normal",
  }

  const dashStyles = {
    width:"15px",
    height:"5px",
    //margin: "2rem auto",
    borderBottom: "4px solid black",
    marginLeft: "auto", marginRight: "auto",
    marginTop: "0.5rem", marginBottom: "1rem" 
  }

  const paraStyles = {
    width:"685px",
    left:"145px",
    "justify-self":"start",
    "align-self":"start",
    "text-align":"center",
    marginLeft:"25rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
  const paragraphStyles = {
    "text-align": "center",
    "justify-content":"center",
    fontSize:"16px",
    lineHeight:"1.7em",
    letterSpacing:"normal",
    fontFamily:'Open Sans',
    fontStyle:"normal",
    "margin-block-start": "1em"
  }

  return (
    <div>

      <div>
        <div style={headingstyles}>
          <h1>ABOUT OUR HOSTEL</h1>
        </div>

        <div style={dashStyles}>
          {/* For a dash line */}
        </div>
      </div>
      
      <div style={paraStyles}>
        <p style={paragraphStyles}>Welcome to "ROYAL CARE", where comfort meets affordability. 
          Nested in "Off Charusat University changa Valetva cross road, Changa, Gujarat 388421" , our hostel offers modern accommodations, top-notch amenities, 
          and a vibrant community atmosphere.With friendly staff and a commitment to exceptional service,
          we ensure a memorable stay for every guest.Experience the best of hospitality at "ROYAL CARE". 
        </p>
      </div>

    </div>
  )
}

export default AboutUs
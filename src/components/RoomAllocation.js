import React from 'react'
import './RoomAllocation.css'
import { useEffect, useState } from 'react';

const RoomAllocation = ({roomImages}) => {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const leftElement = document.querySelector('.leftstStyles');
      const rightElement = document.querySelector('.RightstStyles');
      
      if (leftElement && !isLeftVisible && isElementInViewport(leftElement)) {
        setIsLeftVisible(true);
      }
      
      if (rightElement && !isRightVisible && isElementInViewport(rightElement)) {
        setIsRightVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLeftVisible, isRightVisible]);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const headingstyles = {
    "text-align": "center",
    //margin:"2rem auto",
    fontSize:"48px",
    "letter-spacing": "normal",
    "line-height": "normal",
    display: "flex", flexDirection: "column", alignItems: "center",
    marginTop:"16rem",
    letterSpacing:"0.02em",
    fontFamily: 'Bebas Neue',
    fontStyle: "normal"
  }

  const dashStyles = {
    width:"15px",
    height:"5px",
    //margin: "2rem auto",
    borderBottom: "4px solid black",
    marginLeft: "auto", marginRight: "auto",
    marginTop: "0.5rem", marginBottom: "1rem" 
  }

  const sectionStyles = {
    "max-width": "1280px",
    display: "flex",
    "flex-direction": "row",
    gap: "2rem",
    padding: "0.6rem",
    "align-items": "center",
    margin:"0px 260px"
  }

  const SectionStyles = {
    "max-width": "1280px",
    display: "flex",
    "flex-direction": "row",
    gap: "2rem",
    padding: "0.6rem",
    "align-items": "center",
    margin:"0px 260px",
    marginTop:"7rem",
    marginBottom:"6rem"
  }

  const SsectionStyles = {
    "max-width": "1280px",
    display: "flex",
    "flex-direction": "row",
    gap: "2rem",
    padding: "0.6rem",
    "align-items": "center",
    margin:"0px 260px",
    
  }

  const paragraphStyles = {
    "font-size":"140px",
    color:"red",
    "letter-spacing":"normal",
    fontFamily: 'Bebas Neue',
    fontStyle: "normal"
  }

  const innerHeadingStyles = {
    fontSize: "42px",
    letterSpacing:"0.02em",
    fontFamily: 'Bebas Neue',
    fontStyle: "normal",

  }

  const DashStyles = {
    width:"15px",
    height:"5px",
    //margin: "2rem auto",
    borderBottom: "4px solid black",
    marginTop: "0.8rem", marginBottom: "2.8rem"
  }

  const ParagraphStyles = {
    "font-size":"1.1rem",
    width:"78%",
    fontFamily:'Open Sans',
    fontStyle:"normal",
  }


  return (
  <div>
    <div style={headingstyles} >
      <h1 >Types Of Rooms</h1>
      <div style={dashStyles}>{/**For the dash line*/}</div>
    </div>
    {/*For standard room */}
    <div> 
      <section style={sectionStyles}>
      <div className={`leftstStyles ${isLeftVisible ? 'animate' : ''}`}>
            <h3 style={paragraphStyles}>01</h3>
            <h2 style={innerHeadingStyles}>Standard Room</h2>
            <div style={DashStyles}>{/**For the dash line*/}</div>
            <p style={ParagraphStyles}>"Specious room with separate study table for each student.
            Specious storage cupboard. 24x7 internet facility with Wi-Fi." 
            </p>
            
            <h3 className='feesHeadingStyles'>Fees Structure</h3>
            <table>
                <tbody>
                  <tr>
                    <td className='header'>ROOMS</td>
                    <td className='header'>BOARDING</td>
                    <td className='header'>DINING</td>
                    <td className='header'>TOTAL FEES</td>
                  </tr>
                  <tr>
                    <td>STANDARD</td>
                    <td>39200/-</td>
                    <td>52500/-</td>
                    <td>91,700/-</td>
                  </tr>
                </tbody>
            </table>
        </div>

        <div className="rightstStyles">
          <div className="standardImageStyles">
              <img className="standardImage1Styles" src={roomImages[0].url} alt={roomImages[0].title} />
              <img className="standardImage2Styles" src={roomImages[1].url} alt={roomImages[1].title} />
          </div>
        </div>
      </section>
    </div>

    {/*For deluxe room */}
    <div> 
      <section style={SectionStyles}>

          <div className="LeftstStyles">
            <div className="standardImagestyles">
              <img className="standardImage4styles" src={roomImages[0].url} alt={roomImages[0].title} />
              <img className="standardImage5styles" src={roomImages[1].url} alt={roomImages[1].title} />
            </div>
          </div>

          <div className={`RightstStyles ${isRightVisible ? 'animate' : ''}`}>
            <h3 className='paraStyles'>02</h3>
            <h2 className='deluxeHeadingStyles'>Deluxe Room</h2>
            <p className='deluxeParagraphStyles'>Specious room with separate study table for each student. Specious storage cupboard. 24x7 internet facility with Wi-Fi. 
              Specious room with Air condition and Fridge facilities.
            </p>
            <h3 className='FeesHeadingStyles'>Fees Structure</h3>
            <table>
                <tbody>
                  <tr>
                    <td className='header'>ROOMS</td>
                    <td className='header'>BOARDING</td>
                    <td className='header'>DINING</td>
                    <td className='header'>TOTAL FEES</td>
                  </tr>
                  <tr>
                    <td>DELUXE</td>
                    <td>44800/-</td>
                    <td>52500/-</td>
                    <td>97,300/-</td>
                  </tr>
                </tbody>
            </table>
        </div>        
      </section>
    </div>

    {/*For super deluxe room */}
    <div> 
      <section style={SsectionStyles}>
        {/*For the left content*/}
        <div className={`leftstStyles ${isLeftVisible ? 'animate' : ''}`}>  
            <h3 style={paragraphStyles}>03</h3>
            <h2 style={innerHeadingStyles}> Super Deluxe Room</h2>
            <div style={DashStyles}></div>
            <p style={ParagraphStyles}>Specious room with Air condition and Fridge facilities. Storage Cupboard and 24x7 internet facility with Wi-Fi.
            </p>
            <h3 className='feesHeadingStyles'>Fees Structure</h3>
            <table>
                <tbody>
                  <tr>
                    <td className='header'>ROOMS</td>
                    <td className='header'>BOARDING</td>
                    <td className='header'>DINING</td>
                    <td className='header'>TOTAL FEES</td>
                  </tr>
                  <tr>
                    <td>SUPER DELUXE</td>
                    <td>50400/-</td>
                    <td>52500/-</td>
                    <td>102,900/-</td>
                  </tr>
                </tbody>
            </table>
        </div>

        {/*Right side content*/}
        <div className="rightstStyles">
        <div className="standardImageStyles">
              <img className="standardImage1Styles" src={roomImages[0].url} alt={roomImages[0].title} />
              <img className="standardImage2Styles" src={roomImages[1].url} alt={roomImages[1].title} />
          </div>
        </div>
      </section>
    </div>

  </div>
  )
}

export default RoomAllocation














/*
const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: " %",
};

const RoomAllocation = ({ slidesImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex === 0) ? slidesImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex === slidesImages.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
// 
//   useEffect(() => {
//     const intervalId = setInterval(goToNext, 3000); // Change slide every 3 seconds (adjust as needed)
//     return () => clearInterval(intervalId); // Cleanup interval on component unmount
//   }, [currentIndex, slidesImages]);


  return (
    <div>

      <div><h1>Types of Rooms</h1></div>

      <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>❰</div>
        <div onClick={goToNext} style={rightArrowStyles}>❱</div>
      </div>
      <div style={{ ...slideStyles, backgroundImage: `url(${slidesImages[currentIndex].images[0].url})` }}>
        <div>
          <img src={slidesImages[currentIndex].images[1].url} alt={slidesImages[currentIndex].images[1].alt} />
          <h2 className="">{slidesImages[currentIndex].titles[1]}</h2>
          <p>{slidesImages[currentIndex].descriptions[1]}</p>
        </div>
        <div>
          <img src={slidesImages[currentIndex].images[2].url} alt={slidesImages[currentIndex].images[2].alt} />
          <h2>{slidesImages[currentIndex].titles[2]}</h2>
          <p>{slidesImages[currentIndex].descriptions[2]}</p>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default RoomAllocation*/
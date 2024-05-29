import React, { useState, useEffect } from "react";

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
  height: "100%",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 3000); // Change slide every 3 seconds (adjust as needed)
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentIndex, slides]);

  return (
    <div style={sliderStyles}>
      <div>

        <div onClick={goToPrevious} style={leftArrowStyles}>❰</div>
        <div onClick={goToNext} style={rightArrowStyles}>❱</div>
      </div>
      <div style={{ ...slideStyles, backgroundImage: `url(${slides[currentIndex].url})` }}></div>
    </div>
  );
};

export default ImageSlider;




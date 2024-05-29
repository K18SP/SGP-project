import React, { useState } from 'react';
import Slider from 'react-slick';
import './ReviewSection.css'; // Import the CSS file for styling

const NextArrow = ({ onClick }) => (
  <div className="slick-arrow next" onClick={onClick}>
    <i className="fas fa-chevron-right"></i>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow prev" onClick={onClick}>
    <i className="fas fa-chevron-left"></i>
  </div>
);

const Feedback = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Vedant patel', rating: 4, comment: 'Great hostel, very clean and friendly staff!' },
    { id: 2, name: 'Jeet Patel', rating: 5, comment: 'Excellent location and comfortable beds.' },
    { id: 3, name: 'Moxesh Gandhi', rating: 3, comment: 'Average hostel, but could use some improvements.' },
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prevState => ({
      ...prevState,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = reviews.length + 1;
    setReviews(prevState => ([...prevState, { id: newId, ...newReview }]));
    setNewReview({ name: '', rating: 0, comment: '' });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div style={{ textAlign: "center", marginTop: '1rem' }}>
        <ul style={{ display: "inline-block" }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          height: "8px",
          backgroundColor: "#ccc",
          borderRadius: "5px",
        }}
      />
    ),
  };

  const dashStyles = {
    width: "15px",
    height: "5px",
    borderBottom: "4px solid black",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "0.5rem",
    marginBottom: "5rem"
  }

  const reviewsSec = {
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

  return (
    <div className="review-section">
      <h2 style={{...reviewsSec}}>Reviews</h2>
      <div style={dashStyles}></div>
      <div className="slider-container">
        <Slider {...settings}>
          {reviews.map(review => (
            <div key={review.id} className="review-item">
              <h3>{review.name}</h3>
              <p>Rating: {review.rating}/5</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="feedback-form">
        <h3>Add Your Review</h3>
        <form onSubmit={handleSubmit} className="review-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={newReview.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" name="rating" min="1" max="5" value={newReview.rating} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea id="comment" name="comment" value={newReview.comment} onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;

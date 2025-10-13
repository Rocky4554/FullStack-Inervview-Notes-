import React, { useState } from 'react';
import './StarRating.css'; // Assume basic CSS for stars

const StarRating = ({ totalStars = 5 }) => {
  // State 1: Stores the rating that has been clicked (locked in)
  const [selectedRating, setSelectedRating] = useState(0);

  // State 2: Stores the rating currently being hovered over (preview)
  const [hoverRating, setHoverRating] = useState(0);

  // Determine the rating to display. If hovering, show hoverRating; otherwise, show selectedRating.
  const displayRating = hoverRating || selectedRating;

  // Array of indices to map over (e.g., [1, 2, 3, 4, 5])
  const starIndices = [...Array(totalStars)].map((_, index) => index + 1);

  // --- Handlers ---

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    // When the mouse leaves the component, reset the hover state to 0.
    // The displayRating logic will then fall back to the selectedRating.
    setHoverRating(0);
  };

  const handleClick = (index) => {
    // Lock in the rating
    setSelectedRating(index);
    setHoverRating(0); // Clear hover state immediately after click
  };

  // --- Rendering ---

  return (
    <div className="star-rating" onMouseLeave={handleMouseLeave}>
      {starIndices.map((index) => {
        const isFilled = index <= displayRating;
        
        return (
          <span
            key={index}
            className={`star ${isFilled ? 'filled' : 'empty'}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onClick={() => handleClick(index)}
          >
            &#9733; {/* Unicode character for a star */}
          </span>
        );
      })}
      <p className="rating-text">
        {selectedRating === 0 ? 'Select a rating' : `You rated: ${selectedRating} / ${totalStars}`}
      </p>
    </div>
  );
};

export default StarRating;
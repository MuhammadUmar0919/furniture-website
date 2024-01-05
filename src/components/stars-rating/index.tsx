'use client'

// React Component (StarsRating.tsx)
import React, { useState } from 'react';
import './index.css';

interface RatingProps {
  id: number;
  name: string;
}

const StarRating: React.FC = () => {
  const [rating, setRating] = useState<number>(0);

  const handleRatingChange = (value: number): void => {
    setRating(value);
  };

  const ratings: RatingProps[] = [
    { id: 1, name: 'Terrible' },
    { id: 2, name: 'Bad' },
    { id: 3, name: 'OK' },
    { id: 4, name: 'Good' },
    { id: 5, name: 'Excellent' },
  ];

  return (
    <form className="rating">
      <div className="rating__stars">
        {ratings.map(({ id }) => (
          <React.Fragment key={id}>
            <input
              id={`rating-${id}`}
              className={`rating__input rating__input-${id}`}
              type="radio"
              name="rating"
              value={id}
              checked={rating === id}
              onChange={() => handleRatingChange(id)}
            />
            <label className="rating__label" htmlFor={`rating-${id}`}>
              {/* SVG code here */}
              <span className="rating__sr">{`${id} star${id !== 1 ? 's' : ''}—${ratings[id - 1].name}`}</span>
            </label>
          </React.Fragment>
        ))}
        {ratings.map(({ id, name }) => (
          <p key={id} className="rating__display" data-rating={id} hidden={rating !== id}>
            {name}
          </p>
        ))}
      </div>
    </form>
  );
};

export default StarRating;

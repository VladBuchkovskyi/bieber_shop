import React from 'react'
import './index.sass'

const Rating = ({ value, text }) => {
  const ratingValues = [
    { half: 0.5, full: 1 },
    { half: 1.5, full: 2 },
    { half: 2.5, full: 3 },
    { half: 3.5, full: 4 },
    { half: 4.5, full: 5 },
  ]

  return (
    <div className="rating">
      {ratingValues.map((val) => (
        <span key={val.full}>
          <i
            style={{ color: '#f8e825' }}
            className={
              value >= val.full
                ? 'fa-solid fa-star'
                : value >= val.half
                ? 'fa-solid fa-star-half-stroke'
                : 'fa-regular fa-star'
            }
          ></i>
        </span>
      ))}
      <span className="rating-reviews"> {text && text} </span>
    </div>
  )
}

export default Rating

import React from 'react'

export const Card = ({data}) => {

  const { name, locality, avgRating, costForTwo, cloudinaryImageId } = data || {};

  const CON_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

  return (
    <div className='card'>
      <img src={CON_URL + cloudinaryImageId} alt={name} />
      <h5>{name}</h5>
      <h5>Rating : {avgRating}</h5>
      <h5>Location : {locality}</h5>
      <h5>Cost For Two : {costForTwo}</h5>

    </div>
  )     
}

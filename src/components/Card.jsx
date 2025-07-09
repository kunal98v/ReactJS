import React from 'react'

export const Card = ({data}) => {

  const { name, locality, avgRating, costForTwo, cloudinaryImageId } = data || {};

  const CON_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

  return (
    <div className='w-45 h-80 m-3 shadow-xl hover:bg-gray-200'>
      <img className='w-45 h-45'  src={CON_URL + cloudinaryImageId} alt={name} />
      <h5 className='font-semibold'>{name}</h5>
      <h5>Rating : {avgRating}</h5>
      <h5>Location : {locality}</h5>
      <h5>Cost For Two : {costForTwo}</h5>

    </div>
  )     
}

import React from 'react'

export const Item = props => {
  const {plant} = props
  const {name, price, imageUrl} = plant
  const {plantQuantity, plantSubtotal} = plant.plant_order
  return (
    <div className="item">
      <div>
        <h1>{name}</h1>
        <img src={imageUrl} height="100" width="150" />
        <h3>cost: {price}</h3>
      </div>
      <div>
        <h2>in Cart: {plantQuantity}</h2>
        <h2>subtotal: ${plantSubtotal / 100}</h2>
      </div>
    </div>
  )
}

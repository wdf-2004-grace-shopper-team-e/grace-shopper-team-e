import React from 'react'
import {connect} from 'react-redux'

const OrderHistory = props => {
  return (
    <div>
      <ul>
        {props.user.id ? (
          <div>
            <h1>user name {props.user.firstName}</h1>
            {props.user.orders.map(order => {
              if (!order.isCart) {
                return (
                  <div key={order.id}>
                    <h2>Order Number {order.id}</h2>
                    <h3>Order Total ${order.totalCost / 100}</h3>
                    {order.OrderSummary.map(plant => {
                      return (
                        <div key={plant.id}>
                          <h4>Plant Name: {plant.name}</h4>
                          <h4>Qty: {plant.plant_order.plantQuantity}</h4>
                        </div>
                      )
                    })}
                  </div>
                )
              }
            })}
          </div>
        ) : (
          <h1>no user</h1>
        )}
      </ul>
    </div>
  )
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(OrderHistory)

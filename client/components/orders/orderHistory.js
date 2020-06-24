import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const OrderHistory = props => {
  return (
    <div className="orderhistory-page">
      <ul>
        {typeof props.user.id === 'number' ? (
          <div>
            <h1>
              Order History for {props.user.firstName} {props.user.lastName}
            </h1>
            {props.user.orders ? (
              props.user.orders.map(order => {
                if (!order.isCart) {
                  return (
                    <div key={order.id} className="order-details overlay">
                      <h2>Order ID {order.id}</h2>
                      <h3>Order Total ${order.totalCost / 100}</h3>
                      {order.OrderSummary ? (
                        order.OrderSummary.map(plant => {
                          return (
                            <div key={plant.id} className="order-summary">
                              <Link
                                to={location => ({
                                  ...location,
                                  pathname: '/plants/' + plant.id
                                })}
                              >
                                Plant Name: {plant.name}
                              </Link>
                              <h4>Qty: {plant.plant_order.plantQuantity}</h4>
                              <h4>Plant subtotal: ${plant.price / 100}</h4>
                            </div>
                          )
                        })
                      ) : (
                        <h1>No Summary</h1>
                      )}
                    </div>
                  )
                }
              })
            ) : (
              <h1>You have no orders.</h1>
            )}
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

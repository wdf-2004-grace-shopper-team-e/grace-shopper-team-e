import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {default as Item} from './item'
import {default as OrderForm} from './orderForm'
import {getItems} from '../../store/orderSummary'

export const CheckoutPage = props => {
  const {orderSummary} = props
  const order = JSON.parse(localStorage.getItem('currentOrder'))

  useEffect(() => {
    if (localStorage.getItem('currentOrder')) {
      props.getItems(order.id)
    }
  }, [])

  return (
    <div>
      <Link to="/plants">Continue Shopping</Link>
      <h1>Checkout Page</h1>
      <h1>
        Total Cost: ${orderSummary.reduce((sum, curPlant) => {
          return sum + curPlant.plant_order.plantSubtotal
        }, 0) / 100}
      </h1>
      <div>
        <OrderForm order={order} orderSummary={orderSummary} />
      </div>
      <div>
        {/* <h1>Order Summary</h1>
        {orderSummary.map(plant => (
          <Item key={plant.id} plant={plant} order={order} />
        ))} */}
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    orderSummary: state.orderSummary,
    order: state.order
  }
}

const mapDispatch = dispatch => {
  return {
    getItems: orderId => dispatch(getItems(orderId))
  }
}

export default connect(mapState, mapDispatch)(CheckoutPage)

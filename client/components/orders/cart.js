import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {default as Item} from './item'
import {getItems} from '../../store/orderSummary'

export const Cart = props => {
  const {orderSummary} = props
  const order = JSON.parse(localStorage.getItem('currentOrder'))

  useEffect(() => {
    if (localStorage.getItem('currentOrder')) {
      props.getItems(order.id)
    }
  }, [])

  return (
    <div className="order-summary">
      {orderSummary.map(plant => (
        <Item key={plant.id} plant={plant} order={order} />
      ))}
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

export default connect(mapState, mapDispatch)(Cart)

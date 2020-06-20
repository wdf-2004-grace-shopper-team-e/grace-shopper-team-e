import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Item} from './item'
import {getItems} from '../../store/orderSummary'

export const Cart = props => {
  const {orderSummary, order} = props

  useEffect(() => {
    if (localStorage.getItem('currentOrder')) {
      const currentOrder = JSON.parse(localStorage.getItem('currentOrder'))
      // console.log('currentOrder', currentOrder)
      // console.log('props', props)
      props.getItems(currentOrder.id)
    }
  }, [])

  return (
    <div className="order-summary">
      {orderSummary.map(plant => <Item key={plant.id} plant={plant} />)}
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

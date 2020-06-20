import React from 'react'
import {connect} from 'react-redux'
import Item from './item'
import {getOrder} from '../../store/orders'

const Cart = props => {
  const {orderSummary} = props

  // useEffect(() => {
  //   props.
  // })

  return (
    <div className="order-summary">
      {orderSummary.map(plant => <Item key={plant.id} plant={plant} />)}
    </div>
  )
}

const mapState = state => {
  return {
    orderSummary: state.orderSummary,
    currentOrder: state.currentOrder
  }
}

const mapDispatch = dispatch => {
  return {
    getOrder: orderId => dispatch(getOrder(orderId))
  }
}

export default connect(mapState)(Cart)

import React from 'react'
import {connect} from 'react-redux'
import Item from './item'

const Cart = props => {
  const {orderSummary} = props

  return (
    <div className="order-summary">
      {orderSummary.map(plant => <Item key={plant.id} plant={plant} />)}
    </div>
  )
}

const mapState = state => {
  return {
    orderSummary: state.orderSummary
  }
}

export default connect(mapState)(Cart)

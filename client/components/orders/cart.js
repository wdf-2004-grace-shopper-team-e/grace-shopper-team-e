import React from 'react'
import { connect } from 'react-redux'

const Cart = (props) => {
  const { orderSummary } = props
  // orderSummary will be an array of item objects
  return (
    <div>
      (
        orderSummary.map(item => (

        ))
      )
    </div>
  )
}

const mapState = state => {
  return {
    orderSummary: state.orderSummary
  }
}

const mapDispatch = dispatch => {
  return {

  }
}

export default connect(mapState, mapDispatch)(Cart)
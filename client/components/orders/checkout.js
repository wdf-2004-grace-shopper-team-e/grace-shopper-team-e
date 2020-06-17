import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const CheckoutPage = props => {
  return (
    <div>
      <h1>Checkout Page</h1>
      <div>
        Form Info
        <form>
          <div>Shipping Form</div>
          <div>Billing Info</div>
          <button type="submit" />
        </form>
      </div>
      <div>
        Sidebar w/ order information
        <div>Price Info</div>
        <div>Cart</div>
      </div>
    </div>
  )
}

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {}
}

export default connect(mapState, mapDispatch)(CheckoutPage)

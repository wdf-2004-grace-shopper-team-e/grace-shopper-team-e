import React, {useEffect} from 'react'
import {connect} from 'react-redux'

const OrderHistory = props => {
  const {user} = props
  const {orders} = user
  console.log('user', user)

  useEffect(() => {
    async function fetchMe() {
      await props.me()
    }
    console.log('user fetched', props.user)
  })

  return (
    <div>
      <ul>
        {/* {orders.map(order => {
          <div key={order.id}>
            <li>{order.id}</li>
          </div>
        })} */}
      </ul>
    </div>
  )
}

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    me: () => dispatch(me())
  }
}

export default connect(mapState, null)(OrderHistory)

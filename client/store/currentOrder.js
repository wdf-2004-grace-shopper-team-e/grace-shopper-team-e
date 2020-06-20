import axios from 'axios'

// action types
const UPDATE_ORDER = 'UPDATE_ORDER'

// action creators
const updateOrder = order => ({
  type: UPDATE_ORDER,
  order
})

// thunks
export const createOrder = () => {
  return async dispatch => {
    try {
      const order = await axios.post('/api/orders')
      dispatch(updateOrder(order.data))
      console.log('done creating order')
    } catch (error) {
      console.error(error)
    }
  }
}

export const getOrder = orderId => {
  return async dispatch => {
    try {
      const order = await axios.get(`/api/orders/${orderId}`)
      dispatch(updateOrder(order.data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const deleteOrder = event => {
  return async dispatch => {
    try {
      const orderId = event.target.value
      await axios.delete(`/api/orders/${orderId}`)
      dispatch(updateOrder({}))
    } catch (error) {
      console.error(error)
    }
  }
}

export const editOrder = event => {
  return async dispatch => {
    try {
      const {orderId, isCart, totalCost} = event.target
      const order = await axios.put(`/api/orders/${orderId}`, {
        isCart,
        totalCost
      })
      dispatch(updateOrder(order.data))
    } catch (error) {
      console.error(error)
    }
  }
}

// initial state
const currentOrder = {}

// reducer
export default (state = currentOrder, action) => {
  switch (action.type) {
    case UPDATE_ORDER:
      return action.order
    default:
      return state
  }
}

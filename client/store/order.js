import axios from 'axios'

// action types
const SUBMIT_ORDER = 'SUBMIT_ORDER'

// action creators
const submitOrder = (order) => ({
  type: SUBMIT_ORDER,
  order
})

// thunks

// initial state
const order = {}

// reducer
export default function(state = order, action) {
  switch (action.type) {
    // SUBMIT_ORDER
    default:
      return state
  }
}
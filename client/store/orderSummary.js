import axios from 'axios'

// action types
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'
const SUBMIT_ORDER = 'SUBMIT_ORDER'

// action creators
const addItem = (item) => ({
  type: ADD_ITEM,
  item
})
const removeItem = (item) => ({
  type: REMOVE_ITEM,
  item
})
const updateItem = (item) => ({
  type: UPDATE_ITEM,
  item
})
const submitOrder = (order) => ({
  type: SUBMIT_ORDER,
  order
})

// thunks

// initial state
const orderSummary = {}

// reducer
export default function (state = order, action) {
  switch (action.type) {
    // ADD_ITEM
    // REMOVE_ITEM
    // UPDATE_ITEM
    // SUBMIT_ORDER
    default:
      return state
  }
}
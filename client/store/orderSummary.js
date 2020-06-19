import axios from 'axios'

// action types
const GET_ITEMS = 'GET_ITEMS'
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'
const SUBMIT_ORDER = 'SUBMIT_ORDER'

// action creators
const getItems = items => ({
  type: GET_ITEMS,
  items
})
const addItem = items => ({
  type: ADD_ITEM,
  items
})
const removeItem = items => ({
  type: REMOVE_ITEM,
  items
})
const updateItem = items => ({
  type: UPDATE_ITEM,
  items
})
const submitOrder = order => ({
  type: SUBMIT_ORDER,
  order
})

// thunks
export const fetchItems = orderId => {
  return async dispatch => {
    try {
      const plants = await axios.get(`/api/ordersummary/${orderId}/plants`)
      dispatch(getItems(plants.data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const thunkAddItem = event => {
  return async dispatch => {
    try {
      const {orderId, plantId} = event.target
      const plants = await axios.post(
        `/api/ordersummary/${orderId}/add/${plantId}`
      )
      dispatch(addItem(plants.data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const thunkRemoveItem = event => {
  return async dispatch => {
    try {
      const {orderId, plantId} = event.target
      const plants = await axios.post(
        `/api/ordersummary/${orderId}/remove/${plantId}`
      )
      dispatch(removeItem(plants.data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const thunkUpdateItem = event => {
  return async dispatch => {
    try {
      const {orderId, plantId, value} = event.target
      const plants = await axios.post(
        `/api/ordersummary/${orderId}/add/${plantId}/${value}`
      )
      dispatch(updateItem(plants.data))
    } catch (error) {
      console.error(error)
    }
  }
}

// initial state
const orderSummary = []

// reducer
export default function(state = orderSummary, action) {
  switch (action.type) {
    case GET_ITEMS:
      return action.items
    case ADD_ITEM:
      return action.items
    case REMOVE_ITEM:
      return action.items
    case UPDATE_ITEM:
      return action.items
    // SUBMIT_ORDER
    default:
      return state
  }
}

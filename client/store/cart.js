import axios from 'axios'

// action types
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'

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

// thunks

// initial state
const cart = []

// reducer
export default function(state = cart, action) {
  switch (action.type) {
    // ADD_ITEM
    // REMOVE_ITEM
    // UPDATE_ITEM
    default:
      return state
  }
}
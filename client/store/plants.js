import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PLANTS = 'GET_PLANTS'

/**
 * INITIAL STATE
 */
const initialState = {
  plants: []
}

/**
 * ACTION CREATORS
 */
const getPlants = plants => ({
  type: GET_PLANTS,
  plants
})

/**
 * THUNK CREATORS
 */
export const fetchPlants = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/plants')
      const plants = getPlants(res.data)
      dispatch(plants)
    } catch (error) {
      console.error(error)
    }
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PLANTS:
      return {...state, plants: action.plants}
    default:
      return state
  }
}

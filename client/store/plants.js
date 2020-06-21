import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PLANTS = 'GET_PLANTS'
const ADD_PLANTS = 'ADD_PLANTS'

/**
 * ACTION CREATORS
 */
const getPlants = plants => ({
  type: GET_PLANTS,
  plants
})

const addPlant = plant => ({
  type: ADD_PLANTS,
  plant
})

/**
 * THUNK CREATORS
 */
export const setPlant = plant => {
  return async dispatch => {
    try {
      const res = await axios.post('/api/plants/', plant)
      const newPlant = addPlant(res.data)
      dispatch(newPlant)
    } catch (error) {
      console.log(error)
    }
  }
}
export const fetchPlants = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/api/plants')
      const plants = getPlants(res.data)
      dispatch(plants)
    } catch (error) {
      console.error(error)
    }
  }
}
/**
 * INITIAL STATE
 */
const initialState = []

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PLANTS:
      return action.plants
    case ADD_PLANTS:
      return [...state, action.plant]
    default:
      return state
  }
}

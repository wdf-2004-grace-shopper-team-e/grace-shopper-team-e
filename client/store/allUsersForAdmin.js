import axios from 'axios'

const GET_USERS = 'GET_USERS'

const getUsers = users => ({type: GET_USERS, users})

export const fetchUsers = () => async dispatch => {
  try {
    const res = await axios.get('/api/users')
    const users = getUsers(res.data)
    dispatch(users)
  } catch (error) {
    console.error(error)
  }
}

const AllUsers = []

export default function(state = AllUsers, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}

// import axios from 'axios'

// export const FETCH_USERS = 'FETCH_USERS'

// const defaultUser = {}

// const fetchedUsers = function(users) {
//   return {
//     type: FETCH_USERS,
//     users
//   }
// }

// export const fetchUsersThunk = () => async dispatch => {
//   try {
//     const res = await axios.get('/api/users')
//     dispatch(fetchedUsers(res.data))
//   } catch (error) {
//     console.error(error)
//   }
// }

// export default function(state = defaultUser, action) {
//   console.log('this action', action)
//   switch (action.type) {
//     case FETCH_USERS:
//       return {...state, users: action.users}
//     default:
//       return state
//   }
// }

import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getAllUsers} from '../../store/user'

/**
  All users COMPONENT for admin
 */

export class AllUsers extends React.Component {
  async componentDidMount() {
    await this.props.getAllUsers()
  }

  render() {
    let users = this.props.users
    return (
      <div>
        <h3>All Users</h3>
        {users ? (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <Link key={user.id} to={`/users/${user.id}`}>
                  <h2> {user.id} </h2>
                </Link>
                <img src={user.imgUrl} height="175" width="175" />
                <p>
                  User: {user.firstName} {user.lastName}
                </p>
                <p>User Cart: {user.cartId}</p>
                <p>Email: {user.email}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h2>No One Has Signed up Yet</h2>
        )}
      </div>
    )
  }
}

const mapState = state => {
  console.log('this is user state', state)
  return {
    users: state.user.users
  }
}

const mapDispatch = dispatch => {
  return {
    getAllUsers: () => {
      dispatch(getAllUsers())
    }
  }
}

export default connect(mapState, mapDispatch)(AllUsers)

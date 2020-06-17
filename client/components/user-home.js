import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateUserThunk} from '../store/user'

/**
 * COMPONENT
 */
export class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      firstName: `${this.props.firstName}`,
      lastName: `${this.props.lastName}`,
      email: `${this.props.email}`,
      id: `${this.props.id}`,
      imgUrl: `${this.props.imgUrl}`
    })
    this.handleLogin()
  }

  async handleLogin() {
    const ls = window.localStorage
    // In progress
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    const userId = this.props.id
    event.preventDefault()
    this.props.updateUser(userId, this.state)
  }

  render() {
    return <div />
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    imgUrl: state.user.imgUrl,
    googleId: state.user.googleId,
    id: state.user.id,
    isAdmin: state.user.isAdmin
  }
}

const mapDispatchToProps = dispatch => ({
  updateUser: (id, update) => dispatch(updateUserThunk(id, update))
})

export default connect(mapState, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

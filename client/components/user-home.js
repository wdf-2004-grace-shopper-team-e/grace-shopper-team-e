import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {UserNav} from './user-nav'
import {updateUserThunk} from '../store/user'
import {getOrder} from '../store/orders'

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
    const guestCart = JSON.parse(ls.getItem('currentOrder'))
    await this.props.getOrder(this.props.cartId)
    // const update = {this.props.cartId: this.props.orderId}
    // updateUserThunk(id, update)

    if (guestCart) {
      const loggedUserCart = this.props.mergeCarts({
        guestCart,
        userCart: this.props.order
      })
      ls.setItem('currentOrder', JSON.stringify(loggedUserCart))
      console.log('guest cart: ', guestCart)
      console.log('user cart: ', this.props.userCart)
    } else {
      console.log('no guest cart found')
    }
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
    const {firstName, imgUrl, isAdmin} = this.props // add googleId, email
    console.log('user props', this.props)
    return (
      <div>
        <div>
          <UserNav isAdmin={isAdmin} />
          <div>
            <h3>Welcome Back {firstName}!</h3>
            <img src={imgUrl} height="175" width="175" />
            <div>
              <div>
                {imgUrl ? (
                  <img src={imgUrl} />
                ) : (
                  <img src="../../public/images/defaultUser.jpg" />
                )}
              </div>
              <div>
                <div>
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      <div>
                        <input
                          type="text"
                          name="firstName"
                          onChange={this.handleChange}
                          value={this.state.firstName}
                          className="validate"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="lastName"
                          onChange={this.handleChange}
                          value={this.state.lastName}
                          className="validate"
                        />
                      </div>
                    </div>
                    <button type="submit" name="action">
                      Update Changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
    isAdmin: state.user.isAdmin,
    cartId: state.user.cartId,
    order: state.order
  }
}

const mapDispatchToProps = dispatch => ({
  updateUser: (id, update) => dispatch(updateUserThunk(id, update)),
  getOrder: orderId => dispatch(getOrder(orderId))
})

export default connect(mapState, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

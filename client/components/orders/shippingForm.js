import React from 'react'
import {connect} from 'react-redux'

class shippingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shippingFirstName: '',
      shippingLastName: '',
      shippingAddress: '',
      shippingCity: '',
      shippingState: '',
      shippingZipCode: ''
    }
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleAddress = this.handleFuelLevel.bind(this)
    this.handleCity = this.handleCity.bind(this)
    this.handleState = this.handleState.bind(this)
    this.handleZipCode = this.handleZipCode.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFirstName(event) {
    this.setState({shippingFirstName: event.target.value})
  }

  handleLastName(event) {
    this.setState({shippingLastName: event.target.value})
  }

  handleAddress(event) {
    this.setState({shippingAddress: event.target.value})
  }

  handleCity(event) {
    this.setState({shippingCity: event.target.value})
  }

  handleState(event) {
    this.setState({shippingState: event.target.value})
  }

  handleZipCode(event) {
    this.setState({shippingZipCode: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    // if (this.props.getAddRobot) this.props.getAddRobot(event)
    // else if (this.props.putEditRobot) this.props.putEditRobot(event)

    this.setState({
      shippingFirstName: '',
      shippingLastName: '',
      shippingAddress: '',
      shippingCity: '',
      shippingState: '',
      shippingZipCode: ''
    })
  }

  render() {
    return (
      <div className="form-element">
        <form id={this.props.orderId} onSubmit={this.handleSubmit}>
          <div>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                name="shippingFirstName"
                onChange={this.handleFirstName}
                value={this.state.shippingFirstName}
                required
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                name="shippingLastName"
                onChange={this.handleLastName}
                value={this.state.shippingLastName}
                required
              />
            </div>
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="shippingFirstName"
              onChange={this.handleFirstName}
              value={this.state.robotName}
              required
            />
          </div>
          <div>
            <div>
              <label>City:</label>
              <input
                type="text"
                name="shippingFirstName"
                onChange={this.handleFirstName}
                value={this.state.robotName}
                required
              />
            </div>
            <div>
              <label>State:</label>
              <input
                type="text"
                name="shippingFirstName"
                onChange={this.handleFirstName}
                value={this.state.robotName}
                required
              />
            </div>
            <div>
              <label>Zip Code:</label>
              <input
                type="text"
                name="shippingFirstName"
                onChange={this.handleFirstName}
                value={this.state.robotName}
                required
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {}
}

export default shippingForm

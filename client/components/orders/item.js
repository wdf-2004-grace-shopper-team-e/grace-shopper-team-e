import React from 'react'
import {connect} from 'react-redux'
import {deleteRemoveItem, putEditItem} from '../../store/orderSummary'

export class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updateQuantity: '1'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRemoveItem = this.handleRemoveItem.bind(this)
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  async handleSubmit(event) {
    event.preventDefault()
    await this.props.putEditItem(
      event,
      this.props.order.id,
      this.props.plant.id
    )
  }
  handleRemoveItem = () => {
    this.props.deleteRemoveItem(this.props.order.id, this.props.plant.id)
  }

  render() {
    const {plant} = this.props
    const {name, price, imageUrl, stock} = plant
    const {plantQuantity, plantSubtotal} = plant.plant_order
    return (
      <div className="item">
        <div>
          <h1>{name}</h1>
          <img src={imageUrl} height="100" width="150" />
          <h3>price: ${price / 100}</h3>
        </div>
        <div>
          <h2>in Cart: {plantQuantity}</h2>
          <h2>subtotal: ${plantSubtotal / 100}</h2>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              name="updateQuantity"
              type="number"
              value={this.state.updateQuantity}
              min="1"
              max={stock}
              onChange={this.handleChange}
              required
            />
            <button disabled={!stock} type="submit">
              Update Quantity
            </button>
          </form>
        </div>
        <div>
          <button type="button" onClick={this.handleRemoveItem}>
            Remove from Cart
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    deleteRemoveItem: (orderId, plantId) => {
      dispatch(deleteRemoveItem(orderId, plantId))
    },
    putEditItem: (event, orderId, plantId) => {
      dispatch(putEditItem(event, orderId, plantId))
    }
  }
}

export default connect(null, mapDispatch)(Item)

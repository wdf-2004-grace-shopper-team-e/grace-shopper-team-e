import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchPlant} from '../../store/singlePlant'
import {postAddItem} from '../../store/orderSummary'
import {createOrder} from '../../store/orders'

/**
 * Plant COMPONENT
 */
export class Plant extends React.Component {
  constructor() {
    super()
    this.state = {
      quantityOrdered: '1'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    const id = this.props.match.params.plantId
    this.props.getPlant(id)
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  async handleSubmit(event) {
    event.preventDefault()
    event.persist()
    if (!localStorage.getItem('currentOrder')) {
      await this.props.createOrder()
      localStorage.setItem('currentOrder', JSON.stringify(this.props.order))
    }
    const currentOrder = JSON.parse(localStorage.getItem('currentOrder'))
    const plantId = this.props.plant.id

    await this.props.postAddItem(event, currentOrder.id, plantId)
  }
  getPrice = priceInPennies => {
    let dollars = priceInPennies / 100
    dollars = dollars.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
    return dollars
  }

  render() {
    const {plant} = this.props

    return (
      <div className="plant">
        <div>
          <h1>{plant.name}</h1>
          <img src={plant.imageUrl} height="100" width="150" />
        </div>
        <div>
          <h2>Maintenance</h2>
          <p>Condition: {plant.livingCondition}</p>
          <p>Season: {plant.season}</p>
        </div>
        <div style={{backgroundColor: 'lightblue'}}>
          <p>Price: {this.getPrice(plant.price)} </p>
          <p>Current Stock: {plant.stock}</p>
          <form onSubmit={this.handleSubmit}>
            <input
              name="quantityOrdered"
              type="number"
              value={this.state.quantityOrdered}
              min="1"
              max={plant.stock}
              onChange={this.handleChange}
              required
            />
            <button disabled={!plant.stock} type="submit">
              Add to Cart
            </button>
          </form>
        </div>
        <div>
          <h2>Plant Overview</h2>
          <p>{plant.description}</p>
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
    plant: state.singlePlant, //get plant from redux store
    order: state.order
  }
}
const mapDispatch = dispatch => {
  return {
    getPlant: id => dispatch(fetchPlant(id)),
    createOrder: () => dispatch(createOrder()),
    postAddItem: (event, orderId, plantId) =>
      dispatch(postAddItem(event, orderId, plantId))
  }
}

export default connect(mapState, mapDispatch)(Plant)

/**
 * PROP TYPES
 */
Plant.propTypes = {
  plant: PropTypes.object
}

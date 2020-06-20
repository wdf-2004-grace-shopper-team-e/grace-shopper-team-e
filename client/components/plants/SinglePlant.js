import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchPlant} from '../../store/singlePlant'
import {postAddItem, putEditItem} from '../../store/orderSummary'
import {createOrder, getOrder} from '../../store/currentOrder'

/**
 * Plant COMPONENT
 */
export class Plant extends React.Component {
  constructor() {
    super()
    this.state = {
      quantityOrdered: '1',
      currentOrder: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    const id = this.props.match.params.plantId
    this.props.getPlant(id)
    if (this.props.currentOrder === {}) {
      this.props.createOrder()
    }
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  async handleSubmit(event) {
    event.preventDefault()
    event.persist()
    if (this.props.currentOrder === {}) {
      await this.props.createOrder()
      // await this.props.getOrder(this.props.currentOrder)
      const {id} = this.props.currentOrder
      const plantId = this.props.plant.id

      await this.props.postAddItem(event, id, plantId)
    }
    // else {
    //   const {orderId} = this.props.currentOrder
    //   this.props.putEditItem(event)
    // }
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
    const {currentOrder} = this.props

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
          <form
            plantid={plant.id}
            orderid={currentOrder.id}
            onSubmit={this.handleSubmit}
          >
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
    currentOrder: state.currentOrder
  }
}
const mapDispatch = dispatch => {
  return {
    getPlant: id => dispatch(fetchPlant(id)),
    createOrder: () => dispatch(createOrder()),
    postAddItem: (event, orderId, plantId) =>
      dispatch(postAddItem(event, orderId, plantId)),
    putEditItem: event => dispatch(putEditItem(event))
  }
}

export default connect(mapState, mapDispatch)(Plant)

/**
 * PROP TYPES
 */
Plant.propTypes = {
  plant: PropTypes.object
}

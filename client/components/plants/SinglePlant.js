import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchPlant} from '../../store/singlePlant'

/**
 * Plant COMPONENT
 */
export class Plant extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.plantId
    this.props.getPlant(id)
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
          <img src={plant.imgUrl} height="100" width="150" />
        </div>
        <div>
          <h2>Maintenance</h2>
          <p>Condition: {plant.livingCondition}</p>
          <p>Season: {plant.season}</p>
        </div>
        <div style={{backgroundColor: 'lightblue'}}>
          <p>Price: {this.getPrice(plant.price)} </p>
          <p>Current Stock: {plant.stock}</p>
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
    plant: state.singlePlant //get plant from redux store
  }
}
const mapDispatch = dispatch => {
  return {
    getPlant: id => dispatch(fetchPlant(id))
  }
}

export default connect(mapState, mapDispatch)(Plant)

/**
 * PROP TYPES
 */
Plant.propTypes = {
  plant: PropTypes.object
}

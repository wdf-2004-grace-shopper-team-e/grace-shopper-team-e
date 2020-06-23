import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {
  fetchPlants,
  filterByCondition,
  filterBySeason,
  deletePlant
} from '../../store/plants'

/**
 * Plants COMPONENT
 */

export class Plants extends React.Component {
  componentDidMount() {
    this.props.getPlants()
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
    const {plants, isAdmin, isLoggedIn} = this.props

    return (
      <div className="plants-list">
        {isAdmin && isLoggedIn && <Link to="/addplant">Add plant</Link>}

        {plants.map(plant => (
          <Link to={`/plants/${plant.id}`} key={plant.id}>
            <div>
              <h1>{plant.name}</h1>
              <img src={plant.imageUrl} height="175" width="175" />
              {isAdmin &&
                isLoggedIn && (
                  <Link to="/plants">
                    <button
                      type="button"
                      onClick={() => this.props.removePlant(plant.id)}
                    >
                      Remove Plant
                    </button>
                  </Link>
                )}
            </div>
          </Link>
        ))}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    plants: state.plants, //get from redux store
    isAdmin: state.user.isAdmin,
    isLoggedIn: !!state.user.id
  }
}
const mapDispatch = dispatch => {
  return {
    getPlants: () => dispatch(fetchPlants()),
    filterByCondition: condition => dispatch(filterByCondition(condition)),
    filterBySeason: season => dispatch(filterBySeason(season)),
    removePlant: id => dispatch(deletePlant(id))
  }
}

export default connect(mapState, mapDispatch)(Plants)

/**
 * PROP TYPES
 */
Plants.propTypes = {
  plants: PropTypes.array,
  isAdmin: PropTypes.bool,
  isLoggedIn: PropTypes.bool
}

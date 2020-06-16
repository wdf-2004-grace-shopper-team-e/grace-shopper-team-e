import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * Plants COMPONENT
 */
export const Plants = props => {
  const {plants} = props

  return (
    <div className="plants-list">
      {plants.map(plant => (
        <div key={plant.id}>
          <h1>{plant.name}</h1>
          <img src={plant.imageUrl} height="100" width="150" />
        </div>
      ))}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    plants: [] || state.plants //get from redux store
  }
}

export default connect(mapState)(Plants)

/**
 * PROP TYPES
 */
Plants.propTypes = {
  plants: PropTypes.array
}

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

  render() {
    const {plant} = this.props
    return <div className="plant" />
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

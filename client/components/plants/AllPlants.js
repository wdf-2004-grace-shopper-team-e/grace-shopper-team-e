import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchPlants} from '../../store/plants'
/**
 * Plants COMPONENT
 */
// export const Plants = props => {
//   const {plants} = props

//   return (
//     <div className="plants-list">
//       {plants.map(plant => (
//         <Link to={`/plants/${plant.id}`} key={plant.id}>
//           <div>
//             <h1>{plant.name}</h1>
//             <img src={plant.imageUrl} height="100" width="150" />
//           </div>
//         </Link>
//       ))}
//     </div>
//   )
// }
export class Plants extends React.Component {
  componentDidMount() {
    this.props.getPlants()
  }

  render() {
    const {plants} = this.props
    return (
      <div className="plants-list">
        {plants.map(plant => (
          <Link to={`/plants/${plant.id}`} key={plant.id}>
            <div>
              <h1>{plant.name}</h1>
              <img src={plant.imgUrl} height="100" width="150" />
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
    plants: state.plants //get from redux store
  }
}
const mapDispatch = dispatch => {
  return {
    getPlants: () => dispatch(fetchPlants())
  }
}

export default connect(mapState, mapDispatch)(Plants)

/**
 * PROP TYPES
 */
Plants.propTypes = {
  plants: PropTypes.array
}

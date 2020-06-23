import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchPlants} from '../../store/plants'

// !!!!!!!!! EVERYTHING COMMENTED OUT IS FROM MATERIAL UI AND IS STYLING ONLY. WHEN MERGING IF A CONFLICT ARISES YOU CAN DELETE.
// import Album from '../../materialUI/Album'
// import AppBar from '@material-ui/core/AppBar'
// import Button from '@material-ui/core/Button'
// // import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import Grid from '@material-ui/core/Grid'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
// import {makeStyles} from '@material-ui/core/styles'
// import Container from '@material-ui/core/Container'
// // import Link from '@material-ui/core/Link';

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
    const {plants} = this.props

    return (
      <div>
        {/* <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Flowers For The Soul
            </Typography>
          </Toolbar>
        </AppBar> */}

        {/* <Album props={plants} /> */}
        <div className="plants-list">
          <Link to="/addplant">Add plant</Link>

          {plants.map(plant => (
            <Link to={`/plants/${plant.id}`} key={plant.id}>
              <div>
                <h1>{plant.name}</h1>
                <img src={plant.imageUrl} height="175" width="175" />
              </div>
            </Link>
          ))}
          {/* Footer */}
          {/* <footer>
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              component="p"
            >
              Contact Us
            </Typography>
          </footer> */}
          {/* End footer */}
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

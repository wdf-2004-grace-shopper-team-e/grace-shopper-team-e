import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchPlants} from '../../store/plants'
import Album from '../../materialUI/Album'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// import Link from '@material-ui/core/Link';

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
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Flowers For The Soul
            </Typography>
          </Toolbar>
        </AppBar>

        <Album props={plants} />
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
          <footer>
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
          </footer>
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

//  <React.Fragment>

//       <main>
//         {/* Hero unit */}
//         <div className={classes.heroContent}>
//           <Container maxWidth="sm">
//             <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
//               Plantagram
//             </Typography>
//             <Typography variant="h5" align="center" color="textSecondary" paragraph>
//               All of our exotic plants have been hand-picked by our team of botanists to bring your home warmth and joy. Scroll down to meet your new photosynthetic friend!
//             </Typography>
//             <div className={classes.heroButtons}>
//               <Grid container spacing={2} justify="center">
//                 <Grid item>
//                   <Button variant="contained" color="primary">
//                     Shop All Plants
//                   </Button>
//                 </Grid>
//                 <Grid item>
//                   <Button variant="outlined" color="primary">
//                     View Your Cart
//                   </Button>
//                 </Grid>
//               </Grid>
//             </div>
//           </Container>
//         </div>
//         <Container className={classes.cardGrid} maxWidth="md">
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card className={classes.card}>
//                   <CardMedia
//                     className={classes.cardMedia}
//                     image="https://source.unsplash.com/random"
//                     title="Image title"
//                   />
//                   <CardContent className={classes.cardContent}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Heading
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe the content.
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small" color="primary">
//                       View
//                     </Button>
//                     <Button size="small" color="primary">
//                       Edit
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//       {/* Footer */}
//       <footer className={classes.footer}>
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
//           Something here to give the footer a purpose!
//         </Typography>
//         <Copyright />
//       </footer>
//       {/* End footer */}
//     </React.Fragment>

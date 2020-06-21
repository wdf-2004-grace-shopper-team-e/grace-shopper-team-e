import React from 'react'
import {connect} from 'react-redux'

class PlantForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: 0,
      description: '',
      imageUrl: '',
      stock: 0,
      livingCondition: 'indoor',
      season: 'This plant is happy all year long'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit = () => {}
  render() {
    return (
      <form>
        <label htmlFor="name">Plant Name:</label>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Plant Name:"
          required
        />
        <label htmlFor="price">Plant Price:</label>
        <input
          name="price"
          type="number"
          value={this.state.price}
          onChange={this.handleChange}
          placeholder="Plant Price"
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={this.state.description}
          placeholder="Description"
          onChange={this.handleChange}
        />
        <label htmlFor="stock">Plant Stock:</label>
        <input
          name="stock"
          type="number"
          value={this.state.stock}
          onChange={this.handleChange}
          placeholder="Plant Stock"
          required
        />
        <label htmlFor="imageUrl">Plant Image URL:</label>
        <input
          name="imageUrl"
          type="text"
          value={this.state.imageUrl}
          onChange={this.handleChange}
          placeholder="Plant Image URL:"
          required
        />
        <label>
          Pick the living condition:
          <select
            value={this.state.livingCondition}
            onChange={this.handleChange}
            name="livingCondition"
          >
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
            <option value="shade">Shade</option>
            <option value="sun">Sun</option>x
            <option value="low light">Low light</option>
            <option value="Just Add Water">Just Add Water</option>
          </select>
        </label>
        <label>
          Pick the Season:
          <select
            value={this.state.season}
            onChange={this.handleChange}
            name="season"
          >
            <option value="This plant is happy all year long">
              This plant is happy all year long
            </option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>x
            <option value="Fall">Fall</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapDispatch = dispatch => {
  return {}
}

export default connect(null, mapDispatch)(PlantForm)

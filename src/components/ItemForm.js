import React, { Component } from 'react'
import { connect } from 'react-redux'
import addItem from '../actions/index'

class ItemForm extends Component {
  handleSubmit(event) {
    event.preventDefault()

    const { addItem } = this.props
    let name = this.refs.name.value
    let image = this.refs.image.value
    let description = this.refs.description.value
    let price = this.refs.price.value
    let available = this.refs.available.value

    this.refs.itemForm.reset()

    const item = {
      name,
      image,
      description,
      price,
      available
    }
    addItem(item)
  }

  render() {
    return (
      <form ref="itemForm" onSubmit={ this.handleSubmit.bind(this) }>
        <input type="text" ref="name" name="name" placeholder="Item Name" />
        <input type="text" ref="price" name="price" placeholder="Price" />
        <input type="text" ref="description" name="description" placeholder="Description" />
        <input type="text" ref="image" name="image" placeholder="Image" />
        <select ref="available">
          <option value={ true }>Fresh</option>
          <option value={ false }>Sold Out</option>
        </select>
        <input type="submit" />
      </form>
    )
  }
}

export default connect(null, { addItem })(ItemForm)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import addItem from '../actions/index'

class Inventory extends Component {


  handleSubmit(event) {
    event.preventDefault()

    const { addItem } = this.props
    let name = this.refs.name.value
    let price = this.refs.price.value
    this.refs.itemForm.reset()

    const item = {
      name,
      price
    }
    addItem(item)
  }

  render() {
    return (
      <div className="app-list-item">
        <h3>Inventory</h3>
        { this.props.items.map((item, i) => <Item { ...item } key={ i } /> )}

        <form ref="itemForm" onSubmit={ this.handleSubmit.bind(this) }>
          <input type="text" ref="name" name="name" placeholder="Item Name" />
          <input type="text" ref="price" name="price" placeholder="Price" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps, { addItem })(Inventory)

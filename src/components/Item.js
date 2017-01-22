import React, { Component } from 'react'
import { connect } from 'react-redux'
import deleteItem from '../actions/delete-item'

class Item extends Component {
  deleteMe() {
    const { name, deleteItem } = this.props
    deleteItem(name)
  }

  render() {
    const { name, image, description, price, available } = this.props

    return (
      <div className="inventory-item">
        <h6 className="subtitle">{ name }</h6>
        <p>{ description}</p>
        <p>${ price }</p>
        <button className="button hvr-bounce-to-bottom" onClick={ this.deleteMe.bind(this) }>Remove item</button>
      </div>
    )
  }
}

export default connect(null, { deleteItem })(Item)

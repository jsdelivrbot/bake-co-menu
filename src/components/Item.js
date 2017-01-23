import React, { Component } from 'react'
import { connect } from 'react-redux'
import deleteItem from '../actions/delete-item'
import addToOrder from '../actions/add-to-order'

class Item extends Component {
  addToOrder() {
    const { name, addToOrder } = this.props
    addToOrder(name)
  }

  deleteMe() {
    const { name, deleteItem } = this.props
    deleteItem(name)
  }

  render() {
    const { name, image, description, price, available, order } = this.props
    var isAvailable = (this.props.available === true )
    var buttonText = (isAvailable ? 'Add To Order' : 'Sold Out!');

    return (
      <div className="item">
        <h6 className="subtitle">{ name }</h6>
        <img src={ image } className="menu-item menu-image" />
        <p>{ description }</p>
        <p>$ { price }</p>
        {/* <p>${ (price).toFixed(2) }</p> */}
        <button className="button hvr-bounce-to-bottom inv-item" onClick={ this.deleteMe.bind(this) }>Remove item</button>
        <button disabled={!isAvailable} className="button hvr-bounce-to-bottom menu-item" onClick={ this.addToOrder.bind(this) }>{ buttonText }</button>
      </div>
    )
  }
}

export default connect(null, { deleteItem, addToOrder })(Item)

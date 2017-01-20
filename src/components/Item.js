import React, { Component } from 'react'

class Item extends Component {
  render() {
    const { name, image, description, price, available } = this.props

    return (
      <div className="inventory-item">
        <p className="subtitle">{ name }</p>
        <p>{ description}</p>
        <p>${ price }</p>
        <button className="button hvr-bounce-to-bottom">Remove item</button>
      </div>
    )
  }
}

export default Item

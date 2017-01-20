import React, { Component } from 'react'

class Item extends Component {
  render() {
    const { name, image, description, price, available } = this.props

    return (
      <div className="inventory-item">
        <p>{ name } - { price } - { description}</p>
      </div>
    )
  }
}

export default Item

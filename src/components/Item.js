import React, { Component } from 'react'

class Item extends Component {
  render() {
    const { name, price } = this.props

    return (
      <div className="inventory-item">
        { name } - { price }
      </div>
    )
  }
}

export default Item

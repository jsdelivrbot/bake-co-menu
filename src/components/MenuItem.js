import React, { Component } from 'react'
import { connect } from 'react-redux'
import addToOrder from '../actions/add-to-order'

class MenuItem extends Component {

  addToOrder() {
    const { name, addToOrder } = this.props
    addToOrder(name)
  }

  render() {
    const { name, image, description, price, available, order } = this.props
    var isAvailable = (this.props.available === true )
    var buttonText = (isAvailable ? 'Add To Order' : 'Sold Out!');
    var buttonClass = (isAvailable ? 'button hvr-bounce-to-bottom' : 'button')

    return (
      <div className="item">
        <h6 className="subtitle">{ name }</h6>
        <img src={ image } className="menu-image" />
        <p>{ description }</p>
        <p>$&nbsp;{ price }</p>
      <button
        disabled={!isAvailable}
        className={ buttonClass }
        onClick={ this.addToOrder.bind(this) }>
          { buttonText }
      </button>
      </div>
    )
  }
}

export default connect(null, { addToOrder })(MenuItem)

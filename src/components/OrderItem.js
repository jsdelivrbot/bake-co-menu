import React, { Component } from 'react'
import { connect } from 'react-redux'
import deleteFromOrder from '../actions/delete-from-order'

class OrderItem extends Component {

  deleteFromOrder() {
    const { name, deleteFromOrder } = this.props
    deleteFromOrder(name)
  }

  render() {
    const { name, image, description, price, available, order } = this.props

    return (
      <div className="order-item">
        <button onClick={ this.deleteFromOrder.bind(this) } className="button-delete hvr-bounce-to-bottom">x</button>
        <span>{ order }</span> <span>{ name }</span>
        <span className="float-right">$ { ( price * order).toFixed(2) } </span>
      </div>
    )
  }
}

export default connect(null, { deleteFromOrder })(OrderItem)

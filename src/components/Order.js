import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import addToOrder from '../actions/add-to-order'

class Order extends Component {
  renderPrice() {
    console.log('price!')
  }

  render() {
    return (
      <div className="app-list-item">
        <h3 className="title">Your Order</h3>
        { this.props.items.map((item, i) => {
          if (item.order > 0) {
            return (
              <li { ...item } key={ i } className="order-item">
                <span>{ item.order }</span> <span>{ item.name }</span>
                <span className="float-right">$ { (item.price * item.order).toFixed(2) } </span>
              </li>
            )}
          }
        )}
        <p>Total: { this.renderPrice() }</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps, { addToOrder })(Order)

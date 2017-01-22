import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import addToOrder from '../actions/add-to-order'

class Order extends Component {

  render() {
    return (
      <div className="app-list-item">
        <h3 className="title">Order</h3>
        { this.props.items.map((item, i) => {
          if (item.order > 0) {
            return (
              <li { ...item } key={ i } className="order-item">
                { item.name } { item.order }
              </li>
            )}
          }
        )}
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

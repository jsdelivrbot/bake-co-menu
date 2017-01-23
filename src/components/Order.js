import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderItem from './OrderItem'

class Order extends Component {
  renderPrice() {
    // console.log('price!')
  }

  render() {
    return (
      <div className="app-list-item">
        <h3 className="title">Your Order</h3>
        { this.props.items.map((item, i) => {
          if (item.order > 0) {
            return (
              <OrderItem { ...item } key={ i } />
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

export default connect(mapStateToProps)(Order)

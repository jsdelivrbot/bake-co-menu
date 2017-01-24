import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderItem from './OrderItem'

class Order extends Component {
  orderAmount() {
    var totalOrder = 0
    var items = this.props.items

    for(var i = 0; i < items.length; i++ ) {
      var itemOrder = items[i].order
      totalOrder = totalOrder + itemOrder
    }
    if (totalOrder === 0) {
      return <p className="alert">Please place your order.</p>
    }
  }

  renderPrice() {
    var totalCost = 0;
    var items = this.props.items

    // Add each item cost to the totalCost
    for(var i = 0; i < items.length; i++ ) {
    	var itemCost = items[i].price * items[i].order
    	totalCost = totalCost + itemCost
    }
    return (totalCost).toFixed(2)
  }

  render() {
    return (
      <div className="app-list-item order">
        <h3 className="title">Your Order</h3>
        { this.props.items.map((item, i) => {
          if (item.order > 0) {
            return (
              <OrderItem { ...item } key={ i } />
            )}
          }
        )}

        {this.orderAmount()}
        <div className="total-price">
          <span>Total: </span><span className="float-right">$ { this.renderPrice() }</span>
        </div>
      </div>
    )
  }
}

// TODO: refactor this whole component code!
// Maybe it's better to have an order reducer instead of filtering all the items in this component...
// Otherwise this component has too much code repeating for mapping the items and stuff

function mapStateToProps(state) {
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps)(Order)

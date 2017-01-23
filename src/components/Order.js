import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderItem from './OrderItem'

class Order extends Component {
  renderPrice() {
    var totalCost = 0;
    var items = this.props.items

    // Add each item cost to the totalCost
    for(var i = 0; i < items.length; i++ ) {
    	var itemCost = items[i].price * items[i].order;
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
        <div className="total-price">
          <span>Total: </span><span className="float-right">$ { this.renderPrice() }</span>
        </div>
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

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Item from './Item'

class Inventory extends Component {
  render() {
    return (
      <div className="app-list-item">
        <h3>Inventory</h3>
        { this.props.items.map((item, i) => <Item { ...item } key={ i } /> )}
      </div>
    )
  }
}

function mapStateToProps({ items }) {
  return (
    { items }
  )
}

export default connect(mapStateToProps)(Inventory)

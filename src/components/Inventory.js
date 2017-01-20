import React, { Component } from 'react'
import { connect } from 'react-redux'

class Inventory extends Component {
  renderItems() {
    return this.props.items.map((item) => {
      return (
        <div key={ item.name }>
          { item.name }
        </div>
      )
    })
  }

  render() {
    return (
      <div className="app-list-item">
        <h3>Inventory</h3>
        { this.renderItems() }
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

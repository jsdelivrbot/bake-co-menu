import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import ItemForm from './ItemForm'

class Inventory extends Component {
  render() {
    return (
      <div className="app-list-item">
        <h3>Inventory</h3>
        { this.props.items.map((item, i) => <Item { ...item } key={ i } /> )}

        <ItemForm />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps)(Inventory)

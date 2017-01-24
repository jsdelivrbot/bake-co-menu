import React, { Component } from 'react'
import { connect } from 'react-redux'
import InventoryItem from './InventoryItem'
import ItemForm from './ItemForm'
import loadSamples from '../actions/load-samples'

class Inventory extends Component {

  render() {
    return (
      <div className="app-list-item inventory">
        <h3 className="title">Inventory</h3>
        { this.props.items.map((item, i) =>
          <InventoryItem { ...item } key={ i } /> )
        }
        <ItemForm />
        <hr />
        <button
          className="button hvr-bounce-to-bottom inv-item"
          onClick={ this.props.loadSamples }>
          Load Sample Items
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps, { loadSamples })(Inventory)

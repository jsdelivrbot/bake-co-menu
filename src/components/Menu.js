import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'

class Menu extends Component {
  render() {
    return (
      <div className="app-list-item menu">
        <h3 className="title">Menu</h3>
        { this.props.items.map((item, i) => <Item { ...item } key={ i } />  )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps)(Menu)

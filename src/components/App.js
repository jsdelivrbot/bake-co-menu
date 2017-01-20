import React, { Component } from 'react'
import Menu from './Menu'
import Order from './Order'
import Inventory from './Inventory'

class App extends Component {
  render() {
    return (
      <div className="app-list">
        <Menu />
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App

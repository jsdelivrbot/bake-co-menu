import React, { Component } from 'react'
import Menu from './Menu'
import Order from './Order'
import Inventory from './Inventory'

class App extends Component {
  render() {
    return (
      <div>
        <div className="brand">
          <h1>Bake & Code</h1>
          <p>Online Bakery Menu</p>
        </div>
        <div  className="app-list">
          <Menu />
          <Order />
          <Inventory />
        </div>
      </div>
    )
  }
}

export default App

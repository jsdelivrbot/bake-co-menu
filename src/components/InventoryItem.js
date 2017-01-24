import React, { Component } from 'react'
import { connect } from 'react-redux'
import deleteItem from '../actions/delete-item'
import addToOrder from '../actions/add-to-order'
import editItem from '../actions/edit-item'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = { description: this.props.description }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({ description: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault()
    const { name } = this.props


    // const { description } = this.props
    const item = {
      name,
      description: this.state.description
    }

    this.props.editItem(item)
  }

  addToOrder() {
    const { name, addToOrder } = this.props
    addToOrder(name)
  }

  deleteMe() {
    const { name, deleteItem } = this.props
    deleteItem(name)
  }

  render() {
    const { name, image, description, price, available, order } = this.props

    return (
      <div className="item">
        <h6 className="subtitle">{ name }</h6>
        <form onSubmit={ this.onFormSubmit }>
          <input value={ this.state.description } onChange={ this.onInputChange }/>
          <button type="submit" className="btn btn-secondary">modify</button>
        </form>
        <p>$ { price }</p>
        {/* <p>${ (price).toFixed(2) }</p> */}
        <button
          className="button hvr-bounce-to-bottom button-inv"
          onClick={ this.deleteMe.bind(this) }>
          Remove
        </button>

        {/* DUMMY BUTTON FOR NOW */}
        <button
          className="button hvr-bounce-to-bottom button-inv float-right">
          Edit
        </button>
      </div>
    )
  }
}

export default connect(null, { deleteItem, addToOrder, editItem })(Item)

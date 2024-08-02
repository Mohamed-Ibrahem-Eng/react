import React, { Component } from 'react'

export class Cart extends Component {
  render() {
    return (
      <div>
        <h2>my name is {this.props.name}</h2>
        <h2>my age is {this.props.age}</h2>
      </div>
    )
  }
}

export default Cart
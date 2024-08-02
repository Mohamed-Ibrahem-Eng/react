import React, { Component } from 'react'

export class Cars extends Component {
  render() {
    return (
      <div>
        <h1>the kind of car is {this.props.cars}</h1>
        <h1>the color of car is {this.props.color}</h1>
      </div>
    )
  }
}

export default Cars
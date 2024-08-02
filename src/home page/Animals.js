import React, { Component } from 'react'

export class Animals extends Component {
  render() {
    return (
      <div>
        <h1>the animals is{this.props.name}</h1>
        <h1>color the animals is{this.props.color}</h1>
      </div>
    )
  }
}

export default Animals
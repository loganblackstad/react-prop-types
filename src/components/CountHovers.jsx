import React, { Component } from 'react'

export class CountHovers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  resetCount = () => {
    this.setState(prevState => {
      return { count: 0 }
    })
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <button onMouseOver={this.incrementCount} style={{ width: '150px', marginBottom: '5px' }}>Hovered {count} times</button>
        <button onClick={this.resetCount} style={{ width: '150px', marginBottom: '5px' }}>Reset Hover Counter</button>
      </div>
    )
  }
}

export default CountHovers

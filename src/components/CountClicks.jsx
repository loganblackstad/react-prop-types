import React, { Component } from 'react'

export class CountClicks extends Component {
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
        <button onClick={this.incrementCount} style={{ width: '150px', marginBottom: '5px' }}>Clicked {count} times</button>
        <button onClick={this.resetCount} style={{ width: '150px' }}>Reset Click Counter</button>
      </div>
    )
  }
}

export default CountClicks

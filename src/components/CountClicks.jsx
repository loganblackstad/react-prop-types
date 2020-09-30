import React, { Component } from 'react'
import UpdatedComponent from './withHOC.jsx'

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
        <button onClick={this.incrementCount} style={{ width: '170px', marginBottom: '5px' }}>{this.props.name} clicked {count} times</button>
        <button onClick={this.resetCount} style={{ width: '170px', marginBottom: '15px' }}>Reset Click Counter</button>
      </div>
    )
  }
}

export default UpdatedComponent(CountClicks)

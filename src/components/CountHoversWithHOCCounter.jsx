import React, { Component } from 'react'
import withHOCCounter from './withHOCCounter'

class CountHoversWithHOCCounter extends Component {

  render() {
    const { count, incrementCount } = this.props
    return (
      <div>
        <button onMouseOver={incrementCount} style={{ width: '170px', marginBottom: '5px' }}>Hovered {count} times</button>
      </div>
    )
  }
}

export default withHOCCounter(CountHoversWithHOCCounter, 10)

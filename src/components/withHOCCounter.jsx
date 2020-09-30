import React, { Component } from 'react'


const withHOCCounter = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        count: 0
      }
    }

    // incrementCount = () => {
    //   updatedCount = { ...this.state.count }
    //   this.setState(prevState => {
    //     return { count: prevState.count + incrementNumber }
    //   })
    // }

    incrementCount = () => {
      let { count } = this.state
      const updatedCount = count + 1
      this.setState({ count: updatedCount })
    }

    render() {
      console.log('HOC', this.props.name)
      return <OriginalComponent
        count={this.state.count}
        incrementCount={this.incrementCount}
        {...this.props.name} />
    }
  }

  return NewComponent
}

export default withHOCCounter
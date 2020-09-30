import React from 'react'


// the name attr is added to props of the OriginalComponent

const UpdatedComponent = OriginalComponent => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComponent name='Logan' />
    }
  }
  return NewComponent
}

export default UpdatedComponent

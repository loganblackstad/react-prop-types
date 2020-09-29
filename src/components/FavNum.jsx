import React from 'react';
import PropTypes from "prop-types";


export class FavNum extends React.Component {
  render() {
    console.log(this.props);
    return <h1>Hey! {this.props.name}'s favorite number is {this.props.num}</h1>
  }
}

// type checking with prop-types 
FavNum.propTypes = {
  num: PropTypes.number,
  name: PropTypes.string.isRequired
};

// set default props for component FavNum
FavNum.defaultProps = {
  num: 7,
  name: '{Name}'
};



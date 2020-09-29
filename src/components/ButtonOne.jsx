import React from 'react';
// import stylesWrapper from './../HOC/stylesWrapper';
import ButtonOneStyles from "../styles/ButtonOneStyles";

const b1s = ButtonOneStyles;

const ButtonOne = (props) => {
  console.log(props);
  return (
    <div>
      <button style={props.styles}>I am ButtonOne</button>
      {/* inline styles over-write imported styles */}
      <button style={b1s.default} style={{ color: 'red' }}>I am ButtonOne</button>
      <button style={b1s.default}>I am ButtonOne</button>
      <button>I am ButtonOne</button>
    </div>
  )
}

// export default stylesWrapper(ButtonOne);
export default ButtonOne;


/*
//////////////////////
<ButtonOne disable />


//////////////////////
const ButtonOne = (props) => {
  return (
    <button style={props.styles}>I am ButtonOne</button>
  )
}
export default stylesWrapper(ButtonOne);


//////////////////////

import commonStyles from './../styles/commonStyles';

const translateProps = (props) => {
  let _styles = { ...commonStyles.default }
  if (props.disable) {
    _styles = { ..._styles, ...commonStyles.disable };
  }
  const newProps = { ...props, styles: _styles }
  return newProps;
}


export default (WrappedComponent) => {
  return function wrappedRender(args) {
    return WrappedComponent(translateProps(args));
  }
}

*/
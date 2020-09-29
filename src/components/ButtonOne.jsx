import React from 'react';
// import stylesWrapper from './../HOC/stylesWrapper';
import ButtonOneStyles from "../styles/ButtonOneStyles";

// const ButtonOneStyles = {

//   default: {
//     backgroundColor: '#737373',
//     color: '#eae8e8',
//     padding: '10px'
//   },

//   disabled: {
//     backgroundColor: '#9c9c9c',
//     color: '#c7c6c6',
//   }

// }


const ButtonOne = (props) => {
  return (
    <div>
      <button style={props.styles}>I am ButtonOne</button>
      <button style={ButtonOneStyles.disabled}>I am ButtonOne</button>
      <button>I am ButtonOne</button>
    </div>
  )
}

// export default stylesWrapper(ButtonOne);
export default ButtonOne;
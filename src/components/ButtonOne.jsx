import React from 'react';
import ButtonOneStyles from "../styles/ButtonOneStyles";

const b1s = ButtonOneStyles;

const OtherStyle = {
  other: {
    backgroundColor: '#dbf0db',
    color: '#6b6a6f',
    padding: '10px',
  }
}


const ButtonOne = (props) => {
  console.log(props);
  return (

    <div style={{ textAlign: 'center' }}>

      <p>no styling: </p>
      <button style={props.styles}>I am ButtonOne</button>

      <p>imported styles: "ButtonOneStyles.default"</p>
      <button style={b1s.default}>I am ButtonOne</button>

      <p>inline styles overwrite imported styles: &nbsp;&nbsp; style = {`{{ color: 'red' }}`}</p>
      {/* inline styles over-write imported styles */}
      <button style={b1s.default} style={{ color: 'red' }}>I am ButtonOne</button>

      <p>styling defined in the same file: "OtherStyle.other"</p>
      <button style={OtherStyle.other}>I am ButtonOne</button>

    </div>
  )
}

export default ButtonOne;

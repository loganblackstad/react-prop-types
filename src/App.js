import React from "react";

import Box from "./components/Box";
import Card from "./components/Card";
import { FavNum } from "./components/FavNum";
import ButtonOne from "./components/ButtonOne";

// plain css defined as css objects: cardBasic, cardDanger, cardFull
import { cardBasic, cardDanger, cardFull } from "./settings";
import "./style.css";
import ButtonOneStyles from "./styles/ButtonOneStyles";
import mystyle from './styles/mystyle.module.css';


class StyledClassCmp extends React.Component {
  render() {
    return <h2 className={mystyle.bigblue}>{`The component must import css from <name>.module.css`}</h2>;
  }
}


function App() {

  return (
    <div>
      <Box className="main">
        <Card {...cardBasic} />
        <Box padding="1" />
        <Card {...cardDanger} />
        <Box padding="1" />
        <Card {...cardFull} />
      </Box>
      <FavNum name="Joe" num={13} />
      <ButtonOne />
      <br />
      <p style={{ textAlign: 'center' }}>{`add css styling from ./styles/mystyle.module.css`}</p>
      <StyledClassCmp />
    </div>
  );
}

export default App;

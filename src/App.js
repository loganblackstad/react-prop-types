import React from "react";

import Box from "./components/Box";
import Card from "./components/Card";
import { FavNum } from "./components/FavNum";
import ButtonOne from "./components/ButtonOne";
import CountClicks from "./components/CountClicks";
import CountHovers from "./components/CountHovers";
import CountClicksWithHOCCounter from "./components/CountClicksWithHOCCounter";
import CountHoversWithHOCCounter from "./components/CountHoversWithHOCCounter";



// plain css defined as css objects: cardBasic, cardDanger, cardFull
import { cardBasic, cardDanger, cardFull } from "./settings";
import "./style.css";
import ButtonOneStyles from "./styles/ButtonOneStyles";
import mystyle from './styles/mystyle.module.css';
import './styles/mysass.scss';

class StyledClassCmp extends React.Component {
  render() {
    return <h2 className={mystyle.bigblue}>{`The component must import css from <name>.module.css`}</h2>;
  }
}

class MySassStyleCmp extends React.Component {
  render() {
    return (
      <div>
        <br />
        <p style={{ textAlign: 'center' }}>{`add css styling from ./styles/mssass.scss`}</p>
        <h3>This is styled with Scss</h3>
      </div>
    );
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
      <MySassStyleCmp />

      {/* <CountButton /> */}
      <hr />
      <br />
      <CountClicks />
      <CountHovers />
      <br />
      <hr />
      <br />
      <p style={{ textAlign: 'center' }}>{`HOC practice with UpdatedComponent (aka 'withHOC'), NewComponent, and OriginalComponent`}</p>
      {/* <CountClicksWithHOCCounter /> */}
      <CountHoversWithHOCCounter />
      <br />

    </div>
  );
}

export default App;

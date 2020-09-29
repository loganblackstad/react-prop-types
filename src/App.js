import React from "react";

import Box from "./components/Box";
import Card from "./components/Card";
import { FavNum } from "./components/FavNum";
import ButtonOne from "./components/ButtonOne";

// plain css defined as css objects: cardBasic, cardDanger, cardFull
import { cardBasic, cardDanger, cardFull } from "./settings";
import "./style.css";

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
      <ButtonOne style={{ color: 'red' }} />
    </div>
  );
}

export default App;

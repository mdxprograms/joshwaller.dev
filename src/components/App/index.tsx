import React from "react";

import Flex from "../Flex";
import Card from "../Card";

const App = () => (
  <div id="app">
    <Flex row wrap justifyCenter alignCenter>
      <Card />
      <Card />
      <Card />
    </Flex>
  </div>
);

export default App;

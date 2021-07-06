import React from "react";

import Container from "../Container";
import Flex from "../Flex";
import Card from "../Card";

const App = () => (
  <Container bgDark>
    <Flex row wrap justifyCenter alignCenter>
      <Card />
      <Card />
      <Card />
    </Flex>
  </Container>
);

export default App;

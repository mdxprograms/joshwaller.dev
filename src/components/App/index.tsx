import Container from "../Container";
import Flex from "../Flex";
import Sidenav from "../Sidenav";
import Card from "../Card";

const App = () => (
  <>
    <Sidenav />
    <Container bgDark>
      <Flex row wrap justifyCenter alignCenter>
        <Card />
        <Card />
        <Card />
      </Flex>
    </Container>
  </>
);

export default App;

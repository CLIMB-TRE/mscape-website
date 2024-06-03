import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container fluid>
        <Navbar.Brand>🧬 mSCAPE</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
function App() {
  return (
    <form className="Onyx" autoComplete="off">
      <Container fluid>
        <Stack gap={3}>
          <Row>
            <NavbarComponent />
          </Row>
        </Stack>
      </Container>
    </form>
  );
}

export default App;

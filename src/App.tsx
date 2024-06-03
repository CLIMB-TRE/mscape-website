import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="background">
      <Container fluid>
        <Navbar.Brand>
          <Image src="src/assets/mSCAPE.png" alt="mSCAPE.png" />
        </Navbar.Brand>
        <Container>
          <Stack direction="horizontal" gap={3} className="float-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Stack>
        </Container>
      </Container>
    </Navbar>
  );
}
function App() {
  return (
    <form className="mSCAPE" autoComplete="off">
      <Stack gap={3}>
        <Stack>
          <NavbarComponent />
        </Stack>
        <Stack gap={3}>
          <Container>
            <Card>
              <Card.Header>
                <h1>mSCAPE</h1>
                <h3>
                  metagenomics Surveillance Collaboration and Analysis Programme
                </h3>
              </Card.Header>
              <Card.Body>
                <h3>UK Health Security Agency Strategy</h3>
                <p>
                  In January 2024, the UK Health Security Agency (UKHSA)
                  published its Pathogen Genomics Strategy, which outlines our
                  investment in pathogen genomics to prepare for and respond to
                  infectious public health threats. To deliver the strategy we
                  will integrate genomics into every aspect of infectious
                  disease control, prioritising 3 areas where we know that
                  pathogen genomics can have a significant public health impact:
                </p>
                <ul>
                  <li>antimicrobial resistance</li>
                  <li>emerging infections and biosecurity</li>
                  <li>
                    vaccine-preventable diseases and elimination programmes
                  </li>
                </ul>
                <p>
                  The Pathogen Genomics strategy sets out how UKHSA will
                  maximise the benefit of pathogen genomics for public health
                  over the next 5 years, through a single co-ordinated programme
                  in collaboration with the NHS, academic partners, industry and
                  devolved administrations.
                </p>
                <h3>The mSCAPE Programme</h3>
                <p>
                  mSCAPE has been established as a key programme of work to
                  support the emerging infections and biosecurity area of the
                  strategy. It is a collaborative research project with
                  principal investigators Dr Meera Chand, UKHSA Deputy director
                  for emerging infections and clinical lead for the UKHSA
                  genomics programme, and Professor Nicholas Loman [XXXXX]. The
                  study protocol was approved by the Research Ethics and
                  Governance Group (REGG) on XX. It aims to link the network of
                  clinical and research laboratories undertaking or developing
                  pathogen-agnostic diagnostics into a single pilot for
                  pathogen-agnostic surveillance. Pathogen-agnostic clinical
                  surveillance can improve biosecurity through the detection of
                  novel, emerging and unexpected infection threats. Whilst there
                  are numerous examples of pathogen detection and, to a lesser
                  extent, discovery using pathogen-agnostic techniques such as
                  metagenomic sequencing, at present there is no systematic
                  surveillance based on this approach.{" "}
                </p>
                <h3>Data platform, the MRC-CLIMB model</h3>
                <p>
                  The surveillance pilot network will be hosted on MRC-CLIMB is
                  a progression from the successful partnership and use of the
                  environment during the SARS-CoV-2 pandemic. [Leveraging
                  successful partnership and genomics platform..]
                </p>
              </Card.Body>
            </Card>
          </Container>
        </Stack>
      </Stack>
    </form>
  );
}

export default App;

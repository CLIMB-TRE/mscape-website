import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Header() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Image
            src="src/assets/mSCAPE.png"
            alt="mSCAPE.png"
            style={{ height: "10vh" }}
          />
        </Navbar.Brand>
        <Container>
          <Stack direction="horizontal" gap={3} className="float-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Stack>
        </Container>
      </Container>
    </Navbar>
  );
}

function Footer() {
  return (
    <Navbar bg="black" variant="dark" expand="lg" fixed="bottom">
      <Container>
        <Image
          src="src/assets/uob_light.png"
          alt="mSCAPE.png"
          style={{ height: "5vh" }}
        />
      </Container>
    </Navbar>
  );
}

function Title() {
  return (
    <Container>
      <h1>mSCAPE</h1>
      <h4 style={{ color: "grey" }}>
        metagenomics Surveillance Collaboration and Analysis Programme
      </h4>
      <hr style={{ color: "#e40046", border: "solid 2px", opacity: "1" }} />
    </Container>
  );
}

function Section(props: { title: string; children: React.ReactNode }) {
  return (
    <Container>
      <h4>{props.title}</h4>
      <p>{props.children}</p>
    </Container>
  );
}

function App() {
  return (
    <form className="mSCAPE" autoComplete="off">
      <Stack gap={2}>
        <Header />
        <Title />
        <Section title="UK Health Security Agency Strategy">
          <p>
            In January 2024, the UK Health Security Agency (UKHSA) published its{" "}
            <a href="https://assets.publishing.service.gov.uk/media/65aff68ef2718c000dfb1bd8/Pathogen_Genomics_Strategy_2024.pdf">
              Pathogen Genomics Strategy
            </a>
            , which outlines our investment in pathogen genomics to prepare for
            and respond to infectious public health threats. To deliver the
            strategy we will integrate genomics into every aspect of infectious
            disease control, prioritising 3 areas where we know that pathogen
            genomics can have a significant public health impact:
          </p>
          <ul>
            <li>
              <b>antimicrobial resistance</b>
            </li>
            <li>
              <b>emerging infections and biosecurity</b>
            </li>
            <li>
              <b>vaccine-preventable diseases and elimination programmes</b>
            </li>
          </ul>
          <p>
            The Pathogen Genomics strategy sets out how UKHSA will maximise the
            benefit of pathogen genomics for public health over the next 5
            years, through a single co-ordinated programme in collaboration with
            the NHS, academic partners, industry and devolved administrations.
          </p>
        </Section>
        <Section title="The mSCAPE Programme">
          <p>
            mSCAPE has been established as a key programme of work to support
            the <i>emerging infections and biosecurity</i> area of the strategy.
            It is a collaborative research project with principal investigators
            Dr Meera Chand, UKHSA Deputy director for emerging infections and
            clinical lead for the UKHSA genomics programme, and Professor
            Nicholas Loman [XXXXX]. The study protocol was approved by the
            Research Ethics and Governance Group (REGG) on XX. It aims to link
            the network of clinical and research laboratories undertaking or
            developing pathogen-agnostic diagnostics into a single pilot for
            pathogen-agnostic surveillance.
          </p>{" "}
          <p>
            {" "}
            Pathogen-agnostic clinical surveillance can improve biosecurity
            through the detection of novel, emerging and unexpected infection
            threats. Whilst there are numerous examples of pathogen detection
            and, to a lesser extent, discovery using pathogen-agnostic
            techniques such as metagenomic sequencing, at present there is no
            systematic surveillance based on this approach.{" "}
          </p>
        </Section>
        <Section title="Data platform, the MRC-CLIMB model">
          <p>
            The surveillance pilot network will be hosted on MRC-CLIMB is a
            progression from the successful partnership and use of the
            environment during the SARS-CoV-2 pandemic. [Leveraging successful
            partnership and genomics platform..]
          </p>
        </Section>
        <Footer />
      </Stack>
    </form>
  );
}

export default App;

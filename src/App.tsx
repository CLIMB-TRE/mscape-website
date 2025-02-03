import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Logos() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <Image src="src/assets/ukhsa.png" alt="UKHSA Logo" fluid />
        </Col>
        <Col>
          <Image
            src="src/assets/uob.jpg"
            alt="University of Birmingham Logo"
            fluid
          />
        </Col>
        <Col>
          <Image
            src="src/assets/uoe.png"
            alt="University of Edinburgh Logo"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
}

function Title() {
  return (
    <Container>
      <h1>mSCAPE</h1>
      <h4 className="text-muted">
        The Metagenomics Surveillance Collaboration and Analysis Programme
      </h4>
    </Container>
  );
}

function Section(props: { title: string; children: React.ReactNode }) {
  return (
    <Container>
      <h4>{props.title}</h4>
      <hr style={{ color: "#e40046", border: "solid 2px", opacity: "1" }} />
      <p>{props.children}</p>
    </Container>
  );
}

function PressRelease(props: { date: string; title: string; url: string }) {
  return (
    <Container>
      <h6>
        <a href={props.url}>{props.title}</a>
      </h6>
      <span className="text-muted">{props.date}</span>
    </Container>
  );
}

function App() {
  return (
    <Container className="mSCAPE py-5 w-50">
      <Stack gap={3}>
        <Logos />
        <Title />
        <Section title="About">
          <p>
            The Metagenomics Surveillance Collaboration and Analysis Programme
            (mSCAPE), is one of the key initiatives underpinning the delivery of
            the UKHSA{" "}
            <a href="https://assets.publishing.service.gov.uk/media/65aff68ef2718c000dfb1bd8/Pathogen_Genomics_Strategy_2024.pdf">
              Pathogen Genomics Strategy
            </a>
            , and has been in development since March 2022.
          </p>
          <p>
            Led by UKHSA, it is a collaborative initiative involving a
            consortium of NHS and academic partners including the University of
            Birmingham, University of Edinburgh, and the NHS genomic network of
            excellence for Severe presentation of infectious disease, led by
            Guys and St. Thomas' NHS Trust.
          </p>
          <p>
            mSCAPE is a pilot surveillance network trialling the use of
            metagenomic data for public health surveillance and pathogen
            analysis. It takes anonymous pathogen data from multiple labs that
            are using metagenomics for diagnosis - including those in the NHS -
            and analyses it at a national level to monitor trends, epidemiology
            and pathogen emergence at speed.
          </p>
          <p>
            Pathogen-agnostic clinical surveillance can improve biosecurity
            through the detection of novel, emerging and unexpected infection
            threats. Whilst there are numerous examples of pathogen detection
            and, to a lesser extent, discovery using pathogen-agnostic
            techniques such as metagenomic sequencing, at present there is no
            systematic surveillance based on this approach.
          </p>
          <p>
            The principal investigators are Dr Meera Chand, UKHSA Deputy
            director for emerging infections and clinical lead for the UKHSA
            genomics programme, and Professor Nicholas Loman from the University
            of Birmingham, academic Lead for the CLIMB-BIG-DATA project.
          </p>
        </Section>
        <Section title="Objectives">
          <p>By the end of the pilot, mSCAPE will have:</p>
          <ListGroup numbered>
            <ListGroup.Item>
              <b>Established a data sharing platform</b> (mSCAPE.CLIMB) on
              MRC-CLIMB Data Infrastructure with safe anonymisation, information
              governance and data management suitable for metagenomic data,
              including any trusted research environment function.
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Trialled the feasibility of a networked surveillance system</b>{" "}
              for generating and monitoring timely and actionable pathogen
              agnostic data.
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Evaluated the performance characteristics</b> of such a system
              by comparison to conventional detections and trends identified
              through existing surveillance.
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Exercised the system using artificial constructs</b> of novel
              pathogens to determine sensitivity and specificity of approach on
              a background of normal cases.
            </ListGroup.Item>
            <ListGroup.Item>
              <b>
                Designed sampling frameworks for pathogen-agnostic surveillance
              </b>{" "}
              of respiratory, emerging, and imported infections.
            </ListGroup.Item>
          </ListGroup>
        </Section>
        <Section title="Press Releases">
          <ListGroup>
            <ListGroup.Item>
              <PressRelease
                date="30th January 2025"
                title="UKHSA launches new metagenomic surveillance for health security"
                url="https://www.gov.uk/government/news/ukhsa-launches-new-metagenomic-surveillance-for-health-security"
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <PressRelease
                date="5th November 2024"
                title="UK to create world-first 'early warning system' for pandemics"
                url="https://www.gov.uk/government/news/uk-to-create-world-first-early-warning-system-for-pandemics"
              />
            </ListGroup.Item>
          </ListGroup>
        </Section>
      </Stack>
    </Container>
  );
}

export default App;

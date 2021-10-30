import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'


/** Landing Page for site */
export default function Home() {
  return (
    <>
      <Head>
        <title>The Gamer Place</title>
        <meta name="A hangout platform for gamers" content="The Gamer Place" />
        <link rel="icon" href="/gamepad.png" />
      </Head>
      <Container fluid className="d-flex flex-column justify-content-center align-items-center" style={{ paddingTop: "8vmin", paddingBottom: "5vmin", backgroundColor: "#001220" }}>
        <Row style={{ color: "white", fontSize: "8vmin", textAlign: "center" }}>The Gamer Place</Row>
      </Container>
      <div className="spacer layer1">
        <Container className="d-flex flex-column justify-content-center align-items-center" style={{ paddingTop: "35vmin", paddingBottom: "2.5vmin" }}>
          <Row style={{ color: "white", fontSize: "5vmin", textAlign: "center" }}>A Hub for All Gamers</Row>
        </Container>
      </div>
      <div className="spacer layer2">
      <Container>
        <Row>
          <Col sm={5}>
            <Image src="/controller.png" width="100%" className="img-responsive" style={{filter: "invert(1)", paddingRight: "10vmin"}}></Image>
          </Col>
          <Col sm={7} style={{ fontSize: "2.5vmin", paddingLeft: "3vmin", paddingRight: "3vmin", paddingTop: "3vmin", fontFamily: "helvetica", textAlign: "center" }} className="d-flex flex-column justify-content-center align-items-center">
            <div style={{ paddingBottom: "10vmin", color: "white" }}>The Gamer Place is a community of people who... well play video games! Feel free to talk about anything in our forums and check out some of our game reviews.</div>
            <Link href="/login">
              <Button variant="light" size="lg" style={{ width: "20vmin" }}>Login</Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container style={{ paddingBottom: "10vmin" }}>
        <Row style={{ paddingTop: "15vmin" }}>
          <Col sm={3} style={{ paddingTop: "10vmin", paddingBottom: "8vmin", fontSize: "3vmin", color: "white", textShadow: "" }} className="d-flex flex-column justify-content-center align-items-center">
            Our Supporters:
          </Col>
          <Col sm={3} className="d-flex flex-column justify-content-center align-items-center">
            <Image width="100%" className="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/f/fb/G-Fuel_Logo.png"></Image>
          </Col>
          <Col sm={3} className="d-flex flex-column justify-content-center align-items-center">
            <Image width="100%" className="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mountain_Dew_logo.svg/1200px-Mountain_Dew_logo.svg.png"></Image>
          </Col>
          <Col sm={3} className="d-flex flex-column justify-content-center align-items-center">
            <Image width="100%" className="img-responsive" src="https://1000logos.net/wp-content/uploads/2020/07/Doritos-Logo.png"></Image>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  )
}

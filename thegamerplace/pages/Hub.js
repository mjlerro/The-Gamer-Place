import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Head from "next/head"
import NavBar from "../components/NavBar"

/** Hub/home screen for the site */
const Hub = () => {
    return (
        <>
            <Head>
                <title>TGP | Hub</title>
                <meta name="Hub" content="Hub" />
                <link rel="icon" href="/gamepad.png" />
            </Head>
            <NavBar></NavBar>
            <Container>
                <Row>
                    This is the Hub
                </Row>
            </Container>
        </>
    )
}

export default Hub

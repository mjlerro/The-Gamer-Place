import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Head from "next/head"
import NavBar from "../components/NavBar"

/** Discussion forum page */
const Forum = () => {
    return (
        <>
            <Head>
                <title>TGP | Forum</title>
                <meta name="Forum" content="Forum" />
                <link rel="icon" href="/gamepad.png" />
            </Head>
            <NavBar></NavBar>
            <Container>
                <Row>
                    This is the Forum
                </Row>
            </Container>
        </>
    )
}

export default Forum

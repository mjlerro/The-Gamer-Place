import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Head from "next/head"
import NavBar from "../components/NavBar"

const Reviews = () => {
    return (
        <>
            <Head>
                <title>TGP | Reviews</title>
                <meta name="Reviews" content="Reviews" />
                <link rel="icon" href="/gamepad.png" />
            </Head>
            <NavBar></NavBar>
            <Container>
                <Row>
                    This is the Reviews Page
                </Row>
            </Container>
        </>
    )
}

export default Reviews

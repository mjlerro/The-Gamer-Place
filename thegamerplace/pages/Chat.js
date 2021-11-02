import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Link from "next/link"
import Head from "next/head"
import NavBar from "../components/NavBar"

const Chat = () => {
    return (
        <>
            <Head>
                <title>TGP | Chat Room</title>
                <meta name="Chat" content="Chat" />
                <link rel="icon" href="/gamepad.png" />
            </Head>
            <NavBar></NavBar>
            <Container className="d-flex justify-content-center flex-column">
                <Row>
                    Chatroom
                </Row>
            </Container>
        </>
    )
}

export default Chat

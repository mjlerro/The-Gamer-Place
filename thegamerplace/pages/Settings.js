import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Link from "next/link"
import Head from "next/head"
import NavBar from "../components/NavBar"
import Button from "react-bootstrap/Button"

const Settings = () => {
    return (
        <>
            <Head>
                <title>TGP | Settings</title>
                <meta name="Settings" content="Settings" />
                <link rel="icon" href="/gamepad.png" />
            </Head>
            <NavBar></NavBar>
            <Container className="d-flex justify-content-center flex-column">
                <Link href="/">
                    <Button className="bg-dark text-white mb-3" style={{ alignSelf: "center", border: "none", width: "21vmin", margin:"15vmin" }} type="submit">
                        Logout
                    </Button>
                </Link>
            </Container>
        </>
    )
}

export default Settings

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

/** Navigation bar at the top of the gamer place portal */
const NavBar = () => {
    return (
        <>
            <Navbar bg="dark">
                <Container>

                    <Navbar.Brand className="text-white" style={{ fontSize: "30px" }}>
                        <Image src="../gamepad.png" width="40vmin" style={{ filter: "invert(1)", marginRight: "1vmin" }}></Image>
                        The Gamer Place
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Hub" className="text-white">Home</Nav.Link>
                            <Nav.Link href="/Forum" className="text-white">Forum</Nav.Link>
                            <Nav.Link href="/Chat" className="text-white">Chat Room</Nav.Link>
                            <Nav.Link href="/Reviews" className="text-white">Reviews</Nav.Link>
                            <Nav.Link href="/Settings" className="text-white">Settings</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;


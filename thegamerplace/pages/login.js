import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Head from 'next/head'
import Link from 'next/link'

/** Login screen */
export default function login() {
    return (
        <>
            <Head>
                <title>Login/Signup</title>
                <meta name="Login" content="Login" />
                <link rel="icon" href="/gamepad.png" />
            </Head>
            <div className="d-flex justify-content-center flex-column" style={{ paddingTop: "15vmin" }}>
                <h1 className="text-center">Login</h1>
                <Form className="d-flex justify-content-center flex-column" style={{ paddingTop: "2vmin" }} >
                    <Form.Group className="mb-3" style={{ alignSelf: "center" }} controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ alignSelf: "center", paddingBottom: "2vmin" }} controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" />
                    </Form.Group>
                    <Link href="/Hub">
                        <Button className="bg-dark text-white mb-3" style={{ alignSelf: "center", border: "none", width: "21vmin" }} type="submit">
                            Submit
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button className="bg-danger text-white mb-3" style={{ alignSelf: "center", border: "none", width: "21vmin" }}>
                            Cancel
                        </Button>
                    </Link>
                    <span style={{ alignSelf: "center" }}>Need an account? <a href="/signup">Sign up here</a></span>
                </Form>
            </div>
        </>
    )
}

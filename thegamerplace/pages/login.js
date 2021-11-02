import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Head from 'next/head'
import Link from 'next/link'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './api/firebase';
import { useRouter } from 'next/router'
import React, { useState } from 'react';

/** Login screen */
export default function login() {

    const router = useRouter()

    const formSubmit = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                router.push('./Hub')
                /*updateProfile(auth.currentUser, {
                    displayName: unityId
                }).then(() => {
                    localStorage.setItem('user', JSON.stringify(auth.currentUser));
                    setCurrentUser(auth.currentUser);
                    history.push('/mypacks');
                }).catch((error) => {
                    console.log(error);
                });*/
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
            });

    }

    const [email, setEmail] = useState('');
    const handleEmail = (e) => { setEmail(e.target.value) }
    const [password, setPassword] = useState('');
    const handlePassword = (e) => { setPassword(e.target.value) }

    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="Login" content="Login" />
                <link rel="icon" href="/gamepad.png" />
            </Head>
            <div className="d-flex justify-content-center flex-column spacer2 layer3">

                <Form onSubmit={formSubmit} className="d-flex justify-content-center flex-column">
                    <h1 className="text-center" style={{ color: "white", marginBottom: "3vmin" }}>Login</h1>
                    <Form.Group className="mb-3" style={{ alignSelf: "center" }} controlId="formBasicEmail">
                        <Form.Label style={{ color: "white" }}>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" value={email} onChange={handleEmail} />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ alignSelf: "center", paddingBottom: "2vmin" }} controlId="formBasicPassword">
                        <Form.Label style={{ color: "white" }}>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" value={password} onChange={handlePassword} />
                    </Form.Group>
                    <Button className="bg-dark text-white mb-3" style={{ alignSelf: "center", border: "none", width: "21vmin" }} type="submit">
                        Submit
                    </Button>
                    <Link href="/">
                        <Button className="bg-danger text-white mb-3" style={{ alignSelf: "center", border: "none", width: "21vmin" }}>
                            Cancel
                        </Button>
                    </Link>
                    <span style={{ alignSelf: "center", color: "white" }}>Need an account? <a href="/signup" style={{ color: "white", fontWeight: "bold" }}>Sign up</a></span>
                </Form>
            </div>
        </>
    )
}

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './api/firebase';

const signup = ({ setCurrentUser }) => {

    const [username, setUsername] = useState();
    const handleUsername = (e) => { setUsername(e.target.value) }
    const [email, setEmail] = useState();
    const handleEmail = (e) => { setEmail(e.target.value) }
    const [password, setPassword] = useState();
    const handlePassword = (e) => { setPassword(e.target.value) }
    const [confirmPassword, setConfirmPassword] = useState();
    const handleConfirmPassword = (e) => { setConfirmPassword(e.target.value) }
    const router = useRouter()

    const formSubmit = e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        console.log("gets here1")
        /** Firebase creates */
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                router.push('./Hub');


                /*
                updateProfile(auth.currentUser, {
                    displayName: username
                }).then(() => {
                    // Profile updated!
                    
                    localStorage.setItem('user', JSON.stringify(auth.currentUser));
                    setCurrentUser(auth.currentUser);
                    
                }).catch((error) => {
                    // An error occurred
                    console.log(error)
                });*/
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage)
            });

    }

    return (
        <>
            <Head>
                <title>Signup</title>
                <meta name="Signup" content="Signup" />
                <link rel="icon" href="/gamepad.png" />
            </Head>
            <div className="d-flex justify-content-center flex-column spacer2 layer3">
                <h1 className="text-center" style={{ color: "white" }}>Signup</h1>
                <Form onSubmit={formSubmit} className="d-flex justify-content-center flex-column" style={{ paddingTop: "2vmin" }} >
                    <Form.Group className="mb-3" style={{ alignSelf: "center" }} controlId="formBasicUsername">
                        <Form.Label style={{ color: "white" }}>Username</Form.Label>
                        <Form.Control required type="username" placeholder="Username" value={username} onChange={handleUsername} />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ alignSelf: "center" }} controlId="formBasicEmail">
                        <Form.Label style={{ color: "white" }}>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" value={email} onChange={handleEmail} />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ alignSelf: "center" }} controlId="formBasicPassword">
                        <Form.Label style={{ color: "white" }}>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" value={password} onChange={handlePassword} />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ alignSelf: "center", paddingBottom: "2vmin" }} controlId="formBasicPassword2">
                        <Form.Label style={{ color: "white" }}>Confirm Password</Form.Label>
                        <Form.Control required type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPassword} />
                    </Form.Group>
                    <Button className="bg-dark text-white mb-3" style={{ alignSelf: "center", border: "none", width: "21vmin" }} type="submit">
                        Submit
                    </Button>
                    <Link href="/">
                        <Button className="bg-danger text-white mb-3" style={{ alignSelf: "center", border: "none", width: "21vmin" }}>
                            Cancel
                        </Button>
                    </Link>
                    <span style={{ alignSelf: "center", color: "white" }}>Already have an account? <a href="/login" style={{ color: "white", fontWeight: "bold" }}>Login</a></span>
                </Form>
            </div>
        </>
    )
}

export default signup

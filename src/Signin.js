import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import React from 'react'

export default function Signin() {
    return (
        <div>
            <Form style={{ width: "50vw", margin: "auto", padding: "20vh" }}>
                <Form.Text style={{fontSize: "30px", color: "green"}}>
                    Fake Twitter {" "} |  {" "} Please log in 
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Link to={`/messages`}>
                    <Button variant="outline-primary">LogIn</Button>
                </Link>

            </Form>
        </div>
    )
}

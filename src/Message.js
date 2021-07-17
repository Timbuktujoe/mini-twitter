import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


export default function Message ({firstName, lastName, id, timeStamp}) {


    return (
            <Card key={id} border="primary" style={{ margin: "10px" }}>
                    <Card.Header>@{firstName}_{lastName}</Card.Header>
                    <Card.Body>
                        <Card.Title>Funny Title</Card.Title>
                        <Card.Text>
                            Deep, meaningful placeholder message that can fit into 150 characters or something, idk, never used twitter lmao
                        </Card.Text>
                        <Button variant="outline-primary">Check it out</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Posted on {timeStamp}</small>
                    </Card.Footer>
                </Card>
    )
}

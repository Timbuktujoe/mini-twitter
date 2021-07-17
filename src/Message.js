import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import Card from 'react-bootstrap/Card'

export default function Message({messages}) {
const [message, setMessage] = useState(null)
const {ID} = useParams()
console.log(messages)

/*useEffect(()=>{
    url="blabk.com/messages/"+ID
    fetch(url)
    .then(res => res.json())
    .then(res => setMessage(res))
}, [])
if (message){*/
    return (
        <Card border="primary" style={{ margin: "10px" }}>
            <Card.Header >{messages[1].userID.$oid}</Card.Header>
            <Card.Body >
                
                <Card.Text>
                    {messages[1].tweet}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Posted on {messages[1].createdAt}</small>
            </Card.Footer>
        </Card>
    )
/*} else {
    return <h1>Loading...{ID}</h1>
}*/
    
}

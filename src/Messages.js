import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import data from './data'
import {BiSort} from 'react-icons/bi'
import Searchbar from './Searchbar'
import { useState } from 'react'
export default function Messages() {
    const [userData, setUserData] = useState(data)

    const handleDate =(b)=>{
        console.log(userData)
        const sortedMessages = userData.slice().sort((a, b) => a.message_createdAt > b.message_createdAt)
        setUserData(sortedMessages)
    }

    return (

        <>
            <Searchbar/>  
            <p>Sort by date <BiSort className="sorting_icon" onClick={handleDate}/></p>
            {userData.length  ? userData.map((i) =>
            
                <Card border="primary" style={{ margin: "10px" }}>
                    <Card.Header>@{i.firstName}_{i.lastName}</Card.Header>
                    <Card.Body>
                        <Card.Title>Funny Title</Card.Title>
                        <Card.Text>
                            Deep, meaningful placeholder message that can fit into 150 characters or something, idk, never used twitter lmao
                        </Card.Text>
                        <Button variant="outline-primary">Check it out</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Posted on {i.message_createdAt}</small>
                    </Card.Footer>
                </Card>
                
            ) : <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            }
        </>
    )
}
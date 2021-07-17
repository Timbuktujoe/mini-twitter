import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import {BiSort} from 'react-icons/bi'
import {useState} from 'react'

export default function Messages({userData, setUserData}) {

    const [isAscending, setIsAscending] = useState(true)
    const handleDate =(b)=>{
        console.log(userData)
        if(isAscending){
            const sortedPosts = userData.slice().sort((a, b) => 
            a.message_createdAt.split('/').reverse().join().localeCompare(b.message_createdAt.split('/').reverse().join()));
            setUserData(sortedPosts)
            setIsAscending(!isAscending)
        } else {
            const sortedPosts = userData.slice().sort((a, b) => 
            b.message_createdAt.split('/').reverse().join().localeCompare(a.message_createdAt.split('/').reverse().join()));
            setUserData(sortedPosts)
            setIsAscending(!isAscending)
        }
        // const sortedPosts = userData.slice().sort((a, b) =>
        // a.message_createdAt.split('/').reverse().join().localeCompare(b.message_createdAt.split('/').reverse().join()));
        // setUserData(sortedPosts)
    }

    return (

        <>
            <p>Sort by date <BiSort className="sorting_icon" onClick={handleDate}/></p>
            {userData.length  ? userData.map((i) =>
            
                <Card key={i.id} border="primary" style={{ margin: "10px" }}>
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
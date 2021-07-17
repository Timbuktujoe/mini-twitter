import Spinner from 'react-bootstrap/Spinner'
import { BiSort } from 'react-icons/bi'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import {useState} from 'react'

export default function Messages({userData, setUserData}) {

    const [isAscending, setIsAscending] = useState(true)
    const handleDate =(b)=>{
        console.log(userData)
        if(isAscending){
            const sortedPosts = userData.slice().sort((a, b) => 
            a.createdAt.split('/').reverse().join().localeCompare(b.createdAt.split('/').reverse().join()));
            setUserData(sortedPosts)
            setIsAscending(!isAscending)
        } else {
            const sortedPosts = userData.slice().sort((a, b) => 
            b.createdAt.split('/').reverse().join().localeCompare(a.createdAt.split('/').reverse().join()));
            setUserData(sortedPosts)
            setIsAscending(!isAscending)
        }
        // const sortedPosts = userData.slice().sort((a, b) =>
        // a.message_createdAt.split('/').reverse().join().localeCompare(b.message_createdAt.split('/').reverse().join()));
        // setUserData(sortedPosts)
    }
   
    return (
        
        <>
            <p>Sort by date <BiSort className="sorting_icon" onClick={handleDate} /></p>
            {userData.length ? userData.map((msg) =>
               <Card key={Math.random(Math.floor()*10000)} border="primary" style={{ margin: "10px" }}>
               <Card.Body >
                   <Card.Text>
                       {msg.tweet}
                   </Card.Text>
                   <Link to={`/${msg._id.$oid}`}>
                   <Button variant="outline-primary">Check it out</Button>
                   </Link>
               </Card.Body>
               <Card.Footer>
                   <small className="text-muted">Posted on {msg.createdAt}</small>
               </Card.Footer>
           </Card>
            ) : <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            }
        </>
    )
}
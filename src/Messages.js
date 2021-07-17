import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import {BiSort} from 'react-icons/bi'
import Message from "./Message"

export default function Messages({userData, setUserData}) {

    const handleDate =(b)=>{
        console.log(userData)
        const sortedPosts = userData.slice().sort((a, b) =>
        a.message_createdAt.split('/').reverse().join().localeCompare(b.message_createdAt.split('/').reverse().join()));
        setUserData(sortedPosts)
    }

    return (

        <>
            <p>Sort by date <BiSort className="sorting_icon" onClick={handleDate}/></p>
            {userData.length  ? userData.map((msg) =>
               <Message key={msg.messageID} messageID={msg.message_ID} firstName={msg.firstName} lastName={msg.lastName} id={msg.id} timeStamp={msg.message_createdAt}/>
            ) : <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            }
        </>
    )
}
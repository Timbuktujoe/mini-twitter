import Spinner from 'react-bootstrap/Spinner'
import { BiSort } from 'react-icons/bi'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react'
import Pagination from "./Pagination"


export default function Messages({ userData, setUserData }) {
    const [messages, setMessages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [articlesPerPage] = useState(10)
    const indexOfLastArticle = currentPage * articlesPerPage
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
    const currentArticles = messages.slice(indexOfFirstArticle, indexOfLastArticle)
    const [isAscending, setIsAscending] = useState(true)
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const handleDate = (b) => {
        console.log(userData)
        if (isAscending) {
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
    useEffect(() => {

        fetch(`https://crossover-minitwitter.herokuapp.com/api/tweets`, {
            method: 'get'
        })
            .then((res) => res.json())
            .then(async (data) => {
                setMessages(data)
                console.log(data[0].tweet)
            })
    }, [])
    return (

        <>
            <p>Sort by date <BiSort className="sorting_icon" onClick={handleDate} /></p>
            {messages.length ? currentArticles.map((msg) =>
                <>
                    <Card key={Math.random(Math.floor() * 10000)} border="primary" style={{ margin: "10px" }}>
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
                </>
            ) : <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            }
            <Pagination articlesPerPage={articlesPerPage} totalArticles={messages.length} paginate={paginate} />
        </>
    )
}
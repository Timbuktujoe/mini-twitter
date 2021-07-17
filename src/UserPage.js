import Card from 'react-bootstrap/Card'
import React from 'react'
import Image from 'react-bootstrap/Image'

export default function UserPage({userData, setUserData}) {
    return (
       
        <Card body className="flex-column bg-light ml-0" style={{width: "70%", height: "100%"}} >
            <Image src={userData[5].avatar} roundedCircle />
            <Card.Title > {userData[5].firstName} {userData[5].lastName}</Card.Title>
            <Card.Title >Add message below</Card.Title>
        </Card>
   
       
    )
}
import Card from 'react-bootstrap/Card'
import React from 'react'
import Image from 'react-bootstrap/Image'

export default function UserPage({userData}) {
    return (
       
        <Card body className="flex-column bg-light ml-0" style={{width: "70%", height: "100%"}} >
            <Image  src={userData[1].avatarURL} roundedCircle />
            <Card.Title> {userData[1].name.first} {userData[1].name.last}</Card.Title>
   
        </Card>
   
       
    )
}

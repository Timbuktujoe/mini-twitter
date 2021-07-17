import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {useState} from 'react'

export default function Searchbar({userData, setUserData}) {
  const [search, setSearch] = useState('')
  const handleSearch=(e)=>{
    e.preventDefault()
    setSearch(e.target.value)
    const filteredMessages = userData.filter((message) => message.firstName.includes(search))
    setUserData(filteredMessages)
    
  }
    return(
        <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search messages"
        className="mr-2"
        aria-label="Search"
        onChange={handleSearch}
      />
      <Button variant="outline-primary">Go</Button>
    </Form>
    )
}
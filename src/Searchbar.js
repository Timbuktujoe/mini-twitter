import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

export default function Searchbar() {
    return(
        <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search messages"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-primary">Go</Button>
    </Form>
    )
}
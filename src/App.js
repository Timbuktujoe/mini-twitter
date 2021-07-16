import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import data from './data'
import {useState} from 'react'
import './App.css';
import Messages from './Messages'
function App() {
  const [userData, setUserData] = useState(data)

  return (
    <div className="App">
      <Container>
        <Row md={8}>
          <Col>1 of 3</Col>
          <Col xs={12} md={6} ><Messages userData={userData} setUserData={setUserData} /></Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;

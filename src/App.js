import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css';
import Messages from './Messages'
function App() {
  return (
    <div className="App">
      <Container>
        <Row md={4}>
          <Col>1 of 3</Col>
          <Col xs={6} ><Messages /></Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;

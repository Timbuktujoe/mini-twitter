import 'bootstrap/dist/css/bootstrap.min.css'
import data from './data'
import {useState} from 'react'
import './App.css';
import Sidebar from "./Sidebar";
import { Switch, Route} from "react-router-dom"
import Messages from './Messages';
import Col from 'react-bootstrap/Col'
import Message from "./Message"

function App() {
  const [userData, setUserData] = useState(data)
 
  return (
    <div className="App">
     <Switch>
     <Route exact path="/">  <Sidebar component={<Col xs={12} md={6} ><Messages userData={userData} setUserData={setUserData} /></Col>} userData={userData} setUserData={setUserData} /> </Route>  
     <Route path="/:ID"> <Sidebar component={ <Message id={userData.messageID}/> } userData={userData} setUserData={setUserData} /> </Route>
     </Switch>
    </div>
  );
}

export default App;

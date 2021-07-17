import 'bootstrap/dist/css/bootstrap.min.css'
import users from './users'
import tweets from './tweets.json'
import {useState} from 'react'
import './App.css';
import Sidebar from "./Sidebar";
import Signin from "./Signin";
import { Switch, Route} from "react-router-dom"
import Messages from './Messages';
import Col from 'react-bootstrap/Col'
import Message from "./Message"
const userID = 5;



function App() {
  const [userData, setUserData] = useState(users)
  const [messages, setMessages] = useState(tweets)
 
  return (
    <div className="App">
     <Switch>
       <Route exact path="/"><Signin /></Route>
     <Route path="/messages">  <Sidebar component={<Col xs={12} md={6} ><Messages userData={userData} messages={messages} setUserData={setUserData} /></Col>} userData={userData} setUserData={setUserData} /> </Route>  
     <Route path="/:ID"> <Sidebar component={ <Message userData={userData} userID={userID} messages={messages}/> } userData={userData} setUserData={setUserData} /> </Route>
     </Switch>
    </div>
  );
}

export default App;
